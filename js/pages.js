import { t, lang } from "./i18n.js";
import { renderMap } from "./map.js";
import { projects } from "../projects/index.js";

const RESUME_PDF = null; // set to "assets/resume.pdf" once the file is in place

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

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

export function renderAbout() {
  const L = lang();
  const stories = [
    { en: "STEKAR: building inbound from nothing", fr: "STEKAR : bâtir l'inbound à partir de rien", where: { en: "Industrial B2B", fr: "B2B industriel" } },
    { en: "VersyTalks: 40 to 10,000, and everything that didn't work", fr: "VersyTalks : de 40 à 10 000, et tout ce qui n'a pas marché", where: { en: "Startup", fr: "Startup" } },
    { en: "VersyNow: an agent people could trust, at cents a brief", fr: "VersyNow : un agent digne de confiance, à quelques cents", where: { en: "AI product", fr: "Produit IA" } },
    { en: "Acteurly: the human in the loop", fr: "Acteurly : l'humain dans la boucle", where: { en: "Marketing + AI", fr: "Marketing + IA" } },
    { en: "GoCo, a TELUS company: a migration without the churn", fr: "GoCo, une entreprise de TELUS : une migration sans l'attrition", where: { en: "Corporate", fr: "Grande entreprise" } }
  ];
  const resume = RESUME_PDF
    ? `<a class="btn" href="${RESUME_PDF}" download>${esc(t("about.resume"))}</a>`
    : `<span class="btn quiet" title="${esc(t("about.resume.note"))}">${esc(t("about.resume"))}</span>`;
  return `
  <section class="sheet">
    <div class="page">
      <aside class="margin">
        <p class="margin-note sticky">${esc(t("about.note"))}</p>
      </aside>
      <div class="body">
        <h1>${esc(t("about.title"))}</h1>
        <p class="place-line">${esc(t("about.place"))}</p>
        <p class="lede">${esc(t("about.lede"))}</p>
        <div class="actions">
          ${resume}
          <a class="btn" href="mailto:${esc(t("ask.email"))}">${esc(t("about.contact"))}</a>
        </div>
        <h2>${esc(t("about.stories"))}</h2>
        <ol class="toc">
          ${stories.map((s) => `<li><span>${esc(s[L] || s.en)}</span><span class="where">${esc(s.where[L] || s.where.en)}</span></li>`).join("")}
        </ol>
        <p class="margin-note" style="margin-top:18px">${esc(t("about.coming"))}</p>
      </div>
    </div>
  </section>`;
}

export function renderProject(p) {
  const L = lang();
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
