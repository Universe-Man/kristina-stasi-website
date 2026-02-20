import { useState, useEffect } from "react";

const NAV_LINKS = ["About", "Sound Healing", "Shows", "Connect"];

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const handler = () => setY(window.scrollY);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return y;
}

function Nav({ page, setPage, menuOpen, setMenuOpen }) {
  const scrollY = useScrollY();
  const solid = scrollY > 60 || menuOpen;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.4s ease",
        background: solid
          ? "rgba(26, 18, 40, 0.97)"
          : "transparent",
        backdropFilter: solid ? "blur(12px)" : "none",
        borderBottom: solid ? "1px solid rgba(200,170,255,0.1)" : "none",
      }}
    >
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 32px",
        height: 72,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Logo */}
        <button
          onClick={() => { setPage("Home"); setMenuOpen(false); }}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            fontFamily: "'Playfair Display', serif",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.05em",
            color: "#f0e8ff",
            textDecoration: "none",
          }}
        >
          KS
        </button>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: 40 }} className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => setPage(link)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Raleway', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: page === link ? "#d4b8ff" : "rgba(240,232,255,0.75)",
                borderBottom: page === link ? "1px solid #d4b8ff" : "1px solid transparent",
                paddingBottom: 2,
                transition: "color 0.2s, border-color 0.2s",
              }}
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#f0e8ff",
            fontSize: 24,
            padding: 4,
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          background: "rgba(26, 18, 40, 0.98)",
          padding: "20px 32px 32px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }} className="mobile-nav">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => { setPage(link); setMenuOpen(false); }}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Raleway', sans-serif",
                fontSize: 22,
                fontWeight: 700,
                color: page === link ? "#d4b8ff" : "#f0e8ff",
                textAlign: "left",
                padding: "8px 0",
                letterSpacing: "0.05em",
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero({ setPage }) {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(160deg, #1a1228 0%, #2d1b4e 45%, #1a1228 100%)",
    }}>
      {/* Decorative orbs */}
      <div style={{
        position: "absolute",
        width: 600,
        height: 600,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(180,100,255,0.15) 0%, transparent 70%)",
        top: "10%",
        right: "-10%",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        width: 400,
        height: 400,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(100,180,255,0.1) 0%, transparent 70%)",
        bottom: "5%",
        left: "-5%",
        pointerEvents: "none",
      }} />

      {/* Noise grain overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
        backgroundRepeat: "repeat",
        backgroundSize: "150px",
        pointerEvents: "none",
        opacity: 0.4,
      }} />

      <div style={{ textAlign: "center", position: "relative", padding: "0 24px" }}>
        <p style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: 12,
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          color: "#c9a8ff",
          marginBottom: 24,
          animation: "fadeUp 0.8s ease both",
        }}>
          Actress · Comedienne · Sound Healer
        </p>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(64px, 12vw, 140px)",
          fontWeight: 700,
          lineHeight: 0.95,
          color: "#f0e8ff",
          letterSpacing: "-0.02em",
          margin: "0 0 8px",
          animation: "fadeUp 0.8s ease 0.1s both",
        }}>
          Kristina
        </h1>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(64px, 12vw, 140px)",
          fontWeight: 400,
          fontStyle: "italic",
          lineHeight: 0.95,
          color: "#c9a8ff",
          letterSpacing: "-0.02em",
          margin: "0 0 48px",
          animation: "fadeUp 0.8s ease 0.2s both",
        }}>
          Stasi
        </h1>

        <div style={{
          display: "flex",
          gap: 16,
          justifyContent: "center",
          flexWrap: "wrap",
          animation: "fadeUp 0.8s ease 0.35s both",
        }}>
          <button
            onClick={() => setPage("About")}
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "14px 36px",
              background: "#c9a8ff",
              color: "#1a1228",
              border: "none",
              cursor: "pointer",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseOver={e => e.target.style.background = "#dfc4ff"}
            onMouseOut={e => e.target.style.background = "#c9a8ff"}
          >
            Meet Kristina
          </button>
          <button
            onClick={() => setPage("Shows")}
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "14px 36px",
              background: "transparent",
              color: "#c9a8ff",
              border: "1px solid rgba(201,168,255,0.5)",
              cursor: "pointer",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseOver={e => { e.target.style.borderColor = "#c9a8ff"; e.target.style.color = "#f0e8ff"; }}
            onMouseOut={e => { e.target.style.borderColor = "rgba(201,168,255,0.5)"; e.target.style.color = "#c9a8ff"; }}
          >
            Upcoming Shows
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute",
        bottom: 40,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        animation: "fadeUp 1s ease 0.7s both",
      }}>
        <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(201,168,255,0.5)" }}>Scroll</span>
        <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(201,168,255,0.5), transparent)" }} />
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg, #1a1228 0%, #231636 100%)", paddingTop: 120 }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 32px" }}>
        <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase", color: "#c9a8ff", marginBottom: 16 }}>
          About
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 700, color: "#f0e8ff", lineHeight: 1.1, marginBottom: 48 }}>
          A singer, actress,<br />
          <span style={{ fontStyle: "italic", color: "#c9a8ff" }}>and unrepentant pun-lover.</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginBottom: 60 }} className="about-grid">
          <div>
            <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(240,232,255,0.8)", marginBottom: 24 }}>
              Kristina Stasi is a performer and creative originally from the San Francisco Bay Area, now making her mark on New York City's comedy and theater scene.
            </p>
            <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(240,232,255,0.8)", marginBottom: 24 }}>
              She can be seen performing with her Magnet house sketch team <a href="https://www.facebook.com/NewportSketch/" target="_blank" rel="noreferrer" style={{ color: "#c9a8ff", textDecoration: "none", borderBottom: "1px solid rgba(201,168,255,0.4)" }}>Newport</a>, indie all-female hip-hop improv team <a href="https://www.instagram.com/dmxximprov/" target="_blank" rel="noreferrer" style={{ color: "#c9a8ff", textDecoration: "none", borderBottom: "1px solid rgba(201,168,255,0.4)" }}>DMXX</a>, and indie musical improv team <a href="https://www.facebook.com/29thStRevue" target="_blank" rel="noreferrer" style={{ color: "#c9a8ff", textDecoration: "none", borderBottom: "1px solid rgba(201,168,255,0.4)" }}>The 29th Street Revue</a>.
            </p>
            <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(240,232,255,0.8)" }}>
              Her hobbies include karaoke, watching RuPaul's Drag Race, and making her own greeting cards. Her five-year plan involves rescuing hundreds of dogs and teaching them to read, write, and speak.
            </p>
          </div>
          <div>
            <div style={{
              background: "rgba(201,168,255,0.06)",
              border: "1px solid rgba(201,168,255,0.15)",
              padding: 40,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 28,
            }}>
              {[
                { label: "Performer", desc: "Sketch · Improv · Musical" },
                { label: "Comedian", desc: "NYC-based standup & sketch" },
                { label: "Sound Healer", desc: "Transformative sonic experiences" },
                { label: "Writer", desc: "Creative writing & pun enthusiast" },
              ].map(({ label, desc }) => (
                <div key={label}>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: "#c9a8ff", marginBottom: 4, fontStyle: "italic" }}>{label}</p>
                  <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 13, color: "rgba(240,232,255,0.5)", letterSpacing: "0.05em" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <a
          href="https://kristinastasi.vpweb.com/upload/Kristina.Stasi.resume.pdf"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            fontFamily: "'Raleway', sans-serif",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            padding: "14px 36px",
            background: "transparent",
            color: "#c9a8ff",
            border: "1px solid rgba(201,168,255,0.5)",
            textDecoration: "none",
            transition: "border-color 0.2s",
          }}
        >
          View Full Résumé →
        </a>
      </div>
    </div>
  );
}

function SoundHealingPage() {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg, #1a1228 0%, #0d1a2e 100%)", paddingTop: 120 }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 32px" }}>
        <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase", color: "#c9a8ff", marginBottom: 16 }}>
          Sound Healing
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 700, color: "#f0e8ff", lineHeight: 1.1, marginBottom: 48 }}>
          Healing through<br />
          <span style={{ fontStyle: "italic", color: "#80d4ff" }}>sound & vibration.</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginBottom: 60 }} className="sound-grid">
          {[
            { icon: "◯", title: "Singing Bowls", desc: "Tibetan and crystal singing bowls that create resonant frequencies to promote deep relaxation and healing." },
            { icon: "〜", title: "Voice Work", desc: "Using the power of the voice — toning, chanting, and harmonic techniques — to clear energetic blockages." },
            { icon: "✦", title: "Sound Baths", desc: "Immersive group experiences where layers of sound wash over participants in a meditative state." },
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{
              background: "rgba(128,212,255,0.05)",
              border: "1px solid rgba(128,212,255,0.15)",
              padding: 32,
            }}>
              <div style={{ fontSize: 28, color: "#80d4ff", marginBottom: 20, fontWeight: 200 }}>{icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: "#f0e8ff", marginBottom: 12, fontWeight: 600 }}>{title}</h3>
              <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 14, lineHeight: 1.7, color: "rgba(240,232,255,0.65)" }}>{desc}</p>
            </div>
          ))}
        </div>

        <div style={{
          background: "rgba(128,212,255,0.05)",
          border: "1px solid rgba(128,212,255,0.15)",
          padding: 48,
          marginBottom: 40,
        }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontStyle: "italic", color: "#f0e8ff", lineHeight: 1.7, marginBottom: 0 }}>
            "Sound is medicine. Every cell in our body responds to vibration — sound healing works with your body's own natural intelligence to restore balance, reduce stress, and invite a deeper sense of peace."
          </p>
        </div>

        <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(240,232,255,0.7)", marginBottom: 32 }}>
          Kristina offers private sessions, group sound baths, and workshop experiences. To inquire about booking, please use the Connect page.
        </p>
      </div>
    </div>
  );
}

function ShowsPage() {
  const shows = [
    {
      team: "Newport",
      type: "Sketch Comedy",
      venue: "Magnet Theater",
      description: "Kristina's Magnet house sketch team. Smart, surprising, and always delightful.",
      link: "https://magnettheater.com/ensembles/newport/",
    },
    {
      team: "DMXX",
      type: "Hip-Hop Improv",
      venue: "PIT Underground",
      description: "An indie all-female hip-hop improv team bringing beats and brilliance to the stage.",
      link: "https://thepit-nyc.com/events/dmxx/",
    },
    {
      team: "The 29th Street Revue",
      type: "Musical Improv",
      venue: "Various NYC Venues",
      description: "A beloved indie musical improv team with spontaneous songs and stories.",
      link: "https://www.facebook.com/29thStRevue",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg, #1a1228 0%, #1a1f10 100%)", paddingTop: 120 }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 32px" }}>
        <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase", color: "#c9a8ff", marginBottom: 16 }}>
          Shows
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 700, color: "#f0e8ff", lineHeight: 1.1, marginBottom: 16 }}>
          Catch her live —
          <span style={{ fontStyle: "italic", color: "#a8ffc9" }}> if you can.</span>
        </h2>
        <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 15, color: "rgba(240,232,255,0.6)", marginBottom: 60, maxWidth: 500, lineHeight: 1.7 }}>
          Kristina performs regularly with three NYC-based comedy and improv teams. Check each group's social pages for the latest show dates.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 60 }}>
          {shows.map(({ team, type, venue, description, link }, i) => (
            <a
              key={team}
              href={link}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "block",
                background: i % 2 === 0 ? "rgba(168,255,201,0.04)" : "rgba(168,255,201,0.02)",
                border: "1px solid rgba(168,255,201,0.1)",
                padding: "32px 40px",
                textDecoration: "none",
                transition: "background 0.2s, border-color 0.2s",
              }}
              onMouseOver={e => { e.currentTarget.style.background = "rgba(168,255,201,0.08)"; e.currentTarget.style.borderColor = "rgba(168,255,201,0.3)"; }}
              onMouseOut={e => { e.currentTarget.style.background = i % 2 === 0 ? "rgba(168,255,201,0.04)" : "rgba(168,255,201,0.02)"; e.currentTarget.style.borderColor = "rgba(168,255,201,0.1)"; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 20, flexWrap: "wrap" }}>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, color: "#f0e8ff", fontWeight: 700, marginBottom: 6 }}>{team}</h3>
                  <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a8ffc9", marginBottom: 12 }}>
                    {type} · {venue}
                  </p>
                  <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 14, color: "rgba(240,232,255,0.65)", lineHeight: 1.6, maxWidth: 500 }}>{description}</p>
                </div>
                <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: 20, color: "rgba(168,255,201,0.5)", alignSelf: "center", flexShrink: 0 }}>→</span>
              </div>
            </a>
          ))}
        </div>

        <div style={{
          background: "rgba(168,255,201,0.05)",
          border: "1px solid rgba(168,255,201,0.15)",
          padding: 32,
        }}>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 13, color: "rgba(240,232,255,0.6)", marginBottom: 8, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Stay Updated
          </p>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 15, color: "rgba(240,232,255,0.8)", lineHeight: 1.7 }}>
            Follow Kristina on <a href="https://www.facebook.com/kristina.stasi" target="_blank" rel="noreferrer" style={{ color: "#a8ffc9", textDecoration: "none" }}>Facebook</a> and <a href="https://twitter.com/stinatweet" target="_blank" rel="noreferrer" style={{ color: "#a8ffc9", textDecoration: "none" }}>Twitter / X</a> for the most up-to-date show announcements.
          </p>
        </div>
      </div>
    </div>
  );
}

function ConnectPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, wire this to a form service like Formspree
    setSubmitted(true);
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg, #1a1228 0%, #231636 100%)", paddingTop: 120 }}>
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "60px 32px" }}>
        <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase", color: "#c9a8ff", marginBottom: 16 }}>
          Connect
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 700, color: "#f0e8ff", lineHeight: 1.1, marginBottom: 16 }}>
          Say hello.
        </h2>
        <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 16, color: "rgba(240,232,255,0.65)", marginBottom: 48, lineHeight: 1.7 }}>
          Bookings, collaborations, or just want to chat about dogs and drag? Reach out below.
        </p>

        {/* Social links */}
        <div style={{ display: "flex", gap: 24, marginBottom: 56, flexWrap: "wrap" }}>
          <a href="https://www.facebook.com/kristina.stasi" target="_blank" rel="noreferrer" style={{ fontFamily: "'Raleway', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#c9a8ff", textDecoration: "none", borderBottom: "1px solid rgba(201,168,255,0.3)", paddingBottom: 2 }}>Facebook</a>
          <a href="https://twitter.com/stinatweet" target="_blank" rel="noreferrer" style={{ fontFamily: "'Raleway', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#c9a8ff", textDecoration: "none", borderBottom: "1px solid rgba(201,168,255,0.3)", paddingBottom: 2 }}>Twitter / X</a>
        </div>

        <div style={{ width: "100%", height: 1, background: "rgba(201,168,255,0.15)", marginBottom: 48 }} />

        {submitted ? (
          <div style={{
            background: "rgba(201,168,255,0.08)",
            border: "1px solid rgba(201,168,255,0.3)",
            padding: 40,
            textAlign: "center",
          }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: "#f0e8ff", fontStyle: "italic", marginBottom: 12 }}>Message sent!</p>
            <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 14, color: "rgba(240,232,255,0.6)" }}>Kristina will be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { name: "name", label: "Name", type: "text" },
              { name: "email", label: "Email", type: "email" },
            ].map(({ name, label, type }) => (
              <div key={name} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={{ fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,232,255,0.5)" }}>{label}</label>
                <input
                  type={type}
                  required
                  value={form[name]}
                  onChange={e => setForm({ ...form, [name]: e.target.value })}
                  style={{
                    background: "rgba(201,168,255,0.06)",
                    border: "1px solid rgba(201,168,255,0.2)",
                    padding: "14px 16px",
                    color: "#f0e8ff",
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: 15,
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={e => e.target.style.borderColor = "rgba(201,168,255,0.6)"}
                  onBlur={e => e.target.style.borderColor = "rgba(201,168,255,0.2)"}
                />
              </div>
            ))}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,232,255,0.5)" }}>Message</label>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                style={{
                  background: "rgba(201,168,255,0.06)",
                  border: "1px solid rgba(201,168,255,0.2)",
                  padding: "14px 16px",
                  color: "#f0e8ff",
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: 15,
                  outline: "none",
                  resize: "vertical",
                  transition: "border-color 0.2s",
                }}
                onFocus={e => e.target.style.borderColor = "rgba(201,168,255,0.6)"}
                onBlur={e => e.target.style.borderColor = "rgba(201,168,255,0.2)"}
              />
            </div>
            <button
              type="submit"
              style={{
                alignSelf: "flex-start",
                fontFamily: "'Raleway', sans-serif",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "14px 48px",
                background: "#c9a8ff",
                color: "#1a1228",
                border: "none",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseOver={e => e.target.style.background = "#dfc4ff"}
              onMouseOut={e => e.target.style.background = "#c9a8ff"}
            >
              Send Message
            </button>
            <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 12, color: "rgba(240,232,255,0.35)", lineHeight: 1.6 }}>
              Note: To make this form functional, connect it to a service like <a href="https://formspree.io" target="_blank" rel="noreferrer" style={{ color: "rgba(201,168,255,0.6)" }}>Formspree</a> or <a href="https://www.netlify.com/products/forms/" target="_blank" rel="noreferrer" style={{ color: "rgba(201,168,255,0.6)" }}>Netlify Forms</a>.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

function Footer({ setPage }) {
  return (
    <footer style={{
      background: "#110d1a",
      borderTop: "1px solid rgba(201,168,255,0.1)",
      padding: "48px 32px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
        <button
          onClick={() => setPage("Home")}
          style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#c9a8ff", letterSpacing: "0.05em" }}
        >
          Kristina Stasi
        </button>
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
          {NAV_LINKS.map(link => (
            <button key={link} onClick={() => setPage(link)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(240,232,255,0.4)", transition: "color 0.2s" }}
              onMouseOver={e => e.target.style.color = "#c9a8ff"}
              onMouseOut={e => e.target.style.color = "rgba(240,232,255,0.4)"}
            >{link}</button>
          ))}
        </div>
        <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 11, color: "rgba(240,232,255,0.25)", letterSpacing: "0.05em" }}>
          © {new Date().getFullYear()} Kristina Stasi
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  const [page, setPage] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const pageMap = {
    Home: <Hero setPage={setPage} />,
    About: <AboutPage />,
    "Sound Healing": <SoundHealingPage />,
    Shows: <ShowsPage />,
    Connect: <ConnectPage />,
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Raleway:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #1a1228; color: #f0e8ff; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .about-grid, .sound-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <Nav page={page} setPage={setPage} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>{pageMap[page]}</main>
      {page !== "Home" && <Footer setPage={setPage} />}
    </>
  );
}
