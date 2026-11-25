import assert from 'node:assert/strict'
import { test } from 'node:test'
import { parsePreview } from '../src/pages/utils/miniMessagePreview.ts'

test('renders nested colors and restores the surrounding style', () => {
  assert.deepEqual(parsePreview('<red>A <green>B</green> C</red>!'), {
    parts: [
      { text: 'A ', style: { color: '#ff5555' } },
      { text: 'B', style: { color: '#55ff55' } },
      { text: ' C', style: { color: '#ff5555' } },
      { text: '!', style: {} },
    ],
    unsupported: false,
  })
})

test('handles hex colors, combined decorations and reset', () => {
  const result = parsePreview('<#123abc><bold><underlined>X<reset>Y')
  assert.deepEqual(result.parts, [
    { text: 'X', style: { color: '#123abc', bold: true, underlined: true } },
    { text: 'Y', style: {} },
  ])
})

test('shows unsupported tags literally and escapes opening brackets', () => {
  assert.deepEqual(parsePreview('\\<red> <gradient:red:blue>Hello</gradient>'), {
    parts: [{ text: '<red> <gradient:red:blue>Hello</gradient>', style: {} }],
    unsupported: true,
  })
})

test('does not interpret unrecognized properties as colors', () => {
  assert.deepEqual(parsePreview('<constructor>x</constructor>'), {
    parts: [{ text: '<constructor>x</constructor>', style: {} }],
    unsupported: true,
  })
})
