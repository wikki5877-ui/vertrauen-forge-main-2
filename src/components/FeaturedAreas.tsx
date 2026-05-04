import { useEffect, useRef, useState } from "react";
import areaErbrecht from "@/assets/area-erbrecht.jpg";
import areaImmobilien from "@/assets/area-immobilien.jpg";
import areaInsolvenz from "@/assets/area-insolvenz.jpg";

const featured = [
  {
    num: "01",
    img: areaErbrecht,
    title: "Erbrecht",
    italic: "Nachlass mit Bedacht.",
    desc: "Testamente, Pflichtteil, Unternehmensnachfolge. Wir gestalten Vermögensübergänge, die Bestand haben — und Konflikte, bevor sie entstehen, vermeiden.",
    points: ["Testamentsgestaltung", "Erbauseinandersetzung", "Pflichtteilsrecht", "Unternehmensnachfolge"],
  },
  {
    num: "02",
    img: areaInsolvenz,
    title: "Insolvenz & Sanierung",
    italic: "Strategie statt Stillstand.",
    desc: "Sanierungskonzepte, Insolvenzpläne, Gläubigerberatung. Wir denken den nächsten Schritt mit — und den übernächsten.",
    points: ["Eigenverwaltung", "Insolvenzplan", "Gläubigervertretung", "Restrukturierung"],
  },
  {
    num: "03",
    img: areaImmobilien,
    title: "Immobilien & Bau",
    italic: "Substanz schützen.",
    desc: "WEG-Recht, gewerbliches Mietrecht, Verbraucherbauverträge. Klare Verträge. Klare Verhältnisse.",
    points: ["WEG-Verwaltung", "Gewerbliches Mietrecht", "Privates Baurecht", "Grundstücksrecht"],
  },
];

function DisciplineRow({ data, index }: { data: (typeof featured)[number]; index: number }) {
  const rowRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [inView, setInView] = useState(false);
  const reverse = index % 2 === 1;

  useEffect(() => {
    if (!rowRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.18 }
    );
    io.observe(rowRef.current);
    return () => io.disconnect();
  }, []);

  // Parallax on image
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (!rowRef.current || !imgRef.current) return;
      const rect = rowRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = (vh - rect.top) / (vh + rect.height); // 0..1
      const clamped = Math.max(0, Math.min(1, progress));
      const offset = (clamped - 0.5) * 60; // -30..30 px
      imgRef.current.style.transform = `scale(1.12) translate3d(0, ${offset.toFixed(1)}px, 0)`;
    };
    const handler = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(onScroll);
    };
    window.addEventListener("scroll", handler, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", handler);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <article
      ref={rowRef}
      className={`discipline-row ${inView ? "in" : ""} ${reverse ? "reverse" : ""}`}
      aria-label={data.title}
    >
      {/* Ghost numeral */}
      <div className="ghost-numeral" aria-hidden="true">{data.num}</div>

      <div className="discipline-grid">
        {/* Media */}
        <div className="discipline-media">
          <div className="discipline-media-frame">
            <img
              ref={imgRef}
              src={data.img}
              alt={data.title}
              loading="lazy"
              className="discipline-img"
            />
            <div className="discipline-img-overlay" />
            {/* Animated gold corners */}
            <span className="corner corner-tl" />
            <span className="corner corner-tr" />
            <span className="corner corner-bl" />
            <span className="corner corner-br" />
          </div>
          <div className="discipline-num-tag">
            <span className="font-mono-ed">SCHWERPUNKT</span>
            <span className="font-display italic text-gold-bright discipline-num">{data.num}</span>
          </div>
        </div>

        {/* Content */}
        <div className="discipline-content">
          <div className="label-mono mb-5 discipline-label">
            {data.italic}
          </div>
          <h3 className="discipline-title font-display font-light text-ink">
            {data.title.split(" & ").map((part, i, arr) => (
              <span key={i}>
                {i === arr.length - 1 ? <em className="text-gold-bright">{part}</em> : <>{part} &amp; </>}
              </span>
            ))}
          </h3>

          {/* Animated gold line */}
          <svg className="gold-line" viewBox="0 0 200 2" preserveAspectRatio="none" aria-hidden="true">
            <line x1="0" y1="1" x2="200" y2="1" stroke="hsl(var(--gold))" strokeWidth="1" />
          </svg>

          <p className="discipline-desc text-ghost">{data.desc}</p>

          <ul className="discipline-points">
            {data.points.map((p, pi) => (
              <li
                key={p}
                className="discipline-point font-mono-ed"
                style={{ transitionDelay: `${300 + pi * 100}ms` }}
              >
                <span className="point-bar" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <a href="#kontakt" className="discipline-cta font-mono-ed">
            <span>Beratung anfragen</span>
            <span className="cta-arrow" aria-hidden>→</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function FeaturedAreas() {
  return (
    <section className="bg-deep relative overflow-hidden" aria-label="Schwerpunkte">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 py-24 md:py-40 relative">
        <header className="reveal mb-20 md:mb-32">
          <div className="label-mono mb-6">02 — SCHWERPUNKTE</div>
          <h2
            className="font-display font-light text-ink"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", lineHeight: 1.02 }}
          >
            Drei <em className="text-gold-bright">Disziplinen</em>,<br />
            ein Anspruch.
          </h2>
        </header>

        <div className="space-y-32 md:space-y-56">
          {featured.map((f, i) => (
            <DisciplineRow key={f.num} data={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
