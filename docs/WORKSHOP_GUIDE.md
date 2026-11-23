# VibeSource workshop integration guide

> **Built from curiosity.** VibeSource is a public, personal workshop and development journal, not a product catalogue or a promise to ship. This document is the canonical guide for humans and coding agents who want to connect a project to the website.

Website: https://vibesource.github.io  
Website source: https://github.com/vibesource/vibesource.github.io  
Publication requires explicit owner approval.

## A guiding principle, not a policy test

Explore a question worth asking. **Build** where there is something new to learn or a problem left unsolved. **Reuse** where a good solution already exists. **Contribute** where an existing project can be improved. **Set aside** an experiment when ongoing maintenance costs more than it provides or teaches.

These are defaults for reflection, **not hard rules**. Sometimes building a familiar thing is a worthwhile learning exercise; sometimes an unfinished experiment is worth continuing just because it is interesting. Explain the choice rather than forcing a justification.

## Two distinct records

**Project's own repository (private or public):** source of truth for requirements, implementation details, tests, decisions, issues, change logs, traceability and private evidence.

**VibeSource website (always public after merge):** editorially selected account of the project's purpose, progress, findings, course corrections and eventual disposition. It should help the owner remember *what they were doing and why*. It is not a live mirror of code, logs or internal configuration.

**Agents must never assume that access to a private repository authorises publishing its contents.** Even draft pull requests, branch names, build logs and screenshots in the website repository can become publicly visible.

## When to capture something

At project inception: propose a concise public-facing project description, and create a local `docs/workshop/` journal **only if the owner opts in**. Do not delay starting the actual project for website work.

During development: update the **local private journal** after meaningful milestones or decisions, not after every commit. Useful moments include the first working prototype, a benchmark with repeatable evidence, a surprising failure, an architectural reversal, abandoning an approach, or moving to an upstream contribution.

At a pause or abandonment: capture the status, reason for stopping, lessons learned, remaining uncertainties, and a clear route to resume if relevant. A paused project does not need to be disguised as completed.

At release: document precisely what is available (code, demo, download or nothing), which tests were performed, and what remains unsupported.

No fixed publishing cadence is required. A month without updates is not evidence that a project is dead.

## Minimal local journal template

Keep this in the **project repository** (not automatically on the public site), e.g. `docs/workshop/STATUS.md`:

```md
# Project workshop journal
Publication: private draft; explicit approval required
Project: <name>
Question: <what are we trying to discover/solve?>
Current state: exploring | in development | paused | available | archived
Last reviewed: YYYY-MM-DD

## What changed / why
<one or two paragraphs, focusing on decisions and outcomes>

## Evidence and limitations
<tests actually run, observed results, uncertainties, links to private evidence>

## Next / stop / reconsider
<small next step or reason work is being paused or abandoned>

## Public-safe summary candidate (unapproved)
<optional 2-5 sentences; do not include secrets or private paths>
```

An agent can suggest updates to this journal as part of a normal development handover. Unless explicitly authorised, do not commit a journal to a repository where it is not wanted. Do not use a per-commit generator that turns activity into meaningless prose.

## Public site content model (current implementation)

The website is an Astro static site with schema-validated **Markdown content collections** (no MDX integration currently):

- `src/content/projects/<slug>.md`: one file per project. Required frontmatter: `name`, `eyebrow`, `summary`, `area`, `status`, `accent`, `order` (gallery order). Optional `href` points only to approved public source; a missing `href` intentionally means **no public code link**. Markdown body replaces the old `detail` field.
- `src/content/notes/<slug>.md`: one file per note. Required frontmatter: `date` (quoted `YYYY-MM-DD` string), `category`, `title`, `excerpt`. Optional `project` is metadata only: no automatic cross-linking or timeline exists.
- `src/content.config.ts`: Astro glob loader collection definitions and schemas, which validate metadata during builds. Filename is the existing route slug; preserve it when migrating or editing published pages.
- `src/pages/projects/[slug].astro` and `src/pages/notes/[slug].astro`: generated pages.
- `docs/publishing-evidence.md`: safety guidance for evidence, synthetic media examples, PC Prepper and private source material.

Don't promise embedded video galleries, automated GitHub sync, project timelines or publication of private repos: these features aren't implemented.

## How an agent proposes a site update

1. **Confirm inclusion.** Ask whether this project is appropriate to feature. A project can be useful in a journal without being publicised at all.
2. **Verify state.** Read the current project README, evidence and recent work. Treat agent assertions and commit messages as claims to check. Mark unverified features as experimental.
3. **Draft locally, not publicly.** Prepare public-safe text or a patch in the project repository/private workspace first. No private data should enter a public VibeSource branch, issue, commit or PR.
4. **Privacy and provenance review.** Remove personal details, children’s images and identities, secrets, tokens, internal hostnames/IPs, credentials, unapproved logs, licensed or third-party material lacking permission, and private repository links. Credit original authors and upstream projects. Avoid presenting upstream features as original work.
5. **Obtain explicit approval** to submit specific proposed website content. Then, and only then, create a website branch and PR. Do not merge or publish without the owner's further approval.
6. **Validate** using `npm install` and `npm run build` (or the repo's current CI), check rendered text and links, then identify what is fact, hypothesis or planned work in the PR summary. Treat Markdown text and frontmatter alike as public material.

Never change a private repository's visibility to satisfy a website task. Never trigger automatic publication from project commits or unreviewed AI summaries.

## One-note editorial format

Most field notes should be brief, readable and specific:

- **Question:** What prompted the work?
- **Approach:** What did we try?
- **Observation:** What happened, with concrete evidence if available?
- **Decision:** Keep, revise, contribute upstream, pause, or abandon?
- **Next:** What remains open?

Short notes are fine. Skip vague progress updates such as "refactored code" unless the change had a meaningful consequence. Be honest about failures and maintenance trade-offs.

## Project lifecycle and status

The current UI supports only three status strings: `Exploring`, `In development` and `Public repository`. The last is a legacy presentation label, not a meaningful lifecycle classification. **Do not infer current status from commit age.**

If a project pauses, is abandoned, or reaches release, record its true disposition in the project journal first. Propose a separate website schema/UI improvement before using new values such as `Paused`, `Archived` or `Available`. An archived project should remain discoverable with an explanation, not silently vanish.

## Examples of appropriate stories

- **PC Prepper:** document progress toward a reproducible offline workstation; keep actual homelab deployment secrets and topology private.
- **KidTube:** track synthetic video test cases, visual-review successes and misses, proposed cuts and human corrections. No family footage, and no claim that automated screening guarantees safety.
- **Local Agent Development Workflow:** report bounded milestones, human acceptance, limitations and reproducible testing; do not imply autonomous capability on agent self-report alone.
- **MeshPulse:** distinguish upstream author contributions, submitted fixes, local-only experimental features and independently maintained plugins. Don't represent fork-only changes as upstream releases.
- **Earlier AI frameworks:** retrospective on the engineering trade-off between building and maintaining versus repurposing existing tools.

## Agent handover

If a project opts into workshop tracking, include in its handover:
- current workshop journal path;
- last documented milestone or decision;
- proposed next update **only when meaningful**;
- whether the owner has approved any text for VibeSource (default: no);
- privacy or attribution issues to review.

The workshop supports the engineering work; it must never become the work itself.
