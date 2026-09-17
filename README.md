# MBR-Rakenne — Virella prospect demo

Yrityskohtainen verkkosivuehdotus MBR-Rakenne Oy:lle. Projekti toimii samalla ensimmäisenä uudelleenkäytettävänä Virella-prospektipohjana.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Plain CSS design system
- Vercel-ready

## Local development

```bash
npm install
npm run dev
```

Production check:

```bash
npm run lint
npm run build
```

## Structure

- `src/data/prospect.ts` — yrityskohtaiset faktat, auditointi, palvelut ja tarjousdata
- `src/app/page.tsx` — auditointi + live-demo + tarjousnäkymä
- `src/components/AcceptanceCard.tsx` — asiakkaan hyväksynnät ja maksun UI-gate
- `src/app/globals.css` — desktop/mobile design system
- `public/hero-placeholder.svg` — lisenssiturvallinen demon kuvapaikka

## Important delivery gates

Tätä demoa ei pidä lähettää prospektille ennen kuin seuraavat asiat on lukittu:

1. Yritysfaktat on tarkistettu uudelleen lähetyspäivänä.
2. Lopulliset palvelunostot on vahvistettu tai pidetty rekisteritiedon sallimalla tasolla.
3. Domain-, hosting- ja mahdolliset jatkokulut on ilmoitettu tarkkoina euroina.
4. Stripe/checkout-polku on kytketty oikeaan 345 € aloitusmaksuun.
5. Maksun onnistuminen varmennetaan palvelinpuolella ennen tilan `PAID_DEPOSIT` käyttöä.
6. Prospektisivu suojataan yrityskohtaisella palvelinpuolella validoitavalla tokenilla. `noindex` ei yksin ole pääsynsuojaus.
7. Geneerinen kuvapaikka korvataan hyväksytyllä tai asianmukaisesti lisensoidulla kuvalla.
8. Mobile 390 px ja desktop 1440 px smoke test on läpäisty.

## Current payment state

Hyväksyntä-UI on toteutettu, mutta maksupainike ei vielä käynnistä maksua. Tämä on tarkoituksellinen turvaraja. Stripe/checkout lisätään vasta, kun tarjouskulut ja maksuehdot on lopullisesti lukittu.

## Prospect reuse

Seuraavat prospektit voidaan toteuttaa kopioimalla tämä pohja ja vaihtamalla ensisijaisesti `src/data/prospect.ts` sekä visuaaliset assetit. Komponenttirakenne on tarkoituksella yritysdatasta erotettu.
