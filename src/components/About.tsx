import { useEffect, useRef, useState } from "react";

const intro = {
  kicker: "WILLKOMMEN",
  title: "Hellmuth & Rühling",
  italic: "Rechtsanwälte · Leipzig",
  body: "Bereits seit 1990 berät und vertritt unsere Kanzlei in Leipzig-Gohlis Mandantinnen und Mandanten aus dem gesamten Bundesgebiet. Rechtsanwalt Rainer Hellmuth und seine Kollegen legen größten Wert auf eine zufriedene Mandantschaft — eine offene und ehrliche Beratung im Vorfeld ist dazu unerlässlich.",
};

const reasons = [
  {
    n: "I",
    title: "Über 40 Jahre Erfahrung",
    text: "Mit mehr als vier Jahrzehnten juristischer Praxis stehen wir Ihnen als verlässlicher Partner zur Seite — selbst die komplexesten Fälle bearbeiten wir mit der Sicherheit langjähriger Routine.",
  },
  {
    n: "II",
    title: "Ehrliche Rechtsberatung",
    text: "Transparenz ohne Umwege. Wir geben Ihnen eine realistische Einschätzung Ihrer Lage und beraten offen über Chancen und Risiken — als Grundlage für Ihre fundierte Entscheidung.",
  },
  {
    n: "III",
    title: "Beratung auf Augenhöhe",
    text: "Ihre Anliegen stehen im Mittelpunkt. Wir nehmen uns die Zeit, Ihre Situation genau zu verstehen, und entwickeln mit Ihnen gemeinsam maßgeschneiderte Lösungen.",
  },
  {
    n: "IV",
    title: "Komplexes verständlich gemacht",
    text: "Recht ist oft kompliziert. Wir erklären Sachverhalte klar und nachvollziehbar — damit Sie jederzeit informiert sind und souverän entscheiden können.",
  },
  {
    n: "V",
    title: "Hohe Mandantenzufriedenheit",
    text: "Zahlreiche positive Rückmeldungen und langjährige Mandantenbeziehungen sprechen für unsere Arbeit. Wir setzen alles daran, Ihre Erwartungen nicht nur zu erfüllen, sondern zu übertreffen.",
  },
  {
    n: "VI",
    title: "Individuelle Strategien",
    text: "Jeder Fall ist einzigartig. Wir erfassen Ihre Ziele präzise und entwickeln darauf basierend eine Strategie, die zu Ihnen passt — nicht zu einem Standardmuster.",
  },
  {
    n: "VII",
    title: "Engagiertes Team",
    text: "Hochqualifizierte Anwältinnen und Anwälte, die mit voller Hingabe für Ihre Rechte eintreten. Hand in Hand für den bestmöglichen Service.",
  },
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

export default function About() {
  const [active, setActive] = useState(0);
  const intro1 = useReveal<HTMLDivElement>();
  const intro2 = useReveal<HTMLDivElement>();
  const reasonsRef = useReveal<HTMLDivElement>();

  return (
    <section id="kanzlei" className="about-section bg-void" aria-label="Über die Kanzlei">
      {/* ============== INTRO ============== */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 py-24 md:py-40">
        <div ref={intro1.ref} className={`about-intro ${intro1.inView ? "in" : ""}`}>
          <div className="about-intro-side">
            <div className="label-mono">— {intro.kicker}</div>
            <div className="about-vline" aria-hidden />
            <div className="font-mono-ed text-ghost about-since">
              <span>SEIT</span>
              <span className="font-display italic text-gold-bright about-since-num">1990</span>
              <span>LEIPZIG · GOHLIS</span>
            </div>
          </div>

          <div className="about-intro-main">
            <h2 className="about-headline font-display font-light text-ink">
              Herzlich <em className="text-gold-bright">willkommen</em><br />
              bei <span className="about-name">Hellmuth &amp; Rühling</span>.
            </h2>
            <p className="about-italic font-display italic text-ghost">{intro.italic}</p>
            <p className="about-body text-ghost">{intro.body}</p>
          </div>
        </div>
      </div>

      {/* ============== REASONS ============== */}
      <div className="bg-deep relative overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 py-24 md:py-40">
          <div ref={intro2.ref} className={`reveal ${intro2.inView ? "in" : ""} mb-16 md:mb-24`}>
            <div className="label-mono mb-6">— SIEBEN GRÜNDE</div>
            <h3
              className="font-display font-light text-ink"
              style={{ fontSize: "clamp(2rem, 5vw, 4.25rem)", lineHeight: 1.05 }}
            >
              Warum <em className="text-gold-bright">Sie</em> sich für uns<br />
              entscheiden sollten.
            </h3>
          </div>

          <div ref={reasonsRef.ref} className={`reasons-stage ${reasonsRef.inView ? "in" : ""}`}>
            {/* LEFT — index */}
            <ol className="reasons-index">
              {reasons.map((r, i) => (
                <li key={r.n}>
                  <button
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className={`reasons-index-btn ${active === i ? "active" : ""}`}
                    aria-current={active === i}
                  >
                    <span className="reasons-rom font-display italic">{r.n}</span>
                    <span className="reasons-label font-mono-ed">{r.title}</span>
                    <span className="reasons-bar" aria-hidden />
                  </button>
                </li>
              ))}
            </ol>

            {/* RIGHT — content stage */}
            <div className="reasons-stage-right">
              <div className="reasons-watermark font-display italic" aria-hidden>
                {reasons[active].n}
              </div>

              {reasons.map((r, i) => (
                <article
                  key={r.n}
                  className={`reasons-panel ${active === i ? "active" : ""}`}
                  aria-hidden={active !== i}
                >
                  <div className="font-mono-ed text-gold reasons-panel-num">
                    {String(i + 1).padStart(2, "0")} / {String(reasons.length).padStart(2, "0")}
                  </div>
                  <h4 className="reasons-panel-title font-display text-ink">
                    {r.title}
                  </h4>
                  <div className="reasons-panel-line" aria-hidden />
                  <p className="reasons-panel-text text-ghost">{r.text}</p>
                </article>
              ))}
            </div>
          </div>

          {/* CTA — kostenfreie Ersteinschätzung */}
          <div className="about-cta-card">
            <div className="about-cta-content">
              <div className="label-mono mb-4">KOSTENFREIE ERSTEINSCHÄTZUNG</div>
              <h4 className="font-display text-ink about-cta-title">
                Ein <em className="text-gold-bright">Anruf</em> genügt.
              </h4>
              <p className="text-ghost about-cta-text">
                Erhalten Sie eine erste rechtliche Einschätzung Ihres Anliegens — unverbindlich und ohne Kosten. Nutzen Sie unser Kontaktformular oder rufen Sie uns direkt an.
              </p>
            </div>
            <div className="about-cta-actions">
              <a href="tel:034159339330" className="about-cta-phone font-display">
                0341 — 59 33 930
              </a>
              <a href="#kontakt" className="about-cta-link font-mono-ed">
                <span>Anfrage senden</span>
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
