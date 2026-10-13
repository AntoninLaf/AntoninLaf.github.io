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

// The career route drawn on the About page, oldest first.
export const career = [
  { year: "2021", en: "Groupe EGS | Marketing Coordinator", fr: "Groupe EGS | coordonnateur marketing" },
  { year: "2022", en: "Université de Montréal | BSc", fr: "Université de Montréal | B. Sc." },
  { year: "2022", en: "GoCo, a TELUS company | Marketing Manager", fr: "GoCo, une entreprise de TELUS | gestionnaire marketing", story: "goco" },
  { year: "2023", en: "Acteur Social | Marketing Consultant", fr: "Acteur Social | consultant marketing" },
  { year: "2024", en: "STEKAR & Vitralum | Marketing Director", fr: "STEKAR & Vitralum | directeur marketing", story: "stekar" },
  { year: "2024", en: "VersyNow | Product Manager, AI & Growth", fr: "VersyNow | chef de produit, IA et croissance", story: "versynow" },
  { year: "2026", en: "McGill Desautels | Master of Management in Analytics", fr: "McGill Desautels | maîtrise en gestion analytique" }
];
