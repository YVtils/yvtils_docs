# Fusion Example Configuration

!!! warning
    Fusion sollten nur über die In-Game GUI (`/fusion manage`) erstellt/bearbeitet werden. Manuelle Änderungen können zu Fehlern führen.

!!! info
    Dies wird wahrscheinlich in Zukunft in JSON umgeschrieben.

!!! info
    Dies ist eine verkürzte Version der Konfiguration für die Unsichtbare Item Frame Fusion.

```yaml
enabled: true
```

**HELP:** Aktiviere oder deaktiviere die Fusion.

**VALUES:** `true` or `false`

```yaml
name: Invisible Item Frame
```

**HELP:** Der Name der Fusion.

**VALUES:** Beliebiger Text

```yaml
displayItem: ITEM_FRAME
```

**HELP:** Das Item, das in der Fusion Übersicht angezeigt wird.

**VALUES:** Beliebiges Item

```yaml
description: <white>Craft an <gold>invisible <white>Item Frame
```

**HELP:** Die Beschreibung der Fusion, die in der Übersicht angezeigt wird.

**VALUES:** Beliebiger Text

```yaml
tags: Decoration; Display; Aesthetic;
```

**HELP:** Tags, die die Fusion beschreiben. Getrennt durch `;`.

**VALUES:** Beliebiger Text

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

**HELP:** Definiert die Art des Eintrags.

```yaml
(Glow) Item Frame:
```

**HELP:** Der Name, der für das erste Item angezeigt wird.

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

**HELP:** Die Items, welche für den Teil der Fusion verwendet werden können. Mit dem Item, der Menge und den Daten.

```yaml
Any sort of Glass Pane:
```

**HELP:** Der Name, der für das zweite Item angezeigt wird.

```yaml
  '0':
  - item: Glass_Pane
  - amount: '4'
  - data: ''
  ...
```

**HELP:** Die Items, welche für den Teil der Fusion verwendet werden können. Mit dem Item, der Menge und den Daten.

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

**HELP:** Definiert den Output der Fusion.

```yaml
'0':
```

**HELP:** Der Index des Outputs.

```yaml
  - item: ITEM_FRAME
```

**HELP:** Das Item, welches ausgegeben wird.

```yaml
  - amount: '4'
```

**HELP:** Die Menge des Items, welches ausgegeben wird.

```yaml
  - name: <gold>Invisible Item Frame
```

**HELP:** Der Name des Items, welches der Spieler erhählt.

```yaml
  - lore: <white>Place this Item Frame and it will be invisible! <newline><red>Empty
    Item Frames will be destroyed and dropped after one minute!
```

**HELP:** Die Beschreibung des Items, welches der Spieler erhählt.

```yaml
  - data: INVISIBLE
```

**HELP:** Die Data des Items, welches der Spieler erhählt.

**VALUES:**

- `INVISIBLE` für unsichtbare Item Frames
- `PLAYER_HEAD` für custom Spieler Köpfe

---
