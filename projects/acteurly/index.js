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
      note: "An accessible AI agency for small businesses.",
      lede: "For small businesses, marketing is often a capability gap that limits growth: owners lack the time and expertise to define their positioning, decide where to invest and understand whether their efforts are paying off, while an agency is beyond their budget. Acteurly was built as an accessible AI agency that learns the business, interprets its marketing data and turns that understanding into priorities suited to the owner's budget, capacity and growth objectives.\n\nAI made ongoing, personalized support economically viable; its agentic workflow connects gathering context, assessing performance and recommending next steps, with optimized context windows bringing relevant business knowledge and expert playbooks into each response as the business evolves. I supplied the marketing judgment behind that process: writing the playbooks, building evaluation rubrics and reviewing recommendations as the human in the loop to assess whether they were grounded, commercially sound and actionable, giving owners a practical way to start marketing, measure progress and make better growth decisions.",
      tagline: "an accessible AI agency for small businesses",
    },
    fr: {
      title: "Acteurly",
      place: "Rue principale, Québec",
      label: "Rue principale, Québec",
      small: "Acteurly",
      note: "Une agence IA accessible pour les petites entreprises.",
      lede: "Pour les petites entreprises, le marketing est souvent un manque de capacité qui freine la croissance : les propriétaires n'ont ni le temps ni l'expertise pour définir leur positionnement, décider où investir et savoir si leurs efforts rapportent, et une agence dépasse leur budget. Acteurly a été bâti comme une agence IA accessible qui apprend l'entreprise, interprète ses données marketing et transforme cette compréhension en priorités adaptées au budget, à la capacité et aux objectifs de croissance du propriétaire.\n\nL'IA a rendu un accompagnement continu et personnalisé économiquement viable ; son flux agentique relie la collecte du contexte, l'évaluation de la performance et la recommandation des prochaines étapes, avec des fenêtres de contexte optimisées qui apportent à chaque réponse les connaissances pertinentes sur l'entreprise et les playbooks d'expert, à mesure qu'elle évolue. J'ai fourni le jugement marketing derrière ce processus : écrire les playbooks, bâtir les grilles d'évaluation et réviser les recommandations comme humain dans la boucle, pour juger si elles étaient fondées, commercialement sensées et réalisables, et donner aux propriétaires une façon concrète de commencer à faire du marketing, de mesurer leurs progrès et de prendre de meilleures décisions de croissance.",
      tagline: "une agence IA accessible pour les petites entreprises",
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
