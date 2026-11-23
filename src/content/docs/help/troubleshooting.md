---
title: Troubleshooting
description: Fixes for common problems.
sidebar:
  order: 2
---

## Windows says "Windows protected your PC" when installing

The installer is not code-signed yet. Choose **More info**, then **Run anyway**.

## A video will not add or will not play

Accepted formats:

- Mac: .mp4, .mov, .m4v
- Windows: .mp4, .mov, .m4v, .avi, .wmv, .mkv, .webm

Windows must also be able to decode the file. Converting to .mp4 with H.264 is safest. Add videos with **Add video**, not by drag and drop.

## Relua cannot use the microphone

The first time you record, your computer asks to let Relua use the microphone. If you refused, allow it here:

- **Mac:** **System Settings** › **Privacy & Security** › **Microphone**
- **Windows:** **Settings** › **Privacy & security** › **Microphone**

## "Missing video files" when importing

The file is **Comments only** and its video is not in your library. Add the video with **Add video** and import again, or ask for an export **With videos**.

## "This pack was exported by a newer Relua version"

[Update Relua](/reference/updates/), then import again.

## The update cannot reach GitHub

You see "Could not reach GitHub. Check your connection and try again." Check that you are online, then choose **Retry**.

## Relua will not update on a Mac

You see "Move Relua to Applications and open the installed app before updating." Quit Relua, drag it into Applications, open it from there, and update again.

## The drawing tools or drawing shortcuts do nothing

You are in Watch. Press <kbd>R</kbd> to switch to Review.

## A pen or finger does not draw

On Windows a finger draws only after you pick a drawing tool, unless **Draw with finger** is on. For a pen or Mac stylus, turn on **Pen always draws** or **Stylus always draws** in Settings. See [Pen, stylus, and touch](/guides/pen-and-touch/).

## "Library could not open"

Choose **Retry**.

:::caution
If it keeps happening, do not delete anything in the [data folder](/reference/data/). Write to support@relua.us instead.
:::

## "Your Relua folder cannot be found"

The cloud drive that holds your Relua folder is signed out, still starting, or offline. Keep working. Your changes stay on this computer and are written to the folder when it is back.

## "A newer Relua saved part of your Relua folder"

Another computer uses a newer Relua. [Update Relua](/reference/updates/) on this one.

## A video says "Locate the video file"

The project lists a video whose file is not on this computer. Select it and pick your copy of the same file. See [Use Relua on two computers](/share/sync/).

## "This managed video failed its integrity check"

Relua's copy is damaged. Add the original again with **Add video**.

## A comment was deleted by mistake

With the video open, choose **Trash** in the header, then **Restore** on the comment. **Trash** shows only when the video has deleted comments. Deleted videos and projects cannot be restored.

## A comment cannot be edited

Posted comments cannot be edited. Delete it and post a new one.

## Still stuck

Write to support@relua.us with your Relua version (bottom of Settings), your operating system, and what you were doing.
