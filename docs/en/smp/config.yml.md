# Main Configuration File

```yaml
language: en
```

**HELP:** Set default language for messages sent by the plugin, players may receive messages in other languages, depending on their ingame language.

**VALUES:** `en`, `de`

!!! info
    `prefix` is currently not used in the plugin.

```yaml
prefix: <dark_gray>[<blue>YVtils-SMP<dark_gray>]<white>
```

**HELP:** Set the prefix of messages sent by the plugin.

**VALUES:** Any string

```yaml
serverName: Minecraft Server
```

**HELP:** Set the name of the server, displayed in some messages.

**VALUES:** Any string

```yaml
modules:
  fusion: true
  status: true
  discord: true
  admin: true
  sit: true
  server: true
  waypoints: true
  multiMine: true
  message: true
```

**HELP:** Enable or disable modules of the plugin.

**VALUES:** For each module, `true` or `false`

```yaml
playerUpdateMessage: true
```

**HELP:** Enable or disable the message that is sent to the admins when the plugin has a update available.

**VALUES:** `true` or `false`

---

```yaml
spawnElytra:
  active: true
  radius: 50
  multiplyValue: 5
```

```yaml
active: true
```

**HELP:** Enable or disable the spawn elytra system.

**VALUES:** `true` or `false`

```yaml
radius: 50
```

**HELP:** The radius in which the player can start gliding.

**VALUES:** Any number

```yaml
multiplyValue: 5
```

**HELP:** The value the player's speed is multiplied by, when boosting.

**VALUES:** Any number

---

```yaml
disableTooExpensive: true
```

**HELP:** Enable or disable a bypass for the "Too Expensive" anvil message.

**VALUES:** `true` or `false`

```yaml
joinMessages:
  - <green>» <white><player>
```

**HELP:** Set the message that is sent when a player joins the server. If multiple messages are set, one will be chosen randomly.

**VALUES:** One or multiple strings

```yaml
leaveMessages:
  - <red>« <white><player>
```

**HELP:** Set the message that is sent when a player leaves the server. If multiple messages are set, one will be chosen randomly.

**VALUES:** One or multiple strings

```yaml
allowChatColors: true
```

**HELP:** Enable or disable the use of chat colors in messages sent by players.

**VALUES:** `true` or `false`

```yaml
msg:
  design: <yellow>[<red><sender> <yellow>-> <red><receiver><yellow>]<white> <message>
```

**HELP:** Set the design of the message that is sent when a player sends a private message.

**VALUES:** Any string

**VARIABLES:**

- `<sender>` - The name of the sender
- `<receiver>` - The name of the receiver
- `<message>` - The message

```yaml
maintenance: false
```

**HELP:** Enable or disable the maintenance mode. Also toggled with the command `/maintenance`.

**VALUES:** `true` or `false`

!!! warning
    Only change the following settings if you know what you are doing.

```yaml
debug: false
```

**HELP:** Enable or disable debug messages.

**VALUES:** `true` or `false`
