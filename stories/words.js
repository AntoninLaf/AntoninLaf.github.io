// Six statements in Antonin's own words, approved on 18 October 2026.
// The About page shows all six; each project world shows the one about it.
// The English is his wording as approved; the French is a translation of it.
import { esc } from "../js/ink.js";

export const WORDS = {
  en: [
    { id: "value", title: "How I think about value", paras: [
      "I learned that a product can attract attention and still fail to create enough value for someone to pay. VersyTalks made that very concrete. We had periods of strong participation. We listened to users, ran surveys and added features. But revenue remained low, and it was difficult to keep people coming back.",
      "What changed my thinking was the difference between an experience people will try and a problem they care enough to solve. A debate forum can be interesting. A place where a debater can practice for a competition, understand weaknesses and find a coach has a different role in that person's life. The second gives us a clearer reason to exist.",
      "That is why I care about what frustrates people and what would make them change their behavior. I want to know where the product fits into something that already matters to them."
    ] },
    { id: "versytalks", title: "What the VersyTalks change taught me", paras: [
      "The difficult part was accepting that more engagement features would not necessarily solve the business problem. We had tried different formats, rewards and ways to bring discussions back. There were sales, but the model was not producing enough commercial value.",
      "Moving toward competition, practice and coaching gave the experience a clearer purpose. Workshops and tournaments also gave coaches a reason to use the audience we had built. Program tools created a way to support teams and progress, rather than only individual participation.",
      "I am proud of the work, including the part that did not work as we hoped. It changed the questions I ask. I am less impressed by activity on its own. I want to understand what the activity means for the person using the product and for the business supporting it."
    ] },
    { id: "recurrence", title: "Why recurrence matters to me", paras: [
      "With VersyNow, one of the most important choices was to focus on organizations that run events repeatedly. A large conference can produce a valuable report, but the next event is where an organizer gets to act on what they learned.",
      "If the same concern appears across several events, that can shape content. If participation changes after a new format, that can guide the next decision. If an audience is growing or changing, the organizer has a reason to keep learning about it.",
      "This is why I want people to experience successive events during the trial. The product's analytical value is easier to understand when the customer can compare and act, rather than look at a single isolated report."
    ] },
    { id: "ai", title: "What I mean by useful AI", paras: [
      "For me, the interesting question is what the AI helps someone decide and how we judge the quality of that decision. At Acteurly, my contribution includes the marketing playbooks, the rubrics and the review of recommendations. The playbooks explain what signals mean, what action makes sense, what to measure and what trap to avoid.",
      "A business owner does not need a recommendation that sounds clever but assumes time or expertise they do not have. The advice has to fit the situation. The architecture also matters: code gathers facts and calculates numbers, while the model explains and recommends within the rules and knowledge we provide.",
      "I want feedback from what happens after the recommendation. Did the owner act? Did it help? That context can make the system more relevant, but it has to be interpreted carefully. An outcome is information to examine, not automatic proof that the recommendation caused it."
    ] },
    { id: "simplicity", title: "Why I care about simplicity", paras: [
      "I want people to understand the product before they have to learn its full depth. With VersyNow, the participant can answer a poll or ask a question. The organizer can then see the richer analysis behind those interactions.",
      "The same standard applies to how we explain the product. If a person cannot tell what it is, a list of advanced features will not help much. I want the introduction to be precise, the use case concrete and the next step easy to follow.",
      "Simplicity can be an advantage because it reduces the effort between interest and use. It still takes serious work to decide what should be simple and where the complexity belongs."
    ] },
    { id: "consulting", title: "Why consulting interests me", paras: [
      "Consulting interests me because I like the part of the work where we need to understand why the current approach is not producing the expected result. My projects have put me in that situation repeatedly: traffic without enough revenue, event interaction without enough understanding of the audience, or marketing advice that needs more business context.",
      "I can bring examples of changing an approach and helping build the response. I also want to develop that judgment in different organizations and learn from people who solve complex business problems at a high level.",
      "I would rather explain my interest through those examples than claim experience I have not had. The entrepreneurial work gives me a foundation; consulting is a direction I want to explore further."
    ] }
  ],
  fr: [
    { id: "value", title: "Ma façon de voir la valeur", paras: [
      "J'ai appris qu'un produit peut attirer l'attention et quand même ne pas créer assez de valeur pour que quelqu'un paie. VersyTalks l'a rendu très concret. Nous avons eu des périodes de forte participation. Nous avons écouté les utilisateurs, mené des sondages et ajouté des fonctionnalités. Mais les revenus sont restés bas, et il était difficile de faire revenir les gens.",
      "Ce qui a changé ma façon de penser, c'est la différence entre une expérience que les gens vont essayer et un problème qu'ils tiennent assez à résoudre. Un forum de débat peut être intéressant. Un endroit où un débatteur peut se préparer à une compétition, comprendre ses faiblesses et trouver un entraîneur occupe une autre place dans la vie de cette personne. Le second nous donne une raison d'exister plus claire.",
      "C'est pourquoi je m'intéresse à ce qui frustre les gens et à ce qui les ferait changer de comportement. Je veux savoir où le produit s'inscrit dans quelque chose qui compte déjà pour eux."
    ] },
    { id: "versytalks", title: "Ce que le virage de VersyTalks m'a appris", paras: [
      "Le plus difficile a été d'accepter que plus de fonctionnalités d'engagement ne régleraient pas nécessairement le problème d'affaires. Nous avions essayé différents formats, des récompenses et des façons de relancer les discussions. Il y avait des ventes, mais le modèle ne produisait pas assez de valeur commerciale.",
      "Aller vers la compétition, la pratique et le coaching a donné à l'expérience un but plus clair. Les ateliers et les tournois ont aussi donné aux entraîneurs une raison d'utiliser le public que nous avions bâti. Les outils de programme ont créé une façon de soutenir des équipes et des progrès, plutôt que seulement la participation individuelle.",
      "Je suis fier de ce travail, y compris de la partie qui n'a pas fonctionné comme nous l'espérions. Il a changé les questions que je pose. L'activité en soi m'impressionne moins. Je veux comprendre ce que l'activité signifie pour la personne qui utilise le produit et pour l'entreprise qui le soutient."
    ] },
    { id: "recurrence", title: "Pourquoi la récurrence compte pour moi", paras: [
      "Avec VersyNow, l'un des choix les plus importants a été de nous concentrer sur les organisations qui tiennent des événements de façon répétée. Une grande conférence peut produire un rapport précieux, mais c'est au prochain événement que l'organisateur peut agir sur ce qu'il a appris.",
      "Si la même préoccupation revient d'un événement à l'autre, cela peut orienter le contenu. Si la participation change après un nouveau format, cela peut guider la prochaine décision. Si un public grandit ou change, l'organisateur a une raison de continuer à l'étudier.",
      "C'est pourquoi je veux que les gens vivent des événements successifs pendant l'essai. La valeur analytique du produit est plus facile à comprendre quand le client peut comparer et agir, plutôt que regarder un seul rapport isolé."
    ] },
    { id: "ai", title: "Ce que j'entends par une IA utile", paras: [
      "Pour moi, la question intéressante est ce que l'IA aide quelqu'un à décider, et comment nous jugeons la qualité de cette décision. Chez Acteurly, ma contribution comprend les playbooks marketing, les grilles d'évaluation et la révision des recommandations. Les playbooks expliquent ce que les signaux veulent dire, quelle action a du sens, quoi mesurer et quel piège éviter.",
      "Un propriétaire d'entreprise n'a pas besoin d'une recommandation qui sonne brillante mais suppose du temps ou une expertise qu'il n'a pas. Le conseil doit convenir à la situation. L'architecture compte aussi : le code rassemble les faits et calcule les chiffres, pendant que le modèle explique et recommande à l'intérieur des règles et des connaissances que nous fournissons.",
      "Je veux du retour sur ce qui se passe après la recommandation. Le propriétaire a-t-il agi ? Est-ce que ça a aidé ? Ce contexte peut rendre le système plus pertinent, mais il doit être interprété avec soin. Un résultat est une information à examiner, pas la preuve automatique que la recommandation l'a causé."
    ] },
    { id: "simplicity", title: "Pourquoi la simplicité me tient à cœur", paras: [
      "Je veux que les gens comprennent le produit avant d'avoir à en apprendre toute la profondeur. Avec VersyNow, le participant peut répondre à un sondage ou poser une question. L'organisateur peut ensuite voir l'analyse plus riche derrière ces interactions.",
      "La même norme s'applique à la façon dont nous expliquons le produit. Si une personne ne peut pas dire ce que c'est, une liste de fonctionnalités avancées n'aidera pas beaucoup. Je veux une introduction précise, un cas d'usage concret et une prochaine étape facile à suivre.",
      "La simplicité peut être un avantage parce qu'elle réduit l'effort entre l'intérêt et l'usage. Décider ce qui doit être simple et où la complexité doit loger demande quand même un travail sérieux."
    ] },
    { id: "consulting", title: "Pourquoi le conseil m'intéresse", paras: [
      "Le conseil m'intéresse parce que j'aime la partie du travail où il faut comprendre pourquoi l'approche actuelle ne produit pas le résultat attendu. Mes projets m'ont mis dans cette situation à répétition : du trafic sans assez de revenus, de l'interaction en événement sans assez de compréhension du public, ou des conseils marketing qui demandent plus de contexte d'affaires.",
      "Je peux apporter des exemples de changement d'approche et de construction de la réponse. Je veux aussi développer ce jugement dans différentes organisations et apprendre de gens qui résolvent des problèmes d'affaires complexes à un haut niveau.",
      "Je préfère expliquer mon intérêt par ces exemples plutôt que revendiquer une expérience que je n'ai pas eue. Le travail entrepreneurial me donne une base ; le conseil est une direction que je veux explorer davantage."
    ] }
  ]
};

export function findWords(id, L) {
  const list = WORDS[L] || WORDS.en;
  return list.find((w) => w.id === id) || null;
}

// One statement as a notebook block: a quiet heading, then his paragraphs.
export function wordsBlock(id, L, heading) {
  const w = findWords(id, L);
  if (!w) return "";
  return `
      <aside class="margin"><p class="margin-note">${esc(heading)}</p></aside>
      <div class="body words">
        <h2>${esc(w.title)}</h2>
        ${w.paras.map((p) => `<p>${esc(p)}</p>`).join("")}
      </div>`;
}
