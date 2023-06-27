# Didomi Internal Documentation

## Tech Stack

This project is build with:
- Astro - https://docs.astro.build
- Astro Starlight Theme - https://starlight.astro.build

## 🚀 Project Structure

We have next project structure:

```
.
├── public/
├── src/
│   ├── assets/
|   ├── components/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
|   ├── styles/
│   ├── utils/
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

We are looking for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Contribution(or how to add a new page)

Please follow next steps to add a new page:
1. Create a new file in `src/content/docs/` directory with `.md` or `.mdx` extension. Put it in the `spa`, `utilities` or `resources` folder, or create a new one if needed. Documents added to the `spa`, `utilities` or `resources` folder would automatically appear in the sidenav. If you want to add a new section to the sidenav, please update `sidebar` field config in the `astro.config.mjs`. Check docs for more details: https://starlight.astro.build/reference/configuration/#sidebar.
2. Add a static markdown content to the file(for `.md`), or add dynamic content resolution(for `.mdx`). Please check section Fetching Gitlab Content section for more details


## Fetching Gitlab Content

Please use next template inside your `.mdx` file to fetch content from the Gitlab:

```mdx
---
title: History Logs SPA
description: Documentation for Versions&Proofs SPA
---
import ContentResolver from '../../../components/content-resolver.astro';

<ContentResolver projectId='PUT_PROJECT_ID' />
```

This code fetches `Readme.md` file from the Gitlab API by the project id and renders it as a markdown content. This is done during build time and it uses `GITLAB_TOKEN` env variable.

By default we are looking for the `main` branch. But you can specify another branch by adding `branch` prop to the `ContentResolver` component:

```mdx
<ContentResolver projectId='PUT_PROJECT_ID' branch='master' />
```

## Configuring Environment Variables

Please add `GITLAB_TOKEN` variable to the:
- `.env` file for local development
- CI environment variables for the production CI pipeline