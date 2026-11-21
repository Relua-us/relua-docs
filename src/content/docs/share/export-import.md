---
title: Share a review
description: Export a project or one video as a single file, and import a file someone sent you.
sidebar:
  order: 1
---

Relua has no account and no server, so you share a review by sending a file. An export is one `.zip` that you can email, message, or put in a shared folder. Whoever opens it in Relua sees your drawings, comments, and Live recordings on the same frames you left them.

## Export a project

1. Open the project and choose **Export**. You can also choose **Export** from the project's **…** menu on the **Projects** screen.
2. Tick the videos to include. **All videos** selects everything.
3. Choose what to send:
   - **With videos** includes an original-quality copy of each video. Use it the first time you share with someone.
   - **Comments only** leaves the videos out, so the file is small. Use it when the other person already has the videos in Relua.
4. Choose **Export** and pick where to save the file.

To send a single video, open its **…** menu and choose **Export**.

## Import a file

1. Choose **Import** on the **Projects** screen, or inside a project.
2. Pick the `.zip`.

A project file creates that project. If you already have the project, the file merges into it. A single-video file joins the project you have open; from the **Projects** screen, Relua asks **Import into** and lists your projects and **New project**.

## Going back and forth

Importing never overwrites anything. Every comment, reply, and deletion carries its own ID, so Relua adds what is new and skips what you already have.

- Importing the same file twice changes nothing the second time.
- Two people can comment on the same video, send each other their files, and both end up with every comment.
- Deleted and restored comments travel with the file, so the Trash stays in step too.

A typical exchange between a coach and a player:

1. The coach exports the project **With videos** and sends it.
2. The player imports it, replies to the comments, and exports **Comments only**.
3. The coach imports that small file. The replies appear under the original comments.

:::tip
Send **With videos** once, then **Comments only** from then on. A comments-only file is usually small enough to email.
:::

## If Relua says videos are missing

A **Comments only** file needs each video to already be in the library that receives it. Relua recognizes a video by its contents, not its name, so a renamed file is still found.

If you see **Missing video files**, either ask for an export **With videos** and import that, or add the same video to the project yourself with **Add video** and import the file again.

## What an export contains

| In the `.zip` | What it is |
| --- | --- |
| `relua.json` | The project, its folders, and the list of videos |
| One `.json` per video | That video's comments, replies, drawings, Live recordings, and Trash history |
| The video files | Only with **With videos** |

Your settings, shortcuts, and comments you have not posted yet are not exported.

## Different versions of Relua

A file exported by a newer version of Relua does not open in an older one. [Update Relua](/reference/updates/) and import again. Files exported by Relua 0.2.0 or earlier need to be exported again with the current version.
