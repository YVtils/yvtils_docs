# Fusion Example Configuration

!!! warning
    It is highly recommended to edit fusion configurations using the in-game GUI (`/fusion manage`). Incorrect changes can lead to broken fusions.

!!! info
    This will probably be recoded to use JSON in the future.

!!! info
    This is a shortened version of the Invisible Item Frame fusion configuration.

```yaml
enabled: true
```

**HELP:** Enable or disable the fusion.

**VALUES:** `true` or `false`

```yaml
name: Invisible Item Frame
```

**HELP:** The name of the fusion.

**VALUES:** Any string

```yaml
displayItem: ITEM_FRAME
```

**HELP:** The item that will be displayed in the fusion overview.

**VALUES:** Any item

```yaml
description: <white>Craft an <gold>invisible <white>Item Frame
```

**HELP:** The description of the fusion displayed in the overview.

**VALUES:** Any string

```yaml
tags: Decoration; Display; Aesthetic;
```

**HELP:** Tags that describe the fusion. Splited by `;`.

**VALUES:** Any string

---

```yaml
input:
  (Glow) Item Frame:
    '0':
    - item: ITEM_FRAME
    - amount: '1'
    - data: ''
    '1':
    - item: GLOW_ITEM_FRAME
    - amount: '1'
    - data: ''
  Any sort of Glass Pane:
    '0':
    - item: Glass_Pane
    - amount: '4'
    - data: ''
    ...
```

```yaml
input:
```

**HELP:** Defines the sort of items that can be used to craft the fusion.

```yaml
(Glow) Item Frame:
```

**HELP:** The name displayed for the first type of item.

```yaml
  '0':
  - item: ITEM_FRAME
  - amount: '1'
  - data: ''
  '1':
  - item: GLOW_ITEM_FRAME
  - amount: '1'
  - data: ''
```

**HELP:** The items that can be used to craft the fusion. With the item, amount, and data.

```yaml
Any sort of Glass Pane:
```

**HELP:** The name displayed for the second type of item.

```yaml
  '0':
  - item: Glass_Pane
  - amount: '4'
  - data: ''
  ...
```

**HELP:** The items that can be used to craft the fusion. With the item, amount, and data.

---

```yaml
output:
  '0':
  - item: ITEM_FRAME
  - amount: '4'
  - name: <gold>Invisible Item Frame
  - lore: <white>Place this Item Frame and it will be invisible! <newline><red>Empty
      Item Frames will be destroyed and dropped after one minute!
  - data: INVISIBLE
  ...
```

```yaml
output:
```

**HELP:** Defines the output of the fusion.

```yaml
'0':
```

**HELP:** The index of the output.

```yaml
  - item: ITEM_FRAME
```

**HELP:** The item that will be outputted.

```yaml
  - amount: '4'
```

**HELP:** The amount of the item that will be outputted.

```yaml
  - name: <gold>Invisible Item Frame
```

**HELP:** The name of the item that will be outputted.

```yaml
  - lore: <white>Place this Item Frame and it will be invisible! <newline><red>Empty
    Item Frames will be destroyed and dropped after one minute!
```

**HELP:** The lore of the item that will be outputted.

```yaml
  - data: INVISIBLE
```

**HELP:** The data of the item that will be outputted.

**VALUES:**

- `INVISIBLE` for invisible item frames
- `PLAYER_HEAD` for custom player heads

---
