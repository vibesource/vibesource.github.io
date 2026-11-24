---
date: "2026-11-24"
category: "Local AI"
title: "Three Models or One?"
excerpt: "How I went from choosing between speed and capability to building a local AI setup I actually wanted to use."
project: "pc-prepper"
---

*Finding the point where local AI becomes useful enough to actually use.*

I had a local AI model that could do almost everything I wanted.

The problem was that I rarely wanted to use it.

Qwen3.6-35B-A3B was an impressive model, particularly considering that I was running it on a laptop with an RTX 4080 and 12 GB of VRAM. It was a competent coder, handled complex instructions reasonably well, and was surprisingly capable at agentic tasks.

But it was slow.

For coding, that wasn't necessarily a problem. I could give an agent a task, leave it working, and return later to inspect the results. Waiting several minutes was tolerable when I wasn't sitting there watching.

For interactive research, planning and everyday assistance, it was another matter entirely.

I would ask a question, the agent would begin working, and I'd wait. And wait. A task that should have felt like a conversation became a sequence of interruptions. Eventually, I'd find myself reaching for ChatGPT instead.

My local AI environment was technically capable, but it wasn't particularly useful to me.

## The surprising importance of looking busy

I initially used Open WebUI as my primary interface. It was functional, relatively straightforward, and supported the local models I wanted to run.

Then I tried AnythingLLM.

Something unexpected happened. The same underlying model suddenly **felt** faster.

It wasn't generating tokens significantly faster. The difference was in how the application communicated what was happening.

AnythingLLM made the model's activity more visible. Its thinking indicator was prominent and changed as the model worked. Instead of staring at an interface that appeared to be doing very little, I could see signs of progress.

It sounds like a trivial detail. It wasn't.

The perceived responsiveness of the system improved dramatically, even though the underlying computation hadn't.

I began to appreciate that the user experience of a local AI agent involves more than tokens per second. Knowing that something is happening changes how waiting feels.

Unfortunately, visual feedback could only take me so far.

Qwen was still slow. The interface made the experience more tolerable, but it couldn't turn a lengthy agentic task into a comfortable interactive session.

I needed something different.

## The three-model compromise

Gemma-4 12B presented an almost opposite problem.

It was fast. Delightfully fast compared with Qwen. It handled tool calls well enough for many smaller tasks, and using it felt much closer to the experience I wanted.

But it lacked the capability I needed for more demanding work.

Research tasks would sometimes come back confidently incomplete. An agent might answer part of a question while missing important details, or fail to follow the full scope of a complicated request.

For small automations, Gemma was perfectly serviceable. For serious interactive research, I couldn't quite trust it to do everything I asked.

So I ended up with a compromise.

I configured llama.cpp's model router to serve three models, each with a different role:

- **Gemma-4 12B** for everyday tasks where responsiveness mattered.
- **Gemma-4 E4B** for smaller, lightweight jobs.
- **Qwen3.6-35B-A3B** for tasks requiring more capable reasoning and coding.

The router loaded models on demand, and a 15-minute idle timeout allowed them to unload when no longer needed, freeing GPU resources for other activities.

It was a practical arrangement for a laptop that also had other jobs to do.

Technically, it worked quite well.

But I was still choosing between speed and capability. Every time I wanted to use local AI, I had to consider which model was appropriate, and whether I was prepared to live with its limitations.

The infrastructure was improving. The experience still wasn't quite where I wanted it.

## Giving Bonsai another chance

I was beginning to lose enthusiasm for the whole exercise when I remembered that PrismML had released Bonsai-2.

I'd experimented with the original Bonsai previously and hadn't been particularly impressed. My expectations weren't high.

But curiosity won.

I asked Codex to prepare a containerised deployment using PrismML's llama.cpp fork, which supported the model's unusual quantisation format. I already had the foundations of my local inference environment in place, so I could experiment without rebuilding everything.

My initial experience was mixed.

Bonsai-2 was clearly capable, but I encountered familiar problems: repetition loops, odd behaviour, and other small defects that made sustained use frustrating.

It would have been easy to dismiss it and return to the existing models.

Instead, I spent some time investigating.

PrismML's documentation discussed some of the problems I was seeing and recommended particular inference and sampling configurations for agentic and coding work.

We adjusted the configuration, including disabling a troublesome context-checkpoint behaviour, and began experimenting with different reasoning-effort settings.

For interactive agentic work, **medium reasoning effort** provided a more comfortable balance. For coding, where I was more willing to let the model take its time, I preferred **xhigh**.

The results were encouraging.

Bonsai-2 wasn't flawless. It made mistakes, sometimes quite ordinary ones. But it followed instructions well, and it had an important ability: it could often test its own code, recognise failures and repair the problems it had introduced.

It was beginning to look like a genuinely useful general-purpose model.

## A real coding project changes the picture

Around the same time, I had started developing a workflow for building software entirely with locally hosted AI.

The idea was straightforward: could a capable local model plan, implement, test and improve a useful application without relying on cloud inference?

I used AnythingLLM for planning and OpenCode for implementation, both connected to Bonsai-2. One of the experiments was a small application for recording and comparing local inference results, which became the Local Project Journal.

It was a useful test because it wasn't merely asking the model to write a function or solve a programming puzzle.

The agent had to work across a real application, maintain context, implement features, diagnose errors and respond to human testing.

It wasn't always smooth.

The first implementation session took almost three hours, involved several context compactions, and still left defects that I discovered during testing. Those defects were subsequently corrected, and later milestones progressed more smoothly.

What mattered to me was that the model could make meaningful progress, recover from errors and complete useful work.

For a model running on my laptop, that was exciting.

It also highlighted another problem.

Bonsai-2 could spend a considerable amount of time thinking. Its detailed reasoning was often valuable, but lengthy thought processes could make interactive use feel painfully slow.

It was capable enough. I needed it to be responsive enough.

## The speculative decoding breakthrough

I'd been hoping that PrismML would release official speculative decoding support for Bonsai-2.

Speculative decoding, in simplified terms, allows a model to predict several tokens ahead and verify them together, potentially accelerating generation without requiring a fundamentally different model.

Eventually, I began investigating community implementations.

We found a community-modified Bonsai-2 model containing the additional components needed for multi-token prediction, or MTP, and tested it using the Prism inference runtime.

The improvement was substantial.

In one short synthetic coding test, generation increased from approximately **58 to 89 tokens per second**. Other tests showed useful gains, although longer prompts demonstrated that faster generation didn't necessarily mean faster overall completion. Prompt processing could still dominate the time spent waiting.

These were individual, synthetic tests rather than comprehensive benchmarks, and a faster model isn't automatically a more intelligent one.

But the practical difference was unmistakable.

Bonsai-2 was now fast enough that I felt comfortable using it interactively.

And something important happened.

**I started using my local AI more often.**

Not just for experiments. For actual work.

## From experiments to everyday use

I began using local agents for research. I connected Google Suite through MCP and started developing workflows around my everyday information. I revisited Agent Zero, a framework I'd previously rejected, and discovered that some of my earlier concerns had been addressed.

With Bonsai-2 behind it, Agent Zero became a surprisingly capable general-purpose agent for my needs.

I've also begun testing it on real coding work. There is considerably more to explore, particularly how it performs on larger development projects, but the early experience has been encouraging.

One feature I'm particularly interested in is Agent Zero's approach to context management.

In my OpenCode experiments, filling the context window led to periodic compaction, sometimes requiring the model to rediscover details from earlier work.

Agent Zero instead uses a rolling approach that summarises older context. My initial impression is that this helps preserve useful working knowledge without such disruptive transitions.

That's an observation rather than a proven advantage. It deserves proper testing, and probably its own story.

But the broader shift is already clear.

I no longer spend my time deciding which **local model** to use.

When I choose to work locally, I use Bonsai-2.

It isn't always the best option. Cloud models remain more attractive for some tasks, and I still use them frequently when I want additional capability or speed.

But the local decision is easy now.

I don't need to decide whether Gemma is intelligent enough or whether Qwen will take too long. I can concentrate on the task.

## One model doesn't mean only one model

I haven't abandoned the idea of specialised models.

Gemma-4 E4B, for example, could be a fantastic fit for small scheduled automations. I'm considering a dashboard that could gather information and prepare a morning summary before I get up.

Those tasks are narrow and predictable. They might not benefit from running a larger, reasoning-intensive model.

And I'm still watching for new open-weight models. A capable new mixture-of-experts model that works within my hardware limitations could change the balance again.

But there's a difference between experimenting with new models because the current system is frustrating, and experimenting because a new model might improve something that's already useful.

I've reached the second situation.

## What I actually learned

The original problem wasn't choosing between three models and one.

It was finding a local AI environment I wanted to use.

That involved model capability, inference speed, memory constraints, speculative decoding, client configuration, context management and even the visual feedback provided by the interface.

Each played a part.

Some improvements made the system genuinely faster. Others simply made it feel more responsive. A few removed decisions and interruptions from the workflow altogether.

And those changes reinforced one another.

I haven't completely eliminated the decisions around AI. I still choose between local and cloud models, and cloud remains the better option for many of the things I do.

What I'm working towards now is something simpler: **workflows that naturally belong in one environment or the other**.

I don't want to evaluate models every time I need to accomplish something. I want the task itself to determine where it happens.

There are enough important decisions to make every day. Which language model should answer a routine question doesn't need to be one of them.

My local AI environment is still evolving. It has unresolved problems, incomplete experiments and plenty of room for improvement.

But it's no longer a technical demonstration that I occasionally tolerate using.

**It's a tool I choose to use.**
