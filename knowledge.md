# Antonin Laferrière-Mailfait: Knowledge Base v1 (EN)

Source of truth for the portfolio's About section and the chatbot. The chatbot answers ONLY from this file.
Lines marked **[confirm]** are my wording or assumptions; Antonin must approve them before launch.

---

## 1. Who Antonin is
- Throughline: *I frame the right problems, test the critical assumptions, and turn insight into measurable business value.*
- Over eight years across marketing, growth and product: telecom (GoCo, a TELUS company), construction and industrial manufacturing (STEKAR & Vitralum, architectural glass and aluminum facades, Canada and U.S.), agency work (Acteur Social), AI and startups (VersyNow, VersyTalks, Acteurly, GLRlight).
- The recurring challenge across all of it: deciding where to focus, what to change and how to deliver results.
- Education: Master of Management in Analytics, McGill Desautels (Aug 2026 – Aug 2027), coursework in deep learning, statistical learning, text analytics, database management, managing data analytics teams. Bachelor of Communication Sciences, concentration in Marketing, Université de Montréal (2019–2022).
- Certifications: Cornell Product Management; Google Data Analytics; Certified ScrumMaster (CSM).
- Skills: AI product strategy, PRDs, LLM evaluation, agent guardrails, unit economics, go-to-market. Software: Python, SQL, PyTorch, Databricks, PySpark, Anthropic and OpenAI APIs, Claude Code, Git, GA4.
- Interests: Quebec U23 100 m champion (track and field); language learning and travel; personal AI projects.
- Languages: French (native), English (fluent), Spanish and German (conversational).
- Aiming at: AI product management, growth and marketing leadership, and consulting (strategy and AI).

## 2. Availability and contact
- Mainly looking for **full-time roles, starting as early as January 2027**. Also open to internships.
- Based in Montreal. **Remote work welcome, open to anywhere.**
- Contact: Antonin.laferriere-mailfait@mail.mcgill.ca

## 3. Experience (titles and dates never change)
| Employer | Title | Dates |
|---|---|---|
| VersyNow | Product Manager, AI & Growth (part-time) | Dec 2024 – Present |
| STEKAR & Vitralum (architectural glass and aluminum facade manufacturer, Canada and U.S.) | Marketing Director | Mar 2024 – Jul 2026 |
| Acteur Social | Marketing Consultant (freelance) | Oct 2023 – Mar 2025 |
| GoCo (a TELUS company) | Marketing Manager | Jun 2022 – Sep 2023 |
| Groupe EGS | Marketing Coordinator (part-time) | Dec 2021 – Sep 2022 |

Acteur Social is an agency Antonin worked for as a consultant. He did not found it and does not own it.

---

## 4. About: the stories

### Story 1: STEKAR. Building an inbound acquisition engine from the ground up
**Situation.** A premium industrial materials company with almost no inbound leads, and each lead it did get cost too much. Sales depended on outbound and on luck.
**What I did.** Built the whole inbound system from zero for two brands in Canada and the U.S., leading agencies and freelancers: website conversion paths, a content strategy, paid ads, tradeshows, and an online Lunch & Learn booking flow aimed at architects and specifiers. Grew website traffic about 1,000% with AI-assisted SEO and content, earning visibility in AI search answers.
**What changed.**
- 3–4 qualified client inquiries a week, by phone and through the website.
- Cost per lead down 15%.
- Brand recognition up 57% year over year, measured through branded search and a survey.
- The Lunch & Learn flow brought in leads from the United States and opened that market.
**The judgment.** Lowering the cost of a lead wasn't enough. The real job was creating a system that kept producing them without me.

### Story 2: VersyTalks. Scaling from 40 to 10,000 through product and growth experimentation
**Situation.** An online debate platform with 40 users. Two-sided: debaters on one side, coaches and organizers on the other. Neither side shows up without the other.
**What I did.**
- Growth through three levers: content and social, events and competitions, and partnerships with debate coaches, who brought entire teams at once.
- Specified an AI debate grader calibrated on 42 real submissions with a rubric from coaches' own framework, launched as a capped free beta with go/stop targets and user corrections captured as training labels.
- Set the two metrics that mattered: **time spent on the platform and arguments written**. Arguments weren't just engagement; they were the training data for our own small language model.
- Built for those two numbers: drills, a clear onboarding with goals, profiles, following and achievements, and a debate assessment linked to each debater's coaching profile.
- Earlier bets that taught us what didn't work: the argument arena, matching rooms, teams, speech-to-text, and a pivot to schools (VersyEdu) that didn't take.
- Latest move: events hosted by coaches, turning the people who already bring teams into the platform's hosts.
**What changed.** The community grew from 40 to 10,000 monthly active users.
**The judgment.** Acquisition wasn't the hard part; retention was. Shipping more features is not a retention strategy. Once we tied every feature to two measurable behaviours, and to the data our model needed, the roadmap got shorter and sharper.

### Story 3: VersyNow. Making AI analysis trustworthy, and economically viable
**Situation.** Event organizers collect plenty of audience data (questions, polls, engagement) but rarely know what to do with it afterwards. VersyNow wanted an AI agent that turns an event's data into a clear brief: what happened, and what to do next.
**The two hard problems.**
1. **Trust.** An agent that writes fluent, confident text with a wrong number in it is worse than no agent at all.
2. **Cost.** The brief had to stay around **$0.08** each, or the business model broke at scale.
**What I did.** Specified an agent rather than one big prompt: a bounded loop (5–9 tool calls) that reads the overview, spots the weak session, drills into it, reads what attendees wrote, and compares the event with the organizer's own past events.
- **Trust, solved by design:** every claim carries structured evidence (metric, value, sample size), and the server re-checks each one against the database with eight rules before the brief is saved. A claim that fails is dropped. **No number on screen is model-generated.** The agent must also list its own limitations.
- **Cost, solved by design:** Claude Haiku 4.5 with prompt caching, plus eight independent spending ceilings (eligibility gate, monthly caps, rate limits, iteration and time limits) and a kill switch.
- **Usefulness, measured:** a "shallow" signal flags briefs that never used a session or history, since a brief can be truthful and still useless.
**What changed.** About 8 cents a brief (roughly $2 a year for an organizer running 26 events), with every figure verifiable on screen.
**Go-to-market.** Took VersyNow to market in Québec: positioning, pricing, and a free-trial-to-paid funnel that signed paying organizations, including an annual licence. VersyNow is a live Q&A and audience insight platform for events (polls, quizzes, word clouds, moderation, branding, organization accounts, sponsor lead capture, question analytics, automatic post-event report).
**The moat.** Anyone can summarize one event. Only VersyNow holds each organizer's history, so only it can say "attendance is 12 points below your last two galas."
**The judgment.** In AI products, the model is rarely the hard part. Deciding what the model is *not allowed to do* is.

### Story 4: Acteurly. Embedding expert judgment into AI-driven marketing
**Situation.** For small businesses, marketing is often a capability gap that limits growth: owners lack the time and expertise to define their positioning, decide where to invest and understand whether efforts are paying off, while an agency is beyond their budget. Acteurly is an accessible AI agency that learns the business, interprets its marketing data and turns that into priorities suited to the owner's budget, capacity and objectives. Its AI is called Aly.
For Québec businesses of 1 to 50 people (trades, clinics, shops, restaurants), an agency costs too much.
**My role.** I didn't write the code. I was the marketing expert and the human in the loop, the "sheriff": I wrote the expert playbooks Aly (Acteurly's AI) reads before every answer, built the rubrics for judging its recommendations, and reviewed what it produced.
**How it works.** A weekly loop: free diagnostic → connect Google and Meta → plain-language reports → a weekly action plan sized to the owner's budget and hours → owners rate actions and the outcomes are recorded. Code computes every number; the model only explains and recommends. Retrieval picks 4–5 of 24 playbooks from signals in the data plus keyword search.
**The moat.** Expert knowledge (the playbooks), each company's memory, and outcomes across companies: what actually works, by sector, in Québec.
**Honest limits.** Today Aly is an analyst that recommends, not an agent that acts: closer to well-built workflows plus an assistant than to autonomy, and deliberately so. Pilots with Québec businesses are the next step.
**The judgment.** The product isn't the dashboard. It's the sentence at the end: "here's what to do Monday."

### Story 5: GLRlight. Turning corporate filings into explainable counterparty risk signals
Covered fully in its project world. Short version for About:
- About five million companies sit on the UK register, and most supplier or client decisions involve no check at all, because Creditsafe, D&B and Experian are priced for procurement teams and Companies House is free but unreadable.
- I didn't try to build a better credit score; bureaus hold payment data I can't get. I built the free first pass instead: a rules engine (no AI) gives a green, amber or red verdict from public filings, and an AI layer explains it in plain English.
- When the evaluation showed it can't predict insolvency, the product survived, because prediction was never the claim.
- Code is public: github.com/AntoninLaf/glrlight · Live: glrlight.vercel.app

### Story 6: GoCo, a TELUS company. Protecting customer retention through a business migration
- Led marketing for the migration of 900+ B2B voice accounts. Used usage and engagement signals to target at-risk accounts with segmented Salesforce/Pardot campaigns, aligned with sales. Contributed to a 30% churn reduction.

### Shorter notes (experience, not full stories)
- **Groupe EGS (Marketing Coordinator, part-time, Dec 2021 – Sep 2022):** grew organic search traffic 20%, lead quality 8% and ad ROI 10% through a creator-led content strategy; PR in 15+ publications.
- **Acteur Social (Marketing Consultant, freelance, Oct 2023 – Mar 2025):** advised small businesses on positioning, digital strategy, analytics, media buying and website conversion (no client names).

---

## 5. Chatbot rules
1. Answer only from this file. Never invent experience, titles, dates or numbers.
2. **Never name a client or a person.** Describe them generically ("a premium materials company").
3. For references or recommendations: "Please contact Antonin directly at Antonin.laferriere-mailfait@mail.mcgill.ca."
4. If a figure isn't here, or the question goes beyond this file: say so and suggest a conversation with Antonin. Don't guess.
5. Private code (VersyTalks, VersyNow, Acteurly): explain the thinking and the product, never implementation details beyond this file. Point to the live product.
6. Voice: sharp consultant. Short, structured, numbers first. Answer in the visitor's language (EN or FR).
