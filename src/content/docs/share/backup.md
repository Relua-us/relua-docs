---
title: Back up and move your library
description: Keep a safe copy of your reviews, and bring them to a new computer.
sidebar:
  order: 3
---

Relua has no cloud of its own, so backups are up to you.

## Export your projects

1. Open a project and choose **Export**.
2. Tick **All videos** and choose **With videos**.
3. Save the file to an external drive or a cloud drive.

Repeat for each project. To restore, choose **Import** on the **Projects** screen and pick each file. The files open on a Mac or a PC.

- After the first full export, **Comments only** keeps the comments current. Keep the full export too. A comments-only file cannot bring the videos back.
- Exports leave out your settings, shortcuts, and unposted comments.

## Move to a new computer

- **Your Relua folder is in a cloud drive:** [install Relua](/start/install/), choose **Open**, and pick the folder. See [Use Relua on two computers](/share/sync/).
- **Otherwise:** export each project, then import the files on the new computer.

## Back up the data folder

Relua's [data folder](/reference/data/) is a complete copy of your library on this computer, settings included.

- **Mac:** Time Machine includes it.
- **Windows:** File History skips `AppData`. Add `%LOCALAPPDATA%\Relua` to your backup tool, or copy the folder to another drive.

:::caution
Quit Relua before you copy the folder by hand. A copy made while Relua is open can be incomplete.
:::

To restore, quit Relua, put the folder back in the same place, and open Relua. Relua must be the same version as the one that last used the library, or newer.

## Before you delete something

Deleting a video or a project is permanent and removes its comments. Export it first if you might want it again.
