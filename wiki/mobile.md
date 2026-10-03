<div v-pre>

# The mobile app

The mobile app is the same notebook on a phone. It shows one screen at a time, keeps the rest as
tabs, and puts everything you reach for often along the bottom, under your thumb.

It is a preview, and it has not yet been tried on a real phone. **Calendar** and **Projects** do
not have mobile screens yet — opening either shows a page saying it arrives later — and habits can
be read and ticked but not edited. The task list still uses its older groups rather than the
desktop List's.

## The shape of it

- **Top bar.** A button at each end and, between them, a line saying where you are, such as
  *Planner · List* or *Notes · Meeting notes*. The left button opens the left drawer and the
  right button opens the right one.
- **The page.** Its heading has a `⋯` button beside it.
- **Bottom bar.** **Search**, **New** and **Tabs**.

## Tabs

Every screen you open is a tab. There is no strip of them on screen; the number on the **Tabs**
button says how many are open.

| To do this | Do that |
|---|---|
| Change to the next or previous tab | Swipe left or right along the bottom bar |
| See all your tabs | Tap **Tabs** |
| Open something in a new tab | Press and hold it, then **Open in new tab** |
| Make a new note in a new tab | Tap **New** |
| Close the tab you are on | `⋯` → **Close tab** |

The swipe works anywhere on the bar, including on top of a button. Swiping never presses the
button, and at the first or last tab the page resists rather than wrapping round.

Opening the app starts you on **Today** with one tab. Tabs are not remembered between runs.

### The tab switcher

**Tabs** opens a row of pages, one per tab, with the one you are on in the middle.

- **Tap** a page to switch to it.
- **Flick a page up**, or tap its `×`, to close that tab.
- **Close others** keeps only the tab you are on.
- The bar reads **Find · New · Done** while the switcher is open. **Find** shows a box that
  filters the pages by title as you type. **Done** closes the switcher.

Closing the last tab opens Today.

## Going back

Swipe in from the **left edge** of the screen. Each tab has its own history, so going back in one
tab does not walk you through pages you visited in another. There is no back button.

To go forward again, tap `⋯` and choose **Forward**. It is only listed when there is somewhere
to go.

On Android the system back button closes whatever is on top first, such as a drawer or a menu,
then goes back, then closes the tab, and leaves the app last.

## The left drawer

It is the desktop's sidebar, sized for a finger. See [The sidebar](sidebar.md).

- **Today**, **List**, **Calendar** (with the week number) and **Habits** sit at the top and are
  always there.
- Below them is **Notes**, the note explorer. It takes the rest of the drawer and scrolls.
- At the foot are **Help**, **Report a bug**, **Settings** and your account.

Nothing in the drawer opens and closes in turn; it is all on show at once. The drawer is always
the full sidebar: the desktop's icon column is not used on the phone.

There is no **Projects** section on the phone yet. A project can still be found with **Search**,
but it opens on a placeholder page.

**Tap** a row to open it in the tab you are on. **Press and hold** a row to get its menu, which
starts with **Open** and **Open in new tab** and then has the row's own actions: rename, move,
archive and the rest.

A row marked `OPEN` is already open in another tab. Tapping it switches to that tab.

Tap outside the drawer to close it.

## The right drawer

Open it with the button at the top right, or swipe in from the **right edge**. What it shows
depends on the page.

| Page | Tasks | Properties |
|---|---|---|
| A note | The day's tasks and habits, and a box to add a task linked to this note | Outline, folder, project, tags, links and counts |
| Planner · List | The task you last opened | How many tasks, and which groups are shown |
| Today | | The day's numbers |

It opens on whichever of the two you used last.

The button is greyed out on pages that have nothing to show there.

## Today and Tasks

**Today** shows the date and week, with **‹** and **›** to step through days and **today** to come
back. Under it: how many tasks are late and open, and how many habits are kept; the **Late** and
**Today** tasks; the day's habits as chips you tap to tick; and a **Log** card with the start of
the day's log. At the bottom, **＋ Capture** opens the day's log full screen with the keyboard up,
and the box beside it adds a task.

**Planner → List** opens the task list, headed **Tasks** and grouped Late, Today, Upcoming,
Unscheduled and Completed. Tap a task to see its details and **Complete** it.

**Planner → Habits** shows your habits and their recent days. It is read-only on the phone.

## Writing

Tap in a note to start typing. The bottom bar changes to **B**, **I**, a checklist box, **#** and
**Done**. The figures in the middle, such as *2 / 5*, say which tab you are on, and you can still
swipe the bar to change tabs.

**Done** puts the keyboard away and brings the usual bar back.

## The `⋯` button

| On | It offers |
|---|---|
| A note | **Rename**, **Move to**, **Outline**, **Share** |
| Today and Planner · List | **Properties** |
| Every page | **Forward**, when there is somewhere to go, and **Close tab**, when more than one is open |

**Move to** lists your folders. **Share** hands the note's text to your phone's share sheet.

## Search

**Search** opens the same search as `Ctrl+K` on the desktop. See
[Search and the command palette](search-and-palette.md). On the phone it also lists your other
open tabs, first, so it is one more way back to a page you already have open.

## Signing in, sync and settings

- **Sign in to use the phone.** The phone has no local mode yet: **Use this device only for now**
  on the first screen does not work there, and there is no **Continue offline**. Sign in with the
  same account as your desktop and your notes and tasks come down.
- **There is no sync status on the phone**, and **Settings → About** does not yet show the
  phone's real version or sync state. Quote the desktop's version when reporting a phone bug, and
  say it happened on the phone.
- **Settings** is the same window as on the desktop, with its groups across the top instead of
  down the side, and without **Interface size** and the **Desk** group. In **Account & data**,
  **Export backup** hands the database to your phone's share sheet;
  **Export as JSON** and **Restore backup** are desktop only. See [Settings](settings.md) and
  [Sync and your account](sync-and-account.md).

</div>
