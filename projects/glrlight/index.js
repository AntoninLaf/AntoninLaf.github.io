// GLRlight: supplier risk from the UK public register.
import { render as story } from "./story.js";

export default {
  story,
  slug: "glrlight",
  order: 4,
  map: { x: 1020, y: 190, noteSide: "left" },
  links: {
    live: "https://glrlight.vercel.app/",
    code: "https://github.com/AntoninLaf/glrlight"
  },
  text: {
    en: {
      title: "GLRlight",
      place: "City of London",
      label: "City of London",
      small: "GLRlight",
      note: "16 rules, no AI. Carillion came out red.",
      lede: "About five million companies sit on the UK register, and most supplier and client decisions involve no check at all: the credit bureaus are priced for procurement teams and the free register is unreadable. GLRlight reads six Companies House registers in one second, runs sixteen rules over them and returns a green, amber or red verdict with every finding dated and sourced. Then an AI agent goes back and investigates whatever looked unusual."
    },
    fr: {
      title: "GLRlight",
      place: "City de Londres",
      label: "City de Londres",
      small: "GLRlight",
      note: "16 règles, zéro IA. Carillion est sorti rouge.",
      lede: "Environ cinq millions d'entreprises figurent au registre britannique, et la plupart des décisions d'achat ou de vente se prennent sans aucune vérification : les agences de crédit sont tarifées pour les équipes d'approvisionnement, et le registre gratuit est illisible. GLRlight lit six registres de Companies House en une seconde, y applique seize règles et rend un verdict vert, ambre ou rouge, chaque constat daté et sourcé. Puis un agent IA retourne enquêter sur ce qui semblait inhabituel."
    }
  },
  // Drawn in local coordinates: ground line at y=0, x from -90 to 90, up is negative.
  landmark: () => `
    <path d="M-90 0 H90"/>
    <path class="pencil" d="M-88 9 C-78 3 -70 15 -60 9 S-42 3 -32 9"/>
    <path d="M-84 0 V-60 H-42 V0"/>
    <path class="thin" d="M-78 -50 H-48 M-78 -40 H-48 M-78 -30 H-48 M-78 -20 H-48 M-78 -10 H-48"/>
    <path d="M-30 0 V-44 H30 V0"/>
    <path d="M-34 -44 H34"/>
    <path class="thin" d="M-20 -44 V0 M-10 -44 V0 M10 -44 V0 M20 -44 V0"/>
    <path d="M-24 -44 C-24 -80 24 -80 24 -44"/>
    <path d="M-5 -72 V-84 H5 V-72"/>
    <path d="M0 -84 V-92"/>
    <path d="M42 0 C38 -40 50 -70 62 -100 C74 -70 86 -40 82 0"/>
    <path class="thin" d="M46 -30 L72 -70 M44 -50 L66 -84 M78 -30 L52 -70 M80 -50 L58 -84"/>
  `
};
