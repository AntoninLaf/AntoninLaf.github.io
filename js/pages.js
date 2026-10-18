import { t, lang } from "./i18n.js";
import { renderMap } from "./map.js";
import { esc, inkFigure, tally } from "./ink.js";
import { projects } from "../projects/index.js";
import { stories, career } from "../stories/index.js";
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

// The career route: a pencil road with a stop per chapter.
function renderCareer() {
  const L = lang();
  const W = 900, n = career.length;
  const x0 = 60, x1 = W - 60;
  const step = (x1 - x0) / (n - 1);
  const road = `M${x0} 150 C${x0 + step * 0.6} 120 ${x0 + step * 1.2} 170 ${x0 + step * 2} 150 S${x0 + step * 3.4} 150 ${x0 + step * 4} 150 S${x0 + step * 5.6} 120 ${x0 + step * 6} 150`;
  const stops = career.map((c, i) => {
    const x = x0 + step * i;
    const up = i % 2 === 0;
    const label = c[L] || c.en;
    const [org, role] = label.split(" | ");
    const y = up ? 92 : 212;
    const href = c.story ? `#/story/${c.story}` : "";
    const inner = `
      <circle cx="${x}" cy="150" r="${c.story ? 7 : 5}" class="${c.story ? "" : "thin"}"/>
      <path class="thin" d="M${x} ${up ? 143 : 157} V${up ? y + 26 : y - 36}"/>
      <text x="${x}" y="${y - 18}" class="hand small" text-anchor="middle">${esc(c.year)}</text>
      <text x="${x}" y="${y + 4}" class="hand" text-anchor="middle">${esc(org)}</text>
      <text x="${x}" y="${y + 22}" class="hand small" text-anchor="middle">${esc(role || "")}</text>`;
    return href
      ? `<a class="stop" href="${href}"><rect class="hit" x="${x - 70}" y="${y - 34}" width="140" height="70" rx="6"/>${inner}</a>`
      : `<g class="stop quiet">${inner}</g>`;
  }).join("");
  return `
  <figure class="ink-fig wide ink-on-view career">
    <svg viewBox="0 0 ${W} 280" role="img" aria-label="${esc(t("about.route"))}">
      <path pathLength="1" class="inks route" d="${road}"/>
      ${stops.replace(/<(path|circle) /g, '<$1 pathLength="1" class="inks" ').replace(/class="inks" class="/g, 'class="inks ')}
    </svg>
    <figcaption>${esc(t("about.route.note"))}</figcaption>
  </figure>`;
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

const INDEPENDENT = {
  en: [
    { slug: "glrlight", title: "GLRlight: turning corporate filings into explainable counterparty risk signals", paras: [
      "Corporate filings contain signals that are easy to overlook in isolation. GLRlight examines their timing, sequence and concentration to help people decide where further diligence is warranted.",
      "A rules engine evaluates sixteen signals across filing behaviour, governance, director history, ownership, security interests and register events. It aggregates them into a green, amber or red screening band, with the underlying evidence visible. An AI-generated memo explains what changed, why it may matter, plausible benign explanations and specific questions to ask the counterparty.",
      "The core design principle: make the evidence inspectable, the uncertainty explicit and the next questions actionable. GLRlight supports human judgment; its screening bands are not credit ratings."
    ] },
    { slug: "acteurly", title: "Acteurly: an accessible AI agency for small businesses", paras: [
      "Marketing is often the capability gap that limits a small business's growth. Acteurly learns the business, interprets its marketing data and turns that understanding into priorities suited to the owner's budget, capacity and objectives. I supplied the marketing judgment behind it: the playbooks its AI consults, the evaluation rubrics, and the review of its recommendations as the human in the loop."
    ] }
  ],
  fr: [
    { slug: "glrlight", title: "GLRlight : transformer les dépôts d'entreprise en signaux de risque de contrepartie explicables", paras: [
      "Les dépôts d'entreprise contiennent des signaux faciles à négliger isolément. GLRlight examine leur chronologie, leur séquence et leur concentration pour aider à décider où une vérification plus poussée est justifiée.",
      "Un moteur de règles évalue seize signaux couvrant le comportement de dépôt, la gouvernance, l'historique des administrateurs, l'actionnariat, les sûretés et les événements du registre. Il les agrège en une bande de filtrage verte, ambre ou rouge, avec les preuves sous-jacentes visibles. Un mémo généré par IA explique ce qui a changé, pourquoi cela peut compter, les explications bénignes plausibles et les questions précises à poser à la contrepartie.",
      "Le principe de conception central : rendre les preuves inspectables, l'incertitude explicite et les prochaines questions actionnables. GLRlight appuie le jugement humain ; ses bandes de filtrage ne sont pas des cotes de crédit."
    ] },
    { slug: "acteurly", title: "Acteurly : une agence IA accessible pour les petites entreprises", paras: [
      "Le marketing est souvent le manque de capacité qui freine la croissance d'une petite entreprise. Acteurly apprend l'entreprise, interprète ses données marketing et transforme cette compréhension en priorités adaptées au budget, à la capacité et aux objectifs du propriétaire. J'ai fourni le jugement marketing derrière : les playbooks que son IA consulte, les grilles d'évaluation et la révision de ses recommandations comme humain dans la boucle."
    ] }
  ]
};

export function renderAbout() {
  const L = lang();
  const bg = BACKGROUND[L] || BACKGROUND.en;
  const ind = INDEPENDENT[L] || INDEPENDENT.en;
  const toc = stories.map((s, i) => {
    const tx = s.text[L] || s.text.en;
    return `
      <li>
        <a href="#/story/${s.slug}">
          <span class="toc-n">${i + 1}.</span>
          <span class="toc-title">${esc(tx.title)}</span>
          <span class="toc-where">${esc(tx.where)}</span>
          <span class="toc-go">${esc(t("about.explore"))}</span>
        </a>
      </li>`;
  }).join("");
  const projects = ind.map((p) => `
      <li>
        <a href="#/p/${p.slug}">
          <span class="toc-title">${esc(p.title)}</span>
          ${p.paras.map((x) => `<span class="toc-para">${esc(x)}</span>`).join("")}
          <span class="toc-go">${esc(t("about.explore.project"))}</span>
        </a>
      </li>`).join("");
  return `
  <section class="sheet">
    <div class="page">
      <aside class="margin"></aside>
      <div class="body">
        <h1>${esc(t("about.title"))}</h1>
        <p class="place-line">${esc(t("about.place"))}</p>
        <p class="lede">${esc(t("about.lede"))}</p>
        <div class="actions">
          <a class="btn" href="mailto:${esc(t("ask.email"))}">${esc(t("about.contact"))}</a>
        </div>
      </div>
      ${renderCareer()}
      <aside class="margin"></aside>
      <div class="body">
        <h2>${esc(t("about.stories"))}</h2>
        <ol class="toc cases">${toc}</ol>
      </div>
      <aside class="margin"></aside>
      <div class="body">
        <h2>${esc(t("about.projects"))}</h2>
        <ul class="toc cases projects">${projects}</ul>
      </div>
      <aside class="margin"><p class="margin-note sticky">${esc(t("about.words.note"))}</p></aside>
      <div class="body words">
        <h2>${esc(t("about.words"))}</h2>
        ${(WORDS[L] || WORDS.en).map((w) => `
        <section class="words-note">
          <h3>${esc(w.title)}</h3>
          ${w.paras.map((p) => `<p>${esc(p)}</p>`).join("")}
        </section>`).join("")}
      </div>
      <aside class="margin"></aside>
      <div class="body">
        <h2>${esc(t("about.background"))}</h2>
        <dl class="background">
          <dt>${esc(t("about.education"))}</dt>${bg.education.map((e) => `<dd>${esc(e)}</dd>`).join("")}
          <dt>${esc(t("about.certifications"))}</dt><dd>${esc(bg.certifications.join(" · "))}</dd>
          <dt>${esc(t("about.languages"))}</dt><dd>${esc(bg.languages)}</dd>
          <dt>${esc(t("about.interests"))}</dt><dd>${esc(bg.interests)}</dd>
        </dl>
      </div>
    </div>
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
        <p class="chapter">${esc(t("about.page"))} ${idx + 1} ${esc(t("story.of"))} ${stories.length}</p>
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
