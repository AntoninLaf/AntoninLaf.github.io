// Acteurly: an AI marketing analyst for Québec small businesses.
import { render as story, mount } from "./story.js";

export default {
  story,
  mount,
  slug: "acteurly",
  order: 1,
  map: { x: 420, y: 200, noteSide: "right" },
  links: {
    live: "https://acteurly.ai/"
  },
  text: {
    en: {
      title: "Acteurly",
      place: "Main street, Québec",
      label: "Main street, Québec",
      small: "Acteurly",
      note: "An analyst for the shops that can't afford one.",
      lede: "A plumber, a clinic, a bakery: their numbers are scattered across Google, Meta and review sites, nobody has time to read them, and an agency costs too much. Acteurly reads a small business's marketing data, explains in plain words what works, and recommends the next actions that fit the owner's budget and hours. I was the marketing expert behind it and the human in the loop: I wrote the playbooks its AI reads before every answer, built the rubrics for judging its recommendations, and reviewed what it produced."
    },
    fr: {
      title: "Acteurly",
      place: "Rue principale, Québec",
      label: "Rue principale, Québec",
      small: "Acteurly",
      note: "Un analyste pour les commerces qui n'en ont pas les moyens.",
      lede: "Un plombier, une clinique, une boulangerie : leurs chiffres sont éparpillés entre Google, Meta et les sites d'avis, personne n'a le temps de les lire, et une agence coûte trop cher. Acteurly lit les données marketing d'une petite entreprise, explique en mots simples ce qui fonctionne et recommande les prochaines actions selon le budget et les heures du propriétaire. J'en ai été l'expert marketing et l'humain dans la boucle : j'ai écrit les playbooks que son IA lit avant chaque réponse, bâti les grilles pour juger ses recommandations et révisé ce qu'elle produisait."
    }
  },
  landmark: () => `
    <path d="M-90 0 H90"/>
    <path d="M-86 0 V-56 H-34 V0"/>
    <path d="M-90 -56 L-82 -70 H-38 L-30 -56"/>
    <path class="thin" d="M-82 -56 V-50 M-70 -56 V-50 M-58 -56 V-50 M-46 -56 V-50"/>
    <path d="M-74 0 V-36 H-58 V0"/>
    <path d="M-52 -36 H-40 V-20 H-52 Z"/>
    <path d="M-26 0 V-66 H30 V0"/>
    <path d="M-30 -66 L-22 -80 H26 L34 -66"/>
    <path class="thin" d="M-18 -66 V-60 M-6 -66 V-60 M6 -66 V-60 M18 -66 V-60"/>
    <path d="M-18 -48 H22 V-22 H-18 Z"/>
    <path class="thin" d="M-12 -40 H16 M-12 -34 H8"/>
    <path d="M38 0 V-52 H88 V0"/>
    <path d="M34 -52 L42 -66 H84 L92 -52"/>
    <path class="thin" d="M46 -52 V-46 M58 -52 V-46 M70 -52 V-46 M82 -52 V-46"/>
    <path d="M46 0 V-32 H60 V0"/>
    <path d="M66 -32 H80 V-18 H66 Z"/>
  `
};
