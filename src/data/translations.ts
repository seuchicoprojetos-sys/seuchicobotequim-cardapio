export type Locale = "pt-BR" | "en" | "es" | "fr" | "it";

export interface Translation {
  // Meta
  siteTitle: string;
  tagline: string;

  // Nav / UI
  menu: string;
  openingHours: string;
  acceptedCards: string;
  noChecks: string;
  couvert: string;
  couvertRegular: string;
  couvertSpecial: string;
  specialDays: string;
  perPerson: string;
  serviceFee: string;
  dose: string;
  garrafa: string;
  withoutGluten: string;
  consultFlavors: string;
  portion: string;
  language: string;

  // Category names
  torando: string;
  comGas: string;
  whisky: string;
  esquentaUrea: string;
  drinks: string;
  paraDividir: string;
  tequila: string;
  curaRessaca: string;
  tilouPagou: string;
  extras: string;
  doseProSanto: string;
  vodkaEGin: string;
  desentalo: string;
  matuta: string;
  happyDoVei: string;

  // Footer
  footerRights: string;
}

export const translations: Record<Locale, Translation> = {
  "pt-BR": {
    siteTitle: "Seu Chico Botequim",
    tagline: "Botequim & Petisco",
    menu: "Cardápio",
    openingHours: "Horário de Funcionamento",
    acceptedCards: "Cartões Aceitos",
    noChecks: "Não aceitamos cheques",
    couvert: "Couvert",
    couvertRegular: "R$ 15,00",
    couvertSpecial: "R$ 20,00",
    specialDays: "Dias Especiais",
    perPerson: "por pessoa",
    serviceFee: "Taxa de serviço 10%",
    dose: "DOSE",
    garrafa: "GARRAFA",
    withoutGluten: "sem glúten",
    consultFlavors: "consultar sabores",
    portion: "porção",
    language: "Idioma",
    torando: "Torando",
    comGas: "Com Gás",
    whisky: "Whisky",
    esquentaUrea: "Esquenta Uréa",
    drinks: "Drinks",
    paraDividir: "Para Dividir",
    tequila: "Chê de Besteira",
    curaRessaca: "Cura Ressaca",
    tilouPagou: "Tilou Pagou",
    extras: "Extras",
    doseProSanto: "Dose Pro Santo",
    vodkaEGin: "Vodka e Gin",
    desentalo: "Desentalo",
    matuta: "Matuta",
    happyDoVei: "Happy do Vêi",
    footerRights: "Todos os direitos reservados.",
  },
  en: {
    siteTitle: "Seu Chico Botequim",
    tagline: "Bar & Snacks",
    menu: "Menu",
    openingHours: "Opening Hours",
    acceptedCards: "Accepted Cards",
    noChecks: "We do not accept checks",
    couvert: "Cover Charge",
    couvertRegular: "R$ 15.00",
    couvertSpecial: "R$ 20.00",
    specialDays: "Special Days",
    perPerson: "per person",
    serviceFee: "10% service fee",
    dose: "SHOT",
    garrafa: "BOTTLE",
    withoutGluten: "gluten-free",
    consultFlavors: "ask for flavors",
    portion: "portion",
    language: "Language",
    torando: "Beers",
    comGas: "Soft Drinks",
    whisky: "Whisky",
    esquentaUrea: "Cachaça",
    drinks: "Cocktails",
    paraDividir: "Sharing Combos",
    tequila: "Tequila / Wines",
    curaRessaca: "Hangover Cure",
    tilouPagou: "Full Plates",
    extras: "Extras",
    doseProSanto: "Spirits",
    vodkaEGin: "Vodka & Gin",
    desentalo: "Non-alcoholic",
    matuta: "Matuta",
    happyDoVei: "Happy Hour",
    footerRights: "All rights reserved.",
  },
  es: {
    siteTitle: "Seu Chico Botequim",
    tagline: "Bar & Tapas",
    menu: "Menú",
    openingHours: "Horario de Apertura",
    acceptedCards: "Tarjetas Aceptadas",
    noChecks: "No aceptamos cheques",
    couvert: "Cubierto",
    couvertRegular: "R$ 15,00",
    couvertSpecial: "R$ 20,00",
    specialDays: "Días Especiales",
    perPerson: "por persona",
    serviceFee: "10% de cargo por servicio",
    dose: "DOSIS",
    garrafa: "BOTELLA",
    withoutGluten: "sin gluten",
    consultFlavors: "consultar sabores",
    portion: "porción",
    language: "Idioma",
    torando: "Cervezas",
    comGas: "Refrescos",
    whisky: "Whisky",
    esquentaUrea: "Caña",
    drinks: "Cócteles",
    paraDividir: "Para Compartir",
    tequila: "Tequila / Vinos",
    curaRessaca: "Cura Resaca",
    tilouPagou: "Platos",
    extras: "Extras",
    doseProSanto: "Licores",
    vodkaEGin: "Vodka y Gin",
    desentalo: "Sin Alcohol",
    matuta: "Matuta",
    happyDoVei: "Happy Hour",
    footerRights: "Todos los derechos reservados.",
  },
  fr: {
    siteTitle: "Seu Chico Botequim",
    tagline: "Bar & Petiscos",
    menu: "Menu",
    openingHours: "Heures d'Ouverture",
    acceptedCards: "Cartes Acceptées",
    noChecks: "Chèques non acceptés",
    couvert: "Couvert",
    couvertRegular: "R$ 15,00",
    couvertSpecial: "R$ 20,00",
    specialDays: "Jours Spéciaux",
    perPerson: "par personne",
    serviceFee: "10% de frais de service",
    dose: "DOSE",
    garrafa: "BOUTEILLE",
    withoutGluten: "sans gluten",
    consultFlavors: "demander les saveurs",
    portion: "portion",
    language: "Langue",
    torando: "Bières",
    comGas: "Sodas",
    whisky: "Whisky",
    esquentaUrea: "Cachaça",
    drinks: "Cocktails",
    paraDividir: "À Partager",
    tequila: "Tequila / Vins",
    curaRessaca: "Soin Gueule de Bois",
    tilouPagou: "Plats Principaux",
    extras: "Extras",
    doseProSanto: "Spiritueux",
    vodkaEGin: "Vodka et Gin",
    desentalo: "Sans Alcool",
    matuta: "Matuta",
    happyDoVei: "Happy Hour",
    footerRights: "Tous droits réservés.",
  },
  it: {
    siteTitle: "Seu Chico Botequim",
    tagline: "Bar & Stuzzichini",
    menu: "Menu",
    openingHours: "Orari di Apertura",
    acceptedCards: "Carte Accettate",
    noChecks: "Non accettiamo assegni",
    couvert: "Coperto",
    couvertRegular: "R$ 15,00",
    couvertSpecial: "R$ 20,00",
    specialDays: "Giorni Speciali",
    perPerson: "a persona",
    serviceFee: "10% di servizio",
    dose: "DOSE",
    garrafa: "BOTTIGLIA",
    withoutGluten: "senza glutine",
    consultFlavors: "chiedi i sapori",
    portion: "porzione",
    language: "Lingua",
    torando: "Birre",
    comGas: "Bibite",
    whisky: "Whisky",
    esquentaUrea: "Cachaça",
    drinks: "Cocktail",
    paraDividir: "Da Condividere",
    tequila: "Tequila / Vini",
    curaRessaca: "Rimedio Sbornia",
    tilouPagou: "Piatti Principali",
    extras: "Extra",
    doseProSanto: "Liquori",
    vodkaEGin: "Vodka e Gin",
    desentalo: "Analcolici",
    matuta: "Matuta",
    happyDoVei: "Happy Hour",
    footerRights: "Tutti i diritti riservati.",
  },
};
