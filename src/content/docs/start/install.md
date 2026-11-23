---
title: Install Relua
description: Download and install Relua on Mac or Windows.
sidebar:
  order: 1
---

Relua is free and needs no account.

## What you need

- macOS 14 or later, or
- Windows 10 version 2004 or later.

## Download

Go to the [download page](https://relua.us/download.html). It picks your version when it can. Otherwise choose one:

| Computer | Download | File |
| --- | --- | --- |
| Mac with Apple silicon | **Apple silicon** | `Relua-macos-arm64.dmg` |
| Mac with an Intel processor | **Intel x64** | `Relua-macos-x64.dmg` |
| Windows PC with an Intel or AMD processor | **Intel / AMD x64** | `Relua-windows-x64-setup.exe` |
| Windows PC with an ARM processor | **ARM64** | `Relua-windows-arm64-setup.exe` |

- **Mac:** open the Apple menu › **About This Mac**. **Chip** means Apple silicon. **Processor** means Intel.
- **Windows:** open **Settings** › **System** › **About** and read **System type**: x64-based or ARM-based.

## Install on a Mac

1. Open the `.dmg`.
2. Drag Relua to Applications.
3. Open Relua from Applications.

:::note
Keep Relua in Applications. It can only update itself from there.
:::

## Install on Windows

1. Run the setup file.
2. If you see **Windows protected your PC**, choose **More info**, then **Run anyway**. The installer is not code-signed yet.
3. Finish the installer. Relua is then in the Start menu.

No administrator password is needed.

## First launch

1. **Username:** type your name. It shows on your comments. Change it later in **Settings** › **Profile**.
2. **Create a folder:** choose **Create**, name the folder, choose **Browse** to pick where it goes, and choose **Create**. This is your Relua folder, where your projects live. If you already have one, choose **Open** and pick it.

To use Relua on more than one computer, put the folder in a cloud drive. See [Use Relua on two computers](/share/sync/).

Next: [Your first review](/start/first-review/).

## Uninstall

- **Mac:** drag Relua from Applications to the Trash. The [data folder](/reference/data/) stays.
- **Windows:** open **Settings** › **Apps** › **Installed apps** and remove **Relua**. It asks **Also delete Relua's settings, drafts, and library copies of your videos from this computer?** **No**, the default, keeps them. **Yes** empties the [data folder](/reference/data/).

Your Relua folder and its projects always stay. To remove them too, delete your Relua folder, and the data folder if it is still there.
