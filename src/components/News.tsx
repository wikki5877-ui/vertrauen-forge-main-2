const news = [
  {
    cat: "PRIVATES BAURECHT",
    date: "08.04.2026",
    title: "Verbraucherbauvertrag — was private Bauherren vor der Unterschrift prüfen sollten",
    excerpt: "Juristisch entscheidend ist meist nicht der Grundriss, sondern der Vertrag selbst.",
  },
  {
    cat: "ERBRECHT",
    date: "21.03.2026",
    title: "Pflichtteil und Unternehmensnachfolge — drei Konstellationen aus der Praxis",
    excerpt: "Wann der Pflichtteilsanspruch zur existenziellen Frage für ein Familienunternehmen wird.",
  },
  {
    cat: "INSOLVENZRECHT",
    date: "12.02.2026",
    title: "Eigenverwaltung als strategisches Werkzeug — nicht als letzter Ausweg",
    excerpt: "Wer rechtzeitig handelt, bewahrt Steuerung. Wer wartet, übergibt sie.",
  },
];

export default function News() {
  return (
    <section id="journal" className="bg-void" aria-label="Aktuelles und Entscheidungen">
      <div className="max-w-[1400px] mx-auto px-8 py-32">
        <div className="reveal flex items-end justify-between mb-20 flex-wrap gap-6">
          <div>
            <div className="label-mono mb-6">05 — JOURNAL</div>
            <h2 className="font-display font-light text-ink" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.05 }}>
              News & <em className="text-gold-bright">Entscheidungen</em>
            </h2>
          </div>
          <a href="#" className="font-mono-ed text-gold uppercase border-b border-gold pb-1 hover:text-gold-bright transition-colors" style={{ fontSize: "0.62rem", letterSpacing: "0.3em" }}>
            Alle Beiträge →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule">
          {news.map((n, i) => (
            <article
              key={i}
              className="bg-deep p-10 reveal cursor-pointer transition-colors duration-500 hover:bg-surface group"
              data-stagger={i}
            >
              <div className="flex items-center justify-between font-mono-ed uppercase" style={{ fontSize: "0.55rem", letterSpacing: "0.3em" }}>
                <span className="text-gold">{n.cat}</span>
                <span className="text-ghost">{n.date}</span>
              </div>
              <h3
                className="font-display text-ink mt-10 group-hover:text-gold-bright transition-colors duration-500"
                style={{ fontSize: "1.6rem", fontWeight: 400, lineHeight: 1.25 }}
              >
                {n.title}
              </h3>
              <p className="mt-6 text-ghost" style={{ fontSize: "0.85rem", lineHeight: 1.8, fontWeight: 300 }}>
                {n.excerpt}
              </p>
              <div className="mt-12 flex items-center gap-4">
                <span className="block h-px w-10 bg-gold transition-all duration-500 group-hover:w-20" />
                <span className="font-mono-ed text-gold uppercase" style={{ fontSize: "0.58rem", letterSpacing: "0.3em" }}>
                  Lesen
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
