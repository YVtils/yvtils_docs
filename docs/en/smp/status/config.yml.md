# Status Configuration

```yaml
display: <dark_gray>[<white><status><dark_gray>] |<white> <playerName>
```

**HELP:** Set the display of the status in the tablist.

**VALUES:** Any string

**VARIABLES:** `<status>`, `<playerName>`

```yaml
maxLength: 20
```

**HELP:** Set the maximum length of the status, calculated without color codes.

**VALUES:** Any integer

```yaml
defaultStatus:
  - <green>YV
  - <rainbow>YVtils</rainbow>
  - <gradient:#5e4fa2:#f79459>Chapter 2</gradient>
```

**HELP:** Selectable default status for players when using the `/status default <status>` command.

**VALUES:** Multiple strings

```yaml
blacklist:
  - blocked
```

**HELP:** Set the blacklist of status names.

**VALUES:** Multiple strings
