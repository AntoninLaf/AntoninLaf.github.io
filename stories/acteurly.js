export default {
  slug: "acteurly",
  order: 4,
  years: "2026",
  text: {
    en: {
      title: "Embedding expert judgment into AI-driven marketing",
      where: "Acteurly · Marketing Expert & Reviewer",
      place: "An AI marketing analyst for Québec small businesses",
      note: "The product isn't the dashboard. It's the sentence at the end: here's what to do Monday.",
      situation: "Owners of businesses with one to fifty people, trades, clinics, shops, restaurants, have their numbers scattered across Google, Meta and review sites. Nobody has time to read them, and an agency costs too much. Acteurly reads their marketing data, explains in plain words what works, and recommends the next actions that fit their budget and hours.",
      did: [
        "I didn't write the code. I was the marketing expert and the human in the loop: I wrote the playbooks its AI reads before every answer, from years of agency work, so it reasons like a marketer rather than like a search engine.",
        "Built the rubrics for judging its recommendations, and reviewed what it produced against them before it reached a business owner.",
        "Set the rule that the model never calculates a figure: code computes every number, the model explains and recommends, and code checks the answer afterwards."
      ],
      changed: "A weekly loop a small business can actually follow: diagnose, connect, understand, act, learn, repeat. Retrieval picks four or five of twenty-four playbooks for each question from the signals in the data. Owners rate each action and the outcomes are recorded, which is the start of a dataset nobody else has: what actually works, by sector, in Québec.",
      judgment: "Today it is an analyst that recommends, not an agent that acts, and that is deliberate. Autonomy is earned one reversible task at a time, after enough clean runs.",
      questions: [
        "How do you write a playbook an AI can use without making it generic?",
        "What does the reviewer catch that the rules don't?",
        "When would you let it act on its own, and on what?"
      ],
      tallies: [
        { value: "24", label: "expert playbooks the AI reads from" },
        { value: "4–5", label: "retrieved for each question" },
        { value: "0", label: "figures calculated by the model" }
      ],
      diagram: {
        loop: ["Diagnose", "Connect", "Understand", "Act", "Learn", "Repeat"],
        center: "Aly",
        cols: [
          ["Code", "computes every number"],
          ["The model", "explains and recommends"],
          ["Me", "wrote the playbooks, reviewed the output"]
        ],
        caption: "The weekly loop, and who does what inside it."
      }
    },
    fr: {
      title: "Intégrer le jugement d'expert dans un marketing piloté par l'IA",
      where: "Acteurly · expert marketing et réviseur",
      place: "Un analyste marketing IA pour les petites entreprises du Québec",
      note: "Le produit, ce n'est pas le tableau de bord. C'est la phrase à la fin : voici quoi faire lundi.",
      situation: "Les propriétaires d'entreprises de un à cinquante employés, métiers, cliniques, commerces, restaurants, ont leurs chiffres éparpillés entre Google, Meta et les sites d'avis. Personne n'a le temps de les lire, et une agence coûte trop cher. Acteurly lit leurs données marketing, explique en mots simples ce qui fonctionne et recommande les prochaines actions selon leur budget et leurs heures.",
      did: [
        "Je n'ai pas écrit le code. J'ai été l'expert marketing et l'humain dans la boucle : j'ai écrit les playbooks que son IA lit avant chaque réponse, tirés d'années d'agence, pour qu'elle raisonne comme un marketeur et non comme un moteur de recherche.",
        "Bâti les grilles pour juger ses recommandations, et révisé ce qu'elle produisait selon ces grilles avant que ça n'atteigne un propriétaire.",
        "Fixé la règle que le modèle ne calcule jamais un chiffre : le code calcule chaque nombre, le modèle explique et recommande, et le code vérifie la réponse ensuite."
      ],
      changed: "Une boucle hebdomadaire qu'une petite entreprise peut vraiment suivre : diagnostiquer, connecter, comprendre, agir, apprendre, répéter. La recherche choisit quatre ou cinq des vingt-quatre playbooks pour chaque question, selon les signaux dans les données. Les propriétaires notent chaque action et les résultats sont enregistrés : le début d'un jeu de données que personne d'autre n'a, ce qui marche vraiment, par secteur, au Québec.",
      judgment: "Aujourd'hui, c'est un analyste qui recommande, pas un agent qui agit, et c'est voulu. L'autonomie se gagne une tâche réversible à la fois, après assez d'exécutions propres.",
      questions: [
        "Comment écrit-on un playbook qu'une IA peut utiliser sans qu'il devienne générique ?",
        "Qu'est-ce que le réviseur attrape que les règles n'attrapent pas ?",
        "Quand la laisseriez-vous agir seule, et sur quoi ?"
      ],
      tallies: [
        { value: "24", label: "playbooks d'expert que l'IA consulte" },
        { value: "4–5", label: "retenus pour chaque question" },
        { value: "0", label: "chiffre calculé par le modèle" }
      ],
      diagram: {
        loop: ["Diagnostiquer", "Connecter", "Comprendre", "Agir", "Apprendre", "Répéter"],
        center: "Aly",
        cols: [
          ["Le code", "calcule chaque nombre"],
          ["Le modèle", "explique et recommande"],
          ["Moi", "ai écrit les playbooks, révisé les réponses"]
        ],
        caption: "La boucle hebdomadaire, et qui fait quoi à l'intérieur."
      }
    }
  },
  // 900 x 300
  diagram(d) {
    const cx = 200, cy = 150, r = 100;
    const stops = d.loop.map((s, i) => {
      const a = -Math.PI / 2 + (i * 2 * Math.PI) / d.loop.length;
      const x = cx + Math.cos(a) * r, y = cy + Math.sin(a) * r;
      const lx = cx + Math.cos(a) * (r + 34), ly = cy + Math.sin(a) * (r + 34);
      const anchor = Math.abs(Math.cos(a)) < 0.2 ? "middle" : (Math.cos(a) > 0 ? "start" : "end");
      return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5"/>
        <text x="${lx.toFixed(1)}" y="${(ly + 5).toFixed(1)}" class="hand small" text-anchor="${anchor}">${s}</text>`;
    }).join("");
    const wrap = (txt, x, y, max = 16) => {
      const lines = [""];
      for (const w of txt.replace(/,/g, "").split(" ")) {
        if ((lines[lines.length - 1] + " " + w).trim().length > max) lines.push(w);
        else lines[lines.length - 1] = (lines[lines.length - 1] + " " + w).trim();
      }
      return lines.map((l, i) => `<text x="${x}" y="${y + i * 21}" class="hand small">${l}</text>`).join("");
    };
    const cols = d.cols.map((c, i) => `
      <path d="M${460 + i * 150} 70 V230"/>
      <text x="${474 + i * 150}" y="102" class="hand">${c[0]}</text>
      ${wrap(c[1], 474 + i * 150, 132)}`).join("");
    return `
      <path class="pencil" d="M${cx} ${cy - r} A${r} ${r} 0 1 1 ${cx - 0.1} ${cy - r}"/>
      <path class="pencil" d="M${cx - 10} ${cy - r - 8} L${cx + 2} ${cy - r} L${cx - 8} ${cy - r + 10}"/>
      ${stops}
      <text x="${cx}" y="${cy + 8}" class="hand" text-anchor="middle">${d.center}</text>
      ${cols}`;
  }
};
