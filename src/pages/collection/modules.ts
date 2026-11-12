import type { PermissionEntry } from '../../components/layout/PermissionList'

export type ModuleSectionId = 'overview' | 'commands' | 'configuration' | 'permissions'

type ModuleSection = {
  id: ModuleSectionId
  paragraphs: readonly string[]
  code?: string
  image?: string
  permissions?: readonly PermissionEntry[]
  settings?: readonly { name: string; description: string }[]
}

export type ModuleGuide = {
  slug: string
  name: string
  source: string
  sections: readonly ModuleSection[]
}

// TODO: Replace the image placeholders with current recode-branch screenshots.
export const moduleGuides: readonly ModuleGuide[] = [
  {
    slug: 'vanish', name: 'Vanish', source: 'vanish',
    sections: [
      { id: 'overview', paragraphs: ['Hide staff from ordinary players using permission-controlled visibility layers. Higher or equal active layers can see lower layers.', 'Vanish state is not persisted across disable. Personal settings are saved separately.'], image: 'Vanish personal settings menu with layer and capability controls' },
      { id: 'commands', paragraphs: ['/v is an alias for /vanish. A numeric layer requires both layer-command access and permission for that specific layer.', 'Silent toggles do not send fake join or leave messages. Personal settings can also disable announcements.'], code: '/vanish\n/vanish <1-100>\n/vanish silent\n/vanish settings\n/vanish config' },
      { id: 'configuration', paragraphs: ['Enable vanish in plugins/yvtils/modules.yml. Global settings are stored in plugins/yvtils/vanish/config.yml; personal preferences are stored in players.json.', 'Each capability requires its global switch and permission. Silent container views are read-only snapshots and update from the real inventory.'] },
      { id: 'permissions', paragraphs: ['Each selected layer requires its own permission in addition to numeric-command access. Capabilities also require their global configuration switch.'], permissions: [
        { name: 'yvtils.vanish.use', defaultAccess: 'Operators', description: 'Toggle vanish.' },
        { name: 'yvtils.vanish.layers', defaultAccess: 'Operators', description: 'Use the numeric layer command.' },
        { name: 'yvtils.vanish.layer.<1-100>', defaultAccess: 'Operators', description: 'Access an individual layer.' },
        ...['silentcontainers', 'preventpickup', 'preventdrop', 'preventmobtarget', 'preventdamage', 'preventphysical', 'disablecollision'].map((capability) => ({ name: `yvtils.vanish.function.${capability}`, defaultAccess: 'Operators', description: `Enable the ${capability} capability when configured.` })),
        { name: 'yvtils.vanish.config', defaultAccess: 'Operators', description: 'Open the configuration editor.' },
        { name: 'yvtils.vanish.*', defaultAccess: 'Operators', description: 'Access registered vanish permissions and layers.' },
      ] },
    ],
  },
  {
    slug: 'moderation', name: 'Moderation', source: 'moderation',
    sections: [
      { id: 'overview', paragraphs: ['Manage bans, mutes, kicks and warnings for online and known offline players. The moderation GUI includes history, reasons, durations and confirmation screens.'], image: 'Moderation player browser and punishment confirmation screen' },
      { id: 'commands', paragraphs: ['Temporary actions take a duration and unit, such as 30 m. The GUI offers the same actions subject to their individual permissions.'], code: '/ban <player> [reason]\n/tempban <player> <time> <unit> [reason]\n/kick <player> [reason]\n/mute <player> [reason]\n/tempmute <player> <time> <unit> [reason]\n/unban <player>\n/unmute <player>\n/warn <player> [reason]\n/modgui [player-name-or-UUID]' },
      { id: 'configuration', paragraphs: ['Enable moderation in plugins/yvtils/modules.yml. Module settings and saved mute and warning data are under plugins/yvtils/moderation/.', 'Ban-screen messages can be customized through moderation.ban.screen.permanent and moderation.ban.screen.temporary in the shared language files.'] },
      { id: 'permissions', paragraphs: ['Each moderation action requires its corresponding permission, including within the GUI.'], permissions: [
        { name: 'yvtils.moderation.command.modgui', defaultAccess: 'Operators', description: 'Open the moderation GUI and history.' },
        ...['ban', 'tempban', 'kick', 'mute', 'tempmute', 'warn', 'unban', 'unmute'].map((action) => ({ name: `yvtils.moderation.command.${action}`, defaultAccess: 'Operators', description: `Use the ${action} action.` })),
        { name: 'yvtils.moderation.*', defaultAccess: 'Operators', description: 'Access the registered moderation permissions.' },
      ] },
    ],
  },
  {
    slug: 'discord', name: 'Discord', source: 'discord',
    sections: [
      { id: 'overview', paragraphs: ['Connect Minecraft and Discord with chat and console synchronization, server statistics, whitelist registration and linked-account management.', 'Registration checks account existence when configured, but that does not prove account ownership.'], image: 'Discord registration panel and Minecraft linked-account management screen' },
      { id: 'commands', paragraphs: ['Use /discordaccounts to manage saved links from Minecraft or the console. GUI variants are player-only. On Discord, /whitelist setup posts the registration panel.'], code: '/discordaccounts list [page]\n/discordaccounts inspect <entry>\n/discordaccounts add <name-or-UUID> <Discord-ID>\n/discordaccounts remove <entry>\n/discordaccounts replace <entry> <name-or-UUID>\n/discordaccounts gui [entry]' },
      { id: 'configuration', paragraphs: ['Enable discord and configure plugins/yvtils/discord/config.yml. Registration requires appToken, mainGuild and whitelistFeature.roles, plus the required bot permissions and intents.', 'Keep the bot token private. Role update failures can leave a committed account link with roles needing administrative reconciliation; check the response and server logs.', 'The source setup guide linked below includes bot permissions, registration and recovery details.'] },
      { id: 'permissions', paragraphs: ['GUI access also requires the read permission. Discord setup has separate Discord-side permission and role hierarchy requirements.'], permissions: [
        { name: 'yvtils.discord.accounts.read', defaultAccess: 'Operators', description: 'List and inspect account links.' },
        { name: 'yvtils.discord.accounts.gui', defaultAccess: 'Operators', description: 'Open account management inventories.' },
        { name: 'yvtils.discord.accounts.add', defaultAccess: 'Operators', description: 'Add account links.' },
        { name: 'yvtils.discord.accounts.remove', defaultAccess: 'Operators', description: 'Remove account links.' },
        { name: 'yvtils.discord.accounts.replace', defaultAccess: 'Operators', description: 'Replace linked accounts.' },
      ] },
    ],
  },
  {
    slug: 'fusion', name: 'Fusion', source: 'fusion',
    sections: [
      { id: 'overview', paragraphs: ['Browse and craft custom recipes, including invisible item frames, light blocks, player heads and the reusable Nourishing Flask.', 'The recipe browser shows requirements and missing ingredients; crafting checks inventory space, experience and permissions.'], image: 'Fusion recipe browser and recipe detail screen' },
      { id: 'commands', paragraphs: ['/fc and /ccr are aliases for /fusion. Managers can create, edit and reload recipes.'], code: '/fusion\n/fusion manage\n/fusion new <id>\n/fusion reload' },
      { id: 'configuration', paragraphs: ['Enable fusion in plugins/yvtils/modules.yml. Recipe JSON files live in plugins/yvtils/fusion/recipes/. The module editor is also accessible through /yvtils config.', 'Reload validates recipe files; consult the source guide for the recipe format and crafting rules.'] },
      { id: 'permissions', paragraphs: ['Individual recipes may require additional permissions.'], permissions: [
        { name: 'yvtils.fusion.use', defaultAccess: 'Everyone', description: 'Use the recipe browser.' },
        { name: 'yvtils.fusion.manage', defaultAccess: 'Operators', description: 'Manage recipes.' },
        { name: 'yvtils.fusion.flask.use', defaultAccess: 'Everyone', description: 'Use the Nourishing Flask; also requires Fusion access.' },
      ] },
    ],
  },
  {
    slug: 'multimine', name: 'MultiMine', source: 'multiMine',
    sections: [
      { id: 'overview', paragraphs: ['Mine connected blocks and fell trees with configurable block and tool restrictions, break limits and cooldowns. Sneaking opts out.', 'Normal activation requires Survival mode and permission. Each player can control their own toggle.'], image: 'MultiMine settings menu' },
      { id: 'commands', paragraphs: ['/mm is an alias for /multiMine. Management actions include adding and removing blocks; settings opens the server-wide settings menu.'], code: '/mm toggle [player]\n/mm settings\n/mm add <block>\n/mm remove <block>\n/mm addMultiple\n/mm removeMultiple' },
      { id: 'configuration', paragraphs: ['Enable the case-sensitive multiMine module. Its settings are stored in plugins/yvtils/multiMine/config.yml.', 'The enabled setting defaults to true. Changing it in /mm settings applies immediately and saves when the menu closes; disabling it preserves personal toggles.'] },
      { id: 'permissions', paragraphs: ['MultiMine separates feature access, personal toggles and administration.'], permissions: [
        { name: 'yvtils.multiMine.use', defaultAccess: 'Everyone', description: 'Use MultiMine.' },
        { name: 'yvtils.multiMine.command.toggle.self', defaultAccess: 'Everyone', description: 'Toggle your own MultiMine setting.' },
        { name: 'yvtils.multiMine.command.toggle.others', defaultAccess: 'Operators', description: 'Toggle MultiMine for another player.' },
        { name: 'yvtils.multiMine.command.manage', defaultAccess: 'Operators', description: 'Manage blocks and settings.' },
      ] },
    ],
  },
  {
    slug: 'server', name: 'Server', source: 'server',
    sections: [
      { id: 'overview', paragraphs: ['Customize the server-list presentation, displayed capacity, join and quit messages, and maintenance mode.'] },
      { id: 'commands', paragraphs: ['Enabling maintenance disconnects players without the bypass permission and prevents them joining until it is disabled. Existing ban and whitelist denials are preserved.'], code: '/maintenance\n/maintenance toggle\n/maintenance true\n/maintenance false' },
      { id: 'configuration', paragraphs: ['Enable server and configure plugins/yvtils/server/config.yml.', 'Custom connection templates can use <player> for a Status-formatted name and <playername> for the plain account name.'], settings: [
        { name: 'maintenance.enabled', description: 'Saved by commands and the configuration GUI and restored at startup.' },
      ] },
      { id: 'permissions', paragraphs: ['Maintenance access and bypass are controlled separately.'], permissions: [
        { name: 'yvtils.command.maintenance', defaultAccess: 'Operators', description: 'Use the maintenance command.' },
        { name: 'yvtils.bypass.maintenance', defaultAccess: 'Operators', description: 'Join and remain online during maintenance.' },
      ] },
    ],
  },
  {
    slug: 'sit', name: 'Sit', source: 'sit',
    sections: [
      { id: 'overview', paragraphs: ['Sit at your current position using a temporary invisible seat. Dismounting or disconnecting removes the seat.'] },
      { id: 'commands', paragraphs: ['Use /sit to sit or stand. /chair is an alias.'], code: '/sit' },
      { id: 'configuration', paragraphs: ['Enable sit in plugins/yvtils/modules.yml. The module currently exposes no separate configuration.'] },
    ],
  },
  {
    slug: 'waypoint', name: 'Waypoints', source: 'waypoint',
    sections: [
      { id: 'overview', paragraphs: ['Save public, private, unlisted or shared locations and navigate using a private terrain highlight and action-bar guidance.', 'This is a directional guide, not obstacle-avoiding pathfinding. Shared waypoints are visible to their owner and selected recipients.'], image: 'Waypoint browser, details and sharing menus' },
      { id: 'commands', paragraphs: ['/wp is an alias. New waypoints default to private; names are globally unique and case-insensitive.'], code: '/waypoint create <name> [public/private/unlisted/shared]\n/waypoint list\n/waypoint navigate <name>\n/waypoint delete <name>\n/waypoint stop\n/waypoint\n/waypoint manage\n/waypoint config' },
      { id: 'configuration', paragraphs: ['Enable waypoint. Saved locations live in plugins/yvtils/waypoint/waypoints.json; settings live in config.yml in the same folder.', '/waypoint config and /yvtils config provide in-game access.'], settings: [
        { name: 'trailLength', description: 'Maximum number of highlighted blocks.' },
        { name: 'arrivalDistance', description: 'Distance at which navigation reaches the destination.' },
        { name: 'highlightMaterial', description: 'Block material used for the trail highlight.' },
        { name: 'maxPerPlayer', description: 'Maximum waypoints per player.' },
      ] },
      { id: 'permissions', paragraphs: ['Waypoint management and configuration require elevated permissions.'], permissions: [
        { name: 'yvtils.waypoint.use', defaultAccess: 'Everyone', description: 'Use waypoints.' },
        { name: 'yvtils.waypoint.create', defaultAccess: 'Everyone', description: 'Create waypoints.' },
        { name: 'yvtils.waypoint.admin', defaultAccess: 'Operators', description: 'Manage all players’ waypoints.' },
        { name: 'yvtils.waypoint.config', defaultAccess: 'Operators', description: 'Open the configuration editor.' },
      ] },
    ],
  },
  {
    slug: 'essentials', name: 'Essentials', source: 'essentials',
    sections: [
      { id: 'overview', paragraphs: ['General server utilities include flight, game modes, healing, speed, god mode, ping, seed, PvP and dimension controls, chat formatting and optional Spawn Elytra.', 'Administrators can inspect online or offline player inventories and ender chests.'], image: 'Essentials inventory inspection and configuration screens' },
      { id: 'commands', paragraphs: ['These are examples of the available utilities. Inventory targets must be known to the server; editing requires an additional permission.'], code: '/fly\n/gamemode\n/heal\n/speed\n/god\n/ping\n/seed\n/pvp\n/dimension\n/invsee <known-name-or-UUID>\n/ecsee <known-name-or-UUID>' },
      { id: 'configuration', paragraphs: ['Enable essentials; settings live in plugins/yvtils/essentials/config.yml. Use /yvtils config to edit them in game.', 'These settings default to true. Removing the anvil cutoff does not make an operation free or change its calculated cost.'], settings: [
        { name: 'allowChatColors', description: 'Enable MiniMessage chat formatting.' },
        { name: 'disableTooExpensive', description: 'Remove the anvil’s maximum XP-cost cutoff.' },
        { name: 'showAnvilCost', description: 'Report high anvil costs in chat while the bypass is enabled.' },
      ] },
      { id: 'permissions', paragraphs: ['Command permissions use the yvtils.essentials.command.<command> pattern. Ping defaults to everyone; administrative commands default to operators. Inventory editing additionally requires the corresponding edit permission.'], permissions: [
        { name: 'yvtils.essentials.command.ping', defaultAccess: 'Everyone', description: 'Use the ping command.' },
        { name: 'yvtils.essentials.command.invsee', defaultAccess: 'Operators', description: 'View a player’s inventory.' },
        { name: 'yvtils.essentials.command.invsee.edit', defaultAccess: 'Operators', description: 'Edit a player’s inventory.' },
        { name: 'yvtils.essentials.command.ecsee', defaultAccess: 'Operators', description: 'View a player’s ender chest.' },
        { name: 'yvtils.essentials.command.ecsee.edit', defaultAccess: 'Operators', description: 'Edit a player’s ender chest.' },
        { name: 'yvtils.essentials.config', defaultAccess: 'Operators', description: 'Open the module editor.' },
      ] },
    ],
  },
  {
    slug: 'message', name: 'Message', source: 'message',
    sections: [
      { id: 'overview', paragraphs: ['Send private messages to players and reply to the most recent contact. Multi-recipient messages require an additional permission.'] },
      { id: 'commands', paragraphs: ['/message, /tell, /whisper, /dm and /w are aliases for /msg; /r is an alias for /reply. Standard player selectors are supported.'], code: '/msg <player> <message>\n/msg @a <message>\n/reply <message>' },
      { id: 'configuration', paragraphs: ['Enable message in plugins/yvtils/modules.yml. Message text is registered through the shared language system.'] },
      { id: 'permissions', paragraphs: ['Recipients without receive permission are skipped in multi-recipient messages; direct messages and replies report unavailable delivery.'], permissions: [
        { name: 'yvtils.message.command.msg', defaultAccess: 'Everyone', description: 'Send private messages.' },
        { name: 'yvtils.message.command.reply', defaultAccess: 'Everyone', description: 'Reply to a message.' },
        { name: 'yvtils.message.receive', defaultAccess: 'Everyone', description: 'Receive messages and replies.' },
        { name: 'yvtils.message.command.msg.all', defaultAccess: 'Operators', description: 'Message multiple recipients; also requires the msg permission.' },
      ] },
    ],
  },
  {
    slug: 'regions', name: 'Regions', source: 'regions',
    sections: [
      { id: 'overview', paragraphs: ['Create full-height survival claims backed by WorldGuard, with owner, member and visitor roles, flag controls and visual boundary previews.', 'WorldGuard and its WorldEdit or FastAsyncWorldEdit dependency must be installed.'], image: 'Region creation and claim management menus' },
      { id: 'commands', paragraphs: ['Select two horizontal corners, preview and check the cost before creating a claim. /regions is an alias; /rg routing depends on WorldGuard command permissions.'], code: '/region\n/region pos1\n/region pos2\n/region preview\n/region cost\n/region create <name>\n/region info [name/UUID]\n/region list\n/region manage <name>\n/region delete <name/UUID>\n/region admin' },
      { id: 'configuration', paragraphs: ['Use /yvtils config or /region admin to manage server settings and flag policies. The module uses a WorldGuard-backed protection model.', 'Claim limits, pricing, world restrictions, flag policies and subzones are configurable. Changing a flag policy can reset that flag in all managed claims; review the source guide before applying changes.'] },
      { id: 'permissions', paragraphs: ['Action permissions control individual claim, flag, member and subzone operations. Administrative and bypass nodes default to operators.'], permissions: [
        { name: 'yvtils.regions.claim', defaultAccess: 'Everyone', description: 'Create a claim.' },
        { name: 'yvtils.regions.manage', defaultAccess: 'Everyone', description: 'Access claim management.' },
        { name: 'yvtils.regions.admin.others', defaultAccess: 'Operators', description: 'Manage other players’ claims; does not grant cost or limit bypass.' },
      ] },
    ],
  },
  {
    slug: 'stats', name: 'Stats', source: 'stats',
    sections: [
      { id: 'overview', paragraphs: ['Stats is opt-in YVtils usage telemetry. It is separate from Metrics, which collects Minecraft health and gameplay statistics.', 'Remote telemetry and default metrics remain off until consent is accepted. Previously transmitted data cannot be recalled after withdrawal.'] },
      { id: 'commands', paragraphs: ['The in-game menu offers explicit accept and decline/withdraw actions.'], code: '/yvtilsstats\n/yvtilsstats optin accept\n/yvtilsstats optin decline\n/yvtils config stats' },
      { id: 'configuration', paragraphs: ['Enable stats in plugins/yvtils/modules.yml; settings are generated in plugins/yvtils/stats/config.yml.', 'Player names, UUIDs, world names and seeds are not collected by default. The receiver necessarily sees the connection IP, and any configured server name is sent verbatim. See the source guide for the complete data and consent policy.'], settings: [
        { name: 'opt_in', description: 'Defaults to null (undecided); false declines and true accepts telemetry.' },
      ] },
      { id: 'permissions', paragraphs: ['Operators can administer Stats by default. The general /yvtils config command additionally requires launcher command access.'], permissions: [
        { name: 'yvtils.stats.manage', description: 'Administer Stats with /yvtilsstats.' },
        { name: 'yvtils.stats.optin', description: 'Administer Stats with /yvtilsstats.' },
        { name: 'yvtils.common.command.yvtils', description: 'Access the general /yvtils configuration command.' },
      ] },
    ],
  },
  {
    slug: 'metrics', name: 'Metrics', source: 'metrics',
    sections: [
      { id: 'overview', paragraphs: ['Collect server health and gameplay statistics in a local SQLite database and expose a Prometheus endpoint. Metrics is independent of the opt-in Stats telemetry module.', 'The module does not automatically send data outside the host. Identifying leaderboard and favorites exports are disabled by default.'] },
      { id: 'configuration', paragraphs: ['Enable metrics in plugins/yvtils/modules.yml and restart. Configure plugins/yvtils/metrics/config.yml; changes require a restart. The database is metrics.db in the same directory.', 'The default endpoint is http://127.0.0.1:9108/metrics. A non-loopback bind requires a bearer token environment variable. The endpoint uses plain HTTP: use a private network or HTTPS proxy and firewall for remote access.', 'No custom commands or GUI are registered. See the source setup guide for retention, privacy and collector configuration.'] },
    ],
  },
  {
    slug: 'yv-smp', name: 'YV SMP', source: 'yv-smp',
    sections: [
      { id: 'overview', paragraphs: ['Optional SMP start cinematics, world setup, music and persistent ambient sound sources. Music requires Simple Voice Chat; Minecraft sound and particle effects do not.', 'Enable yv-smp in modules.yml. Its runtime data folder is plugins/yvtils/yv_smp/.'], image: 'YV SMP control menu and ambient source example' },
      { id: 'commands', paragraphs: ['Ambient sources can play Minecraft sounds and particles; creation and movement use the player’s current position.'], code: '/yvsmp ambient create forest minecraft:ambient.cave 24 true 30s\n/yvsmp ambient set forest particle minecraft:firefly\n/yvsmp ambient play forest\n/yvsmp ambient info forest\n/yvsmp ambient list\n/yvsmp ambient move forest\n/yvsmp ambient remove forest' },
      { id: 'configuration', paragraphs: ['The module provides setup controls for the world border and spawn, plus start and audio settings. See the source guide for ambient source options and Simple Voice Chat audio setup.'] },
      { id: 'permissions', paragraphs: ['Separate yvtils.yv_smp.command nodes control start, setup, GUI and music actions; these default to operators.'], permissions: [
        { name: 'yvtils.yv_smp.command.ambient', defaultAccess: 'Operators', description: 'Manage ambient sound sources.' },
      ] },
    ],
  },
  {
    slug: 'remade-ender-dragon', name: 'Remade Ender Dragon', source: 'remade-ender-dragon',
    sections: [
      { id: 'overview', paragraphs: ['An optional module for player-scaled End encounters with staged attacks, warnings and team support objectives. Dragon egg rules can also be configured.', 'Egg rules apply in all worlds while the module is loaded, independently of encounter activation.'], image: 'Dragon encounter and in-game attack configuration menu' },
      { id: 'commands', paragraphs: ['Reload validates configuration and cleans up active custom encounters before automatic discovery resumes.'], code: '/redragon\n/redragon start\n/redragon stop\n/redragon status\n/redragon reload\n/redragon config\n/redragon trigger <attack-id>' },
      { id: 'configuration', paragraphs: ['Enable remade-ender-dragon in plugins/yvtils/modules.yml. Settings are generated in plugins/yvtils/remade-ender-dragon/config.yml; edit them and use /redragon reload or open /redragon config.', 'Activation can be EVERY, ADMIN or FIRST. Temporary keep-inventory during a fight defaults to false and applies only to the End world hosting the encounter.'] },
      { id: 'permissions', paragraphs: ['Encounter administration includes the configuration permission.'], permissions: [
        { name: 'yvtils.remade-ender-dragon.admin', defaultAccess: 'Operators', description: 'Manage encounters and access configuration.' },
        { name: 'yvtils.remade-ender-dragon.config', defaultAccess: 'Operators', description: 'Access module configuration.' },
      ] },
    ],
  },
]

const sectionLabels: Record<ModuleSectionId, string> = {
  overview: 'Overview', commands: 'Commands', configuration: 'Configuration', permissions: 'Permissions',
}

export function pagesForModule(module: ModuleGuide) {
  return module.sections.map((section) => ({
    id: section.id,
    label: sectionLabels[section.id],
    href: `/docs/collection/${module.slug}${section.id === 'overview' ? '' : `/${section.id}`}`,
  }))
}
