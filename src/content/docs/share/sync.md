---
title: Use Relua on two computers
description: Keep a project in a folder in iCloud Drive, Google Drive, or OneDrive and open it from every computer.
sidebar:
  order: 2
  label: Sync between computers
---

Relua has no account and no cloud of its own. A project can live in a folder you choose. Put that folder in a cloud drive you already use, and the cloud drive carries it to your other computers. This works between two Macs, two PCs, or a Mac and a PC.

You need Relua 0.3.0 or later on every computer.

## Put a project in a folder

For a new project, choose **New project**, then **Choose folder** before you choose **Create**. Pick a folder in your cloud drive, for example `Relua` in iCloud Drive. Relua makes a folder for the project inside it.

For a project you already have, open its **…** menu on the **Projects** screen and choose **Choose folder**.

## Open it on another computer

1. Wait for the cloud drive to bring the folder to that computer.
2. On the **Projects** screen, choose **Open folder**.
3. Pick the project's folder. If you pick the folder that holds several projects, Relua opens all of them.

The project appears with its comments. From then on, a change made on one computer appears on the other by itself, as soon as the cloud drive brings it in.

:::note
On a Mac, macOS may ask whether Relua can access files in your cloud drive. Choose **Allow**.
:::

## Where the videos are

A project's folder holds its comments, drawings, and Live recordings. Videos are large, so they stay where they are unless you want them in the folder too.

- **A video from somewhere else.** When you add a video to a project that has a folder, Relua asks whether to copy it into the folder. Choose **Copy** to have it travel with the project. Choose **Leave it where it is** if your videos are on a shared drive, an external drive, or already on both computers.
- **A video already in the project's folder.** Relua uses it where it is and does not ask.
- **Later.** To copy a video into the folder afterwards, open its **…** menu and choose **Copy to folder**.

On the other computer, a video whose file is in the folder arrives by itself. A video whose file is somewhere else is listed with **Add the video file**. Select it and pick your copy of the same file, from the shared drive or wherever you keep it. Its comments then appear.

## Your cloud drive

Any cloud drive that shows up as a folder in Finder or File Explorer works.

| Service | On a Mac | On Windows |
| --- | --- | --- |
| iCloud Drive | Built in. **iCloud Drive** is in the Finder sidebar. | Install iCloud for Windows from the Microsoft Store. **iCloud Drive** appears in File Explorer. |
| Google Drive | Install Google Drive for desktop. **Google Drive** appears in the Finder sidebar. | Install Google Drive for desktop. It appears as a drive in File Explorer. |
| OneDrive | Install OneDrive from the Mac App Store. | Built in. **OneDrive** is in File Explorer. |

Use one cloud drive for a folder, not two at once.

Cloud drives can keep a file in the cloud and leave only a placeholder on your computer. Relua asks the cloud drive for any file that is missing and waits for it, so nothing is lost. To have everything there before you need it, tell the cloud drive to keep the folder downloaded:

- **iCloud Drive on a Mac:** right-click the folder and choose **Keep Downloaded**.
- **OneDrive, and iCloud Drive on Windows:** right-click the folder and choose **Always keep on this device**.
- **Google Drive:** right-click the folder and choose **Offline access › Available offline**.

## What stays in step

- Comments, replies, drawings, and Live recordings.
- The Trash: deleting and restoring a comment.
- The project's name, its folders, and which folder each video is in.
- Deleting a video. See [Deleting](#deleting).

Your name, appearance, shortcuts, and comments you have not posted yet stay on each computer.

## Deleting

Deleting a comment moves it to the Trash on every computer, and anyone can restore it.

Deleting a video removes it and its comments on every computer that uses the project's folder. This cannot be undone. Relua tells you so before you confirm.

Deleting a project removes it from your computer and takes its files out of the folder. Other computers that already opened the project keep their copy.

To take a project off one computer and leave it in the folder for the others, open its **…** menu and choose **Remove from computer**. **Open folder** brings it back.

Relua never deletes a video file you put in the folder yourself.

## When the folder is not there

If the cloud drive is signed out, still starting, or offline, or the folder was moved, Relua says the folder cannot be found and carries on. Everything you do is kept on your computer and written to the folder when it is back. If you moved the folder, choose **Choose folder** from the project's **…** menu to point Relua at its new place.

You can work on two computers at the same time, or on one while it is offline. When they catch up, both sets of comments are kept.

## Share a project with other people

Share the project's folder with the people you review with, using your cloud drive's sharing. Each person chooses **Open folder** and picks it. Each comment keeps the name of the person who wrote it.

Anyone who has the folder can delete a video for everyone, so share it with people you trust. To send a review to someone without sharing a folder, [export a file](/share/export-import/) instead.

## What is in the folder

One small `.json` file for the project, one for each video's comments, and any video files you chose to keep there. Leave the `.json` files as they are: do not rename or edit them. Renaming a project in Relua does not rename its folder.

## The data folder is something else

Relua also keeps a working copy of your library in its own [data folder](/reference/data/). Leave that one where it is, and do not put it in a cloud drive. It is a database that Relua writes to the whole time it is open, and a cloud drive can damage it by copying it mid-change.
