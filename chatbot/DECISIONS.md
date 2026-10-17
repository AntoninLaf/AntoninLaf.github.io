# The portfolio chatbot: decisions and reasoning

A small assistant that answers recruiters' questions about my work. These are the choices behind it, and why.

## 1. It answers only from an approved knowledge base
The bot reads `knowledge.md`, written and approved by me, and is told to answer only from it. When it doesn't know, it says so and points to my email. A chatbot that overstates a candidate's experience to a recruiter is worse than no chatbot.

## 2. One source of truth, read from the site
The knowledge base lives in this repository, not inside the server code. The Worker fetches it from the live site and caches it for five minutes.
- Changing what the bot knows is a content edit and a push, not a server deployment.
- The pages and the bot can't drift apart: they read the same text.
- Trade-off: the knowledge file is public. It only contains what the pages already say, so that's acceptable.

## 3. A small proxy, because a static site can't hold a key
GitHub Pages serves static files, so an API key in the site would be readable by anyone. A Cloudflare Worker sits between the site and the model and holds the key as a secret. The code in this folder contains no secret.

## 4. Cost is capped in layers
- The smallest capable model (Claude Haiku), with the system prompt cached across visitors.
- Short answers (max 500 tokens), capped input length and conversation length.
- Requests accepted only from this site's origin.
- A per-visitor hourly limit (best effort, in memory).
- A monthly spend limit at the provider: the one cap that doesn't depend on this code being right.

## 5. Full context first, retrieval later
The knowledge base is a few thousand words, small enough to send whole on every call. With prompt caching that is cheaper, simpler and more accurate than a vector search at this size. Retrieval (embeddings + search) becomes worth it once the knowledge base outgrows the context, and comparing the two is a planned experiment.

## 6. Visitor text is data, not instructions
The rules tell the model that a visitor's message is a question and never changes its rules, and it never names clients or people.
