---
title: Use Relua on two computers
description: Keep your Relua folder in iCloud Drive, Google Drive, or OneDrive and open it from every computer.
sidebar:
  order: 2
  label: Sync between computers
---

Relua has no account and no cloud of its own. Your projects live in a **Relua folder** that you choose. Put that folder in a cloud drive you already use, and the cloud drive carries it to your other computers. This works between two Macs, two PCs, or a Mac and a PC.

You need Relua 0.3.0 or later on every computer.

## On the first computer

When Relua starts without a folder, it asks where your projects should live.

1. Choose **Create**.
2. Pick a place in your cloud drive, for example **iCloud Drive**. Relua makes a folder named `Relua` there.

If you already use Relua, choose the folder's name at the top of the **Projects** screen, then **Create**. Your projects are added to the new folder.

## On another computer

1. Wait for the cloud drive to bring the `Relua` folder to that computer.
2. Open Relua and choose **Open**.
3. Pick the `Relua` folder.

Your projects appear with their comments. From then on, a change made on one computer appears on the other by itself, as soon as the cloud drive brings it in. That includes new projects.

:::note
On a Mac, macOS may ask whether Relua can access files in your cloud drive. Choose **Allow**.
:::

## Where the videos are

The Relua folder holds your comments, drawings, and Live recordings. Videos are large, so they stay where they are unless you want them in the folder too.

- **A video from somewhere else.** When you add a video, Relua asks whether to copy it into your Relua folder. Choose **Copy** to have it travel with the project. Choose **Leave it where it is** if your videos are on a shared drive, an external drive, or already on both computers.
- **A video already in the project's folder.** Relua uses it where it is and does not ask.
- **Later.** To copy a video into the folder afterwards, open its **…** menu and choose **Copy to folder**.

On the other computer, a video whose file is in the folder arrives by itself. A video whose file is somewhere else is listed with **Locate the video file**. Select it and pick your copy of the same file, from the shared drive or wherever you keep it. Its comments then appear. Where the file is kept is remembered on that computer only, so it can be in a different place on each one.

## Your cloud drive

Any cloud drive that shows up as a folder in Finder or File Explorer works.

| Service | On a Mac | On Windows |
| --- | --- | --- |
| iCloud Drive | Built in. **iCloud Drive** is in the Finder sidebar. | Install iCloud for Windows from the Microsoft Store. **iCloud Drive** appears in File Explorer. |
| Google Drive | Install Google Drive for desktop. **Google Drive** appears in the Finder sidebar. | Install Google Drive for desktop. It appears as a drive in File Explorer. |
| OneDrive | Install OneDrive from the Mac App Store. | Built in. **OneDrive** is in File Explorer. |

Use one cloud drive for the folder, not two at once.

Cloud drives can keep a file in the cloud and leave only a placeholder on your computer. Relua asks the cloud drive for any file that is missing and waits for it, so nothing is lost. To have everything there before you need it, tell the cloud drive to keep the folder downloaded:

- **iCloud Drive on a Mac:** right-click the folder and choose **Keep Downloaded**.
- **OneDrive, and iCloud Drive on Windows:** right-click the folder and choose **Always keep on this device**.
- **Google Drive:** right-click the folder and choose **Offline access › Available offline**.

## What stays in step

- Projects, including new ones, renames, and folders inside a project.
- Comments, replies, drawings, and Live recordings.
- The Trash: deleting and restoring a comment.
- Deleting a video or a project. See [Deleting](#deleting).

Your name, appearance, shortcuts, where each video file is kept, and comments you have not posted yet stay on each computer.

## Deleting

Deleting a comment moves it to the Trash on every computer, and anyone can restore it.

Deleting a video or a project removes it and its comments on every computer that uses the Relua folder. This cannot be undone. Relua tells you so before you confirm.

Relua never deletes a video file you put in the folder yourself.

## When the folder is not there

If the cloud drive is signed out, still starting, or offline, Relua says your Relua folder cannot be found and carries on. Everything you do is kept on your computer and written to the folder when it is back.

You can work on two computers at the same time, or on one while it is offline. When they catch up, both sets of comments are kept.

## Share with other people

Share the Relua folder with the people you review with, using your cloud drive's sharing. Each person chooses **Open** and picks it. Each comment keeps the name of the person who wrote it.

Anyone who has the folder can delete a video or a project for everyone, so share it with people you trust. To send a review to someone without sharing a folder, [export a file](/share/export-import/) instead.

## What is in the folder

One folder for each project, named after the project when it was first added. Inside are one small `.json` file for the project, one for each video's comments, and any video files you chose to keep there. A hidden `.relua` folder marks the folder as Relua's.

Leave the `.json` files as they are: do not rename or edit them. Renaming a project in Relua does not rename its folder.

## The data folder is something else

Relua also keeps a working copy of your library in its own [data folder](/reference/data/). Leave that one where it is, and do not put it in a cloud drive. It is a database that Relua writes to the whole time it is open, and a cloud drive can damage it by copying it mid-change.
