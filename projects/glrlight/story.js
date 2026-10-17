// The GLRlight world: a walk into the City of London, then into the register.
import { esc, inkFigure, tally } from "../../js/ink.js";

export const text = {
  en: {
    street: {
      sign: "Cheapside, EC2",
      caption: "Every building is a company. Every company is a decision someone has to make about it."
    },
    situation: {
      h: "The problem",
      note: "Five million companies. Almost nobody checks.",
      p1: "There are roughly five million companies on the UK register. Every day, businesses take on suppliers, clients and partners from among them, and most of those decisions involve no counterparty check at all. Not because people are careless: the tools are wrong for them.",
      table: [
        ["Creditsafe", "Credit scores, monitoring", "Annual subscription, priced for procurement teams"],
        ["Dun & Bradstreet", "Global credit data", "An enterprise product"],
        ["Experian Business", "Credit scoring", "Subscription"],
        ["Companies House itself", "The raw data, free", "Six separate screens, written in company-law language"]
      ],
      tableHead: ["Who", "What it does", "Why it doesn't reach this user"],
      p2: "So the person most exposed to counterparty risk, the agency owner about to do £40,000 of work on 60-day terms, the freelancer taking a new client, the small supplier extending credit, has the least access to the check.",
      gaps: [
        ["They lag.", "A UK small company can file accounts up to nine months after its year end, so the 'current' financial picture is routinely 12 to 21 months old. By the time accounts show distress, trade creditors already know."],
        ["A number, not a narrative.", "'42 out of 100' tells a finance manager nothing actionable. They need which facts moved it, when, and what to ask about."],
        ["Free, but unreadable.", "Everything you'd want is already public: overdue filings, board departures, lenders' charges, a strike-off notice. It is spread across six endpoints in the language of company law. Reading it by hand takes half an hour. So nobody does."]
      ]
    },
    decision: {
      h: "The decision",
      note: "I did not try to build a better credit score.",
      p1: "That fight is unwinnable: the bureaus hold trade payment data I cannot get, the one thing that shows whether a company actually pays its invoices. Nothing in the public register reveals that.",
      p2: "So I took the layer above: the free, universal first pass that tells you whether paying for real diligence is warranted. A different job, and a defensible position rather than a worse version of an existing product.",
      p3: "Almost every technical decision follows from keeping two halves apart. A rules engine, ordinary code with no AI in it, reads a company's public filing record and produces the verdict. An AI layer explains that verdict in plain English, and an agent decides for itself which parts of the register are worth a second look.",
      diagram: {
        left: "Rules engine", leftSub: "ordinary code, no AI",
        registers: "6 registers", rules: "16 rules", verdict: "verdict",
        wall: "the line I kept",
        right: "AI layer", rightSub: "explains, then investigates",
        explain: "plain-English explanation", agent: "agent, at most 9 tool calls",
        caption: "Two halves, kept apart on purpose. The verdict never depends on the model."
      }
    },
    proof: {
      h: "The proof",
      note: "Same rules, three very different companies.",
      cards: [
        { name: "Greggs plc", verdict: "Green", score: "0", line: "Nothing adverse found on the public register.", aside: "A healthy retailer. Note what the tool says next: that is not the same as evidence it is financially sound.", tone: "green" },
        { name: "Carillion plc", verdict: "Red", score: "11", line: "The company is in liquidation. This is a formal insolvency process, not a warning sign.", aside: "Collapsed in 2018. The register still carries every step of it.", tone: "red" },
        { name: "Your supplier", verdict: "?", score: "", line: "Type any UK company name below and read its register in one second.", aside: "The real tool, running on the real register.", tone: "ink" }
      ]
    },
    evaluation: {
      h: "The evaluation",
      note: "I tried to prove it predicts collapse. The attempt failed, for a reason worth telling.",
      p1: "The question that matters for a screening tool is not 'does it flag Carillion today?' A company already in liquidation is trivially detectable. The real question is whether the signals would have fired twelve months before collapse, while the company was still trading.",
      p2: "The register only shows itself as it stands today, and today it says 'liquidation'. Testing against that would prove nothing: the engine would be reading a field that says 'this company failed'. That is look-ahead bias, the most common way a backtest lies. So I wrote a rewind that reconstructs the register as it plausibly stood on a given date, then scored failed companies a year before they failed against matched survivors.",
      p3: "Four runs. Each came back inverted: the signals fired more often in survivors than in the companies that failed. I found and fixed three defects along the way, and the inversion survived all of them, until the fourth one explained everything.",
      defects: [
        ["No sense of 'when'.", "Every time-window rule compared dates against today, so at a 2008 cutoff half the engine silently never fired. The backtest found a defect, not a miscalibration. Rules now take an explicit as-of date."],
        ["An anachronism.", "One rule flagged companies for missing a register that did not exist before April 2016. Most of my cutoffs fell before it. I was flagging every company in Britain for not complying with a law that had not been written."],
        ["An age confound I created myself.", "Several signals need two prior filings to fire, so young companies structurally cannot trip them. My older controls lit up, my younger cases scored zero. I was measuring age, not failure."],
        ["The sampling.", "Companies House search returns results in a fixed order, and my 'random' sample took a random chunk of it: thirty consecutive Scottish limited partnerships that file almost nothing. Every result reflected sample composition rather than company behaviour."]
      ],
      p4: "So I did not quietly drop the test. The scripts are in the repository with their flaws, the rewind is sound and reusable, and the write-up says what it would take to do this properly: a real sampling frame from the bulk register, company-type filtering, insolvency dates from a primary source, and samples in the hundreds.",
      diagram: {
        today: "the register today", todayStatus: "status: liquidation", leak: "leaks the answer",
        cutoff: "12 months before", collapse: "collapse", rewind: "rewind: status forced to active, later filings removed",
        caption: "Look-ahead bias, and the rewind that closes it."
      }
    },
    limits: {
      h: "What it cannot do",
      stamp: "not a prediction",
      note: "The evaluation showed it cannot predict insolvency. The product survived, because prediction was never the claim.",
      items: [
        "It cannot predict insolvency. It reads what a company has filed, and a formal insolvency step is already a fact on the register, not a forecast.",
        "It cannot see whether a company pays its invoices. That trade payment data belongs to the bureaus, and it is the reason a paid check still has a job.",
        "Filings can be perfectly punctual while the business underneath is struggling. A green verdict means nothing adverse was found, not that the company is sound.",
        "The accounts it reads can be 12 to 21 months old, by law. The register lags; the tool says so instead of hiding it."
      ]
    },
    tallies: [
      { value: "6", label: "public registers read" },
      { value: "16", label: "risk rules, no AI" },
      { value: "1s", label: "to a sourced verdict" },
      { value: "9", label: "agent tool calls, at most" }
    ],
    tryIt: {
      h: "Try it on a real company",
      note: "Start with Greggs, Carillion or Tesco. Or the supplier you were about to sign with.",
      open: "Open GLRlight in its own tab",
      code: "Read the code on GitHub",
      fallback: "If the tool doesn't load here, open it in its own tab."
    },
    questions: {
      h: "Questions I'm happy to take",
      items: [
        "Why not a credit score, and what does that choice protect you from?",
        "Where does the AI stop and the rules begin, and why there?",
        "What did the evaluation show, and what did you change because of it?",
        "Who pays for this, and how much would they pay?"
      ]
    }
  },
  fr: {
    street: {
      sign: "Cheapside, EC2",
      caption: "Chaque immeuble est une entreprise. Chaque entreprise est une décision que quelqu'un doit prendre à son sujet."
    },
    situation: {
      h: "Le problème",
      note: "Cinq millions d'entreprises. Presque personne ne vérifie.",
      p1: "Il y a environ cinq millions d'entreprises au registre britannique. Chaque jour, des entreprises y choisissent des fournisseurs, des clients et des partenaires, et la plupart de ces décisions se prennent sans aucune vérification. Non par négligence : les outils ne sont pas faits pour eux.",
      table: [
        ["Creditsafe", "Cotes de crédit, surveillance", "Abonnement annuel, tarifé pour les équipes d'approvisionnement"],
        ["Dun & Bradstreet", "Données de crédit mondiales", "Un produit d'entreprise"],
        ["Experian Business", "Cote de crédit", "Abonnement"],
        ["Companies House lui-même", "Les données brutes, gratuites", "Six écrans distincts, écrits dans la langue du droit des sociétés"]
      ],
      tableHead: ["Qui", "Ce qu'il fait", "Pourquoi il n'atteint pas cet utilisateur"],
      p2: "Donc la personne la plus exposée au risque de contrepartie, la propriétaire d'agence sur le point de faire 40 000 £ de travail à 60 jours, le pigiste qui prend un nouveau client, le petit fournisseur qui accorde du crédit, est celle qui a le moins accès à la vérification.",
      gaps: [
        ["Elles sont en retard.", "Une petite entreprise britannique peut déposer ses comptes jusqu'à neuf mois après sa fin d'exercice : le portrait financier « actuel » a souvent 12 à 21 mois. Quand les comptes montrent la détresse, les créanciers commerciaux le savent déjà."],
        ["Un chiffre, pas un récit.", "« 42 sur 100 » ne dit rien d'utile à un directeur financier. Il lui faut quels faits ont bougé la note, quand, et quoi demander."],
        ["Gratuit, mais illisible.", "Tout ce qu'on voudrait est déjà public : dépôts en retard, départs d'administrateurs, charges des prêteurs, avis de radiation. C'est réparti sur six points d'accès, dans la langue du droit des sociétés. Le lire à la main prend une demi-heure. Alors personne ne le fait."]
      ]
    },
    decision: {
      h: "La décision",
      note: "Je n'ai pas essayé de bâtir une meilleure cote de crédit.",
      p1: "Ce combat est perdu d'avance : les agences détiennent les données de paiement commercial que je ne peux pas obtenir, la seule chose qui montre si une entreprise paie vraiment ses factures. Rien dans le registre public ne le révèle.",
      p2: "J'ai donc pris la couche au-dessus : le premier filtre gratuit et universel qui dit si payer pour une vraie vérification en vaut la peine. Un autre travail, et une position défendable plutôt qu'une version moins bonne d'un produit existant.",
      p3: "Presque chaque décision technique découle du fait de garder deux moitiés séparées. Un moteur de règles, du code ordinaire sans IA, lit le dossier public d'une entreprise et produit le verdict. Une couche IA explique ce verdict en anglais courant, et un agent décide lui-même quelles parties du registre méritent un second regard.",
      diagram: {
        left: "Moteur de règles", leftSub: "du code ordinaire, zéro IA",
        registers: "6 registres", rules: "16 règles", verdict: "verdict",
        wall: "la ligne que j'ai tenue",
        right: "Couche IA", rightSub: "explique, puis enquête",
        explain: "explication en langage clair", agent: "agent, au plus 9 appels d'outils",
        caption: "Deux moitiés, séparées exprès. Le verdict ne dépend jamais du modèle."
      }
    },
    proof: {
      h: "La preuve",
      note: "Mêmes règles, trois entreprises très différentes.",
      cards: [
        { name: "Greggs plc", verdict: "Vert", score: "0", line: "Rien de défavorable au registre public.", aside: "Un détaillant en santé. Notez ce que l'outil dit ensuite : ce n'est pas la même chose qu'une preuve de solidité financière.", tone: "green" },
        { name: "Carillion plc", verdict: "Rouge", score: "11", line: "L'entreprise est en liquidation. C'est une procédure d'insolvabilité formelle, pas un signal d'alerte.", aside: "Effondrée en 2018. Le registre en porte encore chaque étape.", tone: "red" },
        { name: "Votre fournisseur", verdict: "?", score: "", line: "Tapez le nom de n'importe quelle entreprise britannique ci-dessous et lisez son registre en une seconde.", aside: "Le vrai outil, sur le vrai registre.", tone: "ink" }
      ]
    },
    evaluation: {
      h: "L'évaluation",
      note: "J'ai essayé de prouver qu'il prédit l'effondrement. L'essai a échoué, pour une raison qui vaut la peine d'être racontée.",
      p1: "La question qui compte pour un outil de filtrage n'est pas « signale-t-il Carillion aujourd'hui ? ». Une entreprise déjà en liquidation est trivialement détectable. La vraie question : les signaux auraient-ils tiré douze mois avant l'effondrement, pendant que l'entreprise opérait encore ?",
      p2: "Le registre ne se montre que tel qu'il est aujourd'hui, et aujourd'hui il dit « liquidation ». Tester contre ça ne prouverait rien : le moteur lirait un champ qui dit « cette entreprise a échoué ». C'est le biais de prescience, la façon la plus courante dont un test rétrospectif ment. J'ai donc écrit un rembobinage qui reconstruit le registre tel qu'il était plausiblement à une date donnée, puis noté des entreprises en faillite un an avant leur faillite, contre des survivantes appariées.",
      p3: "Quatre essais. Chacun est revenu inversé : les signaux tiraient plus souvent chez les survivantes que chez celles qui ont échoué. J'ai trouvé et corrigé trois défauts en chemin, et l'inversion a survécu à chacun, jusqu'à ce que le quatrième explique tout.",
      defects: [
        ["Aucune notion de « quand ».", "Chaque règle à fenêtre temporelle comparait les dates à aujourd'hui : à une date de coupure en 2008, la moitié du moteur ne tirait jamais, en silence. Le test a trouvé un défaut, pas un mauvais calibrage. Les règles prennent maintenant une date de référence explicite."],
        ["Un anachronisme.", "Une règle pénalisait les entreprises pour l'absence d'un registre qui n'existait pas avant avril 2016. La plupart de mes dates de coupure tombaient avant. Je signalais toutes les entreprises de Grande-Bretagne pour ne pas respecter une loi pas encore écrite."],
        ["Un facteur de confusion par l'âge, que j'avais créé.", "Plusieurs signaux exigent deux dépôts antérieurs : les jeunes entreprises ne peuvent structurellement pas les déclencher. Mes témoins, plus vieux, s'allumaient ; mes cas, plus jeunes, scoraient zéro. Je mesurais l'âge, pas l'échec."],
        ["L'échantillonnage.", "La recherche de Companies House renvoie les résultats dans un ordre fixe, et mon échantillon « aléatoire » en prenait un bloc au hasard : trente sociétés en commandite écossaises consécutives, qui ne déposent presque rien. Chaque résultat reflétait la composition de l'échantillon, pas le comportement des entreprises."]
      ],
      p4: "Je n'ai donc pas abandonné le test en silence. Les scripts sont dans le dépôt avec leurs défauts, le rembobinage est solide et réutilisable, et le rapport dit ce qu'il faudrait pour bien faire : un vrai cadre d'échantillonnage à partir du registre complet, un filtrage par type d'entreprise, des dates d'insolvabilité d'une source primaire, et des échantillons dans les centaines.",
      diagram: {
        today: "le registre aujourd'hui", todayStatus: "statut : liquidation", leak: "révèle la réponse",
        cutoff: "12 mois avant", collapse: "effondrement", rewind: "rembobinage : statut remis à actif, dépôts ultérieurs retirés",
        caption: "Le biais de prescience, et le rembobinage qui le ferme."
      }
    },
    limits: {
      h: "Ce qu'il ne peut pas faire",
      stamp: "pas une prédiction",
      note: "L'évaluation a montré qu'il ne peut pas prédire l'insolvabilité. Le produit a survécu, parce que la prédiction n'a jamais été la promesse.",
      items: [
        "Il ne peut pas prédire l'insolvabilité. Il lit ce qu'une entreprise a déposé, et une étape formelle d'insolvabilité est déjà un fait au registre, pas une prévision.",
        "Il ne peut pas voir si une entreprise paie ses factures. Ces données de paiement appartiennent aux agences, et c'est la raison pour laquelle une vérification payante garde sa place.",
        "Les dépôts peuvent être parfaitement ponctuels pendant que l'entreprise en dessous souffre. Un verdict vert veut dire que rien de défavorable n'a été trouvé, pas que l'entreprise est solide.",
        "Les comptes qu'il lit peuvent avoir 12 à 21 mois, légalement. Le registre est en retard ; l'outil le dit au lieu de le cacher."
      ]
    },
    tallies: [
      { value: "6", label: "registres publics lus" },
      { value: "16", label: "règles de risque, zéro IA" },
      { value: "1 s", label: "jusqu'à un verdict sourcé" },
      { value: "9", label: "appels d'outils de l'agent, au plus" }
    ],
    tryIt: {
      h: "Essayez-le sur une vraie entreprise",
      note: "Commencez par Greggs, Carillion ou Tesco. Ou le fournisseur que vous alliez signer.",
      open: "Ouvrir GLRlight dans son propre onglet",
      code: "Lire le code sur GitHub",
      fallback: "Si l'outil ne se charge pas ici, ouvrez-le dans son propre onglet."
    },
    questions: {
      h: "Les questions que je prends volontiers",
      items: [
        "Pourquoi pas une cote de crédit, et de quoi ce choix vous protège-t-il ?",
        "Où l'IA s'arrête-t-elle et où les règles commencent-elles, et pourquoi là ?",
        "Qu'a montré l'évaluation, et qu'avez-vous changé à cause d'elle ?",
        "Qui paie pour ça, et combien paierait-il ?"
      ]
    }
  }
};

// The street. 1100 x 350, ground at y=290.
function street(s) {
  const win = (x, y) => `<path class="thin" d="M${x} ${y} h22 v16 h-22 z"/>`;
  let wins = "";
  for (const y of [138, 174, 210]) for (const x of [56, 92, 128, 164]) wins += win(x, y);
  let wins2 = "";
  for (const y of [166, 200, 234]) for (const x of [676, 712]) wins2 += win(x, y);
  let grid = "";
  for (let y = 110; y <= 270; y += 20) grid += `M782 ${y} H858 `;
  return `
    <path d="M0 290 H1100"/>
    <path class="thin" d="M0 302 H1100"/>
    <path class="pencil" d="M0 322 H1100" style="stroke-dasharray:14 12"/>
    <path d="M40 60 H214 V86 H40 Z"/>
    <text x="127" y="79" class="hand small" text-anchor="middle">${esc(s.sign)}</text>
    <path class="thin" d="M48 86 V290"/>

    <path d="M40 290 V120 H200 V290"/>
    <path class="thin" d="M34 120 H206"/>
    ${wins}
    <text x="120" y="246" class="hand small" text-anchor="middle">Carillion plc</text>
    <path d="M108 290 V254 H132 V290"/>

    <path d="M220 290 V180 H330 V290"/>
    <path d="M214 180 L224 162 H326 L336 180"/>
    <path class="thin" d="M232 180 V188 M250 180 V188 M268 180 V188 M286 180 V188 M304 180 V188 M322 180 V188"/>
    <text x="275" y="204" class="hand small" text-anchor="middle">Greggs</text>
    <path d="M232 290 V236 H258 V290"/>
    <path d="M272 220 H318 V262 H272 Z"/>
    <path class="thin" d="M280 232 H310 M280 242 H304"/>

    <path d="M360 290 V190"/>
    <path d="M360 190 C360 176 372 176 372 186"/>
    <path d="M366 176 H380 V192 H366 Z"/>

    <path d="M400 290 V200 H640 V290"/>
    <path class="thin" d="M424 200 V290 M448 200 V290 M472 200 V290 M568 200 V290 M592 200 V290 M616 200 V290"/>
    <path d="M396 200 L520 158 L644 200"/>
    <path d="M404 200 V110 H436 V200 M404 110 L420 90 L436 110"/>
    <path d="M604 200 V110 H636 V200 M604 110 L620 90 L636 110"/>
    <path d="M470 158 V120 H570 V158"/>
    <path class="thin" d="M482 120 V158 M500 120 V158 M540 120 V158 M558 120 V158"/>
    <path d="M478 120 C478 58 562 58 562 120"/>
    <path d="M512 72 V56 H528 V72"/>
    <path d="M520 56 V44 M514 50 H526"/>
    <path d="M500 290 V240 H540 V290"/>
    <path d="M500 240 C500 224 540 224 540 240"/>

    <path d="M660 290 V150 H760 V290"/>
    <path d="M700 150 V132 H716 V150"/>
    ${wins2}
    <path d="M740 290 V256 H752 V290"/>

    <path d="M780 290 V90 H860 V290"/>
    <path class="thin" d="${grid}"/>
    <path class="thin" d="M800 90 V290 M820 90 V290 M840 90 V290"/>

    <path d="M884 290 C878 200 896 150 930 70 C964 150 982 200 976 290"/>
    <path class="thin" d="M890 220 L960 120 M886 250 L950 160 M900 180 L940 110 M970 220 L900 120 M974 250 L910 160 M960 180 L920 110"/>

    <path class="fill-red" d="M1012 212 H1038 V288 H1012 Z" opacity=".3"/>
    <path d="M1010 290 V210 H1040 V290"/>
    <path d="M1006 210 L1025 198 L1044 210"/>
    <path class="thin" d="M1016 220 H1034 M1016 236 H1034 M1016 252 H1034"/>

    <path d="M120 328 V314 L134 300 H184 L198 314 V328 Z"/>
    <path class="thin" d="M138 302 L130 314 H190 L180 302"/>
    <circle cx="136" cy="330" r="6"/>
    <circle cx="182" cy="330" r="6"/>
    <path class="thin" d="M150 300 V294 H168 V300"/>`;
}

// The two halves. 900 x 300.
function halves(d) {
  return `
    <path d="M30 60 H420 V262 H30 Z"/>
    <text x="48" y="90" class="hand">${esc(d.left)}</text>
    <text x="48" y="112" class="hand small">${esc(d.leftSub)}</text>
    <path d="M60 150 H110 V190 H60 Z M66 158 H104 M66 166 H98 M66 174 H102 M66 182 H96" />
    <path class="thin" d="M114 170 H140 M140 170 L134 165 M140 170 L134 175"/>
    <text x="85" y="214" class="hand small" text-anchor="middle">${esc(d.registers)}</text>
    <path d="M146 140 H246 V200 H146 Z"/>
    <path class="thin" d="M158 152 H234 M158 162 H222 M158 172 H230 M158 182 H214 M158 192 H226"/>
    <text x="196" y="222" class="hand small" text-anchor="middle">${esc(d.rules)}</text>
    <path class="thin" d="M250 170 H276 M276 170 L270 165 M276 170 L270 175"/>
    <path class="fill-green" d="M286 142 H342 V160 H286 Z" opacity=".55"/>
    <path class="fill-amber" d="M286 162 H342 V180 H286 Z" opacity=".55"/>
    <path class="fill-red" d="M286 182 H342 V200 H286 Z" opacity=".55"/>
    <path d="M286 142 H342 V200 H286 Z"/>
    <text x="314" y="222" class="hand small" text-anchor="middle">${esc(d.verdict)}</text>

    <path class="pencil" d="M450 40 V276" style="stroke-dasharray:8 8"/>
    <text x="450" y="296" class="hand small" text-anchor="middle">${esc(d.wall)}</text>
    <path class="thin" d="M424 170 H474 M474 170 L468 165 M474 170 L468 175"/>

    <path d="M480 60 H870 V262 H480 Z"/>
    <text x="498" y="90" class="hand">${esc(d.right)}</text>
    <text x="498" y="112" class="hand small">${esc(d.rightSub)}</text>
    <path d="M510 140 H660 V196 H540 L524 212 V196 H510 Z"/>
    <path class="thin" d="M526 156 H640 M526 168 H620 M526 180 H630"/>
    <text x="585" y="232" class="hand small" text-anchor="middle">${esc(d.explain.split(" ")[0])}</text>
    <text x="585" y="250" class="hand small" text-anchor="middle">${esc(d.explain.split(" ").slice(1).join(" "))}</text>
    <circle cx="770" cy="150" r="14"/>
    <path d="M748 196 C750 174 790 174 792 196"/>
    <path class="thin" d="M784 142 C806 130 822 134 836 150 M836 150 L828 148 M836 150 L832 142"/>
    <path class="thin" d="M820 160 H846 V176 H820 Z M820 184 H846 V200 H820 Z"/>
    <text x="790" y="232" class="hand small" text-anchor="middle">${esc(d.agent.split(", ")[0])}</text>
    <text x="790" y="250" class="hand small" text-anchor="middle">${esc(d.agent.split(", ").slice(1).join(", "))}</text>`;
}

// Look-ahead bias. 900 x 200.
function rewind(d) {
  return `
    <path d="M60 120 H840"/>
    <path class="thin" d="M840 120 L832 114 M840 120 L832 126"/>
    <path d="M700 108 V132"/>
    <text x="700" y="156" class="hand small" text-anchor="middle">${esc(d.collapse)}</text>
    <path class="pencil" d="M430 100 V140" style="stroke-dasharray:5 5"/>
    <text x="430" y="162" class="hand small" text-anchor="middle">${esc(d.cutoff)}</text>
    <path d="M716 40 H892 V86 H716 Z"/>
    <text x="804" y="58" class="hand small" text-anchor="middle">${esc(d.today)}</text>
    <text x="804" y="78" class="hand small" text-anchor="middle">${esc(d.todayStatus)}</text>
    <path class="pencil" d="M714 64 C640 60 520 70 440 96"/>
    <path class="pencil" d="M450 86 L440 96 L452 100"/>
    <text x="600" y="54" class="hand small" text-anchor="middle">${esc(d.leak)}</text>
    <path d="M60 40 H420 V86 H60 Z"/>
    <text x="240" y="68" class="hand small" text-anchor="middle">${esc(d.rewind)}</text>
    <path class="thin" d="M420 64 H428 M428 64 L428 96"/>`;
}

function filingCards(cards) {
  return `<div class="filings">${cards.map((c, i) => `
    <article class="filing ${c.tone} ink-on-view" style="--i:${i}">
      <header>
        <span class="filing-name">${esc(c.name)}</span>
        <span class="filing-verdict">${esc(c.verdict)}</span>
        ${c.score ? `<span class="filing-score">${esc(c.score)}</span>` : ""}
      </header>
      <p class="filing-line">${esc(c.line)}</p>
      <p class="filing-aside">${esc(c.aside)}</p>
    </article>`).join("")}</div>`;
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

      ${inkFigure(street(tx.street), { viewBox: "0 0 1100 350", caption: tx.street.caption, cls: "wide street" })}

      <aside class="margin"><p class="margin-note">${esc(tx.situation.note)}</p></aside>
      <div class="body">
        <h2>${esc(tx.situation.h)}</h2>
        <p class="lede">${esc(tx.situation.p1)}</p>
        <table class="ruled">
          <thead><tr>${tx.situation.tableHead.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
          <tbody>${tx.situation.table.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
        </table>
        <p>${esc(tx.situation.p2)}</p>
        <dl class="gaps">${tx.situation.gaps.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}</dl>
      </div>

      <aside class="margin"><p class="margin-note red">${esc(tx.decision.note)}</p></aside>
      <div class="body">
        <h2>${esc(tx.decision.h)}</h2>
        <p class="lede">${esc(tx.decision.p1)}</p>
        <p>${esc(tx.decision.p2)}</p>
        <p>${esc(tx.decision.p3)}</p>
      </div>
      ${inkFigure(halves(tx.decision.diagram), { viewBox: "0 0 900 300", caption: tx.decision.diagram.caption, cls: "wide" })}

      <aside class="margin"><p class="margin-note">${esc(tx.proof.note)}</p></aside>
      <div class="body">
        <h2>${esc(tx.proof.h)}</h2>
      </div>
      <div class="wide">${filingCards(tx.proof.cards)}</div>

      <aside class="margin"><p class="margin-note red">${esc(tx.evaluation.note)}</p></aside>
      <div class="body">
        <h2>${esc(tx.evaluation.h)}</h2>
        <p class="lede">${esc(tx.evaluation.p1)}</p>
        <p>${esc(tx.evaluation.p2)}</p>
      </div>
      ${inkFigure(rewind(tx.evaluation.diagram), { viewBox: "0 0 900 180", caption: tx.evaluation.diagram.caption, cls: "wide" })}
      <aside class="margin"></aside>
      <div class="body">
        <p>${esc(tx.evaluation.p3)}</p>
        <dl class="gaps defects">${tx.evaluation.defects.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}</dl>
        <p style="margin-top:22px">${esc(tx.evaluation.p4)}</p>
      </div>

      <aside class="margin"><p class="margin-note"><span class="stamp">${esc(tx.limits.stamp)}</span><br><br>${esc(tx.limits.note)}</p></aside>
      <div class="body">
        <h2>${esc(tx.limits.h)}</h2>
        <ul class="limits">${tx.limits.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
      </div>

      <aside class="margin"><p class="margin-note">${esc(t("story.changed.note"))}</p></aside>
      <div class="body">
        ${tally(tx.tallies)}
      </div>

      <aside class="margin"><p class="margin-note">${esc(tx.tryIt.note)}</p></aside>
      <div class="body">
        <h2>${esc(tx.tryIt.h)}</h2>
        <div class="actions">
          <a class="btn" href="${esc(p.links.live)}" target="_blank" rel="noopener">${esc(tx.tryIt.open)}</a>
          <a class="btn quiet" href="${esc(p.links.code)}" target="_blank" rel="noopener">${esc(tx.tryIt.code)}</a>
        </div>
      </div>
      <div class="wide">
        <div class="window">
          <div class="window-bar"><span></span><span></span><span></span><em>glrlight.vercel.app</em></div>
          <iframe src="${esc(p.links.live)}" title="GLRlight" loading="lazy" referrerpolicy="no-referrer"></iframe>
        </div>
        <p class="margin-note" style="text-align:right;margin-top:14px">${esc(tx.tryIt.fallback)}</p>
      </div>

      <aside class="margin"></aside>
      <div class="body">
        <h2 class="h-quiet">${esc(tx.questions.h)}</h2>
        <p class="questions-hint">${esc(t("story.questions.hint"))}</p>
        <ul class="questions">${tx.questions.items.map((q) => `<li>${esc(q)}</li>`).join("")}</ul>
        <nav class="turn"><a class="btn quiet" href="#/">${esc(t("nav.back"))}</a></nav>
      </div>
    </div>
  </section>`;
}
