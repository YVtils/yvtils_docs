# INDEX

!!! info "Sprache"
    [Englisch](/)

    [Deutsch](/de/) | Aktuell ausgewählt

## Allgemein

- [Farb Codes](colorcode.md)

## YVtils-SMP

- [config.yml](smp/config.yml.md)
- [admin/mutedPlayers.yml](smp/admin/mutedPlayers.yml.md)
- [discord/config.yml](smp/discord/config.yml.md)
- [discord/save.yml](smp/discord/save.yml.md)
- [fusions/fusionName.yml](smp/fusions/fusionName.yml.md)
- [language/de.yml](smp/language/de.yml.md)
- [multiMine/config.yml](smp/multiMine/config.yml.md)
- [server/config.yml](smp/server/config.yml.md)
- [status/config.yml](smp/status/config.yml.md)
- [status/save.yml](smp/status/save.yml.md)
- [waypoints/config.yml](smp/waypoints/config.yml.md)
- [waypoints/save.yml](smp/waypoints/save.yml.md)

## YVtils-MM / MultiMine

- [config.yml](mm/config.yml.md)
- [language/de.yml](mm/language/de.yml.md)
- [multiMine/config.yml](mm/multiMine/config.yml.md)

---

# KAPITEL ZWEI IST JETZT VERFÜGBAR!

- Trailer: [Kapitel Zwei Trailer](https://youtu.be/gQi54Pd_SWE)

![type:video](https://www.youtube.com/embed/gQi54Pd_SWE)

# Module

## Discord Modul

- Tutorial: [Discord Modul Einrichtungsanleitung](https://youtu.be/YQiYSjEcdMk)

![type:video](https://www.youtube.com/embed/YQiYSjEcdMk)

- Chat Synchronisation
  
  ![Chat Sync](../assets/Discord_ChatSync.png)
- Minecraft Server Statistiken
  
    ![Minecraft Server Stats](../assets/Discord_DescStats.png)
    ![Minecraft Server Stats](../assets/Discord_ChannelStats.png)
- Konsolen Synchronisation

    ![Console Sync](../assets/Discord_ConsoleSync.png)
- Whitelist mit Discord

## Status Modul

`/status set <status>`
`/status default <status>`
`/status clear [player]`

Lass Spieler einen Status vor ihrem Namen setzen.

![Status](../assets/Status.png)

## Sit Modul

`/sit`

Lass Spieler überall sitzen.

![Sit](../assets/Sit.png)

## Erweiterter Unsichtbarkeitsmodus

`/v [quick]`

- Stille Container-Interaktion
- Keine Mob-Zielerfassung
- Ignoriere fallengelassene Gegenstände
- Schichtsystem
  - Höhere Schicht-Spieler können niedrigere Schicht-Spieler sehen, aber nicht umgekehrt.
  
![Vanish](../assets/Vanish.png)

## Moderationsmodul

- Ban Befehl `/ban <player> [reason]`
- Tempban Befehl `/tempban <player> <time> <unit> [reason]`
- Kick Befehl `/kick <player> [reason]`
- Mute Befehl `/mute <player> [reason]`
- Tempmute Befehl `/tempmute <player> <time> <unit> [reason]`
- Unban Befehl `/unban <player>`
- Unmute Befehl `/unmute <player>`

## Fusion Modul / Benutzerdefiniertes Crafting

`/fusion [manage]`

- Lass Spieler benutzerdefinierte Gegenstände herstellen
  - Unsichtbare Gegenstandsrahmen

    ![Invisible Item Frame](../assets/Fusion_INVISFRAME.png)

  - Lichtblöcke

    ![Light Block](../assets/Fusion_LIGHTBLOCK.png)

  - Benutzerdefinierte Spieler-Köpfe

    ![Custom Player Head](../assets/Fusion_CUSTOMHEAD.png)

- Bestehende Fusionen verwalten oder neue erstellen

  ![FusionCreate](../assets/Fusion_Create.png)

![Fusion](../assets/FusionInv.png)

## MultiMine Modul (VeinMiner & Timber)

`/mm add [block]`
`/mm addMultiple`
`/mm remove [block]`
`/mm removeMultiple`

- MultiMine Blöcke
- Füge mehrere Blöcke gleichzeitig hinzu/entferne sie mit einem Container in der Hand

![MultiMine](../assets/MultiMine.gif)
![MultiMine](../assets/MultiMine2.gif)

## Server Modul

- Wartungsmodus
- Benutzerdefinierte MOTD
  
  ![Custom MOTD](../assets/ServerList.png)
- Gefälschte maximale Spieleranzahl
- Anpassbarer Spieler-Info-Text

    ![Custom Player Info Text](../assets/ServerInfo.png)

## Wegpunkte Modul

`/waypoint <naviagte/create/delete> <name> [visibility]`

- Erstelle Wegpunkte mit Sichtbarkeiten
  - Öffentlich - Jeder kann ihn sehen
  - Privat - Nur du kannst ihn sehen
  - Nicht gelistet - Nur du kannst ihn sehen, aber andere können ihn navigieren

![Waypoints](../assets/Waypoint.png)

## Andere Funktionen

- Anti Zu Teuer
  - Umgeht das "Zu Teuer" Problem beim Schmieden von Gegenständen

  ![Anti Too Expensive](../assets/AntiTooExpensive.png)

- MSG System
  - `/msg <player> <message>`
  - `/r <message>`

  ![MSG System](../assets/MSG.png)

- Spawn Elytra

![Spawn Elytra](../assets/SpawnElytra.png)

# Befehle
- Fly Befehl `/fly [player]`
- Heal Befehl `/heal [player]`
- Speed Befehl `/speed <speed> [player]`
- God Befehl `/god [player]`
- GlobalMute Befehl `/gmute [state]`
- Gamemode Befehl `/gm <gamemode> [player]`
- Seed Befehl `/seed show`

# Sonstiges

## Intelligentes Sprachsystem

- [Funktionen anfordern](https://github.com/YV-Network/YVtils-SMP/issues/new?assignees=&labels=feature+request&template=feature_request.md&title=) oder
[Discord](https://discord.gg/qHpMsduU7p)
