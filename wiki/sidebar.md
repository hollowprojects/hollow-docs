<div v-pre>

# The sidebar

The sidebar down the left is how you get around Hollow. From top to bottom it has four rows that
are always there — **Today**, **List**, **Calendar** and **Habits** — then your **Projects**, then
your **Notes**, and a row of small buttons at the foot. Nothing in it opens and closes in turn:
everything is on show at once, and the Notes list takes whatever height is left.

Hollow's own labels call the sidebar the **rail** — **Pin to rail**, **Rail: Show** — and mean the
same thing.

The sun or moon beside the **Hollow** name at the top switches between the light and dark theme.
The rest of the look is in **Settings → Appearance**.

## Full, icons or hidden

The sidebar has three sizes:

- **Full** — everything described on this page. Drag its inner edge to make it wider or narrower;
  double-click that edge to put it back.
- **Icons** — a narrow column of icons, leaving more room for your pages. See
  [The icon sidebar](#the-icon-sidebar) below.
- **Hidden** — gone, until you bring it back.

The sidebar button next to the back and forward arrows in the top strip steps through the three:
click once for icons, again to hide, again for the full sidebar. Its picture shows which one you
are in, and hovering it says what the next click does.

**Ctrl+\\** (**⌘\\** on a Mac) only hides and shows. It brings the sidebar back the way you last
had it, full or icons.

You can also pick a size from the command palette (`Ctrl+K`): **Rail: Show**, **Rail: Icons only**
and **Rail: Hide**, or under **Sidebar** in **Settings → Desk**.

Hollow remembers the size for each device separately. In a narrow window — under about 1100 pixels
wide — a full sidebar is shown as icons to leave room for the page, and comes back by itself when
you widen the window. Focus mode hides the sidebar until you leave it.

## Today, List, Calendar, Habits

These four rows never move and never scroll away.

**Today** opens the **Today dashboard**: today's tasks, what is overdue, your habits, projects
with something due this week, the start of today's page and the week ahead, on one screen (see
[Daily rhythm](daily-rhythm.md#the-today-dashboard)). Today's daily note itself is
`Ctrl+Shift+T`, or **Today's page** in this row's right-click menu. The number beside it is how
many tasks you have open today, late ones included. Right-click it for the usual ways to open it,
**Today's page**, **Day to the side** to open the day glance beside what you are looking at (see
[Notes](notes.md#properties-and-the-day)), and **Sign off for today** to wrap up the day.

**List**, **Calendar** and **Habits** open those views of the [Planner](planner.md). The current
week number sits beside Calendar.

Projects is not a row here — it has its own section below — but it is still Planner's fourth view.

## Projects

The projects you are working on now: your **active** projects, up to five of them. Projects that
are on ice or done are not listed here; find them in the Projects view.

- Click the **Projects** heading to open the Projects view, with every project in it. The number
  on the heading counts your active projects.
- The small arrow in front of the heading folds the rows away and brings them back. Hollow
  remembers which, on each device.
- The **+** on the heading starts a new project: type a name and press Enter. Right-clicking the
  heading has **New project…** too. With no projects yet, click **New project…** in the section.
- The last row, **All projects**, also opens the Projects view. When you have more projects than
  the sidebar lists, it shows how many there are in all.

**Pinned projects come first**, so pin the ones you want to keep in the five. A pinned project has
a thin bar under its name showing how many of its tasks are done. Pin or unpin a project with
**Pin to rail** / **Unpin from rail** in its page header, or from its folder's menu in the Notes
tree. Right-clicking a project row gives the open options described under *Opening things* below.

The number beside a project counts its tasks for today plus any overdue ones; hover the row to see
the split ("3 today · 1 overdue"). A small dot after the name, in the overdue colour, means
something in it is late.

You can turn this section off entirely in **Settings → Desk → Show Projects**. Projects you
already have stay reachable by link and through search.

## Notes

Your note explorer: **Journal** (your daily notes), a folder for each project, your own folders,
**Unfiled**, and the virtual **Favorites**, **Templates** and **Archive** groups. The number on the
heading counts your notes; archived notes are not counted. This is the part of the sidebar that
scrolls.

- Click a folder's **chevron** to open and close it.
- The **+** on the heading offers **New note**, **New from template**, **New folder**,
  **Project…** and **New template…**, plus **Sort by** and **Expand all** / **Collapse all**.
  Right-clicking the heading shows the same menu.
- Right-click any row for its menu — rename, move, duplicate, export, properties and more (see
  [Notes](notes.md)). A project's folder has **Open project**, **Pin to rail** (or **Unpin from
  rail**), **New note in** *the project*, **Rename project** and **Put on ice**, which asks about
  the project's due dates the same way its status menu does.
- **Ctrl+N** (**⌘N**) makes a new note in the folder of the note you are reading — or in
  **Unfiled** if you are not reading one — wherever you are in the app.
- **A project appears here once it has a note**, and only while it is active: its project page,
  a note filed in its folder, or a note linked to it from elsewhere (those are listed under
  **Linked**). A new project with no notes is a Planner project with no folder in the tree. To
  give it a page, open it, go to its **Notes** tab and click **Write the project page**; the page
  then sits first in its folder. Putting a project on ice, or marking it done, takes its folder
  out of the tree; its notes stay filed and are still reachable from the project's page and
  through search.
- Daily notes are grouped by month and listed by **date**, such as *09/26/2026*, in the date
  format you chose in **Settings → Planner**. Hover a row to see the note's full title. While you are on
  **Today**, the day you are looking at is highlighted.
- To change how the months are written (*2026 — Jul*, *Jul 2026*, *2026-07* or *July 2026*),
  right-click the **Journal** heading and choose **Month labels**. The groups are only labels; no
  folders are created. The choice stays on this device.

## Opening things

Every row in the sidebar opens the same four ways:

| What you do | What happens |
|---|---|
| Click | Opens in the tab you are on |
| **Ctrl**-click (**⌘**-click) | Opens in a new tab |
| **Alt**-click | Opens to the side, splitting the pane |
| Right-click | A menu with **Open**, **Open in new tab**, **Open to the side** and **Open below** |

The one exception is the Notes tree, where **Ctrl**-click and **Shift**-click select several notes
instead. Use **Alt**-click or the right-click menu there to open in a new tab or to the side.

A row that is already open in another tab or another pane is marked **OPEN**. Clicking it
switches to its tab when that tab is in the pane you are in. When it is only open in another
pane, it opens in the pane you are in too, and the other pane stays as it was. The row for
whatever you are looking at now is highlighted instead.

Opening a note or a project from somewhere else — search, a link, another tab — never rearranges
the sidebar. It only highlights the row.

## The foot of the sidebar

Three small buttons, then the sync status, then your account on the right:

| Button | What it does | Shortcut |
|---|---|---|
| **?** (Help) | Opens this guide | **F1** |
| Bug (Report a bug) | Opens the bug reporter | **Ctrl+Shift+B** (**⌘⇧B**) |
| Gear (Settings) | Opens Settings | **Ctrl+,** (**⌘,**) |

Hover a button to see its name and shortcut.

**The sync status** is a dot and a word — **Synced**, **Syncing…**, **Offline**, **Stalled** or
**Not receiving**. It is there whenever you are signed in to sync, and absent when you are using
this device only. Hover it for the detail; click it to open **Settings → About**. See
[Sync and your account](sync-and-account.md#the-sync-status).

The round button on the right is your account: your initials when you are signed in, with a menu
for **Account & settings** and **Log out**. On this device only, it shows a person outline and a
menu explaining how to start syncing. A small dot on it means you chose to work offline: nothing
syncs until you sign in, and clicking it opens Settings to do that.

## The icon sidebar

With the sidebar set to icons, you get one narrow column:

- The Hollow mark, then **Today**, **List**, **Calendar** and **Habits** as icons. Hover one for
  its name. They click, **Ctrl**-click, **Alt**-click and right-click exactly like the rows.
- **Projects** and **Notes**. Clicking one opens a panel beside the column with the same project
  list or note tree as the full sidebar, the same **+**, and the same menus. Click the icon again
  to close it.
- At the bottom, Help, Report a bug and Settings, a dot for the sync status (hover it for the
  word), and your account.

The panel is a glance by default: it lies over your page, and it closes when you open something
from it, press `Esc`, or click anywhere else.

To keep it, click the **pin** at the top right of the panel (**Keep open**). A pinned panel stays
put while you open one thing after another, and the panes move over to make room for it rather
than being covered. Click the pin again to go back to a panel that closes itself. Hollow remembers
the pin on each device.

The light and dark switch and the drag-to-resize edge belong to the full sidebar only.

## On a short screen

If the window is very short the full sidebar scrolls as a whole rather than squeezing the Notes
list down to nothing.

## On the phone

The button at the top left opens the same sidebar as a drawer, always in full. It works the same
way, sized for a finger: **tap** a row to open it, **press and hold** for its menu. Opening
something closes the drawer. Help, Report a bug and Settings are full rows there rather than
buttons, and there is no sync status.

The phone does not show the Projects section yet, because there is no project screen on the phone
so far. Projects are still reachable through search.

---

Report an issue with this page: the bug button at the foot of the sidebar, or **Ctrl+Shift+B**.

</div>
