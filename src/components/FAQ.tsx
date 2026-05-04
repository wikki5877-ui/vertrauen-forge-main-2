import { useState } from "react";

const items = [
  {
    q: "Wie läuft eine Erstberatung ab?",
    a: "Telefonisch, kostenfrei, unverbindlich. Wir klären den Sachverhalt, schätzen Erfolgsaussichten und Kosten — und sagen ehrlich, wenn ein Mandat nicht zu uns passt.",
  },
  {
    q: "Was kostet eine Vertretung?",
    a: "Wir arbeiten transparent: gesetzliche Vergütung nach RVG, Stundenhonorar oder Pauschale. Vor jeder Beauftragung steht ein klarer Kostenrahmen.",
  },
  {
    q: "Vertreten Sie auch bundesweit?",
    a: "Ja. Sitz in Leipzig-Gohlis, Mandate aus dem gesamten Bundesgebiet — vor allen ordentlichen Gerichten und Insolvenzgerichten.",
  },
  {
    q: "Wie schnell erhalte ich einen Termin?",
    a: "In dringenden Fällen am selben Werktag. Reguläre Termine in der Regel innerhalb von 48 Stunden.",
  },
  {
    q: "Wie wird Vertraulichkeit gewährleistet?",
    a: "Anwaltsgeheimnis nach § 43a BRAO, verschlüsselte Kommunikation, separate Akten — Diskretion ist nicht Zusatz, sondern Grundlage.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-deep" aria-label="Häufige Fragen">
      <div className="max-w-[1100px] mx-auto px-8 py-32">
        <div className="reveal grid md:grid-cols-[1fr_2fr] gap-16 items-start">
          <div>
            <div className="label-mono mb-6">07 — FRAGEN</div>
            <h2 className="font-display font-light text-ink" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.05 }}>
              Was Mandanten<br /><em className="text-gold-bright">oft fragen</em>
            </h2>
          </div>

          <div className="border-t border-rule">
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="border-b border-rule">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-7 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span
                      className="font-display text-ink group-hover:text-gold-bright transition-colors duration-300"
                      style={{ fontSize: "1.35rem", fontWeight: 400 }}
                    >
                      {it.q}
                    </span>
                    <span
                      className="font-mono-ed text-gold flex-shrink-0 transition-transform duration-500"
                      style={{ fontSize: "0.7rem", transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-500 ease-out"
                    style={{
                      maxHeight: isOpen ? 200 : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <p className="text-ghost pb-7 pr-12" style={{ fontSize: "0.95rem", lineHeight: 1.9, fontWeight: 300 }}>
                      {it.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
