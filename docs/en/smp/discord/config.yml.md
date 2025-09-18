# Discord Module Configuration

![type:video](https://www.youtube.com/embed/YQiYSjEcdMk)

!!! info
    JDA permissions can be found [here](https://ci.dv8tion.net/job/JDA5/javadoc/net/dv8tion/jda/api/Permission.html).

```yaml
botToken: YOUR TOKEN HERE
```

**HELP:** The token of the bot that will be used for the Discord module.

```yaml
mainGuild: Guild ID
```

**HELP:** The ID of the main guild where the bot will be used.

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

**HELP:** The status of the bot.

**VALUES:** `online`, `idle`, `dnd`, `invisible`

```yaml
activity: none
```

**HELP:** The activity of the bot.

**VALUES:** `none`, `playing`, `listening`, `watching`, `competing`, `custom`

```yaml
activityMessage: Minecraft
```

**HELP:** The message of the activity of the bot.

**VALUES:** Any string

---

!!! info
    `embedSettings` is currently not used in the plugin.

```yaml
embedSettings:
  author: YVtils SMP
  authorIconURL: URL
```

```yaml
author: YVtils SMP
```

**HELP:** The author of the embeds.

**VALUES:** Any string

```yaml
authorIconURL: URL
```

**HELP:** The icon of the author of the embeds.

**VALUES:** Any image URL

---

```yaml
whitelistFeature:
  channel: CHANNEL ID
  role: ROLE ID 1, ROLE ID 2, ROLE ID ...
```

```yaml
channel: CHANNEL ID
```

**HELP:** The ID of the channel where the whitelist feature will be used.

```yaml
role: ROLE ID 1, ROLE ID 2, ROLE ID ...
```

**HELP:** The ID of the roles that an user will gain when they are whitelisted.

---

```yaml
serverInfoCommand:
  permission: PERMISSION
```

```yaml
permission: PERMISSION
```

**HELP:** The permission that is required to use the command.

**VALUES:** Any JDA permission

---

```yaml
whitelistCommand:
  permission: PERMISSION
```

```yaml
permission: PERMISSION
```

**HELP:** The permission that is required to use the command.

**VALUES:** Any JDA permission

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

**HELP:** Enable or disable the chat sync.

**VALUES:** `true` or `false`

```yaml
permission: PERMISSION
```

**HELP:** The permission that is required to get messages synced to minecraft.

**VALUES:** Any JDA permission

```yaml
channel: CHANNEL ID
```

**HELP:** The ID of the channel where the chat sync will be used.

---

```yaml
consoleSync:
  enabled: true
  channel: CHANNEL ID
```

```yaml
enabled: true
```

**HELP:** Enable or disable the console sync.

**VALUES:** `true` or `false`

```yaml
channel: CHANNEL ID
```

**HELP:** The ID of the channel where the console sync will be used.

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

**HELP:** Enable or disable the server stats.

**VALUES:** `true` or `false`

```yaml
mode: both
```

**HELP:** The mode of the server stats.

**VALUES:** `both`, `channels`, `description`
- `both`: Sends the stats in the channel and the description.
- `channels`: Creates non joinable voice channels for the stats.
- `description`: Sends the stats in the description of given channel.

```yaml
channel: CHANNEL ID
```

**HELP:** The ID of the channel where the server stats will be used.

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

**HELP:** The layout of the server stats.

---

```yaml
logChannel: CHANNEL ID
```

**HELP:** The ID of the channel where the logs will be sent.
