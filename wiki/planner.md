<div v-pre>

# Planner

Planner has four views: **List**, **Calendar**, **Habits** and **Projects**. You switch
between them from the left rail: **List**, **Calendar** and **Habits** are the rows under
**Today**, and the **Projects** heading, or **All projects** at the end of that section, opens
Projects. The **+** at the end of a pane's tab strip opens any of the four as a new tab. The
view's name is the title at the top of the page.

With the rail hidden, press `Ctrl+\` to bring it back and switch views. Planner opens on Calendar
each time you start the app and remembers the view you were on while the app is open.

## Tasks: what the fields mean

- **Title**, optional **project** and **milestone**, optional **parent task**.
- **Do date** is when you plan to work on it. A task with only a do date shows on that day in the
  Calendar with a dashed outline. The do-date menu also offers **Next week** with no day; a task
  planned that way waits in the Pool.
- **Due date** is the deadline. It never moves on its own. A due date can have a **Time** (leave
  it empty for all day) and, once it has a time, a **Duration**. The time shows next to the due
  date on task rows, in your chosen 12-hour or 24-hour format (Settings).
- **Status** runs Backlog → Todo → Doing → Blocked → Done. Change it with the status chip on a
  row, or group the List by **Status** and drag the task. A Backlog task is parked: it sits under
  Unscheduled whatever dates it has, and giving it a date promotes it to Todo.
- **Priority** is None, P1, P2 or P3.
- **Late** means the due date has passed and you have not answered it with a do date on or after
  today. Rescheduling a late task to a later day clears Late everywhere at once.

## List

A grouped list of every open task; the header counts them. Choose the grouping in the header:
**Date**, **Project** or **Status**.

Date groups, top to bottom: **Overdue**, **Today**, **Next 7 days**, **Later**, **Unscheduled**,
**Paused projects** (collapsed) and **Done** (the last two weeks, collapsed). A task sits on the
same day here as it does in the Calendar: its due date, or its do date if it has no due date. A
task whose do date has passed without being done moves up into Today. **Paused projects** holds
the tasks of projects put on ice with their due dates paused: they keep their dates, but they are
not due, so they stay out of Overdue and Today.

- The **header input** captures a task with the shorthand described in
  [Capturing tasks](capturing-tasks.md). As you type, the end of the input previews what the
  shorthand will set — `due Fri · ◆ Beta.3 · P1`.
- Most groups end in an **add row** that inherits the group: a task added under Today is due
  today, under Next 7 days is due tomorrow, under a project belongs to it, under a status gets
  that status. Overdue, Later, Paused projects and Done have no add row.
- **Check** a task to complete it. A red check marks an overdue task.
- The **status chip** appears on Backlog, Doing and Blocked tasks (unless you group by Status);
  click it to advance the task one step.
- The **date cell** shows when the task is due — "Today 10:00", a weekday, or a date — or
  **+ date** when it has none. It opens the date menu: the next seven days, **Time…**, **Pick a
  date…** and **No date**. A task that only has a do date shows it faintly, and its menu moves the
  do date instead, with **Next week** in place of **Time…**.
- **Drag** a row onto another group to change what that group is about: its status, its
  project, or its due date (Today, Next 7 days — tomorrow — or Later — two weeks out;
  **Unscheduled** clears it; **Done** completes it). While you drag, empty groups appear so you
  can drop into them. **Undo** appears after a move. Overdue and Paused projects don't take drops.
- **Drag** a row onto the Calendar (in the other pane) to give it a due date.
- Rows show a small tag for where a task came from — "from Sep 26 log" for a task captured on a
  day's log, or "from" and a note's title — which opens that page; **P1**–**P3** for priority;
  **◆** with the name of its milestone; and a count such as `2/5` for its subtasks. A task from a
  paused project has a **paused** tag.
- **↑** / **↓** move the selection. With a row selected, **M** picks its milestone and **D** opens
  its date menu. Right-click a row of a project with milestones for the same two choices
  (**Milestone**, **Due date…**).
- Click a row to open its **detail** beside the list, in a **Task** tab (a companion — see
  [Tabs and the split view](tabs-and-split.md#companions)). If no Task is open yet, the main area
  splits and the Task opens in the other pane. The list keeps the focus, so **↑** / **↓** keep
  walking the rows and the Task follows the selection; **Enter** on a selected row opens it too.
  Right-click a row for **Open detail** (the same), **Open detail in new tab** (`Ctrl+click`),
  **Open detail to the side** (`Alt+click`) and **Open detail below**.
- The detail has the title, description, **Subtasks** (a checklist — **＋ Add a subtask…**; each
  item can be promoted to a full task), and the notes it is linked to under **Connections**. A task
  captured on a page shows a **from log** or **from note** card for that page. **More details…**
  opens **Project**, **Milestone**, **Status** (for an open task — tick the check to mark it done),
  **Priority**, **Repeat**, **Do date**, **Due date**, **Time**, **Duration** and custom fields.
- In a narrow pane, rows show just the check, the title and the date.

### The Pool

The **Pool** chip in the List header, next to the count of open tasks, narrows the List to work
that has no day yet. With it on, the List shows two groups:

- **Overdue** — each late task, with how many days late it is. **park all →** sends everything
  overdue back to the Pool as Backlog.
- **Pool** — tasks with no day, each labelled with why it is there: *parked*, *unscheduled*,
  *this week*, *next week*, *this month* or *next month*. Its **+ Add task** row makes a task
  with no date.

Blocked tasks are left out until they unblock; a line at the foot says how many. While Pool is on
the **Group** choices are hidden, because the Pool is always by date. Click **Pool** again to see
the whole List.

Open the Pool beside the Calendar with the Calendar's **Pool** button, or from the palette with
**Pool to the side** / **Pool below**.

### Today, and a day from the Calendar

The **Today** chip, beside **Pool**, narrows the List to today's work: **Overdue**, then
**Today** (tasks due today and tasks planned for today). The tab reads **Today's tasks** while it
is on. It is what the **Daily log** layout shows beside today's page. Click **Today** again to see
the whole List.

With a Calendar and a List open side by side, clicking a day's heading in the Calendar narrows the
List to that day. The List shows a chip with the date, such as **Oct 3 ×**; click it to see every
task again. The day is not kept when you close the window, or in a saved layout.

## Calendar

The Calendar shows tasks on the day they are **due**. Its controls sit in its header: **Today**,
**‹ ›** to step back and forward, the dates in view, **Day**, **Week**, **Month** and **Agenda**,
and the **Habits** and **Hours** switches — in a narrow pane (half of a split) the two switches
fold into one **View ▾** menu. It remembers where you were while you switch to the
List and back. In a very narrow pane (the width of a companion) the Calendar shows as its
**Agenda** and the view buttons hide; widen the pane and the view you chose comes back.

- **Day** and **Week** have an all-day row on top and, with **Hours** on, an hour grid underneath.
  A task with a due time sits in the grid at that time, as tall as its duration. A red line marks
  the current time. With Hours off, each day is a column of cards instead.
- **Month** is a month grid; **+N more** opens that day. **Agenda** lists the next four weeks,
  skipping empty days.
- A task with only a **do date** shows on that day with a dashed outline — it is planned, not
  due. A small ◦ marks a task's do date when it is due on a different day.
- **Drag** a task onto a day to make it due that day, or onto an hour to give it a time as well.
  Drop it on the List's **Pool** group to unschedule it, or drag a Pool row onto a day to
  schedule it. Dragging a dashed task moves its do date instead, so
  nothing gets a deadline you did not set. After a move, **Undo** appears for a few seconds.
- With a task focused, **Alt+←/→** moves it a day, **Alt+↑/↓** an hour, and **Delete**
  unschedules it.
- Each task has a **⋯** menu (or right-click): **Open detail**, **Open detail in new tab**,
  **Open detail to the side**, **Open detail below**, **Pick a date…** (a due-date field),
  **Unschedule** for a task on a day, and **Open source note** for one captured in a note.
- Hover a day's all-day row for **+** to add a task due that day; double-click an hour to add one
  at that time.
- The **Pool** button in the header opens the List's [Pool](#the-pool) beside the Calendar: late
  work, then tasks with no day. When something is late the button says so in red — **2 late**.
- Click a task anywhere in the Calendar to open its detail beside it, in a **Task** tab, the same
  way as in the List.
- The **filter** button in the header shows one project: its tasks stay as they are and every
  other project's fade, so you can still see what overlaps. The **Pool** button's late count
  follows the filter, and a task you add goes into that project. (The Pool list beside it still
  shows every project.) The project's name appears as a chip next to the dates;
  its **×** clears the filter. Each tab remembers its own filter while the app is open.
- A project's **milestones** appear in the all-day row as **◆ Name** in the project's colour —
  filled once all its tasks are done. Click one to open the project.
- **Habits** overlays your habits as checkable chips (dots in Month) on the days they occur.
  Tick them here or in Habits; it is the same record.

## Habits

A habit is something you do on a cadence.

- **＋ new habit** in the Planner header makes a daily habit called "New habit" and opens it in
  the editor, where you rename it and pick its **Cadence**: **Daily**, **Days** (chosen days of the
  week) or **Every N** days.
- The list shows each habit's cadence, current **streak**, and this week's days — kept, missed or
  not due. Click a day to tick or untick it.
- Clicking a habit opens its **editor** beside the list, in a **Habit** tab (a companion — see
  [Tabs and the split view](tabs-and-split.md#companions)); right-click a row for **Open detail**,
  **Open detail in new tab**, **Open detail to the side** and **Open detail below**. The editor has
  the streak, the completion rate over thirty days, a five-week grid you can click to correct past
  days, the cadence, a **Project**, **Steps**, **Pause** (or **Resume**), **Archive**, and a bin
  button that deletes the habit with its history. Clicking a habit's name in the Day beside a note
  opens the same editor right there in the Day, without leaving the page you were reading.
- **Steps** break a habit into the things it is made of — *Wash face*, *Brush teeth*, *Walk dogs*.
  Add them with **＋ Add a step…** in the editor. They are the same every day; you tick them off
  per day in a day's list, not here.
- **Pausing** stops a habit from appearing without losing its history. Paused habits do not
  count against your streak.
- Streaks are always computed from your actual completions, so correcting a past day corrects
  the streak.
- Habits also appear on the Calendar overlay and in the Day beside a note. A habit with steps
  shows a count there — `1/3` — and a chevron that expands the steps so you can tick them off for
  that day. The ticks belong to the day: yesterday's stay on yesterday. Ticking the habit itself
  counts the whole day as kept, steps and all.

## Projects

Projects can be hidden from Planner and the rail in **Settings → Desk → Show Projects**. When
shown:

### The Projects view

- Choose **List** or **Timeline** in the header. **Filter projects** narrows either one by name as
  you type; **On ice** and **Done** add those projects back.
- **List** sorts by **Recent** (last activity), **Due** (the soonest task due) or **Name**. Each
  row shows the project's colour and name, its current milestone and date, a progress bar ("4 of
  10 done"), when the next task is due, and how many tasks are open — with a red badge when some
  are overdue. Finished projects are dimmed.
- **Needs attention** at the top lists active projects that have overdue work, have been quiet for
  three weeks or more, or have a milestone due within ten days that is less than half done. The
  row says which.
- **Timeline** draws each project that has milestones across the months: a bar from its start to
  its last milestone, a **◆** at each milestone (filled once all its tasks are done), and a red line
  for today. Click a ◆ to open that project's tasks grouped by milestone.
- **＋ New project** asks for a name; press Enter and the project opens. You can also start one from
  the command palette (**New project…**), the **+** on the rail's **Projects** header, or the
  **+** menu in Notes (**Project…**).

### A project

- The header reads **Projects /** (back to the list), the name (click to rename), a **status** —
  Active, On ice or Done — and a line such as "4 of 10 done · 1 overdue · next Today". The
  bookmark **pins** the project, which puts it first in the rail's Projects list (the rail shows
  up to five active projects). **⋯** has **Edit project…**, **Open tasks in
  Calendar** (to the side, filtered to this project) and **Pin to rail** / **Unpin from rail**.
- **Edit project…** sets the **Focus** (one line: what done looks like), the description, the
  colour, and the **Default note** template that **+ New note** starts from. **Target** is the
  date of the last milestone; change milestone dates from the Tasks tab.
- **Overview** shows the focus, the description, the current milestone and how far along it is,
  **Next up** (the five soonest tasks, with an input to add more), and recent notes. The card on
  the side has the progress, every milestone with its date — **+ Add milestone** makes one due in
  two weeks — the start and target dates, and the latest activity. A new project shows **Get this
  project going**: set a focus, add a milestone, add a few tasks.
- **Tasks** is the same list as Planner's List, for this project only, grouped by **Status**,
  **Milestone** or **Due**. Clicking a task opens its detail beside the page, as in the List. Grouped by milestone, each milestone's **⋯** has **Rename**,
  **Due +1 week**, **Due −1 week**, **Pick date…** and **Delete milestone** (its tasks keep their
  dates); **+ Milestone** adds one. Drag tasks between groups to change them; **Undo** puts a
  move back.
- **Notes** lists the **Project page** first — the project's own note; **Write the project page**
  starts it — then the notes filed in the project, then the ones linked from elsewhere. **Graph**
  draws them with the project's tasks. **+ New note** uses the project folder's default template,
  or failing that the project's **Default note**;
  **Link a note** tags a note from elsewhere without moving it.
- **Activity** lists every change to the project, its tasks and notes, by day. Filter to Tasks,
  Notes or Project.
- Press **N** on a project page to jump to its task input.

### Pausing and finishing

- Setting a project **On ice** when it has dated tasks asks what to do with them: **Pause due
  dates** keeps the dates but stops treating them as due — they leave Today and Overdue and wait
  under **Paused projects** in the List — or **Keep dates live**. Setting it back to Active brings
  the dates back. **Put on ice** is also on the project folder's right-click menu in Notes.
- Setting it **Done** while tasks are still open asks what to do with them: **Complete all**,
  **Unschedule them**, **Move to No project**, or **Leave open**. **Write a close-out note** (on by
  default) files a note with the milestones, the counts and the dates. A finished project's
  Overview shows a **Completed** card instead of Next up.
- Notes belong to a project through its folder; tasks through the task's project field.

</div>
