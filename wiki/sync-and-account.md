<div v-pre>

# Sync and your account

Hollow stores everything on your computer first. Sync is optional and can be turned on at any
time without losing anything.

## The first screen

The first time you open Hollow it offers:

- **Log in**, with your email and password.
- **Create an account** and **Forgot password?**, under the form.
- **Use this device only for now**: no account, nothing leaves the computer. You can sign in
  later.

## The two modes

**Local mode.** Chosen with **Use this device only for now**. No account, no network use. The
account picture at the foot of the sidebar says *Account — local mode* when you hover it; click
it for **Sign in to sync (Settings → Account & data)**. Restoring a backup is only possible in this mode.

**Cloud mode.** You are signed in. Changes upload to your account and download to your other
signed-in devices. The account picture shows your initials; click it for **Account & settings**
and **Log out**.

## Turning sync on later

**Settings → Account & data → Sign in to sync.** The app returns to the sign-in screen. Log in or
create an account. Everything you made in local mode is moved into the account and uploaded, and
a message says how many items moved. Nothing is left behind and nothing is duplicated.

The first upload after that can take a moment; the sync status at the foot of the sidebar reads
**Syncing…** until it is done, and hovering it shows how many changes are left.

## The sync status

While you are signed in, a dot and a word sit at the foot of the sidebar, between the Settings
button and your account. On the icon sidebar it is the dot alone; hover it for the word. It is not
shown in local mode, where there is nothing to sync, and it goes out of sight with the sidebar
when you hide it.

| Status | Meaning | What to do |
|---|---|---|
| **Synced** | Connected, and nothing is waiting | Nothing |
| **Syncing…** | Changes are waiting to upload while connected | Nothing; it clears itself. Hover it for the count |
| **Offline** | Not connected. Changes are saved locally | Nothing; they upload when you are back online. Hover it to see how many are pending |
| **Stalled** (red) | An upload keeps failing and later changes are waiting behind it | Click it to open **Settings → About**, press **Copy sync diagnostics**, and report it with `Ctrl+Shift+B` |
| **Not receiving** (red) | Your changes upload, but nothing is coming down from your other devices | The same: **Copy sync diagnostics** and report it |

Hover the status for the reason in a sentence. Clicking it always opens **Settings → About**.

A brief network hiccup does not say **Stalled**. It reads **Syncing…** and clears itself once
the retry succeeds; the red status is for a queue that is genuinely stuck. When it does stall, a
message also pops up once to say so.

**Settings → About** always shows the full line: connection, items waiting, last synced time, and
any error.

### Reporting a sync problem

**Settings → About** has **Copy sync diagnostics**. It copies the current sync state and the last
few failures — including the reason the server gave, which is the part worth having — ready to
paste into a bug report. It contains status and error text only: never your notes, tasks or
projects.

Underneath it is the path to Hollow's sync log, where the same failures are written as they
happen. Attach that file if you are asked for it.

## Working offline

Cloud mode is fully usable offline. Edits are saved locally and queued. When the connection
returns, they upload in order.

If you open the app and your sign-in cannot be restored — you are offline, or it has expired —
the sign-in screen offers **Continue offline** in place of *Use this device only for now*. Choose
it to open your data as it was at last sync and keep working. The account picture gets a small
dot, and hovering it says *Offline · sign in to sync*; click it to open Settings. When you are
back online, sign in from **Settings → Account & data** and everything queued uploads.

## Signing out

**Log out** in the account menu, or **Sign out** in Settings → Account & data. Your local copy stays on
the machine so you can sign back in without a full download. Signing out also forgets the
**Continue offline** option until you next sign in.

## More than one device

Sign in with the same account on each device. Each device keeps a full local copy and they
converge through the account.

**The first sign-in on a new computer** waits for your data to download before Hollow opens. You
see a loading screen; if it takes more than a moment it says **Getting your data. The first
sign-in on a computer can take a moment.** Then your own desk opens: your name, your settings,
your pages. Later sign-ins on that computer open straight away.

Hollow does not merge two versions of the same thing. When two devices change the same thing
before they have seen each other's change, **the change that reaches the account last wins**, and
the other is replaced without a warning. Usually that is the device that comes back online
second, which is not always the one where you made the later edit. In practice:

- **A note** is one piece. If you edit the same note on two devices while one is offline, you
  end up with one device's version of the whole note, not a blend of both.
- **A task** mostly keeps its fields apart, so renaming a task on one device and changing its due
  date on the other usually keeps both. Changing the same field on both keeps one.
- **A project's details** — its status (active, on ice, done), its milestones and similar — are
  stored together as one piece. **Known limitation:** if two devices change any of these for the
  same project while one of them is offline, one device's changes can be lost, even when they
  touched different milestones. Until this is fixed, make project changes on one device at a
  time, or let both devices sync before you switch.

To avoid surprises, let a device that has been offline finish syncing (the status reads **Synced**)
before you edit the same things somewhere else.

## Privacy note

Note bodies are scrambled before they leave the device and are stored that way in the account;
titles, dates and task fields are stored as they are so that sync and search can work on them.
The scrambling keeps note text from being read at a glance. It is not end-to-end encryption, so
do not rely on it for anything you would not store in an ordinary cloud service.

</div>
