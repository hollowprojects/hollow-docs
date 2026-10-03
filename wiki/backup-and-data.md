<div v-pre>

# Backup and your data

## Where your data is

Everything lives in one folder in your Windows roaming profile, shown in **Settings → About**
under **Data folder**. For the beta it is `%APPDATA%\Hollow Beta`. It holds the database, your
preferences, a small file recording whether you chose local or cloud mode, and a `logs` folder
with the sync log.

The installed app and this folder are independent: reinstalling, updating or deleting the app
leaves the folder alone, and deleting the folder gives you a fresh start with the same app.

## Exporting

**Settings → Account & data** has two exports.

- **Export backup** asks for a place to save, with **Save backup here**, and writes a dated backup
  *folder* there containing the whole local database and your preferences. Keep the folder as it
  is; restoring needs all of it. Make one before installing an update that changes how data is
  stored, and before anything you would want to undo.
- **Export as JSON** writes your notes, tasks, habits and projects as one readable JSON file, for
  keeping outside the app or moving elsewhere. It cannot be restored into Hollow.

The message under the buttons says where the file or folder went.

Single notes can be exported as Markdown from the note explorer's right-click menu.

## Restoring

**Settings → Account & data → Restore backup** asks you to confirm, then to choose a backup folder made by
**Export backup**. It replaces the local database with the one in the backup. When it finishes,
press **Restart now** (or quit and reopen the app) to load it.

Restore only works in **local mode**. In cloud mode the account is the source of truth, so
restoring a local copy would immediately conflict with it, and you get a message saying so
instead. To put a backup into an account: start fresh (below), choose **Use this device only for
now**, restore, then use **Settings → Account & data → Sign in to sync** to move the restored data into
the account.

Older single-file backups (a `.db` file from early versions) can still be chosen, but they only
bring back part of the data. If you are signed in, **Settings → Account & data → Import database to
cloud** is the better way to bring one of those in.

## Starting over

To return the installed app to its first-launch state:

1. Quit the app.
2. Delete the data folder shown in Settings → About.
3. Start the app. It asks again whether to work locally or sign in.

If you were signed in, your data is still in the account and downloads again when you sign in.

## What sync keeps and what it does not

- Notes, folders, tasks, habits and their completions, projects, templates, reminders, and the
  activity log all sync.
- Your theme, accent, density, editor settings, date and time formats and the other settings
  marked in [Settings](settings.md) follow your account.
- Interface size, window layout, the sidebar's width and whether it is full, icons or hidden,
  collapsed groups and similar preferences stay on each device.
- Bug reports are sent once and are not part of your data.

For what happens when two devices change the same thing, see
[Sync and your account](sync-and-account.md).

## On the phone

**Export backup** hands a copy of the database to your phone's share sheet, so you can save it
to files or send it to yourself. **Export as JSON** and **Restore backup** are not available on
the phone yet.

</div>
