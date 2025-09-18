# Main Configuration File

```yaml
language: de
```

**HELP:** Lege die Sprache des Plugins fest. Spieler können trotzdem Nachrichten in anderen Sprachen erhalten basierend auf ihrer Spracheinstellung.

**VALUES:** `en`, `de`

!!! info
    `prefix` wird aktuell nicht vom Plugin verwendet

```yaml
prefix: <dark_gray>[<blue>YVtils-SMP<dark_gray>]<white>
```

**HELP:** Lege den Prefix fest, welcher in Nachrichten des Plugins verwendet wird.

**VALUES:** Beliebiger Text

```yaml
serverName: Minecraft Server
```

**HELP:** Lege den Namen des Servers fest. Dieser wird in manchen Nachrichten verwendet.

**VALUES:** Beliebiger Text

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

**HELP:** Aktiviere oder deaktiviere Module des Plugins.

**VALUES:** Für jedes Modul, `true` oder `false`

```yaml
playerUpdateMessage: true
```

**HELP:** Aktiviere oder deaktiviere die Nachricht, die an Admins gesendet wird, wenn eine neue Version des Plugins verfügbar ist.

**VALUES:** `true` oder `false`

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

**HELP:** Aktiviere oder deaktiviere das Spawn Eyltra Feature.

**VALUES:** `true` or `false`

```yaml
radius: 50
```

**HELP:** Der Radius um den World Spawn, in dem Spieler mit einer Spawn Elytra starten können.

**VALUES:** Beliebige Zahl

```yaml
multiplyValue: 5
```

**HELP:** Der Wert, um den die Geschwindigkeit beim Boosten multipliziert wird.

**VALUES:** Beliebige Zahl

---

```yaml
disableTooExpensive: true
```

**HELP:** Aktiviere oder deaktiviere das Feature, das "Too Expensive" das nutzen von Anvils verhindert.

**VALUES:** `true` oder `false`

```yaml
joinMessages:
  - <green>» <white><player>
```

**HELP:** Lege die Nachricht fest, die gesendet wird, wenn ein Spieler den Server betritt. Wenn mehrere Nachrichten festgelegt sind, wird eine zufällig ausgewählt.

**VALUES:** Eine oder mehrere Zeichenketten

```yaml
leaveMessages:
  - <red>« <white><player>
```

**HELP:** Lege die Nachricht fest, die gesendet wird, wenn ein Spieler den Server verlässt. Wenn mehrere Nachrichten festgelegt sind, wird eine zufällig ausgewählt.

**VALUES:** Eine oder mehrere Zeichenketten

```yaml
allowChatColors: true
```

**HELP:** Aktiviere oder deaktiviere die Verwendung von Farbcodes im Chat.

**VALUES:** `true` oder `false`

```yaml
msg:
  design: <yellow>[<red><sender> <yellow>-> <red><receiver><yellow>]<white> <message>
```

**HELP:** Lege das Design von privaten Nachrichten fest.

**VALUES:** Beliebiger Text

**VARIABLES:**

- `<sender>` - Der Name des Senders
- `<receiver>` - Der Name des Empfängers
- `<message>` - Die Nachricht

```yaml
maintenance: false
```

**HELP:** Aktiviere oder deaktiviere den Wartungsmodus. Kann auch mit dem Befehl `/maintenance` umgeschaltet werden.

**VALUES:** `true` oder `false`

!!! warning
    `debug` sollte nur aktiviert werden, wenn du weißt, was du tust.

```yaml
debug: false
```

**HELP:** Aktiviere oder deaktiviere Debug-Nachrichten.

**VALUES:** `true` oder `false`
