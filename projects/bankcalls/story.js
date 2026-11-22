// The bank-calls page: one question, four contenders, one honest result.
import { esc, inkFigure, tally } from "../../js/ink.js";

export const text = {
  en: {
    question: {
      h: "The question",
      note: "A ranking problem, not a yes-or-no problem.",
      p1: "Calling everyone is not an option: each call costs money and an agent's time, and most people say no. So the useful output is not a prediction for each person. It is an order: who to call first, so that whatever budget the bank has is spent on the people most likely to subscribe."
    },
    built: {
      h: "Four ways to rank the list",
      note: "The neural network had to earn its place against simpler models.",
      head: ["Contender", "What it is"],
      rows: [
        ["Neural network", "A deep learning model I built in PyTorch"],
        ["Gradient boosted trees", "The usual strong choice for this kind of table data"],
        ["Logistic regression", "The simple, explainable baseline"],
        ["Rule of thumb", "What a manager might do without any model"]
      ],
      p1: "All four ranked the same prospects. A targeting simulation then asked what each ranking is worth: with budget for only part of the list, how many subscribers does it reach, and what does that mean in profit."
    },
    result: {
      h: "The result",
      note: "Same calls, same cost. The order is the only thing that changed.",
      p1: "With budget to call 20% of the prospects, the ranking reaches 581 subscribers. Calling the same number of people at random reaches 389.",
      p2: "The neural network did not beat the simpler models: they tied. I report that as the finding. When a simple model does as well, it is the easier one to explain to the people who run the campaign.",
      fig: { random: "random calling", model: "ranked by the model", unit: "subscribers reached with a 20% call budget", caption: "What ranking buys: 581 subscribers against 389, for the same number of calls." }
    },
    tallies: [
      { value: "41,188", label: "calls in the public dataset" },
      { value: "581 vs 389", label: "subscribers reached, model vs random, at a 20% call budget" },
      { value: "4", label: "approaches compared" }
    ],
    about: { h: "About this project", p: "My individual project for MGSC 673 at McGill (Master of Management in Analytics), fall 2026. Data: the public UCI Bank Marketing dataset." },
    questions: {
      h: "Questions I'm happy to take",
      items: [
        "What was the headline result of the bank calls project?",
        "Did the neural network beat the simpler models?",
        "What data did the bank calls project use?"
      ]
    }
  },
  fr: {
    question: {
      h: "La question",
      note: "Un problème de classement, pas un problème de oui ou non.",
      p1: "Appeler tout le monde n'est pas une option : chaque appel coûte de l'argent et le temps d'un agent, et la plupart des gens disent non. Le résultat utile n'est donc pas une prédiction pour chaque personne. C'est un ordre : qui appeler en premier, pour que le budget de la banque, quel qu'il soit, aille aux personnes les plus susceptibles de souscrire."
    },
    built: {
      h: "Quatre façons de classer la liste",
      note: "Le réseau de neurones devait mériter sa place face à des modèles plus simples.",
      head: ["Candidat", "Ce que c'est"],
      rows: [
        ["Réseau de neurones", "Un modèle d'apprentissage profond que j'ai bâti en PyTorch"],
        ["Arbres à gradient boosté", "Le choix solide habituel pour ce type de données en tableau"],
        ["Régression logistique", "La base simple et explicable"],
        ["Règle empirique", "Ce qu'un gestionnaire ferait sans aucun modèle"]
      ],
      p1: "Les quatre ont classé les mêmes prospects. Une simulation de ciblage a ensuite demandé ce que vaut chaque classement : avec un budget pour une partie de la liste seulement, combien de souscripteurs rejoint-il, et qu'est-ce que cela donne en profit."
    },
    result: {
      h: "Le résultat",
      note: "Les mêmes appels, le même coût. Seul l'ordre a changé.",
      p1: "Avec un budget pour appeler 20 % des prospects, le classement rejoint 581 souscripteurs. Appeler le même nombre de personnes au hasard en rejoint 389.",
      p2: "Le réseau de neurones n'a pas battu les modèles plus simples : ils sont à égalité. Je le rapporte comme le constat. Quand un modèle simple fait aussi bien, c'est le plus facile à expliquer à ceux qui mènent la campagne.",
      fig: { random: "appels au hasard", model: "classés par le modèle", unit: "souscripteurs rejoints avec un budget de 20 % des appels", caption: "Ce que le classement rapporte : 581 souscripteurs contre 389, pour le même nombre d'appels." }
    },
    tallies: [
      { value: "41 188", label: "appels dans le jeu de données public" },
      { value: "581 vs 389", label: "souscripteurs rejoints, modèle vs hasard, à 20 % des appels" },
      { value: "4", label: "approches comparées" }
    ],
    about: { h: "À propos de ce projet", p: "Mon projet individuel pour le cours MGSC 673 à McGill (maîtrise en gestion analytique), automne 2026. Données : le jeu de données public UCI Bank Marketing." },
    questions: {
      h: "Les questions que je prends volontiers",
      items: [
        "Quel est le résultat principal du projet d'appels bancaires ?",
        "Le réseau de neurones a-t-il battu les modèles plus simples ?",
        "Quelles données le projet d'appels bancaires a-t-il utilisées ?"
      ]
    }
  }
};

// Two bars drawn by hand, to scale: 389 and 581. 900 x 220.
function bars(f) {
  const x0 = 250, scale = 0.95;
  const bar = (y, n, label, strong) => `
    <text x="${x0 - 14}" y="${y + 24}" class="hand small" text-anchor="end">${esc(label)}</text>
    <path ${strong ? "" : 'class="thin"'} d="M${x0} ${y} H${x0 + n * scale} V${y + 36} H${x0} Z"/>
    ${strong ? `<path class="pencil" d="${Array.from({ length: Math.floor(n * scale / 14) }, (_, i) => `M${x0 + 6 + i * 14} ${y + 36} L${x0 + 18 + i * 14} ${y}`).join(" ")}"/>` : ""}
    <text x="${x0 + n * scale + 12}" y="${y + 26}" class="hand">${n}</text>`;
  return `
    <path class="thin" d="M${x0} 30 V190"/>
    ${bar(52, 389, f.random, false)}
    ${bar(122, 581, f.model, true)}
    <text x="${x0}" y="212" class="hand small">${esc(f.unit)}</text>`;
}

export function render(p, L, t) {
  const tx = text[L] || text.en;
  const px = p.text[L] || p.text.en;
  return `
  <section class="sheet">
    <div class="page story world">
      <aside class="margin"><p class="margin-note sticky">${esc(px.note)}</p></aside>
      <div class="body">
        <h1>${esc(px.title)}</h1>
        <p class="place-line">${esc(px.place)}</p>
        <p class="lede">${esc(px.lede)}</p>
      </div>

      <aside class="margin"><p class="margin-note">${esc(tx.question.note)}</p></aside>
      <div class="body">
        <h2>${esc(tx.question.h)}</h2>
        <p>${esc(tx.question.p1)}</p>
      </div>

      <aside class="margin"><p class="margin-note">${esc(tx.built.note)}</p></aside>
      <div class="body">
        <h2>${esc(tx.built.h)}</h2>
        <table class="ruled">
          <thead><tr>${tx.built.head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
          <tbody>${tx.built.rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
        </table>
        <p>${esc(tx.built.p1)}</p>
      </div>

      <aside class="margin"><p class="margin-note red">${esc(tx.result.note)}</p></aside>
      <div class="body">
        <h2>${esc(tx.result.h)}</h2>
        <p class="lede">${esc(tx.result.p1)}</p>
      </div>
      ${inkFigure(bars(tx.result.fig), { viewBox: "0 0 900 220", caption: tx.result.fig.caption, cls: "wide" })}
      <aside class="margin"></aside>
      <div class="body">
        <p>${esc(tx.result.p2)}</p>
        ${tally(tx.tallies)}
      </div>

      <aside class="margin"></aside>
      <div class="body">
        <h2 class="h-quiet">${esc(tx.about.h)}</h2>
        <p>${esc(tx.about.p)}</p>
        <h2 class="h-quiet">${esc(tx.questions.h)}</h2>
        <p class="questions-hint">${esc(t("story.questions.hint"))}</p>
        <ul class="questions">${tx.questions.items.map((q) => `<li>${esc(q)}</li>`).join("")}</ul>
        <nav class="turn"><a class="btn quiet" href="#/">${esc(t("nav.back"))}</a></nav>
      </div>
    </div>
  </section>`;
}
