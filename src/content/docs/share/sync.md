---
title: Use Relua on two computers
description: Keep your library in iCloud Drive, Google Drive, or OneDrive and open it from every computer.
sidebar:
  order: 2
  label: Sync between computers
---

Relua has no account and no cloud of its own. You choose the folder your library lives in. Put that folder in a cloud drive you already use, and the cloud drive carries it to your other computers. This works between two Macs, two PCs, or a Mac and a PC.

You need Relua 0.3.0 or later on every computer.

## Set it up

1. Make a folder for Relua in your cloud drive, for example `Relua`.
2. On the first computer, open **Settings**, choose **Library**, then **Choose folder**, and pick that folder.
3. Wait for the cloud drive to finish uploading. Video files are large, so the first time can take a while.
4. On the second computer, wait for the folder to arrive. Then open **Settings**, choose **Library**, then **Choose folder**, and pick the same folder.

Both computers now show the same projects, videos, and comments. If the second computer already had projects of its own, they are added to the folder and appear on the first.

:::note
On a Mac, macOS may ask whether Relua can access files in your cloud drive. Choose **Allow**.
:::

## Your cloud drive

Any cloud drive that shows up as a folder in Finder or File Explorer works.

| Service | On a Mac | On Windows |
| --- | --- | --- |
| iCloud Drive | Built in. **iCloud Drive** is in the Finder sidebar. | Install iCloud for Windows from the Microsoft Store. **iCloud Drive** appears in File Explorer. |
| Google Drive | Install Google Drive for desktop. **Google Drive** appears in the Finder sidebar. | Install Google Drive for desktop. It appears as a drive in File Explorer. |
| OneDrive | Install OneDrive from the Mac App Store. | Built in. **OneDrive** is in File Explorer. |

Use one cloud drive for the folder, not two at once.

### Keep the folder on your computer

Cloud drives can keep a file in the cloud and leave only a placeholder on your computer. Relua asks the cloud drive for any file that is missing and waits for it, so nothing is lost, but a video does not appear until its file has arrived. To have everything there before you need it, tell the cloud drive to keep the folder downloaded:

- **iCloud Drive on a Mac:** right-click the folder and choose **Keep Downloaded**.
- **OneDrive, and iCloud Drive on Windows:** right-click the folder and choose **Always keep on this device**.
- **Google Drive:** right-click the folder and choose **Offline access › Available offline**.

## What stays in step

- Projects, folders, and videos, including renames and moving a video into a folder.
- Comments, replies, drawings, and Live recordings.
- The Trash: deleting and restoring a comment.
- Deleting a video or a project. See [Deleting](#deleting).

Your name, appearance, shortcuts, and comments you have not posted yet stay on each computer.

You do not have to do anything to refresh. Relua watches the folder, so a change from another computer appears as soon as the cloud drive brings it in, even while you are in the middle of a video.

## Deleting

Deleting a comment moves it to the Trash on every computer, and anyone can restore it.

Deleting a video or a project removes its files from the folder, so it disappears from every computer that uses the folder, along with its comments. This cannot be undone. Relua tells you so before you confirm.

## When the folder is not there

If the cloud drive is signed out, still starting, or offline, Relua says your library folder cannot be reached and carries on. Everything you do is kept on your computer and written to the folder when it is back.

You can work on two computers at the same time, or on one while it is offline. When they catch up, both sets of comments are kept.

## Share a folder with other people

The same folder works for a team. Share the cloud folder with the people you review with, and have each person choose it under **Settings › Library**. Each comment keeps the name of the person who wrote it.

Anyone who has the folder can delete a video or a project for everyone, so share it with people you trust. To send a review to someone without sharing a folder, [export a file](/share/export-import/) instead.

## What is in the folder

Each project has its own folder, named after the project when it was first added. Inside are the video files and one small `.json` file per video that holds its comments.

- Leave the files as they are. Do not rename or edit them.
- Deleting a video's files or a project's folder here deletes it in Relua on every computer.
- Renaming a project in Relua does not rename its folder.

## Stop using the folder

Open **Settings**, choose **Library**, then **Stop using**. Your library stays on the computer and the files stay in the folder. To move to a different folder, choose **Change**.

## The data folder is something else

Relua also keeps a working copy of the library in its own [data folder](/reference/data/). Leave that one where it is, and do not put it in a cloud drive. It is a database that Relua writes to the whole time it is open, and a cloud drive can damage it by copying it mid-change.
