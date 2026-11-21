---
title: Back up and move your library
description: Keep a safe copy of your reviews, and bring them to a new computer.
sidebar:
  order: 3
---

Everything in Relua is stored on your computer and nowhere else, so a backup is up to you. There are two ways to make one.

## Export your projects

This is the simplest backup, and the one to use when you move to a new computer.

1. Open a project and choose **Export**.
2. Tick **All videos** and choose **With videos**.
3. Save the file somewhere other than this computer: an external drive or a cloud drive.

Repeat for each project. Each file holds the project, its folders, the videos, and every comment, and it opens in Relua on a Mac or a PC.

To restore, or to set up a new computer, [install Relua](/start/install/), choose **Import** on the **Projects** screen, and pick each file.

After the first full backup, you can export **Comments only** to keep the comments current without copying the videos again. Keep the full export too. A comments-only file cannot bring the videos back.

Exports do not include your settings, your shortcuts, or comments you have not posted.

## Back up the whole library folder

Relua keeps its library in [one folder](/reference/data/). A copy of that folder is a complete backup, including your settings.

- **Mac:** Time Machine includes this folder. You do not need to do anything else.
- **Windows:** the folder is inside `AppData`, which File History skips unless you add it. Add `%LOCALAPPDATA%\Relua` to your backup tool, or copy the folder to another drive yourself.

:::caution
If you copy the folder by hand, quit Relua first. A copy made while Relua is open can be incomplete.
:::

To restore it, quit Relua, put the folder back in the same place, and open Relua again. The version of Relua must be the same as, or newer than, the one that last used that library.

## Before you delete something

Deleting a video or a project is permanent and removes its comments. Export it first if there is any chance you will want it again.
