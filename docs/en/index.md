# INDEX

!!! info "Language"
    [English](/) | Currently selected

    [Deutsch](de/)

## General

- [Color Codes](colorcode.md)

## YVtils-SMP

- [config.yml](smp/config.yml.md)
- [admin/mutedPlayers.yml](smp/admin/mutedPlayers.yml.md)
- [discord/config.yml](smp/discord/config.yml.md)
- [discord/save.yml](smp/discord/save.yml.md)
- [fusions/fusionName.yml](smp/fusions/fusionName.yml.md)
- [language/en.yml](smp/language/en.yml.md)
- [multiMine/config.yml](smp/multiMine/config.yml.md)
- [server/config.yml](smp/server/config.yml.md)
- [status/config.yml](smp/status/config.yml.md)
- [status/save.yml](smp/status/save.yml.md)
- [waypoints/config.yml](smp/waypoints/config.yml.md)
- [waypoints/save.yml](smp/waypoints/save.yml.md)

## YVtils-MM / MultiMine

- [config.yml](mm/config.yml.md)
- [language/en.yml](mm/language/en.yml.md)
- [multiMine/config.yml](mm/multiMine/config.yml.md)

---

# CHAPTER TWO IS OUT NOW!

- Trailer: [Chapter Two Trailer](https://youtu.be/gQi54Pd_SWE)

![type:video](https://www.youtube.com/embed/gQi54Pd_SWE)

# Modules

## Discord Module

- Tutorial: [Discord Module Setup Guide](https://youtu.be/YQiYSjEcdMk)

![type:video](https://www.youtube.com/embed/YQiYSjEcdMk)

- Chat Sync
  
  ![Chat Sync](../assets/Discord_ChatSync.png)
- Minecraft Server Stats
  
    ![Minecraft Server Stats](../assets/Discord_DescStats.png)
    ![Minecraft Server Stats](../assets/Discord_ChannelStats.png)
- Console Sync

    ![Console Sync](../assets/Discord_ConsoleSync.png)
- Whitelist with Discord

## Status Module

`/status set <status>`
`/status default <status>`
`/status clear [player]`

Let players set a status before their name.

![Status](../assets/Status.png)

## Sit Module

`/sit`

Let players sit down everywhere.

![Sit](../assets/Sit.png)

## Extended Vanish Module

`/v [quick]`

- Silent Container Interaction
- No Mob Targeting
- Ignore dropped items
- Layer System
  - Higher Layer Players can see Lower Layer Players, but not vice versa.
  
![Vanish](../assets/Vanish.png)

## Moderation Module

- Ban Command `/ban <player> [reason]`
- Tempban Command `/tempban <player> <time> <unit> [reason]`
- Kick Command `/kick <player> [reason]`
- Mute Command `/mute <player> [reason]`
- Tempmute Command `/tempmute <player> <time> <unit> [reason]`
- Unban Command `/unban <player>`
- Unmute Command `/unmute <player>`

## Fusion Module / Custom Crafting

`/fusion [manage]`

- Let players craft custom items
  - Invisible Item Frames

    ![Invisible Item Frame](../assets/Fusion_INVISFRAME.png)

  - Light Blocks

    ![Light Block](../assets/Fusion_LIGHTBLOCK.png)

  - Custom Player Heads

    ![Custom Player Head](../assets/Fusion_CUSTOMHEAD.png)

- Manange existing or create new fusions

  ![FusionCreate](../assets/Fusion_Create.png)

![Fusion](../assets/FusionInv.png)

## MultiMine Module (VeinMiner & Timber)

`/mm add [block]`
`/mm addMultiple`
`/mm remove [block]`
`/mm removeMultiple`

- MultiMine Blocks
- Add/Remove multiple blocks at once with a contaimer in your hand

![MultiMine](../assets/MultiMine.gif)
![MultiMine](../assets/MultiMine2.gif)

## Server Module

- Maintenance Mode
- Custom MOTD
  
  ![Custom MOTD](../assets/ServerList.png)
- Fake Max Player Count
- Customizable Player Info Text

    ![Custom Player Info Text](../assets/ServerInfo.png)

## Waypoints Module

`/waypoint <naviagte/create/delete> <name> [visibility]`

- Create waypoints with visibilities
  - Public - Everyone can see it
  - Private - Only you can see it
  - Unlisted - Only you can see it, but others can navigate to it
- Navigate to waypoints

![Waypoints](../assets/Waypoint.png)

## Other Features

- Anti Too Expensive
  - Bypasses the "Too Expensive" Enchantment Limit

  ![Anti Too Expensive](../assets/AntiTooExpensive.png)

- MSG System
  - `/msg <player> <message>`
  - `/r <message>`

  ![MSG System](../assets/MSG.png)

- Spawn Elytra

![Spawn Elytra](../assets/SpawnElytra.png)

# Commands
- Fly Command `/fly [player]`
- Heal Command `/heal [player]`
- Speed Command `/speed <speed> [player]`
- God Command `/god [player]`
- GlobalMute Command `/gmute [state]`
- Gamemode Command `/gm <gamemode> [player]`
- Seed Command `/seed show`

# Other

## Smart Language System

- [Request Features](https://github.com/YV-Network/YVtils-SMP/issues/new?assignees=&labels=feature+request&template=feature_request.md&title=) or
[Discord](https://discord.gg/qHpMsduU7p)
