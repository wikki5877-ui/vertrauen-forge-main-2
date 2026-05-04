import { useEffect, useRef, useState } from "react";
import {
  ScrollText, Building2, Ruler, TrendingUp, Briefcase,
  Network, FileSignature, Users, Car, KeyRound, Gavel, Landmark,
  type LucideIcon,
} from "lucide-react";

type Area = { num: string; title: string; sub: string; desc: string; Icon: LucideIcon };

const areas: Area[] = [
  { num: "01", title: "Erbrecht",           sub: "Nachlass & Testament",         desc: "Testamentsgestaltung, Pflichtteil, Erbauseinandersetzung sowie strukturierte Unternehmensnachfolge.", Icon: ScrollText },
  { num: "02", title: "Immobilienrecht",    sub: "Eigentum & WEG",               desc: "WEG-Verwaltung, Kauf- und Verkaufsabwicklung, Grundstücksrecht und notarielle Begleitung.",            Icon: Building2 },
  { num: "03", title: "Privates Baurecht",  sub: "Verträge & Mängel",            desc: "Verbraucherbauverträge, Werkverträge, Mängelhaftung sowie Architekten- und Ingenieurrecht.",            Icon: Ruler },
  { num: "04", title: "Insolvenzrecht",     sub: "Sanierung & Restrukturierung", desc: "Eigenverwaltung, Insolvenzpläne, Gläubigervertretung und vorinsolvenzliche Restrukturierung.",         Icon: TrendingUp },
  { num: "05", title: "Arbeitsrecht",       sub: "Kündigung & Verträge",         desc: "Kündigungsschutz, Aufhebungsverträge, Zeugnisrecht sowie Tarif- und Betriebsverfassungsrecht.",         Icon: Briefcase },
  { num: "06", title: "Gesellschaftsrecht", sub: "Gründung & M&A",               desc: "GmbH-Gründung, Gesellschaftsverträge, Umwandlungen, Geschäftsführerhaftung und Transaktionen.",        Icon: Network },
  { num: "07", title: "Vertragsrecht",      sub: "Gestaltung & Prüfung",         desc: "Komplexe Verträge mit Bedacht aufgesetzt — von AGB bis zu hochvolumigen Rahmenverträgen.",              Icon: FileSignature },
  { num: "08", title: "Familienrecht",      sub: "Trennung & Unterhalt",         desc: "Scheidung, Sorge- und Umgangsrecht, Unterhalt sowie Vermögensauseinandersetzung mit Augenmaß.",        Icon: Users },
  { num: "09", title: "Verkehrsrecht",      sub: "Unfall & Bußgeld",             desc: "Schadensregulierung nach Verkehrsunfällen, Bußgeld- und Fahrerlaubnisverfahren.",                      Icon: Car },
  { num: "10", title: "Mietrecht",          sub: "Wohnen & Gewerbe",             desc: "Wohnraum- und Gewerbemietrecht — von Mieterhöhung bis zu komplexen Räumungsverfahren.",                Icon: KeyRound },
  { num: "11", title: "Strafrecht",         sub: "Verteidigung & Beratung",      desc: "Strafverteidigung in allen Verfahrensstadien — Wirtschaftsstrafrecht und allgemeine Strafsachen.",    Icon: Gavel },
  { num: "12", title: "Steuerrecht",        sub: "Beratung & Verfahren",         desc: "Steuergestaltung, Einspruchs- und Klageverfahren sowie Vertretung in steuerstrafrechtlichen Fragen.", Icon: Landmark },
];

// ─── Tile ─────────────────────────────────────────────────────────────────────
function AreaTile({ area, index }: { area: Area; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [inView, setInView] = useState(false);
  const { Icon } = area;

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect(); } },
      { threshold: 0.1 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <a
      href="#kontakt"
      ref={ref}
      className={`pa-tile ${inView ? "in" : ""}`}
      style={{ transitionDelay: `${(index % 4) * 70}ms` }}
      aria-label={`${area.title} — mehr erfahren`}
    >
      {/* Ordinal */}
      <div className="pa-head">
        <span className="pa-num font-mono-ed">{area.num}</span>
        <span className="pa-of font-mono-ed">/ 12</span>
      </div>

      {/* Icon */}
      <div className="pa-icon-wrap" aria-hidden>
        <Icon strokeWidth={1.25} className="pa-icon" />
      </div>

      {/* Text */}
      <div className="pa-title-wrap">
        <h3 className="pa-title font-display">{area.title}</h3>
        <p className="pa-sub font-display italic">{area.sub}</p>
      </div>

      <span className="pa-hairline" aria-hidden />

      <p className="pa-desc">{area.desc}</p>

      <div className="pa-foot">
        <span className="pa-cta font-mono-ed">
          <span>Mehr erfahren</span>
          <span className="pa-cta-line" aria-hidden />
          <span className="pa-cta-arrow" aria-hidden>→</span>
        </span>
      </div>
    </a>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function PracticeAreas() {
  return (
    <section id="rechtsgebiete-grid" className="pa-section" aria-label="Rechtsgebiete">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 py-24 md:py-40 relative">
        <header className="reveal pa-header">
          <div className="pa-header-left">
            <div className="label-mono mb-6" style={{ color: "hsl(35 8% 45%)" }}>03 — RECHTSGEBIETE</div>
            <h2
              className="font-display font-light"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.25rem)", lineHeight: 1.02, letterSpacing: "-0.015em", color: "hsl(var(--void))" }}
            >
              Zwölf <em style={{ color: "hsl(var(--gold))" }}>Felder</em>,<br />
              eine Handschrift.
            </h2>
          </div>
          <div className="pa-header-right">
            <div className="pa-header-line" />
            <p className="pa-header-text">
              Bundesweit beratend tätig. Persönlich erreichbar. Diskret in jeder Konstellation — von der ersten Einschätzung bis zur konsequenten Vertretung vor Gericht.
            </p>
            <div className="pa-header-meta font-mono-ed">
              <span>12 SCHWERPUNKTE</span>
              <span className="pa-dot" />
              <span>SEIT 1990</span>
              <span className="pa-dot" />
              <span>LEIPZIG · DEUTSCHLANDWEIT</span>
            </div>
          </div>
        </header>

        <div className="pa-grid">
          {areas.map((a, i) => <AreaTile key={a.num} area={a} index={i} />)}
        </div>

        <div className="pa-bottom">
          <a href="#kontakt" className="pa-bottom-cta font-mono-ed">
            <span>Unverbindliches Erstgespräch</span>
            <span aria-hidden>→</span>
          </a>
          <p className="pa-bottom-note font-mono-ed">
            Sie finden Ihr Thema nicht?{" "}
            <a href="#kontakt" className="underline-link">Sprechen Sie uns an.</a>
          </p>
        </div>
      </div>
    </section>
  );
}
