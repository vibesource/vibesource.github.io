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

Add a new entry in `src/data/projects.ts`. The project gallery and detail page are generated from the same source.

## Add a field note

Add an entry in `src/data/notes.ts`. Each note automatically gets a page and appears in the field notes listing. This deliberately simple structure is the starting point; Markdown-based collections can replace it when the publishing workflow is established.

## Deployment

The workflow in `.github/workflows/deploy.yml` deploys `master` to GitHub Pages using GitHub Actions after merge. In the repository Pages settings, select **GitHub Actions** as the source before enabling the workflow.

The legacy Jekyll files remain in Git history for reference.

## Agent-assisted workshop tracking

Start with [the workshop integration guide](docs/WORKSHOP_GUIDE.md) for project lifecycle, local journaling, public-site workflow, privacy and attribution. For another repository, use the [optional AGENTS.md snippet](docs/AGENTS_SNIPPET.md) only after opting into workshop tracking. Website-specific agents must also read [AGENTS.md](AGENTS.md). Nothing from private projects is auto-published.
