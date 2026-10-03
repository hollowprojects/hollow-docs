<div v-pre>

# Notes

Notes is where you write. It opens on today's daily note and keeps your whole note library one
click away in the left rail.

## Daily notes and Today

- **Today's note** is the home screen. `Ctrl+Shift+T` returns to it from anywhere,
  still on the day you were looking at; press it again to jump back to today itself.
- A daily note's header shows its day — for example *Saturday, September 26* — in place of a
  title. The ‹ › arrows on either side step to the previous or next day; `Ctrl+Alt+←` and
  `Ctrl+Alt+→` do the same while Today is the open tab.
- The arrows reach any day within a week of today, and beyond that only days that already have
  an entry or a task — one press skips the empty stretch in between. A day with nothing written
  shows the journal's template in grey, or **Nothing written on this day.** if you have no
  template. Click the page to start the entry; nothing is created until you do. See
  [Templates](templates.md) for choosing the journal's template.
- **Click the day** on today's note to open a month calendar. Days with an entry have a dot, the
  header counts the month's entries, and ‹ › change month. Days the arrows can't reach are faded
  and can't be picked.
- On today the header shows a **Today** label. Once you have stepped away it becomes a **Today**
  button that jumps back, followed by how far away you are (*Yesterday*, *Fri · 3d ago*).
- Daily notes live in the **Journal** folder of the Notes tree, grouped by month. They are titled
  by their date, so they cannot be renamed or moved to another folder, but they can be archived,
  favourited and exported like any other note.

## The note explorer

The **Notes** section of the left sidebar is your note explorer (see [The sidebar](sidebar.md)).
It behaves like a file explorer.

- **Click** opens a note. **F2** renames the selected note or folder. **Delete** deletes it, after
  asking — a deleted note cannot be restored, so use **Archive** if you might want it back.
- **Drag** a note or folder onto a folder to move it there.
- **Right-click a note** for **Open**, **Open in new tab**, **Open to the side**, **Open below**,
  **Rename**, **Duplicate**, **Move to…**, **Add to Favorites**, **Cut**, **Copy**, **Copy link**,
  **Copy as wiki link**, **Export as Markdown…**, **Properties**, **Archive** and **Delete**.
- **Right-click a folder** for **New note**, **New from template**, **New folder**, **Default
  template**, **Rename**, **Duplicate**, **Move to…**, **Expand all**, **Collapse all** and
  **Delete folder**. **Blank note** is there too when the folder has a default template.
  Deleting a folder moves the notes inside it to Unfiled.
- **Ctrl-click** and **Shift-click** select several notes; the right-click menu then acts on all
  of them (**Move to…**, favourites, **Cut**, **Copy**, **Archive**, **Delete**). `Esc` clears the
  selection.
- **Cut, Copy, Paste** (`Ctrl+X`, `Ctrl+C`, `Ctrl+V`) move and duplicate notes between folders.
  `Ctrl+A` selects every note showing in the tree.
- **Arrow keys** move through the tree; ← and → collapse and expand folders, and ← on a closed
  folder jumps to its parent. `Home` and `End` go to the first and last row, and typing a letter
  goes to the next row that starts with it. `Tab` stops in the tree once (on the open note, or the
  row you last used) and the next `Tab` moves on; a screen reader hears each row's level and its
  place among its siblings.
- Moving or archiving shows an **Undo** toast for a few seconds.
- **Sort by** — **Manual**, **Name**, **Date modified** or **Date created** — is in the menu of the
  **+** on the Notes heading. With **Manual**, notes and folders get **Move up** and **Move down**
  in their menus.

A project's folder appears in the tree only once the project's page has been written, and only
while the project is active — see [The sidebar](sidebar.md#notes). Its menu is about the project:
**Open project**, **Pin to rail**, **New note in** *the project*, **Rename project** and **Put on
ice**.

Three groups in the tree are virtual:

- **Favorites** sits at the top and lists your favourite notes. Add one with **Add to Favorites**
  in the note's right-click menu.
- **Templates** lists your note templates; click one to open it in a tab. See
  [Templates](templates.md).
- **Archive** sits at the bottom and holds archived notes. Archiving hides a note without deleting
  it; right-click it here for **Restore** or **Delete permanently**.

A note created without choosing a folder goes to **Unfiled**.

## Creating notes

- `Ctrl+N` or the palette's **New note** create a note next to the one you are reading: in its
  folder, or in Unfiled when you are on a daily note or not reading a note at all.
- Right-click a folder → **New note** to choose the folder. The **+** on the Notes heading →
  **New note** uses the folder you last clicked in the tree, or Unfiled.
- If the folder has a default template, the new note starts from it, and a message offers **Blank
  instead**. **Blank note** in the menu, or **New blank note** in the palette, skips the template.
- **New from template** is in the same menus; **New note from template** is in the command
  palette.
- An empty note has a **Template ▾** button in its header (`Ctrl+Alt+T`) to fill it from a
  template. It goes away once you type.
- A note with no title of its own gets a generated one such as *2026-09-28 - Ad hoc 1* rather
  than "Untitled". Change it in the header.

## The editor

The page is a flat column at a comfortable reading width, centred in the window, with the note's
title lined up above it. Formatting is the usual set plus a few notebook extras.

**Toolbar** (appears while the pointer is over the page or you are typing in it, and sticks to the
top as you scroll): bold, italic, strikethrough, highlight, inline code; headings 1–3 and
blockquote; bullet, ordered and task lists; link, mention, table, divider, page break and code
block. Hover a button to see its shortcut. On a narrow page the last groups fold into a **⋯**
menu. At the right end, the **Markdown source** button switches the page to its raw Markdown text (the same button, now **Visual
editor**, switches back).

**Status line.** Under the text: the word count and an estimated reading time on the left, and
whether your changes are saved on the right.

**Focus mode.** The **Focus** button at the right of the header, or `Ctrl+.`, makes the note
fill the window: the other panes, the left sidebar and the tab strips go, so only the page and the
top strip are left. Messages that need nothing from you wait until you leave; errors and **Undo**
still show. You can change what else it hides — the top bar, the word count — under **Focus mode
hides** in **Settings → Desk**. Press **Exit focus**, `Ctrl+.` again, or `Esc` to bring
everything back as it was. Focus mode works on any screen, not only a note: see
[Tabs and the split view](tabs-and-split.md#focus-mode).

**Slash commands.** Type `/` at the start of a line for: Heading 1, Heading 2, Heading 3, Bullet
list, Numbered list, Task list, Quote, Callout, Warning callout, Highlight, Code block, Table,
Divider, Page break.

**Markdown as you type.** Common shortcuts convert as you type them: `#` headings, `-` and `1.`
lists, `- [ ]` task items, `>` quotes, `` ` `` code, `**bold**`, `==highlight==`, three
dashes for a divider and three equals signs and a space (`=== `) on an empty line for a page break.

**Callouts.** A quote block starting with `[!note]`, `[!tip]`, `[!warning]` and similar renders as
a callout, the same syntax as Obsidian.

**Selecting text** shows a small bubble menu with the common formatting actions.

**Moving blocks.** `Alt+↑` and `Alt+↓` move the current block. Each block also has a drag handle in
the left gutter.

**Collapsing.** Each heading has a small toggle in front of it that folds the section beneath it
while you read. Folds are not saved; a note opens with everything showing.

**Links between notes.** Type `@` and start typing a note's title, then pick the note from the
list: it goes into the page as a link. Hovering a link shows a preview of the note; clicking it
opens the note. Wiki-style `[[Note title]]` links work too — write them in **Markdown source**, or
paste one made with **Copy as wiki link** from the tree. Links you make and links made to the note
appear in the note's **Properties**, under **Links**.

**Links to the web.** Select some text and press **Link** (↗) in the bubble menu, or **Insert link
(URL)** in the toolbar (under **⋯** when the toolbar is narrow). A small box opens: paste or type
the address and press `Enter`. `example.com` is enough — Hollow adds the `https://` — and an email
address becomes a mail link. To change a link, select it and open the box again; clear the box, or
press **Remove link**, to take the link off. `Esc` closes the box without changing anything.
Pasting an address into a page, or typing one followed by a space, also makes it a link.

**Tasks** do not go in the page itself. Link a task to a note from **Properties → Tasks from this
page**, or add it in the **Day** beside the note.

**Font size, line height and paragraph spacing** are in **Settings → Writing**.

## Properties and the Day

Two views can sit beside a note, each as a tab of its own in the other pane — a **companion** (see
[Tabs and the split view](tabs-and-split.md#companions)).

**Properties** starts with the **Outline** — the note's headings; click one to jump to it.
Below it: the note's **Title**, **Location** (its folder), the **Project** it is linked to,
**Tags**, the bookmark, **Stats** (words, reading time, save state), **Tasks from this page**,
**Links** (**Out** to other notes and **In** from them, each with a **＋** to add one), and when
the note was created and last updated. A daily note also shows its **Journal date**. Clicking a
task here opens it as a new tab over the Properties.

Open Properties with:

- `Ctrl+Alt+I` (`Ctrl+I` is still italic), or the palette's **Properties to the side** /
  **Properties below**. This Properties follows the note you are writing in: open another note and
  it shows that one. Clicking into the Properties tab itself doesn't change which note it shows.
- A note tab's right-click menu → **Properties to the side** / **Properties below**, or a note's
  right-click menu in the tree → **Properties** (opens beside). These show that one note.

The **Day** is the day glance: a box to add a task (**Add a task, or /note · /habit** — start the
line with `/note` for a note or `/habit` for a habit), the day's habits with checkboxes, the tasks
due and planned that day with **N late** markers, and their steps. Its header reads **Day** and
the date — *Today · Monday, Sep 28* for today — with **List** and **Calendar** buttons that open
those in a new tab.

- On **Today** the Day follows the day you are viewing as you step with ‹ ›; beside any other
  note it shows today.
- Tasks added in it are linked to the note beside it.
- Click a task or habit to open its editor right there in the Day; **‹ back** returns to the day,
  and **open in Planner ›** opens it in the Planner.
- Open it with `Ctrl+Shift+1`, by right-clicking **Today** in the left rail or a note's tab →
  **Day to the side**, or from the palette's **Day to the side** / **Day below**.

If you leave the companion open, Hollow starts on Today with the Day beside it, the page taking
most of the width. Show or hide the companion with `Ctrl+Shift+\`, or with **Show companion** /
**Hide companion** in the **⋯** menu at the end of the pane's tab strip. To wrap up the day, use **Sign off
for today** in the command palette (see [Daily rhythm](daily-rhythm.md)).

## Exporting a note

Right-click a note → **Export as Markdown** writes a `.md` file you choose the location for. For
everything at once, see [Backup and your data](backup-and-data.md).

</div>
