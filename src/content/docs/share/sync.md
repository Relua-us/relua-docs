---
title: Use Relua on two computers
description: Keep your reviews in step between computers with iCloud Drive, Google Drive, OneDrive, or Dropbox.
sidebar:
  order: 2
  label: Sync between computers
---

Relua does not have an account or a cloud, so nothing syncs by itself. You keep two computers in step with [export files](/share/export-import/), and a cloud drive you already use carries them from one computer to the other. This works between two Macs, two PCs, or a Mac and a PC.

## How it works

Each computer keeps its own library. An export is a single `.zip`, and importing one merges it into the library on that computer without overwriting anything. Because merging is safe in both directions, you can work on either computer and bring the other up to date whenever you like.

The cloud drive only moves the files. Your work lives in the library on each computer, so a file that is late, missing, or saved over never loses anything.

## Set it up once

1. Make a folder for Relua in your cloud drive, for example `Relua`.
2. On the first computer, open the project and choose **Export**. Tick **All videos**, choose **With videos**, and save the file into that folder.
3. Wait for the cloud drive to finish uploading. Video files are large, so this can take a while.
4. On the second computer, wait for the file to arrive, then open Relua, choose **Import** on the **Projects** screen, and pick the file.

Both computers now have the project, its videos, and every comment.

## Keep them in step

When you finish working on one computer:

1. Open the project and choose **Export**.
2. Choose **Comments only** and save it into the same cloud folder. You can save over the previous file.

When you sit down at the other computer:

1. Choose **Import** and pick that file.

New comments, replies, and deletions appear straight away. A comments-only file is small, so it usually reaches the other computer in seconds.

When you add a new video to the project, send it across once: open the video's **…** menu, choose **Export**, and choose **With videos**. After that, **Comments only** is enough again.

:::tip
Make it a habit to import when you sit down and export when you get up. If you forget, nothing is lost. Import the other computer's file later and the two sets of comments merge.
:::

## Your cloud drive

Any service that puts a folder in Finder or File Explorer works. Save exports into that folder and import from it.

| Service | On a Mac | On Windows |
| --- | --- | --- |
| iCloud Drive | Built in. **iCloud Drive** is in the Finder sidebar. | Install iCloud for Windows from the Microsoft Store. **iCloud Drive** appears in File Explorer. |
| Google Drive | Install Google Drive for desktop. **Google Drive** appears in the Finder sidebar. | Install Google Drive for desktop. It appears as a drive in File Explorer. |
| OneDrive | Install OneDrive from the Mac App Store. | Built in. **OneDrive** is in File Explorer. |
| Dropbox | Install the Dropbox app. | Install the Dropbox app. |

Cloud drives often show a file before it has finished downloading. If a file has a cloud icon next to it, let it download first:

- **iCloud Drive on a Mac:** right-click the file and choose **Download Now**.
- **OneDrive, and iCloud Drive on Windows:** right-click the file and choose **Always keep on this device**.
- **Google Drive:** right-click the file and choose **Offline access › Available offline**.

## Share a folder with other people

The same folder works for a team. Share the cloud folder with the people you review with, and have each person export **Comments only** under their own name, for example `Game 3 - Sam.zip`. Everyone imports the others' files. Each comment keeps the name of the person who wrote it.

Separate file names matter here. If two people save over the same file, the cloud drive keeps only one of them, and the other has to export again.

## Do not put the library folder in a cloud drive

It is tempting to move the [folder where Relua keeps its library](/reference/data/) into iCloud Drive or OneDrive and open it from both computers. Relua does not support this, and it can damage the library.

- The library is a database that Relua writes to the whole time it is open. Cloud drives copy files one piece at a time and cannot merge two versions of a database. Two computers can end up with a half-updated library, or one computer's changes can replace the other's.
- Cloud drives move files that have not been opened recently off the computer to save space. Relua expects every video in its library to be on the disk.
- Your name is stored in the library, so both computers would sign comments as the same person.

Export files avoid all of this, because Relua merges them itself.
