<div v-pre>

# The activity log

The **Activity log** is a record of what the app has done to your stuff: every task,
habit, note, folder, template and project you created, edited, moved, completed or deleted,
newest first, across every one of your devices.

It opens as a tab, so you can keep it beside the note or task you are checking it against. To open
it: **Activity log** in the command palette (`Ctrl+K`), **Open Activity log ›** in
**Settings → Account & data**, or **Activity log · Open ›** at the foot of the Settings list. Its tab
is marked **LOG**.

Each project has an **Activity** tab that shows the same thing for that project alone, grouped by
day. The activity log is the whole picture.

## What it is for

Two things:

- **Finding something you changed.** You remember renaming a note on Tuesday but not what you
  renamed it to, or you want to know when a task was moved out of a project.
- **Reporting a bug well.** When something goes wrong, the log tells you exactly what happened
  in the seconds before. Narrowing to that moment and pasting it into a report is usually the
  difference between a bug that can be fixed and one that cannot be reproduced.

## What a line says

A line reads like `09:05 · Task "Ship it" · status changed · Status: To do → Doing`.

- The **time** it happened. Hover it for the full date.
- The **kind** of thing and its **name**. Things you have since deleted keep the name they had.
- What **happened** to it, and the fields that changed, shown as before → after.
- **×3** means several saves close together were folded into one line, which is what autosave
  looks like.
- **mobile** means the change came from the phone app rather than the desktop.

Note text is never recorded. An edit to a note's body shows as *edited* with a word count like
**+30 words** — never the words themselves. The same is true of task and project descriptions.

## Narrowing it down

- The **search box** matches everything you can see on a line: names, what happened, and the
  changed fields. Searching `doing` finds every task that moved into Doing.
- The **time range** starts at **Last 7 days**. Widen it to **Last 30 days** or **Everything
  kept**, or narrow it to **Today**.
- The **filter buttons** limit it to **Tasks**, **Notes**, **Folders**, **Projects** or
  **Templates**; **All** puts everything back. Tasks includes habits.

The count on the right tells you how many entries match. Only the first 300 are drawn, and the
count says *showing 300* when there are more — use the filters rather than scrolling if you go
past that.

The log reads your most recent 1,000 changes. On a busy account, **Everything kept** and the
search only reach that far back, even though older history is still kept; the count at the top
says *from the latest 1,000 changes* when that happens.

## Taking it with you

- **Copy as markdown** puts whatever you have filtered down to on the clipboard, ready to paste
  into a bug report.
- **Export JSON** saves the same entries as a file.
- **Refresh** re-reads the log, for when you have been using the app in another window.

Both Copy and Export use what you are currently looking at, not the whole log, so filter first.

You do not have to do any of this to file a good bug report: your recent activity is attached to
every report automatically. See [Reporting a bug](reporting-bugs.md).

If the log cannot be read, it says so; press **Try again**.

## How long it is kept

**Keep history for**, in **Settings → Account & data**, sets how long history is kept: 30 days,
90 days (the default), 6 months, 1 year or **Keep forever**. It is one setting for all your
devices, and shortening it removes older entries everywhere straight away, including from each
project's Activity tab. Entries are removed permanently.

</div>
