import { useState } from 'react'
import { Button, Card, Link, Stack, Text } from '@yvtils/designsystem-v2'
import './YouTubeVideo.css'

export function YouTubeVideo({ videoId, title }: { videoId: string; title: string }) {
  const [consented, setConsented] = useState(false)

  return (
    <Stack className="youtube-video" flexDirection="column" gap="lg">
      <Stack as="h2">
        <Text as="span" variant="heading" size="xl" weight="semibold">{title}</Text>
      </Stack>
      {consented ? (
        <>
          <iframe
            className="youtube-video__player"
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <Link href={`https://www.youtube.com/watch?v=${videoId}`}>Watch on YouTube</Link>
        </>
      ) : (
        <Card className="youtube-video__consent">
          <Text as="p" weight="semibold">External video from YouTube</Text>
          <Text as="p" tone="secondary">
            Loading this video connects to YouTube, which can receive your IP address and may use cookies or similar technologies.
          </Text>
          <Stack flexDirection="row" gap="md">
            <Button type="button" label="I consent — load video" onClick={() => setConsented(true)} />
            <Link as="button" onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')}>
              Watch on YouTube instead
            </Link>
          </Stack>
        </Card>
      )}
    </Stack>
  )
}
