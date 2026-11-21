---
title: Where Relua keeps your data
description: The folder that holds your library, what is inside it, and what Relua sends over the network.
sidebar:
  order: 3
---

Your projects, videos, drawings, and comments are stored in one folder on your computer. There is no account and nothing is uploaded.

## Find the folder

| System | Folder |
| --- | --- |
| Mac | `~/Library/Application Support/Relua` |
| Windows | `%LOCALAPPDATA%\Relua` |

- **Mac:** in Finder, choose **Go › Go to Folder…**, paste the path, and press <kbd>Return</kbd>.
- **Windows:** paste the path into the address bar in File Explorer and press <kbd>Enter</kbd>.

Relua does not have a setting to move this folder.

## What is inside

| Item | What it holds |
| --- | --- |
| `relua.sqlite3` and the files beside it | Projects, folders, comments, drawings, Live recordings, the Trash, your name, settings, and shortcuts |
| `media` | Relua's own copy of each video you added |
| `thumbnails` | The pictures on the timeline |
| `updates` | Downloaded updates, until they are installed |
| `cache`, `tmp`, `config` | Working files |

Do not rename, edit, or delete files in this folder while Relua is open, and do not edit the database by hand. Relua checks every video against its stored copy when you open it.

## Disk space

When you add a video, Relua copies it into `media` at original quality and never touches your file again. You can move or delete the original afterwards. The library therefore takes about as much room as the videos in it.

In this version, deleting a video or a project removes it and its comments from your library, but its stored copy stays in `media`. If you add the same video again, Relua reuses that copy.

## What goes over the network

Relua works offline. It contacts GitHub to check for an update when it opens and every 12 hours while it is open, and to download an update when you ask it to. Nothing about your library, your videos, or your comments is sent. Relua has no telemetry, analytics, or ads.

## Keep it safe

The folder is the only copy of your work. See [Back up and move your library](/share/backup/). To use Relua on more than one computer, see [Use Relua on two computers](/share/sync/); do not put this folder in a cloud drive.
