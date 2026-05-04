import { useEffect, useRef, useState } from "react";

const intro = {
  kicker: "WILLKOMMEN",
  title: "Hellmuth & Rühling",
  italic: "Rechtsanwälte · Leipzig",
  body: "Bereits seit 1990 berät und vertritt unsere Kanzlei in Leipzig-Gohlis Mandantinnen und Mandanten aus dem gesamten Bundesgebiet. Rechtsanwalt Rainer Hellmuth und seine Kollegen legen größten Wert auf eine zufriedene Mandantschaft — eine offene und ehrliche Beratung im Vorfeld ist dazu unerlässlich.",
};

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
  const intro1 = useReveal<HTMLDivElement>();

  return (
    <section id="kanzlei" className="about-section bg-void" aria-label="Über die Kanzlei">
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
    </section>
  );
}
