---
title: Use Relua on two computers
description: Keep your Relua folder in a cloud drive and open it on every computer.
sidebar:
  order: 3
  label: Sync between computers
---

Your projects live in a **Relua folder**. Put it in iCloud Drive, Google Drive, or OneDrive, and the cloud drive carries it to your other computers, Mac or PC.

## Set it up

On the first computer:

1. When Relua asks for a folder, choose **Create**.
2. Name the folder, choose **Browse**, and pick a place in your cloud drive.
3. Choose **Create**.

On the other computer:

1. Wait for the cloud drive to bring the folder over.
2. Open Relua, choose **Open**, and pick the folder.

From then on, a change on one computer appears on the other by itself.

:::note
If macOS asks whether Relua can access files in your cloud drive, choose **Allow**.
:::

## More than one folder

On the **Projects** screen, choose the folder button, then **Create** or **Open**. Select a folder in the list to switch to it. Each folder shows only its own projects.

Removing a folder from the list leaves its files where they are. **Open** brings it back.

## Where the videos are

The Relua folder holds comments, drawings, and Live recordings. Videos stay where they are unless you copy them in.

- **When you add a video,** Relua asks **Copy the video into your Relua folder?** Choose **Copy** to have it travel with the project. Choose **Leave it where it is** for videos on a shared drive, an external drive, or already on both computers.
- **Later,** open the video's **…** menu and choose **Copy to folder**.
- **A video already in the project's folder** is used where it is.

On the other computer, a copied video arrives by itself. Any other video shows **Locate the video file**. Select it and pick your copy of the same file. Each computer remembers its own location.

## Your cloud drive

Any cloud drive that shows up as a folder in Finder or File Explorer works. Use one for the folder, not two.

| Service | On a Mac | On Windows |
| --- | --- | --- |
| iCloud Drive | Built in | Install iCloud for Windows from the Microsoft Store |
| Google Drive | Install Google Drive for desktop | Install Google Drive for desktop |
| OneDrive | Install OneDrive from the Mac App Store | Built in |

Relua fetches files the cloud drive has not downloaded yet. To have everything there ahead of time, right-click the folder and choose:

- **iCloud Drive on a Mac:** **Keep Downloaded**
- **OneDrive, and iCloud Drive on Windows:** **Always keep on this device**
- **Google Drive:** **Offline access › Available offline**

## What stays in step

- Projects, their folders, and renames
- Comments, replies, drawings, and Live recordings, with their voice. A comment can arrive before its voice does. Its player works once the file has synced.
- The Trash
- Deleting a video or a project

Your name, appearance, shortcuts, where each video file is, and unposted comments stay on each computer.

A computer with an older Relua does not show comments that carry voice until it is [updated](/reference/updates/).

## Deleting

- A deleted comment goes to the Trash on every computer. Anyone can restore it.
- A deleted video or project is removed with its comments on every computer. This cannot be undone.
- Relua never deletes a video file you put in the folder yourself.

## When the folder is not there

If the cloud drive is signed out, still starting, or offline, Relua says your Relua folder cannot be found. Keep working. Your changes are written to the folder when it is back.

You can work on two computers at once. Both sets of comments are kept.

## Share with other people

Share the Relua folder using your cloud drive's sharing. Each person chooses **Open** and picks it. Comments keep the name of the person who wrote them.

Anyone with the folder can delete a video or a project for everyone. To send a review without sharing a folder, [export a file](/share/export-import/).

## What is in the folder

One folder per project, holding small `.json` files, a hidden `.voice` folder with voice recordings, and any videos you copied in. A hidden `.relua` folder marks it as a Relua folder.

Do not rename or edit the `.json` files. Renaming a project in Relua does not rename its folder.

The [data folder](/reference/data/) is something else. Never put that one in a cloud drive.
