# Status Configuration

```yaml
display: <dark_gray>[<white><status><dark_gray>] |<white> <playerName>
```

**HELP:** Legt das Format des Status fest.

**VALUES:** Beliebiger Text

**VARIABLES:** `<status>`, `<playerName>`

```yaml
maxLength: 20
```

**HELP:** Legt die maximale Länge des Status ohne Farbcodes fest.

**VALUES:** Beliebige Zahl

```yaml
defaultStatus:
  - <green>YV
  - <rainbow>YVtils</rainbow>
  - <gradient:#5e4fa2:#f79459>Chapter 2</gradient>
```

**HELP:** Standardstatus für den `/status default <status>` Befehl.

**VALUES:** Liste von Strings

```yaml
blacklist:
  - blocked
```

**HELP:** Status, die nicht gesetzt werden können.

**VALUES:** Liste von Strings
