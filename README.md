# Hollow documentation

The user guide and release notes for **Hollow**, a desktop notebook for notes, tasks, habits and
projects. Read them at **https://hollowprojects.github.io/hollow-docs/**.

Hollow is in beta. It isn't publicly available yet and will be released once it's ready.

## About this repository

Everything here is **generated**. The pages are written alongside the app's source and published
here automatically with each release, so any edit made directly in this repository is overwritten
by the next publish.

| Folder | Contents |
|---|---|
| `wiki/` | The user guide: the same pages that ship in the app under Help (`F1`) |
| `releases/` | Release notes, one file per version |
| `.vitepress/` | Site configuration and theme ([VitePress](https://vitepress.dev)) |

A push to `main` builds the site and deploys it to GitHub Pages (`.github/workflows/pages.yml`).
To preview locally: `npm ci`, then `npm run dev`.
