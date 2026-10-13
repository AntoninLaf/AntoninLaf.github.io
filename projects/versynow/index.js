// VersyNow: an agentic post-event brief that never invents a number.
export default {
  slug: "versynow",
  order: 3,
  map: { x: 930, y: 540, noteSide: "left" },
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
      lede: "Event organizers collect plenty of audience data and rarely know what to do with it afterwards. VersyNow's brief is an AI agent that reads the event's data, spots the weak session, reads what attendees wrote there, compares with the organizer's own past events, and writes what happened and what to change next time. Two hard problems: trust, solved by re-checking every claim against the database before the brief is saved, so no number on screen is model-generated; and cost, held at about eight cents a brief."
    },
    fr: {
      title: "VersyNow",
      place: "La salle d'événement",
      label: "La salle d'événement",
      small: "VersyNow",
      note: "Aucun chiffre à l'écran ne vient du modèle.",
      lede: "Les organisateurs d'événements récoltent beaucoup de données sur leur public et savent rarement quoi en faire ensuite. Le compte rendu de VersyNow est un agent IA qui lit les données de l'événement, repère la séance faible, lit ce que les participants y ont écrit, compare avec les événements passés de l'organisateur et écrit ce qui s'est passé et quoi changer la prochaine fois. Deux problèmes difficiles : la confiance, réglée en revérifiant chaque affirmation contre la base de données avant d'enregistrer le compte rendu, si bien qu'aucun chiffre à l'écran ne vient du modèle ; et le coût, tenu à environ huit cents par compte rendu."
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
