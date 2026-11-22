---
title: Where Relua keeps your data
description: The data folder, what is inside it, and what Relua sends over the network.
sidebar:
  order: 3
---

Relua keeps your work in two places:

- Your **Relua folder**, which you choose. It holds your projects and comments as plain files. See [Use Relua on two computers](/share/sync/).
- The **data folder**, covered here. It holds the working library on this computer.

## Find the data folder

| System | Folder |
| --- | --- |
| Mac | `~/Library/Application Support/Relua` |
| Windows | `%LOCALAPPDATA%\Relua` |

- **Mac:** in Finder, choose **Go › Go to Folder…**, paste the path, and press <kbd>Return</kbd>.
- **Windows:** paste the path into the File Explorer address bar and press <kbd>Enter</kbd>.

The data folder cannot be moved.

## What is inside

| Item | What it holds |
| --- | --- |
| `relua.sqlite3` and the files beside it | Projects, folders, comments, drawings, Live recordings, the Trash, your name, settings, and shortcuts |
| `media` | Relua's own copy of each video you added |
| `thumbnails` | The pictures on the timeline |
| `updates` | Downloaded updates, until they are installed |
| `cache`, `tmp`, `config` | Working files |

Do not rename, edit, or delete anything here while Relua is open, and do not edit the database by hand.

## Disk space

Adding a video copies it into `media` at original quality, so the data folder takes about as much room as your videos.

In this version, deleting a video or a project leaves its copy in `media`. Adding the same video again reuses it.

## What goes over the network

Relua works offline. It contacts GitHub to check for an update when it opens and every 12 hours, and to download one when you ask. Nothing about your library is sent. There is no telemetry, analytics, or ads.

A Relua folder inside a cloud drive is carried by that cloud drive, not by Relua.

## Keep it safe

See [Back up and move your library](/share/backup/). Do not put the data folder in a cloud drive.
