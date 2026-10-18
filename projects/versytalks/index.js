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
      note: "Participation is not a business. Progress is.",
      lede: "A debate platform that had attention but not a business: peak weeks of about 2,500 users, and revenue that stayed low even at low prices. Live discussions, prizes, leaderboards, an argument arena and repeated surveys all shipped; none of it changed what a debater was willing to pay for, because the experience competed with free communities. The direction changed to a competition ecosystem: tournaments and workshops, practice rooms and AI evaluations, a coach marketplace, teams and program licences, a debate assessment and twelve drills. Sales increased substantially afterwards.",
      tagline: "a debate platform grown from 40 to 10,000 users",
    },
    fr: {
      title: "VersyTalks",
      place: "La salle de débat",
      label: "La salle de débat",
      small: "VersyTalks",
      note: "La participation n'est pas un modèle d'affaires. Le progrès, oui.",
      lede: "Une plateforme de débat qui avait l'attention, mais pas un modèle d'affaires : des semaines de pointe à environ 2 500 utilisateurs, et des revenus restés bas même à bas prix. Discussions en direct, prix, classements, une arène d'arguments et des sondages répétés ont tous été livrés ; rien n'a changé ce qu'un débatteur était prêt à payer, parce que l'expérience rivalisait avec des communautés gratuites. La direction est passée à un écosystème de compétition : tournois et ateliers, salles de pratique et évaluations IA, un marché d'entraîneurs, des équipes et des licences programme, une évaluation de débat et douze exercices. Les ventes ont augmenté substantiellement ensuite.",
      tagline: "une plateforme de débat passée de 40 à 10 000 utilisateurs",
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
