"use client";

import { useMemo, useState } from "react";

type AcceptanceCardProps = {
  companyName: string;
  total: number;
  deposit: number;
  finalPayment: number;
};

export function AcceptanceCard({ companyName, total, deposit, finalPayment }: AcceptanceCardProps) {
  const [companyChecked, setCompanyChecked] = useState(false);
  const [deliveryChecked, setDeliveryChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const ready = useMemo(
    () => companyChecked && deliveryChecked && termsChecked,
    [companyChecked, deliveryChecked, termsChecked],
  );

  const acceptHref = `mailto:hello@virellahelsinki.com?subject=${encodeURIComponent(
    `${companyName} – hyväksyn verkkosivutarjouksen`,
  )}&body=${encodeURIComponent(
    `Hei,\n\nHyväksyn ${companyName}:lle tehdyn 690 € verkkosivutarjouksen. Aloitusmaksu on 345 € ja loppumaksu 345 € julkaistun ja testatun toimituksen jälkeen.\n\nYstävällisin terveisin,`,
  )}`;

  return (
    <div className="acceptance-card" id="hyvaksy-tarjous">
      <div className="eyebrow">HYVÄKSY TOTEUTUS</div>
      <h2>Valmis viemään sivu julkaisuun?</h2>
      <p className="muted">
        Tarkista kolme kohtaa. Hyväksyntä avaa valmiin sähköpostiviestin Virellalle — verkkopalvelu ei veloita maksua.
      </p>

      <div className="check-list">
        <label className="check-row">
          <input type="checkbox" checked={companyChecked} onChange={(event) => setCompanyChecked(event.target.checked)} />
          <span>Olen tarkistanut {companyName}:n yritystiedot.</span>
        </label>
        <label className="check-row">
          <input type="checkbox" checked={deliveryChecked} onChange={(event) => setDeliveryChecked(event.target.checked)} />
          <span>Hyväksyn Virellan viimeistelemään sivuehdotuksen sovitun toimitussisällön mukaisesti.</span>
        </label>
        <label className="check-row">
          <input type="checkbox" checked={termsChecked} onChange={(event) => setTermsChecked(event.target.checked)} />
          <span>Olen tutustunut tarjouksen ehtoihin ja tietosuojaan.</span>
        </label>
      </div>

      <div className="payment-summary">
        <div><span>Kokonaishinta</span><strong>{total} €</strong></div>
        <div><span>Aloitusmaksu</span><strong>{deposit} €</strong></div>
        <div><span>Loppumaksu</span><strong>{finalPayment} €</strong></div>
      </div>

      {ready ? (
        <a className="button button-primary button-wide" href={acceptHref}>Hyväksy tarjous sähköpostilla</a>
      ) : (
        <button className="button button-primary button-wide" type="button" disabled>
          Hyväksy tarjous sähköpostilla
        </button>
      )}

      <p className="microcopy">
        Tilaus vahvistetaan kirjallisesti. Ehdot: virellahelsinki.com/terms · Tietosuoja: virellahelsinki.com/privacy
      </p>
    </div>
  );
}
