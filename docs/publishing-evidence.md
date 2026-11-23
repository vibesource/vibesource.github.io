# Field evidence and publishing notes

VibeSource is a **public workshop**, not a mirror of private development repositories. A public project page may describe work in progress without revealing its source code.

## Publishing a project update

1. Write a brief human-readable summary: **question, approach, what changed, what was observed, what is still unknown**.
2. Separate implemented features from experimental branches, local uncommitted work and future intentions.
3. Use the project's own tests and commit history to verify claims before publishing. A passing unit test is not proof of real-world reliability.
4. Review screenshots, logs, metadata, file paths, endpoints and configuration for private information.
5. Publish via a website pull request. Keep private repository links and confidential material out of the generated site and PR.
6. Add a workshop note and, optionally, associate it with the relevant project.

## KidTube synthetic media demonstration protocol

Record repeatable examples without using personal family videos:

- Use licensed, original or synthetic footage, with fictional overlays and invented people/names.
- Record the **input scenario** and the expected time window or target.
- Capture the **actual software output**: flagged intervals, proposed cuts, confidence/reason if available, and whether a reviewer accepted or corrected each suggestion.
- Include **false positives**, missed events and sampling limitations; don't publish only successful clips.
- Capture a before/after example only after confirming that the rendered artifact matches the intended edit.
- Keep personal videos, thumbnails, user data and authentication/session information out of the demonstration.
- Do not describe the content review as a guarantee of safety. Publication and parental review remain separate from automated suggestions.
- Store large demonstration media outside the site source where appropriate; commit only sanitised assets explicitly approved for publication.

A simple note can be: *“Tested an invented on-screen overlay at 00:22–00:27. Visual review flagged a nearby sampled frame; a suggested cut covered 00:20–00:30. The reviewer shortened it to 00:22–00:28. Detection of shorter overlays remains unverified.”* This is an **illustrative format**, not a claim about current test results.

## PC Prepper boundaries

The implementation currently lives with private homelab deployment material. Public notes should discuss architecture, verified experiments and trade-offs, not internal addresses, service tokens, access policies or personal network topology. Creating a standalone repository is optional and should follow a separate sanitised-content review.

## Public vs private project pages

A missing repository URL is intentional. Projects can be documented on VibeSource before any public code release.
