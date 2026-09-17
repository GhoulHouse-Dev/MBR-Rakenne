import Image from "next/image";
import { AcceptanceCard } from "@/components/AcceptanceCard";
import { prospect } from "@/data/prospect";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const { company, audit, services, offer } = prospect;

  return (
    <main>
      <div className="proposal-strip">
        <span>Virellan ehdotus</span>
        <span>Ei {company.name}:n julkaistu verkkosivu</span>
      </div>

      <section className="proposal-hero shell">
        <div className="proposal-copy">
          <div className="eyebrow">HENKILÖKOHTAINEN VERKKOSIVUEHDOTUS</div>
          <h1>Tein {company.name}:lle valmiin verkkosivuehdotuksen.</h1>
          <p className="lead">
            Tutkin yrityksen nykyistä verkkonäkyvyyttä ja rakensin julkisten
            yritystietojen perusteella valmiin yhden sivun ehdotuksen. Tekstejä
            tai erillistä aineistopakettia ei tarvitse tehdä.
          </p>
          <div className="action-row">
            <a className="button button-primary" href="#auditointi">
              Katso auditointi <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href="#demo">
              Siirry suoraan demoon <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="proposal-meta">
            <span>{company.name}</span>
            <span>Y-tunnus {company.businessId}</span>
            <span>Tarkistettu {audit.checkedAt}</span>
          </div>
        </div>

        <aside className="proposal-summary" aria-label="Ehdotuksen yhteenveto">
          <div className="summary-mark">MBR</div>
          <p>Valmis yhden sivun verkkosivusto</p>
          <strong>{offer.total} €</strong>
          <span>{offer.deposit} € aloituksessa</span>
          <span>{offer.finalPayment} € julkaisun jälkeen</span>
        </aside>
      </section>

      <section className="audit-section" id="auditointi">
        <div className="shell narrow-shell">
          <div className="section-heading">
            <div className="eyebrow">NÄKYVYYSAUDITOINTI · {audit.checkedAt}</div>
            <h2>Miltä MBR-Rakenne näyttää verkossa asiakkaalle?</h2>
            <p>{audit.summary}</p>
          </div>

          <div className="audit-grid">
            {audit.findings.map((finding) => (
              <article className="audit-card" key={finding.number}>
                <span className="card-number">{finding.number}</span>
                <h3>{finding.title}</h3>
                <p>{finding.description}</p>
              </article>
            ))}
          </div>

          <div className="solution-band">
            <div>
              <div className="eyebrow eyebrow-light">EHDOTETTU RATKAISU</div>
              <h3>Yritys → palvelut → luottamus → suora yhteydenotto.</h3>
            </div>
            <a className="button button-light" href="#demo">
              Katso valmis sivu <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      <section className="demo-section" id="demo">
        <div className="shell">
          <div className="section-heading demo-heading">
            <div className="eyebrow">LIVE-DEMO</div>
            <h2>Tältä MBR-Rakenteen sivu voisi näyttää.</h2>
            <p>
              Alla oleva näkymä on varsinainen verkkosivuluonnos. Se on erotettu
              Virellan tarjoussivusta omaksi selainkehyksekseen.
            </p>
          </div>

          <div className="browser-frame">
            <div className="browser-toolbar">
              <div className="browser-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="browser-address">mbr-rakenne.fi / demo</div>
              <div className="browser-status">ESIKATSELU</div>
            </div>

            <div className="site-preview">
              <header className="site-header">
                <a className="site-brand" href="#site-top" aria-label="MBR-Rakenne Oy">
                  <strong>MBR-RAKENNE OY</strong>
                  <span>Rakennuspalvelut Espoossa</span>
                </a>
                <nav aria-label="Demon navigaatio">
                  <a href="#palvelut">Palvelut</a>
                  <a href="#yritys">Yritys</a>
                  <a href="#yhteystiedot">Yhteystiedot</a>
                </nav>
                <a className="button button-primary site-call" href={company.phoneHref}>
                  Soita {company.phone}
                </a>
              </header>

              <section className="site-hero" id="site-top">
                <div className="site-hero-copy">
                  <div className="eyebrow">RAKENNUSPALVELUT · ESPOO</div>
                  <h2>Rakennuspalvelut Espoossa</h2>
                  <p className="site-lead">
                    MBR-Rakenne Oy on vuodesta {company.founded} toiminut
                    rakennusalan yritys Espoossa.
                  </p>
                  <p>
                    Rakennus- ja korjaustöitä projektin tarpeen mukaan. Kun
                    tarvitset tekijää rakennusprojektiin, ota yhteyttä ja kerro
                    kohteestasi.
                  </p>
                  <div className="action-row">
                    <a className="button button-primary" href={company.phoneHref}>
                      Soita {company.phone}
                    </a>
                    <a className="text-link" href="#palvelut">
                      Katso palvelut <span aria-hidden="true">↓</span>
                    </a>
                  </div>
                  <div className="trust-line">
                    <span>Toiminnassa vuodesta {company.founded}</span>
                    <span>{company.city}</span>
                    <span>Y-tunnus {company.businessId}</span>
                  </div>
                </div>

                <div className="site-hero-media">
                  <Image
                    src="/hero-placeholder.svg"
                    alt="Geneerinen rakennusalan demokuva, joka korvataan hyväksytyllä kuvalla ennen julkaisua"
                    fill
                    priority
                    sizes="(max-width: 900px) 100vw, 45vw"
                  />
                  <span className="media-label">DEMON KUVAPAIKKA</span>
                </div>
              </section>

              <section className="services-section" id="palvelut">
                <div className="site-section-heading">
                  <div className="eyebrow">PALVELUT</div>
                  <h2>Rakennustöitä projektin tarpeen mukaan</h2>
                  <p>
                    MBR-Rakenne Oy:n julkisessa toimialakuvauksessa esiintyy
                    rakennusalan töitä uudis- ja korjauskohteissa sekä
                    kiinteistöihin liittyviä töitä. Lopulliset palvelunostot
                    vahvistetaan ennen julkaisua.
                  </p>
                </div>

                <div className="services-grid">
                  {services.map((service) => (
                    <article className="service-card" key={service.number}>
                      <span className="card-number">{service.number}</span>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <a href={company.phoneHref}>
                        {service.cta} <Arrow />
                      </a>
                    </article>
                  ))}
                </div>
              </section>

              <section className="trust-section" id="yritys">
                <div className="trust-copy">
                  <div className="eyebrow">VUODESTA {company.founded}</div>
                  <h2>Pitkä toimintahistoria. Suora yhteys yritykseen.</h2>
                  <p>
                    {company.name} on Espoossa toimiva suomalainen rakennusalan
                    osakeyhtiö. Sivulla käytetään vain varmennettuja perustietoja;
                    referenssejä tai sertifikaatteja ei lisätä ilman yrityksen
                    hyväksyntää.
                  </p>
                </div>
                <div className="stat-grid">
                  <div>
                    <strong>{company.founded}</strong>
                    <span>Toiminta alkanut</span>
                  </div>
                  <div>
                    <strong>{company.city}</strong>
                    <span>Kotipaikka</span>
                  </div>
                  <div>
                    <strong>{company.businessId}</strong>
                    <span>Y-tunnus</span>
                  </div>
                </div>
              </section>

              <section className="project-section">
                <div>
                  <div className="eyebrow">OTA YHTEYTTÄ</div>
                  <h2>Onko rakennusprojekti tulossa?</h2>
                  <p>
                    Kerro missä kohde sijaitsee, millaisesta työstä on kyse ja
                    milloin työn olisi tarkoitus alkaa.
                  </p>
                </div>
                <div className="call-card">
                  <span>Kysy projektistasi</span>
                  <strong>{company.phone}</strong>
                  <a className="button button-primary button-wide" href={company.phoneHref}>
                    Soita nyt
                  </a>
                </div>
              </section>

              <footer className="site-footer" id="yhteystiedot">
                <div>
                  <strong>{company.name}</strong>
                  <p>Rakennuspalvelut Espoossa vuodesta {company.founded}.</p>
                </div>
                <div>
                  <span>Puhelin</span>
                  <a href={company.phoneHref}>{company.phone}</a>
                </div>
                <div>
                  <span>Osoite</span>
                  <p>{company.address}</p>
                </div>
                <div>
                  <span>Y-tunnus</span>
                  <p>{company.businessId}</p>
                </div>
              </footer>

              <a className="mobile-call-bar" href={company.phoneHref}>
                <span>Rakennusprojekti mielessä?</span>
                <strong>Soita</strong>
              </a>
            </div>
          </div>

          <p className="demo-disclaimer">
            Virellan ehdotus — ei {company.name}:n julkaistu verkkosivu. Demon
            kuvapaikka käyttää Virellan omaa placeholder-grafiikkaa eikä sitä
            esitetä yrityksen omana työnä.
          </p>
        </div>
      </section>

      <section className="offer-section" id="tarjous">
        <div className="shell">
          <div className="offer-layout">
            <div>
              <div className="eyebrow">VALMIS TOTEUTUS</div>
              <h2>Tämä ei ole pelkkä luonnos.</h2>
              <p className="lead compact-lead">
                Hyväksynnän jälkeen Virella viimeistelee nykyisen demon
                julkaisuvalmiiksi yhden sivun verkkosivuksi.
              </p>

              <div className="includes-grid">
                {offer.includes.map((item) => (
                  <div className="include-item" key={item}>
                    <span aria-hidden="true">✓</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="price-card">
              <div className="eyebrow eyebrow-light">KIINTEÄ HINTA</div>
              <strong className="price">{offer.total} €</strong>
              <p>Ei tuntihinnoittelua tai avointa toteutuskustannusta.</p>

              <div className="price-split">
                <div>
                  <span>Aloitusmaksu</span>
                  <strong>{offer.deposit} €</strong>
                  <small>Tilauksen yhteydessä</small>
                </div>
                <div>
                  <span>Loppumaksu</span>
                  <strong>{offer.finalPayment} €</strong>
                  <small>Julkaisun ja testauksen jälkeen</small>
                </div>
              </div>
              <p className="vat-note">{offer.vatLabel}</p>
              <p className="cost-warning">
                Domainin, hostingin ja mahdollisen vuosikulun tarkka euromäärä
                lukitaan ennen tämän ehdotuksen lähettämistä asiakkaalle.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="approval-section">
        <div className="shell approval-layout">
          <div className="company-review">
            <div className="eyebrow">TARKISTA TIEDOT</div>
            <h2>MBR-Rakenne Oy</h2>
            <dl>
              <div>
                <dt>Y-tunnus</dt>
                <dd>{company.businessId}</dd>
              </div>
              <div>
                <dt>Osoite</dt>
                <dd>{company.address}</dd>
              </div>
              <div>
                <dt>Puhelin</dt>
                <dd>{company.phone}</dd>
              </div>
            </dl>
            <p className="muted">
              Lopulliseen versioon lisätään kevyt “korjaa tietoja” -toiminto,
              mutta asiakkaalta ei pyydetä uutta briefiä tai aineistopakettia.
            </p>
          </div>

          <AcceptanceCard
            companyName={company.name}
            total={offer.total}
            deposit={offer.deposit}
            finalPayment={offer.finalPayment}
          />
        </div>
      </section>

      <footer className="proposal-footer">
        <div className="shell proposal-footer-inner">
          <div>
            <strong>Virella Helsinki</strong>
            <span>Yrityskohtainen verkkosivuehdotus</span>
          </div>
          <div>
            <span>{company.name}</span>
            <span>{company.businessId}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
