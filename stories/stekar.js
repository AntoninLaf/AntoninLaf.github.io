export default {
  slug: "stekar",
  order: 1,
  years: "2024 – 2026",
  // On the spiral: the case gets a page of its own.
  org: { en: "STEKAR & Vitralum", fr: "STEKAR & Vitralum" },
  spot: { en: "Industrial B2B", fr: "B2B industriel" },
  kind: { en: "Engagement · Marketing Director", fr: "Mandat · Directeur marketing" },
  tags: ["marketing"],
  // A glass curtain wall going up, and the crane that lifts it.
  landmark: () => `
    <path d="M-92 0 H92"/>
    <path d="M-64 0 V-92 H8 V0"/>
    <path class="thin" d="M-46 -92 V0 M-28 -92 V0 M-10 -92 V0 M-64 -23 H8 M-64 -46 H8 M-64 -69 H8"/>
    <path class="thin" d="M-58 -78 L-52 -86 M-40 -54 L-34 -62 M-22 -30 L-16 -38"/>
    <path d="M38 0 V-100 M50 0 V-100"/>
    <path class="thin" d="M38 -8 L50 -20 L38 -32 L50 -44 L38 -56 L50 -68 L38 -80 L50 -92"/>
    <path d="M18 -100 H90"/>
    <path class="thin" d="M44 -100 V-114 M44 -114 L20 -100 M44 -114 L88 -100"/>
    <path d="M18 -106 H28 V-100 H18 Z"/>
    <path class="thin" d="M76 -100 V-64"/>
    <path d="M71 -64 H81 V-55 H71 Z"/>
  `,
  text: {
    en: {
      title: "Building an inbound acquisition engine from the ground up",
      where: "STEKAR & Vitralum · Marketing Director",
      place: "Industrial B2B, Québec and the United States",
      note: "Fewer, cheaper leads was the brief. A system that keeps producing them was the job.",
      situation: "A premium industrial materials company with almost no inbound leads. The few that came in cost too much, and sales depended on outbound effort and on luck. Architects and specifiers decide what gets installed on a building, and none of them were finding us.",
      did: [
        "Built the inbound system from zero: conversion paths on the website, a content strategy, paid campaigns, and tradeshows chosen for who walks the floor rather than for the size of the hall.",
        "Opened an online Lunch & Learn booking flow for architects and specifiers, so the sales conversation starts with an education session they asked for.",
        "Grew website traffic about 1,000% with AI-assisted SEO and content, earning visibility in AI search answers.",
        "Measured brand recognition two ways, branded search and a survey, so the result couldn't be argued with."
      ],
      changed: "Three to four qualified inquiries a week, by phone and through the website. Cost per lead down 15 percent. Brand recognition up 57 percent year over year. The Lunch & Learn flow brought in leads from the United States and opened that market.",
      judgment: "Lowering the cost of a lead wasn't enough. The real job was creating a system that keeps producing them without me in the room.",
      questions: [
        "How did you decide which channels to build first, and which to skip?",
        "What would you cut with half the budget?",
        "Why Lunch & Learns rather than more ads?"
      ],
      tallies: [
        { value: "3–4", label: "qualified inquiries a week" },
        { value: "−15%", label: "cost per lead" },
        { value: "+57%", label: "brand recognition, year over year" },
        { value: "≈1,000%", label: "website traffic growth" }
      ],
      diagram: {
        channels: ["Website", "Content", "Paid ads", "Tradeshows", "Lunch & Learn"],
        output: "3–4 inquiries a week",
        usa: "leads from the US",
        caption: "Five channels built from zero, converging on one pipe."
      }
    },
    fr: {
      title: "Bâtir un moteur d'acquisition entrante à partir de zéro",
      where: "STEKAR & Vitralum · directeur marketing",
      place: "B2B industriel, Québec et États-Unis",
      note: "Le mandat : des leads moins chers. Le vrai travail : un système qui continue d'en produire.",
      situation: "Un fabricant de matériaux industriels haut de gamme, presque sans leads entrants. Les rares qui arrivaient coûtaient trop cher, et les ventes dépendaient de la prospection et de la chance. Les architectes et les prescripteurs décident de ce qui s'installe sur un bâtiment, et aucun d'eux ne nous trouvait.",
      did: [
        "Bâti le système inbound à partir de zéro : parcours de conversion sur le site, stratégie de contenu, campagnes payantes et salons choisis pour qui arpente les allées plutôt que pour la taille de la salle.",
        "Ouvert une réservation en ligne de Lunch & Learn pour architectes et prescripteurs : la conversation de vente commence par une séance de formation qu'ils ont demandée.",
        "Fait croître le trafic du site d'environ 1 000 % grâce au SEO et au contenu assistés par l'IA, avec une visibilité dans les réponses des moteurs d'IA.",
        "Mesuré la notoriété de deux façons, recherches de marque et sondage, pour que le résultat soit incontestable."
      ],
      changed: "Trois à quatre demandes qualifiées par semaine, par téléphone et par le site. Coût par lead en baisse de 15 pour cent. Notoriété en hausse de 57 pour cent d'une année à l'autre. Les Lunch & Learn ont amené des leads des États-Unis et ouvert ce marché.",
      judgment: "Faire baisser le coût d'un lead ne suffisait pas. Le vrai travail, c'était un système qui continue d'en produire sans moi dans la pièce.",
      questions: [
        "Comment avez-vous choisi les canaux à bâtir en premier, et ceux à laisser tomber ?",
        "Que couperiez-vous avec la moitié du budget ?",
        "Pourquoi des Lunch & Learn plutôt que plus de publicité ?"
      ],
      tallies: [
        { value: "3–4", label: "demandes qualifiées par semaine" },
        { value: "−15 %", label: "coût par lead" },
        { value: "+57 %", label: "notoriété, d'une année à l'autre" },
        { value: "≈1 000 %", label: "de croissance du trafic web" }
      ],
      diagram: {
        channels: ["Site web", "Contenu", "Publicité", "Salons", "Lunch & Learn"],
        output: "3–4 demandes par semaine",
        usa: "leads des États-Unis",
        caption: "Cinq canaux bâtis de zéro, qui convergent vers un seul tuyau."
      }
    }
  },
  // 900 x 300
  diagram(d) {
    const ys = [40, 90, 140, 190, 240];
    const lines = d.channels.map((c, i) => `
      <text x="40" y="${ys[i] + 6}" class="hand">${c}</text>
      <path class="${i === 4 ? "" : ""}" d="M235 ${ys[i]} C330 ${ys[i]} 380 ${140 + (ys[i] - 140) * 0.35} 455 ${140 + (ys[i] - 140) * 0.12}"/>`).join("");
    return `
      ${lines}
      <path d="M452 92 L560 118 V162 L452 188 Z"/>
      <path class="thin" d="M560 130 H640 M560 150 H640"/>
      <path d="M640 118 H690 V162 H640 Z"/>
      <path class="thin" d="M700 140 H740"/>
      <path d="M740 140 L732 134 M740 140 L732 146"/>
      <path d="M760 118 H860 V162 H760 Z"/>
      <path class="thin" d="M760 118 L810 146 L860 118"/>
      <text x="810" y="190" class="hand" text-anchor="middle">${d.output}</text>
      <path class="pencil" d="M170 262 C210 262 230 252 236 244"/>
      <text x="40" y="282" class="hand small">${d.usa}</text>`;
  }
};
