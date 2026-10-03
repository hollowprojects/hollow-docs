<div v-pre>

# Capturing tasks

There are several ways to add a task. Most of them understand the same shorthand; the table at
the end of *Where to capture* says which parts each one reads.

## Where to capture

- **Quick capture**: press `N` anywhere outside a text field, or `Ctrl+Shift+N` anywhere. A
  small dialog takes a title, an optional **Do date**, a project and a tag; switch it from
  **Task** to **Note** to capture a note instead. (On a project page, `N` goes to the project's
  own input.)
- **Planner → List**: the input at the top of the list, or the **add row** at the end of a group
  (Today, Next 7 days, Unscheduled, a project, a status or a milestone).
- **A project's Tasks tab**, or the input under **Next up** on its Overview: the same input,
  already inside the project — no `#project` needed. Press `N` on a project page to jump to it.
- **Planner → Calendar**: the **+** in a day's all-day row (Day and Week), or a double-click on
  an hour. A task added on a day is due that day; on an hour, due at that time. With the Calendar
  filtered to a project, the task goes into that project.
- **The Pool**: the **+ Add task** row at the end of the List's **Pool** group (turn on the
  **Pool** chip in the List header, or click **Pool** in the Calendar). A task added there has no
  date.
- **The Day** beside a note (`Ctrl+Shift+1`): the day glance's input, **Add a task, or /note ·
  /habit**. Tasks added here get a do date of the day shown and are linked to the note beside it. Start the line with `/note` to make a note or
  `/habit` to make a daily habit instead.
- **Command palette**: **New task** opens Quick capture, with whatever you typed as the title;
  **Add task for today** opens it with today as the do date.

| Shorthand | List, project pages | Calendar | Quick capture | Day glance |
|---|---|---|---|---|
| `#project`, `@date` | yes | yes | yes | no |
| `!1`–`!3` | yes | yes | yes | no |
| `>parent`, `^milestone` | yes | no | no | no |

A token a place does not read stays in the title as typed.

## The shorthand

Type the title, then any of these tokens anywhere in the line:

| Token | Meaning | Examples |
|---|---|---|
| `#project` | Put the task in a project | `#thesis`, `#Home renovation` |
| `@date` | Set the **due** date | `@tomorrow`, `@fri`, `@2026-10-03`, `@10/3` |
| `>parent` | Make it a subtask of a task in the list | `>Draft chapter 2` |
| `^milestone` | Put it in one of the project's milestones | `^beta3` for "Beta.3" |
| `!1` – `!3` | Set its priority to P1, P2 or P3 | `!1 Ship it`, `Call mom !2 soon` |

Rules that keep this safe:

- A token that does not match anything is **left in the title exactly as typed**. A typo never
  deletes part of what you wrote.
- Each kind of token counts once per line; a second `#` or `@` stays in the title.
- Project and parent names match the longest name that starts at the token, so multi-word names
  work without quotes. Failing that, the first name that starts with the word you typed wins.
- `>parent` looks at the task you have selected first, then the rest of the list you are in.
- A typed `@date` wins over the default placement of the row you are adding in.
- `^milestone` matches the start of a milestone's name, ignoring capitals, spaces and
  punctuation, and picks the earliest-dated match. It needs a project: the one you are in, or a
  `#project` in the same line.
- `!1`, `!2` and `!3` must stand alone — `!12` or `!1!` stay in the title.

## Date vocabulary

Accepted after `@`, and in the command palette when you type a date to jump to a day:

- `today`, `tomorrow`, `yesterday`
- Weekday names and their three-letter forms: `monday` … `sunday`, `mon` … `sun`. A weekday
  means its **next** occurrence after today; on a Friday, `@fri` is next Friday. Say `@today` for
  today. (The command palette does not take weekday names.)
- `YYYY-MM-DD`, or a date with slashes, with or without a year: `10/3`, `10/3/26`, `10/3/2026`.
  A slashed date is read in the order of your **Date format** setting (Settings → Planner): month
  first reads `10/3` as 3 October, day first reads it as 10 March. A date that only makes sense
  one way round, such as `25/12`, is read that way under either setting.
- After `@`, a slashed date without a year means the next time that date comes round: with month
  first, `@1/5` typed in September is next January. In the command palette it means this year, so
  you can jump back to a past day.

## Do date versus due date

A typed `@date` sets the **due date** — the day the task is due, which is where the List and the
Calendar show it. Quick capture's **Do date** field and the day glance set the **do date**
instead: the day you intend to work on it. You can use both at once in Quick capture. Late is
judged against the due date, so a task with only a do date in the past is never Late; it simply
appears under Today until you move it.

## Subtasks

There are two kinds:

- **Checklist subtasks** live inside a task. Add them in the task's detail with **＋ Add a
  subtask…**. Rows show a count such as `2/5`, and in the day glance a chevron opens them so you
  can tick them off. Each one can be promoted to a full task.
- **Child tasks** are full tasks with a parent: `>parent` at capture, or a promoted checklist
  item. They are listed under **Subtasks** in the parent's detail. Completing the parent does not
  complete them.

</div>
