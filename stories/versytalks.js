export default {
  slug: "versytalks",
  order: 2,
  years: "2024 – ",
  text: {
    en: {
      title: "Scaling from 40 to 10,000 through product and growth experimentation",
      where: "VersyTalks · Product Manager, AI & Growth",
      place: "An online debate platform",
      note: "Participation is not a business. Progress is.",
      situation: "An online debate platform that grew from 40 users to busy weeks of about 2,500, with no budget to buy either side of its market: debaters, and the coaches and programs who bring them. The forum-like experience generated traffic and periods of high participation. Revenue stayed low, even at low prices, and participation was hard to sustain.",
      did: [
        "Grew through three levers: content and social, events and competitions, and partnerships with debate coaches, who bring whole teams at once.",
        "Set the two metrics that mattered: time spent on the platform and arguments written. Arguments weren't just engagement; they were the training data for our own small language model.",
        "Tried the reasonable things first: live discussions, a debate revival, prizes, promotions, leaderboards, an argument arena, and repeated surveys on topics, formats, friends and following. Shipped what users asked for. The commercial problem stayed.",
        "Concluded that the experience, whatever we called it, competed with free communities, and that the value was too low for the debater willing to pay. Repositioned the platform as a competition ecosystem: tournaments and workshops, practice rooms and AI evaluations, a coach marketplace with credits, teams and program licences.",
        "Designed the debate assessment (about twenty minutes, completed more than five hundred times) and all twelve training drills, so every debater gets a level and a starting point.",
        "Specified an AI grader calibrated on 42 real submissions, with a rubric built from coaches' own framework, launched as a capped free beta with go/stop targets and user corrections captured as training labels.",
        "Let coaches host their own events on the platform, turning the people who already bring teams into hosts."
      ],
      changed: "The community grew from 40 to 10,000 users. After the repositioning, sales increased substantially; about four workshops and tournaments a month fill within two weeks, and coaches who host report more bookings. Those figures carry no baseline, so I state the direction, not a percentage.",
      judgment: "A product can attract attention and still fail to create enough value for someone to pay. More engagement features never settled that question; a different answer to what the paying debater values did.",
      questions: [
        "When did you accept that the problem was deeper than engagement?",
        "Which feature did users strongly request that turned out to be commercially unimportant?",
        "Why calibrate the grader against coaches before trusting it?"
      ],
      tallies: [
        { value: "40 → 10,000", label: "users" },
        { value: "≈ 2,500", label: "users in the busiest forum-era weeks" },
        { value: "500+", label: "assessment completions" }
      ],
      diagram: {
        start: "40",
        end: "10,000",
        bets: [
          { x: 150, ok: false, label: "live discussions, prizes" },
          { x: 250, ok: false, label: "leaderboards, arena" },
          { x: 340, ok: false, label: "surveys, lower prices" },
          { x: 450, ok: true, label: "tournaments, workshops" },
          { x: 560, ok: true, label: "assessment, 12 drills" },
          { x: 680, ok: true, label: "AI evaluations, coaches" },
          { x: 790, ok: true, label: "teams, program licences" }
        ],
        caption: "The forum era kept people busy. The competition ecosystem is what sells."
      }
    },
    fr: {
      title: "Passer de 40 à 10 000 par l'expérimentation produit et croissance",
      where: "VersyTalks · chef de produit, IA et croissance",
      place: "Une plateforme de débat en ligne",
      note: "La participation n'est pas un modèle d'affaires. Le progrès, oui.",
      situation: "Une plateforme de débat en ligne passée de 40 utilisateurs à des semaines de pointe d'environ 2 500, sans budget pour acheter l'un ou l'autre côté de son marché : les débatteurs, et les entraîneurs et programmes qui les amènent. L'expérience de type forum générait du trafic et des périodes de forte participation. Les revenus restaient bas, même à bas prix, et la participation était difficile à soutenir.",
      did: [
        "Croissance par trois leviers : contenu et réseaux sociaux, événements et compétitions, et partenariats avec des entraîneurs de débat, qui amènent des équipes entières.",
        "Fixé les deux mesures qui comptaient : le temps passé sur la plateforme et les arguments écrits. Les arguments n'étaient pas qu'un signe d'engagement : c'étaient les données d'entraînement de notre propre petit modèle de langage.",
        "Essayé d'abord les choses raisonnables : discussions en direct, relance des débats, prix, promotions, classements, une arène d'arguments, et des sondages répétés sur les sujets, les formats, les amis et les abonnements. Livré ce que les utilisateurs demandaient. Le problème commercial est resté.",
        "Conclu que l'expérience, peu importe son nom, rivalisait avec des communautés gratuites, et que la valeur était trop faible pour le débatteur prêt à payer. Repositionné la plateforme en écosystème de compétition : tournois et ateliers, salles de pratique et évaluations IA, un marché d'entraîneurs avec crédits, des équipes et des licences programme.",
        "Conçu l'évaluation de débat (une vingtaine de minutes, complétée plus de cinq cents fois) et les douze exercices d'entraînement, pour que chaque débatteur ait un niveau et un point de départ.",
        "Spécifié un correcteur IA calibré sur 42 vraies soumissions, avec une grille bâtie à partir du cadre des entraîneurs eux-mêmes, lancé en bêta gratuite plafonnée avec des cibles go/stop et les corrections des utilisateurs captées comme étiquettes d'entraînement.",
        "Laissé les entraîneurs organiser leurs propres événements sur la plateforme : ceux qui amènent déjà des équipes deviennent des hôtes."
      ],
      changed: "La communauté est passée de 40 à 10 000 utilisateurs. Après le repositionnement, les ventes ont augmenté substantiellement ; environ quatre ateliers et tournois par mois se remplissent en moins de deux semaines, et les entraîneurs qui animent rapportent plus de réservations. Ces chiffres n'ont pas de base de comparaison : je donne la direction, pas un pourcentage.",
      judgment: "Un produit peut attirer l'attention et quand même ne pas créer assez de valeur pour que quelqu'un paie. Plus de fonctionnalités d'engagement n'ont jamais réglé cette question ; une autre réponse à ce que le débatteur payant valorise, oui.",
      questions: [
        "Quand avez-vous accepté que le problème était plus profond que l'engagement ?",
        "Quelle fonctionnalité fortement demandée s'est révélée commercialement sans importance ?",
        "Pourquoi calibrer le correcteur contre les entraîneurs avant de lui faire confiance ?"
      ],
      tallies: [
        { value: "40 → 10 000", label: "utilisateurs" },
        { value: "≈ 2 500", label: "utilisateurs dans les meilleures semaines de l'ère forum" },
        { value: "500+", label: "complétions de l'évaluation" }
      ],
      diagram: {
        start: "40",
        end: "10 000",
        bets: [
          { x: 150, ok: false, label: "discussions, prix" },
          { x: 250, ok: false, label: "classements, arène" },
          { x: 340, ok: false, label: "sondages, prix plus bas" },
          { x: 450, ok: true, label: "tournois, ateliers" },
          { x: 560, ok: true, label: "évaluation, 12 exercices" },
          { x: 680, ok: true, label: "évaluations IA, entraîneurs" },
          { x: 790, ok: true, label: "équipes, licences programme" }
        ],
        caption: "L'ère forum occupait les gens. L'écosystème de compétition est ce qui se vend."
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
