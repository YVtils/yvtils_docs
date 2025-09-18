# Discord Module Configuration

![type:video](https://www.youtube.com/embed/YQiYSjEcdMk)

!!! info
    JDA Berechtigungen können [hier](https://ci.dv8tion.net/job/JDA5/javadoc/net/dv8tion/jda/api/Permission.html) gefunden werden.

```yaml
botToken: YOUR TOKEN HERE
```

**HELP:** Der Token des Bots.

```yaml
mainGuild: Guild ID
```

**HELP:** Die ID des Hauptservers.

---

```yaml
botSettings:
  onlineStatus: online
  activity: none
  activityMessage: Minecraft
```

```yaml
onlineStatus: online
```

**HELP:** Der Status des Bots.

**VALUES:** `online`, `idle`, `dnd`, `invisible`

```yaml
activity: none
```

**HELP:** Die Aktivität des Bots.

**VALUES:** `none`, `playing`, `listening`, `watching`, `competing`, `custom`

```yaml
activityMessage: Minecraft
```

**HELP:** Die Nachricht der Aktivität des Bots.

**VALUES:** Beliebiger Text

---

!!! info
    `embedSettings` wird momentan nicht verwendet.

```yaml
embedSettings:
  author: YVtils SMP
  authorIconURL: URL
```

```yaml
author: YVtils SMP
```

**HELP:** Der Autor der Embeds.

**VALUES:** Beliebiger Text

```yaml
authorIconURL: URL
```

**HELP:** Die URL des Icons des Autors.

**VALUES:** Beliebige Bild URL

---

```yaml
whitelistFeature:
  channel: CHANNEL ID
  role: ROLE ID 1, ROLE ID 2, ROLE ID ...
```

```yaml
channel: CHANNEL ID
```

**HELP:** Die Channel ID, in dem die Whitelist Nachrichten empfangen werden.

```yaml
role: ROLE ID 1, ROLE ID 2, ROLE ID ...
```

**HELP:** Die Rollen IDs, welche der User bekommen soll, wenn er auf die Whitelist kommt.

---

```yaml
serverInfoCommand:
  permission: PERMISSION
```

```yaml
permission: PERMISSION
```

**HELP:** Die Permission, die benötigt wird, um den Befehl zu benutzen.

**VALUES:** Beliebige JDA Permission

---

```yaml
whitelistCommand:
  permission: PERMISSION
```

```yaml
permission: PERMISSION
```

**HELP:** Die Permission, die benötigt wird, um den Befehl zu benutzen.

**VALUES:** Beliebige JDA Permission

---

```yaml
chatSync:
  enabled: true
  permission: PERMISSION
  channel: CHANNEL ID
```

```yaml
enabled: true
```

**HELP:** Aktiviere oder deaktiviere die Chat Sync Funktion.

**VALUES:** `true` or `false`

```yaml
permission: PERMISSION
```

**HELP:** Die Permission, welche benötigt wird, um den Chat Sync zu benutzen.

**VALUES:** Beliebige JDA Permission

```yaml
channel: CHANNEL ID
```

**HELP:** Die Channel ID, in dem der Chat Sync stattfindet.

---

```yaml
consoleSync:
  enabled: true
  channel: CHANNEL ID
```

```yaml
enabled: true
```

**HELP:** Aktiviere oder deaktiviere die Console Sync Funktion.

**VALUES:** `true` or `false`

```yaml
channel: CHANNEL ID
```

**HELP:** Die Channel ID, in dem der Console Sync stattfindet.

---

```yaml
serverStats:
  enabled: true
  mode: both
  channel: CHANNEL ID
  layout:
    serverStatus:
      text: <emoji> | SERVER <status>
      emoji:
        online: 💚
        offline: ❤️
    serverVersion: 💻 | VERSION <version>
    lastPlayerCount: 🎮 | PLAYERS <count>
    lastRefreshed: ⌚ | <time>
```

```yaml
enabled: true
```

**HELP:** Aktiviere oder deaktiviere die Server Stats Funktion.

**VALUES:** `true` or `false`

```yaml
mode: both
```

**HELP:** Der Modus, in dem die Server Stats gesendet werden.

**VALUES:** `both`, `channels`, `description`
- `both`: Sendet die Stats in den Channel und in die Beschreibung.
- `channels`: Erstellt Voice Channels für die Stats.
- `description`: Sendet die Stats in die Beschreibung des angegebenen Channels.

```yaml
channel: CHANNEL ID
```

**HELP:** Die Channel ID, in dem die Server Stats gesendet werden.

```yaml
layout:
  serverStatus:
    text: <emoji> | SERVER <status>
    emoji:
      online: 💚
      offline: ❤️
  serverVersion: 💻 | VERSION <version>
  lastPlayerCount: 🎮 | PLAYERS <count>
  lastRefreshed: ⌚ | <time>
```

**HELP:** Das Layout der Server Stats.

---

```yaml
logChannel: CHANNEL ID
```

**HELP:** Die Channel ID, in dem die Logs gesendet werden.
