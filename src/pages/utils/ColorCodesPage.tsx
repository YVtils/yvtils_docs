import { useState } from 'react'
import { Card, CodeBlock, Link, Stack, Tag, Text, Textfield } from '@yvtils/designsystem-v2'
import { PageNavigation } from '../../components/layout/PageNavigation'
import { colorPages } from '../../components/layout/docsRoutes'
import type { ColorPageId } from '../../components/layout/docsRoutes'
import { colors, parsePreview } from './miniMessagePreview'
import './ColorCodesPage.css'

export function ColorCodesPage({ page }: { page: ColorPageId }) {
  const [input, setInput] = useState('<gold>Welcome, <green>player</green>!')
  const preview = parsePreview(input)

  return (
    <Stack as="main" className="docs-content" flexDirection="column">
      {page === 'overview' && <Stack as="section" className="docs-section" flexDirection="column" gap="lg">
        <Tag label="Utilities" tone="brand" variant="outline" />
        <Stack as="h1"><Text as="span" variant="heading" size="2xl" weight="bold">Color codes &amp; MiniMessage</Text></Stack>
        <Text as="p" size="lg" tone="secondary">
          Adventure represents messages as components: structured text with styling and optional
          interactions. MiniMessage is a text format for creating those components with tags.
          YVtils uses it to format supported messages.
        </Text>
        <Link href="https://docs.papermc.io/adventure/minimessage/format/" iconRight={{ name: 'ArrowRight', variant: 'outline' }}>
          Read the official MiniMessage reference
        </Link>
      </Stack>}

      {page === 'tags' && <Stack as="section" className="docs-section" flexDirection="column" gap="lg">
        <Tag label="Color codes" tone="brand" variant="outline" />
        <Stack as="h1"><Text as="span" variant="heading" size="2xl" weight="bold">Writing tags</Text></Stack>
        <Text as="p" tone="secondary">
          Place an opening tag before text and a matching closing tag after it. Tags can be nested;
          closing a tag returns to the surrounding style. In non-strict mode closing tags are
          optional, but using them makes formatting easier to follow.
        </Text>
        <CodeBlock title="MiniMessage examples" language="text" code={'<green>Hello</green>, <gold>player</gold>!\n<#55ffff>Custom color</#55ffff>\n<bold><red>Important</red></bold>'} />
        <Text as="p" tone="secondary">
          Use {'<reset>'} to clear formatting in non-strict mode. To display a literal opening
          tag, escape its opening bracket with a backslash.
        </Text>
      </Stack>}

      {page === 'colors' && <Stack as="section" className="docs-section" flexDirection="column" gap="lg">
        <Tag label="Color codes" tone="brand" variant="outline" />
        <Stack as="h1"><Text as="span" variant="heading" size="2xl" weight="bold">Minecraft colors</Text></Stack>
        <Text as="p" tone="secondary">
          Use a named color as a tag, such as {'<green>'}, or a six-digit hex color such as {'<#55ffff>'}.
          Colors below use Minecraft’s standard color values.
        </Text>
        <Stack className="color-grid">
          {Object.entries(colors).map(([name, color]) => (
            <Card className="color-card" key={name}>
              <Stack className="color-swatch" style={{ backgroundColor: color }} aria-hidden="true" />
              <Text as="span" weight="semibold">{name}</Text>
              <Text as="span" size="sm" tone="secondary">{color.toUpperCase()}</Text>
            </Card>
          ))}
        </Stack>
      </Stack>}

      {page === 'decorations' && <Stack as="section" className="docs-section" flexDirection="column" gap="lg">
        <Tag label="Color codes" tone="brand" variant="outline" />
        <Stack as="h1"><Text as="span" variant="heading" size="2xl" weight="bold">Decorations and components</Text></Stack>
        <Text as="p" tone="secondary">
          Decorations include {'<bold>'}, {'<italic>'}, {'<underlined>'}, {'<strikethrough>'},
          and {'<obfuscated>'}. MiniMessage also supports gradients, rainbow text, hover and click
          events, and other component tags. Availability depends on where the message is displayed.
        </Text>
        <CodeBlock title="More examples" language="text" code={'<bold>Important</bold>\n<gradient:red:gold>Gradient text</gradient>\n<hover:show_text:"More information">Hover here</hover>'} />
      </Stack>}

      {page === 'preview' && <Stack as="section" className="docs-section" flexDirection="column" gap="lg">
        <Tag label="Color codes" tone="brand" variant="outline" />
        <Stack as="h1"><Text as="span" variant="heading" size="2xl" weight="bold">Try it out</Text></Stack>
        <Text as="p" tone="secondary">
          This approximate preview supports named and hex colors, bold, italic, underlined,
          strikethrough, reset, and escaped opening brackets. Unsupported tags are shown literally;
          gradients, interactions, and Minecraft-specific rendering are not simulated.
        </Text>
        <Textfield id="minimessage-input" label="MiniMessage" value={input} onChange={(event) => setInput(event.target.value)} fullWidth />
        <Card className="preview-card">
          <Text as="span" size="sm" tone="secondary">Preview</Text>
          <Stack className="preview-output" aria-label="Formatted text preview">
            {preview.parts.map((part, index) => (
              <Text
                as="span"
                key={index}
                className="preview-text"
                style={{
                  color: part.style.color,
                  fontWeight: part.style.bold ? 'bold' : undefined,
                  fontStyle: part.style.italic ? 'italic' : undefined,
                  textDecoration: [part.style.underlined && 'underline', part.style.strikethrough && 'line-through'].filter(Boolean).join(' ') || undefined,
                }}
              >
                {part.text}
              </Text>
            ))}
          </Stack>
          {preview.unsupported && <Text as="p" tone="warning" size="sm">Some tags are not supported by this preview and are shown literally.</Text>}
        </Card>
      </Stack>}
      <PageNavigation pages={colorPages} currentId={page} />
    </Stack>
  )
}
