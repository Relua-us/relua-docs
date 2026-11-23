---
title: Share a review
description: Export a project or video as one file, and import one you received.
sidebar:
  order: 1
---

An export is one `.zip`. It opens with your drawings, comments, and Live recordings on the same frames.

## Export a project

1. Choose **Export** in the project, or from its **…** menu on the **Projects** screen.
2. Tick the videos. **All videos** selects everything.
3. Choose **With videos** (original-quality copies, for the first time) or **Comments only** (when they already have the videos).
4. Choose **Export** and pick where to save.

To export one video, choose **Export** from its **…** menu.

## Import a file

Choose **Import** on the **Projects** screen or in a project, and pick the `.zip`.

A project file creates the project, or merges into it if you have it. A single-video file joins the open project. From the **Projects** screen, Relua asks **Import into** and lists your projects and **New project**.

## Going back and forth

Importing never overwrites. Relua adds what is new and skips what you have, so a repeat import changes nothing. Comments, replies, and Trash changes from both sides end up on both.

:::tip
Send **With videos** once, then **Comments only**.
:::

## If Relua says videos are missing

**Comments only** needs each video already in the library. Renamed files still match. If you see **Missing video files**, import an export **With videos**, or add the video with **Add video** and import again.

## What an export contains

| In the `.zip` | What it is |
| --- | --- |
| `relua.json` | The project, its folders, and the list of videos |
| One `.json` per video | That video's comments, replies, drawings, Live recordings, and Trash history |
| Voice recordings | Always, with their comments |
| The video files | Only with **With videos** |

Settings, shortcuts, and unposted comments are not exported.

## Different versions of Relua

A newer Relua's file does not open in an older one. [Update Relua](/reference/updates/) and import again.
