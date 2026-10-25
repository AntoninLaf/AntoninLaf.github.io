import { t, lang } from "./i18n.js";
import { renderMap } from "./map.js";
import { esc, inkFigure, tally } from "./ink.js";
import { projects } from "../projects/index.js";
import { stories, road, findStory } from "../stories/index.js";
import { findProject } from "../projects/index.js";
import { WORDS } from "../stories/words.js";


export function renderHome({ intro, stacked }) {
  return `
  <section class="sheet home ${intro ? "intro" : ""}">
    <div class="hero">
      <h1 class="name">Antonin Laferrière-Mailfait</h1>
      <svg class="name-underline" viewBox="0 0 520 10" preserveAspectRatio="none" aria-hidden="true">
        <path pathLength="1" d="M2 6 C 80 2, 160 9, 260 5 S 440 3, 518 6"/>
      </svg>
      <p class="throughline">${esc(t("hero.throughline"))}</p>
      <p class="hero-note">${esc(t("hero.note"))}</p>
    </div>
    ${renderMap(projects, stacked)}
  </section>`;
}

const BACKGROUND = {
  en: {
    education: ["McGill University, Desautels Faculty of Management: Master of Management in Analytics, 2026–2027", "Université de Montréal: Bachelor of Communication Sciences, concentration in Marketing, 2019–2022"],
    certifications: ["Cornell Product Management", "Google Data Analytics", "Certified ScrumMaster (CSM)"],
    languages: "French (native), English (fluent), Spanish and German (conversational)",
    interests: "Quebec U23 100 m champion in track and field; language learning and travel; personal AI projects"
  },
  fr: {
    education: ["Université McGill, Faculté de gestion Desautels : maîtrise en gestion analytique, 2026–2027", "Université de Montréal : baccalauréat en sciences de la communication, concentration marketing, 2019–2022"],
    certifications: ["Cornell Product Management", "Google Data Analytics", "Certified ScrumMaster (CSM)"],
    languages: "français (langue maternelle), anglais (courant), espagnol et allemand (conversationnel)",
    interests: "champion québécois U23 du 100 m en athlétisme ; apprentissage des langues et voyages ; projets personnels en IA"
  }
};

// ---------- About: a consultant's one-pager, drawn in the notebook ----------

const FACTS = {
  en: [
    ["Based", "Montréal · remote welcome"],
    ["Looking for", "Full-time roles from January 2027 · internships considered"],
    ["Focus", "AI product · product management · growth · consulting"],
    ["Studying", "Master of Management in Analytics, McGill Desautels, 2026–2027"],
    ["Languages", "French · English · Spanish · German"]
  ],
  fr: [
    ["Basé à", "Montréal · télétravail bienvenu"],
    ["Je cherche", "Un poste à temps plein dès janvier 2027 · stages considérés"],
    ["Axes", "Produit IA · gestion de produit · croissance · conseil"],
    ["Études", "Maîtrise en gestion analytique, McGill Desautels, 2026–2027"],
    ["Langues", "français · anglais · espagnol · allemand"]
  ]
};

// Four principles, each in my own words (from my answers and the GLRlight brief).
const HOW = {
  en: [
    ["Frame the problem", "I want a causal explanation that suggests a different action, rather than a more elaborate description of the symptom.", "on VersyTalks"],
    ["Test the mechanism", "If every possible result leaves us doing the same thing, the test is probably poorly designed.", "on running tests"],
    ["Defend the claim", "Choose the claim you can defend, not the claim that sounds most impressive.", "on GLRlight"],
    ["Value is the next step", "A response, a report or an AI answer is a beginning. I care about the next step it makes possible.", "on the work as a whole"]
  ],
  fr: [
    ["Cadrer le problème", "Je veux une explication causale qui suggère une autre action, plutôt qu'une description plus élaborée du symptôme.", "sur VersyTalks"],
    ["Tester le mécanisme", "Si chaque résultat possible nous laisse faire la même chose, le test est probablement mal conçu.", "sur la conduite des tests"],
    ["Défendre l'affirmation", "Choisir l'affirmation qu'on peut défendre, pas celle qui impressionne le plus.", "sur GLRlight"],
    ["La valeur, c'est la suite", "Une réponse, un rapport ou une réponse d'IA est un début. Ce qui m'importe, c'est la prochaine étape qu'il rend possible.", "sur l'ensemble du travail"]
  ]
};

const TOOLS = "Python · SQL · PyTorch · Databricks · PySpark · Anthropic and OpenAI APIs · Claude Code · Git · GA4";

// Which pages appear as work cards, in order.
const WORK = {
  engagements: [{ story: "versynow", project: "versynow" }, { story: "versytalks", project: "versytalks" }, { story: "stekar" }, { story: "goco" }],
  ventures: [{ story: "acteurly", project: "acteurly" }, { project: "glrlight" }]
};
const GLR_CARD = {
  en: { where: "GLRlight · Independent build", title: "A one-second check for warning signs before you sign with a UK company", headline: { value: "16", label: "plain rules, no AI in the verdict" } },
  fr: { where: "GLRlight · Projet indépendant", title: "En une seconde, les signaux d'alerte d'une entreprise britannique avant de signer", headline: { value: "16", label: "règles simples, aucune IA dans le verdict" } }
};

function workCard(item, L) {
  const s = item.story ? findStory(item.story) : null;
  const p = item.project ? findProject(item.project) : null;
  let where, years, title, head, note;
  if (s) {
    const tx = s.text[L] || s.text.en;
    where = tx.where; years = s.years; title = tx.title; note = tx.note;
    head = tx.tallies[s.headline || 0];
  } else {
    const g = GLR_CARD[L] || GLR_CARD.en, px = p.text[L] || p.text.en;
    where = g.where; years = "2026"; title = g.title; head = g.headline; note = px.note;
  }
  const links = [];
  if (s) links.push(`<a href="#/story/${s.slug}">${esc(t("about.case"))}</a>`);
  if (p) links.push(`<a href="#/p/${p.slug}">${esc(t("about.product"))}</a>`);
  if (p && p.links && p.links.code) links.push(`<a href="${esc(p.links.code)}" target="_blank" rel="noopener">${esc(t("about.code"))}</a>`);
  const main = s ? `#/story/${s.slug}` : `#/p/${p.slug}`;
  return `
        <article class="work-card ink-on-view">
          <p class="wc-where">${esc(where)}<span>${esc(years)}</span></p>
          <h3><a href="${main}">${esc(title)}</a></h3>
          <p class="wc-head"><b>${esc(head.value)}</b><span>${esc(head.label)}</span></p>
          <p class="wc-note">${esc(note)}</p>
          <p class="wc-links">${links.join("")}</p>
        </article>`;
}

// The road: a hand-drawn chart in three lanes, years along the bottom.
function renderRoad(L) {
  const X0 = 2019.5, X1 = 2027.8, LEFT = 150, RIGHT = 990, TODAY = 2026.8;
  const x = (yr) => LEFT + (yr - X0) / (X1 - X0) * (RIGHT - LEFT);
  const lanes = [["edu", 1], ["roles", 4], ["ventures", 2]];
  const ROW = 48, GAP = 20, TOP = 34;
  const laneTop = {}; let y = TOP;
  for (const [k, n] of lanes) { laneTop[k] = y; y += n * ROW + GAP; }
  const axisY = y - GAP + 10;
  const H = axisY + 34;
  const lanesSvg = lanes.map(([k, n], i) => {
    const y0 = laneTop[k], mid = y0 + n * ROW / 2 - 4;
    return `
      <text x="0" y="${mid}" class="hand lane">${esc(t("about.lane." + k))}</text>
      ${i ? `<path class="pencil sep" d="M0 ${y0 - GAP / 2} H${RIGHT}"/>` : ""}`;
  }).join("");
  const bars = road.map((b, i) => {
    const [org, role] = b[L] || b.en;
    const name = (b.short || org) + (b.href ? " →" : "");          // the bar carries a short name; the tooltip the full one
    const bx = x(b.start), ex = x(b.end == null ? TODAY : b.end), w = Math.max(ex - bx, 10);
    const by = laneTop[b.lane] + b.row * ROW + 4, h = 24;
    const inside = name.length * 7.4 + 16 < w;
    const lx = inside ? bx + 9 : (b.end == null ? ex + 30 : ex + 8);
    const roleW = role.length * 6.1;
    const roleAt = bx + roleW > 996 ? `x="${Math.min(ex, 996)}" text-anchor="end"` : `x="${bx}"`;
    const box = `M${bx - 2} ${by} H${ex + 1} M${ex} ${by - 1.5} V${by + h + 1} M${ex + 2} ${by + h} H${bx} M${bx} ${by + h + 1.5} V${by - 1}`;
    const arrow = b.end == null ? `<path class="pencil" d="M${ex + 4} ${by + h / 2} H${ex + 24} M${ex + 18} ${by + h / 2 - 5} L${ex + 24} ${by + h / 2} L${ex + 18} ${by + h / 2 + 5}"/>` : "";
    const fill = b.href ? `<rect class="hatch" x="${bx}" y="${by}" width="${w}" height="${h}"/>` : "";
    const inner = `
        <title>${esc(org)}, ${esc(role)}</title>
        ${fill}<path d="${box}"/>${arrow}
        <text x="${lx}" y="${by + 17}" class="hand org">${esc(name)}</text>
        <text ${roleAt} y="${by + h + 14}" class="hand small role">${esc(role)}</text>`;
    return b.href ? `<a class="bar link" href="${b.href}">${inner}</a>` : `<g class="bar">${inner}</g>`;
  }).join("");
  let ticks = "";
  for (let yr = 2020; yr <= 2027; yr++) ticks += `<path class="thin" d="M${x(yr)} ${axisY - 4} V${axisY + 4}"/><text x="${x(yr)}" y="${axisY + 22}" class="hand small" text-anchor="middle">${yr}</text>`;
  return `
  <figure class="ink-fig wide ink-on-view road">
    <svg viewBox="0 0 1000 ${H}" role="img" aria-label="${esc(t("about.s.road"))}">
      <defs><pattern id="hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V7" class="hatch-line"/></pattern></defs>
      ${lanesSvg}
      <path class="thin" d="M${LEFT - 10} ${axisY} H${RIGHT}"/>
      ${ticks}
      <path class="today" d="M${x(TODAY)} ${TOP - 18} V${axisY}"/>
      <text x="${x(TODAY)}" y="${TOP - 22}" class="hand small today-label" text-anchor="middle">${esc(t("about.today"))}</text>
      ${bars}
    </svg>
    <figcaption>${esc(t("about.road.note"))}</figcaption>
  </figure>`;
}

const section = (n, title, note = "") => `
      <header class="ab-head"><span class="ab-n">${n}</span><h2>${esc(title)}</h2>${note ? `<p class="ab-note">${esc(note)}</p>` : ""}</header>`;

export function renderAbout() {
  const L = lang();
  const bg = BACKGROUND[L] || BACKGROUND.en;
  const facts = FACTS[L] || FACTS.en;
  const how = HOW[L] || HOW.en;
  const words = WORDS[L] || WORDS.en;
  return `
  <section class="sheet about">
    <div class="ab-hero">
      <div class="ab-intro">
        <h1>${esc(t("about.title"))}</h1>
        <p class="place-line">${esc(t("about.place"))}</p>
        <p class="lede">${esc(t("about.lede"))}</p>
        <div class="actions">
          <a class="btn" href="mailto:${esc(t("ask.email"))}">${esc(t("about.contact"))}</a>
          <button type="button" class="btn quiet" data-open-ask>${esc(t("about.ask"))}</button>
          <a class="btn quiet" href="https://www.linkedin.com/in/antonin-laferriere" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
      <aside class="fact-card">
        <p class="fact-title">${esc(t("about.facts"))}</p>
        <dl>${facts.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}</dl>
      </aside>
    </div>

    <section class="ab-sec">
      ${section("01", t("about.s.road"))}
      ${renderRoad(L)}
    </section>

    <section class="ab-sec">
      ${section("02", t("about.s.work"), t("about.s.work.note"))}
      <h3 class="ab-group">${esc(t("about.engagements"))}</h3>
      <div class="work-grid">${WORK.engagements.map((w) => workCard(w, L)).join("")}</div>
      <h3 class="ab-group">${esc(t("about.ventures"))}</h3>
      <div class="work-grid">${WORK.ventures.map((w) => workCard(w, L)).join("")}</div>
    </section>

    <section class="ab-sec">
      ${section("03", t("about.s.how"), t("hero.throughline"))}
      <div class="how-grid">${how.map(([h, q, src], i) => `
        <figure class="how ink-on-view">
          <figcaption><span>${i + 1}</span>${esc(h)}</figcaption>
          <blockquote>${esc(q)}</blockquote>
          <p class="how-src">${esc(src)}</p>
        </figure>`).join("")}
      </div>
    </section>

    <section class="ab-sec">
      ${section("04", t("about.words"), t("about.words.note"))}
      <div class="words-grid">${words.map((w) => `
        <details class="word">
          <summary><span class="word-title">${esc(w.title)}</span><span class="word-first">${esc(w.paras[0].split(". ")[0])}.</span><span class="word-open">${esc(t("about.read"))}</span></summary>
          ${w.paras.map((p) => `<p>${esc(p)}</p>`).join("")}
        </details>`).join("")}
      </div>
    </section>

    <section class="ab-sec">
      ${section("05", t("about.background"))}
      <div class="bg-grid">
        <div class="bg-card"><p class="bg-k">${esc(t("about.education"))}</p>${bg.education.map((e) => `<p>${esc(e)}</p>`).join("")}</div>
        <div class="bg-card"><p class="bg-k">${esc(t("about.certifications"))}</p>${bg.certifications.map((e) => `<p>${esc(e)}</p>`).join("")}</div>
        <div class="bg-card"><p class="bg-k">${esc(t("about.tools"))}</p><p>${esc(TOOLS)}</p></div>
        <div class="bg-card"><p class="bg-k">${esc(t("about.languages"))}</p><p>${esc(bg.languages)}</p><p class="bg-k">${esc(t("about.interests"))}</p><p>${esc(bg.interests)}</p></div>
      </div>
      <nav class="turn">
        <a class="btn" href="mailto:${esc(t("ask.email"))}">${esc(t("about.contact"))}</a>
        <a class="btn quiet" href="#/">${esc(t("nav.back"))}</a>
      </nav>
    </section>
  </section>`;
}

export function renderStory(s) {
  const L = lang();
  const tx = s.text[L] || s.text.en;
  const idx = stories.indexOf(s);
  const next = stories[(idx + 1) % stories.length];
  const nextTx = next.text[L] || next.text.en;
  return `
  <section class="sheet">
    <div class="page story">
      <aside class="margin">
        <p class="margin-note sticky">${esc(tx.note)}</p>
      </aside>
      <div class="body">
        <p class="chapter">${esc(t("story.label"))}</p>
        <h1>${esc(tx.title)}</h1>
        <p class="place-line">${esc(tx.where)}<br>${esc(tx.place)}<span class="years">${esc(s.years)}</span></p>
      </div>

      <aside class="margin"><p class="margin-note">${esc(t("story.situation.note"))}</p></aside>
      <div class="body">
        <h2>${esc(t("story.situation"))}</h2>
        <p class="lede">${esc(tx.situation)}</p>
      </div>

      ${inkFigure(s.diagram(tx.diagram), { viewBox: "0 0 900 300", caption: tx.diagram.caption, cls: "wide" })}

      <aside class="margin"><p class="margin-note">${esc(t("story.did.note"))}</p></aside>
      <div class="body">
        <h2>${esc(t("story.did"))}</h2>
        ${tx.did.map((d) => `<p>${esc(d)}</p>`).join("")}
      </div>

      <aside class="margin"><p class="margin-note">${esc(t("story.changed.note"))}</p></aside>
      <div class="body">
        <h2>${esc(t("story.changed"))}</h2>
        ${tally(tx.tallies)}
        <p>${esc(tx.changed)}</p>
      </div>

      <aside class="margin"><p class="margin-note red">${esc(t("story.judgment.note"))}</p></aside>
      <div class="body">
        <blockquote class="judgment">${esc(tx.judgment)}</blockquote>
      </div>

      <aside class="margin"></aside>
      <div class="body">
        <h2 class="h-quiet">${esc(t("story.questions"))}</h2>
        <p class="questions-hint">${esc(t("story.questions.hint"))}</p>
        <ul class="questions">${tx.questions.map((q) => `<li>${esc(q)}</li>`).join("")}</ul>
      </div>

      <aside class="margin"></aside>
      <div class="body">
        <nav class="turn">
          <a class="btn" href="#/story/${next.slug}">${esc(t("story.next"))}: ${esc(nextTx.title)}</a>
          <a class="btn quiet" href="#/about">${esc(t("story.index"))}</a>
        </nav>
      </div>
    </div>
  </section>`;
}

export function renderProject(p) {
  const L = lang();
  if (p.story) return p.story(p, L, t);
  const tx = p.text[L] || p.text.en;
  const links = [];
  if (p.links.live) links.push(`<a class="btn" href="${esc(p.links.live)}" target="_blank" rel="noopener">${esc(t("project.try"))}</a>`);
  if (p.links.code) links.push(`<a class="btn quiet" href="${esc(p.links.code)}" target="_blank" rel="noopener">${esc(t("project.code"))}</a>`);
  return `
  <section class="sheet">
    <div class="page">
      <aside class="margin">
        <p class="margin-note sticky">${esc(tx.note)}<br><br><span class="stamp">${esc(t("project.inprogress"))}</span></p>
      </aside>
      <div class="body">
        <h1>${esc(tx.title)}</h1>
        <p class="place-line">${esc(tx.place)}</p>
        <p class="lede">${esc(tx.lede)}</p>
        <p>${esc(t("project.coming"))}</p>
        <div class="actions">${links.join("")}</div>
      </div>
    </div>
  </section>`;
}

export function renderNotFound() {
  return `
  <section class="sheet">
    <div class="page"><aside class="margin"></aside><div class="body">
      <h1>404</h1>
      <p class="place-line">${lang() === "fr" ? "Cette page n'est pas dans le carnet." : "This page isn't in the notebook."}</p>
      <a class="btn" href="#/">${esc(t("nav.back"))}</a>
    </div></div>
  </section>`;
}
