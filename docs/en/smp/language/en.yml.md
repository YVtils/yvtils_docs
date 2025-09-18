# Language Strings Configuration

!!! info
    If you want to change some language strings and need help contact us on our [Discord](https://yvtils.net/yvtils/support)!

    Maybe someday someone will write this part of the documentation.

```yaml
Language: EN
'#1': Please always use given variables! You can recognize them by looking for with
  percentages surrounded words
START_MESSAGE: <prefix> <green>Plugin is starting!
START_COMPLETED_MESSAGE: <prefix> <dark_green>Plugin has started successfully!
STOP_MESSAGE: <prefix> <red>Plugin is getting stopped!
STOP_COMPLETED_MESSAGE: <prefix> <dark_red>Plugin got stopped!
PLUGIN_UP_TO_DATE: <prefix> <white>The Plugin has no Updates available!
PLUGIN_UPDATE_AVAILABLE: <prefix> <yellow>The Plugin Version <newversion> is now available.
  The Server is using <oldversion>. Download the newest version here <link>
PLAYER_PLUGIN_UPDATE_AVAILABLE: '<prefix> <white>Update available:<newline><yellow>Running
  Version: <gray><oldVersion><newline><yellow>Newest Version: <gray><newVersion><newline><yellow>Download:
  <gray><link>'
UNKNOWN_TIME_FORMAT: This time format is not available!
WHITELIST_EMPTY: The whitelist is empty!
PLAYER_NOT_ONLINE: This player is not online!
PLAYER_UNKNOWN: <prefix> <dark_red>Unkown Player
PLAYER_ALREADY_BANNED: This player is already banned!
MISSING_PERMISSION: '<red>Missing Permission:'
SPAWN_ELYTRA_BOOST: <white>Press <yellow><key><white> to boost yourself
SMP_START_MESSAGE: <light_purple>Have fun at project name!
SMP_ALREADY_STARTED: <light_purple>This SMP has already started!
FLY_COMMAND_ENABLE: <gray>You can fly now!
FLY_COMMAND_DISABLE: <gray>You can't fly anymore!
FLY_COMMAND_ENABLE_OTHER: <gray><player> can now fly!
FLY_COMMAND_DISABLE_OTHER: <gray><player> can't fly anymore!
HEAL_PLAYER_HEALED: <gray>You got <dark_gray><bold>healed!
HEAL_OTHER_PLAYER_HEALED: <gray><player> got <dark_gray><bold>healed!
GODMODE_COMMAND_ENABLE: <gray>God Mode is now <dark_gray>activated<gray>!
GODMODE_COMMAND_DISABLE: <gray>God Mode is now <dark_gray>deactivated<gray>!
GODMODE_COMMAND_ENABLE_OTHER: <gray><player> is now in the God Mode!
GODMODE_COMMAND_DISABLE_OTHER: <gray><player> is not in the God Mode anymore!
GAMEMODE_SWITCH: <gray>Your game mode got changed to <green><gamemode><gray>!
GAMEMODE_SWITCH_OTHER: <gray>The game mode of <player> got changed to <green><gamemode><gray>!
GAMEMODE_SWITCH_ALREADY_IN_THIS_GAMEMODE: <red>You are already in this Gamemode!
GAMEMODE_SWITCH_ALREADY_IN_THIS_GAMEMODE_OTHER: <red><player> is already in this game
  mode!
MSG_NOTE: <yellow>[<red>Note<yellow>]<white> <message>
MSG_PLAYER_WENT_OFFLINE: <prefix> <dark_red>The player with which you have written,
  has gone offline!
MSG_HAVENT_MESSAGED_A_PLAYER: <prefix> <dark_red>You haven't written to anybody yet!
MOD_NO_REASON: No Reason was given!
MOD_PLAYER_NOT_BANNED: This player is not banned!
MOD_ANNOUNCEMENT_KICK: '<prefix> <dark_gray><player> <gray>got kicked from <dark_gray><moderator><gray>!
  Reason: <dark_gray><reason>'
MOD_ANNOUNCEMENT_BAN: '<prefix> <dark_gray><player> <gray>got banned from <dark_gray><moderator><gray>!
  Reason: <dark_gray><reason>'
MOD_ANNOUNCEMENT_TEMPBAN: '<prefix> <dark_gray><player> <gray>got banned temporary
  from <dark_gray><moderator><gray>! Reason: <dark_gray><reason>, Duration: <dark_gray><duration>'
MOD_ANNOUNCEMENT_UNBAN: <prefix> <dark_gray><player> <gray>got unbanned from <dark_gray><moderator><gray>!
MAINTENANCE_PLAYER_NOT_ALLOWED_TO_JOIN_KICK_MESSAGE: You are not allowed to join the
  server while maintenance works!
MAINTENANCE_COMMAND_DEACTIVATE: <gray>The maintenance mode is now <green>deactivated<gray>!
MAINTENANCE_COMMAND_ACTIVATE: <gray>The maintenance mode is now <green>activated<gray>!
MAINTENANCE_ALREADY_STATE: <gray>The maintenance mode is already in this state!
MAINTENANCE_ILLEGAL_CONFIG_VALUE: This config value is not valid!
COMMAND_USAGE: '<gray>Use:'
COMMAND_REPLACE_COPY_COMMAND_TO_CLIPBOARD: <gray>Click to copy!
COMMAND_REPLACE_NEW_COMMAND_INFO: '<gray>Please use: COMMAND'
TAB_COMPLETER_MOD_COMMAND_DURATION: Duration
TAB_COMPLETER_MOD_COMMAND_REASON: '[Reason]'
MODULE_DISCORD_NO_BOT_TOKEN_GIVEN: No bot token was found. Please enter one or disable
  this module!
MODULE_DISCORD_STARTUP_FAILED: Bot startup has failed! Please check your configurations!
MODULE_DISCORD_STARTUP_FINISHED: Bot startup was successful! The bot should be online
  now!
MODULE_DISCORD_REGISTERED_NAME_CHANGE: Discord user '<discordUser>' has changed his
  whitelisted account from '<oldName>' to '<newName>'
MODULE_DISCORD_REGISTERED_NAME_ADD: Discord user '<discordUser>' has added his Minecraft
  account '<name>' to the whitelist
MODULE_DISCORD_REGISTERED_NAME_WRONG: Discord user '<discordUser>' has tried to whitelist
  the Minecraft account '<name>', but it failed! -> Account does not exist
MODULE_DISCORD_REGISTERED_NAME_SERVERERROR_CHECK_INPUT: Discord user '<discordUser>'
  has tried to whitelist the Minecraft account '<name>', but it failed! -> Authentication
  server is not reachable
EMBED_BUILDER_TITLE_NAME_CHANGE: You successfully changed your Minecraft account!
EMBED_BUILDER_DESCRIPTION_NAME_CHANGE: <oldName> -> <newName>
EMBED_BUILDER_TITLE_NAME_ADD: You successfully whitelisted your account!
EMBED_BUILDER_DESCRIPTION_NAME_ADD: 'Account Name: <accountName>'
EMBED_BUILDER_TITLE_NAME_NOTEXISTING: This Minecraft account does not exist!
EMBED_BUILDER_DESCRIPTION_NAME_NOTEXISTING: 'Account Name: <accountName> • Check the
  name and try again! If you think this could be a bug, contact the developer or server
  owner!'
EMBED_BUILDER_TITLE_SERVER_ERROR: Authentication servers are not available!
EMBED_BUILDER_DESCRIPTION_SERVER_ERROR: 'Account Name: <accountName> • Try again in
  a few minutes/hours! If this error persist contact the developer!'
EMBED_BUILDER_TITLE_NAME_UNALLOWED_CHARACTERS: This Minecraft account does not exist!
EMBED_BUILDER_DESCRIPTION_NAME_UNALLOWED_CHARACTERS: Account Name
EMBED_BUILDER_TITLE_ACCOUNT_ALREADY_WHITELISTED: This account is already whitelisted!
EMBED_BUILDER_DESCRIPTION_ACCOUNT_ALREADY_WHITELISTED: 'Account Name: <accountName>
  • This account is already whitelisted!'
EMBED_CMD_WHITELIST_CHECK_TITLE: Whitelist Check
EMBED_CMD_WHITELIST_CHECK_WHITELISTED_DESC: 'Account Name: <mcName> • This account
  is whitelisted as <dcName>!'
EMBED_CMD_WHITELIST_CHECK_NOT_WHITELISTED_DESC: 'Account Name: <mcName> • This account
  is not whitelisted!'
EMBED_CMD_WHITELIST_ADD_TITLE: You successfully whitelisted this account!
EMBED_CMD_WHITELIST_ADD_DESC: 'Minecraft Account: <mcName> • Discord Account: <dcName>'
EMBED_CMD_WHITELIST_REPLACE_TITLE: You successfully changed the whitelisted account
  of <dcName>!
EMBED_CMD_WHITELIST_REPLACE_DESC: <oldName> -> <newName>
EMBED_CMD_WHITELIST_REMOVE_TITLE: Which account do you want to remove from the whitelist?
EMBED_CMD_WHITELIST_REMOVE_DESC: ￬ Choose it down here ￬
EMBED_CMD_WHITELIST_REMOVED_TITLE: You successfully removed the Minecraft account
  <mcName> (<dcName>) from the whitelist!
EMBED_CMD_WHITELIST_REMOVED_DESC: Do you want to remove a second account? <newline>
  ￬ Choose it down here ￬
MODULE_DISCORD_CMD_REGISTERED_ADD: Discord user '<discordUser>' has whitelisted the
  Minecraft account '<mcName>' (linked with '<dcName>')
MODULE_DISCORD_CMD_REGISTERED_CHANGE: Discord user '<discordUser>' has changed the
  linked account from '<dcName>' from '<oldName>' to '<newName>'
MODULE_DISCORD_CMD_REGISTERED_REMOVE: Discord user '<discordUser>' has removed the
  Minecraft account '<mcName>' (linked with '<dcName>') from the whitelist
EMBED_CMD_ROLE_ADD_ERROR_TITLE: There occurred an error while adding the role!
EMBED_CMD_ROLE_ADD_ERROR_DESC: The role that should be given (<role>), could not be
  given to the user because of the wrong hierarchy! Please set the bot role over the
  role which should be given to the user.
MODULE_STATUS_OTHER_PLAYER_HAS_NO_STATUS: This player has no status set!
MODULE_STATUS_CLEAR_OTHER_UNALLOWED: <red>You can't clear the status of other players!
MODULE_STATUS_CLEAR_OTHER_CLEARED: <gray>You successfully cleared the status of <yellow><player>
  <gray>!
MODULE_STATUS_CLEAR_CLEARED: <gray>You successfully cleared the status!
MODULE_STATUS_PLAYER_HAS_NO_STATUS: <gray>You have no status set!
MODULE_STATUS_NOT_ALLOWED_TO_SET_CUSTOM_STATUS: <gray>You are missing permissions
  to set a custom status!
MODULE_STATUS_NO_DEFAULT_STATUS: <gray>This is not a default status!
MODULE_STATUS_SET: '<gray>New status: <white><status>'
MODULE_STATUS_SELECTED_STATUS_JOIN_ANNOUNCEMENT: '<gold>Welcome back!<newline><gray>Current
  status: <white><status>'
MODULE_CCR_ACCEPT_RECIPE: <green>Accept crafting recipe
MODULE_INVSEE_INVENTORY: <yellow>Inventory of <player>
MODULE_INVSEE_ENDERCHEST: <dark_purple>Enderchest of <player>
PLAYER_ARGUMENT_MISSING: <red>To use this command here, a player is required!
GLOBALMUTE_ENABLE_ANNOUNCEMENT: <prefix> <gray>The global mute got <green>activated<gray>!
GLOBALMUTE_DISABLE_ANNOUNCEMENT: <prefix> <gray>The global mute got <green>deactivated<gray>!
GLOBALMUTE_ENABLE_FEEDBACK: <prefix> <gray>You <green>deactivated <gray>the chat!
GLOBALMUTE_DISABLE_FEEDBACK: <prefix> <gray>You <green>activated <gray>the chat!
GLOBALMUTE_TRY_TO_WRITE: <prefix> <gray>The global mute is activated!
GLOBALMUTE_ALREADY_STATE: <prefix> <gray>The global mute is already in this state!
SPEED_CHANGE_SELF: <gray>Your speed got changed to <green><speed><gray>!
SPEED_CHANGE_OTHER: <gray>The speed of <yellow><player> <gray>got changed to <green><speed><gray>!
SPEED_RESET_SELF: <gray>Your speed got reset!
SPEED_RESET_OTHER: <gray>The speed of <yellow><player> <gray>got reset!
ADVANCEMENT_ANNOUNCEMENT: <white><player> has made the advancement <advancement>
VANISH_ACTIVATE: <prefix> <gray>Vanish is now activated!
VANISH_DEACTIVATE: <prefix> <gray>Vanish is now deactivated!
VANISH_REFRESH: <prefix> <gray>Your vanish settings got refreshed!
VANISH_REFRESH_OTHER: <prefix> <gray>The vanish settings of <yellow><player> <gray>got
  refreshed!
MOD_ANNOUNCEMENT_MUTE: '<prefix> <dark_gray><player> <gray>got muted from <dark_gray><moderator><gray>!
  Reason: <dark_gray><reason>'
MOD_ANNOUNCEMENT_TEMPMUTE: '<prefix> <dark_gray><player> <gray>got temporary muted
  from <dark_gray><moderator><gray>! Reason: <dark_gray><reason><gray>, Duration:
  <dark_gray><duration>'
MOD_ANNOUNCEMENT_UNMUTE: <prefix> <dark_gray><player> <gray>got unmuted from <dark_gray><moderator><gray>!
PLAYER_ALREADY_MUTED: This player is already muted!
MOD_PLAYER_NOT_MUTED: <prefix> <dark_gray><player> <gray>is not muted!
MUTED_TRY_TO_WRITE: '<prefix> <gray>You are muted! Reason: <dark_gray><reason><gray>,
  Duration: <dark_gray><duration>'
PLAYER_GOT_MUTED: '<prefix> <gray>You got muted! Reason: <dark_gray><reason>'
PLAYER_GOT_TEMPMUTED: '<prefix> <gray>You got muted temporary! Reason: <dark_gray><reason><gray>,
  Duration: <dark_gray><duration>'
PLAYER_GOT_UNMUTED: <prefix> <gray>You got unmuted!
MODULE_STATUS_BLACKLISTED_STATUS: <gray>This status is <red>blacklisted<gray>!
VANISH_TOGGLE_OTHER: <prefix> <gray>Vanish of <yellow><player> <gray>got toggled!
MODULE_VANISH_VANISH_LORE: <white>Use Dye to toggle vanish
MODULE_VANISH_LAYER_LORE: <white>Click on the map to switch between layers <newline><white>Click
  on the dye to toggle the use of layers <newline><newline><gray>Layer 1 < Layer 2
  < Layer 3 | Higher Layers can see lower ones, but not vice versa
MODULE_VANISH_ITEM_PICKUP_LORE: <white>Use Dye to toggle item pickup <newline><white>If
  enabled you are able to pick up items
MODULE_VANISH_INV_INTERACTION_LORE: <white>Use Dye to toggle silent inventory interaction
  <newline><white>If enabled chests won't be visible as opened to other players
MODULE_VANISH_MOB_TARGET_LORE: <white>Use Dye to toggle mob target <newline><white>If
  enabled mobs won't target you
FORGING_TOO_EXPENSIVE: <white>To combine these items, you will need <yellow><level>
  levels
MODULE_MULTIMINE_ADD_BLOCK: <white>The block <yellow><block> <white>was added to the
  MultiMine list!
MODULE_MULTIMINE_REMOVE_BLOCK: <white>The block <yellow><block> <white>was removed
  from the MultiMine list!
MODULE_MULTIMINE_ADD_MULTIPLE: '<white>The following blocks were added to the MultiMine
  list: <newline><yellow><blocks>'
MODULE_MULTIMINE_REMOVE_MULTIPLE: '<white>The following blocks were removed from the
  MultiMine list: <newline><yellow><blocks>'
MODULE_MULTIMINE_NO_BLOCK: <white>No block was specified!
MODULE_MULTIMINE_NO_BLOCK_IN_HAND: <white>No block was found in your hand!
MODULE_MULTIMINE_NO_CONTAINER_IN_HAND: <white>No container was found in your hand!
MODULE_MULTIMINE_MULTIPLE_CONSOLE: <white>Multiple blocks can't be added via console!
MODULE_MULTIMINE_BLOCK_ALREADY_IN_LIST: <white>The block <yellow><block> <white>is
  already in the list!
MODULE_MULTIMINE_BLOCK_NOT_IN_LIST: <white>The block <yellow><block> <white>is not
  in the list!
MODULE_WAYPOINT_ALREADY_EXISTS: <white>The waypoint <yellow><waypoint> <white>already
  exists!
MODULE_WAYPOINT_NOT_FOUND: <white>The waypoint <yellow><waypoint> <white>does not
  exist!
MODULE_WAYPOINT_CREATED: <white>The waypoint <yellow><waypoint> <white>got created!
MODULE_WAYPOINT_DELETED: <white>The waypoint <yellow><waypoint> <white>got deleted!
MODULE_WAYPOINT_DELETE_NOT_ALLOWED: <white>You are not allowed to delete the waypoint
  <yellow><waypoint><white>!
MODULE_WAYPOINT_NAVIGATE_STARTED: <white>Navigating to <yellow><waypoint> <white>started!
MODULE_WAYPOINT_NAVIGATE_STOPPED: <white>Navigating to <yellow><waypoint> <white>stopped!
MODULE_WAYPOINT_NAVIGATE_FINISHED: <white>Navigating to <yellow><waypoint> <white>finished!
MODULE_FUSION_PLAYER_HEAD_DISPLAY_NAME: <gold><player>s head
MODULE_FUSION_LOAD_PLAYER_HEAD_FAILED: <red>An error occurred while loading the player
  head!
MODULE_FUSION_INFO_POINT: '<yellow> Edit Fusion Items: <newline><gray>    - Left click
  on an item in the lower inventory to add the item to the input <newline><gray>    -
  Right click on an item in the lower inventory to add the item to the output <newline><gray>    -
  Left click on an item in the upper inventory to edit the item <newline><gray>    -
  Right click on an item in the upper inventory to remove the item '
MODULE_FUSION_CHANGE_THUMBNAIL: <green>Change Thumbnail
MODULE_FUSION_EDIT_NAME: '<gold>Edit Fusion Name <newline><gray>Current Name: <white><name><newline><red>''c''
  to cancel'
MODULE_FUSION_EDIT_DESCRIPTION: '<gold>Edit Fusion Description <newline><gray>Current
  Description: <white><description><newline><red>''c'' to cancel<newline><gray><click:open_url:https://yvtils.net/yvtils/colorcodes>Color
  Code Guide</click>'
MODULE_FUSION_UPDATED_NAME: <green>The name has been changed to <white><name> <green>!
MODULE_FUSION_UPDATED_DESCRIPTION: <green>The description has been changed to <white><description>
  <green>!
MODULE_FUSION_FILTER: <yellow>Filter
MODULE_FUSION_FILTER_LORE: <gray>Click to filter by tag
MODULE_FUSION_EDIT_TAG: '<gold>Edit Fusion Tag <newline><gray>Current Tag: <white><tag><newline><red>''c''
  to cancel'
MODULE_FUSION_CREATE_TAG: <gold>Creating new Fusion Tag <newline><red>'c' to cancel
GUI_LEFT_CLICK_EDIT: <green>Left Click to edit
GUI_RIGHT_CLICK_REMOVE: <red>Right Click to remove
GUI_PAGE_BACK: <red>Back
PROCESS_CANCELLED: <red>Cancelled!
INPUT_TOO_LONG: <red>The entered text is too long!
ENABLED: ENABLED
DISABLED: DISABLED
NONE: None
```
