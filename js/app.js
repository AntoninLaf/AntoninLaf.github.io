import { t, detectLang, setLang, lang } from "./i18n.js";
import { renderHome, renderAbout, renderProject, renderStory, renderNotFound } from "./pages.js";
import { findProject } from "../projects/index.js";
import { findStory } from "../stories/index.js";
import { armInk } from "./ink.js";
import { renderSpiral, mountSpiral } from "./spiral.js";
import { renderAsk, askFromPage } from "./ask.js";

const host = document.getElementById("sheet-host");
const backLink = document.getElementById("back-link");
const langBtn = document.getElementById("lang-toggle");
const askTab = document.getElementById("ask-tab");
const askPanel = document.getElementById("ask-panel");
const askClose = document.getElementById("ask-close");
const askBody = document.getElementById("ask-body");

const narrow = window.matchMedia("(max-width: 760px)");
const still = window.matchMedia("(prefers-reduced-motion: reduce)");
let cleanup = () => {};      // the spiral's listeners, removed when the page changes
let lastSeen = null;          // the last project opened, so the spiral turns back to it
let prevRoute = null;
let backToAbout = false;
let introPlayed = false;
try { introPlayed = sessionStorage.getItem("intro") === "1"; } catch (_) {}

function route() {
  const h = location.hash.replace(/^#\/?/, "");
  if (h === "" ) return { name: "home" };
  if (h === "about") return { name: "about" };
  if (h === "map") return { name: "map" };
  const m = h.match(/^p\/([a-z0-9-]+)$/);
  if (m) return { name: "project", slug: m[1] };
  const st = h.match(/^story\/([a-z0-9-]+)$/);
  if (st) return { name: "story", slug: st[1] };
  return { name: "404" };
}

function pageTitle(r) {
  const base = "Antonin Laferrière-Mailfait";
  if (r.name === "about") return `${t("about.title")}, ${base}`;
  if (r.name === "map") return `${t("work.map")}, ${base}`;
  if (r.name === "project") { const p = findProject(r.slug); if (p) return `${p.text.en.title}, ${base}`; }
  if (r.name === "story") { const s = findStory(r.slug); if (s) return `${(s.text[lang()] || s.text.en).title}, ${base}`; }
  return base;
}

function render(first) {
  const r = route();
  let html;
  cleanup(); cleanup = () => {};
  let intro = false;
  if (r.name === "home") {
    intro = !introPlayed;
    html = renderSpiral({ intro, flat: narrow.matches || still.matches });
    if (intro) { introPlayed = true; try { sessionStorage.setItem("intro", "1"); } catch (_) {} }
  } else if (r.name === "map") {
    html = renderHome({ intro: false, stacked: narrow.matches });
  } else if (r.name === "about") {
    html = renderAbout();
  } else if (r.name === "project") {
    const p = findProject(r.slug);
    html = p ? renderProject(p) : renderNotFound();
  } else if (r.name === "story") {
    const s = findStory(r.slug);
    html = s ? renderStory(s) : renderNotFound();
  } else {
    html = renderNotFound();
  }

  const old = host.querySelector(".sheet:not(.leaving)");
  if (old && !first) {
    old.classList.add("leaving");
    old.addEventListener("animationend", () => old.remove(), { once: true });
    setTimeout(() => old.remove(), 600);
  } else if (old) {
    old.remove();
  }
  host.insertAdjacentHTML("beforeend", html);
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });

  // A case opened from the spiral goes back to the spiral; opened from About, back to About.
  const same = prevRoute && prevRoute.name === r.name && prevRoute.slug === r.slug;   // a language switch re-renders the same page
  const fromAbout = same ? backToAbout : r.name === "story" && !(prevRoute && (prevRoute.name === "home" || prevRoute.name === "map"));
  backToAbout = fromAbout;
  backLink.hidden = r.name === "home";
  backLink.textContent = fromAbout ? t("story.index") : t("nav.back");
  backLink.setAttribute("href", fromAbout ? "#/about" : "#/");
  armInk(host);
  const sheet = host.querySelector(".sheet:not(.leaving)");
  if (r.name === "project") { const p = findProject(r.slug); if (p && p.mount) p.mount(sheet, lang()); }
  if (r.name === "home") cleanup = mountSpiral(sheet, { intro, focus: lastSeen, rerender: () => render(true) });
  if (r.name === "project" || r.name === "story") lastSeen = r.slug;
  prevRoute = r;
  document.title = pageTitle(r);
}

function paintChrome() {
  const other = lang() === "en" ? "fr" : "en";
  langBtn.innerHTML = lang() === "en" ? `<b>EN</b> / FR` : `EN / <b>FR</b>`;
  langBtn.setAttribute("aria-label", other === "fr" ? "Passer au français" : "Switch to English");
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  renderAsk(askBody);
}

langBtn.addEventListener("click", () => {
  setLang(lang() === "en" ? "fr" : "en");
  paintChrome();
  render(true);
});

const askVeil = document.getElementById("ask-veil");
const callout = document.getElementById("quill-callout");
function openAsk() {
  askPanel.classList.add("open");
  askPanel.setAttribute("aria-hidden", "false");
  askVeil.hidden = false;
  callout.hidden = true;
  setTimeout(() => { const i = document.getElementById("ask-input"); if (i) i.focus(); }, 350);
}
function closeAsk() {
  askPanel.classList.remove("open");
  askPanel.setAttribute("aria-hidden", "true");
  askVeil.hidden = true;
}
askTab.addEventListener("click", openAsk);
askClose.addEventListener("click", closeAsk);
askVeil.addEventListener("click", closeAsk);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAsk();
  const typing = /^(INPUT|TEXTAREA)$/.test(document.activeElement && document.activeElement.tagName);
  if (e.key === "?" && !typing && !askPanel.classList.contains("open")) { e.preventDefault(); openAsk(); }
});
// Any "question I'm happy to take" asks the notebook.
document.addEventListener("click", (e) => {
  const li = e.target.closest(".questions li");
  if (!li) return;
  openAsk();
  setTimeout(() => askFromPage(li.textContent.trim()), 420);
});
// A one-time handwritten nudge toward the quill.
let nudged = false;
try { nudged = sessionStorage.getItem("nudged") === "1"; } catch (_) {}
if (!nudged) {
  setTimeout(() => {
    if (askPanel.classList.contains("open")) return;
    callout.textContent = t("ask.callout");
    callout.hidden = false;
    try { sessionStorage.setItem("nudged", "1"); } catch (_) {}
    setTimeout(() => { callout.hidden = true; }, 9000);
  }, introPlayed ? 2500 : 7000);
}

window.addEventListener("hashchange", () => render(false));
narrow.addEventListener("change", () => { if (["home", "map"].includes(route().name)) render(true); });

setLang(detectLang());
paintChrome();
render(true);
