---
title: Use Relua on two computers
description: Keep your projects in step between computers with a sync folder in iCloud Drive, Google Drive, or OneDrive.
sidebar:
  order: 2
  label: Sync between computers
---

Relua has no account and no cloud of its own. To use it on more than one computer, you choose a **sync folder** inside a cloud drive you already use. Relua keeps your projects in that folder as ordinary files, and the cloud drive carries them to your other computers. This works between two Macs, two PCs, or a Mac and a PC.

You need Relua 0.3.0 or later on every computer.

## Set it up

1. Make a folder for Relua in your cloud drive, for example `Relua`.
2. On the first computer, open **Settings**, choose **Sync**, then **Choose folder**, and pick that folder.
3. Wait for the cloud drive to finish uploading. Video files are large, so the first time can take a while.
4. On the second computer, wait for the folder to arrive. Then open **Settings**, choose **Sync**, then **Choose folder**, and pick the same folder.

Both computers now show the same projects, videos, and comments. If the second computer already had projects of its own, they are added to the folder and appear on the first.

:::note
On a Mac, macOS may ask whether Relua can access files in your cloud drive. Choose **Allow**.
:::

## What stays in step

- Projects, folders, and videos, including renames and moving a video into a folder.
- Comments, replies, drawings, and Live recordings.
- The Trash: deleting and restoring a comment.
- Deleting a video or a project. See [Deleting](#deleting).

Your name, appearance, shortcuts, and comments you have not posted yet stay on each computer.

## When Relua checks the folder

You do not have to do anything. Relua watches the folder, so a change from another computer appears as soon as the cloud drive brings it in, even while you are in the middle of a video. It also reads the folder when it opens and when you come back to its window, and it writes your own changes to the folder as you make them.

New comments usually reach the other computer within seconds of the cloud drive syncing. A new video appears there once the cloud drive has finished downloading its file.

## Keep the folder on your computer

Cloud drives can keep a file in the cloud and leave only a placeholder on your computer. Relua waits for files that have not downloaded yet, so nothing is lost, but they do not show up until they arrive. Tell your cloud drive to keep the sync folder downloaded:

| Service | On a Mac | On Windows |
| --- | --- | --- |
| iCloud Drive | Right-click the folder in Finder and choose **Keep Downloaded**. | Install iCloud for Windows. Right-click the folder and choose **Always keep on this device**. |
| Google Drive | Install Google Drive for desktop. Right-click the folder and choose **Offline access › Available offline**. | The same as on a Mac. |
| OneDrive | Install OneDrive. Right-click the folder and choose **Always keep on this device**. | Right-click the folder and choose **Always keep on this device**. |

Use one cloud drive for the folder, not two at once.

## Deleting

Deleting a comment moves it to the Trash on every computer, and anyone can restore it.

Deleting a video or a project removes its files from the sync folder, so it disappears from every computer that uses the folder, along with its comments. This cannot be undone. Relua tells you so before you confirm.

## When the folder is not there

If the cloud drive is signed out, still starting, or offline, Relua says the sync folder cannot be reached and carries on. Everything you do is kept on your computer and written to the folder when it is back.

You can work on two computers at the same time, or on one while it is offline. When they catch up, both sets of comments are kept.

## Share a folder with other people

The same folder works for a team. Share the cloud folder with the people you review with, and have each person choose it under **Settings › Sync**. Each comment keeps the name of the person who wrote it.

Anyone who has the folder can delete a video or a project for everyone, so share it with people you trust. To send a review to someone without sharing a folder, [export a file](/share/export-import/) instead.

## What is in the folder

Each project has its own folder, named after the project when it was first synced. Inside are the video files and one small `.json` file per video that holds its comments.

- Leave the files as they are. Do not rename or edit them.
- Deleting a video's files or a project's folder here deletes it in Relua on every computer.
- Renaming a project in Relua does not rename its folder.

## Turn it off

Open **Settings**, choose **Sync**, then **Turn off**. Your library stays on the computer and the files stay in the folder. To move to a different folder, choose **Change**.

## Do not put the library folder in a cloud drive

The sync folder is not the [folder where Relua keeps its library](/reference/data/). Leave the library where it is. It is a database that Relua writes to the whole time it is open, and a cloud drive can damage it by copying it mid-change or by moving its videos off the computer.
