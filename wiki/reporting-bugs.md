<div v-pre>

# Reporting a bug

The beta has a reporter built in. Use it the moment something looks wrong; it captures the
context you would otherwise have to remember.

## Opening it

- `Ctrl+Shift+B` anywhere.
- The **bug** icon at the foot of the sidebar — the middle of the three small icons, between Help
  and Settings (the gear). Hover it and it says *Report a bug*. On the phone it is a **Report a
  bug** row at the foot of the left drawer.
- **Report a bug** in **Settings → About**.
- **Report a bug…** in the command palette.
- **Report this** on the crash screen, if a screen ever fails to render. This pre-fills the
  report with the error.

## Filling it in

- **Type**: Bug, Idea, or Confusing.
- **Severity**: Low, Medium (the default), High, Blocker.
- **Title**: one line. This is the only field you must fill in; **Send report** stays greyed out
  until you do.
- **What happened**, **What you expected**, **Steps to reproduce**: free text; leave what you do
  not know blank.

Press **Send report**, or **Cancel** to throw the report away.

**Show attached context** (it also counts the console entries and activity it will attach) reveals exactly what is sent with the report: the app version and
build, your platform, the account mode and sync state, the last few console errors, and your
last 40 actions in the app. Note content is never included — an edit to a note shows as *edited*
with a word count, never the words.

That last part is the most useful thing in a report, and it is attached for you. If you want to
send more of it, or the thing you are reporting happened a while ago, open the **Activity log**
(`Ctrl+K`, then type *activity*), narrow to when it happened, press **Copy as markdown**, and paste
it into **What happened**. See [The activity log](activity-log.md).

## Where it goes

- Signed in: the report is sent to the beta's bug tracker under your account, and a message says
  *Bug report sent. Thank you.*
- Local mode, offline, or a failed send: the same report is saved as a note in a **Beta
  feedback** folder in your notes, and copied to the clipboard, ready to paste into an email or
  an issue. The message says so and why. Nothing is lost.

## What makes a good report

- Say what you did right before, even if it seems unrelated. If you cannot remember, the
  **Activity log** will.
- If the sync status at the foot of the sidebar said anything other than **Synced**, say what. For a sync problem, paste
  **Settings → About → Copy sync diagnostics** into **What happened** too. See
  [Sync and your account](sync-and-account.md).
- Quote the version and build from **Settings → About** if you are reporting from outside the
  app.

</div>
