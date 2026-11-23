# Website agent instructions

VibeSource is a **public site** even when changes are on an unmerged branch or draft PR.

**Read `docs/WORKSHOP_GUIDE.md` before any project-profile or field-note change, and `docs/publishing-evidence.md` before publishing examples, screenshots, benchmarks, logs or media.**

- Do not automatically copy material from private repositories or project logs into the website.
- Treat a private project's publication summary as unapproved until the owner explicitly approves the specific content.
- Credit upstream projects and contributors.
- Work on a branch; run the Astro build; open a PR; leave merge and deployment to the owner.
- Do not modify private repository visibility, or link to a private repository from a public project page.
- The existing data sources are `src/data/projects.ts` and `src/data/notes.ts`. Project `href` is optional; the note `project` field is metadata, not a functional timeline.
- Preserve the workshop voice: curious, precise, candid about unfinished work and decisions to stop.
