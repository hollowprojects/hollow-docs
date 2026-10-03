<div v-pre>

# Settings

Open with the **Settings** icon (the gear) at the foot of the sidebar, `Ctrl+,`, or **Account &
settings** in the account menu. On the phone, **Settings** is a row at the foot of the left drawer.
The groups are listed down the left, each with a line saying what is in it. On a phone they run
across the top instead. `Esc` closes the window.

Most settings follow your account to your other devices. The line beside the title says so, and the
few that stay on the device you set them on carry a small **THIS DEVICE** mark. If you are not
signed in, the line reads *Stored on this device* and nothing is marked, because everything is.

Choices with only a few options are shown side by side with their real values, so you can see what
you are picking: a date as it will be written, a font size in pixels. Anything you switch on or off
is a switch on its own row, with a line under its name saying what it does.

## Appearance

A preview at the top shows a day's title, a line of text, two tasks and two chips in the colours
you have chosen. It changes as you change the settings below it.

- **Theme**: eight palettes — Hollow, Ink, Cream · Teal, Paper · Violet, Slate · Amber, Sage,
  Carbon and High contrast. Carbon's dark mode is pure black, which suits OLED screens. High
  contrast pushes text and edges as far apart as they go.
- **Accent**: recolours links, selection and task chips without changing the rest of the
  palette. The first swatch, set apart by a short rule, puts back the theme's own accent.
- **Mode**: **Auto**, **Light** or **Dark**. Auto follows your system. The sun or moon button
  beside *Hollow* at the top of the sidebar switches between light and dark in one click.
- **Density**: how tightly rows stack in lists, the note tree, the sidebar and the habits table —
  **Compact**, **Comfortable** (the default) or **Spacious**. It changes the spacing, not the text
  size, so Compact fits more on screen without making anything harder to read. On a phone,
  Compact stays loose enough to tap.
- **Interface size** (*this device*, desktop only): scales the whole window — text, icons and
  spacing together — from 80% to 150%. Use this if Hollow reads too small or too large overall. It
  stays on this computer because it depends on the screen you are sitting at. To change note text
  only, use **Writing → Font size** instead.

## Writing

How note pages read and behave. The preview at the top is set in the same type as your notes, and
follows the size, line height and spacing as you change them.

- **Font size**: **Small 14**, **Medium 16** or **Large 18** (pixels).
- **Line height**: 1.5, 1.6 or 1.7.
- **Paragraph spacing** and **List spacing**: Compact, Default or Relaxed.
- **Typewriter mode**: keeps the line you are typing near the middle of the page.
- **Limit line length**: keeps lines to a comfortable reading width.
- **Highlight active line**: shades the line the cursor is on.
- **Journal title** (*this device*): how new daily pages are titled. Each choice shows today's
  date written that way. Changing it does not touch the pages you already have. To bring those in
  line too, press **Apply to N existing** beside it; it asks before renaming. Note dates never
  change.
- **Journal template**: what a new day's page starts from. **Automatic** uses a template named
  *Daily* if you have one, and says which; **None** means a page with only its date heading; or
  pick one of your templates. It is the same setting as **Default template** on the **Journal**
  heading in the sidebar, and it follows your account. See
  [Templates](templates.md#the-journals-template).
- **Quick-capture folder**: where a note made with Quick capture lands. **None (root)** puts it at
  the top level. A folder's own template is set from its menu in the sidebar.

## Planner

- **Time format**: **12-hour** or **24-hour**. Used for task times (the Calendar, the List's date
  column and due labels on task rows) and for every other time Hollow shows: when a note was
  saved, created or last updated, the times in the Activity log and a project's activity, the
  times beside the errors listed in a bug report's attached context, and the date-and-time
  stamps below.
- **Date format**: month first, day first, or year first. Each choice shows today's date written
  that way. It controls every date Hollow writes in numbers: journal days in the note tree, the
  day a habit's square stands for (its tooltip, on the Habits grid and the Calendar), and the exact date-and-time stamps (when you last synced, when a template or your cloud profile was
  last updated, the tooltip on a time in the Activity log). Dates written with a month name, such
  as "Oct 5" or "Monday, October 5", are not changed by it: they follow your system language.
  The boxes you type or pick a date in also follow your system language. A date you type with
  slashes after `@`, or in the command palette, is read in this order too: see
  [Capturing tasks](capturing-tasks.md).
- **Start of week**: Monday or Sunday. This drives the Calendar's week grid and which days count
  as the current week when you place or group work.
- **When a task is completed, append to**: **Nothing**, **Task log note** or **Project note**. With
  Task log note, a list appears beside it to choose which note gets the line.

## Desk

Desktop only. Everything in this group stays on the computer you set it on.

- **On launch, open**: **Last session** (the default) brings back the tabs and split you had when
  you last quit. **A layout** opens the same arrangement every time instead; a list appears beside
  it to choose which one, each with its `Ctrl` key if it has one. If the layout you chose is later
  deleted, Hollow opens **Daily log** (Today with the Day beside it). See
  [Tabs and the split view](tabs-and-split.md#what-hollow-remembers).
- **Layouts**: **Manage layouts…** closes Settings and opens the list of your layouts, where you
  rename them, delete them and put them on `Ctrl+1` to `Ctrl+6`. **Restore the default** puts
  Daily log back on `Ctrl+1`; it deletes nothing.
- **Sidebar**: **Full**, **Icons** or **Hidden**, the same three sizes the button at the left of
  the top bar steps through. See [The sidebar](sidebar.md#full-icons-or-hidden).
- **Sidebar flyouts**: with the sidebar as icons, Projects and Notes open in a panel beside it.
  **Close after opening a note** puts the panel away once you have picked something; **Stay open**
  keeps it, and moves the page over to make room. It is the same choice as the pin on the panel.
- **Focus mode hides**: tick what else goes when you turn on Focus mode (`Ctrl+.`) — **The
  sidebar**, **Tab strips**, **The top bar**, **Word count**. The first two are ticked to begin
  with. The other panes always go: Focus mode makes the pane you are in fill the window. With
  **The top bar** ticked, the window buttons stay, and so does the strip you drag the window by.
- **Show Projects**: shows or hides the Projects section of the sidebar and the Projects view.
  Hiding it never deletes anything; project pages stay reachable from links and search.

## Account & data

The card at the top shows how you are using Hollow:

- **Local mode**: *Everything is stored on this device only*, and **Sign in to sync**, which takes
  you to the sign-in screen. See [Sync and your account](sync-and-account.md).
- **Working offline without a sign-in** (after **Continue offline**): an **Email** and
  **Password** form with **Sign in**. **Sign up** switches it to **Create account**.
- **Signed in**: your email, and a line saying whether sync is on, when it last synced and how
  many changes are waiting. **Sync local profile** copies your display name and theme to the
  account. **Sign out** signs this device out.

Under the card, each row is something you can do, with its button at the right:

- **Export backup**: saves a backup folder with your whole local database and preferences.
- **Export as JSON**: a readable export of your notes, tasks, habits and projects.
- **Restore backup**: replaces local data from a backup. It only works while you are not signed
  in; while you are, the button is greyed out and the row says *Sign out first*. Afterwards, press
  **Restart now**.
- **Import database to cloud** (signed in only): uploads the contents of an old single-file backup
  (a `.db` file) into your account. It asks before uploading and shows what it found.
- **Starter templates**: **Add** puts in a small set of note and task templates for writing a book
  or following a course. Safe to press twice; it only adds what is missing.

**Keep history for**, at the bottom, sets how long the activity log is kept on all your devices:
30 days, 90 days, 6 months, 1 year or forever. **Open Activity log ›** beside it closes Settings and
opens the log as a tab.

See [Backup and your data](backup-and-data.md).

## About

- **Open the user guide**, **What's new in** this version, **Keyboard shortcuts** and **Report a
  bug**.
- **Version** and **Build**. Quote both when reporting a bug.
- **Account**: *Local mode — not syncing*, *Cloud — sync on*, or *Cloud — not signed in*.
- **Sync** (when signed in): connected or not, how many changes are waiting, when it last synced,
  and any error. **Copy sync diagnostics** is under it, with where the sync log file is.
- **Platform**, and the **Data folder** where everything is stored.

## What moved out of Settings

Two things that used to be sections here are now somewhere better suited to them. Both are linked
from the foot of the list of groups.

- **Keyboard shortcuts** is a page of this guide: [Keyboard shortcuts](keyboard-shortcuts.md).
  **Shortcuts are in Help ›** opens it, as does **Keyboard shortcuts** under **About**.
- **The activity log** is a tab you can keep beside your work: **Activity log · Open ›**. See
  [The activity log](activity-log.md).

How the Journal's months are labelled is set on the **Journal** heading in the sidebar: right-click
it and choose **Month labels**.

You can jump straight to a group from the command palette (`Ctrl+K`): type **Settings:** and pick
one, or type the name of a setting, such as *density*.

## Debug

Only appears in development builds of the app, never in an installed one.

</div>
