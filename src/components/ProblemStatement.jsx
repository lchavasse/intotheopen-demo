export default function ProblemStatement() {
  return (
    <section style={{ background: '#FFE566', borderBottom: '3px solid #1A1A1A', padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, marginBottom: 32, lineHeight: 1.1 }}>
            Most content fails, not because it&apos;s bad — but because it&apos;s untested
          </h2>
          <p style={{ fontSize: '1.05rem', marginBottom: 28, opacity: 0.8 }}>
            Teams invest time, budget, and creativity into content without knowing:
          </p>
          <div className="nb-card" style={{ background: '#FFFDF7', padding: 32, marginBottom: 32, textAlign: 'left', display: 'inline-block', width: '100%' }}>
            <p style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 12 }}>→ Will this resonate?</p>
            <p style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 12 }}>→ Will this perform?</p>
            <p style={{ fontSize: '1.15rem', fontWeight: 700 }}>→ Is this worth publishing?</p>
          </div>
          <p style={{ fontSize: '1.05rem', opacity: 0.8, marginBottom: 40 }}>
            By the time performance data arrives, the budget is already spent.
          </p>
          <div className="nb-card" style={{ background: '#FF6B9D', padding: '24px 32px', display: 'inline-block', transform: 'rotate(-1deg)' }}>
            <p style={{ fontSize: '1.1rem', fontWeight: 700, fontStyle: 'italic' }}>
              Traditional analytics explain failure after launch.<br />intotheopen helps you avoid it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
