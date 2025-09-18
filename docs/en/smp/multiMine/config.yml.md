# MultiMine Configuration

```yaml
animationTime: 3
```

**HELP:** Set the time in ticks for the block breaking animation. (1 second = 20 ticks)

**VALUES:** Any integer

```yaml
cooldownTime: 3
```

**HELP:** Set the time in seconds for the cooldown of the block breaking.

**VALUES:** Any integer

```yaml
breakLimit: 250
```

!!! warning
    If you set this value too high, it can cause lag on the server.

**HELP:** Set the limit of blocks that can be broken at once.

**VALUES:** Any integer

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
    It is recommended to use the command `/mm add <block>` or `/mm add` with the block in your hand to add blocks to the list.

    Also you can use `/mm addMultiple` with a Container (Shulker Box, Bundle) to add all blocks inside.

    When removing blocks it is the same, but instead of `add` use `remove`.

**HELP:** Set the blocks that can be broken with the MultiMine feature.

**VALUES:** List of block names
