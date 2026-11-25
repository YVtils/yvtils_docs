export const colors = {
  black: '#000000',
  dark_blue: '#0000aa',
  dark_green: '#00aa00',
  dark_aqua: '#00aaaa',
  dark_red: '#aa0000',
  dark_purple: '#aa00aa',
  gold: '#ffaa00',
  gray: '#aaaaaa',
  dark_gray: '#555555',
  blue: '#5555ff',
  green: '#55ff55',
  aqua: '#55ffff',
  red: '#ff5555',
  light_purple: '#ff55ff',
  yellow: '#ffff55',
  white: '#ffffff',
} as const

type PreviewStyle = {
  color?: string
  bold?: boolean
  italic?: boolean
  underlined?: boolean
  strikethrough?: boolean
}

export type PreviewPart = { text: string; style: PreviewStyle }

const decorations = {
  bold: 'bold',
  italic: 'italic',
  underlined: 'underlined',
  underline: 'underlined',
  strikethrough: 'strikethrough',
} as const

function getColor(name: string): string | undefined {
  if (Object.hasOwn(colors, name)) return colors[name as keyof typeof colors]
  if (/^#[0-9a-f]{6}$/.test(name)) return name
}

export function parsePreview(input: string): { parts: PreviewPart[]; unsupported: boolean } {
  const parts: PreviewPart[] = []
  const stack: { name: string; style: PreviewStyle }[] = []
  let style: PreviewStyle = {}
  let text = ''
  let unsupported = false

  const flush = () => {
    if (text) parts.push({ text, style })
    text = ''
  }

  for (let i = 0; i < input.length;) {
    if (input[i] === '\\' && (input[i + 1] === '<' || input[i + 1] === '\\')) {
      text += input[i + 1]
      i += 2
      continue
    }
    if (input[i] !== '<') {
      text += input[i]
      i++
      continue
    }
    const end = input.indexOf('>', i + 1)
    if (end === -1) {
      text += input.slice(i)
      break
    }
    const raw = input.slice(i, end + 1)
    const tag = input.slice(i + 1, end).toLowerCase()
    const closing = tag.startsWith('/')
    const name = closing ? tag.slice(1) : tag
    const decoration = Object.hasOwn(decorations, name)
      ? decorations[name as keyof typeof decorations]
      : undefined
    const color = getColor(name)
    let index = stack.length - 1
    while (index >= 0 && stack[index].name !== name) index--

    if (tag === 'reset') {
      flush()
      stack.length = 0
      style = {}
    } else if (closing && index !== -1) {
      flush()
      style = stack[index].style
      stack.length = index
    } else if (!closing && (color || decoration)) {
      flush()
      stack.push({ name, style })
      if (color) style = { ...style, color }
      else if (decoration) style = { ...style, [decoration]: true }
    } else {
      text += raw
      unsupported = true
    }
    i = end + 1
  }
  flush()
  return { parts, unsupported }
}
