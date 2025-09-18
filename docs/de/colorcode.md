# Farb-Codes in YVtils Plugins

## Adventure API

- [Adventure API](https://docs.advntr.dev/)

Die YVtils-Plugins verwenden das Mini Message-Format der Adventure API, um Nachrichten zu formatieren. Dies ermöglicht eine Menge Anpassungen, einschließlich Farb-Codes. Die Farb-Codes werden als 'HTML-Tags' formatiert (`<green>Beispiel</green>`). Der schließende Tag ist optional, aber es wird empfohlen, ihn zu verwenden. Die Farb-Codes sind nicht case-sensitiv, also ist `<green>Beispiel</green>` dasselbe wie `<GREEN>Beispiel</GREEN>`.

### Farb-Codes

- `<black>` - Schwarz
- `<dark_blue>` - Dunkelblau
- `<dark_green>` - Dunkelgrün
- `<dark_aqua>` - Dunkelaqua
- `<dark_red>` - Dunkelrot
- `<dark_purple>` - Dunkellila
- `<gold>` - Gold
- `<gray>` - Grau
- `<dark_gray>` - Dunkelgrau
- `<blue>` - Blau
- `<green>` - Grün
- `<aqua>` - Aqua
- `<red>` - Rot
- `<light_purple>` - Helllila
- `<yellow>` - Gelb
- `<white>` - Weiß
- `<#FFFFFF>` - Hex-Farbe

### Formatierungs-Codes

- `<reset>` - Zurücksetzen
- `<bold>` - Fett
- `<italic>` - Kursiv
- `<underline>` - Unterstrichen
- `<strikethrough>` - Durchgestrichen
- `<obfuscated>` - Verschleiert

### Sonstiges

Es gibt auch andere Tags, die in den [Adventure API Docs](https://docs.advntr.dev/) zu finden sind, wie Hover- und Klickevents.
