import { t, detectLang, setLang, lang } from "./i18n.js";
import { renderHome, renderAbout, renderProject, renderNotFound } from "./pages.js";
import { findProject } from "../projects/index.js";

const host = document.getElementById("sheet-host");
const backLink = document.getElementById("back-link");
const langBtn = document.getElementById("lang-toggle");
const askTab = document.getElementById("ask-tab");
const askPanel = document.getElementById("ask-panel");
const askClose = document.getElementById("ask-close");
const askBody = document.getElementById("ask-body");

const narrow = window.matchMedia("(max-width: 760px)");
let introPlayed = false;
try { introPlayed = sessionStorage.getItem("intro") === "1"; } catch (_) {}

function route() {
  const h = location.hash.replace(/^#\/?/, "");
  if (h === "" ) return { name: "home" };
  if (h === "about") return { name: "about" };
  const m = h.match(/^p\/([a-z0-9-]+)$/);
  if (m) return { name: "project", slug: m[1] };
  return { name: "404" };
}

function pageTitle(r) {
  const base = "Antonin Laferrière-Mailfait";
  if (r.name === "about") return `${t("about.title")}, ${base}`;
  if (r.name === "project") { const p = findProject(r.slug); if (p) return `${p.text.en.title}, ${base}`; }
  return base;
}

function render(first) {
  const r = route();
  let html;
  if (r.name === "home") {
    const intro = !introPlayed;
    html = renderHome({ intro, stacked: narrow.matches });
    if (intro) { introPlayed = true; try { sessionStorage.setItem("intro", "1"); } catch (_) {} }
  } else if (r.name === "about") {
    html = renderAbout();
  } else if (r.name === "project") {
    const p = findProject(r.slug);
    html = p ? renderProject(p) : renderNotFound();
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

  backLink.hidden = r.name === "home";
  backLink.textContent = t("nav.back");
  document.title = pageTitle(r);
}

function paintChrome() {
  const other = lang() === "en" ? "fr" : "en";
  langBtn.innerHTML = lang() === "en" ? `<b>EN</b> / FR` : `EN / <b>FR</b>`;
  langBtn.setAttribute("aria-label", other === "fr" ? "Passer au français" : "Switch to English");
  askTab.textContent = t("ask.tab");
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  askBody.innerHTML = `
    <p class="margin-note">${t("ask.setup")}</p>
    <input class="ask-input" type="text" placeholder="${t("ask.placeholder")}" disabled>
    <p style="margin-top:18px"><a class="btn" href="mailto:${t("ask.email")}">${t("ask.email")}</a></p>`;
}

langBtn.addEventListener("click", () => {
  setLang(lang() === "en" ? "fr" : "en");
  paintChrome();
  render(true);
});

askTab.addEventListener("click", () => {
  askPanel.classList.add("open");
  askPanel.setAttribute("aria-hidden", "false");
});
askClose.addEventListener("click", () => {
  askPanel.classList.remove("open");
  askPanel.setAttribute("aria-hidden", "true");
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape") askClose.click(); });

window.addEventListener("hashchange", () => render(false));
narrow.addEventListener("change", () => { if (route().name === "home") render(true); });

setLang(detectLang());
paintChrome();
render(true);
