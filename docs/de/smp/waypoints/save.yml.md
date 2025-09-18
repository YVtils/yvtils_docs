# Waypoints Save File

!!! warning
    **WARNUNG:** Diese Datei sollte nicht manuell bearbeitet werden. Manuelle Änderungen können zu Fehlern führen.

---

```yaml
aab8f297-b6f0-4ebb-a064-9968e1a1cc45:
  spawn:
    visibility: public
    x: -1018.5820613639708
    y: 252.0
    z: -336.3733251160264
    world: world
```

**AUFBAU:**

```yaml
<UUID>:
  <WAYPOINT_NAME>:
    visibility: <VISIBILITY>
    x: <X>
    y: <Y>
    z: <Z>
    world: <WORLD>
  <WAYPOINT_NAME_2>:
    visibility: <VISIBILITY>
    x: <X>
    y: <Y>
    z: <Z>
    world: <WORLD>
```

---

```yaml
aab8f297-b6f0-4ebb-a064-9968e1a1cc45:
```

**HELP:** UUID des Spielers, der den Waypoint erstellt hat.

```yaml
spawn:
```

**HELP:** Der Name des Waypoints.

```yaml
visibility: public
```

**HELP:** TDie Sichtbarkeit des Waypoints.

**VALUES:** `public`, `private` oder `unlisted`

```yaml
x: -1018.5820613639708
y: 252.0
z: -336.3733251160264
world: world
```

**HELP:** Die Position des Waypoints.
