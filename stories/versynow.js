export default {
  slug: "versynow",
  order: 3,
  years: "2024 – ",
  text: {
    en: {
      title: "An agent people could trust, at cents a brief",
      where: "VersyNow, Product Manager, AI & Growth",
      place: "Event analytics",
      note: "In AI products, the model is rarely the hard part. Deciding what it is not allowed to do is.",
      situation: "Event organizers collect plenty of audience data, questions, polls, satisfaction, and rarely know what to do with it afterwards. VersyNow already computed the facts; it told organizers almost nothing about what they meant. The ask: an AI brief that says what happened and what to change next time.",
      did: [
        "Specified an agent rather than one big prompt: a bounded loop of five to nine tool calls that reads the overview, spots the weak session, drills into it, samples what attendees wrote there, and compares with the organizer's own past events.",
        "Trust, solved by design: every claim carries structured evidence, the metric, its value and its sample size, and the server re-checks each one against the database with eight rules before the brief is saved. A claim that fails is dropped. The agent must also list its own limitations.",
        "Cost, solved by design: the smallest capable model with prompt caching, plus eight independent spending ceilings and a kill switch, so no single one has to be right.",
        "Usefulness, measured: a brief can be truthful and still useless, so a 'shallow' signal flags any brief that never used a session or the organizer's history."
      ],
      changed: "No number on screen is model-generated. A brief costs about eight cents, roughly two dollars a year for an organizer running 26 events, and every figure in it can be checked against its source one scroll down.",
      judgment: "Anyone can summarize one event. Only VersyNow holds each organizer's history, so only it can say 'attendance is 12 points below your last two galas'. The moat is the history, not the summarization.",
      questions: [
        "Why an agent loop instead of one well-written prompt?",
        "What happens when every claim fails the check?",
        "How do you know a brief was worth reading, not just true?"
      ],
      tallies: [
        { value: "$0.08", label: "per brief" },
        { value: "8", label: "rules every claim must pass" },
        { value: "0", label: "numbers on screen written by the model" }
      ],
      diagram: {
        steps: ["overview", "weak session", "what attendees wrote", "organizer's history", "draft brief"],
        gate: "8 rules",
        gateNote: "every number re-read from the database",
        out: "on screen",
        back: "a claim that fails goes back",
        caption: "The agent's run, and the gate between it and the screen."
      }
    },
    fr: {
      title: "Un agent digne de confiance, à quelques cents",
      where: "VersyNow, chef de produit, IA et croissance",
      place: "Analytique d'événements",
      note: "Dans un produit IA, le modèle est rarement la partie difficile. Décider ce qu'il n'a pas le droit de faire, oui.",
      situation: "Les organisateurs d'événements récoltent beaucoup de données sur leur public, questions, sondages, satisfaction, et savent rarement quoi en faire ensuite. VersyNow calculait déjà les faits ; il ne disait presque rien de ce qu'ils voulaient dire. La demande : un compte rendu IA qui dit ce qui s'est passé et quoi changer la prochaine fois.",
      did: [
        "Spécifié un agent plutôt qu'une seule grande requête : une boucle bornée de cinq à neuf appels d'outils qui lit la vue d'ensemble, repère la séance faible, y plonge, échantillonne ce que les participants y ont écrit et compare avec les événements passés de l'organisateur.",
        "La confiance, réglée par la conception : chaque affirmation porte une preuve structurée, la mesure, sa valeur et la taille de l'échantillon, et le serveur revérifie chacune contre la base de données avec huit règles avant d'enregistrer le compte rendu. Une affirmation qui échoue est retirée. L'agent doit aussi lister ses propres limites.",
        "Le coût, réglé par la conception : le plus petit modèle capable, avec mise en cache des requêtes, plus huit plafonds de dépense indépendants et un interrupteur d'arrêt, pour qu'aucun n'ait à être le bon.",
        "L'utilité, mesurée : un compte rendu peut être vrai et inutile, alors un signal « superficiel » marque tout compte rendu qui n'a utilisé ni une séance ni l'historique de l'organisateur."
      ],
      changed: "Aucun chiffre à l'écran ne vient du modèle. Un compte rendu coûte environ huit cents, à peu près deux dollars par année pour un organisateur qui tient 26 événements, et chaque chiffre peut être vérifié contre sa source un écran plus bas.",
      judgment: "N'importe qui peut résumer un événement. Seul VersyNow détient l'historique de chaque organisateur, donc lui seul peut dire « la présence est 12 points sous vos deux derniers galas ». L'avantage, c'est l'historique, pas le résumé.",
      questions: [
        "Pourquoi une boucle d'agent plutôt qu'une seule requête bien écrite ?",
        "Que se passe-t-il quand toutes les affirmations échouent à la vérification ?",
        "Comment savez-vous qu'un compte rendu valait la peine d'être lu, et pas seulement qu'il était vrai ?"
      ],
      tallies: [
        { value: "0,08 $", label: "par compte rendu" },
        { value: "8", label: "règles que chaque affirmation doit passer" },
        { value: "0", label: "chiffre à l'écran écrit par le modèle" }
      ],
      diagram: {
        steps: ["vue d'ensemble", "séance faible", "ce que les gens ont écrit", "historique", "brouillon"],
        gate: "8 règles",
        gateNote: "chaque chiffre relu dans la base de données",
        out: "à l'écran",
        back: "une affirmation qui échoue repart",
        caption: "Le parcours de l'agent, et la barrière entre lui et l'écran."
      }
    }
  },
  // 900 x 300
  diagram(d) {
    const wrap = (txt, x, y, max = 14) => {
      const words = txt.split(" "), lines = [""];
      for (const w of words) {
        if ((lines[lines.length - 1] + " " + w).trim().length > max) lines.push(w);
        else lines[lines.length - 1] = (lines[lines.length - 1] + " " + w).trim();
      }
      const y0 = y - (lines.length - 1) * 9;
      return `<text x="${x}" y="${y0}" class="hand small" text-anchor="middle">${lines.map((l, i) => `<tspan x="${x}" dy="${i ? 18 : 0}">${l}</tspan>`).join("")}</text>`;
    };
    const xs = [20, 160, 300, 440, 580], w = 120;
    const boxes = d.steps.map((s, i) => `
      <path d="M${xs[i]} 110 H${xs[i] + w} V170 H${xs[i]} Z"/>
      ${wrap(s, xs[i] + w / 2, 145)}
      ${i < 4 ? `<path class="thin" d="M${xs[i] + w + 2} 140 H${xs[i] + w + 18} M${xs[i] + w + 18} 140 L${xs[i] + w + 12} 135 M${xs[i] + w + 18} 140 L${xs[i] + w + 12} 145"/>` : ""}`).join("");
    return `
      ${boxes}
      <path class="thin" d="M702 140 H718 M718 140 L712 135 M718 140 L712 145"/>
      <path d="M760 98 L802 140 L760 182 L718 140 Z"/>
      <text x="760" y="146" class="hand small" text-anchor="middle">${d.gate}</text>
      <path class="thin" d="M804 140 H822 M822 140 L816 135 M822 140 L816 145"/>
      <path d="M826 112 H872 V168 H826 Z"/>
      <path class="thin" d="M834 126 H864 M834 138 H856 M834 150 H860"/>
      <text x="849" y="196" class="hand small" text-anchor="middle">${d.out}</text>
      <path class="pencil" d="M760 184 C760 232 700 236 680 236 H380 C360 236 360 200 360 178"/>
      <path class="pencil" d="M354 186 L360 176 L366 186"/>
      <text x="520" y="256" class="hand small" text-anchor="middle">${d.back}</text>
      <path class="pencil" d="M760 96 C760 66 740 56 690 54"/>
      <text x="680" y="56" class="hand small" text-anchor="end">${d.gateNote}</text>`;
  }
};
