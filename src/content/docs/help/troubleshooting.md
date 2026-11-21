---
title: Troubleshooting
description: What to do when something in Relua does not work as expected.
sidebar:
  order: 2
---

Find the problem you are seeing below for what it means and how to fix it.

## Windows says "Windows protected your PC" when installing

The Windows installer is not code-signed yet, so Windows shows this warning. Choose **More info**, then **Run anyway**. See [Install Relua](/start/install/).

## A video will not add or will not play

Relua accepts these formats:

- Mac: .mp4, .mov, .m4v
- Windows: .mp4, .mov, .m4v, .avi, .wmv, .mkv, .webm

On Windows, whether a file plays depends on the formats Windows itself can decode, so a file with an accepted extension can still fail. Converting the video to .mp4 with H.264 is the safest choice on both systems.

Also check that you are adding one video at a time with **Add video**. Relua does not take videos by drag and drop.

## "Missing video files" when importing

The file you are importing was exported with **Comments only**, and the video it belongs to is not in your library yet. Relua recognizes a video by its content, not its name, so a renamed copy still counts.

1. Add the video to the project with **Add video**.
2. Import the file again.

Or ask the sender for a copy exported **With videos**. See [Share a review](/share/export-import/).

## "This pack was exported by a newer Relua version"

The file came from a newer Relua than yours, and older versions cannot open it. Update Relua, then import again. See [Updates](/reference/updates/).

If the message is about an older file instead, the file was exported by Relua 0.2.0 or earlier. Ask the sender to export it again with the current version.

## The update cannot reach GitHub

You see "Could not reach GitHub. Check your connection and try again." Relua downloads updates from GitHub, and that is the only time it uses the network. Check that you are online, then choose **Retry**. Everything else in Relua keeps working offline.

If the button reads **View release** instead, no automatic download fits your computer. Choose it to open the release page.

## Relua will not update on a Mac

Relua must be in your Applications folder to update itself. If you see "Move Relua to Applications and open the installed app before updating.", quit Relua, drag it into Applications, open it from there, and update again.

## The drawing tools or drawing shortcuts do nothing

You are in Watch, which hides the tools and comments. Press <kbd>R</kbd> or use the toggle in the controls to switch to Review. The **Comments & drawing** shortcuts only work in Review.

## A pen or finger does not draw

On Windows a finger draws only after you pick a drawing tool yourself, unless **Draw with finger** is on. A pen and a Mac stylus draw straight away when **Pen always draws** or **Stylus always draws** is on. Check these in Settings. See [Pen, stylus, and touch](/guides/pen-and-touch/).

## "Library could not open"

Relua could not open its library. Choose **Retry**.

:::caution
If it keeps happening, do not delete anything in the data folder. Write to support@relua.us instead.
:::

See [Where Relua keeps your data](/reference/data/).

## "This managed video failed its integrity check"

Relua's copy of the video in your library is damaged. Add the original video again with **Add video**.

## A comment was deleted by mistake

Deleted comments go to the Trash. Choose **Trash** in the header while the video is open, find the comment, and choose **Restore**. The **Trash** button only appears when the open video has deleted comments.

Deleted videos and projects do not go to the Trash and cannot be restored this way.

## A comment cannot be edited

Posted comments cannot be edited. Delete the comment and post a new one.

## Still stuck

Write to support@relua.us. Include your Relua version, which is shown at the bottom of Settings, your operating system, and what you were doing when the problem happened.
