// The VersyTalks world: a debate platform that had the traffic and not the business, until the direction changed.
import { esc, inkFigure, tally } from "../../js/ink.js";

export const text = {
  en: {
    hall: { motion: "This house believes participation is not a business", caption: "The hall. Debaters, coaches and programs, and a room that only fills if the platform is worth their time." },
    situation: {
      h: "The situation",
      note: "Traffic, participation, surveys, features. Not a business.",
      p1: "VersyTalks had attention. Peak weeks reached about 2,500 users, and the forum-like experience generated traffic and periods of high participation. Revenue stayed low, even at low prices, and participation was hard to sustain: debates were not something people wanted to repeat in the same form.",
      p2: "The team did what a reasonable team does. Live discussions, a debate revival, prizes, promotions, leaderboards, an argument arena, and repeated surveys about topics, formats, friends and following. The requested improvements shipped. The commercial problem stayed where it was."
    },
    board: {
      h: "What we tried, and what we built instead",
      note: "The left column shipped and kept people busy. None of it changed what a paying debater was willing to pay for.",
      kept: "Built for the competition ecosystem",
      cut: "Tried under the forum model",
      items: [
        { k: false, t: "Live discussions and debate revival", d: "Bringing conversations back when they faded." },
        { k: false, t: "Prizes, promotions, leaderboards", d: "Rewards for activity. Activity went up; willingness to pay didn't." },
        { k: false, t: "Argument arena", d: "A public ring for arguments. Still live, still not the business." },
        { k: false, t: "Surveys on topics, formats, friends, following", d: "Users asked; we built. Revenue didn't follow." },
        { k: false, t: "Lower prices", d: "Cheaper access to an experience people could get free elsewhere." },
        { k: true, t: "Tournaments and workshops", d: "Workshops free, tournaments paid with a commission. Coaches host; debaters show up for a reason." },
        { k: true, t: "Practice rooms and AI evaluations", d: "Structured practice with feedback, built on coaches' own criteria." },
        { k: true, t: "Coach marketplace, credits and calendars", d: "A way for coaches to sell expertise, and for debaters to buy it in small units." },
        { k: true, t: "Teams and program licences", d: "Coaches and programs manage teams and see progress. VersyEdu lives here now." },
        { k: true, t: "Debate assessment and twelve drills", d: "A starting point for every debater, designed by me." }
      ]
    },
    turn: {
      h: "The turn",
      note: "Saying 'we are not a forum' did not stop users from comparing us with one.",
      p1: "The explanation that held up was uncomfortable. The value was too low for the debater willing to pay, and the experience, whatever we called it, competed with Reddit, Quora, Discord and Facebook groups, all free. Internal intentions and product labels did not remove that comparison.",
      p2: "So the question changed from 'how do we get more activity' to 'what would a debater value enough to pay for and return to'. The answer was progress: competing, practising in format, getting evaluated, finding a coach. That is a different role in a debater's life than a place to post.",
      p3: "The repositioning changed the customer job, the role of coaches, the purpose of practice and the institutional offering. Sales increased substantially afterwards. I don't attach a percentage to that: the direction is what I can stand behind."
    },
    numbers: {
      h: "The two numbers",
      note: "Every feature had to answer to these, or it didn't ship.",
      p1: "Two metrics anchored the roadmap: time spent on the platform, and arguments written. The second did double duty. Arguments were engagement, and they were also the raw material for a specialist debate model I have been exploring with coaches. That model work is developmental: coaches review and annotate evaluations, and further training is being explored. No proprietary model is in production.",
      diagram: { left: "a feature", a: "time on the platform", b: "arguments written", data: "annotated by coaches", model: "a specialist model, in development", caption: "The test every feature had to pass, and where the arguments go." }
    },
    assessment: {
      h: "The assessment and the twelve drills",
      note: "I designed both. The assessment has been completed more than five hundred times.",
      p1: "A broad platform is hard to enter: every drill, coach and option at once, with no context. The debate assessment is about twenty minutes of questions that give a debater a level and a starting point, linked to coaching. The twelve drills, from Classic Argument to Fallacy Identification, give that starting point something to do next.",
      p2: "The assessment is also meant to feed a recommendation layer that suggests drills, training and coaches. That layer is upcoming, not shipped. More than five hundred completions say people want the starting point; they don't yet prove learning gains or coaching conversion."
    },
    grader: {
      h: "AI evaluation and coach feedback",
      note: "An AI that scores debates is only useful if coaches agree with it.",
      p1: "About five hundred coach gradings of arguments were used to develop the rubric and the retrieval material. The grader runs on Claude's API with that rubric, calibrated against 42 real submissions so its scores track what coaches would give, and launched as a capped free beta with go/stop targets. About two hundred arguments have been graded by the AI with coaches reviewing and annotating the results for later model work.",
      p2: "Those three counts measure different things, and the page keeps them apart on purpose: coach gradings, AI-graded arguments and assessment completions. The strongest claim I can make is the design of domain-specific scoring criteria, prompts, retrieval and human review, not an accuracy figure.",
      diagram: { x: "coach's score", y: "grader's score", n: "42 debates", line: "agreement", caption: "The calibration method: each dot a debate scored by a coach and by the grader. An illustration, not the data." }
    },
    events: {
      h: "Workshops and tournaments",
      note: "The audience we had built became a reason for coaches to host.",
      p1: "About four events a month, filling within two weeks. Workshops are free; tournaments are paid, with a commission to the platform. Coaches who host have reported about fifteen percent more bookings, and the platform sees roughly five coaching inquiries a week. Those are my own figures with no baseline attached; they describe activity, not a proven causal effect.",
      p2: "The logic is more specific than 'grow traffic'. An audience becomes useful to a coach when the platform gives them a format for demonstrating expertise and attracting demand. Distribution and product value start to reinforce each other.",
      diagram: { one: "one coach", team: "a team", season: "next season, again", caption: "Why a coach is worth more than a user: a team, and the same team next season." }
    },
    traffic: {
      h: "The numbers, with their definitions attached",
      note: "Different units, different periods. They don't add up to one funnel, and the page doesn't pretend they do.",
      head: ["Figure", "What it counts"],
      rows: [
        ["≈ 2,000 a week", "weekly active users; peak weeks reached about 2,500"],
        ["≈ 800 a month", "new signups"],
        ["≈ 10,000 a month", "site visits; the United States and Singapore lead"],
        ["500+", "debate assessment completions"],
        ["≈ 4 a month", "workshops and tournaments, booked within two weeks"],
        ["≈ 5 a week", "coaching inquiries"]
      ]
    },
    pricing: {
      h: "Pricing and credits, as designed",
      note: "Historical terms, currency unspecified. Not a live price list.",
      head: ["Term", "Value"],
      rows: [
        ["Tier 1", "3.99 a month"],
        ["Tier 2", "12.99 a month or 119.99 a year; early Tier 1 supporters got it free for nine months"],
        ["One credit", "one dollar; VersyTalks keeps 17%, the payment processor about 3%, the rest goes to the coach"],
        ["An evaluation", "five credits, the same price for every coach"],
        ["Debater of the Month", "100 credits a month, split among debaters"]
      ]
    },
    judgment: {
      h: "What I'd tell a client",
      note: "The narrow conclusion, not a universal law.",
      p: "A product can attract attention and still fail to create enough value for someone to pay. The fix was not another engagement feature; it was a different answer to what the paying user values. More activity never settled that question. Asking what frustrates people, and what would make them change behaviour, did."
    },
    tallies: [
      { value: "40 → 10,000", label: "users" },
      { value: "≈ 2,500", label: "users in the busiest weeks of the forum era" },
      { value: "500+", label: "assessment completions" },
      { value: "12", label: "drills, designed by me" }
    ],
    tryIt: { h: "See it live", note: "The platform is live: assessment, drills, coaching, workshops and tournaments.", open: "Open VersyTalks" },
    questions: {
      h: "Questions I'm happy to take",
      items: [
        "When did you accept that the problem was deeper than engagement, and what did you resist believing?",
        "Which feature did users strongly request that turned out to be commercially unimportant?",
        "What did you deliberately stop doing after the repositioning, and what did it cost?",
        "Why calibrate the grader against coaches before trusting it?"
      ]
    }
  },
  fr: {
    hall: { motion: "Cette chambre croit que la participation n'est pas un modèle d'affaires", caption: "La salle. Des débatteurs, des entraîneurs et des programmes, et une pièce qui ne se remplit que si la plateforme vaut leur temps." },
    situation: {
      h: "La situation",
      note: "Du trafic, de la participation, des sondages, des fonctionnalités. Pas un modèle d'affaires.",
      p1: "VersyTalks avait de l'attention. Les meilleures semaines atteignaient environ 2 500 utilisateurs, et l'expérience de type forum générait du trafic et des périodes de forte participation. Les revenus restaient bas, même à bas prix, et la participation était difficile à soutenir : les débats n'étaient pas quelque chose que les gens voulaient répéter sous la même forme.",
      p2: "L'équipe a fait ce qu'une équipe raisonnable fait. Des discussions en direct, une relance des débats, des prix, des promotions, des classements, une arène d'arguments, et des sondages répétés sur les sujets, les formats, les amis et les abonnements. Les améliorations demandées ont été livrées. Le problème commercial est resté là où il était."
    },
    board: {
      h: "Ce qu'on a essayé, et ce qu'on a bâti à la place",
      note: "La colonne de gauche a été livrée et a occupé les gens. Rien n'y a changé ce qu'un débatteur était prêt à payer.",
      kept: "Bâti pour l'écosystème de compétition",
      cut: "Essayé sous le modèle forum",
      items: [
        { k: false, t: "Discussions en direct et relance des débats", d: "Ramener les conversations quand elles s'essoufflaient." },
        { k: false, t: "Prix, promotions, classements", d: "Des récompenses pour l'activité. L'activité a monté ; la volonté de payer, non." },
        { k: false, t: "Arène d'arguments", d: "Un ring public pour les arguments. Toujours en ligne, toujours pas le modèle d'affaires." },
        { k: false, t: "Sondages sur les sujets, formats, amis, abonnements", d: "Les utilisateurs ont demandé ; on a bâti. Les revenus n'ont pas suivi." },
        { k: false, t: "Prix plus bas", d: "Un accès moins cher à une expérience disponible gratuitement ailleurs." },
        { k: true, t: "Tournois et ateliers", d: "Ateliers gratuits, tournois payants avec commission. Les entraîneurs animent ; les débatteurs viennent pour une raison." },
        { k: true, t: "Salles de pratique et évaluations IA", d: "De la pratique structurée avec rétroaction, bâtie sur les critères des entraîneurs." },
        { k: true, t: "Marché d'entraîneurs, crédits et calendriers", d: "Une façon pour les entraîneurs de vendre leur expertise, et pour les débatteurs de l'acheter en petites unités." },
        { k: true, t: "Équipes et licences programme", d: "Les entraîneurs et les programmes gèrent des équipes et suivent les progrès. VersyEdu vit ici maintenant." },
        { k: true, t: "Évaluation de débat et douze exercices", d: "Un point de départ pour chaque débatteur, conçu par moi." }
      ]
    },
    turn: {
      h: "Le virage",
      note: "Dire « nous ne sommes pas un forum » n'empêchait pas les utilisateurs de nous comparer à un forum.",
      p1: "L'explication qui a tenu était inconfortable. La valeur était trop faible pour le débatteur prêt à payer, et l'expérience, peu importe son nom, était en concurrence avec Reddit, Quora, Discord et les groupes Facebook, tous gratuits. Les intentions internes et les étiquettes de produit n'enlevaient pas cette comparaison.",
      p2: "La question est donc passée de « comment avoir plus d'activité » à « que valoriserait un débatteur au point de payer et de revenir ». La réponse : le progrès. Compétitionner, pratiquer en format, se faire évaluer, trouver un entraîneur. C'est un autre rôle dans la vie d'un débatteur qu'un endroit où publier.",
      p3: "Le repositionnement a changé le travail du client, le rôle des entraîneurs, le but de la pratique et l'offre institutionnelle. Les ventes ont augmenté substantiellement ensuite. Je n'y rattache pas de pourcentage : la direction est ce que je peux défendre."
    },
    numbers: {
      h: "Les deux chiffres",
      note: "Chaque fonctionnalité devait leur répondre, sinon elle ne sortait pas.",
      p1: "Deux mesures ancraient la feuille de route : le temps passé sur la plateforme et les arguments écrits. La deuxième servait deux fois. Les arguments étaient de l'engagement, et aussi la matière première d'un modèle spécialisé en débat que l'équipe explore avec des entraîneurs. Ce travail est en développement : les entraîneurs révisent et annotent des évaluations, et un entraînement plus poussé est à l'étude. Aucun modèle propriétaire n'est en production.",
      diagram: { left: "une fonctionnalité", a: "temps sur la plateforme", b: "arguments écrits", data: "annotés par des entraîneurs", model: "un modèle spécialisé, en développement", caption: "Le test que chaque fonctionnalité devait passer, et où vont les arguments." }
    },
    assessment: {
      h: "L'évaluation et les douze exercices",
      note: "J'ai conçu les deux. L'évaluation a été complétée plus de cinq cents fois.",
      p1: "Une plateforme large est difficile à aborder : tous les exercices, entraîneurs et options d'un coup, sans contexte. L'évaluation de débat, c'est une vingtaine de minutes de questions qui donnent à un débatteur un niveau et un point de départ, liés à l'entraînement. Les douze exercices, de l'argument classique à l'identification des sophismes, donnent à ce point de départ une suite.",
      p2: "L'évaluation doit aussi alimenter une couche de recommandation qui suggérera des exercices, de la formation et des entraîneurs. Cette couche est à venir, pas livrée. Plus de cinq cents complétions disent que les gens veulent le point de départ ; elles ne prouvent pas encore des gains d'apprentissage ni une conversion vers l'entraînement."
    },
    grader: {
      h: "Évaluation par IA et rétroaction des entraîneurs",
      note: "Une IA qui note les débats n'est utile que si les entraîneurs sont d'accord avec elle.",
      p1: "Environ cinq cents notations d'arguments par des entraîneurs ont servi à développer la grille et le matériel de recherche. Le correcteur fonctionne sur l'API de Claude avec cette grille, calibré contre 42 vraies soumissions pour que ses notes suivent celles des entraîneurs, et lancé en bêta gratuite plafonnée avec des cibles go/stop. Environ deux cents arguments ont été notés par l'IA, les entraîneurs révisant et annotant les résultats en vue d'un travail de modèle ultérieur.",
      p2: "Ces trois comptes mesurent des choses différentes, et la page les garde séparés exprès : notations d'entraîneurs, arguments notés par l'IA et complétions de l'évaluation. L'affirmation la plus solide que je peux faire, c'est la conception de critères de notation propres au domaine, de consignes, de recherche et de révision humaine, pas un chiffre de précision.",
      diagram: { x: "note de l'entraîneur", y: "note du correcteur", n: "42 débats", line: "accord", caption: "La méthode de calibration : chaque point, un débat noté par un entraîneur et par le correcteur. Une illustration, pas les données." }
    },
    events: {
      h: "Ateliers et tournois",
      note: "Le public qu'on avait bâti est devenu une raison pour les entraîneurs d'animer.",
      p1: "Environ quatre événements par mois, complets en moins de deux semaines. Les ateliers sont gratuits ; les tournois sont payants, avec une commission à la plateforme. Les entraîneurs qui animent rapportent environ quinze pour cent de réservations de plus, et la plateforme reçoit à peu près cinq demandes d'entraînement par semaine. Ce sont mes propres chiffres, sans base de comparaison ; ils décrivent l'activité, pas un effet causal prouvé.",
      p2: "La logique est plus précise que « faire grandir le trafic ». Un public devient utile à un entraîneur quand la plateforme lui donne un format pour démontrer son expertise et attirer la demande. La distribution et la valeur du produit commencent à se renforcer l'une l'autre.",
      diagram: { one: "un entraîneur", team: "une équipe", season: "la saison suivante, encore", caption: "Pourquoi un entraîneur vaut plus qu'un utilisateur : une équipe, et la même équipe la saison suivante." }
    },
    traffic: {
      h: "Les chiffres, avec leurs définitions",
      note: "Des unités différentes, des périodes différentes. Ils ne forment pas un seul entonnoir, et la page ne fait pas semblant.",
      head: ["Chiffre", "Ce qu'il compte"],
      rows: [
        ["≈ 2 000 par semaine", "utilisateurs actifs hebdomadaires ; les meilleures semaines ont atteint environ 2 500"],
        ["≈ 800 par mois", "nouvelles inscriptions"],
        ["≈ 10 000 par mois", "visites du site ; les États-Unis et Singapour en tête"],
        ["500+", "complétions de l'évaluation de débat"],
        ["≈ 4 par mois", "ateliers et tournois, complets en moins de deux semaines"],
        ["≈ 5 par semaine", "demandes d'entraînement"]
      ]
    },
    pricing: {
      h: "Tarification et crédits, tels que conçus",
      note: "Conditions historiques, devise non précisée. Pas une liste de prix en vigueur.",
      head: ["Terme", "Valeur"],
      rows: [
        ["Palier 1", "3,99 par mois"],
        ["Palier 2", "12,99 par mois ou 119,99 par année ; les premiers abonnés du palier 1 l'ont eu gratuitement neuf mois"],
        ["Un crédit", "un dollar ; VersyTalks garde 17 %, le processeur de paiement environ 3 %, le reste va à l'entraîneur"],
        ["Une évaluation", "cinq crédits, le même prix pour tous les entraîneurs"],
        ["Débatteur du mois", "100 crédits par mois, répartis entre les débatteurs"]
      ]
    },
    judgment: {
      h: "Ce que je dirais à un client",
      note: "La conclusion étroite, pas une loi universelle.",
      p: "Un produit peut attirer l'attention et quand même ne pas créer assez de valeur pour que quelqu'un paie. La solution n'était pas une autre fonctionnalité d'engagement ; c'était une autre réponse à ce que l'utilisateur payant valorise. Plus d'activité n'a jamais réglé cette question. Demander ce qui frustre les gens, et ce qui les ferait changer de comportement, oui."
    },
    tallies: [
      { value: "40 → 10 000", label: "utilisateurs" },
      { value: "≈ 2 500", label: "utilisateurs dans les meilleures semaines de l'ère forum" },
      { value: "500+", label: "complétions de l'évaluation" },
      { value: "12", label: "exercices, conçus par moi" }
    ],
    tryIt: { h: "Voir en ligne", note: "La plateforme est en ligne : évaluation, exercices, entraînement, ateliers et tournois.", open: "Ouvrir VersyTalks" },
    questions: {
      h: "Les questions que je prends volontiers",
      items: [
        "Quand avez-vous accepté que le problème était plus profond que l'engagement, et qu'avez-vous résisté à croire ?",
        "Quelle fonctionnalité fortement demandée s'est révélée commercialement sans importance ?",
        "Qu'avez-vous délibérément arrêté de faire après le repositionnement, et qu'est-ce que ça a coûté ?",
        "Pourquoi calibrer le correcteur contre les entraîneurs avant de lui faire confiance ?"
      ]
    }
  }
};

// The hall, seen from the back. 1100 x 360.
function hall(h) {
  let rows = "";
  for (let r = 0; r < 4; r++) {
    const y = 250 + r * 26, n = 14 + r * 2, x0 = 550 - (n - 1) * 17;
    let heads = "";
    for (let i = 0; i < n; i++) heads += `M${x0 + i * 34 - 6} ${y} a6 6 0 0 1 12 0 `;
    rows += `<path class="thin" d="${heads}"/>`;
  }
  return `
    <path d="M60 120 H1040"/>
    <path class="thin" d="M60 120 V330 M1040 120 V330"/>
    <path d="M330 40 H770 V110 H330 Z"/>
    <path class="thin" d="M346 56 H754 M346 72 H700 M346 88 H730"/>
    <text x="550" y="98" class="hand small" text-anchor="middle" style="font-size:13px">${esc(h.motion)}</text>
    <path d="M180 220 H920 V236 H180 Z"/>
    <path d="M300 220 V180 H360 V220 M296 180 H364 L360 172 H304 Z"/>
    <path d="M330 156 m-9 0 a9 9 0 1 0 18 0 a9 9 0 1 0 -18 0"/>
    <path d="M314 180 C316 170 344 170 346 180"/>
    <path d="M740 220 V180 H800 V220 M736 180 H804 L800 172 H744 Z"/>
    <path d="M770 156 m-9 0 a9 9 0 1 0 18 0 a9 9 0 1 0 -18 0"/>
    <path d="M754 180 C756 170 784 170 786 180"/>
    <path d="M500 220 V196 H600 V220"/>
    <path d="M550 182 m-7 0 a7 7 0 1 0 14 0 a7 7 0 1 0 -14 0"/>
    <path class="thin" d="M512 204 H540 M560 204 H588"/>
    <path class="thin" d="M100 150 H160 V190 H100 Z M110 160 H150 M110 170 H140 M110 180 H146"/>
    <path class="thin" d="M940 150 H1000 V190 H940 Z M950 160 H990 M950 170 H980 M950 180 H986"/>
    ${rows}`;
}

// The test every feature passes. 900 x 240.
function twoNumbers(d) {
  return `
    <path d="M40 100 H200 V150 H40 Z"/>
    <text x="120" y="130" class="hand small" text-anchor="middle">${esc(d.left)}</text>
    <path class="thin" d="M202 112 C260 112 270 70 330 70 M202 138 C260 138 270 180 330 180"/>
    <path d="M334 50 L480 50 L490 70 L480 90 L334 90 L344 70 Z"/>
    <text x="412" y="75" class="hand small" text-anchor="middle">${esc(d.a)}</text>
    <path d="M334 160 L480 160 L490 180 L480 200 L334 200 L344 180 Z"/>
    <text x="412" y="185" class="hand small" text-anchor="middle">${esc(d.b)}</text>
    <path class="thin" d="M492 180 H560 M560 180 L554 175 M560 180 L554 185"/>
    <path d="M566 150 H690 V210 H566 Z"/>
    <path class="thin" d="M580 164 H676 M580 176 H650 M580 188 H670 M580 200 H640"/>
    <text x="628" y="140" class="hand small" text-anchor="middle">${esc(d.data)}</text>
    <path class="thin" d="M692 180 H740 M740 180 L734 175 M740 180 L734 185"/>
    <path d="M746 150 C746 130 866 130 866 150 V210 C866 230 746 230 746 210 Z"/>
    <path class="thin" d="M770 170 L790 190 M790 170 L770 190 M820 170 L840 190 M840 170 L820 190 M790 180 H820"/>
    <text x="806" y="118" class="hand small" text-anchor="middle">${esc(d.model)}</text>
    <path class="pencil" d="M250 108 L262 122 L282 96"/>
    <path class="pencil" d="M250 150 L262 164 L282 138"/>`;
}

// Calibration. 900 x 300, illustrative dots along the diagonal.
function calibration(d) {
  let seed = 7;
  const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
  let dots = "";
  for (let i = 0; i < 42; i++) {
    const x = 100 + rnd() * 620;
    const y = 250 - (x - 100) * (190 / 620) + (rnd() - 0.5) * 36;
    dots += `<circle class="thin" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4"/>`;
  }
  return `
    <path class="thin" d="M80 260 H760 M80 260 V40"/>
    <text x="420" y="292" class="hand small" text-anchor="middle">${esc(d.x)}</text>
    <text x="40" y="150" class="hand small" text-anchor="middle" transform="rotate(-90 40 150)">${esc(d.y)}</text>
    <path class="pencil" d="M100 250 L740 54" style="stroke-dasharray:6 6"/>
    <text x="760" y="50" class="hand small" text-anchor="start">${esc(d.line)}</text>
    ${dots}
    <text x="780" y="262" class="hand small" text-anchor="start">${esc(d.n)}</text>`;
}

// One coach brings a team. 900 x 220.
function coach(d) {
  const person = (x, y, r = 8) => `<circle cx="${x}" cy="${y}" r="${r}"/><path d="M${x - r - 4} ${y + r + 20} C${x - r - 3} ${y + r + 4} ${x + r + 3} ${y + r + 4} ${x + r + 4} ${y + r + 20}"/>`;
  let team = "";
  for (let i = 0; i < 6; i++) team += person(330 + (i % 3) * 44, 70 + Math.floor(i / 3) * 60, 7);
  let next = "";
  for (let i = 0; i < 6; i++) next += person(640 + (i % 3) * 44, 70 + Math.floor(i / 3) * 60, 7);
  return `
    ${person(120, 90, 12)}
    <text x="120" y="160" class="hand small" text-anchor="middle">${esc(d.one)}</text>
    <path class="thin" d="M160 100 H280 M280 100 L274 95 M280 100 L274 105"/>
    ${team}
    <text x="374" y="172" class="hand small" text-anchor="middle">${esc(d.team)}</text>
    <path class="pencil" d="M470 100 C520 60 560 60 600 96"/>
    <path class="pencil" d="M592 86 L600 96 L606 86"/>
    ${next}
    <text x="684" y="172" class="hand small" text-anchor="middle">${esc(d.season)}</text>
    <path class="pencil" d="M740 150 C800 190 860 140 860 100 C860 60 800 60 760 70"/>
    <path class="pencil" d="M766 62 L758 70 L768 76"/>`;
}

function board(b) {
  return `
  <div class="board ink-on-view" id="board">
    <div class="board-col cut"><h3>${esc(b.cut)}</h3></div>
    <div class="board-col kept"><h3>${esc(b.kept)}</h3></div>
    <div class="board-pile">
      ${b.items.map((it, i) => `<div class="note ${it.k ? "k" : "c"}" style="--i:${i};--r:${((i * 37) % 7) - 3}deg"><b>${esc(it.t)}</b><span>${esc(it.d)}</span></div>`).join("")}
    </div>
  </div>`;
}

export function mount(root) {
  const el = root.querySelector("#board");
  if (!el) return;
  const kept = el.querySelector(".board-col.kept");
  const cut = el.querySelector(".board-col.cut");
  const notes = [...el.querySelectorAll(".note")];
  const place = () => {
    notes.forEach((n, i) => {
      const target = n.classList.contains("k") ? kept : cut;
      setTimeout(() => { target.appendChild(n); n.classList.add("placed"); }, 120 * i);
    });
  };
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { place(); io.disconnect(); } }, { threshold: 0.3 });
    io.observe(el);
  } else place();
}

export function render(p, L, t) {
  const tx = text[L] || text.en;
  const px = p.text[L] || p.text.en;
  const table = (head, rows, cls = "") => `
    <table class="ruled ${cls}">
      <thead><tr>${head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
      <tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>`;
  const section = (sec, body) => `
      <aside class="margin">${sec.note ? `<p class="margin-note">${esc(sec.note)}</p>` : ""}</aside>
      <div class="body"><h2>${esc(sec.h)}</h2>${body}</div>`;
  return `
  <section class="sheet">
    <div class="page story world">
      <aside class="margin">${px.note ? `<p class="margin-note sticky">${esc(px.note)}</p>` : ""}</aside>
      <div class="body">
        <h1>${esc(px.title)}</h1>
        <p class="place-line">${esc(px.place)}</p>
        ${px.lede.split("\n\n").map((x, i) => `<p class="${i ? "" : "lede"}">${esc(x)}</p>`).join("")}
      </div>

      ${inkFigure(hall(tx.hall), { viewBox: "0 0 1100 360", caption: tx.hall.caption, cls: "wide street" })}

      ${section(tx.situation, `<p class="lede">${esc(tx.situation.p1)}</p><p>${esc(tx.situation.p2)}</p>`)}

      <aside class="margin"><p class="margin-note">${esc(tx.board.note)}</p></aside>
      <div class="body"><h2>${esc(tx.board.h)}</h2></div>
      <div class="wide">${board(tx.board)}</div>

      <aside class="margin"><p class="margin-note red">${esc(tx.turn.note)}</p></aside>
      <div class="body">
        <h2>${esc(tx.turn.h)}</h2>
        <p class="lede">${esc(tx.turn.p1)}</p>
        <p>${esc(tx.turn.p2)}</p>
        <p>${esc(tx.turn.p3)}</p>
      </div>

      ${section(tx.numbers, `<p class="lede">${esc(tx.numbers.p1)}</p>`)}
      ${inkFigure(twoNumbers(tx.numbers.diagram), { viewBox: "0 0 900 240", caption: tx.numbers.diagram.caption, cls: "wide" })}

      ${section(tx.assessment, `<p class="lede">${esc(tx.assessment.p1)}</p><p>${esc(tx.assessment.p2)}</p>`)}

      ${section(tx.grader, `<p class="lede">${esc(tx.grader.p1)}</p><p>${esc(tx.grader.p2)}</p>`)}
      ${inkFigure(calibration(tx.grader.diagram), { viewBox: "0 0 900 300", caption: tx.grader.diagram.caption, cls: "wide" })}

      ${section(tx.events, `<p class="lede">${esc(tx.events.p1)}</p><p>${esc(tx.events.p2)}</p>`)}
      ${inkFigure(coach(tx.events.diagram), { viewBox: "0 0 900 220", caption: tx.events.diagram.caption, cls: "wide" })}

      ${section(tx.traffic, table(tx.traffic.head, tx.traffic.rows))}
      ${section(tx.pricing, table(tx.pricing.head, tx.pricing.rows))}

      <aside class="margin"><p class="margin-note red">${esc(tx.judgment.note)}</p></aside>
      <div class="body">
        <h2>${esc(tx.judgment.h)}</h2>
        <blockquote class="judgment">${esc(tx.judgment.p)}</blockquote>
      </div>

      <aside class="margin"><p class="margin-note">${esc(t("story.changed.note"))}</p></aside>
      <div class="body">${tally(tx.tallies)}</div>

      <aside class="margin"><p class="margin-note">${esc(tx.tryIt.note)}</p></aside>
      <div class="body">
        <h2>${esc(tx.tryIt.h)}</h2>
        <div class="actions"><a class="btn" href="${esc(p.links.live)}" target="_blank" rel="noopener">${esc(tx.tryIt.open)}</a></div>
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
