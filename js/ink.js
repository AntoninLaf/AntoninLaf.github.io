// Ink helpers shared by the map, the stories and the project pages.

export function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// Every stroke gets pathLength="1" so one dash animation draws it.
export function inkable(svg) {
  return svg
    .replace(/<(path|circle|ellipse|line|polyline) class="([^"]*)"/g, '<$1 pathLength="1" class="inks $2"')
    .replace(/<(path|circle|ellipse|line|polyline) (?!pathLength)/g, '<$1 pathLength="1" class="inks" ');
}

// A figure that draws itself when it scrolls into view.
export function inkFigure(svgInner, { viewBox, caption = "", cls = "" } = {}) {
  return `
  <figure class="ink-fig ink-on-view ${cls}">
    <svg viewBox="${viewBox}" role="img" aria-label="${esc(caption)}">${inkable(svgInner)}</svg>
    ${caption ? `<figcaption>${esc(caption)}</figcaption>` : ""}
  </figure>`;
}

// Hand-drawn numbers with a pencil ring around each.
export function tally(items) {
  return `<div class="tallies">${items.map((it, i) => `
    <div class="tally ink-on-view" style="--i:${i}">
      <svg class="ring" viewBox="0 0 200 90" preserveAspectRatio="none" aria-hidden="true">
        <path pathLength="1" class="inks" d="M18 46 C14 18 70 8 108 10 C160 12 190 26 186 50 C182 76 130 84 92 82 C40 80 12 68 20 44"/>
      </svg>
      <span class="tally-num">${esc(it.value)}</span>
      <span class="tally-label">${esc(it.label)}</span>
    </div>`).join("")}</div>`;
}

// Watch for figures scrolling into view.
let observer = null;
export function armInk(root = document) {
  if (!("IntersectionObserver" in window)) {
    root.querySelectorAll(".ink-on-view").forEach((el) => el.classList.add("inked"));
    return;
  }
  if (!observer) {
    observer = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) { e.target.classList.add("inked"); observer.unobserve(e.target); }
      }
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.15 });
  }
  root.querySelectorAll(".ink-on-view:not(.inked)").forEach((el) => observer.observe(el));
}
