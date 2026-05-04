const items = [
  "Mitglied im Deutschen Anwaltverein",
  "Empfohlen von anwalt.org",
  "35 Jahre Praxis in Leipzig",
  "Tätigkeit als Insolvenzverwalter",
  "5,0 ★ Bewertungen bei Google",
  "Fachanwalt für Insolvenz- & Sanierungsrecht",
];

export default function Awards() {
  const loop = [...items, ...items];
  return (
    <section className="bg-void border-y border-rule overflow-hidden" aria-label="Auszeichnungen">
      <div className="marquee py-8">
        <div className="marquee-track">
          {loop.map((t, i) => (
            <span key={i} className="marquee-item font-display text-ink">
              {t}
              <span className="marquee-sep" aria-hidden="true">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
