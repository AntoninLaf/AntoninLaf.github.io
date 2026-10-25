// Draws the home map from the project registry.
import { t, lang } from "./i18n.js";
import { esc, inkable } from "./ink.js";

const W = 1200, H = 660;
const ABOUT = { x: 150, y: 520, noteSide: "above" };
const SCALE = 1.15;      // landmarks are drawn in a 180-wide box and scaled up a little
const FOOT = 96;         // the route runs this far under each place, below its two label lines

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


// A margin note is short lines, not one long one: it must never run across a neighbour.
function noteLines(note, max = 26) {
  const lines = [""];
  for (const w of note.split(" ")) {
    const cur = lines[lines.length - 1];
    if (cur && (cur + " " + w).length > max) lines.push(w);
    else lines[lines.length - 1] = (cur + " " + w).trim();
  }
  return lines;
}

// noteSide: "right" | "left" | "above" — above is for a station with neighbours on both sides.
function place({ x, y, noteSide }, { label, small, note, href, delay, landmark }) {
  const lines = noteLines(note);
  const LH = 20;
  let nx, ny, anchor, arrow;
  if (noteSide === "above") {
    nx = x; anchor = "middle";
    ny = y - 146 - (lines.length - 1) * LH;
    arrow = `M${x + 44} ${y - 108} C${x + 52} ${y - 120} ${x + 50} ${y - 132} ${x + 40} ${y - 141}`;
  } else {
    const side = noteSide === "left" ? -1 : 1;
    nx = x + side * 108;
    ny = y - 78 - (lines.length - 1) * LH;
    anchor = side === 1 ? "start" : "end";
    const ay = y - 78;   // the arrow points at the last line
    arrow = side === 1
      ? `M${x + 76} ${y - 56} C${x + 88} ${y - 66} ${x + 94} ${y - 72} ${nx - 8} ${ay + 4}`
      : `M${x - 76} ${y - 56} C${x - 88} ${y - 66} ${x - 94} ${y - 72} ${nx + 8} ${ay + 4}`;
  }
  const text = lines.map((l, i) => `<tspan x="${nx}" dy="${i ? LH : 0}">${esc(l)}</tspan>`).join("");
  return `
  <a class="place" href="${esc(href)}" style="--d:${delay}s;--td:${delay + 0.7}s">
    <rect class="hit" x="${x - 108}" y="${y - 136}" width="216" height="214" rx="6"/>
    <g class="lm" transform="translate(${x} ${y}) scale(${SCALE})">${landmark}</g>
    <text class="label" x="${x}" y="${y + 31}" text-anchor="middle">${esc(label)}</text>
    <text class="small" x="${x}" y="${y + 51}" text-anchor="middle">${noteLines(small, 27).map((l, i) => `<tspan x="${x}" dy="${i ? LH : 0}">${esc(l)}</tspan>`).join("")}</text>
    <g class="note">
      <path d="${arrow}" pathLength="1"/>
      <text x="${nx}" y="${ny}" text-anchor="${anchor}">${text}</text>
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
      const reach = Math.sign(dx || 1) * Math.max(Math.abs(dx) * 0.6, 190);   // a flat approach, so the pencil passes under the labels
      route += ` C${a.x + reach} ${a.y + FOOT} ${b.x - reach} ${b.y + FOOT} ${b.x} ${b.y + FOOT}`;
    }
  }

  let delay = 1.5;
  const step = 0.55;
  const places = [];
  places.push(place(ABOUT, {
    label: t("about.title"), small: "", note: t("about.note"),
    href: "#/about", delay, landmark: inkable(deskLandmark())
  }));
  for (const p of projects) {
    delay += step;
    const tx = p.text[L] || p.text.en;
    places.push(place(p.map, {
      label: tx.title, small: tx.tagline || tx.label, note: tx.note,
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
        <text class="small" x="${ABOUT.x - 142}" y="${ABOUT.y + FOOT - 24}" text-anchor="start">${esc(t("map.start"))}</text>
        <path class="pencil inks" pathLength="1" d="M${ABOUT.x - 58} ${ABOUT.y + FOOT - 22} C${ABOUT.x - 40} ${ABOUT.y + FOOT - 24} ${ABOUT.x - 22} ${ABOUT.y + FOOT - 18} ${ABOUT.x - 8} ${ABOUT.y + FOOT - 4}"/>
        <path class="pencil inks" pathLength="1" d="M${ABOUT.x - 18} ${ABOUT.y + FOOT - 6} L${ABOUT.x - 8} ${ABOUT.y + FOOT - 4} L${ABOUT.x - 6} ${ABOUT.y + FOOT - 14}"/>
      </g>
      <text class="small" x="8" y="${H - 4}" text-anchor="start" style="--td:4s">${esc(t("map.legend"))}</text>
      ${places.join("")}
    </svg>
  </div>`;
}

// Narrow screens: the same places, stacked in a column.
function renderStacked(projects) {
  const L = lang();
  const w = 420, gap = 256, x = 210, top = 150;
  const entries = [{ about: true }, ...projects];
  const h = top + entries.length * gap;
  let route = `M${x} ${top + FOOT}`;
  for (let i = 1; i < entries.length; i++) {
    const y0 = top + (i - 1) * gap + FOOT, y1 = top + i * gap + FOOT;
    const bend = i % 2 ? 190 : -190;   // a loop to the side, leaving and arriving flat under the labels
    route += ` C${x + bend} ${y0} ${x + bend} ${y1} ${x} ${y1}`;
  }
  const places = entries.map((e, i) => {
    const y = top + i * gap;
    const delay = 1.2 + i * 0.4;
    if (e.about) {
      return place({ x, y, noteSide: "right" }, {
        label: t("about.title"), small: "", note: t("about.note"),
        href: "#/about", delay, landmark: inkable(deskLandmark())
      });
    }
    const tx = e.text[L] || e.text.en;
    return place({ x, y, noteSide: "right" }, {
      label: tx.title, small: tx.tagline || tx.label, note: tx.note,
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
