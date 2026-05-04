import handshake from "@/assets/process-handshake.jpg";

const steps = [
  { n: "I", t: "Erstgespräch", d: "Kostenfrei. Telefonisch. Vertraulich. Wir hören zu — bevor wir bewerten." },
  { n: "II", t: "Analyse", d: "Wir prüfen Akten, Verträge, Risiken. Klar, dokumentiert, ohne Schönfärberei." },
  { n: "III", t: "Strategie", d: "Ein konkreter Weg. Mit Eskalationsstufen, Fristen und Kostenrahmen." },
  { n: "IV", t: "Durchsetzung", d: "Verhandeln, wo es geht. Streiten, wo es muss. Immer auf Augenhöhe." },
];

export default function Process() {
  return (
    <section className="relative" aria-label="Arbeitsweise">
      <div className="absolute inset-0">
        <img
          src={handshake}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(0.2) contrast(1.05)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(7,7,7,0.95) 0%, rgba(7,7,7,0.85) 50%, rgba(7,7,7,0.95) 100%)" }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-8 py-32">
        <div className="reveal mb-20">
          <div className="label-mono mb-6">03 — ARBEITSWEISE</div>
          <h2 className="font-display font-light text-ink" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.05 }}>
            Vier Schritte.<br />
            <em className="text-gold-bright">Ein Versprechen.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-rule">
          {steps.map((s, i) => (
            <div key={s.n} className="bg-void/80 backdrop-blur-sm p-10 reveal" data-stagger={i}>
              <div className="font-display italic text-gold" style={{ fontSize: "3.5rem", lineHeight: 1 }}>
                {s.n}
              </div>
              <div className="h-px w-10 bg-gold/40 my-6" />
              <h3 className="font-display text-ink" style={{ fontSize: "1.5rem", fontWeight: 400 }}>
                {s.t}
              </h3>
              <p className="mt-4 text-ghost" style={{ fontSize: "0.85rem", lineHeight: 1.8, fontWeight: 300 }}>
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
