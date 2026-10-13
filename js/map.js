// Draws the home map from the project registry.
import { t, lang } from "./i18n.js";

const W = 1200, H = 620;
const ABOUT = { x: 150, y: 520, noteSide: "right" };
const SCALE = 1.15;      // landmarks are drawn in a 180-wide box and scaled up a little
const FOOT = 66;         // the route runs this far under each place, below its label

const deskLandmark = () => `
  <path d="M-80 -30 H80"/>
  <path class="thin" d="M-76 -34 H76"/>
  <path d="M-70 -30 V0 M70 -30 V0"/>
  <path d="M-78 -30 H-58"/>
  <path d="M-68 -30 V-72 L-50 -86"/>
  <path d="M-64 -80 L-42 -100 L-30 -82 Z"/>
  <path d="M-36 -30 L-28 -58 H8 L2 -30 Z"/>
  <path d="M8 -58 H44 L52 -30 H2"/>
  <path class="thin" d="M-26 -50 H0 M-24 -44 H-2 M12 -50 H38 M14 -44 H40"/>
  <path d="M60 -30 V-48 H76 V-30"/>
  <path d="M76 -44 C84 -44 84 -34 76 -34"/>
  <path class="thin" d="M66 -54 C66 -60 72 -60 72 -66"/>
`;

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// Every stroke gets pathLength="1" so a single dash animation draws it.
function inkable(svg) {
  return svg
    .replace(/<path class="([^"]*)"/g, '<path pathLength="1" class="inks $1"')
    .replace(/<path (?!pathLength)/g, '<path pathLength="1" class="inks" ');
}

function place({ x, y, noteSide }, { label, small, note, href, delay, landmark }) {
  const side = noteSide === "left" ? -1 : 1;
  const nx = x + side * 108;
  const ny = y - 78;
  const anchor = side === 1 ? "start" : "end";
  const arrow = side === 1
    ? `M${x + 76} ${y - 56} C${x + 88} ${y - 66} ${x + 94} ${y - 72} ${nx - 8} ${ny + 4}`
    : `M${x - 76} ${y - 56} C${x - 88} ${y - 66} ${x - 94} ${y - 72} ${nx + 8} ${ny + 4}`;
  return `
  <a class="place" href="${esc(href)}" style="--d:${delay}s;--td:${delay + 0.7}s">
    <rect class="hit" x="${x - 108}" y="${y - 136}" width="216" height="194" rx="6"/>
    <g class="lm" transform="translate(${x} ${y}) scale(${SCALE})">${landmark}</g>
    <text class="label" x="${x}" y="${y + 31}" text-anchor="middle">${esc(label)}</text>
    <text class="small" x="${x}" y="${y + 51}" text-anchor="middle">${esc(small)}</text>
    <g class="note">
      <path d="${arrow}" pathLength="1"/>
      <text x="${nx}" y="${ny}" text-anchor="${anchor}">${esc(note)}</text>
    </g>
  </a>`;
}

export function renderMap(projects, stacked = false) {
  if (stacked) return renderStacked(projects);
  const L = lang();
  const pts = [ABOUT, ...projects.map((p) => p.map)];
  let route = `M${pts[0].x} ${pts[0].y + FOOT}`;
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1], b = pts[i];
    const dx = b.x - a.x, dy = b.y - a.y;
    if (Math.abs(dy) > 1.5 * Math.abs(dx)) {
      // a steep leg: swing out to the right so the pencil never crosses a drawing
      const side = Math.max(a.x, b.x) + 170;
      route += ` C${side} ${a.y + FOOT} ${side} ${b.y + FOOT} ${b.x} ${b.y + FOOT}`;
    } else {
      const reach = Math.sign(dx || 1) * Math.max(Math.abs(dx) * 0.5, 140);
      route += ` C${a.x + reach} ${a.y + FOOT} ${b.x - reach} ${b.y + FOOT} ${b.x} ${b.y + FOOT}`;
    }
  }

  let delay = 1.5;
  const step = 0.55;
  const places = [];
  places.push(place(ABOUT, {
    label: t("about.label"), small: t("about.title").toLowerCase(), note: t("about.note"),
    href: "#/about", delay, landmark: inkable(deskLandmark())
  }));
  for (const p of projects) {
    delay += step;
    const tx = p.text[L] || p.text.en;
    places.push(place(p.map, {
      label: tx.label, small: tx.small, note: tx.note,
      href: `#/p/${p.slug}`, delay, landmark: inkable(p.landmark())
    }));
  }

  return `
  <div class="map-wrap">
    <svg class="map" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(t("map.legend"))}">
      <path class="route inks" pathLength="1" d="${route}" style="--d:1.2s"/>
      <g class="compass" transform="translate(1150 62)" style="--d:1.0s;--td:1.6s">
        <circle class="pencil inks" pathLength="1" r="17"/>
        <path class="pencil inks" pathLength="1" d="M0 15 V-11 M-6 -5 L0 -11 L6 -5"/>
        <text class="compass" x="0" y="-24" text-anchor="middle">N</text>
      </g>
      <g class="start" style="--d:2.2s;--td:2.6s">
        <text class="small" x="${ABOUT.x - 104}" y="${ABOUT.y - 150}" text-anchor="start">${esc(t("map.start"))}</text>
        <path class="pencil inks" pathLength="1" d="M${ABOUT.x - 48} ${ABOUT.y - 144} C${ABOUT.x - 20} ${ABOUT.y - 146} ${ABOUT.x - 6} ${ABOUT.y - 140} ${ABOUT.x - 2} ${ABOUT.y - 122}"/>
        <path class="pencil inks" pathLength="1" d="M${ABOUT.x - 10} ${ABOUT.y - 128} L${ABOUT.x - 2} ${ABOUT.y - 122} L${ABOUT.x + 6} ${ABOUT.y - 130}"/>
      </g>
      <text class="small" x="8" y="${H - 4}" text-anchor="start" style="--td:4s">${esc(t("map.legend"))}</text>
      ${places.join("")}
    </svg>
  </div>`;
}

// Narrow screens: the same places, stacked in a column.
function renderStacked(projects) {
  const L = lang();
  const w = 420, gap = 236, x = 210, top = 150;
  const entries = [{ about: true }, ...projects];
  const h = top + entries.length * gap;
  let route = `M${x} ${top + FOOT}`;
  for (let i = 1; i < entries.length; i++) {
    const y0 = top + (i - 1) * gap + FOOT, y1 = top + i * gap + FOOT;
    const bend = i % 2 ? 150 : -150;
    route += ` C${x + bend} ${y0 + 60} ${x + bend} ${y1 - 60} ${x} ${y1}`;
  }
  const places = entries.map((e, i) => {
    const y = top + i * gap;
    const delay = 1.2 + i * 0.4;
    if (e.about) {
      return place({ x, y, noteSide: "right" }, {
        label: t("about.label"), small: t("about.title").toLowerCase(), note: t("about.note"),
        href: "#/about", delay, landmark: inkable(deskLandmark())
      });
    }
    const tx = e.text[L] || e.text.en;
    return place({ x, y, noteSide: "right" }, {
      label: tx.label, small: tx.small, note: tx.note,
      href: `#/p/${e.slug}`, delay, landmark: inkable(e.landmark())
    });
  });
  return `
  <div class="map-wrap stacked">
    <svg class="map" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(t("map.legend"))}">
      <path class="route inks" pathLength="1" d="${route}" style="--d:1.0s"/>
      ${places.join("")}
    </svg>
  </div>`;
}
