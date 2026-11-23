// Reduce CAC: how I find, earn and convert organic demand, with examples from across the work.
import { render as story, mount } from "./story.js";

export default {
  story,
  mount,
  slug: "reducecac",
  order: 0.5,
  kind: { en: "Marketing & product growth", fr: "Marketing et croissance produit" },
  tags: ["marketing", "product"],
  map: { x: 385, y: 530, noteSide: "above" },
  links: {},
  text: {
    en: {
      title: "Reduce CAC",
      place: "Organic search, trust and conversion",
      label: "Organic search, trust and conversion",
      small: "Reduce CAC",
      note: "The buyer has more than one way in.",
      lede: "Organic search is my soft spot as a marketer. I like digging into the searches that look too small to bother with until you see who’s making them and what they need to buy. I look for those signals in search results, directories, forums and trade publications, then build the page, the proof and the next step around the way that customer actually buys.",
      tagline: "organic search, trust and conversion",
    },
    fr: {
      title: "Réduire le CAC",
      place: "Recherche organique, confiance et conversion",
      label: "Recherche organique, confiance et conversion",
      small: "Réduire le CAC",
      note: "L’acheteur peut vous trouver de plusieurs façons.",
      lede: "Comme spécialiste du marketing, j’ai un faible pour la recherche organique. J’aime creuser les requêtes qui semblent trop peu populaires pour mériter une page, jusqu’à ce qu’on découvre qui les tape et ce que ces personnes cherchent à acheter. Je repère ces signaux dans les résultats de recherche, les annuaires, les forums et la presse spécialisée. Ensuite, je conçois la page, les preuves et la prochaine étape selon la façon dont le client achète.",
      tagline: "recherche organique, confiance et conversion",
    }
  },
  // A signpost with three ways in, and the magnifying glass that finds them.
  landmark: () => `
    <path d="M-90 0 H90"/>
    <path d="M-20 0 V-112"/>
    <path d="M-20 -104 H38 L50 -94 L38 -84 H-20"/>
    <path d="M-20 -76 H-66 L-78 -66 L-66 -56 H-20"/>
    <path d="M-20 -48 H30 L42 -38 L30 -28 H-20"/>
    <path class="thin" d="M-10 -94 H28 M-58 -66 H-30 M-10 -38 H20"/>
    <path d="M52 -44 a16 16 0 1 0 32 0 a16 16 0 1 0 -32 0"/>
    <path d="M57 -31 L42 -8"/>
    <path class="thin" d="M60 -48 C62 -54 68 -56 72 -54"/>
    <path class="pencil" d="M-34 0 C-30 -6 -26 -6 -22 0 M-14 0 C-10 -5 -6 -5 -2 0"/>
  `
};
