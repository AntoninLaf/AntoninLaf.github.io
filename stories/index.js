// The About stories. To add one: create stories/<slug>.js (copy an existing one), add it here.
import stekar from "./stekar.js";
import versytalks from "./versytalks.js";
import versynow from "./versynow.js";
import acteurly from "./acteurly.js";
import goco from "./goco.js";

export const stories = [stekar, versytalks, versynow, acteurly, goco].sort((a, b) => a.order - b.order);

export function findStory(slug) {
  return stories.find((s) => s.slug === slug) || null;
}

// The road on the About page: three lanes, dates from the approved resume.
// start/end are decimal years; end: null means ongoing. href opens a case or a product.
export const road = [
  { lane: "edu", row: 0, start: 2019.67, end: 2022.33, en: ["Université de Montréal", "Bachelor, Communication Sciences"], fr: ["Université de Montréal", "Baccalauréat, sciences de la communication"] },
  { lane: "edu", row: 0, start: 2026.58, end: 2027.58, short: "McGill MMA", en: ["McGill Desautels", "Master of Management in Analytics"], fr: ["McGill Desautels", "Maîtrise en gestion analytique"] },
  { lane: "roles", row: 0, start: 2021.92, end: 2022.67, en: ["Groupe EGS", "Marketing Coordinator"], fr: ["Groupe EGS", "Coordonnateur marketing"] },
  { lane: "roles", row: 0, start: 2023.75, end: 2025.17, en: ["Acteur Social", "Marketing Consultant"], fr: ["Acteur Social", "Consultant marketing"] },
  { lane: "roles", row: 1, start: 2022.42, end: 2023.67, short: "GoCo · TELUS", en: ["GoCo, a TELUS company", "Marketing Manager"], fr: ["GoCo, une entreprise de TELUS", "Gestionnaire marketing"], href: "#/story/goco" },
  { lane: "roles", row: 1, start: 2024.17, end: 2026.5, en: ["STEKAR & Vitralum", "Marketing Director"], fr: ["STEKAR & Vitralum", "Directeur marketing"], href: "#/story/stekar" },
  { lane: "roles", row: 2, start: 2024.92, end: null, en: ["VersyNow", "Product Manager, AI & Growth"], fr: ["VersyNow", "Chef de produit, IA et croissance"], href: "#/p/versynow" },
  { lane: "roles", row: 3, start: 2024.92, end: null, en: ["VersyTalks", "Product Manager, AI & Growth"], fr: ["VersyTalks", "Chef de produit, IA et croissance"], href: "#/p/versytalks" },
  { lane: "ventures", row: 0, start: 2026.0, end: null, en: ["Acteurly", "Marketing expert & reviewer"], fr: ["Acteurly", "Expert marketing et réviseur"], href: "#/p/acteurly" },
  { lane: "ventures", row: 1, start: 2026.5, end: 2026.8, en: ["GLRlight", "Independent build"], fr: ["GLRlight", "Projet indépendant"], href: "#/p/glrlight" }
];
