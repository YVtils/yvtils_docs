# Server List Configuration

---

```yaml
motd:
  top:
    - <gradient:red:green>SMP Server
    - "<gradient:red:green>Version: <version>"
    - <yellow>Trailer production
  bottom:
    - "<gradient:blue:light_purple>Visit our website: https://yvtils.net/yvtils-smp"
    - "<gradient:blue:light_purple>Join our Discord: https://yvtils.net/yvtils/support"
    - <rainbow>The start of chapter 2
  maintenance: <gradient:red:green>Server is in maintenance mode
```

```yaml
top:
  - <gradient:red:green>SMP Server
  - "<gradient:red:green>Version: <version>"
  - <yellow>Trailer production
```

**HELP:** Set the top part of the message of the day (MOTD) that is displayed in the server list. Randomly selects one of the strings.

**VALUES:** Multiple strings

**VARIABLES:** `<serverName>`; `<version>`; `<players>`; `<maxPlayers>`; `<date>`; `<onlinePlayers>`

```yaml
bottom:
  - "<gradient:blue:light_purple>Visit our website: https://yvtils.net/yvtils-smp"
  - "<gradient:blue:light_purple>Join our Discord: https://yvtils.net/yvtils/support"
  - <rainbow>The start of chapter 2
```

**HELP:** Set the bottom part of the message of the day (MOTD) that is displayed in the server list. Randomly selects one of the strings.

**VALUES:** Multiple strings

**VARIABLES:** `<serverName>`; `<version>`; `<players>`; `<maxPlayers>`; `<date>`; `<onlinePlayers>`

```yaml
maintenance: <gradient:red:green>Server is in maintenance mode
```

**HELP:** Set the message that is displayed in the server list when the server is in maintenance mode.

**VALUES:** Any string

**VARIABLES:** `<serverName>`; `<version>`; `<players>`; `<maxPlayers>`; `<date>`; `<onlinePlayers>`

---

```yaml
maxPlayers: -1
```

**HELP:** Set the max player count, which will be displayed in the server list. (This does not affect the actual player count)

**VALUES:** Any integer

```yaml
playerCountHover:
  - <gradient:blue:light_purple>+----------------------------+
  - <gradient:blue:light_purple>|         <serverName>         |
  - "<gradient:blue:light_purple>|     Version: <version>     |"
  - "<gradient:blue:light_purple>| Players: <players> / <maxPlayers> |"
  - "<gradient:blue:light_purple>|   Website: https://yvtils.net   |"
  - <gradient:blue:light_purple>+----------------------------+
```

**HELP:** Set the hover text that is displayed when hovering over the player count in the server list.

**VALUES:** Multiple strings

**VARIABLES:** `<serverName>`; `<version>`; `<players>`; `<maxPlayers>`; `<date>`; `<onlinePlayers>`
