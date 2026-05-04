import { useEffect, useState } from "react";
import heroVideo from "@/assets/ты_ублюдок_или_что_за_что_я_по.mp4";
import portraitHellmuth from "@/assets/portrait-hellmuth.jpg";
import PracticeAreas from "@/components/PracticeAreas";
import Process from "@/components/Process";
import News from "@/components/News";
import FAQ from "@/components/FAQ";
import Awards from "@/components/Awards";
import About from "@/components/About";


const testimonials = [
  { quote: "Erbrechtliche Beratung von höchster Klarheit. Jeder Satz saß. Jede Empfehlung trug.", name: "Fynn Osterkamp", stars: "★★★★★" },
  { quote: "Souverän, strategisch, ruhig. Eine Verhandlungsführung, die Vertrauen schafft.", name: "Finja Sauer", stars: "★★★★★" },
  { quote: "Die seltene Kombination aus Immobilien- und Insolvenzkompetenz — Sicherheit pur.", name: "Elina Voigt", stars: "★★★★★" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number(e.target.getAttribute("data-stagger") ?? 0);
            (e.target as HTMLElement).style.transitionDelay = `${idx * 0.12}s`;
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}


const NAV_LINKS = [
  { href: "#top",                label: "Startseite" },
  { href: "#kanzlei",            label: "Kanzlei" },
  { href: "#rechtsgebiete-grid", label: "Rechtsgebiete" },
  { href: "#anwaelte",           label: "Anwälte" },
  { href: "#journal",            label: "Journal" },
  { href: "#kontakt",            label: "Kontakt" },
];

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <div className="bg-void text-ink min-h-screen overflow-x-hidden">

      {/* Mobile nav overlay */}
      <nav className={`mob-nav${mobileOpen ? " open" : ""}`} aria-hidden={!mobileOpen}>
        {NAV_LINKS.map(({ href, label }) => (
          <a key={href} href={href} className="mob-nav-link" onClick={() => setMobileOpen(false)}>
            {label}
          </a>
        ))}
        <p className="mob-nav-tagline font-mono-ed">RECHTSANWÄLTE · LEIPZIG</p>
      </nav>

      {/* NAV */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "nav-blur py-4" : "py-6"
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-6 md:px-8 flex items-center justify-between" aria-label="Hauptnavigation">
          <a href="#top" className="font-display italic text-gold text-[1.4rem] leading-none">H&amp;R</a>
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} className="nav-link">{label}</a>
            ))}
          </div>
          <span className="hidden md:block font-mono-ed text-ghost" style={{ fontSize: "0.55rem", letterSpacing: "0.3em" }}>
            RECHTSANWÄLTE · LEIPZIG
          </span>
          {/* Hamburger — mobile only */}
          <button
            className="mob-ham md:hidden"
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileOpen}
          >
            <span style={{ transform: mobileOpen ? "translateY(6px) rotate(45deg)" : "none" }} />
            <span style={{ opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ transform: mobileOpen ? "translateY(-6px) rotate(-45deg)" : "none" }} />
          </button>
        </nav>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative h-screen w-full overflow-hidden" aria-label="Einleitung">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(160deg, rgba(7,7,7,0.88) 0%, rgba(7,7,7,0.45) 50%, rgba(7,7,7,0.75) 100%)" }}
          />

          <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
            <div className="hero-line" style={{ animationDelay: "0.1s" }}>
              <span className="label-mono opacity-70">LEIPZIG · SEIT 1990</span>
            </div>

            <h1 className="mt-10 leading-[0.9]">
              <div className="hero-line font-display text-ink font-light" style={{ fontSize: "11vw", animationDelay: "0.4s" }}>
                HELLMUTH
              </div>
              <div className="hero-line font-display italic text-gold my-2" style={{ fontSize: "6vw", animationDelay: "0.7s" }}>
                &amp;
              </div>
              <div className="hero-line font-display text-ink font-light" style={{ fontSize: "11vw", animationDelay: "1.0s" }}>
                RÜHLING
              </div>
            </h1>

            <p className="hero-line mt-8 font-display italic text-ghost" style={{ fontSize: "1.1rem", animationDelay: "1.3s" }}>
              Rechtsanwälte · Leipzig
            </p>

            <a href="#kontakt" className="hero-line cta-line mt-14" style={{ animationDelay: "1.6s" }}>
              <span>Erstberatung anfordern →</span>
            </a>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
            <div className="w-px h-16 bg-gold scroll-line" />
          </div>
        </section>

        <About />


        <Awards />

        <PracticeAreas />

        <Process />

        {/* TEAM */}
        <section id="anwaelte" className="py-32 px-8" aria-label="Anwälte">
          <div className="max-w-[1400px] mx-auto">
            <div className="reveal mb-20">
              <div className="label-mono mb-6">04 — DAS TEAM</div>
              <h2 className="font-display font-light text-ink" style={{ fontSize: "4rem", lineHeight: 1.05 }}>
                Rainer <em className="text-gold-bright">Hellmuth</em>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="reveal">
                <div className="aspect-[3/4] overflow-hidden border" style={{ borderColor: "rgba(184,150,90,0.18)" }}>
                  <img
                    src={portraitHellmuth}
                    alt="Rainer Hellmuth — Rechtsanwalt, Gründungspartner"
                    loading="lazy"
                    width={1024}
                    height={1408}
                    className="w-full h-full object-cover"
                    style={{ filter: "contrast(1.05) saturate(0.85)" }}
                  />
                </div>
              </div>
              <div className="reveal" data-stagger={1}>
                <div className="font-mono-ed text-gold uppercase" style={{ fontSize: "0.6rem", letterSpacing: "0.3em" }}>
                  Gründungspartner
                </div>
                <h3 className="font-display text-ink mt-4" style={{ fontSize: "3rem", fontWeight: 300, lineHeight: 1.05 }}>
                  Rainer <em>Hellmuth</em>
                </h3>
                <p className="mt-2 font-display italic text-ghost" style={{ fontSize: "1.1rem" }}>
                  Rechtsanwalt · Fachanwalt für Erbrecht
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                  {["Erbrecht", "Insolvenzrecht", "Sanierungsrecht"].map((t) => (
                    <span
                      key={t}
                      className="border-rule-strong border px-4 py-2 font-body uppercase text-ink"
                      style={{ fontSize: "0.6rem", letterSpacing: "0.2em" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="mt-10 text-ghost max-w-md" style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.9 }}>
                  Seit 1990 in Leipzig. Mitglied der Arbeitsgemeinschaft Erbrecht im DAV.
                </p>
              </div>
            </div>
          </div>
        </section>

        <News />

        {/* TESTIMONIALS */}
        <section className="py-32 px-8 bg-void" aria-label="Mandantenstimmen">
          <div className="max-w-[1400px] mx-auto">
            <div className="reveal mb-20">
              <div className="label-mono mb-6">06 — MANDANTEN</div>
              <h2 className="font-display font-light text-ink" style={{ fontSize: "4rem", lineHeight: 1.05 }}>
                Worte des <em className="text-gold-bright">Vertrauens</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-void p-12 reveal relative" data-stagger={i}>
                  <div className="font-display text-gold leading-none" style={{ fontSize: "8rem", opacity: 0.15 }}>“</div>
                  <p className="font-display italic text-ink -mt-12 relative" style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
                    {t.quote}
                  </p>
                  <div className="mt-10 font-mono-ed text-gold uppercase flex items-center justify-between" style={{ fontSize: "0.6rem", letterSpacing: "0.2em" }}>
                    <span>{t.name}</span>
                    <span>{t.stars}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQ />

        {/* KONTAKT */}
        <section id="kontakt" className="py-32 px-8" aria-label="Kontakt">
          <div className="max-w-[1400px] mx-auto">
            <div className="reveal mb-20">
              <div className="label-mono mb-6">08 — KONTAKT</div>
              <h2 className="font-display font-light text-ink" style={{ fontSize: "4rem", lineHeight: 1.05 }}>
                Im <em className="text-gold-bright">Gespräch</em>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-20">
              <div className="reveal space-y-10">
                {[
                  { l: "TELEFON", v: "0341 — 59 33 930" },
                  { l: "E-MAIL", v: "glhp@glhp.de" },
                  { l: "ADRESSE", v: "Lumumbastraße 9 · 04105 Leipzig" },
                  { l: "ÖFFNUNGSZEITEN", v: "Mo–Fr · 09:00–12:00 & 13:00–16:30" },
                ].map((b) => (
                  <div key={b.l}>
                    <div className="field-label">{b.l}</div>
                    <div className="font-display text-ink" style={{ fontSize: "1.4rem", fontWeight: 400 }}>{b.v}</div>
                  </div>
                ))}

                <div className="pt-4">
                  <iframe
                    title="Standort Leipzig"
                    loading="lazy"
                    src="https://www.google.com/maps?q=Lumumbastra%C3%9Fe+9,+04105+Leipzig&output=embed"
                    style={{
                      width: "100%",
                      height: 280,
                      border: "none",
                      filter: "grayscale(100%) contrast(1.1) brightness(0.7)",
                    }}
                  />
                </div>
              </div>

              <form
                className="reveal space-y-8"
                data-stagger={1}
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Vielen Dank. Wir melden uns innerhalb eines Werktages.");
                }}
              >
                <div>
                  <label className="field-label" htmlFor="name">Name</label>
                  <input id="name" required className="field-input" />
                </div>
                <div>
                  <label className="field-label" htmlFor="email">E-Mail</label>
                  <input id="email" type="email" required className="field-input" />
                </div>
                <div>
                  <label className="field-label" htmlFor="tel">Telefon</label>
                  <input id="tel" className="field-input" />
                </div>
                <div>
                  <label className="field-label" htmlFor="msg">Nachricht</label>
                  <textarea id="msg" required className="field-input resize-none" style={{ height: 120 }} />
                </div>

                <button
                  type="submit"
                  className="w-full border py-5 font-body uppercase text-gold transition-all duration-500 hover:bg-gold hover:text-void"
                  style={{ borderColor: "rgba(184,150,90,0.3)", fontSize: "0.65rem", letterSpacing: "0.3em" }}
                >
                  Anfrage senden
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative bg-void overflow-hidden" style={{ borderTop: "1px solid rgba(184,150,90,0.12)" }}>
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <span className="font-display font-light text-ink" style={{ fontSize: "20rem", opacity: 0.02, lineHeight: 1 }}>
            H&amp;R
          </span>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-8 py-20 grid md:grid-cols-3 gap-12 items-start">
          <div>
            <div className="font-display italic text-gold" style={{ fontSize: "2rem" }}>H&amp;R</div>
            <p className="mt-4 font-mono-ed text-ghost" style={{ fontSize: "0.58rem", letterSpacing: "0.3em" }}>
              RECHTSANWÄLTE · LEIPZIG · SEIT 1990
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-center">
            {["Startseite", "Rechtsgebiete", "Anwälte", "Kontakt"].map((l) => (
              <a key={l} href="#top" className="font-mono-ed text-ghost hover:text-gold transition-colors uppercase" style={{ fontSize: "0.58rem", letterSpacing: "0.3em" }}>
                {l}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3 md:items-end font-mono-ed text-ghost uppercase" style={{ fontSize: "0.58rem", letterSpacing: "0.3em" }}>
            <a href="#" className="hover:text-gold transition-colors">Impressum</a>
            <a href="#" className="hover:text-gold transition-colors">Datenschutz</a>
            <span>© 2026 Hellmuth & Rühling</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
