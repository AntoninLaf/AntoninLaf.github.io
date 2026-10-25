// VersyNow: an agentic post-event brief that never invents a number.
import { render as story, mount } from "./story.js";

export default {
  story,
  mount,
  slug: "versynow",
  order: 3,
  kind: { en: "AI product & go-to-market · Product Manager", fr: "Produit IA et mise en marché · Chef de produit" },
  tags: ["product", "ai"],
  map: { x: 930, y: 540, noteSide: "above" },
  links: {
    live: "https://versynow.com/"
  },
  text: {
    en: {
      title: "VersyNow",
      place: "The event hall",
      label: "The event hall",
      small: "VersyNow",
      note: "No number on screen is model-generated.",
      lede: "VersyNow is a Québec-built platform for professional event engagement and audience analysis: the period before an event, live participation, and the analysis and follow-up afterwards. Organizers told us what they were really buying: who was in the room and why, which themes kept coming back, and how to make the next event better. So the product became an engagement-and-report platform, with Q&A and polls serving the report.\n\nI own the roadmap and lead its AI features. The deepest one is the post-event brief: an agent that reads the event's data, finds the weak session, reads what attendees wrote there, compares with the organizer's own past events, and writes what happened and what to change, with every number re-checked against the database before an organizer sees it, at about eight cents a brief.",
      tagline: "live Q&A and audience insight for events",
    },
    fr: {
      title: "VersyNow",
      place: "La salle d'événement",
      label: "La salle d'événement",
      small: "VersyNow",
      note: "Aucun chiffre à l'écran ne vient du modèle.",
      lede: "VersyNow est une plateforme québécoise d'engagement et d'analyse du public pour les événements professionnels : la période avant l'événement, la participation en direct, puis l'analyse et le suivi. Les organisateurs nous ont dit ce qu'ils achetaient vraiment : qui était dans la salle et pourquoi, quels thèmes revenaient, et comment rendre le prochain événement meilleur. Le produit est donc devenu une plateforme d'engagement et de rapport, où le Q&A et les sondages servent le rapport.\n\nJ'en tiens la feuille de route et je mène ses fonctions d'IA. La plus profonde est le compte rendu post-événement : un agent qui lit les données de l'événement, trouve la séance faible, lit ce que les participants y ont écrit, compare avec les événements passés de l'organisateur et écrit ce qui s'est passé et quoi changer, chaque chiffre revérifié contre la base de données avant qu'un organisateur le voie, pour environ huit cents par compte rendu.",
      tagline: "Q&A en direct et compréhension du public",
    }
  },
  landmark: () => `
    <path d="M-90 0 H90"/>
    <path d="M-30 -106 H30 V-72 H-30 Z"/>
    <path class="thin" d="M-20 -94 H20 M-20 -88 H10 M-20 -82 H16"/>
    <path d="M0 -72 V-62"/>
    <path d="M-60 -54 V-62 H60 V-54 H-60 Z"/>
    <path d="M-46 -82 m-6 0 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0"/>
    <path d="M-56 -62 C-54 -72 -38 -72 -36 -62"/>
    <path class="thin" d="M-70 -34 a5 5 0 0 1 10 0 M-54 -34 a5 5 0 0 1 10 0 M-38 -34 a5 5 0 0 1 10 0 M-22 -34 a5 5 0 0 1 10 0 M-6 -34 a5 5 0 0 1 10 0 M10 -34 a5 5 0 0 1 10 0 M26 -34 a5 5 0 0 1 10 0 M42 -34 a5 5 0 0 1 10 0 M58 -34 a5 5 0 0 1 10 0"/>
    <path class="thin" d="M-62 -20 a5 5 0 0 1 10 0 M-46 -20 a5 5 0 0 1 10 0 M-30 -20 a5 5 0 0 1 10 0 M-14 -20 a5 5 0 0 1 10 0 M2 -20 a5 5 0 0 1 10 0 M18 -20 a5 5 0 0 1 10 0 M34 -20 a5 5 0 0 1 10 0 M50 -20 a5 5 0 0 1 10 0"/>
    <path class="thin" d="M-70 -6 a5 5 0 0 1 10 0 M-54 -6 a5 5 0 0 1 10 0 M-38 -6 a5 5 0 0 1 10 0 M-22 -6 a5 5 0 0 1 10 0 M-6 -6 a5 5 0 0 1 10 0 M10 -6 a5 5 0 0 1 10 0 M26 -6 a5 5 0 0 1 10 0 M42 -6 a5 5 0 0 1 10 0 M58 -6 a5 5 0 0 1 10 0"/>
    <path class="thin" d="M24 -22 L30 -36"/>
    <path d="M28 -54 H46 V-42 H36 L32 -38 V-42 H28 Z"/>
    <text x="37" y="-44" class="small" text-anchor="middle" style="font-size:11px">?</text>
  `
};
