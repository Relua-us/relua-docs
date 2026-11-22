# Relua Docs

The user documentation for [Relua](https://relua.us), the free video review app for Mac and Windows. Published at [docs.relua.us](https://docs.relua.us).

## Fix or add something

Every page has an **Edit page** link at the bottom that opens its Markdown file here. Change it and open a pull request. For questions about the app itself, write to [support@relua.us](mailto:support@relua.us).

Pages live in `src/content/docs/`:

| Folder | What goes there |
| --- | --- |
| `start/` | Installing Relua and a first review |
| `guides/` | One page per part of the app |
| `share/` | Exporting, importing, syncing, and backups |
| `reference/` | Shortcuts, settings, and where data is kept |
| `help/` | Tips and troubleshooting |

Keep pages short. Say what to do, in steps or short bullets, with the exact names the app shows on screen. Leave out anything a reader does not act on.

## Preview locally

```sh
npm install
npm run dev
```

Open http://localhost:4321/. The site is built with [Astro Starlight](https://starlight.astro.build/).

## Publishing

Merging to `main` runs `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages. The `docs.relua.us` domain is a DNS-only `CNAME` to `relua-us.github.io`.

## License

The documentation text and images are © Relua. The Relua name and logo are not licensed for other use.
