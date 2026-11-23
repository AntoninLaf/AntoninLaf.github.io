// Reduce CAC: organic search, trust and conversion, across the work. Content and calculator.
import { esc, tally } from "../../js/ink.js";

const copy = {
  en: {
    routeTitle: "From discovery to purchase",
    route: ["Where buyers look", "What earns trust", "What they do next", "Who becomes a customer"],
    headlineMetrics: [
      { value: "11K", label: "monthly Google organic clicks · VersyTalks" },
      { value: "6+", label: "qualified leads per month · STEKAR" },
      { value: "12+", label: "new paid subscriptions per month · VersyNow" }
    ],
    caseTitle: "One industrial buyer, three ways to take the next step",
    caseNote: "STEKAR & Vitralum · Industrial B2B",
    caseBody: "An architect specifying a façade and an engineer solving a technical constraint can discover the same company and need different conversations. At STEKAR, I improved discovery through directories and gave visitors three clear routes on the site. They could speak with an architect, speak with an engineering consultant, or book a Lunch & Learn, a familiar way for architecture firms to evaluate materials and systems.",
    caseScope: "The directory and website work generated more than six qualified leads per month. The broader inbound program, which also included content, search, paid campaigns and tradeshows, reported 15% lower cost per lead and 57% higher brand recognition year over year.",
    caseLink: "Read the STEKAR & Vitralum case",
    marketsTitle: "How the buying journey changes by business",
    marketsNote: "Each example shows where buyers look and what would move them forward.",
    markets: [
      {
        title: "VersyTalks · Debate education",
        query: "Illustrative search · how to practice rebuttals for Public Forum debate",
        decision: "A debater looking for that specific skill should land on a worked example and be able to start a free drill. The page plan then routes a completed attempt to saved practice or coach feedback. Each step gives the debater something they can use in their next round.",
        evidence: "From December 2024 to November 2026, VersyTalks grew to 11,000 monthly organic clicks from Google alone. The drill illustrates the path I designed for someone arriving to practice a specific skill.",
        link: "Read the VersyTalks growth case",
        href: "#/story/versytalks"
      },
      {
        title: "VersyNow · Event SaaS",
        query: "Illustrative search · alternative to a live Q&A tool for recurring panels",
        decision: "I built a parsing model to find recurring gaps in competing products from public forums and directories. I used those gaps to choose competitor-related searches and redesign the site architecture and user experience for discovery across search engines, directories and generative search. I also coded a dashboard to track conversions and change onboarding defaults, so organizers could get their first B2B event set up faster.",
        evidence: "In the comparison roughly three months after the redesign, website traffic and CTA clicks were each up about 500%. The initiative brought in over 12 new paid subscriptions per month. Faster setup and repeat event creation were goals of the onboarding work.",
        workflowTitle: "What I wanted to see after the CTA",
        workflow: ["Click a relevant CTA", "Start event setup", "Create a first event", "Return to create another"],
        detail: "Example instrumentation. Capture the landing page and CTA variant, then join setup and event milestones by organizer or workspace. Check first-event completion and time to first event across onboarding defaults, then follow repeat creation over an equal window.",
        link: "Read the VersyNow product case",
        href: "#/p/versynow"
      },
      {
        title: "SoftAisle · Software directory",
        query: "Illustrative search · bilingual live polling software for conferences",
        decision: "For the directory concept, I’d build a comparison page around that specific buying need. Let buyers check languages, participant limits and pricing in the same view, then visit a short list of relevant vendors. Give vendors an attributable referral so they can tell whether the listing reached the right buyer."
      },
      {
        title: "Acteur Social · Small business clients",
        query: "Anonymized work · positioning, digital strategy and website conversion",
        decision: "An example of the approach would be a service page with two paths. Someone in the research stage gets a short fit assessment. A buyer with a defined project gets a scoped estimate request. I’d place the relevant proof beside each action and check which route produces qualified conversations."
      },
      {
        title: "Coattitude · Local search in Montréal",
        query: "Queries we targeted included obesity clinic and health and weight clinic",
        decision: "The previous targeting used terms with no observable search volume. I shifted it toward phrases people actually used to look for a clinic in Montréal, with a mix of broad terms and more specific local queries. Traffic volume and quality rose sharply after the change.",
        detail: "Example implementation. Group searches such as “obesity clinic Montréal,” “health and weight clinic Montréal” and “clinique de gestion du poids Montréal” by intent. Use a page that explains the clinic’s services and location, shows relevant credentials and offers a clear appointment route. Track bookings by landing page and language.",
        example: "Illustrative numbers. Moving from 500 visits and 10 qualified bookings to 900 visits and 27 bookings would raise the booking rate from 2% to 3%."
      },
      {
        title: "Univirtual Appeal · Manufacturing",
        query: "Two audiences · manufacturing partners and buyers with smaller runs",
        decision: "I targeted manufacturers that could become partners as well as design teams looking for support with lower production quantities. The manufacturer needed a reason to join. The designer needed to know whether their project was a fit.",
        detail: "Example implementation. Give “manufacturing partner for overflow production” a partner page with a capability intake. Route “low-volume manufacturing for product designers” or “small-batch prototype manufacturer” to a quote page with quantity, material, timeline and drawing fields. Track qualified partner applications separately from qualified quote requests.",
        example: "Illustrative numbers. A partner page with 120 visits and six qualified applications converts at 5%. A buyer page with 250 visits and 10 qualified quote requests converts at 4%. Each path has its own commercial outcome."
      },
      {
        title: "Groupe EGS · Public relations",
        query: "Earned discovery · specialist publications buyers already read",
        decision: "The brief was to increase the value clients got from PR by making their brands easier to discover and more credible. I worked on media relations for technology clients and helped secure coverage in more than 15 specialist publications.",
        evidence: "The broader content work reported 20% growth in organic traffic and an 8% improvement in lead quality."
      }
    ],
    methodTitle: "How I find an opening a bigger site can miss",
    methodNote: "The mix of queries matters more than the search volume of any one term.",
    methods: [
      ["Start where people actually buy", "Trace how buyers research, shortlist and purchase. An architect may find a supplier in a specification directory. An event organizer may read forum threads before searching for an alternative. Use Google Trends to explore shifts in wording and seasonality, then compare with query data and sales conversations."],
      ["Group small searches around a real decision", "Find several precise searches that point to the same need. A smaller site can serve that decision with a focused page, useful evidence and a clear action. Use structured data that reflects the visible page, and keep important details consistent across relevant directories and listings."],
      ["Design the next step for that customer", "Connect discovery pages to comparisons, comparisons to proof, and proof to a useful first action. Put the right offer where the visitor can see it, with clear terms and an easy mobile flow. A working demo, an expert call and a deal can each serve different buying stages."],
      ["Measure beyond the first click", "Use Google Search Console and Bing Webmaster Tools to understand visibility where each reports it. In GA4 or first-party analytics, look at identifiable referrals from DuckDuckGo, Ecosia and directories alongside the landing page and action. Follow leads and subscriptions into the CRM or product, and keep unattributed visits visible."]
    ],
    labTitle: "What is a lead worth?",
    labNote: "Try increasing the share of qualified leads. The cost per lead stays the same.",
    labIntro: "Illustrative figures. One cohort costs CA$3,000 to acquire and generates 120 inquiries. Adjust the share that qualifies and the rate at which qualified leads become paying customers.",
    qualify: "Inquiries that qualify",
    close: "Qualified leads that become customers",
    results: ["Cost per lead", "Cost per qualified lead", "Expected customers", "Modeled CAC"],
    labFoot: "CAC divides acquisition costs by new paying customers. Include the work that goes into organic acquisition, such as content, tooling and acquisition labor, and give the cohort time to close.",
    undefinedCost: "Unavailable",
    askTitle: "Ask the notebook",
    questions: [
      "What did Antonin change at STEKAR & Vitralum to turn interest into qualified inquiries?",
      "How does Antonin find search opportunities for a smaller site?",
      "How did Antonin turn competitor gaps into subscriptions at VersyNow?",
      "What did Antonin code to improve VersyNow’s first-event journey?",
      "Did Antonin measure a reduction in customer acquisition cost?"
    ]
  },
  fr: {
    routeTitle: "De la découverte à l’achat",
    route: ["Où chercher", "Ce qui inspire confiance", "La prochaine étape", "Qui devient client"],
    headlineMetrics: [
      { value: "11 000", label: "clics organiques Google par mois · VersyTalks" },
      { value: "6+", label: "demandes qualifiées par mois · STEKAR" },
      { value: "12+", label: "nouveaux abonnements payants par mois · VersyNow" }
    ],
    caseTitle: "Trois façons d’avancer pour un acheteur industriel",
    caseNote: "STEKAR et Vitralum · B2B industriel",
    caseBody: "Un architecte qui prescrit un système de façade et un ingénieur qui doit résoudre une contrainte technique peuvent découvrir le même fournisseur et avoir besoin de conversations différentes. Chez STEKAR, j’ai amélioré la visibilité dans les annuaires et créé trois parcours sur le site. On pouvait parler à un architecte, consulter un spécialiste en ingénierie ou réserver un dîner-conférence technique, un format familier aux firmes d’architecture qui évaluent des matériaux ou des systèmes.",
    caseScope: "Le travail sur les annuaires et le site a généré plus de six demandes qualifiées par mois. Le programme d’acquisition dans son ensemble, qui comprenait aussi du contenu, du référencement, des campagnes payantes et des salons professionnels, a rapporté une baisse de 15 % du coût par prospect et une hausse de 57 % de la notoriété sur un an.",
    caseLink: "Lire le cas STEKAR et Vitralum",
    marketsTitle: "Le parcours d’achat change selon l’entreprise",
    marketsNote: "Chaque exemple montre où les acheteurs cherchent et ce qui les ferait avancer.",
    markets: [
      {
        title: "VersyTalks · Apprentissage du débat",
        query: "Exemple de recherche · comment pratiquer la réfutation en débat Public Forum",
        decision: "Un débatteur qui cherche à travailler cette habileté devrait trouver un exemple commenté et pouvoir commencer un exercice gratuit. Le plan de la page propose ensuite de sauvegarder sa pratique ou de demander l’avis d’un coach. Chaque étape lui donne quelque chose à réutiliser dans son prochain débat.",
        evidence: "Entre décembre 2024 et novembre 2026, VersyTalks a atteint 11 000 clics organiques par mois provenant uniquement de Google. L’exercice illustre le parcours que j’ai conçu pour une personne qui arrive avec une habileté précise à travailler.",
        link: "Lire le cas de croissance VersyTalks",
        href: "#/story/versytalks"
      },
      {
        title: "VersyNow · Logiciel événementiel",
        query: "Exemple de recherche · solution de rechange à un outil de questions-réponses pour des panels récurrents",
        decision: "J’ai bâti un modèle d’analyse de texte qui repère les lacunes récurrentes des outils concurrents dans des forums publics et des annuaires. J’ai utilisé ces signaux pour cibler les recherches liées aux concurrents et repenser l’architecture et l’expérience du site pour la découverte dans les moteurs de recherche, les annuaires et les réponses générées par l’IA. J’ai aussi programmé un tableau de bord pour suivre les conversions et ajuster les réglages par défaut du parcours initial, afin qu’un organisateur puisse créer plus vite son premier événement B2B.",
        evidence: "Dans la comparaison effectuée environ trois mois après la refonte, le trafic du site et les clics sur les appels à l’action avaient chacun augmenté d’environ 500 %. L’initiative a généré plus de 12 nouveaux abonnements payants par mois. L’objectif du parcours initial était d’accélérer la création du premier événement et d’encourager les organisateurs à revenir.",
        workflowTitle: "Ce que je voulais suivre après le clic",
        workflow: ["Cliquer sur l’action", "Commencer la configuration", "Créer un premier événement", "Revenir en créer un autre"],
        detail: "Exemple de suivi. Enregistrer la page d’entrée et la variante de l’appel à l’action, puis relier les étapes de configuration et de création à l’organisateur ou à son espace. Comparer le taux et le délai de création du premier événement selon les réglages testés, puis mesurer la création d’un autre événement sur une durée comparable.",
        link: "Lire le cas produit VersyNow",
        href: "#/p/versynow"
      },
      {
        title: "SoftAisle · Annuaire de logiciels",
        query: "Exemple de recherche · logiciel bilingue de sondage en direct pour conférences",
        decision: "Pour le concept d’annuaire, je créerais une page de comparaison qui répond à ce besoin précis. L’acheteur pourrait comparer les langues, la capacité et les prix au même endroit, puis visiter les sites de quelques fournisseurs pertinents. Côté éditeur, un lien mesurable aiderait à savoir si la fiche attire les bons visiteurs."
      },
      {
        title: "Acteur Social · Petites entreprises",
        query: "Mandats anonymisés · positionnement, stratégie numérique et conversion",
        decision: "Une page de services pourrait proposer deux parcours. La personne encore en recherche obtient un court diagnostic. Celle qui a déjà défini son projet demande une estimation. Je placerais les preuves pertinentes à côté de chaque action et je mesurerais les conversations qualifiées qui en découlent."
      },
      {
        title: "Coattitude · Recherche locale à Montréal",
        query: "Requêtes ciblées, entre autres · obesity clinic et health and weight clinic",
        decision: "Le ciblage précédent reposait sur des termes sans volume de recherche observable. J’ai repris les expressions que les gens utilisaient pour trouver une clinique à Montréal, avec des termes généraux et des requêtes locales plus précises. Le volume et la qualité du trafic ont fortement augmenté après le changement.",
        detail: "Exemple de mise en œuvre. Regrouper par intention des recherches comme « clinique de gestion du poids Montréal » et « obesity clinic Montréal ». La page présente les services, l’emplacement, les qualifications pertinentes et la prise de rendez-vous. On suit les réservations par page d’entrée et par langue.",
        example: "Chiffres illustratifs. Passer de 500 visites et 10 rendez-vous qualifiés à 900 visites et 27 rendez-vous ferait passer le taux de réservation de 2 % à 3 %."
      },
      {
        title: "Univirtual Appeal · Fabrication",
        query: "Deux publics · fabricants partenaires et équipes qui produisent en petite série",
        decision: "J’ai ciblé les fabricants susceptibles de devenir partenaires et les équipes de conception qui avaient besoin de plus petites quantités. Le fabricant avait besoin d’une raison de se joindre au réseau. Pour l’équipe de conception, il fallait d’abord savoir si son projet cadrait avec l’offre.",
        detail: "Exemple de mise en œuvre. Une requête comme « partenaire de fabrication pour capacité d’appoint » mène à une page de partenariat et à un formulaire sur les capacités. Une recherche comme « fabrication petite série pour designers » mène à une demande de devis avec quantité, matériau, échéance et dessin. On suit les candidatures de partenaires et les demandes de devis séparément.",
        example: "Chiffres illustratifs. Une page de partenariat avec 120 visites et six candidatures qualifiées convertit à 5 %. Une page de devis avec 250 visites et 10 demandes qualifiées convertit à 4 %. Chaque parcours a son propre résultat commercial."
      },
      {
        title: "Groupe EGS · Relations publiques",
        query: "Visibilité dans les publications spécialisées que les acheteurs lisent déjà",
        decision: "Le mandat visait à donner plus de valeur aux clients en rendant leurs marques plus visibles et crédibles. J’ai travaillé en relations de presse pour des clients du secteur techno et contribué à obtenir des retombées dans plus de 15 publications spécialisées.",
        evidence: "L’initiative de contenu dans son ensemble a rapporté une hausse de 20 % du trafic organique et une amélioration de 8 % de la qualité des prospects."
      }
    ],
    methodTitle: "Comment je trouve une occasion qui échappe à un plus gros site",
    methodNote: "Ensemble, plusieurs petites requêtes peuvent révéler un besoin d’achat précis.",
    methods: [
      ["Comprendre où les gens achètent", "Je reconstitue la façon dont les acheteurs cherchent, comparent et choisissent. Un architecte peut trouver un fournisseur dans un annuaire technique. Un organisateur peut lire un forum avant de chercher une solution de rechange. J’utilise Google Trends pour repérer les changements de vocabulaire et la saisonnalité, puis je compare avec les requêtes et les échanges des ventes."],
      ["Regrouper les requêtes autour d’une décision", "Je cherche plusieurs requêtes précises qui renvoient au même besoin. Un petit site peut répondre à ce besoin avec une page ciblée, des preuves et une action claire. J’utilise des données structurées qui correspondent au contenu visible et je garde les renseignements cohérents dans les annuaires pertinents."],
      ["Concevoir la prochaine étape pour ce client", "Je relie les pages de découverte aux comparatifs, puis les comparatifs aux preuves et à une action concrète. L’offre doit être visible, ses conditions claires et le parcours facile sur mobile. Une démo, un appel avec un expert ou une offre peuvent convenir à des stades différents."],
      ["Mesurer au-delà du clic", "J’utilise Google Search Console et Bing Webmaster Tools pour suivre la visibilité là où chacun fournit des données. Dans GA4 ou les données du site, j’examine les visites attribuables à DuckDuckGo, à Ecosia et aux annuaires, avec la page d’entrée et l’action. Je suis ensuite les prospects et les abonnements dans le CRM ou le produit, en gardant les visites sans attribution visibles."]
    ],
    labTitle: "Combien vaut un prospect ?",
    labNote: "Faites varier la proportion de prospects qualifiés. Le coût par prospect reste stable.",
    labIntro: "Chiffres à titre d’exemple. Une cohorte coûte 3 000 $ CA à acquérir et génère 120 demandes. Ajustez la proportion de demandes qualifiées et la part des prospects qualifiés qui deviennent clients payants.",
    qualify: "Part des demandes qualifiées",
    close: "Part des prospects qualifiés qui deviennent clients",
    results: ["Coût par prospect", "Coût par prospect qualifié", "Clients attendus", "CAC estimé"],
    labFoot: "Le CAC correspond aux coûts d’acquisition divisés par le nombre de nouveaux clients payants. Il inclut le travail lié à la recherche organique, dont le contenu, les outils et le temps consacré à l’acquisition. Il faut laisser à la cohorte le temps de convertir.",
    undefinedCost: "Indisponible",
    askTitle: "Poser une question au carnet",
    questions: [
      "Qu’a changé Antonin chez STEKAR et Vitralum pour générer des demandes qualifiées ?",
      "Comment Antonin trouve-t-il des occasions de recherche pour un plus petit site ?",
      "Comment Antonin a-t-il transformé les lacunes des concurrents en abonnements pour VersyNow ?",
      "Qu’a programmé Antonin pour faciliter la création du premier événement dans VersyNow ?",
      "Antonin a-t-il mesuré une baisse du coût d’acquisition client ?"
    ]
  }
};


const acquisitionCost = 3000;
const inquiries = 120;
const defaultQualified = 40;
const defaultClose = 25;

function sketch(labels) {
  const marks = [
    '<circle cx="30" cy="28" r="14"/><path d="M40 38 L54 52"/>',
    '<path d="M18 12 H54 V51 H18 Z M25 21 H46 M25 29 H42 M25 37 H35"/>',
    '<path d="M18 14 H53 V49 H18 Z M25 31 L33 38 L46 24"/>',
    '<circle cx="35" cy="22" r="9"/><path d="M17 50 Q18 35 35 35 Q53 35 54 50"/>'
  ];
  return `<ol class="cac-route">${labels.map((label, i) => `
    <li><svg viewBox="0 0 72 64" aria-hidden="true">${marks[i]}</svg><span>${esc(label)}</span></li>
  `).join("")}</ol>`;
}

function section(title, note, inner) {
  return `
    <aside class="margin"><p class="margin-note">${esc(note)}</p></aside>
    <section class="body"><h2>${esc(title)}</h2>${inner}</section>`;
}

function slider(id, text, value) {
  return `
    <div class="cac-control">
      <label for="cac-${id}">${esc(text)}</label>
      <span data-cac-value="${id}" aria-hidden="true"></span>
      <input type="range" id="cac-${id}" min="0" max="100" value="${value}">
    </div>`;
}

function render(project, language, t) {
  const tx = copy[language];
  const px = project.text[language];
  return `
  <section class="sheet">
    <article class="page story world cac">
      <aside class="margin"><p class="margin-note sticky">${esc(px.note)}</p></aside>
      <header class="body">
        <p class="chapter">${esc(project.kind[language])}</p>
        <h1>${esc(px.title)}</h1>
        <p class="place-line">${esc(px.place)}</p>
        <p class="lede">${esc(px.lede)}</p>
        <h2 class="cac-route-title">${esc(tx.routeTitle)}</h2>
        ${sketch(tx.route)}
        ${tally(tx.headlineMetrics)}
      </header>

      ${section(tx.caseTitle, tx.caseNote, `
        <p>${esc(tx.caseBody)}</p>
        <p>${esc(tx.caseScope)}</p>
        <p><a href="#/story/stekar">${esc(tx.caseLink)}</a></p>
      `)}

      ${section(tx.marketsTitle, tx.marketsNote, tx.markets.map((market) => `
        <details class="cac-market">
          <summary>${esc(market.title)}</summary>
          <p class="cac-query">${esc(market.query)}</p>
          <p>${esc(market.decision)}</p>
          ${market.evidence ? `<p>${esc(market.evidence)}</p>` : ""}
          ${market.workflow ? `
            <div class="cac-workflow">
              <h3>${esc(market.workflowTitle)}</h3>
              <ol>${market.workflow.map((step) => `<li>${esc(step)}</li>`).join("")}</ol>
            </div>
          ` : ""}
          ${market.detail ? `<p>${esc(market.detail)}</p>` : ""}
          ${market.example ? `<p class="cac-example">${esc(market.example)}</p>` : ""}
          ${market.link ? `<p><a href="${esc(market.href)}">${esc(market.link)}</a></p>` : ""}
        </details>
      `).join(""))}

      ${section(tx.methodTitle, tx.methodNote, `
        <ol class="cac-method">${tx.methods.map(([title, description]) => `
          <li><strong>${esc(title)}</strong><p>${esc(description)}</p></li>
        `).join("")}</ol>
      `)}

      ${section(tx.labTitle, tx.labNote, `
        <div class="cac-lab">
          <p>${esc(tx.labIntro)}</p>
          ${slider("qualified", tx.qualify, defaultQualified)}
          ${slider("close", tx.close, defaultClose)}
          <dl class="cac-results" aria-live="polite" aria-atomic="true">
            ${tx.results.map((label) => `<div><dt>${esc(label)}</dt><dd></dd></div>`).join("")}
          </dl>
          <p class="cac-lab-foot">${esc(tx.labFoot)}</p>
        </div>
      `)}

      <section class="body">
        <h2>${esc(tx.askTitle)}</h2>
        <div class="cac-questions">
          ${tx.questions.map((question) => `<button type="button" class="ask-starter" data-ask-question>${esc(question)}</button>`).join("")}
        </div>
        <nav class="turn" aria-label="${esc(t("nav.back"))}"><a href="#/">${esc(t("nav.back"))}</a></nav>
      </section>
    </article>
  </section>`;
}

function mount(root, language) {
  const lab = root.querySelector(".cac-lab");
  const qualified = lab.querySelector("#cac-qualified");
  const close = lab.querySelector("#cac-close");
  const outputs = lab.querySelectorAll(".cac-results dd");
  const locale = language === "fr" ? "fr-CA" : "en-CA";
  const currency = new Intl.NumberFormat(locale, { style: "currency", currency: "CAD", maximumFractionDigits: 2 });
  const numbers = new Intl.NumberFormat(locale, { minimumFractionDigits: 0, maximumFractionDigits: 3 });
  const percent = new Intl.NumberFormat(locale, { style: "percent" });
  const formatCost = (count) => count > 0 ? currency.format(acquisitionCost / count) : copy[language].undefinedCost;
  const controls = [[qualified, "qualified"], [close, "close"]];

  function update() {
    for (const [input, key] of controls) {
      const value = percent.format(input.valueAsNumber / 100);
      lab.querySelector(`[data-cac-value="${key}"]`).textContent = value;
      input.setAttribute("aria-valuetext", value);
    }
    const qualifiedLeads = inquiries * qualified.valueAsNumber / 100;
    const expectedCustomers = qualifiedLeads * close.valueAsNumber / 100;
    const results = [
      formatCost(inquiries),
      formatCost(qualifiedLeads),
      numbers.format(expectedCustomers),
      formatCost(expectedCustomers)
    ];
    outputs.forEach((output, i) => { output.textContent = results[i]; });
  }

  controls.forEach(([input]) => input.addEventListener("input", update));
  update();
}

export { render, mount };
