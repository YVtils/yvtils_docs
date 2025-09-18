# Waypoints Save File

!!! warning
    **WARNING:** Only edit this file if you know what you are doing. Incorrect changes can lead to data loss.

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

**STRUCTURE:**

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

**HELP:** UUID of the player creating the waypoint.

```yaml
spawn:
```

**HELP:** Name of the waypoint.

```yaml
visibility: public
```

**HELP:** The visibility of the waypoint.

**VALUES:** `public`, `private` or `unlisted`

```yaml
x: -1018.5820613639708
y: 252.0
z: -336.3733251160264
world: world
```

**HELP:** The location of the waypoint.
