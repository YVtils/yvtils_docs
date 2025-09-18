# MultiMine Configuration

```yaml
animationTime: 3
```

**HELP:** Lege die Zeit in Ticks fest, die die Animation dauert. (1 Sekunde = 20 Ticks)

**VALUES:** Beliebige Zahl

```yaml
cooldownTime: 3
```

**HELP:** Lege die Zeit in Sekunden fest, die der Cooldown andauert.

**VALUES:** Beliebige Zahl

```yaml
breakLimit: 250
```

!!! warning
    Wenn du diesen Wert zu hoch setzt, kann es zu Lags auf dem Server führen.

**HELP:** Setze das Limit der Blöcke, die auf einmal abgebaut werden können.

**VALUES:** Beliebige Zahl

```yaml
blocks:
  - OAK_LOG
  - BIRCH_LOG
  - SPRUCE_LOG
  - JUNGLE_LOG
  - ACACIA_LOG
  - DARK_OAK_LOG
  - CRIMSON_STEM
  - WARPED_STEM
  - STRIPPED_OAK_LOG
  - STRIPPED_BIRCH_LOG
  - STRIPPED_SPRUCE_LOG
  - STRIPPED_JUNGLE_LOG
  - STRIPPED_ACACIA_LOG
  - STRIPPED_DARK_OAK_LOG
  - STRIPPED_CRIMSON_STEM
  - STRIPPED_WARPED_STEM
  - COAL_ORE
  - IRON_ORE
  - GOLD_ORE
  - DIAMOND_ORE
  - EMERALD_ORE
  - LAPIS_ORE
  - REDSTONE_ORE
  - COPPER_ORE
  - DEEPSLATE_COAL_ORE
  - DEEPSLATE_IRON_ORE
  - DEEPSLATE_GOLD_ORE
  - DEEPSLATE_DIAMOND_ORE
  - DEEPSLATE_EMERALD_ORE
  - DEEPSLATE_LAPIS_ORE
  - DEEPSLATE_REDSTONE_ORE
  - DEEPSLATE_COPPER_ORE
  - NETHER_QUARTZ_ORE
  - NETHER_GOLD_ORE
  - ANCIENT_DEBRIS
  - GLOWSTONE
  - CHERRY_LOG
```

!!! info
  Es wird empfohlen, den Befehl `/mm add <block>` oder `/mm add` mit dem Block in der Hand zu verwenden, um Blöcke zur Liste hinzuzufügen.

  Außerdem kannst du `/mm addMultiple` mit einem Inventar Item (Shulker Box, Bundle) verwenden, um alle Blöcke darin hinzuzufügen.

  Beim Entfernen von Blöcken ist es dasselbe, aber anstelle von `add` verwende `remove`.

**HELP:** Liste der Blöcke, die von MultiMine abgebaut werden können.

**VALUES:** Liste von Blocknamen
