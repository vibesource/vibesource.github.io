# VibeSource

**Built from curiosity.**

An independent personal workshop for software, artificial intelligence, connected systems, and interesting experiments.

## Develop locally

Requires Node.js 22 or later.

```bash
npm install
npm run dev
```

Visit http://localhost:4321. Run `npm run build` to generate the static site in `dist/`.

## Add a project

Create one Markdown file per project under `src/content/projects/`, with required frontmatter matching `src/content.config.ts`. The filename becomes the stable project slug and URL (`/projects/<slug>/`). Use an integer `order` to control gallery position. `href` is optional and must be omitted for private repositories. Markdown body text appears on the detail page.

## Add a field note

Create one Markdown file per field note under `src/content/notes/`. Add `date` (quoted `YYYY-MM-DD`), `category`, `title` and `excerpt` frontmatter, followed by the note body. The filename becomes the slug and URL (`/notes/<slug>/`). An optional `project` field records a related project slug but does not yet create automatic cross-links. Notes appear newest first.

## Deployment

The workflow in `.github/workflows/deploy.yml` deploys `master` to GitHub Pages using GitHub Actions after merge. In the repository Pages settings, select **GitHub Actions** as the source before enabling the workflow.

The legacy Jekyll files remain in Git history for reference.

## Agent-assisted workshop tracking

Start with [the workshop integration guide](docs/WORKSHOP_GUIDE.md) for project lifecycle, local journaling, public-site workflow, privacy and attribution. For another repository, use the [optional AGENTS.md snippet](docs/AGENTS_SNIPPET.md) only after opting into workshop tracking. Website-specific agents must also read [AGENTS.md](AGENTS.md). Nothing from private projects is auto-published.
