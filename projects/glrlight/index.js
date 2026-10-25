// GLRlight: supplier risk from the UK public register.
import { render as story } from "./story.js";

export default {
  story,
  slug: "glrlight",
  order: 4,
  kind: { en: "Independent build · Analytics & AI", fr: "Projet indépendant · Analytique et IA" },
  tags: ["ai"],
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
      note: "Before you sign with a company, see what its public records say.",
      lede: "Before you take on a new supplier or client, you want to know if they are in trouble. In the UK, the warning signs are public: accounts filed late, directors walking out, new loans secured against the business, a notice that the company is about to be closed down. But they sit in government records written in legal language, and the paid credit checks are priced for large purchasing teams. So most small businesses check nothing.\n\nGLRlight does the reading for you. Type a company's name and, in about a second, it reads the company's public record and answers green, amber or red, with every warning sign dated, sourced and paired with its most likely innocent explanation. Then an AI assistant goes back and digs into whatever looked unusual. It does not predict bankruptcy; it tells you whether paying for a proper check is worth it.",
      tagline: "checks a UK company for warning signs before you sign with it",
    },
    fr: {
      title: "GLRlight",
      place: "City de Londres",
      label: "City de Londres",
      small: "GLRlight",
      note: "Avant de signer avec une entreprise, voyez ce que disent ses dossiers publics.",
      lede: "Avant de prendre un nouveau fournisseur ou un nouveau client, on veut savoir s'il est en difficulté. Au Royaume-Uni, les signaux d'alerte sont publics : des comptes déposés en retard, des administrateurs qui partent, de nouveaux prêts garantis sur l'entreprise, un avis annonçant sa fermeture prochaine. Mais ils dorment dans des registres gouvernementaux écrits en langage juridique, et les vérifications de crédit payantes sont tarifées pour les grandes équipes d'achat. Alors la plupart des petites entreprises ne vérifient rien.\n\nGLRlight fait la lecture à votre place. Tapez le nom d'une entreprise et, en une seconde environ, il lit son dossier public et répond vert, ambre ou rouge, chaque signal daté, sourcé et accompagné de son explication innocente la plus probable. Puis un assistant IA retourne creuser ce qui semblait inhabituel. Il ne prédit pas la faillite ; il vous dit si payer pour une vraie vérification en vaut la peine.",
      tagline: "repère les signaux d'alerte d'une entreprise britannique avant de signer",
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
