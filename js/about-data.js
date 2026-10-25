// The About page's content: facts, the work cards, the capability map, the workflow and the vocabulary.
// Every framework below is tied to a place in my own work where it shows up; nothing is claimed beyond that.

export const FACTS = {
  en: [
    ["Based", "Montréal · remote welcome"],
    ["Looking for", "Full-time roles from January 2027 · internships considered"],
    ["Focus", "AI product · product management · growth · consulting"],
    ["Studying", "Master of Management in Analytics, McGill Desautels, 2026–2027"],
    ["Languages", "French · English · Spanish · German"]
  ],
  fr: [
    ["Basé à", "Montréal · télétravail bienvenu"],
    ["Je cherche", "Un poste à temps plein dès janvier 2027 · stages considérés"],
    ["Axes", "Produit IA · gestion de produit · croissance · conseil"],
    ["Études", "Maîtrise en gestion analytique, McGill Desautels, 2026–2027"],
    ["Langues", "français · anglais · espagnol · allemand"]
  ]
};

export const TOOLS = "Python · SQL · PyTorch · Databricks · PySpark · Anthropic and OpenAI APIs · Claude Code · Git · GA4";

// The work cards, in order. `tools`: the frameworks each piece of work actually used.
export const WORK = {
  engagements: [
    { story: "versynow", project: "versynow", where: { en: "Versy Technologies · VersyNow", fr: "Versy Technologies · VersyNow" },
      tools: { en: ["Ideal customer profile", "Value realization", "Guardrails", "Unit economics"], fr: ["Profil client idéal", "Réalisation de la valeur", "Garde-fous", "Économie unitaire"] } },
    { story: "versytalks", project: "versytalks", where: { en: "Versy Technologies · VersyTalks", fr: "Versy Technologies · VersyTalks" },
      tools: { en: ["Jobs to be done", "Issue tree", "Stated vs revealed preference", "North Star metrics"], fr: ["Jobs to be done", "Arbre de problèmes", "Préférence déclarée ou révélée", "Métriques North Star"] } },
    { story: "stekar",
      tools: { en: ["Full-funnel demand generation", "Sales enablement", "Brand lift"], fr: ["Génération de demande full-funnel", "Soutien aux ventes", "Brand lift"] } },
    { story: "goco",
      tools: { en: ["Churn-risk segmentation", "Customer lifecycle", "Sales and marketing alignment"], fr: ["Segmentation du risque d'attrition", "Cycle de vie client", "Alignement ventes et marketing"] } }
  ],
  ventures: [
    { story: "acteurly", project: "acteurly",
      tools: { en: ["Human in the loop", "Evaluation rubrics", "Value of information", "Defensibility"], fr: ["Humain dans la boucle", "Grilles d'évaluation", "Valeur de l'information", "Avantage défendable"] } },
    { project: "glrlight",
      tools: { en: ["Where to play", "Base rates", "Look-ahead bias", "Capability over instruction"], fr: ["Où jouer", "Taux de base", "Biais de prescience", "Capacité plutôt que consigne"] } }
  ]
};

export const GLR_CARD = {
  en: { where: "GLRlight · Independent build", title: "A one-second check for warning signs before you sign with a UK company", headline: { value: "16", label: "plain rules, no AI in the verdict" } },
  fr: { where: "GLRlight · Projet indépendant", title: "En une seconde, les signaux d'alerte d'une entreprise britannique avant de signer", headline: { value: "16", label: "règles simples, aucune IA dans le verdict" } }
};

// Capability map, Harvey-ball style: 2 = core of the work, 1 = part of it, 0 = not part of it.
export const CAP_COLS = ["VersyNow", "VersyTalks", "STEKAR", "GoCo", "Acteurly", "GLRlight"];
export const CAPS = {
  en: [
    ["Strategy & positioning", [2, 2, 1, 0, 1, 2]],
    ["Product discovery & management", [2, 2, 0, 0, 1, 2]],
    ["AI product, evaluation & guardrails", [2, 2, 1, 0, 2, 2]],
    ["Growth & go-to-market", [2, 2, 2, 1, 0, 0]],
    ["Analytics & experimentation", [1, 2, 1, 1, 1, 2]],
    ["Retention & customer lifecycle", [1, 1, 0, 2, 0, 0]],
    ["Brand & demand generation", [1, 1, 2, 1, 1, 0]]
  ],
  fr: [
    ["Stratégie et positionnement", [2, 2, 1, 0, 1, 2]],
    ["Découverte et gestion de produit", [2, 2, 0, 0, 1, 2]],
    ["Produit IA, évaluation et garde-fous", [2, 2, 1, 0, 2, 2]],
    ["Croissance et mise en marché", [2, 2, 2, 1, 0, 0]],
    ["Analytique et expérimentation", [1, 2, 1, 1, 1, 2]],
    ["Rétention et cycle de vie client", [1, 1, 0, 2, 0, 0]],
    ["Marque et génération de demande", [1, 1, 2, 1, 1, 0]]
  ]
};

// How I run a piece of work: five phases, each with its tools, a line of mine, and where it shows up.
export const FLOW = {
  en: [
    { phase: "Frame", ask: "What decision are we really trying to make?", tools: ["Situation, complication, question", "Issue tree", "The decision behind the request"],
      quote: "What would you do differently if you had this information?", src: "on VersyNow", href: "#/p/versynow", seen: "Networking requests turned out to be a capability inside every event type." },
    { phase: "Hypothesize", ask: "What would have to be true?", tools: ["Day-one hypothesis", "MECE branches", "Jobs to be done"],
      quote: "I want the competing explanations visible.", src: "on VersyTalks", href: "#/story/versytalks", seen: "Requests, usage and revenue disagreed; the job was serious practice, not a forum." },
    { phase: "Test", ask: "What is the smallest test that could change the decision?", tools: ["Behavioural outcome", "Stop condition", "Value of information", "Base rates"],
      quote: "If every possible result leaves us doing the same thing, the test is probably poorly designed.", src: "on running tests", href: "#/p/glrlight", seen: "A backtest built to falsify my own product found three defects in the method." },
    { phase: "Synthesize", ask: "So what?", tools: ["Pyramid Principle: the answer first", "The claim you can defend", "Evidence attached to every figure"],
      quote: "Choose the claim you can defend, not the claim that sounds most impressive.", src: "on GLRlight", href: "#/p/glrlight", seen: "Published that it cannot predict insolvency; the positioning survived." },
    { phase: "Deliver value", ask: "What happens after it works?", tools: ["Value realization", "Activation and time to first value", "Guardrails and human in the loop"],
      quote: "A response, a report or an AI answer is a beginning. I care about the next step it makes possible.", src: "on the work as a whole", href: "#/p/acteurly", seen: "Aly's advice is judged by whether the owner can act on it this week." }
  ],
  fr: [
    { phase: "Cadrer", ask: "Quelle décision essaie-t-on vraiment de prendre ?", tools: ["Situation, complication, question", "Arbre de problèmes", "La décision derrière la demande"],
      quote: "Que feriez-vous différemment si vous aviez cette information ?", src: "sur VersyNow", href: "#/p/versynow", seen: "Les demandes de réseautage étaient en fait une capacité utile dans tous les types d'événements." },
    { phase: "Poser l'hypothèse", ask: "Qu'est-ce qui devrait être vrai ?", tools: ["Hypothèse du premier jour", "Branches MECE", "Jobs to be done"],
      quote: "Je veux que les explications concurrentes soient visibles.", src: "sur VersyTalks", href: "#/story/versytalks", seen: "Demandes, usage et revenus se contredisaient ; le vrai besoin était la pratique sérieuse, pas un forum." },
    { phase: "Tester", ask: "Quel est le plus petit test qui pourrait changer la décision ?", tools: ["Résultat comportemental", "Condition d'arrêt", "Valeur de l'information", "Taux de base"],
      quote: "Si chaque résultat possible nous laisse faire la même chose, le test est probablement mal conçu.", src: "sur la conduite des tests", href: "#/p/glrlight", seen: "Un test rétrospectif conçu pour réfuter mon propre produit a trouvé trois défauts de méthode." },
    { phase: "Synthétiser", ask: "Et donc ?", tools: ["Principe de la pyramide : la réponse d'abord", "L'affirmation défendable", "La preuve attachée à chaque chiffre"],
      quote: "Choisir l'affirmation qu'on peut défendre, pas celle qui impressionne le plus.", src: "sur GLRlight", href: "#/p/glrlight", seen: "J'ai publié qu'il ne peut pas prédire l'insolvabilité ; le positionnement a tenu." },
    { phase: "Livrer la valeur", ask: "Que se passe-t-il une fois que ça marche ?", tools: ["Réalisation de la valeur", "Activation et délai de première valeur", "Garde-fous et humain dans la boucle"],
      quote: "Une réponse, un rapport ou une réponse d'IA est un début. Ce qui m'importe, c'est la prochaine étape qu'il rend possible.", src: "sur l'ensemble du travail", href: "#/p/acteurly", seen: "Les conseils d'Aly se jugent à ce que le propriétaire peut en faire cette semaine." }
  ]
};

// The vocabulary consulting firms and agencies use, each term tied to where it shows up in my work.
// [term, origin, definition, where it shows up, link]
export const VOCAB = {
  en: [
    { group: "Problem solving", terms: [
      ["Issue tree and MECE", "McKinsey", "Break a question into branches that don't overlap and leave nothing out.", "VersyTalks: why requests, usage and revenue disagreed.", "#/story/versytalks"],
      ["Hypothesis-driven problem solving", "McKinsey", "Start from a testable answer, then try hard to break it.", "GLRlight: a backtest built to falsify my own product.", "#/p/glrlight"],
      ["Pyramid Principle (SCQ)", "Barbara Minto, McKinsey", "Situation, complication, question; then the answer first, with the support beneath it.", "The GLRlight handover brief opens with the one-paragraph answer.", "#/p/glrlight"]
    ] },
    { group: "Strategy", terms: [
      ["Where to play, how to win", "Lafley & Martin, Monitor Deloitte", "Strategy as a few connected choices: which arena, and why you win there.", "GLRlight took the free first-pass layer above the credit bureaus instead of a better credit score.", "#/p/glrlight"],
      ["Jobs to be done", "Clayton Christensen", "Customers hire a product to make progress on something; design for that progress.", "VersyTalks moved from a forum to serious practice and credible coaching.", "#/p/versytalks"],
      ["Ideal customer profile and cost to serve", "B2B go-to-market", "Prioritize the customers who get the most value at a cost you can sustain.", "VersyNow chose recurrence over size.", "#/p/versynow"],
      ["Defensibility (moat)", "Strategy", "What a competitor could not copy quickly, and why.", "VersyNow: the moat is each organizer's history. Acteurly: four assets that compound with use.", "#/p/acteurly"]
    ] },
    { group: "Product and AI", terms: [
      ["Stated vs revealed preference", "Economics", "What people say they want versus what they actually do.", "VersyTalks: following and peer feedback were requested, then barely used.", "#/p/versytalks"],
      ["Activation and time to first value", "Product management", "The first moment a user gets real value, and how fast they reach it.", "VersyNow: a trial that runs across consecutive events, so the comparison is felt.", "#/p/versynow"],
      ["Progressive disclosure", "Interaction design", "Show what the current decision needs; keep depth one step away.", "VersyNow: networking configured inside the event, not as a separate product.", "#/p/versynow"],
      ["Human in the loop and decision rights", "AI governance", "Who approves what, with what information, before anything acts.", "Acteurly: I review recommendations before they reach owners.", "#/p/acteurly"],
      ["Capability over instruction", "AI guardrails", "Stop a system doing something by not giving it the means, not by asking it nicely.", "GLRlight: the agent's tools return facts, never a score. VersyNow: eight rules re-check every number.", "#/p/glrlight"],
      ["Responsible AI", "Accenture, Deloitte", "Design for safety, privacy and fairness from the start, not after a complaint.", "GLRlight: no search by person, no addresses, director history reported as company outcomes.", "#/p/glrlight"]
    ] },
    { group: "Evidence and analytics", terms: [
      ["Base rates (Bayes)", "Statistics", "How rare an event is decides how often an alarm is wrong.", "GLRlight: at 0.5% insolvency a year, a good-looking detector is wrong 29 times in 30.", "#/p/glrlight"],
      ["Look-ahead bias and confounding", "Statistics", "Information from the future leaking into a test; a hidden difference faking a result.", "GLRlight: a rewind of the register, and an age confound I created myself.", "#/p/glrlight"],
      ["Value of information", "Decision analysis", "Ask a question only when the answer could change the decision.", "Acteurly: Aly asks only when the missing detail changes the advice.", "#/p/acteurly"],
      ["Sunk-cost fallacy", "Behavioural economics", "Past effort is no argument for future effort.", "VersyTalks: we stopped polishing peer feedback.", "#/p/versytalks"],
      ["Calibration and inter-rater agreement", "Evaluation", "Check a scorer against expert judgment before trusting it.", "VersyTalks: the AI grader was calibrated on 42 real submissions against coaches.", "#/p/versytalks"]
    ] },
    { group: "Value and operating model", terms: [
      ["Value realization", "Accenture, Deloitte", "The customer actually experiences the benefit they paid for.", "VersyNow: the trial redesigned so the comparative value shows up.", "#/p/versynow"],
      ["Unit economics", "Finance", "What one unit costs and earns.", "VersyNow: about eight cents a brief. VersyTalks: how one credit splits.", "#/p/versynow"],
      ["North Star metric", "Product management", "The one number closest to the value customers come for.", "VersyTalks ran on two: time on the platform and arguments written.", "#/p/versytalks"]
    ] },
    { group: "Brand and go-to-market (agency craft)", terms: [
      ["Positioning and single-minded proposition", "Agency briefs", "One thing the brand stands for, said one way.", "VersyNow sold the event report, not the live tools.", "#/p/versynow"],
      ["Full-funnel demand generation", "Marketing", "From first awareness to a qualified inquiry, built as one system.", "STEKAR: website, content, paid, trade shows and Lunch & Learns from zero.", "#/story/stekar"],
      ["Sales enablement", "B2B marketing", "Give sales what it needs to win, when it needs it.", "STEKAR: a large part of the role, with sales and marketing as one team.", "#/story/stekar"],
      ["Brand lift", "Agency measurement", "Measured change in how many people know and pick the brand.", "STEKAR: recognition up 57%, measured by branded search and a survey.", "#/story/stekar"],
      ["Churn-risk segmentation", "Lifecycle marketing", "Find the customers most likely to leave and speak to them first.", "GoCo: usage signals pointed the migration campaigns at at-risk accounts.", "#/story/goco"]
    ] }
  ],
  fr: [
    { group: "Résolution de problèmes", terms: [
      ["Arbre de problèmes et MECE", "McKinsey", "Découper une question en branches qui ne se recoupent pas et n'oublient rien.", "VersyTalks : pourquoi demandes, usage et revenus se contredisaient.", "#/story/versytalks"],
      ["Résolution par hypothèses", "McKinsey", "Partir d'une réponse testable, puis tout faire pour la réfuter.", "GLRlight : un test rétrospectif conçu pour réfuter mon propre produit.", "#/p/glrlight"],
      ["Principe de la pyramide (SCQ)", "Barbara Minto, McKinsey", "Situation, complication, question ; puis la réponse d'abord, appuyée en dessous.", "Le brief de passation GLRlight commence par la réponse en un paragraphe.", "#/p/glrlight"]
    ] },
    { group: "Stratégie", terms: [
      ["Où jouer, comment gagner", "Lafley et Martin, Monitor Deloitte", "La stratégie comme quelques choix liés : quelle arène, et pourquoi on y gagne.", "GLRlight a pris la couche du premier filtre gratuit au-dessus des agences de crédit plutôt qu'une meilleure cote.", "#/p/glrlight"],
      ["Jobs to be done", "Clayton Christensen", "On « embauche » un produit pour progresser sur quelque chose ; on conçoit pour ce progrès.", "VersyTalks est passé d'un forum à la pratique sérieuse et à un coaching crédible.", "#/p/versytalks"],
      ["Profil client idéal et coût de service", "Mise en marché B2B", "Prioriser les clients qui tirent le plus de valeur, à un coût soutenable.", "VersyNow a choisi la récurrence plutôt que la taille.", "#/p/versynow"],
      ["Avantage défendable", "Stratégie", "Ce qu'un concurrent ne pourrait pas copier vite, et pourquoi.", "VersyNow : l'avantage, c'est l'historique de chaque organisateur. Acteurly : quatre actifs qui se renforcent à l'usage.", "#/p/acteurly"]
    ] },
    { group: "Produit et IA", terms: [
      ["Préférence déclarée ou révélée", "Économie", "Ce que les gens disent vouloir, comparé à ce qu'ils font vraiment.", "VersyTalks : le suivi et la rétroaction entre pairs, demandés puis à peine utilisés.", "#/p/versytalks"],
      ["Activation et délai de première valeur", "Gestion de produit", "Le premier moment où l'utilisateur obtient une vraie valeur, et la vitesse pour l'atteindre.", "VersyNow : un essai sur des événements consécutifs, pour que la comparaison se ressente.", "#/p/versynow"],
      ["Divulgation progressive", "Design d'interaction", "Montrer ce que la décision du moment demande ; garder la profondeur à un pas.", "VersyNow : le réseautage configuré dans l'événement, pas comme un produit à part.", "#/p/versynow"],
      ["Humain dans la boucle et droits de décision", "Gouvernance de l'IA", "Qui approuve quoi, avec quelle information, avant que quoi que ce soit agisse.", "Acteurly : je révise les recommandations avant qu'elles atteignent les propriétaires.", "#/p/acteurly"],
      ["Capacité plutôt que consigne", "Garde-fous d'IA", "Empêcher un système de faire quelque chose en ne lui en donnant pas les moyens, pas en le lui demandant.", "GLRlight : les outils de l'agent renvoient des faits, jamais une note. VersyNow : huit règles revérifient chaque chiffre.", "#/p/glrlight"],
      ["IA responsable", "Accenture, Deloitte", "Concevoir pour la sécurité, la vie privée et l'équité dès le départ, pas après une plainte.", "GLRlight : pas de recherche par personne, pas d'adresses, l'historique des administrateurs rapporté comme des résultats d'entreprise.", "#/p/glrlight"]
    ] },
    { group: "Preuve et analytique", terms: [
      ["Taux de base (Bayes)", "Statistique", "La rareté d'un événement décide de la fréquence des fausses alertes.", "GLRlight : à 0,5 % d'insolvabilités par année, un détecteur qui paraît bon se trompe 29 fois sur 30.", "#/p/glrlight"],
      ["Biais de prescience et facteur de confusion", "Statistique", "De l'information du futur qui fuit dans un test ; une différence cachée qui fabrique un résultat.", "GLRlight : un rembobinage du registre, et un facteur de confusion par l'âge que j'avais créé.", "#/p/glrlight"],
      ["Valeur de l'information", "Analyse de décision", "Ne poser une question que si la réponse peut changer la décision.", "Acteurly : Aly ne demande que si le détail manquant change le conseil.", "#/p/acteurly"],
      ["Biais des coûts irrécupérables", "Économie comportementale", "L'effort passé ne justifie pas l'effort futur.", "VersyTalks : nous avons cessé de peaufiner la rétroaction entre pairs.", "#/p/versytalks"],
      ["Calibration et accord entre évaluateurs", "Évaluation", "Vérifier un correcteur contre le jugement d'experts avant de lui faire confiance.", "VersyTalks : le correcteur IA calibré sur 42 vraies soumissions, contre des entraîneurs.", "#/p/versytalks"]
    ] },
    { group: "Valeur et modèle opérationnel", terms: [
      ["Réalisation de la valeur", "Accenture, Deloitte", "Le client ressent vraiment le bénéfice pour lequel il a payé.", "VersyNow : l'essai redessiné pour que la valeur comparative apparaisse.", "#/p/versynow"],
      ["Économie unitaire", "Finance", "Ce qu'une unité coûte et rapporte.", "VersyNow : environ huit cents par compte rendu. VersyTalks : le partage d'un crédit.", "#/p/versynow"],
      ["Métrique North Star", "Gestion de produit", "Le chiffre le plus proche de la valeur que les clients viennent chercher.", "VersyTalks en avait deux : le temps sur la plateforme et les arguments écrits.", "#/p/versytalks"]
    ] },
    { group: "Marque et mise en marché (métier d'agence)", terms: [
      ["Positionnement et proposition unique", "Briefs d'agence", "Une seule chose que la marque représente, dite d'une seule façon.", "VersyNow vendait le rapport d'événement, pas les outils en direct.", "#/p/versynow"],
      ["Génération de demande full-funnel", "Marketing", "De la première notoriété à la demande qualifiée, bâti comme un seul système.", "STEKAR : site, contenu, publicité, salons et Lunch & Learn, à partir de zéro.", "#/story/stekar"],
      ["Soutien aux ventes (sales enablement)", "Marketing B2B", "Donner aux ventes ce qu'il faut pour gagner, au moment où il le faut.", "STEKAR : une grande part du rôle, ventes et marketing comme une seule équipe.", "#/story/stekar"],
      ["Brand lift", "Mesure en agence", "Le changement mesuré du nombre de gens qui connaissent et choisissent la marque.", "STEKAR : notoriété en hausse de 57 %, mesurée par les recherches de marque et un sondage.", "#/story/stekar"],
      ["Segmentation du risque d'attrition", "Marketing du cycle de vie", "Trouver les clients les plus susceptibles de partir et leur parler d'abord.", "GoCo : les signaux d'usage ont dirigé les campagnes de migration vers les comptes à risque.", "#/story/goco"]
    ] }
  ]
};
