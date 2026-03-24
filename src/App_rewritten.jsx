import { useEffect, useRef, useState } from "react";

const PHOTO = "data:image/png;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAEOKADAAQAAAABAAAFRgAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgFRgQ4AwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAQEBAQEBAgEBAgMCAgIDBAMDAwMEBgQEBAQEBgcGBgYGBgYHBwcHBwcHBwgICAgICAkJCQkJCwsLCwsLCwsLC//bAEMBAgICAwMDBQMDBQsIBggLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLC//dAAQARP/aAAwDAQACEQMRAD8A83ooor+Kz/XQKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/Q83ooor+Kz/XQKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/R83ooor+Kz/XQKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/S83ooor+Kz/XQKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/T83ooor+Kz/XQKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/U83ooor+Kz/XQKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/V83ooor+Kz/XQKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/W83ooor+Kz/XQKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/X83ooor+Kz/XQKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACikJwM0wMSc1Sg3qRKok7MkopM0tSWmFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH//2Q==";

const whatsappUrl = "https://wa.me/32471623105";
const linkedinUrl = "https://www.linkedin.com/in/viktoriia-reshetniak-6a4684251/";

const highlights = [
  {
    title: "Brand strategy",
    text: "Clear positioning, messaging, and direction for businesses that need more than random content.",
  },
  {
    title: "Content that explains",
    text: "Posts, stories, and landing page copy built to make people understand why your work matters.",
  },
  {
    title: "Long-term trust",
    text: "A brand should feel consistent, credible, and memorable — not loud for one month and gone the next.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Understand the business",
    text: "What you sell, who you help, and where clients stop trusting your message.",
  },
  {
    step: "02",
    title: "Build the message",
    text: "Turn scattered ideas into a sharp offer, better language, and a brand people can repeat.",
  },
  {
    step: "03",
    title: "Show up consistently",
    text: "Publish with purpose, improve with feedback, and build authority that compounds.",
  },
];

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function ContactButton({ href, label, primary = false }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "14px 22px",
        border: primary ? "none" : "1px solid #CFC7B2",
        background: primary ? "#111008" : "#FDFAF3",
        color: primary ? "#F4F0E8" : "#111008",
        fontSize: 12,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        fontWeight: 600,
        minWidth: 180,
      }}
    >
      {label}
    </a>
  );
}

export default function App() {
  const serif = "'DM Serif Display', Georgia, serif";
  const sans = "'Epilogue', sans-serif";
  const mono = "'DM Mono', monospace";
  const ink = "#111008";
  const paper = "#F4F0E8";
  const line = "#D4CDB8";
  const muted = "#6F695D";
  const accent = "#FF5A1F";
  const card = "#FDFAF3";

  return (
    <div
      style={{
        background: paper,
        color: ink,
        fontFamily: sans,
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&family=Epilogue:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        a { color: inherit; text-decoration: none; }
        ::selection { background: ${accent}; color: ${paper}; }
      `}</style>

      <div style={{ height: 6, background: accent, position: "fixed", top: 0, left: 0, right: 0, zIndex: 20 }} />

      <nav
        style={{
          position: "sticky",
          top: 6,
          zIndex: 19,
          background: "rgba(244,240,232,0.94)",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${line}`,
        }}
      >
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 18,
            flexWrap: "wrap",
          }}
        >
          <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}>
            <strong>Viktoriia</strong>
          </div>
          <div style={{ display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "84px 24px 56px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: 44,
          alignItems: "center",
        }}
      >
        <Reveal>
          <div>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: muted, marginBottom: 18 }}>
              Antwerp · Belgium
            </div>
            <h1 style={{ fontFamily: serif, fontSize: "clamp(42px, 9vw, 84px)", lineHeight: 0.95, margin: 0, maxWidth: 620 }}>
              Building brands that feel <em style={{ color: accent, fontStyle: "italic" }}>real</em>.
            </h1>
            <p style={{ marginTop: 24, maxWidth: 600, fontSize: 18, lineHeight: 1.8, color: muted, fontWeight: 300 }}>
              I help businesses communicate with clarity, consistency, and trust. No empty marketing noise. Just strong positioning, better content, and a brand people remember.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 30 }}>
              <ContactButton href={whatsappUrl} label="WhatsApp" primary />
              <ContactButton href={linkedinUrl} label="LinkedIn" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div style={{ background: card, border: `1px solid ${line}`, padding: 18 }}>
            <img
              src={PHOTO}
              alt="Viktoriia portrait"
              style={{ width: "100%", display: "block", objectFit: "cover", aspectRatio: "4 / 5" }}
            />
          </div>
        </Reveal>
      </section>

      <section id="about" style={{ maxWidth: 1160, margin: "0 auto", padding: "20px 24px 72px" }}>
        <Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 26, alignItems: "start" }}>
            <div>
              <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: muted, marginBottom: 16 }}>
                About
              </div>
              <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 5vw, 54px)", lineHeight: 1.02, margin: 0 }}>
                Strategy first.<br />
                Then communication.<br />
                Then growth.
              </h2>
            </div>
            <div style={{ fontSize: 17, lineHeight: 1.9, color: muted, fontWeight: 300 }}>
              <p style={{ marginTop: 0 }}>
                Most businesses do not have a traffic problem. They have a clarity problem. Their service is good, but their message is weak, generic, or forgettable.
              </p>
              <p style={{ marginBottom: 0 }}>
                My work is to make the message stronger: what you stand for, what makes you different, and why clients should trust you before they ever speak to you.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="services" style={{ borderTop: `1px solid ${line}` }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "72px 24px" }}>
          <Reveal>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: muted, marginBottom: 16 }}>
              What I do
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 22 }}>
            {highlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <div style={{ background: card, border: `1px solid ${line}`, padding: 28, minHeight: 240 }}>
                  <div style={{ fontFamily: mono, fontSize: 38, color: line, lineHeight: 1, marginBottom: 18 }}>
                    0{index + 1}
                  </div>
                  <h3 style={{ fontFamily: serif, fontSize: 28, margin: "0 0 14px" }}>{item.title}</h3>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.8, color: muted, fontWeight: 300 }}>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="process" style={{ borderTop: `1px solid ${line}` }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "72px 24px" }}>
          <Reveal>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: muted, marginBottom: 16 }}>
              Process
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 22 }}>
            {processSteps.map((item, index) => (
              <Reveal key={item.step} delay={index * 110}>
                <div style={{ padding: 28, borderTop: `2px solid ${accent}`, background: card }}>
                  <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.18em", color: muted, marginBottom: 14 }}>{item.step}</div>
                  <h3 style={{ fontFamily: serif, fontSize: 26, margin: "0 0 14px" }}>{item.title}</h3>
                  <p style={{ margin: 0, color: muted, lineHeight: 1.8, fontWeight: 300 }}>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ borderTop: `1px solid ${line}` }}>
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "72px 24px 88px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: 30,
            alignItems: "start",
          }}
        >
          <Reveal>
            <div>
              <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: muted, marginBottom: 16 }}>
                Contact
              </div>
              <h2 style={{ fontFamily: serif, fontSize: "clamp(34px, 5vw, 58px)", lineHeight: 1.02, margin: 0 }}>
                Let’s talk about
                <br />
                your brand.
              </h2>
              <p style={{ marginTop: 22, fontSize: 17, lineHeight: 1.9, color: muted, fontWeight: 300, maxWidth: 520 }}>
                If you want clearer positioning, stronger communication, and a brand that actually earns trust, start with a direct conversation.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div style={{ background: card, border: `1px solid ${line}`, padding: 28 }}>
              <div style={{ display: "grid", gap: 14 }}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderBottom: `1px solid ${line}` }}
                >
                  <span style={{ fontWeight: 600 }}>WhatsApp</span>
                  <span style={{ color: muted }}>→</span>
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderBottom: `1px solid ${line}` }}
                >
                  <span style={{ fontWeight: 600 }}>LinkedIn</span>
                  <span style={{ color: muted }}>→</span>
                </a>
              </div>
              <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <ContactButton href={whatsappUrl} label="Message on WhatsApp" primary />
                <ContactButton href={linkedinUrl} label="Open LinkedIn" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer style={{ borderTop: `1px solid ${line}` }}>
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "28px 24px 36px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div style={{ fontFamily: serif, fontSize: 24 }}>Viktoriia</div>
          <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: muted }}>
            Antwerp · Belgium · Brand strategy
          </div>
        </div>
      </footer>
    </div>
  );
}
