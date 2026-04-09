# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

VuePress 2.x blog site using vuepress-theme-plume for personal learning content (iOS, SwiftUI, Flutter, Python, AI, algorithms, design patterns). Deployed at https://oldbird.run.

## Commands

```bash
yarn docs:dev            # Start dev server (hot reload)
yarn docs:dev-clean      # Dev server with clean cache and temp
yarn docs:build          # Production build (clean cache/temp)
yarn docs:preview        # Preview production build locally
yarn vp-update           # Update vuepress and theme versions
```

## Configuration Architecture

Two config files with different reload behaviors:

- **`docs/.vuepress/config.ts`** - Core VuePress config. Changes require server restart. Contains: bundler (Vite), plugins (Google Analytics, copy-code), hostname, search settings.

- **`docs/.vuepress/plume.config.ts`** - Theme config. Hot reloads automatically. Contains: logo, appearance (dark mode), social links, navbar, notes, footer, profile, bulletin.

Do not duplicate config between files - `plume.config.ts` overrides `config.ts`.

### Navigation & Sidebar

- `docs/.vuepress/navbar.ts` - Top navigation bar structure
- `docs/.vuepress/notes.ts` - Notes sections with sidebar config. Each note defines `dir`, `link`, and `sidebar` ('auto' or manual array). Sidebar display depends on permalink prefix matching `note.link`.

## Content Structure

```
docs/
├── README.md              # Home page (hero layout with features)
├── book/                  # Book recommendations
├── program/               # Tools, ops, java, figma, openharmony articles
├── notes/                 # Structured learning notes
│   ├── swift/             # SwiftUI, iOS, Swift internals, SPM
│   ├── flutter/           # Flutter tips, deployment, widgets
│   ├── python/            # Python notes
│   ├── ai/                # AI/ML content
│   ├── vue/               # Vue.js notes
│   ├── algorithms/        # Sorting algorithms series
│   ├── design-patterns/   # Design pattern notes
│   └── yijing/            # 易经 content
├── result/                # Portfolio/projects showcase
└── .vuepress/
    ├── public/            # Static assets (images, favicon)
    ├── theme/             # Custom Vue components and CSS overrides
    └── client.ts          # Client-side app enhancements (AdSense injection)
```

## Frontmatter

Markdown files use frontmatter for metadata:

```yaml
---
title: Page Title
createTime: 2024/08/02 09:19:27
permalink: /section/page-slug/
tags:
  - tag-name
sitemap:
  exclude: false
  changefreq: hourly
---
```

For notes, `permalink` must match the `note.link` prefix for sidebar to display correctly.

## Custom Theme

- `docs/.vuepress/theme/components/Custom.vue` - Custom Vue components
- `docs/.vuepress/theme/styles/custom.css` - CSS variable overrides for colors (light/dark mode)

Register custom components in `client.ts` using `app.component()`.

## Key Plugins

- Google Analytics (`@vuepress/plugin-google-analytics`) - tracking ID in config.ts
- Copy Code (`@vuepress/plugin-copy-code`) - code block copy button
- Local Search - default search provider

## Deployment

Site is deployed to GitHub Pages (swiftdo.github.io). Build output: `docs/.vuepress/dist/`.