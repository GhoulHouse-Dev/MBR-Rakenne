export type Service = {
  number: string;
  title: string;
  description: string;
  cta: string;
};

export const prospect = {
  company: {
    name: "MBR-Rakenne Oy",
    businessId: "1700361-1",
    city: "Espoo",
    address: "Kiuastie 19, 02770 Espoo",
    phone: "040 565 2445",
    phoneHref: "tel:+358405652445",
    founded: "2001",
  },
  audit: {
    checkedAt: "17.9.2026",
    summary:
      "MBR-Rakenne Oy on Espoossa toimiva rakennusalan yritys, jonka toiminta on alkanut vuonna 2001. Yrityksen perustiedot löytyvät verkosta, mutta tarkistamistani lähteistä en löytänyt yritykselle omaa verkkosivua.",
    findings: [
      {
        number: "01",
        title: "Hakutulosta ei hallita omalla sivulla",
        description:
          "Yrityksen nimellä hakeva asiakas kohtaa ensisijaisesti kolmansien osapuolten yritystietoja. Oma sivu antaisi MBR-Rakenteelle paikan kertoa itse palveluistaan ja yhteydenotosta.",
      },
      {
        number: "02",
        title: "Pitkä toimintahistoria jää piiloon",
        description:
          "MBR-Rakenne Oy on toiminut vuodesta 2001. Tämä on vahva ja helposti ymmärrettävä luottamustekijä, joka kannattaa tuoda näkyviin heti sivun ensimmäisessä näkymässä.",
      },
      {
        number: "03",
        title: "Palveluesittely puuttuu ennen yhteydenottoa",
        description:
          "Julkinen puhelinnumero löytyy verkosta, mutta potentiaalisella asiakkaalla ei ole yrityksen omaa sivua, jolla hän voisi tutustua toimintaan ennen soittoa.",
      },
    ],
  },
  services: [
    {
      number: "01",
      title: "Korjausrakentaminen",
      description:
        "Rakennusten, tilojen ja rakenteiden korjaamiseen liittyviä rakennustöitä projektin laajuuden mukaan.",
      cta: "Kysy kohteestasi",
    },
    {
      number: "02",
      title: "Uudisrakentaminen",
      description:
        "Rakennustöitä uudiskohteisiin sovitun kokonaisuuden mukaisesti.",
      cta: "Kysy toteutuksesta",
    },
    {
      number: "03",
      title: "Kiinteistöihin liittyvät rakennustyöt",
      description:
        "Rakennuksiin ja kiinteistöihin liittyviä töitä tarpeen ja kohteen mukaan.",
      cta: "Soita suoraan",
    },
  ] satisfies Service[],
  offer: {
    total: 690,
    deposit: 345,
    finalPayment: 345,
    vatLabel: "ALV 0 %.",
    hostingRenewal: 59,
    includes: [
      "Yhden sivun responsiivinen verkkosivusto",
      "Valmiiksi kirjoitetut ja viimeistellyt tekstit",
      "Yrityksen palvelu- ja luottamusosio",
      "Klikattava puhelinyhteys",
      "Hakukoneiden perusasetukset",
      "Yksi koottu korjauskierros",
      "Mobiili- ja desktop-testaus",
      "Sovitun sivun julkaisu",
      "Yksi .fi-verkkotunnus ja 12 kk hostingia",
    ],
    hostingTerms:
      "690 € sisältää yhden .fi-verkkotunnuksen, jos valittu nimi on saatavilla, sekä 12 kk hostingin. Ensimmäisen 12 kuukauden jälkeen domain + hosting maksavat 59 €/vuosi ja laskutetaan vuosittain etukäteen. Jatko ei ole määräaikainen. Domain rekisteröidään asiakkaan nimiin ja voidaan siirtää pois ilman erillistä siirtomaksua, kun avoimia laskuja ei ole.",
  },
} as const;
