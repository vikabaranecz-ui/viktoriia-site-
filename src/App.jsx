import { useState, useEffect, useRef } from "react";

const logEntries = {
  mar25: {
    date: "March 2025 — Week 1",
    title: "The personal brand starts from zero. The work does not.",
    body: `I have been running marketing for Isoprotech and Reno Rangers for a while. Real campaigns. Real budgets. Real results — and real mistakes I learned from.\n\nWhat is starting from zero is this: building my own name publicly. No audience yet. No following. I decided to document the process instead of waiting until everything looks perfect.\n\nTwo posts per week. No shortcuts. We are on the way.`,
    tag: "figuring", label: "In motion"
  },
  apr25: {
    date: "April 2025 — Month 2",
    title: "First posts live. First conversations with people I have never met.",
    body: `Something happens when strangers start engaging with your thinking. It confirms the direction.\n\nI adjusted a campaign for a renovation client this month. Changed the targeting. Cost per lead dropped. I wrote about exactly what I changed and why — that post reached more people than any polished content I produced before.\n\nHonest content about real work travels further than perfect content about nothing.`,
    tag: "working", label: "Working"
  },
  may25: {
    date: "May 2025 — Month 3",
    title: "The audience is small. The learning is compounding.",
    body: `I am not going to pretend the numbers are impressive yet. They are not.\n\nBut the quality of conversations is already telling me something: Belgian business owners are tired of agencies that promise everything and explain nothing. They want someone who builds a real brand — a name people trust — not someone who chases traffic for thirty days and disappears.\n\nThat gap is exactly where I work.`,
    tag: "working", label: "Working"
  },
  ongoing: {
    date: "This week",
    title: "Replace this with what is actually happening right now.",
    body: `This is your live update. What you are working on. What is moving. What is stuck.\n\nThe rule: no performance of progress. Just what is true.\n\nUpdate this every week — or every time something real happens.`,
    tag: "figuring", label: "In progress"
  }
};

const tagColors = { working: "#4CAF50", figuring: "#E8C547", hard: "#C8441A" };

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState("mar25");
  const entry = logEntries[active];

  const mono    = "'DM Mono', monospace";
  const serif   = "'DM Serif Display', Georgia, serif";
  const sans    = "'Epilogue', sans-serif";
  const ink     = "#111008";
  const paper   = "#F4F0E8";
  const line    = "#D4CDB8";
  const accent  = "#C8441A";
  const accent2 = "#E8C547";
  const muted   = "#7A7568";
  const white   = "#FDFAF3";

  return (
    <div style={{ background: paper, color: ink, fontFamily: sans, fontSize: 16, lineHeight: 1.6, overflowX: "hidden" }}>

      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&family=Epilogue:wght@300;400;500;700;900&display=swap" rel="stylesheet" />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.7)} }
        a { color: inherit; text-decoration: none; }
        ::selection { background: ${accent2}; color: ${ink}; }
      `}</style>

      {/* TAPE */}
      <div style={{ background: accent, height: 6, width: "100%", position: "fixed", top: 0, zIndex: 100 }} />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 6, left: 0, right: 0, zIndex: 99,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "13px 24px",
        background: "rgba(244,240,232,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${line}`
      }}>
        <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.18em", color: muted, textTransform: "uppercase" }}>
          <strong style={{ color: ink, fontWeight: 600 }}>Viktoriia</strong>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 7, fontFamily: mono, fontSize: 10, color: muted, letterSpacing: "0.1em" }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: accent, display: "inline-block", animation: "pulse 2.4s ease-in-out infinite" }} />
          actively building
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "110px 24px 64px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 40, alignItems: "start" }}>
        <Reveal>
          <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.3em", color: muted, textTransform: "uppercase", marginBottom: 24, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ display: "inline-block", width: 20, height: 1, background: accent }} />
            Antwerp, Belgium
          </div>
          <h1 style={{ fontFamily: serif, fontSize: "clamp(58px, 10vw, 108px)", lineHeight: 0.92, letterSpacing: "-0.01em", marginBottom: 28 }}>
            Vikto<em style={{ fontStyle: "italic", color: accent }}>riia</em>
          </h1>
          <p style={{ fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 400, lineHeight: 1.6, maxWidth: 460, marginBottom: 16 }}>
            I build marketing systems for renovation and construction companies.
          </p>
          <p style={{ fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 400, lineHeight: 1.6, maxWidth: 460, marginBottom: 16 }}>
            Not campaigns. <strong style={{ fontWeight: 700 }}>Brands people trust. Systems that hold.</strong>
          </p>
          <p style={{ fontSize: "clamp(15px, 1.8vw, 18px)", fontWeight: 300, lineHeight: 1.6, maxWidth: 460, marginBottom: 40, color: muted }}>
            I learn on real cases. I share everything along the way.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#work" style={{ padding: "13px 26px", fontFamily: mono, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", background: ink, color: paper, cursor: "pointer" }}>
              See the work
            </a>
            <a href="#connect" style={{ padding: "13px 26px", fontFamily: mono, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", background: "transparent", color: ink, border: `1.5px solid ${line}`, cursor: "pointer" }}>
              Work with me
            </a>
          </div>
        </Reveal>

        {/* RIGHT NOW CARD */}
        <Reveal delay={140}>
          <div style={{ background: white, border: `1.5px solid ${line}`, padding: 28, position: "relative" }}>
            <div style={{ position: "absolute", top: -1, left: 20, background: accent, color: white, fontFamily: mono, fontSize: 9, letterSpacing: "0.22em", padding: "4px 10px", transform: "translateY(-50%)" }}>
              RIGHT NOW
            </div>
            {[
              { label: "Working on",         value: "Brand system for a renovation company — trust, not just traffic", bar: 40 },
              { label: "Also in progress",   value: "Construction management app · Personal brand from zero", bar: 22 },
              { label: "This week",          value: "Content system that builds a name — not just reach" },
            ].map((item, i) => (
              <div key={i}>
                {i > 0 && <div style={{ height: 1, background: line, margin: "14px 0" }} />}
                <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: "0.28em", textTransform: "uppercase", color: muted, marginBottom: 5 }}>{item.label}</div>
                <div style={{ fontSize: 14, fontWeight: 500, color: ink, lineHeight: 1.45 }}>{item.value}</div>
                {item.bar && (
                  <div style={{ marginTop: 8, height: 2, background: line, position: "relative" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, height: "100%", width: `${item.bar}%`, background: accent }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── WHAT I DO ── */}
      <section id="work" style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 24px", borderTop: `1px solid ${line}` }}>
        <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: accent, marginBottom: 20 }}>
          <span style={{ color: muted }}>01 —</span> What I do
        </div>
        <Reveal>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(34px, 5vw, 58px)", lineHeight: 1.05, marginBottom: 48, maxWidth: 680 }}>
            Real work.<br /><em style={{ fontStyle: "italic", color: accent }}>Real companies.</em><br />Always improving.
          </h2>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 48 }}>
          <Reveal>
            <div>
              <p style={{ fontSize: 17, lineHeight: 1.82, fontWeight: 300, marginBottom: 20 }}>
                I take renovation and construction companies and make the market see them the right way. Not through a campaign that runs for thirty days. Through a brand that earns trust and keeps it.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.82, fontWeight: 300, marginBottom: 20 }}>
                Not visible for a week — trusted for years. A brand strong enough to stand on its own name. A system that still works in three years. Not something that breaks tomorrow.
              </p>
              <blockquote style={{ fontFamily: serif, fontSize: "clamp(18px, 2.5vw, 23px)", fontStyle: "italic", lineHeight: 1.4, borderLeft: `3px solid ${accent}`, paddingLeft: 20, margin: "28px 0" }}>
                "We are not building fast attention. We are building a name people come back to."
              </blockquote>
              <p style={{ fontSize: 17, lineHeight: 1.82, fontWeight: 300, marginBottom: 20 }}>
                I question every decision I make — and when something works or fails, I share it. Not to perform transparency. Because that is how real knowledge is built. I am learning on real cases, in real time. And I document all of it.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.82, fontWeight: 300 }}>
                Discipline is not a personality trait. It is a skill — and one of the hardest to build. The most difficult things are never the complex ones. They are the simple ones you have to do again and again without skipping. That is where most people stop. That is where I choose to stay.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              {[

                ["What I build",  "Brand systems — not campaigns"],
                ["My approach",   "Long game. Trust over hype. Real results."],
                ["Location",      "Antwerp, Belgium"],
                ["Origin",        "Ukraine — shaped how I work under pressure"],
                ["Languages",     "Ukrainian · English · Nederlands"],
                ["Also building", "Construction app · Personal brand from zero"],
                ["I believe",     "Question everything — including what I say here"],
              ].map(([label, value]) => (
                <div key={label} style={{ display: "grid", gridTemplateColumns: "116px 1fr", gap: 14, padding: "16px 0", borderBottom: `1px solid ${line}` }}>
                  <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: muted, paddingTop: 2 }}>{label}</div>
                  <div style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.5 }}>{value}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <Reveal>
        <div style={{ background: ink, color: paper, padding: "64px 24px", position: "relative", overflow: "hidden" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ position: "absolute", top: -40, right: 0, fontFamily: serif, fontSize: 240, color: "rgba(255,255,255,0.03)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>?</div>
            <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: accent, marginBottom: 28 }}>How I think</div>
            {[
              ["01", <span>I do not follow trends.</span>],
              ["02", <span>I ask <em style={{ fontStyle: "italic", color: accent2 }}>why they work</em> first.</span>],
              ["03", <span>Then I decide.</span>],
              ["04", <span>I build for the <em style={{ fontStyle: "italic", color: accent2 }}>long game.</em></span>],
            ].map(([num, content], i) => (
              <div key={i} style={{ fontFamily: serif, fontSize: "clamp(22px, 4vw, 44px)", lineHeight: 1.05, padding: "13px 0", borderBottom: "1px solid rgba(255,255,255,0.09)", display: "flex", alignItems: "baseline", gap: 18 }}>
                <span style={{ fontFamily: mono, fontSize: 10, color: "rgba(255,255,255,0.2)", minWidth: 22 }}>{num}</span>
                {content}
              </div>
            ))}
            <p style={{ marginTop: 36, fontSize: 15, color: "rgba(255,255,255,0.45)", maxWidth: 460, lineHeight: 1.75, fontWeight: 300 }}>
              Hype fades. Trends rotate. The brands that survive are built on something real — a name people trust, a system that holds.{" "}
              <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>That is the only kind of marketing I want to do.</strong>
            </p>
          </div>
        </div>
      </Reveal>

      {/* ── BUILDING LOG ── */}
      <section id="log" style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 24px", borderTop: `1px solid ${line}` }}>
        <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: accent, marginBottom: 20 }}>
          <span style={{ color: muted }}>02 —</span> Building log
        </div>
        <Reveal>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(34px, 5vw, 58px)", lineHeight: 1.05, marginBottom: 48, maxWidth: 680 }}>
            What is actually<br />happening — <em style={{ fontStyle: "italic", color: accent }}>right now.</em>
          </h2>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 160px), 1fr))", gap: 0 }}>
          <div style={{ borderRight: `1px solid ${line}`, paddingRight: 20 }}>
            {[
              ["mar25",   "Mar 2025", "Starting publicly"],
              ["apr25",   "Apr 2025", "First experiments"],
              ["may25",   "May 2025", "First results"],
              ["ongoing", "Ongoing",  "This week"],
            ].map(([key, month, label]) => (
              <div key={key} onClick={() => setActive(key)} style={{ padding: "16px 0", borderBottom: `1px solid ${line}`, cursor: "pointer" }}>
                <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: active === key ? accent : muted, marginBottom: 4, transition: "color 0.2s" }}>{month}</div>
                <div style={{ fontSize: 13, color: active === key ? ink : muted, fontWeight: active === key ? 600 : 400, transition: "all 0.2s" }}>{label}</div>
              </div>
            ))}
          </div>

          <div style={{ paddingLeft: 28 }} key={active}>
            <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: muted, marginBottom: 12 }}>{entry.date}</div>
            <h3 style={{ fontFamily: serif, fontSize: "clamp(20px, 3vw, 26px)", lineHeight: 1.25, marginBottom: 20 }}>{entry.title}</h3>
            {entry.body.split("\n\n").map((para, i) => (
              <p key={i} style={{ fontSize: 15, lineHeight: 1.78, fontWeight: 300, color: ink, marginBottom: 14 }}>{para}</p>
            ))}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: mono, fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: muted, border: `1px solid ${line}`, padding: "6px 12px", marginTop: 4 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: tagColors[entry.tag], display: "inline-block" }} />
              {entry.label}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="building" style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 24px", borderTop: `1px solid ${line}` }}>
        <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: accent, marginBottom: 20 }}>
          <span style={{ color: muted }}>03 —</span> What I am building
        </div>
        <Reveal>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(34px, 5vw, 58px)", lineHeight: 1.05, marginBottom: 48, maxWidth: 680 }}>
            Marketing work.<br /><em style={{ fontStyle: "italic", color: accent }}>One app.</em><br />All documented.
          </h2>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 20 }}>
          {[
            {
              num: "01", title: "Brand Marketing — Renovation & Construction",
              desc: "I build brand systems for renovation and construction companies — not as an outside agency, but from inside. The goal is always the same: build something that holds. A name people trust. A system that keeps working. Not a campaign that disappears after the budget runs out.",
              status: "Active — brand systems running", pct: 55, bar: "Long-term — growing"
            },
            {
              num: "02", title: "Construction Management App",
              desc: "I am building a construction management app. No coding background. I questioned the assumption that you need a developer to start — and I was right. Every step is documented. Every decision is shared. This is what building in public actually looks like.",
              status: "MVP in development", pct: 22, bar: "Early stage — in motion"
            }
          ].map(p => (
            <Reveal key={p.num}>
              <div style={{ background: white, border: `1.5px solid ${line}`, padding: 30 }}>
                <div style={{ fontFamily: mono, fontSize: 42, color: line, lineHeight: 1, marginBottom: 16, fontWeight: 300 }}>{p.num}</div>
                <div style={{ fontFamily: serif, fontSize: 22, marginBottom: 12, lineHeight: 1.15 }}>{p.title}</div>
                <div style={{ fontSize: 14, lineHeight: 1.75, color: muted, marginBottom: 20, fontWeight: 300 }}>{p.desc}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 7, fontFamily: mono, fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: muted }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: accent, display: "inline-block", animation: "pulse 2.4s ease-in-out infinite" }} />
                  {p.status}
                </div>
                <div style={{ marginTop: 14, height: 2, background: line, position: "relative" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, height: "100%", width: `${p.pct}%`, background: accent }} />
                </div>
                <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: "0.18em", color: muted, marginTop: 7 }}>{p.bar}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CONNECT ── */}
      <section id="connect" style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 24px", borderTop: `1px solid ${line}`, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 40, alignItems: "start" }}>
        <Reveal>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(30px, 5vw, 50px)", lineHeight: 1.05, marginBottom: 20 }}>
            Talk to me<br />if you want to build<br /><em style={{ fontStyle: "italic", color: accent }}>something that lasts.</em>
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.78, color: muted, marginBottom: 30, fontWeight: 300, maxWidth: 380 }}>
            I work with companies that want a real brand — not just a campaign. If you are tired of short-term thinking and want to build something your clients actually trust, let's talk.
          </p>
          <a href="mailto:your@email.com" style={{ display: "inline-block", padding: "13px 26px", fontFamily: mono, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", background: ink, color: paper, cursor: "pointer" }}>
            Send me a message
          </a>
        </Reveal>

        <Reveal delay={100}>
          <div style={{ background: white, border: `1.5px solid ${line}`, padding: 28 }}>
            <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: "0.28em", textTransform: "uppercase", color: muted, marginBottom: 18 }}>Find me here</div>
            {["LinkedIn", "Instagram", "Email"].map((name) => (
              <div key={name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 0", borderBottom: `1px solid ${line}`, fontSize: 14, fontWeight: 500, cursor: "pointer" }}>
                <span>{name}</span>
                <span style={{ fontSize: 12, color: muted }}>→</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${line}`, maxWidth: 1100, margin: "0 auto", padding: "30px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
        <div style={{ fontFamily: serif, fontSize: 20 }}>Viktoriia</div>
        <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: "0.2em", color: muted, textAlign: "right", lineHeight: 1.9 }}>
          Marketing · Antwerp, Belgium<br />Building in public — 2025
        </div>
      </footer>

    </div>
  );
}
