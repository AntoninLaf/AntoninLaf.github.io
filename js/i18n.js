// Shared strings. Project-specific text lives in each project's folder.
export const strings = {
  en: {
    "lang.switch": "FR",
    "nav.back": "Back to the map",
    "hero.throughline": "I turn messy business questions into products and decisions that ship.",
    "hero.note": "This is my field notebook. Each place on the map is a problem I worked on. Pick one.",
    "map.legend": "Places where a question became a decision",
    "map.start": "start here",
    "about.title": "About me",
    "about.place": "The desk",
    "about.label": "The desk",
    "about.note": "Five stories. The resume lives here too.",
    "about.lede": "Five years in marketing, growth and product, across a telecom, an industrial manufacturer, an agency and two startups. The stories below are how I actually work: the situation I walked into, what I did, what changed.",
    "about.stories": "The stories",
    "about.coming": "Being inked. Each story opens as its own page in the next few days.",
    "about.resume": "Download the resume",
    "about.resume.note": "PDF, one page",
    "about.contact": "Write to me",
    "project.try": "Try the real thing",
    "project.code": "Read the code",
    "project.live": "See it live",
    "project.coming": "The full story is being inked: the situation, why it hurt, the options I weighed, what I built, the result and the limits. Back in a few days. Until then, the real product is one click away.",
    "project.inprogress": "page in progress",
    "ask.tab": "Ask me anything",
    "ask.title": "Ask about my work",
    "ask.placeholder": "e.g. What did he do at STEKAR?",
    "ask.setup": "The assistant is being set up. It will answer only from what I've written in this notebook, and it will tell you when it doesn't know. Until then, write to me directly.",
    "ask.email": "Antonin.laferriere-mailfait@mail.mcgill.ca",
    "footer.made": "Drawn and written by hand. Montréal."
  },
  fr: {
    "lang.switch": "EN",
    "nav.back": "Retour à la carte",
    "hero.throughline": "Je transforme des questions d'affaires embrouillées en produits et en décisions qui aboutissent.",
    "hero.note": "Voici mon carnet de terrain. Chaque lieu sur la carte est un problème sur lequel j'ai travaillé. Choisissez-en un.",
    "map.legend": "Les endroits où une question est devenue une décision",
    "map.start": "départ",
    "about.title": "À propos",
    "about.place": "Le bureau",
    "about.label": "Le bureau",
    "about.note": "Cinq histoires. Le CV est ici aussi.",
    "about.lede": "Cinq ans en marketing, croissance et produit, dans une télécom, un manufacturier industriel, une agence et deux startups. Les histoires ci-dessous montrent comment je travaille vraiment : la situation à mon arrivée, ce que j'ai fait, ce qui a changé.",
    "about.stories": "Les histoires",
    "about.coming": "En cours d'écriture. Chaque histoire aura sa page d'ici quelques jours.",
    "about.resume": "Télécharger le CV",
    "about.resume.note": "PDF, une page",
    "about.contact": "M'écrire",
    "project.try": "Essayer le vrai produit",
    "project.code": "Lire le code",
    "project.live": "Voir en ligne",
    "project.coming": "L'histoire complète s'écrit : la situation, pourquoi ça faisait mal, les options pesées, ce que j'ai construit, le résultat et les limites. De retour dans quelques jours. D'ici là, le vrai produit est à un clic.",
    "project.inprogress": "page en cours",
    "ask.tab": "Posez-moi une question",
    "ask.title": "À propos de mon travail",
    "ask.placeholder": "ex. Qu'a-t-il fait chez STEKAR ?",
    "ask.setup": "L'assistant est en cours d'installation. Il répondra seulement à partir de ce que j'ai écrit dans ce carnet, et il dira quand il ne sait pas. D'ici là, écrivez-moi directement.",
    "ask.email": "Antonin.laferriere-mailfait@mail.mcgill.ca",
    "footer.made": "Dessiné et écrit à la main. Montréal."
  }
};

let current = "en";

export function detectLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "fr") return saved;
  } catch (_) {}
  return "en"; // English first, FR switch always visible
}

export function setLang(l) {
  current = l;
  try { localStorage.setItem("lang", l); } catch (_) {}
  document.documentElement.lang = l;
}

export function lang() { return current; }

export function t(key) {
  const s = strings[current] && strings[current][key];
  return s !== undefined ? s : (strings.en[key] !== undefined ? strings.en[key] : key);
}
