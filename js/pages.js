import { t, lang } from "./i18n.js";
import { renderMap } from "./map.js";
import { esc, inkFigure, tally } from "./ink.js";
import { projects } from "../projects/index.js";
import { stories, road, findStory } from "../stories/index.js";
import { findProject } from "../projects/index.js";
import { WORDS } from "../stories/words.js";
import { FACTS, TOOLS, WORK, GLR_CARD, CAPS, CAP_COLS, FLOW, VOCAB } from "./about-data.js";


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
// The content lives in about-data.js; this file only draws it.

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
  if (item.where) where = item.where[L] || item.where.en;
  const tools = item.tools ? (item.tools[L] || item.tools.en) : [];
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
          ${tools.length ? `<p class="wc-tools"><span class="wc-tools-k">${esc(t("about.toolkit"))}</span>${tools.map((x) => `<span class="chip">${esc(x)}</span>`).join("")}</p>` : ""}
          <p class="wc-links">${links.join("")}</p>
        </article>`;
}

// The road: a Gantt chart drawn by hand. Thin bars; the name sits on top of its bar, the role under it.
function renderRoad(L) {
  const X0 = 2019.5, X1 = 2027.8, LEFT = 160, RIGHT = 990, TODAY = 2026.8;
  const x = (yr) => LEFT + (yr - X0) / (X1 - X0) * (RIGHT - LEFT);
  const laneOrder = ["edu", "roles", "ventures"];
  const GAP = 18, TOP = 38, BAR = 11;
  // each row is as tall as its contents: name, bar, role, and product links when there are some
  const rowH = {};
  for (const b of road) { const k = `${b.lane}:${b.row}`; rowH[k] = Math.max(rowH[k] || 0, b.links ? 70 : 54); }
  const rowTop = {}, laneTop = {}, laneH = {};
  let y = TOP;
  for (const lane of laneOrder) {
    laneTop[lane] = y;
    const rows = [...new Set(road.filter((b) => b.lane === lane).map((b) => b.row))].sort((a, b) => a - b);
    for (const r of rows) { rowTop[`${lane}:${r}`] = y; y += rowH[`${lane}:${r}`]; }
    laneH[lane] = y - laneTop[lane];
    y += GAP;
  }
  const axisY = y - GAP + 8, H = axisY + 34;
  const lanesSvg = laneOrder.map((k, i) => `
      <text x="0" y="${laneTop[k] + laneH[k] / 2 + 4}" class="hand lane">${esc(t("about.lane." + k))}</text>
      ${i ? `<path class="pencil sep" d="M0 ${laneTop[k] - GAP / 2} H${RIGHT}"/>` : ""}`).join("");
  const bars = road.map((b) => {
    const [org, role] = b[L] || b.en;
    const name = (b.short || org) + (b.href ? " →" : "");
    const bx = x(b.start), ex = x(b.end == null ? TODAY : b.end);
    const top = rowTop[`${b.lane}:${b.row}`];
    const by = top + 22;
    const box = `M${bx - 2} ${by} H${ex + 1} M${ex} ${by - 1.5} V${by + BAR + 1} M${ex + 2} ${by + BAR} H${bx} M${bx} ${by + BAR + 1.5} V${by - 1}`;
    const arrow = b.end == null ? `<path class="pencil" d="M${ex + 4} ${by + BAR / 2} H${ex + 22} M${ex + 16} ${by + BAR / 2 - 4.5} L${ex + 22} ${by + BAR / 2} L${ex + 16} ${by + BAR / 2 + 4.5}"/>` : "";
    const fill = b.href || b.links ? `<rect class="hatch" x="${bx}" y="${by}" width="${Math.max(ex - bx, 4)}" height="${BAR}"/>` : "";
    const nameW = name.length * 7.4, roleW = role.length * 6.1;
    const nameAt = bx + nameW > 996 ? `x="${Math.min(ex, 996)}" text-anchor="end"` : `x="${bx}"`;
    const roleAt = bx + roleW > 996 ? `x="${Math.min(ex, 996)}" text-anchor="end"` : `x="${bx}"`;
    const prodLinks = b.links ? b.links.map(([label, href], i) => `<a class="bar-link" href="${href}"><text x="${bx + i * 108}" y="${by + BAR + 32}" class="hand prod">${esc(label)} →</text></a>`).join("") : "";
    const inner = `
        <title>${esc(org)}, ${esc(role)}</title>
        <text ${nameAt} y="${by - 6}" class="hand org">${esc(name)}</text>
        ${fill}<path d="${box}"/>${arrow}
        <text ${roleAt} y="${by + BAR + 14}" class="hand small role">${esc(role)}</text>`;
    return (b.href ? `<a class="bar link" href="${b.href}">${inner}</a>` : `<g class="bar${b.links ? " has-links" : ""}">${inner}</g>`) + prodLinks;
  }).join("");
  let ticks = "";
  for (let yr = 2020; yr <= 2027; yr++) ticks += `<path class="thin" d="M${x(yr)} ${axisY - 4} V${axisY + 4}"/><text x="${x(yr)}" y="${axisY + 22}" class="hand small" text-anchor="middle">${yr}</text>`;
  return `
  <figure class="ink-fig wide ink-on-view road">
    <svg viewBox="0 0 1000 ${H}" role="img" aria-label="${esc(t("about.s.road"))}">
      <defs><pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V6" class="hatch-line"/></pattern></defs>
      ${lanesSvg}
      <path class="thin" d="M${LEFT - 10} ${axisY} H${RIGHT}"/>
      ${ticks}
      <path class="today" d="M${x(TODAY)} ${TOP - 16} V${axisY}"/>
      <text x="${x(TODAY)}" y="${TOP - 21}" class="hand small today-label" text-anchor="middle">${esc(t("about.today"))}</text>
      ${bars}
    </svg>
    <figcaption>${esc(t("about.road.note"))}</figcaption>
  </figure>`;
}

// Harvey balls, drawn in ink: 0 empty, 1 half, 2 full.
const ball = (v) => `<svg class="hb" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/>${v === 2 ? `<circle cx="12" cy="12" r="9" class="hb-fill"/>` : v === 1 ? `<path class="hb-fill" d="M12 3 A9 9 0 0 1 12 21 Z"/>` : ""}</svg>`;

function renderCaps(L) {
  const rows = CAPS[L] || CAPS.en;
  const label = (v) => t(v === 2 ? "about.cap.core" : v === 1 ? "about.cap.part" : "about.cap.none");
  return `
      <div class="caps-wrap">
        <table class="caps">
          <thead><tr><th></th>${CAP_COLS.map((c) => `<th scope="col">${esc(c)}</th>`).join("")}</tr></thead>
          <tbody>${rows.map(([cap, vals]) => `
            <tr><th scope="row">${esc(cap)}</th>${vals.map((v, i) => `<td title="${esc(CAP_COLS[i])}: ${esc(label(v))}">${ball(v)}<span class="sr">${esc(label(v))}</span></td>`).join("")}</tr>`).join("")}
          </tbody>
        </table>
      </div>
      <p class="caps-legend">${ball(2)} ${esc(t("about.cap.core"))} <span>·</span> ${ball(1)} ${esc(t("about.cap.part"))} <span>·</span> ${ball(0)} ${esc(t("about.cap.none"))}</p>`;
}

// The workflow: five phases drawn as one line with a loop back from Test, then the detail of each.
function renderFlow(L) {
  const flow = FLOW[L] || FLOW.en;
  const w = 900, n = flow.length, bw = 150, gap = (w - n * bw) / (n - 1);
  const boxes = flow.map((f, i) => {
    const x0 = i * (bw + gap);
    return `
      <path d="M${x0 - 2} 40 H${x0 + bw + 1} M${x0 + bw} 38.5 V97 M${x0 + bw + 2} 96 H${x0} M${x0} 97.5 V39"/>
      <text x="${x0 + 14}" y="62" class="hand small">${String(i + 1).padStart(2, "0")}</text>
      <text x="${x0 + bw / 2}" y="82" class="hand" text-anchor="middle">${esc(f.phase)}</text>
      ${i < n - 1 ? `<path class="thin" d="M${x0 + bw + 4} 68 H${x0 + bw + gap - 4} M${x0 + bw + gap - 10} 63 L${x0 + bw + gap - 4} 68 L${x0 + bw + gap - 10} 73"/>` : ""}`;
  }).join("");
  const xt = 2 * (bw + gap) + bw / 2, xh = 1 * (bw + gap) + bw / 2;
  const loop = `<path class="pencil" d="M${xt} 100 C${xt} 136 ${xh} 136 ${xh} 102"/><path class="pencil" d="M${xh - 5} 110 L${xh} 101 L${xh + 5} 110"/><text x="${(xt + xh) / 2}" y="140" class="hand small" text-anchor="middle">${esc(t("about.flow.loop"))}</text>`;
  return `
      ${inkFigure(boxes + loop, { viewBox: "0 0 900 150", caption: t("about.flow.caption"), cls: "wide flow-fig" })}
      <div class="flow-grid">${flow.map((f, i) => `
        <div class="flow-col ink-on-view">
          <p class="flow-ask">${esc(f.ask)}</p>
          <ul class="flow-tools">${f.tools.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
          <blockquote>${esc(f.quote)}<span>${esc(f.src)}</span></blockquote>
          <a class="flow-seen" href="${f.href}">${esc(f.seen)} →</a>
        </div>`).join("")}
      </div>`;
}

function renderVocab(L) {
  const groups = VOCAB[L] || VOCAB.en;
  return `
      <div class="vocab">${groups.map((g) => `
        <section class="vocab-group">
          <h3>${esc(g.group)}</h3>
          <dl>${g.terms.map(([term, origin, def, seen, href]) => `
            <div class="term">
              <dt>${esc(term)}<span>${esc(origin)}</span></dt>
              <dd>${esc(def)}</dd>
              <dd class="term-seen"><a href="${href}">${esc(seen)}</a></dd>
            </div>`).join("")}
          </dl>
        </section>`).join("")}
      </div>`;
}

const section = (n, title, note = "") => `
      <header class="ab-head"><span class="ab-n">${n}</span><h2>${esc(title)}</h2>${note ? `<p class="ab-note">${esc(note)}</p>` : ""}</header>`;

export function renderAbout() {
  const L = lang();
  const bg = BACKGROUND[L] || BACKGROUND.en;
  const facts = FACTS[L] || FACTS.en;
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

    <nav class="ab-toc">${["about.s.road", "about.s.work", "about.s.caps", "about.s.how", "about.s.vocab", "about.words", "about.background"].map((k, i) => `<a href="#/about" data-jump="ab-${i + 1}"><span>${String(i + 1).padStart(2, "0")}</span>${esc(t(k))}</a>`).join("")}</nav>

    <section class="ab-sec" id="ab-1">
      ${section("01", t("about.s.road"))}
      ${renderRoad(L)}
    </section>

    <section class="ab-sec" id="ab-2">
      ${section("02", t("about.s.work"), t("about.s.work.note"))}
      <h3 class="ab-group">${esc(t("about.engagements"))}</h3>
      <div class="work-grid">${WORK.engagements.map((w) => workCard(w, L)).join("")}</div>
      <h3 class="ab-group">${esc(t("about.ventures"))}</h3>
      <div class="work-grid">${WORK.ventures.map((w) => workCard(w, L)).join("")}</div>
    </section>

    <section class="ab-sec" id="ab-3">
      ${section("03", t("about.s.caps"), t("about.s.caps.note"))}
      ${renderCaps(L)}
    </section>

    <section class="ab-sec" id="ab-4">
      ${section("04", t("about.s.how"), t("about.s.how.note"))}
      ${renderFlow(L)}
    </section>

    <section class="ab-sec" id="ab-5">
      ${section("05", t("about.s.vocab"), t("about.s.vocab.note"))}
      ${renderVocab(L)}
    </section>

    <section class="ab-sec" id="ab-6">
      ${section("06", t("about.words"), t("about.words.note"))}
      <div class="words-grid">${words.map((w) => `
        <details class="word">
          <summary><span class="word-title">${esc(w.title)}</span><span class="word-first">${esc(w.paras[0].split(". ")[0])}.</span><span class="word-open">${esc(t("about.read"))}</span></summary>
          ${w.paras.map((p) => `<p>${esc(p)}</p>`).join("")}
        </details>`).join("")}
      </div>
    </section>

    <section class="ab-sec" id="ab-7">
      ${section("07", t("about.background"))}
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
