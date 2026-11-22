// Who should the bank call first? Ranking marketing prospects with deep learning (MGSC 673, McGill).
import { render as story } from "./story.js";

export default {
  story,
  slug: "bankcalls",
  order: 5,
  kind: { en: "Marketing analytics · Deep learning", fr: "Analytique marketing · Apprentissage profond" },
  tags: ["analytics", "ai"],
  map: { x: 720, y: 190, noteSide: "above" },
  links: {},
  text: {
    en: {
      title: "Who should the bank call first?",
      short: "Bank calls",
      place: "The call centre",
      label: "The call centre",
      small: "Bank calls",
      note: "The limit was the information in the inputs, not the network.",
      lede: "A bank has a list of prospects and a budget for only so many calls. Which ones should it call first? I built a PyTorch neural network to rank prospects by how likely they are to subscribe, on the public UCI Bank Marketing dataset of 41,188 calls, and compared it with logistic regression, gradient boosted trees and a rule of thumb. Then I ran a targeting simulation and a profit analysis on the ranking.",
      tagline: "ranking a bank's prospects, best calls first",
    },
    fr: {
      title: "Qui la banque devrait-elle appeler en premier ?",
      short: "Appels bancaires",
      place: "Le centre d'appels",
      label: "Le centre d'appels",
      small: "Appels bancaires",
      note: "La limite était l'information dans les données, pas le réseau.",
      lede: "Une banque a une liste de prospects et un budget pour un nombre limité d'appels. Lesquels appeler en premier ? J'ai bâti un réseau de neurones en PyTorch pour classer les prospects selon leur probabilité de souscrire, sur le jeu de données public UCI Bank Marketing de 41 188 appels, et je l'ai comparé à une régression logistique, à des arbres à gradient boosté et à une règle empirique. J'ai ensuite fait une simulation de ciblage et une analyse de profit à partir du classement.",
      tagline: "classer les prospects d'une banque, meilleurs appels d'abord",
    }
  },
  // A bank with its columns, and the telephone the campaign runs on.
  landmark: () => `
    <path d="M-90 0 H90"/>
    <path d="M-78 0 V-10 H6 V0"/>
    <path d="M-72 -10 V-62 M-52 -10 V-62 M-32 -10 V-62 M-12 -10 V-62 M0 -10 V-62"/>
    <path d="M-80 -62 H8 L-36 -96 Z"/>
    <path class="thin" d="M-62 -10 V-62 M-42 -10 V-62 M-22 -10 V-62 M-6 -10 V-62"/>
    <path class="thin" d="M-42 -74 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0"/>
    <path d="M30 0 V-26 C30 -34 36 -38 44 -38 H66 C74 -38 80 -34 80 -26 V0"/>
    <path d="M24 -46 C24 -58 34 -62 55 -62 C76 -62 86 -58 86 -46 V-40 H72 V-46 H38 V-40 H24 Z"/>
    <path class="thin" d="M46 -20 a9 9 0 1 0 18 0 a9 9 0 1 0 -18 0 M52 -20 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0"/>
    <path class="pencil" d="M24 -44 C14 -40 16 -28 8 -26 C2 -24 4 -14 10 -12"/>
  `
};
