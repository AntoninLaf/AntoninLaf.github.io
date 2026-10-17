// The Acteurly world: a Québec main street, and an analyst that fits in the owner's week.
import { esc, inkFigure, tally } from "../../js/ink.js";

export const text = {
  en: {
    street: { caption: "Rue Principale. Every shop has numbers somewhere. Nobody has a Monday to read them." },
    problem: {
      h: "The problem",
      note: "Dashboards everywhere. Decisions nowhere.",
      p1: "A plumber, a physio clinic, a bakery: businesses of one to fifty people, with no marketer, little time and a small budget. Their numbers are scattered across Google, Meta and the review sites. Nobody has time to read them, and an agency costs too much.",
      p2: "What they need is not another dashboard. It is the sentence at the end: here is what to do Monday, sized to the hours and the dollars you actually have."
    },
    monday: {
      h: "Monday, 7:02",
      note: "A scripted walkthrough: same logic Aly runs, example numbers. The real Aly reads your real accounts.",
      pick: "Pick a business",
      hours: "Hours the owner has this week",
      run: "Run Monday",
      steps: ["Reading the connected sources", "Signals found in the data, computed by code", "Playbooks retrieved, out of 24", "The week's plan, ranked by value against the hours"],
      email: "Your 3 numbers and the actions of the week",
      why: "why this one",
      skipped: "Left for next week, not enough hours:",
      none: "Nothing fits in that many hours. Give Aly one more.",
      min: "min",
      businesses: [
        {
          id: "plumber", name: "A plumber", place: "Trois-Rivières",
          signals: [
            "3 new Google reviews unanswered for 9 days",
            "Searches for 'plombier urgence' up 40%, clicks flat",
            "Meta ad frequency at 3.4, click-through falling for two weeks"
          ],
          playbooks: ["Reply to every review within 48 hours", "Urgent-intent service pages", "Creative fatigue", "Speed to lead"],
          actions: [
            { t: "Reply to the three reviews, by name, today", m: 20, v: 3, why: "Reviews are the first thing an emergency caller reads. Nine days silent is a signal to them too." },
            { t: "Swap the Meta ad creative; keep the audience", m: 45, v: 2, why: "Frequency above 3 with falling clicks is fatigue, not a targeting problem. Changing the audience would waste what already works." },
            { t: "Add an 'urgence 24 h' block to the plumbing page", m: 60, v: 2, why: "The searches are already there. The page doesn't answer them, so the clicks go to someone who does." },
            { t: "Set up a missed-call text-back", m: 90, v: 1, why: "The fastest money for a service business is answering first. Worth doing once the week allows." }
          ]
        },
        {
          id: "clinic", name: "A physio clinic", place: "Sherbrooke",
          signals: [
            "Rated 4.9, but only 12 reviews in two years",
            "60% of visits on mobile; the booking page loses 70% of them",
            "Instagram: two posts a month, reach down a third"
          ],
          playbooks: ["Ask for reviews after the visit", "Mobile booking friction", "Posting cadence", "Voice of the customer"],
          actions: [
            { t: "Ask every patient for a review at checkout, with a QR code", m: 30, v: 3, why: "A 4.9 with 12 reviews loses to a 4.6 with 180. The score is fine; the count is the problem." },
            { t: "Put the booking button above the fold on mobile", m: 40, v: 3, why: "Seven in ten mobile visitors leave the booking page. They came to book; make it the first thing they see." },
            { t: "Schedule one post a week, Tuesday evenings", m: 45, v: 1, why: "Cadence beats polish. One reliable post a week keeps reach from decaying." },
            { t: "Read the last 20 reviews for the words patients use, and reuse them on the home page", m: 60, v: 2, why: "Patients say 'enfin sans douleur', the site says 'approche multidisciplinaire'. Use their words." }
          ]
        },
        {
          id: "bakery", name: "A bakery", place: "Québec City",
          signals: [
            "Google Business photos last updated 14 months ago",
            "Searches for 'gâteau anniversaire' rising, no page answers them",
            "Weekend posts get three times the reach of weekday posts"
          ],
          playbooks: ["Fresh photos on Google", "Build a page for rising demand", "Post when the audience is there", "Seasonal calendar"],
          actions: [
            { t: "Upload 10 photos of this week's counter to Google", m: 25, v: 3, why: "Fourteen-month-old photos tell Google and customers the same thing: nothing new here." },
            { t: "Create a 'gâteaux d'anniversaire' page with prices and a 48-hour order form", m: 90, v: 3, why: "The demand is measurable and nobody is answering it. A page is the cheapest way to catch it." },
            { t: "Move the week's posts to Saturday morning", m: 15, v: 2, why: "Same posts, three times the reach. The cheapest change in the plan." },
            { t: "Plan the Fêtes menu post for the first week of November", m: 45, v: 1, why: "Québec buys seasonally. Being first in the feed matters more than being best." }
          ]
        }
      ]
    },
    thinks: {
      h: "How Aly thinks",
      note: "The model is a replaceable part. The value is in what surrounds it.",
      p1: "Aly is a language model wrapped in Acteurly's rules, data and knowledge. The code gathers the facts and computes every number, the model explains and recommends, and the code checks the answer. The same seven steps run for a chat question, the weekly plan and every analysis.",
      diagram: {
        steps: ["Check and book the cost", "Context: numbers computed by code", "Retrieve 4–5 playbooks of 24", "Add the rules", "Call the model", "Check the answer in code", "Reuse from cache"],
        rule: "the model never calculates a figure",
        caption: "Seven steps, and the cost is booked before the model is called."
      }
    },
    role: {
      h: "My role: the human in the loop",
      note: "I didn't write the code. I wrote what the code can't know.",
      p1: "I was the marketing expert and the reviewer. The playbooks Aly reads before every answer come from years of agency work: what the signals mean, what to do, what to measure, and the trap. I built the rubrics for judging its recommendations and reviewed what it produced against them before a business owner saw it.",
      p2: "The loop closes with the owners: they rate each recommendation and say whether an action worked. Each outcome is stored with the playbooks behind it and the type of business, never the business's name. With three or more businesses behind a playbook, its track record is shown to the model too.",
      diagram: {
        me: "me", playbooks: "24 playbooks", rubrics: "rubrics", aly: "Aly", owner: "the owner", review: "review before it ships", rate: "rates, reports outcomes", learn: "track record per playbook",
        caption: "What I put in, what comes back, and where the data moat starts."
      }
    },
    moat: {
      h: "The moat",
      note: "Three layers a US tool can translate but cannot copy.",
      rings: [
        ["Expert knowledge", "Playbooks written from agency practice, with the Québec calendar and the Charter of the French language built in."],
        ["Each company's memory", "Its history, its decisions, and what happened after each action."],
        ["Outcomes across companies", "What actually works, by sector and region, in Québec. Later, what trains specialized marketing models."]
      ]
    },
    ladder: {
      h: "How much autonomy, and when",
      note: "Honestly put: today it is closer to well-built workflows plus an assistant than to an autonomous agent. That is the right place to start.",
      rungs: [
        ["Watch", "Alerts, reports, the Monday email.", "customers have this today"],
        ["Draft", "Recommendations; drafts at the highest help level.", "partly today"],
        ["Do on your OK", "Aly prepares a review reply, a post, a budget change, and acts after one click.", "next, starting with low-risk tasks"],
        ["Do alone", "Only internal, reversible tasks, after many clean runs.", "later"]
      ],
      rules: [
        ["The eraser test.", "Can a mistake be erased before a customer sees it? If not, rung 3 at most. Prices, discounts and ad budgets stay at rung 2."],
        ["The rule of three.", "Thirty clean runs before rung 3. A hundred before rung 4."]
      ],
      caption: "Four rungs. Two rules decide how far a task may climb."
    },
    model: {
      h: "How it makes money",
      note: "The free diagnostic is the door. The weekly habit is the business.",
      head: ["Plan", "Price", "What it gives"],
      rows: [
        ["Gratuit", "$0, forever", "Monthly diagnostic, reports, connections, alerts, 10 questions to Aly a month"],
        ["Essentiel", "$49 a month", "The full analyst: weekly plan, Aly every day, four analyses, visibility test"],
        ["Pro", "$69 a month", "Essentiel, up to three businesses, priority support, content and ads features as they ship"],
        ["Pilot", "Free for 3 months", "Everything, by invitation, for 10 to 20 Québec businesses that give feedback"]
      ],
      p: "Customers come from the free diagnostic, the Ressources articles, word of mouth from pilots, and later from the people who already advise small businesses: accountants, chambers of commerce, web agencies. An agency plan turns agencies from competitors into resellers."
    },
    tallies: [
      { value: "24", label: "expert playbooks" },
      { value: "4–5", label: "retrieved per question" },
      { value: "0", label: "figures calculated by the model" },
      { value: "$2", label: "a day, the cap on all AI spend" }
    ],
    tryIt: {
      h: "Try it on a real business",
      note: "The free diagnostic takes a business name or a website and gives a score and three priorities.",
      open: "Run the free diagnostic on acteurly.ai",
      aside: "Everything works in French and English. Data stays in Canada."
    },
    questions: {
      h: "Questions I'm happy to take",
      items: [
        "How do you write a playbook an AI can use without it becoming generic?",
        "What does the reviewer catch that the rules don't?",
        "Why cap AI spend at two dollars a day, and what happens at the cap?",
        "When would you let Aly act on its own, and on what?"
      ]
    }
  },
  fr: {
    street: { caption: "Rue Principale. Chaque commerce a des chiffres quelque part. Personne n'a un lundi pour les lire." },
    problem: {
      h: "Le problème",
      note: "Des tableaux de bord partout. Des décisions nulle part.",
      p1: "Un plombier, une clinique de physio, une boulangerie : des entreprises de un à cinquante employés, sans marketeur, avec peu de temps et un petit budget. Leurs chiffres sont éparpillés entre Google, Meta et les sites d'avis. Personne n'a le temps de les lire, et une agence coûte trop cher.",
      p2: "Ce qu'il leur faut, ce n'est pas un autre tableau de bord. C'est la phrase à la fin : voici quoi faire lundi, à la mesure des heures et des dollars que vous avez vraiment."
    },
    monday: {
      h: "Lundi, 7 h 02",
      note: "Une démonstration scénarisée : la même logique qu'Aly, avec des chiffres d'exemple. Le vrai Aly lit vos vrais comptes.",
      pick: "Choisissez un commerce",
      hours: "Heures dont le propriétaire dispose cette semaine",
      run: "Lancer le lundi",
      steps: ["Lecture des sources connectées", "Signaux trouvés dans les données, calculés par le code", "Playbooks retenus, sur 24", "Le plan de la semaine, classé par valeur selon les heures"],
      email: "Vos 3 chiffres et les actions de la semaine",
      why: "pourquoi celle-ci",
      skipped: "Remis à la semaine prochaine, pas assez d'heures :",
      none: "Rien ne tient dans ce nombre d'heures. Donnez-en une de plus à Aly.",
      min: "min",
      businesses: [
        {
          id: "plumber", name: "Un plombier", place: "Trois-Rivières",
          signals: [
            "3 nouveaux avis Google sans réponse depuis 9 jours",
            "Recherches « plombier urgence » en hausse de 40 %, clics stables",
            "Fréquence de la pub Meta à 3,4, taux de clic en baisse depuis deux semaines"
          ],
          playbooks: ["Répondre à chaque avis en 48 heures", "Pages de service pour l'intention urgente", "Fatigue créative", "Vitesse de réponse aux demandes"],
          actions: [
            { t: "Répondre aux trois avis, par leur nom, aujourd'hui", m: 20, v: 3, why: "Les avis sont la première chose qu'un appel d'urgence lit. Neuf jours de silence, c'est un signal pour eux aussi." },
            { t: "Changer la création de la pub Meta ; garder l'audience", m: 45, v: 2, why: "Une fréquence au-dessus de 3 avec des clics en baisse, c'est de la fatigue, pas un problème de ciblage. Changer l'audience gaspillerait ce qui marche déjà." },
            { t: "Ajouter un bloc « urgence 24 h » à la page plomberie", m: 60, v: 2, why: "Les recherches sont déjà là. La page n'y répond pas, alors les clics vont à quelqu'un qui le fait." },
            { t: "Mettre en place un texto automatique sur appel manqué", m: 90, v: 1, why: "L'argent le plus rapide pour une entreprise de services, c'est de répondre en premier. À faire dès que la semaine le permet." }
          ]
        },
        {
          id: "clinic", name: "Une clinique de physio", place: "Sherbrooke",
          signals: [
            "Note de 4,9, mais seulement 12 avis en deux ans",
            "60 % des visites sur mobile ; la page de réservation en perd 70 %",
            "Instagram : deux publications par mois, portée en baisse d'un tiers"
          ],
          playbooks: ["Demander un avis après la visite", "Friction de réservation mobile", "Cadence de publication", "Voix du client"],
          actions: [
            { t: "Demander un avis à chaque patient à la sortie, avec un code QR", m: 30, v: 3, why: "Un 4,9 avec 12 avis perd contre un 4,6 avec 180. La note est bonne ; c'est le nombre qui manque." },
            { t: "Mettre le bouton de réservation en haut de l'écran mobile", m: 40, v: 3, why: "Sept visiteurs mobiles sur dix quittent la page de réservation. Ils sont venus réserver ; que ce soit la première chose qu'ils voient." },
            { t: "Programmer une publication par semaine, le mardi soir", m: 45, v: 1, why: "La régularité bat le vernis. Une publication fiable par semaine empêche la portée de s'effriter." },
            { t: "Relire les 20 derniers avis pour les mots des patients, et les réutiliser sur l'accueil", m: 60, v: 2, why: "Les patients disent « enfin sans douleur », le site dit « approche multidisciplinaire ». Utilisez leurs mots." }
          ]
        },
        {
          id: "bakery", name: "Une boulangerie", place: "Québec",
          signals: [
            "Photos Google mises à jour il y a 14 mois",
            "Recherches « gâteau anniversaire » en hausse, aucune page n'y répond",
            "Les publications du week-end ont trois fois la portée de celles de semaine"
          ],
          playbooks: ["Photos fraîches sur Google", "Une page pour la demande qui monte", "Publier quand le public est là", "Calendrier saisonnier"],
          actions: [
            { t: "Téléverser 10 photos du comptoir de la semaine sur Google", m: 25, v: 3, why: "Des photos de quatorze mois disent la même chose à Google et aux clients : rien de neuf ici." },
            { t: "Créer une page « gâteaux d'anniversaire » avec prix et commande en 48 h", m: 90, v: 3, why: "La demande est mesurable et personne n'y répond. Une page est la façon la moins chère de l'attraper." },
            { t: "Déplacer les publications de la semaine au samedi matin", m: 15, v: 2, why: "Mêmes publications, trois fois la portée. Le changement le moins cher du plan." },
            { t: "Préparer la publication du menu des Fêtes pour la première semaine de novembre", m: 45, v: 1, why: "Le Québec achète selon la saison. Être premier dans le fil compte plus qu'être le meilleur." }
          ]
        }
      ]
    },
    thinks: {
      h: "Comment Aly réfléchit",
      note: "Le modèle est une pièce remplaçable. La valeur est dans ce qui l'entoure.",
      p1: "Aly est un modèle de langage enveloppé dans les règles, les données et le savoir d'Acteurly. Le code rassemble les faits et calcule chaque nombre, le modèle explique et recommande, et le code vérifie la réponse. Les mêmes sept étapes s'exécutent pour une question, le plan hebdomadaire et chaque analyse.",
      diagram: {
        steps: ["Vérifier et réserver le coût", "Contexte : chiffres calculés par le code", "Retenir 4–5 playbooks sur 24", "Ajouter les règles", "Appeler le modèle", "Vérifier la réponse en code", "Réutiliser le cache"],
        rule: "le modèle ne calcule jamais un chiffre",
        caption: "Sept étapes, et le coût est réservé avant l'appel au modèle."
      }
    },
    role: {
      h: "Mon rôle : l'humain dans la boucle",
      note: "Je n'ai pas écrit le code. J'ai écrit ce que le code ne peut pas savoir.",
      p1: "J'ai été l'expert marketing et le réviseur. Les playbooks qu'Aly lit avant chaque réponse viennent d'années d'agence : ce que les signaux veulent dire, quoi faire, quoi mesurer, et le piège. J'ai bâti les grilles pour juger ses recommandations et révisé ce qu'il produisait selon ces grilles avant qu'un propriétaire ne le voie.",
      p2: "La boucle se ferme avec les propriétaires : ils notent chaque recommandation et disent si une action a marché. Chaque résultat est enregistré avec les playbooks derrière et le type d'entreprise, jamais son nom. Avec trois entreprises ou plus derrière un playbook, son historique est montré au modèle aussi.",
      diagram: {
        me: "moi", playbooks: "24 playbooks", rubrics: "grilles", aly: "Aly", owner: "le propriétaire", review: "révision avant livraison", rate: "note, rapporte les résultats", learn: "historique par playbook",
        caption: "Ce que j'ai mis, ce qui revient, et où commence l'avantage par les données."
      }
    },
    moat: {
      h: "L'avantage",
      note: "Trois couches qu'un outil américain peut traduire, mais pas copier.",
      rings: [
        ["Le savoir d'expert", "Des playbooks tirés de la pratique d'agence, avec le calendrier québécois et la Charte de la langue française intégrés."],
        ["La mémoire de chaque entreprise", "Son historique, ses décisions, et ce qui est arrivé après chaque action."],
        ["Les résultats entre entreprises", "Ce qui marche vraiment, par secteur et par région, au Québec. Plus tard, ce qui entraîne des modèles marketing spécialisés."]
      ]
    },
    ladder: {
      h: "Combien d'autonomie, et quand",
      note: "Honnêtement : aujourd'hui, c'est plus près de flux bien construits plus un assistant que d'un agent autonome. C'est le bon point de départ.",
      rungs: [
        ["Surveiller", "Alertes, rapports, le courriel du lundi.", "les clients l'ont aujourd'hui"],
        ["Rédiger", "Recommandations ; brouillons au niveau d'aide le plus élevé.", "en partie aujourd'hui"],
        ["Faire sur votre OK", "Aly prépare une réponse d'avis, une publication, un changement de budget, et agit après un clic.", "prochaine étape, tâches à faible risque d'abord"],
        ["Faire seul", "Seulement des tâches internes et réversibles, après beaucoup d'exécutions propres.", "plus tard"]
      ],
      rules: [
        ["Le test de la gomme.", "Une erreur peut-elle être effacée avant qu'un client la voie ? Sinon, échelon 3 au plus. Prix, rabais et budgets publicitaires restent à l'échelon 2."],
        ["La règle de trois.", "Trente exécutions propres avant l'échelon 3. Cent avant l'échelon 4."]
      ],
      caption: "Quatre échelons. Deux règles décident jusqu'où une tâche peut monter."
    },
    model: {
      h: "Comment ça fait de l'argent",
      note: "Le diagnostic gratuit est la porte. L'habitude hebdomadaire est le commerce.",
      head: ["Forfait", "Prix", "Ce qu'il donne"],
      rows: [
        ["Gratuit", "0 $, pour toujours", "Diagnostic mensuel, rapports, connexions, alertes, 10 questions à Aly par mois"],
        ["Essentiel", "49 $ par mois", "L'analyste complet : plan hebdomadaire, Aly chaque jour, quatre analyses, test de visibilité"],
        ["Pro", "69 $ par mois", "Essentiel, jusqu'à trois entreprises, soutien prioritaire, contenu et publicité au fil des livraisons"],
        ["Pilote", "Gratuit 3 mois", "Tout, sur invitation, pour 10 à 20 entreprises du Québec qui donnent leur avis"]
      ],
      p: "Les clients viennent du diagnostic gratuit, des articles Ressources, du bouche-à-oreille des pilotes, et plus tard des gens qui conseillent déjà les petites entreprises : comptables, chambres de commerce, agences web. Un forfait agence transforme les agences de concurrentes en revendeuses."
    },
    tallies: [
      { value: "24", label: "playbooks d'expert" },
      { value: "4–5", label: "retenus par question" },
      { value: "0", label: "chiffre calculé par le modèle" },
      { value: "2 $", label: "par jour, le plafond de toute dépense IA" }
    ],
    tryIt: {
      h: "Essayez-le sur une vraie entreprise",
      note: "Le diagnostic gratuit prend un nom d'entreprise ou un site web et donne un score et trois priorités.",
      open: "Lancer le diagnostic gratuit sur acteurly.ai",
      aside: "Tout fonctionne en français et en anglais. Les données restent au Canada."
    },
    questions: {
      h: "Les questions que je prends volontiers",
      items: [
        "Comment écrit-on un playbook qu'une IA peut utiliser sans qu'il devienne générique ?",
        "Qu'est-ce que le réviseur attrape que les règles n'attrapent pas ?",
        "Pourquoi plafonner la dépense IA à deux dollars par jour, et que se passe-t-il au plafond ?",
        "Quand laisseriez-vous Aly agir seul, et sur quoi ?"
      ]
    }
  }
};

// Rue Principale. 1100 x 350, ground at y=290.
function street() {
  const win = (x, y, w = 22, h = 16) => `<path class="thin" d="M${x} ${y} h${w} v${h} h-${w} z"/>`;
  return `
    <path d="M0 290 H1100"/>
    <path class="thin" d="M0 302 H1100"/>
    <path class="pencil" d="M0 322 H1100" style="stroke-dasharray:14 12"/>

    <path class="thin" d="M560 290 V60"/>
    <path class="thin" d="M540 70 H580 M544 86 H576"/>
    <path class="pencil" d="M560 72 C700 110 860 110 1000 78 M560 72 C440 110 280 110 120 78"/>

    <path d="M40 290 V170 H200 V290"/>
    <path d="M34 170 L120 110 L206 170"/>
    <path class="thin" d="M120 110 V96 M110 96 H130"/>
    ${win(64, 190)}${win(154, 190)}
    <path d="M96 290 V214 H144 V290"/>
    <path class="thin" d="M104 222 H136 M104 230 H128"/>
    <text x="120" y="162" class="hand small" text-anchor="middle">Dépanneur</text>

    <path d="M230 290 V150 H360 V290"/>
    <path d="M224 150 L236 132 H354 L366 150"/>
    <path class="thin" d="M244 150 V158 M264 150 V158 M284 150 V158 M304 150 V158 M324 150 V158 M344 150 V158"/>
    <text x="295" y="176" class="hand small" text-anchor="middle">Boulangerie</text>
    <path d="M248 290 V232 H278 V290"/>
    <path d="M292 200 H346 V260 H292 Z"/>
    <path class="thin" d="M300 212 C310 206 320 206 330 212 M300 226 C310 220 320 220 330 226 M300 240 H336"/>

    <path d="M400 290 V120 H540 V290"/>
    <path class="thin" d="M394 120 H546"/>
    ${win(416, 140)}${win(456, 140)}${win(496, 140)}${win(416, 176)}${win(456, 176)}${win(496, 176)}
    <path d="M452 290 V236 H488 V290"/>
    <path d="M406 210 H534 V230 H406 Z"/>
    <text x="470" y="225" class="hand small" text-anchor="middle">Clinique physio</text>

    <path d="M600 290 V60 H740 V290"/>
    <path class="thin" d="M596 60 H744"/>
    ${win(616, 80)}${win(656, 80)}${win(696, 80)}${win(616, 116)}${win(656, 116)}${win(696, 116)}${win(616, 152)}${win(656, 152)}${win(696, 152)}${win(616, 188)}${win(656, 188)}${win(696, 188)}
    <path d="M652 290 V240 H688 V290"/>
    <text x="670" y="232" class="hand small" text-anchor="middle">Comptable · Avocat</text>

    <path d="M780 290 V190 H900 V290"/>
    <path d="M774 190 L840 150 L906 190"/>
    <path class="thin" d="M784 198 H896 V216 H784 Z"/>
    <text x="840" y="212" class="hand small" text-anchor="middle" style="font-size:13px">Salon de coiffure</text>
    ${win(796, 228)}${win(872, 228)}
    <path d="M826 290 V232 H854 V290"/>

    <path d="M940 290 V150"/>
    <path d="M940 152 H1004 V196 H940"/>
    <path class="thin" d="M972 152 V196 M940 174 H1004"/>
    <path class="thin" d="M956 160 C952 166 956 170 956 166 M988 160 C984 166 988 170 988 166 M956 182 C952 188 956 192 956 188 M988 182 C984 188 988 192 988 188"/>

    <path d="M880 334 V308 L896 296 H960 L976 308 V334 Z"/>
    <path class="thin" d="M898 298 L890 308 H970 L962 298"/>
    <text x="928" y="326" class="hand small" text-anchor="middle" style="font-size:12px">Plomberie</text>
    <circle cx="896" cy="336" r="6"/>
    <circle cx="960" cy="336" r="6"/>`;
}

// Seven steps. 900 x 230.
function pipeline(d) {
  const w = 112, gap = 12, x0 = 20;
  const wrap = (txt, x, y, max = 15) => {
    const lines = [""];
    for (const word of txt.split(" ")) {
      if ((lines[lines.length - 1] + " " + word).trim().length > max) lines.push(word);
      else lines[lines.length - 1] = (lines[lines.length - 1] + " " + word).trim();
    }
    const y0 = y - (lines.length - 1) * 9;
    return `<text x="${x}" y="${y0}" class="hand small" text-anchor="middle">${lines.map((l, i) => `<tspan x="${x}" dy="${i ? 18 : 0}">${esc(l)}</tspan>`).join("")}</text>`;
  };
  const boxes = d.steps.map((s, i) => {
    const x = x0 + i * (w + gap);
    const model = i === 4;
    return `
      <path d="M${x} 70 H${x + w} V170 H${x} Z" ${model ? 'class="pencil"' : ""}/>
      ${model ? `<path class="pencil" d="M${x + 4} 74 H${x + w - 4} V166 H${x + 4} Z" style="stroke-dasharray:4 4"/>` : ""}
      ${wrap(s, x + w / 2, 122, 13)}
      ${i < 6 ? `<path class="thin" d="M${x + w + 1} 120 H${x + w + gap - 1}"/>` : ""}`;
  }).join("");
  const xm = x0 + 4 * (w + gap) + w / 2;
  return `${boxes}
    <path class="pencil" d="M${x0 + w / 2} 70 C${x0 + w / 2} 30 ${xm - 40} 30 ${xm} 66"/>
    <path class="pencil" d="M${xm - 8} 58 L${xm} 66 L${xm + 6} 56"/>
    <text x="${(x0 + xm) / 2}" y="26" class="hand small" text-anchor="middle">${esc(d.rule)}</text>
    <path class="pencil" d="M${x0 + 6 * (w + gap) + w / 2} 170 C${x0 + 6 * (w + gap) + w / 2} 214 ${x0 + 2 * (w + gap) + w / 2} 214 ${x0 + 1 * (w + gap) + w / 2} 176"/>`;
}

// Me, Aly, the owner. 900 x 300.
function loop(d) {
  return `
    <circle cx="120" cy="130" r="16"/>
    <path d="M94 182 C96 156 144 156 146 182"/>
    <text x="120" y="212" class="hand" text-anchor="middle">${esc(d.me)}</text>
    <path d="M190 92 H300 V132 H190 Z"/>
    <path class="thin" d="M200 104 H290 M200 114 H270 M200 124 H284"/>
    <text x="245" y="150" class="hand small" text-anchor="middle">${esc(d.playbooks)}</text>
    <path d="M190 160 H300 V200 H190 Z"/>
    <path class="thin" d="M200 172 L208 180 L222 166 M232 176 H290 M200 190 H290"/>
    <text x="245" y="220" class="hand small" text-anchor="middle">${esc(d.rubrics)}</text>
    <path class="thin" d="M150 120 H186 M186 120 L180 115 M186 120 L180 125"/>
    <path class="thin" d="M150 170 H186 M186 170 L180 165 M186 170 L180 175"/>
    <path class="thin" d="M302 112 C340 112 350 140 380 140 M302 180 C340 180 350 150 380 150"/>
    <path d="M384 90 L470 90 L480 145 L470 200 L384 200 L374 145 Z"/>
    <text x="427" y="152" class="hand" text-anchor="middle">${esc(d.aly)}</text>
    <path class="thin" d="M484 130 H550 M550 130 L544 125 M550 130 L544 135"/>
    <path d="M556 112 H716 V152 H556 Z"/>
    <text x="636" y="137" class="hand small" text-anchor="middle">${esc(d.review)}</text>
    <path class="pencil" d="M636 112 C636 40 300 20 120 104"/>
    <path class="pencil" d="M124 94 L120 104 L130 108"/>
    <path class="thin" d="M718 132 H760 M760 132 L754 127 M760 132 L754 137"/>
    <circle cx="800" cy="112" r="16"/>
    <path d="M774 164 C776 138 824 138 826 164"/>
    <text x="800" y="194" class="hand" text-anchor="middle">${esc(d.owner)}</text>
    <path class="pencil" d="M800 200 C800 262 560 266 427 262 C400 262 400 240 420 206"/>
    <path class="pencil" d="M412 214 L420 206 L428 216"/>
    <text x="610" y="282" class="hand small" text-anchor="middle">${esc(d.rate)} → ${esc(d.learn)}</text>`;
}

// Four rungs. 900 x 260.
function ladderFig(d) {
  const rungs = d.rungs.map((r, i) => {
    const y = 220 - i * 56;
    return `
      <path d="M120 ${y} H260"/>
      <text x="290" y="${y + 6}" class="hand">${esc(i + 1)}. ${esc(r[0])}</text>
      <text x="520" y="${y + 6}" class="hand small">${esc(r[2])}</text>`;
  }).join("");
  return `
    <path d="M120 250 V30 M260 250 V30"/>
    ${rungs}
    <path class="pencil" d="M100 136 H780" style="stroke-dasharray:6 6"/>
    <text x="788" y="140" class="hand small" text-anchor="start">${esc(d.rules[0][0].replace(".", ""))}</text>`;
}

function mondayCard(m) {
  const b = m.businesses;
  return `
  <div class="monday ink-on-view" id="monday">
    <div class="monday-controls">
      <div class="monday-pick">
        <span class="monday-label">${esc(m.pick)}</span>
        <div class="monday-biz">${b.map((x, i) => `<button type="button" class="chip ${i === 0 ? "on" : ""}" data-biz="${x.id}">${esc(x.name)}<small>${esc(x.place)}</small></button>`).join("")}</div>
      </div>
      <label class="monday-hours">
        <span class="monday-label">${esc(m.hours)}: <b id="monday-hours-val">2 h</b></span>
        <input type="range" id="monday-hours" min="1" max="4" step="0.5" value="2">
      </label>
      <button type="button" class="btn run" id="monday-run">${esc(m.run)}</button>
    </div>
    <div class="monday-email">
      <div class="monday-head">
        <span class="monday-from">Aly · Acteurly</span>
        <span class="monday-subject">${esc(m.email)}</span>
      </div>
      <div class="monday-body" id="monday-body"></div>
    </div>
  </div>`;
}

export function mount(root, L) {
  const tx = text[L] || text.en;
  const m = tx.monday;
  const el = root.querySelector("#monday");
  if (!el) return;
  const body = el.querySelector("#monday-body");
  const hoursIn = el.querySelector("#monday-hours");
  const hoursVal = el.querySelector("#monday-hours-val");
  let biz = m.businesses[0];
  let timer = null;

  const fmtH = (h) => (L === "fr" ? `${String(h).replace(".", ",")} h` : `${h} h`);
  hoursIn.addEventListener("input", () => { hoursVal.textContent = fmtH(hoursIn.value); });

  el.querySelectorAll(".chip").forEach((c) => c.addEventListener("click", () => {
    el.querySelectorAll(".chip").forEach((x) => x.classList.remove("on"));
    c.classList.add("on");
    biz = m.businesses.find((x) => x.id === c.dataset.biz);
    run();
  }));

  function plan(hours) {
    const budget = hours * 60;
    const sorted = [...biz.actions].sort((a, b) => b.v - a.v || a.m - b.m);
    const picked = [], skipped = [];
    let used = 0;
    for (const a of sorted) {
      if (used + a.m <= budget && picked.length < 3) { picked.push(a); used += a.m; } else skipped.push(a);
    }
    return { picked, skipped, used };
  }

  function line(html, delay) {
    return new Promise((res) => {
      timer = setTimeout(() => {
        body.insertAdjacentHTML("beforeend", html);
        const last = body.lastElementChild;
        requestAnimationFrame(() => last.classList.add("in"));
        res();
      }, delay);
    });
  }

  async function run() {
    clearTimeout(timer);
    body.innerHTML = "";
    const hours = parseFloat(hoursIn.value);
    const { picked, skipped, used } = plan(hours);
    const token = Symbol();
    run.token = token;
    const guard = () => run.token === token;

    await line(`<p class="m-step"><span class="m-dot"></span>${esc(m.steps[0])}: Google, Meta, ${L === "fr" ? "avis" : "reviews"}</p>`, 200);
    if (!guard()) return;
    await line(`<p class="m-step">${esc(m.steps[1])}</p>`, 700);
    for (const s of biz.signals) { if (!guard()) return; await line(`<p class="m-signal">${esc(s)}</p>`, 420); }
    if (!guard()) return;
    await line(`<p class="m-step">${esc(m.steps[2])}</p>`, 600);
    if (!guard()) return;
    await line(`<p class="m-books">${biz.playbooks.map((p) => `<span>${esc(p)}</span>`).join("")}</p>`, 300);
    if (!guard()) return;
    await line(`<p class="m-step">${esc(m.steps[3])} (${fmtH(hours)})</p>`, 700);
    if (picked.length === 0) { await line(`<p class="m-none">${esc(m.none)}</p>`, 300); return; }
    for (let i = 0; i < picked.length; i++) {
      if (!guard()) return;
      const a = picked[i];
      await line(`<div class="m-action"><div class="m-action-head"><b>${i + 1}.</b> ${esc(a.t)} <em>${a.m} ${esc(m.min)}</em></div><p class="m-why"><span>${esc(m.why)}:</span> ${esc(a.why)}</p></div>`, 500);
    }
    if (!guard()) return;
    await line(`<p class="m-total">${used} ${esc(m.min)} / ${hours * 60}</p>`, 300);
    if (skipped.length) {
      if (!guard()) return;
      await line(`<p class="m-skipped">${esc(m.skipped)} ${skipped.map((a) => esc(a.t)).join(" · ")}</p>`, 300);
    }
  }

  el.querySelector("#monday-run").addEventListener("click", run);
  hoursIn.addEventListener("change", run);
  run();
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

      ${inkFigure(street(), { viewBox: "0 0 1100 350", caption: tx.street.caption, cls: "wide street" })}

      <aside class="margin"><p class="margin-note">${esc(tx.problem.note)}</p></aside>
      <div class="body">
        <h2>${esc(tx.problem.h)}</h2>
        <p class="lede">${esc(tx.problem.p1)}</p>
        <p>${esc(tx.problem.p2)}</p>
      </div>

      <aside class="margin"><p class="margin-note">${esc(tx.monday.note)}</p></aside>
      <div class="body"><h2>${esc(tx.monday.h)}</h2></div>
      <div class="wide">${mondayCard(tx.monday)}</div>

      <aside class="margin"><p class="margin-note">${esc(tx.thinks.note)}</p></aside>
      <div class="body">
        <h2>${esc(tx.thinks.h)}</h2>
        <p class="lede">${esc(tx.thinks.p1)}</p>
      </div>
      ${inkFigure(pipeline(tx.thinks.diagram), { viewBox: "0 0 900 240", caption: tx.thinks.diagram.caption, cls: "wide" })}

      <aside class="margin"><p class="margin-note red">${esc(tx.role.note)}</p></aside>
      <div class="body">
        <h2>${esc(tx.role.h)}</h2>
        <p class="lede">${esc(tx.role.p1)}</p>
        <p>${esc(tx.role.p2)}</p>
      </div>
      ${inkFigure(loop(tx.role.diagram), { viewBox: "0 0 900 300", caption: tx.role.diagram.caption, cls: "wide" })}

      <aside class="margin"><p class="margin-note">${esc(tx.moat.note)}</p></aside>
      <div class="body">
        <h2>${esc(tx.moat.h)}</h2>
        <dl class="gaps rings">${tx.moat.rings.map(([k, v], i) => `<dt><span class="ring-n">${i + 1}</span>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}</dl>
      </div>

      <aside class="margin"><p class="margin-note">${esc(tx.ladder.note)}</p></aside>
      <div class="body">
        <h2>${esc(tx.ladder.h)}</h2>
      </div>
      ${inkFigure(ladderFig(tx.ladder), { viewBox: "0 0 900 260", caption: tx.ladder.caption, cls: "wide" })}
      <aside class="margin"></aside>
      <div class="body">
        <dl class="gaps">${tx.ladder.rungs.map(([k, v], i) => `<dt>${i + 1}. ${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}</dl>
        <dl class="gaps rules">${tx.ladder.rules.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}</dl>
      </div>

      <aside class="margin"><p class="margin-note">${esc(tx.model.note)}</p></aside>
      <div class="body">
        <h2>${esc(tx.model.h)}</h2>
        <table class="ruled">
          <thead><tr>${tx.model.head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
          <tbody>${tx.model.rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
        </table>
        <p>${esc(tx.model.p)}</p>
      </div>

      <aside class="margin"><p class="margin-note">${esc(t("story.changed.note"))}</p></aside>
      <div class="body">${tally(tx.tallies)}</div>

      <aside class="margin"><p class="margin-note">${esc(tx.tryIt.note)}</p></aside>
      <div class="body">
        <h2>${esc(tx.tryIt.h)}</h2>
        <div class="actions"><a class="btn" href="${esc(p.links.live)}" target="_blank" rel="noopener">${esc(tx.tryIt.open)}</a></div>
        <p class="margin-note" style="margin-top:14px">${esc(tx.tryIt.aside)}</p>
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
