export default {
  slug: "goco",
  order: 5,
  years: "2022 – 2023",
  // On the spiral: the case gets a page of its own.
  org: { en: "GoCo, a TELUS company", fr: "GoCo, une entreprise de TELUS" },
  spot: { en: "Phone & data, B2B", fr: "Téléphonie et données, B2B" },
  kind: { en: "Engagement · Marketing Manager", fr: "Mandat · Gestionnaire marketing" },
  tags: ["marketing"],
  headline: 1,   // the tally the About card leads with
  // A telecom mast beside a storefront: phone and data for 900 businesses, many of them shops.
  landmark: () => `
    <path d="M-92 0 H92"/>
    <path d="M-50 0 L-32 -100 L-14 0"/>
    <path class="thin" d="M-46 -24 H-18 M-45 -24 L-21 -48 M-19 -24 L-43 -48 M-41 -48 H-23 M-40 -48 L-25 -72 M-24 -48 L-39 -72 M-37 -72 H-27"/>
    <path d="M-32 -100 V-112 M-38 -94 H-26"/>
    <path class="thin" d="M-20 -114 C-14 -108 -14 -98 -20 -92 M-44 -114 C-50 -108 -50 -98 -44 -92 M-12 -120 C-2 -110 -2 -96 -12 -86 M-52 -120 C-62 -110 -62 -96 -52 -86"/>
    <path d="M8 0 V-62 H82 V0"/>
    <path d="M4 -62 H86 L80 -48 H10 Z"/>
    <path class="thin" d="M24 -62 L20 -48 M44 -62 L44 -48 M64 -62 L68 -48"/>
    <path d="M16 -6 V-38 H48 V-6 Z"/>
    <path class="thin" d="M16 -22 H48 M32 -38 V-6"/>
    <path d="M58 0 V-38 H76 V0"/>
    <path class="thin" d="M72 -20 V-16"/>
  `,
  text: {
    en: {
      title: "Protecting customer retention through a business migration",
      where: "GoCo, a TELUS company · Marketing Manager",
      place: "Business phone and data, often brick-and-mortar stores",
      note: "A migration is a moment every customer reconsiders you. Small businesses reconsider fastest.",
      situation: "A platform migration of more than 900 business accounts for phone and data, many of them brick-and-mortar stores: every customer had to move, and every one of them would have a reason to leave during the move. The goal was to lose as few as possible, with small and medium businesses, the most exposed, as the priority.",
      did: [
        "Led marketing for the migration, with SMEs first.",
        "Used usage and engagement signals to identify the accounts most at risk of leaving, rather than treating every account the same.",
        "Ran segmented campaigns in Salesforce and Pardot, with messaging aligned with the sales team so customers heard one story."
      ],
      changed: "Contributed to a 30 percent reduction in churn across the migration.",
      judgment: "In a large company, the work is rarely a new idea. It is getting the right message to the right customer before they decide, with every team pulling the same way.",
      questions: [
        "What did SMEs need to hear that larger accounts didn't?",
        "How did you sequence the communications?",
        "What would you measure if you did it again?"
      ],
      tallies: [
        { value: "900+", label: "B2B accounts migrated" },
        { value: "−30%", label: "churn through the migration" }
      ],
      diagram: {
        from: "old platform",
        to: "new platform",
        who: "SMEs first",
        result: "−30% churn",
        caption: "Every customer crosses once. The job is making sure they arrive."
      }
    },
    fr: {
      title: "Protéger la rétention des clients pendant une migration d'affaires",
      where: "GoCo, une entreprise de TELUS · gestionnaire marketing",
      place: "Téléphonie et données d'affaires, souvent des commerces physiques",
      note: "Une migration est un moment où chaque client vous reconsidère. Les petites entreprises reconsidèrent le plus vite.",
      situation: "Une migration de plateforme de plus de 900 comptes d'affaires de téléphonie et de données, souvent des commerces physiques : chaque client devait changer, et chacun aurait une raison de partir pendant le passage. L'objectif : en perdre le moins possible, avec les petites et moyennes entreprises, les plus exposées, en priorité.",
      did: [
        "Mené le marketing de la migration, les PME d'abord.",
        "Utilisé les signaux d'usage et d'engagement pour repérer les comptes les plus à risque de partir, plutôt que de traiter chaque compte de la même façon.",
        "Mené des campagnes segmentées dans Salesforce et Pardot, avec des messages alignés sur l'équipe des ventes pour que les clients entendent une seule histoire."
      ],
      changed: "Contribué à une baisse de 30 pour cent de l'attrition pendant la migration.",
      judgment: "Dans une grande entreprise, le travail est rarement une idée neuve. C'est livrer le bon message au bon client avant qu'il décide, avec chaque équipe qui tire dans le même sens.",
      questions: [
        "Qu'est-ce que les PME devaient entendre que les grands comptes n'avaient pas besoin d'entendre ?",
        "Comment avez-vous séquencé les communications ?",
        "Que mesureriez-vous si c'était à refaire ?"
      ],
      tallies: [
        { value: "900+", label: "comptes d'affaires migrés" },
        { value: "−30 %", label: "d'attrition pendant la migration" }
      ],
      diagram: {
        from: "ancienne plateforme",
        to: "nouvelle plateforme",
        who: "PME d'abord",
        result: "−30 % d'attrition",
        caption: "Chaque client traverse une fois. Le travail, c'est de s'assurer qu'il arrive."
      }
    }
  },
  // 900 x 300
  diagram(d) {
    const people = [120, 170, 220].map((x, i) => `
      <circle cx="${x + i * 140}" cy="${150 - i * 4}" r="6"/>
      <path d="M${x + i * 140 - 7} ${166 - i * 4} C${x + i * 140 - 6} ${156 - i * 4} ${x + i * 140 + 6} ${156 - i * 4} ${x + i * 140 + 7} ${166 - i * 4}"/>`).join("");
    return `
      <path d="M40 180 H260 V270 H40"/>
      <path class="thin" d="M60 200 H240 M60 216 H240 M60 232 H200"/>
      <text x="150" y="294" class="hand small" text-anchor="middle">${d.from}</text>
      <path d="M640 170 H860 V270 H640"/>
      <path class="thin" d="M660 190 H840 M660 206 H840 M660 222 H800"/>
      <text x="750" y="294" class="hand small" text-anchor="middle">${d.to}</text>
      <path d="M260 180 C380 168 520 160 640 170"/>
      <path d="M260 196 C380 184 520 176 640 186"/>
      <path class="thin" d="M300 178 V195 M360 174 V191 M420 171 V188 M480 169 V186 M540 168 V185 M600 168 V185"/>
      ${people}
      <path class="pencil" d="M150 110 C170 112 200 118 212 136"/>
      <text x="140" y="104" class="hand small" text-anchor="end">${d.who}</text>
      <text x="750" y="120" class="hand" text-anchor="middle">${d.result}</text>
      <path class="pencil" d="M690 132 C720 140 780 140 810 132"/>`;
  }
};
