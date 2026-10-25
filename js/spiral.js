// The opening: the work as notebook pages on a spiral binding, turned by scrolling.
// Every project folder (and every About case that has a landmark) becomes a page on its own.
import { t, lang } from "./i18n.js";
import { esc, inkable } from "./ink.js";
import { projects } from "../projects/index.js";
import { stories } from "../stories/index.js";

const FILTERS = ["all", "ai", "product", "marketing"];
let filter = "all";               // per page load; nothing is stored

// The spiral's geometry. One page per STEP degrees, DY pixels lower each time.
const STEP = 60, R = 276, DY = 92;   // R·tan(STEP/2) ≥ half a page, so neighbours never cut into each other

const pick = (o, L) => (o && (o[L] || o.en)) || "";

export function workEntries() {
  const L = lang();
  const fromProjects = projects.map((p) => {
    const tx = p.text[L] || p.text.en;
    return { slug: p.slug, href: `#/p/${p.slug}`, title: tx.title, place: tx.place, line: tx.tagline || tx.label, kind: pick(p.kind, L), tags: p.tags || [], landmark: p.landmark };
  });
  const fromStories = stories.filter((s) => s.landmark).map((s) => {
    const tx = s.text[L] || s.text.en;
    return { slug: s.slug, href: `#/story/${s.slug}`, title: pick(s.org, L) || tx.where, place: pick(s.spot, L) || tx.place, line: tx.title, kind: pick(s.kind, L), tags: s.tags || [], landmark: s.landmark };
  });
  return [...fromProjects, ...fromStories];
}

function visible() {
  const all = workEntries();
  return filter === "all" ? all : all.filter((e) => e.tags.includes(filter));
}

const two = (n) => String(n).padStart(2, "0");

function head() {
  return `
    <header class="spiral-head">
      <h1 class="name">Antonin Laferrière-Mailfait</h1>
      <svg class="name-underline" viewBox="0 0 520 10" preserveAspectRatio="none" aria-hidden="true">
        <path pathLength="1" d="M2 6 C 80 2, 160 9, 260 5 S 440 3, 518 6"/>
      </svg>
      <p class="throughline">${esc(t("hero.throughline"))}</p>
      <nav class="spiral-nav">
        <a class="spiral-about" href="#/about"><b>${esc(t("about.title"))} →</b><span>${esc(t("about.tagline"))}</span></a>
        <a href="#/map">${esc(t("work.map"))}</a>
        <a href="mailto:${esc(t("ask.email"))}">${esc(t("about.contact"))}</a>
      </nav>
    </header>`;
}

function filterBar() {
  const all = workEntries();
  return FILTERS.map((f) => {
    const n = f === "all" ? all.length : all.filter((e) => e.tags.includes(f)).length;
    if (!n) return "";
    return `<button type="button" class="wf${f === filter ? " on" : ""}" data-filter="${f}" aria-pressed="${f === filter}">${esc(t("work." + f))}<span>${n}</span></button>`;
  }).join("");
}

const landmarkSvg = (e) => `<svg class="pg-lm" viewBox="-112 -130 224 142" aria-hidden="true">${inkable(e.landmark())}</svg>`;

export function renderSpiral({ intro, flat }) {
  const list = visible();

  // Phones and reduced motion: the same pages, as a plain list.
  if (flat) {
    return `
    <section class="sheet spiralhome flat ${intro ? "intro" : ""}">
      ${head()}
      <div class="spiral-filters">${filterBar()}</div>
      <ol class="work-list">
        ${list.map((e, i) => `
        <li style="--k:${Math.min(i, 3)}">
          <a href="${esc(e.href)}">
            <span class="pg-n">${two(i + 1)}</span>
            ${landmarkSvg(e)}
            <span class="wt-kind">${esc(e.kind)}</span>
            <span class="wt-title">${esc(e.title)}</span>
            <span class="wt-line">${esc(e.line)}</span>
          </a>
        </li>`).join("")}
      </ol>
    </section>`;
  }

  const pages = list.map((e, i) => `
        <a class="page3d" href="${esc(e.href)}" data-i="${i}" style="--k:${i}" aria-label="${esc(e.title)}: ${esc(e.line)}">
          <span class="face front">
            <span class="pg-n">${two(i + 1)}</span>
            <span class="pg-place">${esc(e.place)}</span>
            ${landmarkSvg(e)}
            <span class="pg-title">${esc(e.title)}</span>
          </span>
          <span class="face back" aria-hidden="true">${landmarkSvg(e)}<span class="pg-back">${esc(e.title)}</span></span>
        </a>`).join("");

  const texts = list.map((e, i) => `
        <a class="wt" href="${esc(e.href)}" data-i="${i}" tabindex="-1" aria-hidden="true">
          <span class="wt-kind">${esc(e.kind)}</span>
          <span class="wt-title${e.title.length > 16 ? " long" : ""}">${esc(e.title)}</span>
          <span class="wt-rule"></span>
          <span class="wt-line">${esc(e.line)}</span>
          <span class="wt-go">${esc(t("work.open"))}</span>
        </a>`).join("");

  return `
  <section class="sheet spiralhome ${intro ? "intro" : ""}">
    <div class="spiral-scroller">
      <div class="spiral-stage">
        ${head()}
        <div class="spiral-body">
          <div class="spiral-left">
            <p class="margin-note spiral-hint">${esc(t("work.hint"))}</p>
            <p class="wc"><span class="wc-label">${esc(t("work.selected"))}</span><span class="wc-n">01</span><span class="wc-of">${esc(t("work.of"))} ${list.length}</span></p>
          </div>
          <div class="spiral-view">
            <div class="ring">${pages}</div>
          </div>
          <div class="spiral-right">${texts}</div>
        </div>
        <div class="spiral-filters">${filterBar()}</div>
      </div>
    </div>
  </section>`;
}

// Bring the spiral to life. Returns a cleanup function for when the page changes.
export function mountSpiral(root, { intro = false, focus = null, rerender } = {}) {
  root.querySelectorAll(".wf").forEach((b) => b.addEventListener("click", () => {
    if (b.dataset.filter === filter) return;
    filter = b.dataset.filter;
    rerender && rerender();
  }));

  const scroller = root.querySelector(".spiral-scroller");
  if (!scroller) return () => {};
  const ring = root.querySelector(".ring");
  const pages = [...root.querySelectorAll(".page3d")];
  const texts = [...root.querySelectorAll(".wt")];
  const counter = root.querySelector(".wc-n");
  const N = pages.length;
  const tilt = Math.atan2(DY, R * STEP * Math.PI / 180) * 180 / Math.PI;

  // Each page on the helix.
  pages.forEach((el, i) => { el.style.transform = `translateY(${i * DY}px) rotateY(${i * STEP}deg) translateZ(${R}px)`; });

  // The pencil route, wound through the binding: the map's dashed road, now a spiral.
  const dashes = [];
  const PER = 9;
  for (let k = -PER; k <= (N - 1) * PER + PER; k++) {
    const u = k / PER;
    dashes.push(`<i class="dash" style="transform:translateY(${(u * DY + 118).toFixed(1)}px) rotateY(${(u * STEP).toFixed(2)}deg) translateZ(${R - 6}px) rotateZ(${tilt.toFixed(1)}deg)"></i>`);
  }
  ring.insertAdjacentHTML("afterbegin", dashes.join(""));

  const view = root.querySelector(".spiral-view");
  let step = 0, top = 0, p = 0, target = 0, raf = 0, last = -1, snapTimer = 0, fit = 1;
  const t0 = performance.now();
  const INTRO_MS = 2000;

  const layout = () => {
    step = Math.max(300, Math.round(window.innerHeight * 0.5));
    scroller.style.height = `${window.innerHeight + Math.max(0, N - 1) * step}px`;
    top = scroller.getBoundingClientRect().top + window.scrollY;
    const v = view.getBoundingClientRect();          // the spiral scales to the room it has
    fit = Math.max(0.6, Math.min(1.25, v.width / 620, v.height / 520));
    last = -1;
  };
  const clamp = (v) => Math.max(0, Math.min(N - 1, v));
  const read = () => { target = step ? clamp((window.scrollY - top) / step) : 0; };
  const go = (i, smooth = true) => window.scrollTo({ top: top + clamp(i) * step, behavior: smooth ? "smooth" : "instant" });

  const frame = (now) => {
    raf = requestAnimationFrame(frame);
    const d = target - p;
    p = Math.abs(d) < 0.0005 ? target : p + d * 0.13;
    let spin = 0, drop = 0;
    const el = now - t0;
    if (intro && el < INTRO_MS) {
      const e = 1 - Math.pow(1 - el / INTRO_MS, 3);
      spin = (1 - e) * -160;
      drop = (1 - e) * -140;
    } else if (p === last) return;
    last = p;

    ring.style.transform = `scale3d(${fit}, ${fit}, ${fit}) translateY(${(-p * DY + drop).toFixed(1)}px) rotateY(${(-p * STEP + spin).toFixed(2)}deg)`;
    pages.forEach((pg, i) => {
      const rel = i - p;
      const ang = rel * STEP + spin;
      const a = Math.abs((((ang % 360) + 540) % 360) - 180);            // 0 = facing you
      const v = Math.max(0, 1 - Math.max(0, Math.abs(rel) - 2.1) / 1.0);  // fade far above and below
      const facing = a < 20 ? 1 : a < 100 ? 1 - (a - 20) / 80 * 0.4 : 0.62;
      pg.style.setProperty("--o", (v * facing).toFixed(3));
      pg.classList.toggle("front", a < 80 && v > 0.2);
    });
    texts.forEach((tx, i) => {
      const rel = i - p;
      const o = Math.max(0, 1 - Math.abs(rel) * 0.84);
      const s = 1 - Math.min(Math.abs(rel), 1) * 0.16;
      tx.style.transform = `translateY(calc(-50% + ${(rel * 250).toFixed(1)}px)) scale(${s.toFixed(3)})`;
      tx.style.opacity = o.toFixed(3);
      tx.classList.toggle("on", Math.abs(rel) < 0.5);
    });
    if (counter) counter.textContent = two(Math.round(p) + 1);
  };

  const onScroll = () => {
    read();
    clearTimeout(snapTimer);
    snapTimer = setTimeout(() => {
      const n = Math.round(target);
      if (Math.abs(target - n) > 0.02 && window.scrollY < top + (N - 1) * step + 2) go(n);
    }, 170);
  };
  const onResize = () => { layout(); read(); };
  const onKey = (e) => {
    if (document.querySelector(".ask-panel.open")) return;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test((document.activeElement || {}).tagName)) return;
    const cur = Math.round(target);
    if (["ArrowDown", "ArrowRight", "PageDown"].includes(e.key)) { e.preventDefault(); go(cur + 1); }
    else if (["ArrowUp", "ArrowLeft", "PageUp"].includes(e.key)) { e.preventDefault(); go(cur - 1); }
    else if (e.key === "Enter" && !(document.activeElement && document.activeElement.closest("a, button"))) { location.hash = pages[cur].getAttribute("href"); }
  };

  // A page at the side turns to the front first; the front page opens.
  pages.forEach((pg, i) => {
    pg.addEventListener("click", (e) => { if (Math.round(p) !== i) { e.preventDefault(); go(i); } });
    pg.addEventListener("focus", () => go(i));
  });

  layout();
  const at = focus ? workEntries().filter((e) => filter === "all" || e.tags.includes(filter)).findIndex((e) => e.slug === focus) : -1;
  if (at > 0) { go(at, false); read(); p = target; }
  else read();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);
  document.addEventListener("keydown", onKey);
  raf = requestAnimationFrame(frame);

  return () => {
    cancelAnimationFrame(raf);
    clearTimeout(snapTimer);
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onResize);
    document.removeEventListener("keydown", onKey);
  };
}
