import { Link, Stack, Tag, Text } from "@yvtils/designsystem-v2";
import { currentDocsVersion, versionedHref } from "../../components/layout/docsVersions";

export function HeroSection() {
  return (
    <Stack
      as="section"
      id="overview"
      className="hero"
      flexDirection="column"
      alignItems="flex-start"
    >
      <Stack className="hero-tags" gap="sm">
        <Tag
          label="YVtils Collection documentation"
          tone="brand"
          variant="outline"
        />
        <Tag label="BETA" tone="warning" variant="fill" />
        <Tag label={currentDocsVersion} tone="info" variant="fill" />
      </Stack>
      <Stack as="h1" className="hero-heading">
        <Text as="span" variant="heading" weight="bold" tone="primary">
          Build a better
          <Text as="span" tone="brand" className="hero-heading-accent">
            {" "}
            Minecraft server.
          </Text>
        </Text>
      </Stack>
      <Text as="p" size="xl" tone="secondary" className="hero-description">
        Find practical guides to the YVtils Collection modules, from player
        features to server administration.
      </Text>
      <Stack
        className="hero-links"
        gap="lg"
        alignItems="center"
        flexWrap="wrap"
      >
        <Link
          href="#minecraft-plugins"
          size="lg"
          weight="semibold"
          iconRight={{ name: "ArrowRight", variant: "outline" }}
        >
          Explore the guides
        </Link>
        <Link href={versionedHref("/docs/utils/color-codes")}>Explore color codes</Link>
      </Stack>
    </Stack>
  );
}
