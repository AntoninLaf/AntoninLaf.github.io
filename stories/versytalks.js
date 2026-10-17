export default {
  slug: "versytalks",
  order: 2,
  years: "2024 – ",
  text: {
    en: {
      title: "Scaling from 40 to 10,000 through product and growth experimentation",
      where: "VersyTalks · Product Manager, AI & Growth",
      place: "An online debate platform",
      note: "Acquisition wasn't the hard part. Retention was.",
      situation: "An online debate platform with 40 users and two sides that don't show up without each other: debaters, and the coaches and organizers who bring them. No budget to buy either side.",
      did: [
        "Grew through three levers: content and social, events and competitions, and partnerships with debate coaches, who bring whole teams at once.",
        "Set the two metrics that mattered: time spent on the platform and arguments written. Arguments weren't just engagement; they were the training data for our own small language model.",
        "Built for those two numbers: drills, an onboarding with explicit goals, profiles, following and achievements, and a debate assessment tied to each debater's coaching profile.",
        "Specified an AI grader calibrated on 42 real submissions, with a rubric built from coaches' own framework, launched as a capped free beta with go/stop targets and user corrections captured as training labels.",
        "Let coaches host their own events on the platform, turning the people who already bring teams into hosts."
      ],
      changed: "The community grew from 40 to 10,000 users. Several bets along the way didn't move retention: the argument arena, matching rooms, teams, speech-to-text, and a pivot to schools under the VersyEdu name.",
      judgment: "Shipping more features is not a retention strategy. Once every feature had to answer to two measurable behaviours, and to the data our model needed, the roadmap got shorter and sharper.",
      questions: [
        "How did you know VersyEdu wasn't working, and when did you stop?",
        "Why calibrate the grader on 42 submissions rather than ship and iterate?",
        "What would you have done differently in the first 1,000 users?"
      ],
      tallies: [
        { value: "40 → 10,000", label: "users" },
        { value: "2", label: "metrics every feature answered to" },
        { value: "42", label: "human-graded debates behind the AI grader" }
      ],
      diagram: {
        start: "40",
        end: "10,000",
        bets: [
          { x: 150, ok: false, label: "argument arena" },
          { x: 250, ok: false, label: "matching rooms" },
          { x: 340, ok: false, label: "VersyEdu pivot" },
          { x: 450, ok: true, label: "drills" },
          { x: 560, ok: true, label: "onboarding with goals" },
          { x: 680, ok: true, label: "assessment tied to coaching" },
          { x: 790, ok: true, label: "coach-hosted events" }
        ],
        caption: "The bets that moved the two numbers, and the ones that didn't."
      }
    },
    fr: {
      title: "Passer de 40 à 10 000 par l'expérimentation produit et croissance",
      where: "VersyTalks · chef de produit, IA et croissance",
      place: "Une plateforme de débat en ligne",
      note: "L'acquisition n'était pas le problème. La rétention, oui.",
      situation: "Une plateforme de débat en ligne avec 40 utilisateurs et deux côtés qui ne viennent pas l'un sans l'autre : les débatteurs, et les entraîneurs et organisateurs qui les amènent. Aucun budget pour acheter l'un ou l'autre.",
      did: [
        "Croissance par trois leviers : contenu et réseaux sociaux, événements et compétitions, et partenariats avec des entraîneurs de débat, qui amènent des équipes entières.",
        "Fixé les deux mesures qui comptaient : le temps passé sur la plateforme et les arguments écrits. Les arguments n'étaient pas qu'un signe d'engagement : c'étaient les données d'entraînement de notre propre petit modèle de langage.",
        "Construit pour ces deux chiffres : des exercices, un accueil avec des objectifs explicites, des profils, les abonnements et les réussites, et une évaluation de débat rattachée au profil d'entraînement de chaque débatteur.",
        "Spécifié un correcteur IA calibré sur 42 vraies soumissions, avec une grille bâtie à partir du cadre des entraîneurs eux-mêmes, lancé en bêta gratuite plafonnée avec des cibles go/stop et les corrections des utilisateurs captées comme étiquettes d'entraînement.",
        "Laissé les entraîneurs organiser leurs propres événements sur la plateforme : ceux qui amènent déjà des équipes deviennent des hôtes."
      ],
      changed: "La communauté est passée de 40 à 10 000 utilisateurs. Plusieurs paris en chemin n'ont pas bougé la rétention : l'arène d'arguments, les salles d'appariement, les équipes, la transcription vocale, et un virage vers les écoles sous le nom VersyEdu.",
      judgment: "Livrer plus de fonctionnalités n'est pas une stratégie de rétention. Quand chaque fonctionnalité a dû répondre à deux comportements mesurables, et aux données dont notre modèle avait besoin, la feuille de route est devenue plus courte et plus nette.",
      questions: [
        "Comment avez-vous su que VersyEdu ne marchait pas, et quand avez-vous arrêté ?",
        "Pourquoi calibrer le correcteur sur 42 débats plutôt que livrer et itérer ?",
        "Qu'auriez-vous fait autrement pour les 1 000 premiers utilisateurs ?"
      ],
      tallies: [
        { value: "40 → 10 000", label: "utilisateurs" },
        { value: "2", label: "mesures auxquelles chaque fonctionnalité répondait" },
        { value: "42", label: "débats notés par des humains derrière le correcteur IA" }
      ],
      diagram: {
        start: "40",
        end: "10 000",
        bets: [
          { x: 150, ok: false, label: "arène d'arguments" },
          { x: 250, ok: false, label: "salles d'appariement" },
          { x: 340, ok: false, label: "virage VersyEdu" },
          { x: 450, ok: true, label: "exercices" },
          { x: 560, ok: true, label: "accueil avec objectifs" },
          { x: 680, ok: true, label: "évaluation liée à l'entraînement" },
          { x: 790, ok: true, label: "événements des entraîneurs" }
        ],
        caption: "Les paris qui ont fait bouger les deux chiffres, et ceux qui ne l'ont pas fait."
      }
    }
  },
  // 900 x 300
  diagram(d) {
    const pts = [[70, 262], [200, 254], [320, 228], [450, 168], [560, 122], [680, 82], [790, 52], [850, 40]];
    const yAt = (x) => {
      for (let i = 1; i < pts.length; i++) {
        const [x0, y0] = pts[i - 1], [x1, y1] = pts[i];
        if (x <= x1) return y0 + ((x - x0) / (x1 - x0)) * (y1 - y0);
      }
      return pts[pts.length - 1][1];
    };
    // Catmull-Rom through the points, so the curve looks drawn rather than plotted
    let curve = `M${pts[0][0]} ${pts[0][1]}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[Math.max(i - 1, 0)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(i + 2, pts.length - 1)];
      const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
      const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
      curve += ` C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0]} ${p2[1]}`;
    }
    const bets = d.bets.map((b, i) => {
      const y = yAt(b.x);
      const up = y > 190 ? true : (b.x > 740 ? false : i % 2 === 0);
      const ly = up ? y - 30 : y + 40;
      return `
        <path class="pencil" d="M${b.x} ${y.toFixed(1)} V${up ? ly + 10 : ly - 16}"/>
        <text x="${b.x}" y="${ly}" class="hand small" text-anchor="middle">${b.ok ? "✓" : "✗"} ${b.label}</text>`;
    }).join("");
    return `
      <path class="thin" d="M60 270 H860"/>
      <path class="thin" d="M60 270 V30"/>
      <path d="${curve}"/>
      <text x="48" y="268" class="hand" text-anchor="end">${d.start}</text>
      <text x="862" y="30" class="hand" text-anchor="middle">${d.end}</text>
      ${bets}`;
  }
};
