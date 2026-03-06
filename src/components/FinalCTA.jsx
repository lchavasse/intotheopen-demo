export default function FinalCTA() {
  return (
    <section style={{ background: '#1A1A1A', borderBottom: '3px solid #1A1A1A', padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
        <span className="sticker" style={{ background: '#FFE566', marginBottom: 24, display: 'inline-block' }}>
          Get started today
        </span>
        <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 700, color: '#FFFDF7', marginTop: 24, marginBottom: 20, lineHeight: 1.05 }}>
          Start engineering content performance today
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#FFFDF7', opacity: 0.8, maxWidth: 560, margin: '0 auto 48px', lineHeight: 1.6 }}>
          Move beyond guesswork. Forecast impact, validate messaging, and optimise content performance — before and after you publish.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
          <a
            href="https://intotheopen-144935016950.us-west1.run.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="nb-btn nb-btn-yellow"
            style={{ fontSize: '1.05rem', padding: '14px 32px' }}
          >
            Request early access →
          </a>
          <a
            href="#"
            className="nb-btn nb-btn-white"
            style={{ fontSize: '1.05rem', padding: '14px 32px' }}
          >
            Back to the top
          </a>
        </div>
      </div>
    </section>
  )
}
