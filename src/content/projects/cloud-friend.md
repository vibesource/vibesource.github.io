---
name: "Cloud Friend"
eyebrow: "ARTIFICIAL INTELLIGENCE"
summary: "An expressive AI companion built for a young creator to brainstorm, invent stories and imagine new worlds with."
area: "Artificial intelligence"
status: "In development"
accent: "lavender"
order: 5
href: "https://github.com/vibesource/cloud-friend"
---

## Meet Cloud

Cloud is a friendly cat riding a floating cloud, built as a creative companion for my daughter.

She loves inventing stories, drawing pictures and building Minecraft worlds. She wanted an AI of her own, but general-purpose interfaces weren't quite right for her. So I built something smaller and more approachable.

Cloud chats, helps brainstorm ideas, co-creates stories and generates cute illustrations. She remembers selected details from earlier conversations, and animated expressions give her personality. The cat sitting on the cloud was my daughter's idea. She refined the character over several iterations, making it something she helped create.

<div style="display:flex;flex-wrap:wrap;gap:1.25rem;align-items:flex-start;margin:1.5rem 0">
  <figure style="flex:1 1 240px;min-width:0;margin:0">
    <img src="https://raw.githubusercontent.com/vibesource/cloud-friend/main/docs/images/cloud-chat.png" alt="Cloud chatting about an imaginary kingdom with a generated illustration" style="display:block;width:100%;height:auto" loading="lazy" />
    <figcaption style="margin-top:0.5rem;font-size:0.9em">Chat and image generation, shown with a demonstration conversation.</figcaption>
  </figure>
  <figure style="flex:1 1 240px;min-width:0;margin:0">
    <img src="https://raw.githubusercontent.com/vibesource/cloud-friend/main/docs/images/cloud-story-mode.png" alt="Cloud and the user collaborating on an illustrated story" style="display:block;width:100%;height:auto" loading="lazy" />
    <figcaption style="margin-top:0.5rem;font-size:0.9em">Story mode, where Cloud and the user imagine a story together.</figcaption>
  </figure>
</div>

## A character with expressions

Cloud's reactions are animated in the app. These illustrations show five of her expressions:

<div style="display:flex;flex-wrap:wrap;gap:1rem;justify-content:center;margin:1.5rem 0">
  <img src="https://raw.githubusercontent.com/vibesource/cloud-friend/main/docs/images/cloud-happy.svg" alt="Cloud happy expression" width="110" height="110" loading="lazy" />
  <img src="https://raw.githubusercontent.com/vibesource/cloud-friend/main/docs/images/cloud-sad.svg" alt="Cloud sad expression" width="110" height="110" loading="lazy" />
  <img src="https://raw.githubusercontent.com/vibesource/cloud-friend/main/docs/images/cloud-surprise.svg" alt="Cloud surprise expression" width="110" height="110" loading="lazy" />
  <img src="https://raw.githubusercontent.com/vibesource/cloud-friend/main/docs/images/cloud-blush.svg" alt="Cloud blush expression" width="110" height="110" loading="lazy" />
  <img src="https://raw.githubusercontent.com/vibesource/cloud-friend/main/docs/images/cloud-thinking.svg" alt="Cloud thinking expression" width="110" height="110" loading="lazy" />
</div>

## Designed around a simple purpose

Cloud isn't a general-purpose agent. There is no tool execution, internet search or elaborate workflow to manage. She's a conversational companion with a deliberately small set of abilities:

- **Chat and brainstorming:** A place to talk about Minecraft builds and imaginary worlds.
- **Story mode:** Create stories together, with illustrations.
- **Image generation:** Cute, stylised pictures through a configurable Hugging Face provider.
- **Lightweight memory:** Selected details help conversations retain continuity.
- **Expressive character:** Animated reactions, appearance customisation and small rewards.
- **Optional voice:** Speech recognition and text-to-speech exist, though we've mainly typed.

Age-appropriate prompting and content filtering provide safeguards, not guarantees. Provider and model choices still matter.

## Privacy without a complicated backend

I didn't want to maintain a database of a child's conversations. Messages, memories, images and configuration live in browser-side IndexedDB. The app has no server-side conversation database or usage analytics.

Cloud can use local or hosted AI models. Messages and image prompts sent to external providers remain subject to those providers' privacy practices.

There is a trade-off: clearing browser site data can erase memories and connection settings. JSON export and import provide a way to preserve and restore the experience, but local backup remains the user's responsibility.

## An experiment that found its audience

Cloud began as a quick project in June 2026. I expected my daughter to enjoy the novelty, but wasn't sure whether she'd keep using it.

Months later, when a browser storage problem interrupted Cloud, she noticed and asked me to fix it. More recently, she proudly showed Cloud to friends at her coding club.

I don't have usage analytics to tell me how often she visits. That's deliberate. But I know she wanted Cloud working again, and was excited to show people what we'd made.

For a relatively small project, that's a rewarding outcome.

The public repository contains the source, setup instructions and original screenshots.
