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

---

```yaml
top:
  - <gradient:red:green>SMP Server
  - "<gradient:red:green>Version: <version>"
  - <yellow>Trailer production
```

**HELP:** Setze den oberen Teil der Nachricht des Tages (MOTD), die in der Serverliste angezeigt wird. Wählt zufällig eine der Zeichenketten aus.

**VALUES:** Mehrere Zeichenketten

**VARIABLES:** `<serverName>`; `<version>`; `<players>`; `<maxPlayers>`; `<date>`; `<onlinePlayers>`

```yaml
bottom:
  - "<gradient:blue:light_purple>Visit our website: https://yvtils.net/yvtils-smp"
  - "<gradient:blue:light_purple>Join our Discord: https://yvtils.net/yvtils/support"
  - <rainbow>The start of chapter 2
```

**HELP:** Setze den unteren Teil der Nachricht des Tages (MOTD), die in der Serverliste angezeigt wird. Wählt zufällig eine der Zeichenketten aus.

**VALUES:** Mehrere Zeichenketten

**VARIABLES:** `<serverName>`; `<version>`; `<players>`; `<maxPlayers>`; `<date>`; `<onlinePlayers>`

```yaml
maintenance: <gradient:red:green>Server is in maintenance mode
```

**HELP:** Setze die Nachricht, die angezeigt wird, wenn der Server sich im Wartungsmodus befindet.

**VALUES:** Belibiger Text

**VARIABLES:** `<serverName>`; `<version>`; `<players>`; `<maxPlayers>`; `<date>`; `<onlinePlayers>`

---

```yaml
maxPlayers: -1
```

**HELP:** Setze die visuelle Anzeige der maximalen Spieleranzahl in der Serverliste. (Dies hat keinen Einfluss auf die tatsächliche Spieleranzahl)

**VALUES:** Beliebige Zahl

```yaml
playerCountHover:
  - <gradient:blue:light_purple>+----------------------------+
  - <gradient:blue:light_purple>|         <serverName>         |
  - "<gradient:blue:light_purple>|     Version: <version>     |"
  - "<gradient:blue:light_purple>| Players: <players> / <maxPlayers> |"
  - "<gradient:blue:light_purple>|   Website: https://yvtils.net   |"
  - <gradient:blue:light_purple>+----------------------------+
```

**HELP:** Setze die Nachricht, die angezeigt wird, wenn der Mauszeiger über die Spieleranzahl in der Serverliste bewegt wird.

**VALUES:** Mehrere Zeichenketten

**VARIABLES:** `<serverName>`; `<version>`; `<players>`; `<maxPlayers>`; `<date>`; `<onlinePlayers>`