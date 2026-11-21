---
title: Install Relua
description: Download the right version of Relua for your computer and install it on Mac or Windows.
sidebar:
  order: 1
---

Relua is free for personal and commercial use, and you don't need an account or a sign-in.

## What you need

- A Mac with macOS 14 or later, or
- A Windows PC with Windows 10 version 2004 or later.

## Pick the right download

Go to the [download page](https://relua.us/download.html). There are four downloads, and the website picks the right one for you when it can tell. If it can't, choose one yourself.

| Computer | Download | File |
| --- | --- | --- |
| Mac with Apple silicon | **Apple silicon** | `Relua-macos-arm64.dmg` |
| Mac with an Intel processor | **Intel x64** | `Relua-macos-x64.dmg` |
| Windows PC with an Intel or AMD processor | **Intel / AMD x64** | `Relua-windows-x64-setup.exe` |
| Windows PC with an ARM processor | **ARM64** | `Relua-windows-arm64-setup.exe` |

### Which Mac do you have

Open the Apple menu and choose **About This Mac**. If you see a line called **Chip**, your Mac has Apple silicon. If you see **Processor**, it has an Intel processor.

### Which Windows PC do you have

Open **Settings** › **System** › **About** and look at **System type**. It says either x64-based or ARM-based.

## Install on a Mac

1. Open the `.dmg` file you downloaded.
2. Drag Relua to your Applications folder.
3. Open Relua from Applications.

Mac downloads are signed and notarized by Apple.

:::note
Keep Relua in Applications. It can only update itself from there.
:::

## Install on Windows

1. Run the setup file you downloaded.
2. If Windows shows **Windows protected your PC**, choose **More info**, then **Run anyway**. This appears because the Windows installer is not code-signed yet.
3. Follow the installer. At the end, leave **Open Relua** checked to start the app straight away.

The installer sets Relua up for your user account only, so it doesn't need an administrator password. Afterwards you'll find **Relua** in the Start menu.

## First launch

The first time you open Relua, a **Username** dialog asks for your name. It's only used so others recognize your comments. You can't skip it, but you can change it later in **Settings** › **Profile**.

When you're set up, follow [Your first review](/start/first-review/). To learn how Relua keeps itself up to date, see [Updates](/reference/updates/).

## Uninstall

- **Mac:** drag Relua from Applications to the Trash.
- **Windows:** open **Settings** › **Apps** › **Installed apps** and remove **Relua**.

Uninstalling removes the app but keeps your library. To remove your projects, videos, and comments too, delete the data folder described in [Where Relua keeps your data](/reference/data/).
