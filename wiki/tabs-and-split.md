<div v-pre>

# Tabs and the split view

Every screen in Hollow opens as a **tab**, and the main area can be split into **up to four
panes**, so you can have several screens at once. For example: a note beside your calendar, two
notes, the same note twice, or your journal, the Day, the List and the Calendar all together.

This page is about the desktop app. The phone has tabs too, but one pane and no strip: see
[The mobile app](mobile.md).

## Tabs

The strip across the top of the main area lists what you have open. Each tab shows a small marker
so you can tell kinds apart at a glance: a dot in the accent colour for a daily note, a grey dot
for any other note, `PLAN` for the Planner (named after whichever sub-tab it is showing — List,
Calendar, Habits or Projects), and a dot in the project's own colour for a project. A companion
(see [Companions](#companions)) is named for what it is — **Day**, **Properties**, **Task** or
**Habit** — and one that follows your selection carries a **⇄** label.

| To do this | Do that |
|---|---|
| Open something in place | Click it |
| Open it in a new tab | `Ctrl+click` it, or right-click → **Open in new tab** |
| Switch tabs | Click the tab, or `Ctrl+Tab` / `Ctrl+Shift+Tab` |
| Close a tab | Click its `×`, middle-click it, or press `Ctrl+W` |
| Reorder tabs | Drag one along the strip |
| Close everything else | Right-click a tab → **Close other tabs** |
| Open this tab's screen in another pane | Right-click a tab → **Split right** or **Split down** |
| Move a tab into a new pane | Drag it onto a pane's right or bottom edge (see [Layouts](#layouts-one-to-four-panes)) |
| Open the day glance beside this tab | Right-click a tab → **Day to the side** |

A plain click reuses the tab you are on, so clicking through ten notes leaves you with one tab
rather than ten. Nothing stacks up unless you ask it to.

Closing the last tab opens **Today** rather than leaving you with an empty window.

### The three buttons at the end of a strip

Every pane's tab strip ends in three small buttons. They act on that pane, whichever pane you were
working in. Hover one for its name.

- **+** (**New tab**) — a menu of **Today**, **List**, **Calendar**, **Habits**, **Projects** and
  **New note**. Whatever you pick opens as a tab in that pane. (**Projects** is missing when
  Projects is turned off in Settings.)
- The split button (**Split pane**) — **Split right** and **Split down**. The new pane starts on
  the tab you were looking at. A direction is greyed out when there is no room for it: **Split
  right** once there are two columns, **Split down** once that column holds two panes.
- **⋯** (**Pane menu**):
  - **Move all tabs to** — sends every tab to the pane you choose and closes this one. It appears
    when there is more than one pane.
  - **Show companion** / **Hide companion** — see [Companions](#companions).
  - **Close other tabs** — keeps only the tab in front.
  - **Close pane** — closes the pane and **keeps its tabs**: they join the pane next to it.

A pane that has shrunk to just its strip in a small window doesn't show the buttons; click the
strip to open the pane first.

## Four ways to open anything

Right-click **Today**, a note in the Notes tree, a project in the Projects section, **All
projects**, the **Projects** heading, or the **List**, **Calendar** or **Habits** row in the
sidebar, and the menu starts with the same four options:

- **Open** — in place, in the pane you are working in.
- **Open in new tab** — same pane, new tab.
- **Open to the side** — opens it in a pane to the side. If the main area is one column, this adds
  a second column. If there are already two, it opens as a tab in the pane across from you.
- **Open below** — splits the pane you are in, top and bottom. If that side is already split, it
  opens as a tab in the other half.

Hollow never makes more than two columns, and never more than two panes in a column, so you end up
with four panes at most.

`Alt+click` is the shortcut for **Open to the side** anywhere those menus appear.

In the note explorer, `Ctrl+click` and `Shift+click` already select several notes at once, so
those two are left alone there — use `Alt+click` or the menu instead.

## Layouts: one to four panes

The **Layout** button is the one control at the right of the top strip, next to the window
buttons. Its icon shows the shape you are in, and beside it is the name of the saved layout you
are in, or just **Layout**. Click it for a menu. The top of the menu is your saved layouts (see
[Saved layouts](#saved-layouts)); below them are five shapes. The shape in use has a ✓.

| Layout | What you get |
|---|---|
| **One pane** | Everything in one strip |
| **Side by side** | Two panes, left and right |
| **Stacked** | Two panes, top and bottom |
| **Three panes** | One tall pane on the left, two stacked on the right |
| **Four panes** | Two by two |

Picking a shape rearranges the panes you have. It is not a saved layout, so the button goes back
to reading **Layout**.

`Ctrl+Alt+\` splits one pane into two, or folds any layout back into one pane. The five shapes
are in the command palette (`Ctrl+K`) too: **Layout: One pane**, **Layout: Side by side**,
**Layout: Stacked**, **Layout: Three panes** and **Layout: Four panes**. To split just one pane,
use the split button at the end of its tab strip (see
[The three buttons at the end of a strip](#the-three-buttons-at-the-end-of-a-strip)).

- **New panes copy the tab you are on**, as splitting always has. Switch each one to what you want
  there.
- **Panes stay on their side.** Going from **Side by side** to **Four panes** keeps your left pane
  top left and your right pane top right.
- **Going to fewer panes merges tabs.** The panes that no longer fit fold their tabs into the pane
  above them, and a tab open in both is kept once. The same happens with **One pane** and
  `Ctrl+Alt+\`.
- **Dragging a tab to make a pane.** Drag a tab onto the right or bottom edge of a pane and let
  go: the tab opens in a new pane there. The half it will take lights up while you hold it over the
  edge. The right edge works while the main area is one column, and the bottom edge while that
  side holds one pane; where there is no room, nothing lights up.
- **Moving a tab.** Drag it onto another pane's strip, or right-click it. With two panes, choose
  **Move to other pane**. With more, choose **Move to** and then a pane by where it sits, for
  example **Top right pane**. A tab keeps its own back and forward history when it moves.
- **Resizing.** Drag the line between two panes. In a four-pane layout the left and right sides
  each have their own line, so they move separately.
  - A pane can be made as small as a fifth of the space, never so small it can't be used.
  - Double-click a line to put it back at half and half.
  - With a line selected, the arrow keys nudge it (hold `Shift` for bigger steps), `Home` and
    `End` push it as far as it will go, and `Enter` resets it.
  - The line between a page and its companion is remembered on its own, apart from a split of two
    screens.
- **Right-click the line between panes** for more:
  - **Swap panes** — the two sides change places. On the line between the left and right sides
    the whole sides swap; on a line inside one side, its top and bottom panes swap.
  - **Reset to “name”** — shown while you are in a saved layout. Every line goes back to where
    that layout has it.
  - **Equalise** — every line goes back to half and half, so all the panes are the same size.
  - **Close left pane** / **Close right pane** (or **Close upper pane** / **Close lower pane**) —
    shown when the line has exactly one pane on each side of it. The closed pane's tabs join the
    one that stays.
- **Closing the last tab in a pane closes that pane**, and the others close up around the gap. To
  close a pane and keep its tabs, use **Close pane** in its **⋯** menu.

### Saved layouts

A saved layout is an arrangement of panes and tabs you can come back to with one key — say,
today's page and its day beside a List and a Calendar.

**Opening a layout replaces everything on screen**: every pane and tab is swapped for the
layout's. Your notes are saved first and nothing is deleted, but the tabs you had open are gone.
If you want to keep what you have, save it as a layout first.

#### Six shortcuts

`Ctrl+1` to `Ctrl+6` each open a layout. The **Layout** menu lists your layouts first: the ones
on a key, each with its key, then the rest, with a ✓ on the one you are in. The five shapes come
after them.

A key with no layout on it has no row in the menu. Press the key and the **Save layout** box
opens with that key already chosen.

You can also open a layout from the command palette (`Ctrl+K`) by typing its name. It shows as
**Layout: Morning**, with its key if it has one: **Layout: Daily log (Ctrl+1)**.

#### The one that comes with Hollow

**Daily log** starts on `Ctrl+1`: today's page, with the List beside it on its **Today**
filter — what is overdue, then today's tasks. `Ctrl+2` to `Ctrl+6` start empty.

Daily log is part of Hollow, so it cannot be renamed or deleted. You can move it to another key
or take its key away. With no key it is not listed anywhere until you use **Restore defaults**
(below).

Earlier versions also came with **Plan**, **Research** and **Review**. They are no longer in the
menu. To have one again, arrange the panes and use **Save as new layout…**:

| Layout | What it was |
|---|---|
| **Plan** | The Calendar, with the List beside it showing the **Pool** |
| **Research** | A note, with its **Properties** beside it (`Ctrl+Alt+I`) |
| **Review** | Four panes: Today and the Day above, the List and the Calendar below |

A copy of one that you had changed and saved with **Update** is still there.

#### The dot, and Update

While you are in a saved layout the **Layout** button shows its name and its key. A **dot** beside
the name means the screen no longer matches what was saved.

| Makes the dot appear | Does not |
|---|---|
| Adding or closing a pane | Switching between tabs |
| Opening or closing a tab, or moving one to another pane | Clicking into another pane |
| Changing a Planner tab's view, the List's Pool or Today filter, or a Calendar's project filter | Reordering tabs in a strip |
| Dragging a line between panes | A small window folding the panes |
| Turning Focus mode on or off | Picking a day in the Calendar for the List beside it |

**Update “name”** in the **Layout** menu saves the screen as it is now into the layout you are
in, and the dot goes. It is greyed out, with **No changes**, when there is nothing to save.

Updating Daily log saves a layout of your own under the same name and gives it the key.

To drop your changes instead, open the layout again with its key.

#### Save as new layout…

**Save as new layout…** in the **Layout** menu, or `Ctrl+Alt+S`, opens the **Save layout** box:

- **A name**, such as *Morning*. Saving under a name you already use replaces that layout, and the
  box says so.
- **Shortcut** — **1** to **6**, each showing the layout it holds now, or **No shortcut**. Choosing
  a key that is in use only takes the key: the layout that had it is kept, and the box tells you
  which one loses its shortcut.
- **Panes** — the panes you are saving and the tab in front of each. A pane showing a daily note
  that has been written offers **Today’s page** or **This page**:
  - **Today’s page** opens on whatever day it is when you open the layout.
  - **This page** always opens that exact page.

  A pane showing a project offers **This project** or **The project in front**:
  - **This project** always opens that project.
  - **The project in front** opens the project you were last looking at when you open the layout
    — so one layout serves every project. If you have not opened a project yet, it opens the
    **Projects** list.

The button reads **Save to Ctrl+5** when you chose a key, **Replace** when the name is in use, and
**Save** otherwise.

A layout is a snapshot. It keeps the panes, the tabs in each (a note, a project, which Planner
view, a Calendar's project filter, the List's Pool or Today filter), which tab was in front, where
every line between the panes sits, and whether Focus mode was on: a layout saved in Focus mode
opens in it. It does not keep back and forward history or the Calendar's day; a Calendar opens on
the current week. Change it later with **Update**.

#### Back to what I had

Opening a layout replaces what was on screen. **Back to what I had** in the **Layout** menu puts
it back — the same tabs, with their back and forward history — once. It is greyed out when there
is nothing to go back to, and it does not last past closing the window.

#### Manage layouts…

**Manage layouts…** in the **Layout** menu lists every layout: the ones on a key first, then the
rest. Each row has the layout's name, a short description of its panes (*Today | Today's tasks*;
Daily log says **Built in**), and:

- a **shortcut** dropdown — `Ctrl+1` to `Ctrl+6`, or **No shortcut**. Giving a layout a key that
  is in use takes it from the layout that had it;
- **Rename** and **Delete**, for layouts you saved. After a delete, **Undo** in the message at the
  bottom brings the layout back, on its key if that is still free.

Changes apply as you make them; **Done** closes the box.

**Restore defaults** puts Daily log back on `Ctrl+1`. Nothing is deleted: a layout of yours that
was on that key is kept, without a key. The other keys are left as they are.

Layouts cannot be put in a different order.

#### On your other computers

Saved layouts sync to your other computers when you are signed in. **The key a layout sits on
does not**: each computer has its own six. A layout saved elsewhere appears in the **Layout** menu
below the ones that have a key, until you give it one in **Manage layouts…**.

- If a layout names a note, project or task that isn't on this computer, or that has been deleted,
  that tab is left out, the rest opens, and a message says so. The saved layout is not changed.
- A key whose layout was deleted on another computer is empty again: it has no row in the menu, and
  pressing it offers to save a layout there.
- A layout saved by a newer version of Hollow shows in the menu greyed out until you update.
- The phone keeps one pane, so it doesn't show layouts.

### In a small window

When the window is too small for your layout, Hollow shows it smaller without changing it:

- **Too narrow for two columns:** the panes are shown one above the other.
- **Too short for every pane:** all but one pane shrink to just their tab strip. Click a strip to
  open that pane; the one you were in shrinks instead.

Make the window bigger again and your layout comes back exactly as it was.

### The focused pane

One pane is always the focused one; its tab strip's active tab is underlined in the accent colour,
and the other panes' are a quieter grey. Clicking anywhere in a pane focuses it, and
`Ctrl+Alt+Shift+←` / `→` / `↑` / `↓` moves to the pane in that direction.

The focused pane is the one that acts:

- clicks in the left rail open there,
- the top strip's back and forward arrows walk *that* tab's history,
- and `Ctrl+N` makes a note in the folder that pane is looking at.

## The same note in both panes

You can open one note in both panes — split while a note is open, and you get it twice. The two are
**not two copies**: they are two views of one note. Type in either and it appears in the other
immediately, undo works across both, and there is only ever one version being saved. The note's
header says **Open in both panes · edits sync** while that is true.

This is the way to write at the bottom of a long note while reading the top of it.

## Companions

There is no right sidebar. What used to sit there opens as a tab of its own — a **companion** — in
the pane beside what you are looking at:

- **Day** — today's habits and tasks, with a box to add more, beside a note. `Ctrl+Shift+1`.
- **Properties** — a note's outline, folder, project, tags, stats and links. `Ctrl+Alt+I`.
- **Task** — the task you clicked in Planner → List, the Calendar or a project's Tasks tab.
- **Habit** — the habit you clicked in Planner → Habits.

See [Notes](notes.md#properties-and-the-day) and [Planner](planner.md) for what each one holds.

Clicking a task or habit opens its companion beside the list. If none is open, the main area
splits and it opens in the other pane, while the list keeps the focus, so `↑` / `↓` keep walking
the rows.

**Following.** A Task, Habit or Properties companion follows what you do: the Task shows whichever
task is selected in the list, Properties shows the note you are writing in. Its tab carries a
**⇄** label and its header says **⇄ follows**. Clicking into the companion itself doesn't change
what it shows.

**Pinning.** The **Pin** button in a companion's header, or **Pin to what it shows** in its tab's
right-click menu, turns it into an ordinary tab for that one task, habit or note — its title becomes,
say, *Task · Write the brief* — and it stops following.

**Showing and hiding.** `Ctrl+Shift+\` shows and hides the companion. So does **Show companion** /
**Hide companion** in the **⋯** menu at the end of any pane's tab strip, and **Toggle companion**
in the command palette. Where nothing can sit beside the screen, **Show companion** is greyed out.
Focus mode hides the companion too and brings it back when you leave. Hollow remembers whether you left
it open: if you did, the next launch opens Today with the Day beside it.

Companion tabs are tabs like any other: move them, split them, close them. If Today and the Day are
side by side and you open a note **to the side**, it opens as a new tab in the Day's pane, and the
Day waits there as a background tab. To have the note and the Day both on screen, open the note
**below** instead, or pick a layout with more panes.

## The sidebar and the panes

The sidebar always shows the same things — **Today**, **List**, **Calendar**, **Habits**, your
projects and your notes — whatever is open in the panes. Opening a screen never rearranges it; it
only highlights the row. That way you can browse your notes while the Planner is open in the pane.
See [The sidebar](sidebar.md).

The sidebar can be full, a narrow column of icons, or hidden. The button next to the back and
forward arrows steps through the three, and `Ctrl+\` hides and shows it. As icons or hidden it
leaves more width for your panes.

A sidebar row that is already open in another tab or another pane is marked **OPEN**. Clicking
it acts on the pane you are in: if that pane has a tab for it, you switch to that tab; if it is
only open in another pane, it opens here as well and the other pane is left as it is. So with
the List in one pane, clicking **Calendar** while you are in another pane puts the Calendar
where you are.

To go to Today from the keyboard, press `Ctrl+Shift+T`. It acts on the focused pane. The Planner
has no key of its own: use the **List**, **Calendar** and **Habits** rows, or the command palette.
`Ctrl+1` to `Ctrl+6` open [saved layouts](#saved-layouts), which replace every pane.


## Focus mode

`Ctrl+.` makes the pane you are in fill the window, whatever it shows: a note, the List, the
Calendar, a project. The other panes, the sidebar and the tab strips go (change what else goes in
**Settings → Desk → Focus mode hides**); nothing is closed, and leaving puts every pane back as it
was. While it is on, messages that need nothing from you wait; errors and **Undo** still show.

To leave: `Ctrl+.` again, `Esc`, or **Exit focus** — on a note it is the button in the header,
anywhere else a button at the top right of the pane.

A layout saved while Focus mode is on opens in it, so a "deep work" arrangement can be one key.

## What Hollow remembers

- **Reopening the app brings back your tabs and your split**, as you left them when you quit:
  the same panes, the same tabs in each, the same tab in front and the same pane focused.
  - If you were in a saved layout, the **Layout** button names it again.
  - A **Today** tab opens on the day you open the app, not the day you quit on.
  - A **Calendar** opens on today. It keeps its project filter.
  - Back and forward start fresh in every tab.
  - A tab for a note, project, task or habit that has since been deleted is left out.
- To start on the same arrangement every time instead, set **On launch, open** to **A layout** in
  **Settings → Desk** and choose one. **Daily log** is Today with the Day beside it.
- If the window reloads while you're using it, you come back to where you were.

See also: [Keyboard shortcuts](keyboard-shortcuts.md), [Notes](notes.md), [Planner](planner.md).

</div>
