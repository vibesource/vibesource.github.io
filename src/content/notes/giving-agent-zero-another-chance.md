---
date: "2026-11-24"
category: "Local AI"
title: "Giving Agent Zero Another Chance"
excerpt: "I loved Agent Zero, spent weeks trying to make it work, abandoned it, and eventually discovered what makes an AI agent genuinely useful to me."
project: "pc-prepper"
---

*How an agent framework I loved, abandoned, and eventually returned to changed my understanding of what makes AI useful.*

I wanted JARVIS.

Or perhaps something closer to the computer aboard the Enterprise. An intelligent assistant I could talk to, one that understood what I needed, managed tasks and helped me navigate my digital world.

It's an appealing idea. So appealing, in fact, that I spent a considerable amount of time trying to build one.

The irony is that I don't particularly enjoy talking to computers.

Even now, with ChatGPT's voice capabilities readily available, I almost always type. Writing allows me to pause and consider what I'm asking. Reading gives me time to digest the response and decide where to take the conversation next.

It took me a surprisingly long time to recognise the difference between the assistant I imagined wanting and the one I actually found useful.

That realisation eventually changed how I approached building AI software.

Instead of continuing to develop every component myself, I started exploring the frameworks other people had already built.

And that is how I discovered Agent Zero.

## Something finally felt right

I'd tried several agent frameworks.

Open WebUI was among the earlier experiments. It was functional, but I never quite felt comfortable using it. The interface didn't appeal to me, and developing integrations felt more cumbersome than I expected. I even built a Google Workspace plugin, but the overall experience never really clicked.

I experimented with other options, including lesser-known projects such as privateGPT.

Nothing felt like home.

Then I stumbled upon Agent Zero, sometime before its first major release, as best I remember.

I loved it almost immediately.

The interface made sense to me. Agent Zero had a primary agent capable of creating subagents to tackle specialised work. Rather than building and maintaining a collection of independent assistants, I could work within a single environment where agents collaborated.

It could execute code, investigate its own environment and create things it needed. The framework was still young, but it already had a remarkable amount of flexibility.

And it communicated what it was doing.

Instead of a spinning wheel or pulsing dots, I could see meaningful changes in the status information as the agent worked. It was a small detail with an unexpectedly large effect on how the system felt.

Using hosted models through Hugging Face, Agent Zero was surprisingly capable.

I began imagining what I could accomplish with the same framework running entirely on my laptop.

Unfortunately, the local models weren't ready.

They struggled with tool calling, following instructions and staying on track during longer tasks.

I enjoyed the framework, but I couldn't make the local experience reliable enough to justify using it.

So I moved on.

## A better model, a familiar frustration

Some time later, Agent Zero had matured considerably, and I decided to revisit it.

My own workflow had changed in the meantime. I was using ChatGPT more frequently and had moved much of my coding work to Codex.

Agent Zero, however, was still interesting.

I tested it again with cloud models and found that the framework had improved. Then I started trying local models.

Gemma-4 E4B worked remarkably well for smaller tasks. It was fast, but there were limits to what I could reasonably ask it to accomplish.

I experimented with larger models and aggressive quantisation to squeeze more intelligence into my limited GPU memory.

Eventually, Gemma-4 12B became the most promising option.

It fitted comfortably on my RTX 4080 laptop GPU, including the vision projector, and with multi-token prediction it was reasonably responsive.

For the first time, I could give Agent Zero useful tasks with a local model and expect meaningful results.

But something was wrong.

The same model that felt extremely fast in other applications was sluggish inside Agent Zero.

Worse, it deteriorated as I used it.

A session would begin slowly, become progressively slower, and eventually stop working altogether.

I started investigating.

## The agent was overwhelming its own model

One of the first things I discovered was how much background inference Agent Zero performed.

Submitting a prompt could trigger both my main conversation and a utility-model request. More utility work followed as the agent processed the interaction.

With both roles configured to use the same Gemma-4 12B server, they competed for a limited amount of inference capacity.

As conversations progressed, utility requests could overlap with subsequent user interactions. The system became increasingly congested.

The model wasn't simply taking too long to answer my questions. It was spending substantial effort supporting the machinery around those answers.

I eventually introduced a separate Gemma-4 E2B utility model.

With careful memory management, I could fit that alongside the 12B model and its large context window.

That helped enormously.

I also developed a separate project called Context Guard.

Context Guard sat between applications and local model endpoints. It estimated context requirements, reserved capacity for incoming requests, queued competing work and rejected requests too large for the configured limits.

I was also experimenting with a TurboQuant-enabled llama.cpp implementation, hoping to gain additional context capacity. That particular experiment didn't produce the result I'd hoped for.

After weeks of investigation, configuration changes and additional software development, I finally had a mostly stable Agent Zero conversation.

Or so I thought.

## Then the context ran out

Once Agent Zero became usable, I started giving it real work.

Research. Document analysis. Images. Longer conversations involving several different tasks.

And the next problem emerged.

The framework wasn't managing conversation context effectively enough for my constrained local inference environment.

As sessions grew, the model would reach its practical context limits and requests would begin failing.

Increasing the context allocation wasn't a complete solution. The framework needed to manage what it retained and sent to the model.

Large-context cloud models could accommodate far more accumulated conversation, making the weakness much less obvious.

On my laptop, it became impossible to ignore.

I considered reporting the problem.

But by then I was exhausted with the whole exercise.

I'd spent weeks trying to make a framework I genuinely liked behave reliably. I'd introduced another model, built a protective proxy and devoted more attention to managing the system than to accomplishing anything with it.

And still, when I tried to use it seriously, something broke.

I abandoned Agent Zero.

Not because I stopped liking what it was trying to do, but because I was tired of having to make it work.

## The evidence wasn't particularly flattering

Months later, while evaluating software for my PC Prepper project, Agent Zero came up again.

I wasn't enthusiastic.

Codex examined it and confirmed that concurrent utility calls were still part of its operation. That was enough to remind me of the earlier frustration.

I decided to concentrate on AnythingLLM instead.

The October 2026 evaluation records explain why that was a defensible decision, although they also reveal how much Agent Zero could already accomplish.

With Qwen3.6-35B-A3B, a ten-turn conversational test produced ten correct answers.

But those ten interactions required **40 model generations**: ten primary responses and thirty utility calls.

The median time to deliver a main answer was approximately 35 seconds.

Other tests demonstrated working memory retrieval, subagent delegation, skills and project management. Yet a simple delegated calculation took nearly three minutes to complete.

In a document-retrieval experiment, an unguided request wandered through irrelevant paths and failed to produce a final answer within five minutes. A more explicitly guided attempt succeeded.

The framework could do useful things, but the cost of getting them done remained substantial.

A longer rapid-turn experiment ended after an illegal CUDA memory access caused the Qwen inference server to fail during the ninth turn. The specific cause was never established, and the records don't demonstrate that Agent Zero itself caused the GPU fault.

Nevertheless, it was another unsuccessful operational evaluation.

The container was left in place.

I moved on.

Again.

## Curiosity won another round

Then Bonsai-2 happened.

I'd been experimenting with PrismML's Bonsai-2 model and eventually reached a configuration that worked surprisingly well on my hardware.

It followed instructions reliably enough for serious agentic work. Once I had a functioning multi-token prediction configuration, it was also fast enough that waiting for a response no longer dominated the experience.

I was using it with AnythingLLM and OpenCode, developing a workflow where one agent planned software projects and another implemented them.

The results were encouraging.

Then I remembered Agent Zero.

The container was still there, configured from the earlier evaluation.

I decided to give it another chance.

I wasn't expecting much. I'd already had enough disappointing experiences to know that an attractive interface and an impressive feature list don't guarantee a useful agent.

But something had changed.

Agent Zero now had modular context-management features, including a rolling approach that summarised older conversation history. There was also a manual compaction control.

That directly addressed one of the problems that had driven me away.

The utility calls hadn't disappeared, but I could configure Bonsai-2 to handle utility work without reasoning, making those operations much faster.

Between the framework improvements and the model's increased capability and responsiveness, the experience was dramatically better.

For the first time, Agent Zero felt less like a system I needed to maintain and more like an assistant I could actually use.

## The workflow quietly changed

At first, Agent Zero was a side experiment.

I was still using AnythingLLM to plan software projects and OpenCode to implement them.

I loaded my coding workflow guide into Agent Zero and tried using it for planning while continuing to hand implementation work to OpenCode.

That felt better.

Eventually, curiosity got the better of me again.

I started a small Kanban board project to see what would happen if I used Agent Zero for both planning and implementation.

I planned the application, prepared the handover, and used Agent Zero's CLI capabilities for development.

Then I kept going.

Instead of creating a fresh coding session for every milestone, I continued working in the same agent session, letting its rolling context management handle the accumulation of history.

The experience was surprisingly smooth.

There were mistakes and a few problems of my own making, but the workflow remained coherent enough to carry the experiment through.

It was an impulsive side project, not a properly documented benchmark. I didn't preserve the detailed evidence needed to compare it fairly against the AnythingLLM/OpenCode workflow.

So I can't claim that Agent Zero is objectively better at long development projects.

But I can say that the simpler workflow felt remarkably natural.

And I want to investigate why.

## When the assistant builds its own tools

The most impressive experiences haven't necessarily involved coding entire applications.

Sometimes they've been much smaller.

I wanted to generate images through my local agent, similar to how I use image generation in ChatGPT.

I asked Agent Zero to investigate suitable models available through Hugging Face.

It researched the options and offered to build an image-generation skill.

I approved the idea.

It built the integration, used the framework's mechanism for accessing an existing token without exposing the secret directly in the conversation, and tested several models.

Then it did something particularly interesting.

It generated sample images with the candidate models and used its own vision capabilities to inspect the outputs.

It formed an opinion about which results appeared most realistic, explained its assessment, and asked me which I preferred.

I hadn't given it an implementation plan. I'd described what I wanted.

Another time, I was frustrated because my Google MCP integration wasn't working correctly.

Agent Zero investigated the framework and plugin code without requiring me to explain how it should debug the problem.

It identified a conflict between existing Google credentials and a new set I'd uploaded.

It didn't make changes. It simply explained what was wrong.

These were the sorts of interactions I'd originally imagined having with an AI assistant.

Not because it spoke to me.

Because it could take a vaguely expressed objective, investigate the situation, find a practical approach and help me accomplish it.

## Giving tools their own agents

I also found an elegant way to manage a different problem: MCP tool overload.

In other frameworks, exposing a large collection of MCP tools could consume a considerable portion of the available model context.

I could prune the tool list manually, but that became cumbersome. Alternatively, I could rely on intelligent tool routing, with the risk that the tool an agent needed wouldn't be presented at the right moment.

Agent Zero gave me another option.

I created a specialised Google agent with access to the Google Suite MCP.

Other agents don't need every Gmail, Calendar and Drive tool definition in their own context. They can delegate the relevant task to the Google agent.

The specialised agent knows which tools it has available and handles that part of the work.

I like the simplicity of this arrangement.

It's not free. Delegation introduces additional inference and another boundary to manage. I haven't measured the overall token savings or tested all the possible failure modes.

But it means I can organise capabilities around responsibilities rather than continually adjusting which tool definitions the main model can see.

That feels much closer to how I want an agent environment to work.

## It still isn't perfect

There are unresolved problems.

The most significant recent one involves Agent Zero's resource consumption during larger tasks using subagents and browser sessions.

At one point, the container had a limit of 768 processes and threads. During demanding workloads, especially with cloud models allowing greater concurrency, browser-related activity could push the container to that ceiling.

Once exhausted, requests began failing because the application couldn't create additional threads.

We increased the limit to 4,096.

That's provided considerably more headroom, and the system has been stable in my recent use.

Interestingly, when I later checked, the container had been running for approximately five days without a restart and was using only 103 PIDs.

That suggests some of the process and thread usage had subsided naturally.

It doesn't establish whether cleanup always works correctly, or whether repeated large browser workloads could eventually cause another failure.

There's more testing to do.

The same applies to the coding workflow. Rolling context management appears promising, but I haven't yet established whether it preserves important information more reliably than the alternatives over genuinely large projects.

I don't want to mistake a pleasant experiment for proof of long-term reliability.

I've made that mistake before.

## What I was looking for all along

Looking back, I find the journey amusing.

I started out wanting to build an intelligent assistant that could talk to me.

Along the way, I built agent frameworks, experimented with voice interfaces, tried an assortment of existing applications, developed protective inference infrastructure and spent weeks debugging software that was supposed to make my life easier.

And what I've ended up enjoying most is a text interface.

An agent I can give a problem to.

One that can investigate, reason about its tools, create something when a capability is missing, and return with useful findings.

I still brainstorm with it, much as I do with ChatGPT. I still use cloud models for tasks where they make more sense. And Agent Zero is not suddenly the only framework worth considering.

But it has become the environment I naturally reach for when I want to work with my local model.

That was not the outcome I expected when I first abandoned it.

Perhaps the funniest part is that Agent Zero already offers much of the voice interaction I originally wanted. It supports speech-to-text and text-to-speech, along with messaging integrations such as WhatsApp and Telegram.

I don't even remember whether I've tried its voice features.

The capability is there, or at least the possibility of configuring it is. I simply haven't needed it.

What I once considered essential to an intelligent assistant has become optional. Meanwhile, things I barely thought about back then, such as context management, tool orchestration and meaningful progress feedback, have become indispensable.

There is a broader lesson here, one that builds on my earlier experiments with local model selection.

The usefulness of an AI system isn't determined by the intelligence of its model alone.

The framework needs to manage the model's limitations, make sensible use of its resources, preserve useful context, provide meaningful feedback, and offer the tools and freedom needed to accomplish something.

When those pieces don't fit, even a capable model can be miserable to use.

When they do, something interesting happens.

I stop thinking about the framework.

I start thinking about what I want to accomplish.

And perhaps that's the closest I've come to building the assistant I originally imagined.

It just doesn't need to talk.
