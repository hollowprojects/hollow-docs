<div v-pre>

# Templates

A note template is a note you reuse: a character sheet, a meeting log, a weekly review, the page
your journal starts from each day.

## Where templates live

In the note explorer, the **Templates** group near the bottom of the tree lists them, with a
count. It is closed by default; open it to see them. **Templates** in the command palette opens it
for you.

- Click a template to open it. It opens in a tab marked **TPL**, like a note, and you can split,
  move and close that tab like any other.
- **+ New template** at the end of the group, **New template…** in the Notes **+** menu, or **New
  template** in the command palette, starts one called *Untitled template*. If you close it
  without naming it or writing anything, it is removed again.
- Right-click a template for **Use**, **Edit template**, **Set as default for**, **Move to**,
  **Rename**, **Duplicate** and **Delete template**.
- Right-click the **Templates** heading for **New template…** and **New folder**. Folders only
  group the list. Right-click a folder to rename or delete it; deleting a folder keeps the
  templates that were in it.
- The template your journal uses is tagged **DAILY**.

You can also turn a note into a template: right-click the note → **Save as template**, or **Save
note as template** in the command palette. The template takes the note's text and tags, and files
new notes in the note's folder.

## Editing a template

A template's tab is laid out like a note: the name where a note's title is, the body below it on
the same page, and a status line under the text. It has:

- The word **Template**, then the template's **name** — what you pick it by.
- **Default for ▾** and **Use ▾** at the right of the name, described below.
- **Tags** that new notes will carry. Type in **+ tag** and press Enter.
- **New notes go to**: the folder new notes land in when you do not start from a folder. Left on
  **The folder it is started from**, such a note goes to Unfiled. When that folder belongs to a
  project, the project's name shows beside it.
- **Title**: the title new notes get. Variables work here, so `New character {{date}}` gives
  *New character 2026-09-28*. Left empty, a note gets an automatic title such as
  *2026-09-28 - Ad hoc 1*. If a note with that title already exists, the new one gets a number
  after it.
- **Filed under**, once you have template folders: which folder the template sits in.
- The **body**, with the same editor as a note. Its toolbar shows when the pointer is over the
  text, as it does in a note.
- On the status line under the text: **{{ }} variables**, which lists every variable with an
  example, and **Delete**, to remove the template.

Templates save as you type; the status line says **Saving…**, **Unsaved** or **Saved**.
Changes apply only to notes created afterwards.

## Variables

Put these in the body or the title and they are filled in when a note is created. In the body
they show as small tokens. Type `{` to pick one from a list, or use **Insert variable** in the
toolbar.

| Variable | Becomes |
|---|---|
| `{{title}}` | The new note's title |
| `{{date}}` | The date, as `2026-09-28` — it does not follow the Date format setting |
| `{{longdate}}` | The date written out, such as *28 September 2026* |
| `{{weekday}}` | The day of the week, such as *Monday* |
| `{{week}}` | The ISO week number, as `W40` |
| `{{time}}` | The current time, 24-hour with seconds (`14:05:09`) |
| `{{project}}` | The project the note is filed in, or nothing if it is in none |
| `{{folder}}` | The folder the note is created in |
| `{{cursor}}` | Nothing: it marks where the caret starts in the new note |

On a journal page the date variables give that page's day, not today's. Anything else you write
in double braces is left exactly as written. `[[Note Title]]` in a template becomes an ordinary
link to that note.

## Using a template

- **Use ▾** on the template's tab, or **Use** in its right-click menu: **New note**, **New note in
  a new tab**, **New note to the side**, **New note below**. The note goes to the template's
  folder.
- Right-click a folder → **New from template** and pick one. The note goes into that folder.
  **Browse all…** opens a picker that also asks for a title and offers a few built-in templates
  (*Meeting notes*, *Daily journal*, *Reading notes*).
- In an empty note, click **Template ▾** in the header or press `Ctrl+Alt+T`, and pick one. The
  note you are in is filled in; it keeps its place and its title, unless the title was the
  automatic one and the template names notes. The button is there only while the note is empty.
- **Use ▾ → Insert into focused note** puts the template's text at the caret of the note you were
  last writing in. That note has to be open in another pane.
- In the command palette, your templates are listed, marked **Template**; choosing one makes a
  note from it. **New note from template** opens the picker.

## Default templates

A folder can have a default template. **New note** in that folder then starts from it — from the
folder's right-click menu, from `Ctrl+N` while you are reading a note in that folder, and from a
project's **+ New note**.

- Right-click a folder → **Default template** and choose a template, **Inherit** or **None**.
- **Inherit** is where every folder starts: it uses its parent folder's default, and failing that
  its project's (**Edit project… → Default note**). The menu shows which template that gives.
- **None** means no template in this folder, whatever its parent or project says.
- **Default for ▾** on a template's tab, and **Set as default for** in its right-click menu, set
  the same thing from the template's side. Ticking a folder that is already ticked returns it to
  **Inherit**.
- When a default has been applied, a message says **Created from** *the template* with **Blank
  instead**. Click it to empty the note.
- **Blank note** in the same menus, and **New blank note** in the command palette, skip the
  default.
- Notes in **Unfiled** never get a default.

Deleting a template that is a default clears it from those folders and projects, and says how
many. Notes already made from it are not changed.

## The journal's template

New journal pages start from the journal's template.

- Set it with **Default for ▾ → Journal** on a template's tab, by right-clicking the
  **Journal** heading in the tree → **Default template**, or under **Journal template** in
  **Settings → Writing**. All three are the same setting.
- If you have not set one, a template named *Daily* is used, as before. **Automatic** in the menu
  means exactly that. **None** means a page with only its date heading.
- A day you have not written yet shows the template in grey, with a line above it: **Journal
  template · applies when you start writing**. Click the page to start the entry from it.
- **Change ▾** picks another template for that day only. **Start blank**, or holding `Alt` while
  you click the page, starts an empty page.

## Starter templates

**Settings → Account & data → Starter templates → Add** adds a set of ready-made
templates for drafting a book or tracking coursework, which you can edit or delete. Running it
again only adds the ones that are missing.

</div>
