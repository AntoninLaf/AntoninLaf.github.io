// The bank-calls page: one question, four contenders, one honest result.
import { esc, inkFigure, tally } from "../../js/ink.js";

export const text = {
  "en": {
    "question": {
      "h": "The question",
      "note": "A ranking problem, not a yes-or-no problem.",
      "p1": "A bank's telemarketing team can only call part of its list in each campaign, and most people say no: only 11.3% of the 41,188 calls in this dataset ended in a subscription. So the useful output is an order, who to call first, using only what the bank knows before it picks up the phone. The question I asked of every model: if the team can call 20% of the list, how many of the real subscribers does it reach?"
    },
    "trap": {
      "h": "The trap in the data",
      "note": "A model can look good by learning the calendar. That is useless to a team planning one campaign.",
      "p1": "I split the data by time, the way it would be used: train on past campaigns, test on later ones. The periods turned out to be very different. The bank went from mass calling in 2008, with about 6% saying yes, to small campaigns from mid-2009, with 46% saying yes in the test period. That shift is the central difficulty of the project.",
      "p2": "A sanity check changed the project. A model that only knew when a call was made, and nothing about the customer, scored almost as well as the full model on the usual metric, because it could rank one month above another. So I measured every model inside each month instead. On that measure the calendar-only model falls to random, and the first decision followed: give the network customer features only. The usual metric, on its own, would have made me keep the worse model."
    },
    "built": {
      "h": "Four ways to rank the list",
      "note": "The neural network had to earn its place against simpler models.",
      "head": [
        "Contender",
        "Top 20% converts",
        "Ranking quality"
      ],
      "rows": [
        [
          "Neural network (PyTorch, 5 averaged)",
          "1.50× better than random",
          "0.608"
        ],
        [
          "Logistic regression",
          "1.50×",
          "0.612"
        ],
        [
          "Gradient boosted trees",
          "1.47×",
          "0.607"
        ],
        [
          "Rule of thumb: previous subscribers first",
          "1.50×",
          "0.592"
        ],
        [
          "Random calling",
          "1.00×",
          "0.467"
        ]
      ],
      "p1": "Tested once, on 15 later months the models had never trained on. Ranking quality is PR-AUC measured within each month. The network is small on purpose: two hidden layers of 64 and 32 units. Eight experiments, changing one thing at a time, showed that bigger networks, more dropout, embeddings and other optimizers made no difference I could separate from noise."
    },
    "result": {
      "h": "The result",
      "note": "Same calls, same cost. The order is the only thing that changed.",
      "p1": "Replaying the 15 test months with a budget of 20% of each month's list, 849 calls, the network's list reaches 581 subscribers. Calling at random reaches about 389.",
      "p2": "The network ranks usefully, and it is not better than the simple models. The gap with logistic regression is too small to call, and a marketer's rule of thumb reaches 584 at this budget. The models pull ahead only when more of the list is called: at 50%, the network reaches 60.6% of subscribers against 57.5% for the rule.",
      "fig": {
        "random": "random calling",
        "model": "ranked by the network",
        "unit": "subscribers reached with a 20% call budget (849 calls)",
        "caption": "What ranking buys: 581 subscribers against 389, for the same number of calls."
      }
    },
    "why": {
      "h": "Why the simple models tie",
      "note": "The limit was the information in the inputs, not the network.",
      "p1": "Almost all the value comes from one fact: whether the customer said yes in a previous campaign. Shuffling that input costs the model far more than any other; seven of its ten inputs contribute about nothing. For the three quarters of customers with no previous success, the network barely beats random, and neither does anything else. In practice it is a three-input model, which is why simple methods match it.",
      "p2": "In money, assuming €5 a call and €100 a subscription: at a 20% budget the model's list earns €53.9k against €34.6k for random calling. With 46% saying yes, calling everyone is profitable anyway, so the model's job is to set the order when capacity is limited."
    },
    "limits": {
      "h": "What I would not claim",
      "note": "Stated before a reviewer finds it.",
      "items": [
        "The scores are not probabilities. The model's average prediction is 0.69 where 45.8% actually subscribed, so presenting scores as chances would overstate them.",
        "It cannot say a call caused a subscription. The data only contains people the bank chose to call; that question needs an experiment with an uncalled control group.",
        "It over-selects older customers: 29.5% of those 60 and over against 15.6% of those aged 30 to 44, though they responded at nearly the same rate. Age adds almost nothing to the ranking, so I would remove it before any real use.",
        "One Portuguese bank during the 2008 to 2010 crisis. I would retrain before every campaign, cap contacts per person and keep a random share of each campaign as a control group."
      ]
    },
    "tallies": [
      {
        "value": "41,188",
        "label": "calls in the public dataset"
      },
      {
        "value": "581 vs 389",
        "label": "subscribers reached, model vs random, at a 20% call budget"
      },
      {
        "value": "1.5×",
        "label": "how much better the top 20% converts"
      },
      {
        "value": "3",
        "label": "inputs that carry the ranking, out of 10"
      }
    ],
    "about": {
      "h": "About this project",
      "p": "My individual project for MGSC 673 at McGill (Master of Management in Analytics), fall 2026. Data: the public UCI Bank Marketing dataset (Moro, Rita and Cortez, 2014). Following the professor's recommendation to use AI tools to support our learning, I used Claude (Anthropic) and ChatGPT (OpenAI) as learning assistants throughout the project. I assessed their suggestions and remain responsible for the analytical choices, interpretation of results, and final report."
    },
    "questions": {
      "h": "Questions I'm happy to take",
      "items": [
        "Why did you measure the models inside each month?",
        "Why did the neural network only tie with the simple models?",
        "What would you change before a bank used this for real?",
        "What are the ethical concerns with this model?"
      ]
    }
  },
  "fr": {
    "question": {
      "h": "La question",
      "note": "Un problème de classement, pas un problème de oui ou non.",
      "p1": "L'équipe de télémarketing d'une banque ne peut appeler qu'une partie de sa liste à chaque campagne, et la plupart des gens disent non : seulement 11,3 % des 41 188 appels de ce jeu de données ont mené à une souscription. Le résultat utile est donc un ordre, qui appeler en premier, à partir de ce que la banque sait avant de décrocher le téléphone. La question posée à chaque modèle : si l'équipe peut appeler 20 % de la liste, combien de vrais souscripteurs rejoint-elle ?"
    },
    "trap": {
      "h": "Le piège dans les données",
      "note": "Un modèle peut bien paraître en apprenant le calendrier. C'est inutile pour une équipe qui planifie une campagne.",
      "p1": "J'ai séparé les données dans le temps, comme on s'en servirait : entraîner sur les campagnes passées, tester sur les suivantes. Les périodes se sont révélées très différentes. La banque est passée d'appels de masse en 2008, avec environ 6 % de oui, à de petites campagnes à partir de la mi-2009, avec 46 % de oui dans la période de test. Ce changement est la difficulté centrale du projet.",
      "p2": "Une vérification a changé le projet. Un modèle qui savait seulement quand l'appel avait été fait, et rien sur le client, obtenait presque le même score que le modèle complet sur la mesure habituelle, parce qu'il pouvait classer un mois au-dessus d'un autre. J'ai donc mesuré chaque modèle à l'intérieur de chaque mois. Sur cette mesure, le modèle « calendrier seulement » retombe au hasard, et la première décision a suivi : ne donner au réseau que des caractéristiques du client. La mesure habituelle, seule, m'aurait fait garder le moins bon modèle."
    },
    "built": {
      "h": "Quatre façons de classer la liste",
      "note": "Le réseau de neurones devait mériter sa place face à des modèles plus simples.",
      "head": [
        "Candidat",
        "Les 20 % du haut convertissent",
        "Qualité du classement"
      ],
      "rows": [
        [
          "Réseau de neurones (PyTorch, 5 en moyenne)",
          "1,50× mieux que le hasard",
          "0,608"
        ],
        [
          "Régression logistique",
          "1,50×",
          "0,612"
        ],
        [
          "Arbres à gradient boosté",
          "1,47×",
          "0,607"
        ],
        [
          "Règle empirique : anciens souscripteurs d'abord",
          "1,50×",
          "0,592"
        ],
        [
          "Appels au hasard",
          "1,00×",
          "0,467"
        ]
      ],
      "p1": "Testés une seule fois, sur 15 mois ultérieurs que les modèles n'avaient jamais vus à l'entraînement. La qualité du classement est le PR-AUC mesuré à l'intérieur de chaque mois. Le réseau est petit, à dessein : deux couches cachées de 64 et 32 unités. Huit expériences, en changeant une chose à la fois, ont montré que des réseaux plus gros, plus de dropout, des embeddings ou d'autres optimiseurs ne changeaient rien que je puisse distinguer du bruit."
    },
    "result": {
      "h": "Le résultat",
      "note": "Les mêmes appels, le même coût. Seul l'ordre a changé.",
      "p1": "En rejouant les 15 mois de test avec un budget de 20 % de la liste de chaque mois, soit 849 appels, la liste du réseau rejoint 581 souscripteurs. Appeler au hasard en rejoint environ 389.",
      "p2": "Le réseau classe utilement, et il n'est pas meilleur que les modèles simples. L'écart avec la régression logistique est trop petit pour trancher, et la règle empirique d'un spécialiste du marketing rejoint 584 souscripteurs à ce budget. Les modèles ne prennent l'avance que si l'on appelle une plus grande part de la liste : à 50 %, le réseau rejoint 60,6 % des souscripteurs contre 57,5 % pour la règle.",
      "fig": {
        "random": "appels au hasard",
        "model": "classés par le réseau",
        "unit": "souscripteurs rejoints avec un budget de 20 % des appels (849 appels)",
        "caption": "Ce que le classement rapporte : 581 souscripteurs contre 389, pour le même nombre d'appels."
      }
    },
    "why": {
      "h": "Pourquoi les modèles simples font jeu égal",
      "note": "La limite était l'information dans les données, pas le réseau.",
      "p1": "Presque toute la valeur vient d'un seul fait : le client a-t-il dit oui lors d'une campagne précédente. Brouiller cette variable coûte au modèle bien plus que toute autre ; sept de ses dix variables ne contribuent à peu près rien. Pour les trois quarts des clients sans succès antérieur, le réseau bat à peine le hasard, et rien d'autre ne fait mieux. En pratique, c'est un modèle à trois variables, ce qui explique que des méthodes simples l'égalent.",
      "p2": "En argent, en supposant 5 € par appel et 100 € par souscription : à un budget de 20 %, la liste du modèle rapporte 53,9 k€ contre 34,6 k€ pour des appels au hasard. Avec 46 % de oui, appeler tout le monde est rentable de toute façon ; le rôle du modèle est donc de fixer l'ordre quand la capacité est limitée."
    },
    "limits": {
      "h": "Ce que je n'affirmerais pas",
      "note": "Dit avant qu'un évaluateur le trouve.",
      "items": [
        "Les scores ne sont pas des probabilités. La prédiction moyenne du modèle est de 0,69 là où 45,8 % ont réellement souscrit ; les présenter comme des chances les surestimerait.",
        "Il ne peut pas dire qu'un appel a causé une souscription. Les données ne contiennent que les gens que la banque a choisi d'appeler ; cette question exige une expérience avec un groupe témoin non appelé.",
        "Il sélectionne trop les clients plus âgés : 29,5 % des 60 ans et plus contre 15,6 % des 30 à 44 ans, alors qu'ils ont répondu à peu près au même taux. L'âge n'ajoute presque rien au classement ; je le retirerais avant tout usage réel.",
        "Une seule banque portugaise pendant la crise de 2008 à 2010. Je réentraînerais avant chaque campagne, je plafonnerais les contacts par personne et je garderais une part aléatoire de chaque campagne comme groupe témoin."
      ]
    },
    "tallies": [
      {
        "value": "41 188",
        "label": "appels dans le jeu de données public"
      },
      {
        "value": "581 vs 389",
        "label": "souscripteurs rejoints, modèle vs hasard, à 20 % des appels"
      },
      {
        "value": "1,5×",
        "label": "conversion des 20 % du haut, par rapport au hasard"
      },
      {
        "value": "3",
        "label": "variables qui portent le classement, sur 10"
      }
    ],
    "about": {
      "h": "À propos de ce projet",
      "p": "Mon projet individuel pour le cours MGSC 673 à McGill (maîtrise en gestion analytique), automne 2026. Données : le jeu de données public UCI Bank Marketing (Moro, Rita et Cortez, 2014). Suivant la recommandation du professeur d'utiliser des outils d'IA pour soutenir notre apprentissage, j'ai utilisé Claude (Anthropic) et ChatGPT (OpenAI) comme assistants d'apprentissage tout au long du projet. J'ai évalué leurs suggestions et je reste responsable des choix analytiques, de l'interprétation des résultats et du rapport final."
    },
    "questions": {
      "h": "Les questions que je prends volontiers",
      "items": [
        "Pourquoi avoir mesuré les modèles à l'intérieur de chaque mois ?",
        "Pourquoi le réseau de neurones fait-il seulement jeu égal avec les modèles simples ?",
        "Que changeriez-vous avant qu'une banque s'en serve pour vrai ?",
        "Quelles sont les préoccupations éthiques de ce modèle ?"
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

      <aside class="margin"><p class="margin-note red">${esc(tx.trap.note)}</p></aside>
      <div class="body">
        <h2>${esc(tx.trap.h)}</h2>
        <p>${esc(tx.trap.p1)}</p>
        <p>${esc(tx.trap.p2)}</p>
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
      </div>

      <aside class="margin"><p class="margin-note">${esc(tx.why.note)}</p></aside>
      <div class="body">
        <h2>${esc(tx.why.h)}</h2>
        <p>${esc(tx.why.p1)}</p>
        <p>${esc(tx.why.p2)}</p>
        ${tally(tx.tallies)}
      </div>

      <aside class="margin"><p class="margin-note red">${esc(tx.limits.note)}</p></aside>
      <div class="body">
        <h2>${esc(tx.limits.h)}</h2>
        <ul class="limits">${tx.limits.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
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
