# Website agent instructions

VibeSource is a **public site** even when changes are on an unmerged branch or draft PR.

**Read `docs/WORKSHOP_GUIDE.md` before any project-profile or field-note change, and `docs/publishing-evidence.md` before publishing examples, screenshots, benchmarks, logs or media.**

- Do not automatically copy material from private repositories or project logs into the website.
- Treat a private project's publication summary as unapproved until the owner explicitly approves the specific content.
- Credit upstream projects and contributors.
- Work on a branch; run the Astro build; open a PR; leave merge and deployment to the owner.
- Do not modify private repository visibility, or link to a private repository from a public project page.
- Project profiles live as Markdown files in `src/content/projects/` and field notes in `src/content/notes/`. Use the schema in `src/content.config.ts`, preserve file slugs/URLs, and do not create links to private source. Project `href` is optional; note `project` remains metadata only, not a functional timeline. Do not edit removed TypeScript arrays.
- Preserve the workshop voice: curious, precise, candid about unfinished work and decisions to stop.
- Treat field notes as **owner-led editorial work**, not automated transcripts of agent reports. Before publication, explore the owner's motivations, experience, surprises, alternatives and whether the original project goal still holds. Clearly distinguish measured evidence from first-person impressions. Only update project goals in their owning repository with the owner's approval.
