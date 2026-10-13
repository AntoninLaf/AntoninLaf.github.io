// VersyTalks: an online debate platform grown from 40 to 10,000 users.
import { render as story, mount } from "./story.js";

export default {
  story,
  mount,
  slug: "versytalks",
  order: 2,
  map: { x: 660, y: 470, noteSide: "right" },
  links: {
    live: "https://versytalks.com/"
  },
  text: {
    en: {
      title: "VersyTalks",
      place: "The debate hall",
      label: "The debate hall",
      small: "VersyTalks",
      note: "40 to 10,000 debaters. Retention was the real fight.",
      lede: "An online debate platform with 40 users and two sides that don't show up without each other: debaters, and the coaches and organizers who bring them. Growth came from content, competitions and partnerships with coaches. The harder problem was keeping people, so every feature was tied to two numbers, time spent on the platform and arguments written, which were also the training data for our own small language model. The community grew to 10,000 users; several bets along the way didn't work, and those taught us the most."
    },
    fr: {
      title: "VersyTalks",
      place: "La salle de débat",
      label: "La salle de débat",
      small: "VersyTalks",
      note: "De 40 à 10 000 débatteurs. La rétention, c'était la vraie bataille.",
      lede: "Une plateforme de débat en ligne avec 40 utilisateurs et deux côtés qui ne viennent pas l'un sans l'autre : les débatteurs, et les entraîneurs et organisateurs qui les amènent. La croissance est venue du contenu, des compétitions et des partenariats avec les entraîneurs. Le vrai problème, c'était de garder les gens : chaque fonctionnalité a donc été rattachée à deux chiffres, le temps passé sur la plateforme et les arguments écrits, qui servaient aussi de données d'entraînement à notre propre petit modèle de langage. La communauté a atteint 10 000 utilisateurs ; plusieurs paris en chemin n'ont pas marché, et ce sont eux qui nous ont le plus appris."
    }
  },
  landmark: () => `
    <path d="M-90 0 H90"/>
    <path d="M-60 0 V-40 H-30 V0"/>
    <path d="M-64 -40 H-26 L-30 -48 H-56 Z"/>
    <path d="M-45 -62 m-7 0 a7 7 0 1 0 14 0 a7 7 0 1 0 -14 0"/>
    <path d="M-58 -48 C-56 -56 -34 -56 -32 -48"/>
    <path d="M30 0 V-40 H60 V0"/>
    <path d="M26 -40 H64 L60 -48 H34 Z"/>
    <path d="M45 -62 m-7 0 a7 7 0 1 0 14 0 a7 7 0 1 0 -14 0"/>
    <path d="M32 -48 C34 -56 56 -56 58 -48"/>
    <path d="M-14 0 V-18 H14 V0"/>
    <path d="M0 -27 m-5 0 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0"/>
    <path d="M-40 -102 H40 V-80 H-40 Z"/>
    <path class="thin" d="M-30 -94 H30 M-30 -87 H14"/>
    <path class="thin" d="M-30 -102 V-108 M30 -102 V-108"/>
  `
};
