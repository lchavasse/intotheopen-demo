export default function ValueProp() {
  return (
    <section style={{ background: '#FFFDF7', borderBottom: '3px solid #1A1A1A', padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <span className="sticker" style={{ background: '#7BEA7B', marginBottom: 24, display: 'inline-block' }}>
            The Fix
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, marginBottom: 24, lineHeight: 1.05 }}>
            Stop guessing.<br />Start knowing what works.
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.65, marginBottom: 48, opacity: 0.8, maxWidth: 620, margin: '0 auto 48px' }}>
            intotheopen helps communications and marketing teams engineer content performance — not analyse failure after the fact. Forecast impact, validate messaging, and continuously optimise content across its entire lifecycle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4" style={{ marginBottom: 48 }}>
            <a href="https://intotheopen-144935016950.us-west1.run.app/" target="_blank" rel="noopener noreferrer" className="nb-btn nb-btn-yellow" style={{ fontSize: '1.05rem', padding: '14px 32px' }}>
              Request early access →
            </a>
            <a href="#how-it-works" className="nb-btn nb-btn-white" style={{ fontSize: '1.05rem', padding: '14px 32px' }}>
              See how it works
            </a>
          </div>
          <div className="nb-card" style={{ background: '#6BB5FF', padding: '28px 36px', display: 'inline-block' }}>
            <p style={{ fontSize: '1.15rem', fontWeight: 700 }}>
              Content intelligence, built for teams who publish at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
