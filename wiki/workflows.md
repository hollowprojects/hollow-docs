<div v-pre>

# Workflows

Step-by-step recipes for the things you will do most. Each one links to the page with the full
detail. Keys are shown for Windows; on a Mac, `Ctrl` is `⌘`.

## Start a day

1. Open Hollow. It lands on today's daily note.
2. Look at the **Day** beside it (the day glance): today's habits, then what is due or planned
   for today, with anything late on top. If it isn't showing, press `Ctrl+Shift+1`.
3. Write in the page if you keep a journal. It saves as you go.
4. Add anything that came to mind in the glance's input. Those tasks are planned for today.

More: [Daily rhythm](daily-rhythm.md), [Notes](notes.md).

## Capture a task quickly

1. Press `N` anywhere outside a text field, or `Ctrl+Shift+N` from anywhere.
2. Type a title. Add a **Do date** or project in the dialog if you want.
3. Press Enter.

To set more in one line, use the input at the top of **Planner → List** instead. It reads
the shorthand:

- `Call the printer #Thesis @fri !1` puts the task in the Thesis project, makes it due Friday and
  gives it P1.
- `^beta3` puts it in a milestone. It needs a project: the one you are in, or a `#project` in the
  same line.

Anything that doesn't match stays in the title, so a typo never loses words.

More: [Capturing tasks](capturing-tasks.md).

## Finish a day (sign off)

1. Right-click **Today** at the top of the sidebar and choose **Sign off for today**. (It is also
   in the command palette, `Ctrl+K`.)
2. For each task still open, pick one:
   - Tick it if you did it.
   - **Tomorrow** moves it to tomorrow.
   - **Pick day** picks another day.
   - **Park** sends it back to the Pool with no date.
3. Tick the habits you kept, then click **Done for today**.

Sign-off moves **do dates** only. If a deadline itself moved, change the task's due date in its
detail.

More: [Daily rhythm](daily-rhythm.md).

## Plan the week

1. Open **Planner → Calendar** and choose **Week**.
2. Click **Pool** in the Calendar's header. The List opens beside it showing **Overdue** and then
   the **Pool** (tasks with no day). Drag tasks from the Pool onto a day to make them due then, or
   onto an hour to give them a time. Drag a task from the Calendar onto the Pool to take its day
   away.
3. Turn **Hours** on to see the hour grid. A task with a time and a **Duration** fills its slot.
4. For a task you mean to work on but that has no deadline, set a **do date** instead. It shows
   with a dashed outline.
5. **Agenda** lists the next four weeks without a grid, which is a good last check.

Planner → List groups tasks on the same days as the Calendar, so either view works.

More: [Planner](planner.md#calendar).

## Deal with late tasks

1. Late tasks sit at the top of **Planner → List** under **Overdue**. The Calendar's **Pool**
   button shows how many are late, in red, and opens them beside the Calendar.
2. For each one, do one of these:
   - Click the date cell and pick a new day.
   - Drag it onto another group, or onto a day in the Calendar.
   - With the List's **Pool** chip on, **park all →** sends everything overdue back to the Pool.
3. If you move one by mistake, click **Undo**, which appears for a few seconds after each move.

A task stops being late as soon as you give it a do date of today or later.

More: [Planner](planner.md#list).

## Run a project

1. Click **＋ New project** in the Projects view, or choose **New project…** in the command palette.
   Name it and press Enter.
2. On its **Overview**, follow **Get this project going**:
   - Set a **Focus**: one line saying what done looks like.
   - Add a milestone (**+ Add milestone**).
   - Add a few tasks under **Next up**.
3. On the **Tasks** tab, group by **Milestone**. Drag tasks between milestones. Each milestone's
   **⋯** moves its date or renames it.
4. **Notes** → **Write the project page** gives the project its own page. Once it is written, the
   project also shows in the Notes tree. **+ New note** files notes in the project.
5. The **Projects** view's **Timeline** shows every project's milestones across the months.
   **Needs attention** at the top of the list flags projects that are slipping.
6. Pausing: set the status to **On ice**. Choose **Pause due dates** so its tasks stop counting
   as overdue while it waits.
7. Finishing: set the status to **Done**. Choose what happens to open tasks, and keep **Write a
   close-out note** on for a summary of what happened.

More: [Planner → Projects](planner.md#projects).

## Keep a habit

1. In **Planner → Habits**, click **＋ new habit**. Rename it in the editor that opens beside the
   list and pick
   its **Cadence**: **Daily**, **Days** or **Every N**.
2. Break it into **Steps** if it has parts (**＋ Add a step…**).
3. Tick it each day:
   - in the Day beside your daily note, where a chevron opens the steps,
   - in the week strip in Habits,
   - or on the Calendar with **Habits** on.
4. Missed ticking a day you actually kept? Click that day in the editor's five-week grid. The
   streak recalculates.
5. Going away? **Pause** it, so it doesn't count against your streak.

More: [Planner → Habits](planner.md#habits).

## Write and file notes

1. Press `Ctrl+N` for a note next to the one you are reading, or right-click a folder in the
   Notes tree → **New note**.
2. To start from a template, choose **New from template** in the same menu, or press
   `Ctrl+Alt+T` in the empty note. A folder can have a default template that **New note** uses.
3. Link to another note by typing `@` and a few letters of its title. The other note lists the
   link in its **Properties** (`Ctrl+Alt+I`), under **Links → In**.
4. Move a note with right-click → **Move to…**, or drag it in the tree.
5. For something you want to reach from anywhere, use **Add to Favorites**.

More: [Notes](notes.md), [Templates](templates.md).

## Work side by side

1. Right-click almost anything in the sidebar and choose **Open to the side**. For example, open
   the Calendar next to today's note. Or use the split button at the end of a pane's tab strip:
   **Split right** or **Split down**.
2. Drag the line between the panes to change their widths. Right-click the line for **Swap
   panes** and **Equalise**.
3. Open the same note in both panes to see two parts of it at once. They are one note: type in
   either and it appears in the other.
4. The **+** at the end of a pane's tab strip opens Today, List, Calendar, Habits, Projects or a
   new note as a tab in that pane.
5. To go back to one pane, close a pane's last tab, or choose **Close pane** in its **⋯** menu to
   keep its tabs. For more room, click the sidebar button in the top strip to shrink the sidebar
   to icons, and again to hide it.

The Day, a note's Properties and the task and habit editors open beside what you are looking at in
the same way, as **companions**. `Ctrl+Shift+\` shows or hides them.

More: [Tabs and the split view](tabs-and-split.md#companions).

## Find anything

1. Press `Ctrl+K`.
2. Type part of a note's title or text, or a task's title or description.
3. Or type an action: **New task**, **Sign off for today**, **Open help** and so on.

More: [Search and the palette](search-and-palette.md).

## Use a second device

1. On the first computer: **Settings → Account & data → Sign in to sync**, and log in or create an
   account. Everything already on the computer moves into the account.
2. On the second device, install Hollow and log in with the same account. Give it a minute to
   download.
3. Watch the sync status at the foot of the sidebar. It reads **Syncing…** while changes are on
   their way and **Synced** when both devices are up to date; **Offline** and **Stalled** say
   when something is in the way.

Edit one project on one device at a time while either of them is offline. Two offline edits to the
same project's milestones or status can lose one of them.

More: [Sync and your account](sync-and-account.md).

## Keep a backup

1. Before installing an update, go to **Settings → Account & data → Export backup** and save it somewhere
   safe.
2. For a readable copy you can open elsewhere, use **Export as JSON**.
3. To get a backup back: **Settings → Account & data → Restore backup** (local mode only).

More: [Backup and your data](backup-and-data.md).

## Report a problem

1. Press `Ctrl+Shift+B`, or click the bug at the foot of the sidebar.
2. Give it a title and say what you did and what happened. Your recent activity is attached for you.
3. If it's about sync, first open **Settings → About**, press **Copy sync diagnostics**, and paste
   the result into the report.

More: [Reporting a bug](reporting-bugs.md).

</div>
