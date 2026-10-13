// The VersyTalks world: a debate hall, two numbers, and every bet that did or didn't move them.
import { esc, inkFigure, tally } from "../../js/ink.js";

export const text = {
  en: {
    hall: { motion: "This house believes retention beats acquisition", caption: "The hall. Two sides, one judge, and a room that only fills if both sides show up." },
    situation: {
      h: "The situation",
      note: "Two sides. Neither shows up without the other.",
      p1: "An online debate platform with 40 users. Debaters want opponents and feedback; coaches and organizers want a place to run their teams and competitions. Neither side shows up without the other, and there was no budget to buy either.",
      p2: "Acquisition turned out to be the easier half. People came. The question that decided the product was whether they came back."
    },
    numbers: {
      h: "The two numbers",
      note: "Every feature had to answer to these, or it didn't ship.",
      p1: "I set two metrics for the whole roadmap: time spent on the platform, and arguments written. The second one did double duty. Arguments were engagement, and they were also the training data for our own small language model, so every feature that produced more of them was building the asset at the same time.",
      diagram: {
        left: "a feature", a: "time on the platform", b: "arguments written", data: "training data", model: "our small language model", caption: "The test every feature had to pass, and where the arguments went."
      }
    },
    board: {
      h: "The bets",
      note: "Twelve bets shipped. Five didn't move the numbers and were cut. The board sorts itself.",
      kept: "Moved the numbers",
      cut: "Didn't. Cut.",
      items: [
        { k: true, t: "Drills", d: "Short solo reps that lower the cost of a first argument." },
        { k: true, t: "Onboarding with goals", d: "A debater picks a goal in the first minute; the product aims at it." },
        { k: true, t: "Profiles", d: "A debater's record, visible to coaches and opponents." },
        { k: true, t: "Following and achievements", d: "Progression people can see, and others can see too." },
        { k: true, t: "Debate assessment tied to the coaching profile", d: "Feedback a coach can act on, not a score in a vacuum." },
        { k: true, t: "AI grader", d: "Scores debates; calibrated against 42 human-graded submissions." },
        { k: true, t: "Coach-hosted events", d: "The people who bring teams become the hosts." },
        { k: false, t: "Argument arena", d: "A public ring for arguments. Fun for a week." },
        { k: false, t: "Matching rooms", d: "Automated opponent matching. Rooms stayed empty at the wrong hours." },
        { k: false, t: "Teams", d: "Team structure before there were enough teams to structure." },
        { k: false, t: "Speech-to-text", d: "Spoken arguments transcribed. Nobody wanted to be transcribed." },
        { k: false, t: "VersyEdu pivot", d: "Schools as the customer. Long sales cycles, no debaters in July." }
      ]
    },
    ledger: {
      h: "The ledger",
      note: "What a bet was, what it was supposed to move, and what we learned.",
      head: ["Bet", "The hypothesis", "What we learned"],
      rows: [
        ["Drills", "Fewer people would freeze on their first argument if practice had no opponent.", "Kept. The cheapest first step turned out to be the most important one."],
        ["Onboarding with goals", "Someone who states a goal in minute one comes back in week two.", "Kept. The goal becomes the reason to return."],
        ["Profiles, following, achievements", "Visible progression makes arguments worth writing.", "Kept, together. Each alone was weak; the three together carried retention."],
        ["Assessment tied to coaching", "Feedback a coach can act on keeps both sides engaged.", "Kept. It is what makes a coach bring the next team."],
        ["AI grader", "Instant scoring removes the wait that kills momentum.", "Kept, once calibrated on 42 human-graded debates. Before calibration, nobody trusted it."],
        ["Coach-hosted events", "Coaches already bring teams; let them bring the event.", "Kept. The latest bet, and the one that turned a cost into a channel."],
        ["Argument arena", "A public ring would make arguing a spectator sport.", "Cut. Spectators didn't become debaters."],
        ["Matching rooms", "Automated matching would fill the quiet hours.", "Cut. Matching needs liquidity; we built it before we had any."],
        ["Teams", "Team structure would bring organizers.", "Cut. Structure without volume is an empty building."],
        ["Speech-to-text", "Spoken debate is the real thing; transcribe it.", "Cut. Writing was the behaviour we needed, and the data we needed."],
        ["VersyEdu pivot", "Schools would pay and bring whole classrooms.", "Cut. Right customer, wrong clock: sales cycles longer than a semester."]
      ]
    },
    grader: {
      h: "The AI grader",
      note: "An AI that scores debates is only useful if coaches agree with it.",
      p1: "Instant scoring removes the wait that kills momentum, but a grader that disagrees with coaches is worse than no grader: debaters learn to argue for the machine. So I specified it the other way round. Coaches graded 42 submissions by hand against the rubric; the grader scored the same 42; and the rubric and the prompt were adjusted until the two agreed closely enough that a coach would sign the score.",
      diagram: { x: "coach's score", y: "grader's score", n: "42 debates", line: "agreement", caption: "The calibration. Each dot is a debate graded by a coach and by the grader. Illustration of the method, not the data." }
    },
    growth: {
      h: "How it grew",
      note: "40 to 10,000. Three levers, one of them a multiplier.",
      levers: [
        ["Content and social", "Debate clips, motions of the week, the arguments people were proud of."],
        ["Events and competitions", "A reason to show up at the same time as everyone else."],
        ["Coaches", "A coach doesn't bring a user. A coach brings a team, and brings it back next season."]
      ],
      diagram: { one: "one coach", team: "a team", season: "next season, again", caption: "Why the coach partnerships mattered more than the other two levers combined." }
    },
    judgment: {
      h: "What I'd tell a client",
      note: "Measured, not felt.",
      p: "Shipping more features is not a retention strategy. Once every feature had to answer to two measurable behaviours, and to the data our model needed, the roadmap got shorter and sharper, and the bets that failed failed faster."
    },
    tallies: [
      { value: "40 → 10,000", label: "users" },
      { value: "2", label: "metrics every feature answered to" },
      { value: "12", label: "bets shipped, 5 of them cut" },
      { value: "42", label: "human-graded debates behind the grader" }
    ],
    tryIt: { h: "See it live", note: "The platform is live. The arguments people write there are the ones that trained the model.", open: "Open VersyTalks" },
    questions: {
      h: "Questions I'm happy to take",
      items: [
        "How did you decide a bet had failed, and how long did you give it?",
        "Why two metrics rather than one North Star?",
        "What did you change in the grader after the 42-debate calibration?",
        "If you had the first 1,000 users again, what would you not build?"
      ]
    }
  },
  fr: {
    hall: { motion: "Cette chambre croit que la rétention bat l'acquisition", caption: "La salle. Deux côtés, un juge, et une pièce qui ne se remplit que si les deux côtés se présentent." },
    situation: {
      h: "La situation",
      note: "Deux côtés. Aucun ne vient sans l'autre.",
      p1: "Une plateforme de débat en ligne avec 40 utilisateurs. Les débatteurs veulent des adversaires et de la rétroaction ; les entraîneurs et les organisateurs veulent un endroit pour faire vivre leurs équipes et leurs compétitions. Aucun côté ne vient sans l'autre, et il n'y avait pas de budget pour acheter l'un ou l'autre.",
      p2: "L'acquisition s'est révélée la moitié facile. Les gens venaient. La question qui a décidé du produit, c'était s'ils revenaient."
    },
    numbers: {
      h: "Les deux chiffres",
      note: "Chaque fonctionnalité devait leur répondre, sinon elle ne sortait pas.",
      p1: "J'ai fixé deux mesures pour toute la feuille de route : le temps passé sur la plateforme et les arguments écrits. La deuxième servait deux fois. Les arguments étaient de l'engagement, et ils étaient aussi les données d'entraînement de notre propre petit modèle de langage : chaque fonctionnalité qui en produisait plus bâtissait l'actif en même temps.",
      diagram: {
        left: "une fonctionnalité", a: "temps sur la plateforme", b: "arguments écrits", data: "données d'entraînement", model: "notre petit modèle de langage", caption: "Le test que chaque fonctionnalité devait passer, et où allaient les arguments."
      }
    },
    board: {
      h: "Les paris",
      note: "Douze paris livrés. Cinq n'ont pas bougé les chiffres et ont été coupés. Le tableau se trie tout seul.",
      kept: "Ont bougé les chiffres",
      cut: "Non. Coupés.",
      items: [
        { k: true, t: "Exercices", d: "De courtes répétitions en solo qui abaissent le coût d'un premier argument." },
        { k: true, t: "Accueil avec objectifs", d: "Un débatteur choisit un objectif dès la première minute ; le produit vise celui-là." },
        { k: true, t: "Profils", d: "Le dossier d'un débatteur, visible par les entraîneurs et les adversaires." },
        { k: true, t: "Abonnements et réussites", d: "Une progression que les gens voient, et que les autres voient aussi." },
        { k: true, t: "Évaluation de débat liée au profil d'entraînement", d: "Une rétroaction qu'un entraîneur peut utiliser, pas une note dans le vide." },
        { k: true, t: "Correcteur IA", d: "Note les débats ; calibré sur 42 débats notés par des humains." },
        { k: true, t: "Événements des entraîneurs", d: "Ceux qui amènent des équipes deviennent les hôtes." },
        { k: false, t: "Arène d'arguments", d: "Un ring public pour les arguments. Amusant pendant une semaine." },
        { k: false, t: "Salles d'appariement", d: "Appariement automatique d'adversaires. Les salles restaient vides aux mauvaises heures." },
        { k: false, t: "Équipes", d: "Une structure d'équipe avant qu'il y ait assez d'équipes à structurer." },
        { k: false, t: "Transcription vocale", d: "Arguments parlés transcrits. Personne ne voulait être transcrit." },
        { k: false, t: "Virage VersyEdu", d: "Les écoles comme client. Cycles de vente longs, pas de débatteurs en juillet." }
      ]
    },
    ledger: {
      h: "Le registre",
      note: "Ce qu'était un pari, ce qu'il devait bouger, et ce qu'on a appris.",
      head: ["Pari", "L'hypothèse", "Ce qu'on a appris"],
      rows: [
        ["Exercices", "Moins de gens figeraient devant leur premier argument si la pratique n'avait pas d'adversaire.", "Gardé. Le premier pas le moins cher s'est révélé le plus important."],
        ["Accueil avec objectifs", "Quelqu'un qui énonce un objectif à la minute un revient à la semaine deux.", "Gardé. L'objectif devient la raison de revenir."],
        ["Profils, abonnements, réussites", "Une progression visible rend les arguments dignes d'être écrits.", "Gardés, ensemble. Chacun seul était faible ; les trois ensemble ont porté la rétention."],
        ["Évaluation liée à l'entraînement", "Une rétroaction utilisable par l'entraîneur garde les deux côtés engagés.", "Gardée. C'est ce qui fait qu'un entraîneur amène la prochaine équipe."],
        ["Correcteur IA", "Une note instantanée enlève l'attente qui tue l'élan.", "Gardé, une fois calibré sur 42 débats notés par des humains. Avant, personne ne lui faisait confiance."],
        ["Événements des entraîneurs", "Les entraîneurs amènent déjà des équipes ; qu'ils amènent l'événement.", "Gardé. Le pari le plus récent, et celui qui a transformé un coût en canal."],
        ["Arène d'arguments", "Un ring public ferait de l'argumentation un sport de spectateurs.", "Coupée. Les spectateurs ne sont pas devenus débatteurs."],
        ["Salles d'appariement", "L'appariement automatique remplirait les heures creuses.", "Coupées. L'appariement a besoin de volume ; on l'a bâti avant d'en avoir."],
        ["Équipes", "Une structure d'équipe amènerait des organisateurs.", "Coupées. Une structure sans volume est un immeuble vide."],
        ["Transcription vocale", "Le débat parlé est le vrai ; transcrivons-le.", "Coupée. L'écrit était le comportement qu'il nous fallait, et les données qu'il nous fallait."],
        ["Virage VersyEdu", "Les écoles paieraient et amèneraient des classes entières.", "Coupé. Bon client, mauvaise horloge : des cycles de vente plus longs qu'un semestre."]
      ]
    },
    grader: {
      h: "Le correcteur IA",
      note: "Une IA qui note les débats n'est utile que si les entraîneurs sont d'accord avec elle.",
      p1: "Une note instantanée enlève l'attente qui tue l'élan, mais un correcteur en désaccord avec les entraîneurs est pire que pas de correcteur : les débatteurs apprennent à argumenter pour la machine. Je l'ai donc spécifié à l'envers. Des entraîneurs ont noté 42 débats à la main selon la grille ; le correcteur a noté les mêmes 42 ; et la grille et la consigne ont été ajustées jusqu'à ce que les deux s'accordent assez pour qu'un entraîneur signe la note.",
      diagram: { x: "note de l'entraîneur", y: "note du correcteur", n: "42 débats", line: "accord", caption: "La calibration. Chaque point est un débat noté par un entraîneur et par le correcteur. Illustration de la méthode, pas les données." }
    },
    growth: {
      h: "Comment ça a grandi",
      note: "De 40 à 10 000. Trois leviers, dont un multiplicateur.",
      levers: [
        ["Contenu et réseaux sociaux", "Extraits de débats, motions de la semaine, les arguments dont les gens étaient fiers."],
        ["Événements et compétitions", "Une raison de se présenter en même temps que tout le monde."],
        ["Les entraîneurs", "Un entraîneur n'amène pas un utilisateur. Il amène une équipe, et la ramène la saison suivante."]
      ],
      diagram: { one: "un entraîneur", team: "une équipe", season: "la saison suivante, encore", caption: "Pourquoi les partenariats avec les entraîneurs ont compté plus que les deux autres leviers réunis." }
    },
    judgment: {
      h: "Ce que je dirais à un client",
      note: "Mesuré, pas ressenti.",
      p: "Livrer plus de fonctionnalités n'est pas une stratégie de rétention. Quand chaque fonctionnalité a dû répondre à deux comportements mesurables, et aux données dont notre modèle avait besoin, la feuille de route est devenue plus courte et plus nette, et les paris ratés ont raté plus vite."
    },
    tallies: [
      { value: "40 → 10 000", label: "utilisateurs" },
      { value: "2", label: "mesures auxquelles chaque fonctionnalité répondait" },
      { value: "12", label: "paris livrés, dont 5 coupés" },
      { value: "42", label: "débats notés par des humains derrière le correcteur" }
    ],
    tryIt: { h: "Voir en ligne", note: "La plateforme est en ligne. Les arguments qu'on y écrit sont ceux qui ont entraîné le modèle.", open: "Ouvrir VersyTalks" },
    questions: {
      h: "Les questions que je prends volontiers",
      items: [
        "Comment décidiez-vous qu'un pari avait échoué, et combien de temps lui donniez-vous ?",
        "Pourquoi deux mesures plutôt qu'une seule étoile polaire ?",
        "Qu'avez-vous changé dans le correcteur après la calibration sur 42 débats ?",
        "Si vous aviez de nouveau les 1 000 premiers utilisateurs, que ne bâtiriez-vous pas ?"
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
    <div class="board-col kept"><h3>${esc(b.kept)}</h3></div>
    <div class="board-col cut"><h3>${esc(b.cut)}</h3></div>
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
  return `
  <section class="sheet">
    <div class="page story world">
      <aside class="margin"><p class="margin-note sticky">${esc(px.note)}</p></aside>
      <div class="body">
        <h1>${esc(px.title)}</h1>
        <p class="place-line">${esc(px.place)}</p>
        <p class="lede">${esc(px.lede)}</p>
      </div>

      ${inkFigure(hall(tx.hall), { viewBox: "0 0 1100 360", caption: tx.hall.caption, cls: "wide street" })}

      <aside class="margin"><p class="margin-note">${esc(tx.situation.note)}</p></aside>
      <div class="body">
        <h2>${esc(tx.situation.h)}</h2>
        <p class="lede">${esc(tx.situation.p1)}</p>
        <p>${esc(tx.situation.p2)}</p>
      </div>

      <aside class="margin"><p class="margin-note red">${esc(tx.numbers.note)}</p></aside>
      <div class="body">
        <h2>${esc(tx.numbers.h)}</h2>
        <p class="lede">${esc(tx.numbers.p1)}</p>
      </div>
      ${inkFigure(twoNumbers(tx.numbers.diagram), { viewBox: "0 0 900 240", caption: tx.numbers.diagram.caption, cls: "wide" })}

      <aside class="margin"><p class="margin-note">${esc(tx.board.note)}</p></aside>
      <div class="body"><h2>${esc(tx.board.h)}</h2></div>
      <div class="wide">${board(tx.board)}</div>

      <aside class="margin"><p class="margin-note">${esc(tx.ledger.note)}</p></aside>
      <div class="body">
        <h2>${esc(tx.ledger.h)}</h2>
      </div>
      <div class="wide">
        <table class="ruled ledger">
          <thead><tr>${tx.ledger.head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
          <tbody>${tx.ledger.rows.map((r) => `<tr class="${/^(Kept|Gard)/.test(r[2]) ? "kept" : "cut"}">${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
        </table>
      </div>

      <aside class="margin"><p class="margin-note">${esc(tx.grader.note)}</p></aside>
      <div class="body">
        <h2>${esc(tx.grader.h)}</h2>
        <p class="lede">${esc(tx.grader.p1)}</p>
      </div>
      ${inkFigure(calibration(tx.grader.diagram), { viewBox: "0 0 900 300", caption: tx.grader.diagram.caption, cls: "wide" })}

      <aside class="margin"><p class="margin-note">${esc(tx.growth.note)}</p></aside>
      <div class="body">
        <h2>${esc(tx.growth.h)}</h2>
        <dl class="gaps">${tx.growth.levers.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}</dl>
      </div>
      ${inkFigure(coach(tx.growth.diagram), { viewBox: "0 0 900 220", caption: tx.growth.diagram.caption, cls: "wide" })}

      <aside class="margin"><p class="margin-note red">${esc(tx.judgment.note)}</p></aside>
      <div class="body">
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
        <ul class="questions">${tx.questions.items.map((q) => `<li>${esc(q)}</li>`).join("")}</ul>
        <nav class="turn"><a class="btn quiet" href="#/">${esc(t("nav.back"))}</a></nav>
      </div>
    </div>
  </section>`;
}
