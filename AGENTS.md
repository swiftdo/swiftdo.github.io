# AGENTS.md - Development Guidelines

## Build & Development Commands

```bash
# Install dependencies
yarn

# Start dev server (localhost)
yarn docs:dev

# Start dev server with clean cache
yarn docs:dev-clean

# Build for production
yarn docs:build

# Preview production build locally
yarn docs:preview

# Update VuePress and theme
yarn vp-update
```

**Note:** There are no unit tests in this project - it's a static site generator blog.

## Project Structure

```
swiftdo.github.io/
├── docs/                    # Documentation source
│   ├── .vuepress/          # VuePress config & theme
│   │   ├── config.ts       # Main VuePress config
│   │   ├── plume.config.ts # Theme config (hot-reload)
│   │   ├── navbar.ts       # Navigation config
│   │   ├── collections.ts  # Blog (post) + note (doc) collections
│   │   └── redirects.json  # Old /article/ → new note URL map
│   ├── notes/              # Note series (Swift, Flutter, AI, tools, etc.)
│   ├── blog/               # Blog posts / 资讯随笔
│   ├── book/               # Book recommendations
│   └── result/             # Portfolio
├── package.json
└── deploy.sh               # Deployment script
```

## TypeScript Style

- **Strict mode** enabled via VuePress defaults
- **ES Modules** - `"type": "module"` in package.json
- Use **ESM imports**: `import { X } from 'package'`
- Export configs with `export default`
- Use `defineXConfig` helper functions from vuepress-theme-plume for type safety

## Code Conventions

### Imports
- Import order: Node built-ins → npm packages → local files
- Use `.ts` extension for local imports
- Group imports logically (VuePress, theme, utilities)

### Naming
- **Files**: kebab-case (`plume.config.ts`, `navbar.ts`)
- **Variables/Functions**: camelCase
- **Constants**: UPPER_CASE (for static values)
- **Components**: PascalCase

### Configuration Pattern
```typescript
import { defineCollection } from 'vuepress-theme-plume'

const swift = defineCollection({
  type: 'doc',
  dir: 'notes/swift',
  title: 'Swift',
  linkPrefix: '/swift/',
  sidebar: 'auto',
})
```

## Markdown Frontmatter

All markdown files should include frontmatter:
```markdown
---
title: Your Title
createTime: 2025/01/24 10:00:00
permalink: /article/xxx/
---
```

## Collections Configuration

Collections are configured in `docs/.vuepress/collections.ts`:
- `type: 'post'` — blog posts (`docs/blog/`), list/tags/archives
- `type: 'doc'` — note series under `docs/notes/*`, with sidebar
- `dir`: Directory relative to `docs/`
- `linkPrefix`: URL prefix for pages / sidebar matching
- `sidebar`: `'auto'` for file-structure-based, or array for manual order

**Critical**: Markdown file permalinks must start with the doc collection's `linkPrefix` for sidebar to appear.

## Error Handling

- Use TypeScript for compile-time safety
- No runtime error handling needed for static config files
- Build errors will surface via VuePress CLI

## Deployment

```bash
# Run deploy script (builds + rsync to server + git push)
./deploy.sh
```

## Git Workflow

- Commit with descriptive messages
- Push to remote after local testing
- Deployment happens via `deploy.sh` script

## Theme Features

This site uses vuepress-theme-plume with:
- Blog functionality (tags, archives, categories)
- Dark mode support
- Local search
- Code highlighting
- Google Analytics
- Copy code plugin
- Bulletin announcements

## File Organization

- Group related content in subdirectories (e.g., `notes/swift/ios/`, `notes/ai/ml/`)
- Each topic should have a `README.md` as landing page
- Use `t1-`, `t2-` prefixes for ordered content
- Use `u1-`, `y1-` for supplementary content
