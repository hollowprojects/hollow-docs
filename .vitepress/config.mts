import { readFileSync } from 'node:fs'
import { defineConfig } from 'vitepress'

// Written by scripts/stage-public-docs.mjs in the private Hollow repo: version, the
// publicDownloads flag and both sidebars. The site is never built without being staged first.
const site = JSON.parse(readFileSync(new URL('./site.json', import.meta.url), 'utf8'))

export default defineConfig({
  title: 'Hollow',
  description: 'The Hollow user guide and release notes.',
  base: site.base,
  cleanUrls: true,
  lastUpdated: false,
  // The repo README describes the repo, not the product; it is not a page.
  srcExclude: ['README.md'],
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: `${site.base}hollow-icon.svg` }]],
  themeConfig: {
    logo: { light: '/hollow-mark-on-light.svg', dark: '/hollow-mark.svg', alt: 'Hollow' },
    nav: [
      { text: 'Guide', link: '/wiki/' },
      { text: 'Release notes', link: '/releases/' },
      { text: site.version, link: `/releases/${site.version}` }
    ],
    sidebar: {
      '/wiki/': [{ text: 'User guide', items: site.guide }],
      '/releases/': [{ text: 'Release notes', items: site.releases }]
    },
    outline: [2, 3],
    search: { provider: 'local' },
    // Read by the theme's availability notice.
    hollow: { version: site.version, prerelease: site.prerelease, publicDownloads: site.publicDownloads },
    footer: {
      message: `Documentation for Hollow ${site.version}. Generated from the app's source; the same pages ship in the app under Help (F1).`
    }
  }
})
