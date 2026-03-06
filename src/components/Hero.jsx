export default function Hero() {
  return (
    <section style={{
      background: '#FFFDF7',
      borderBottom: '3px solid #1A1A1A',
      height: 'calc(100vh - 64px)',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', width: '100%' }}>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left */}
          <div style={{ flex: 1, maxWidth: 500 }}>
            <div style={{ marginBottom: 16 }}>
              <span className="sticker" style={{ background: '#A8D5F0', transform: 'rotate(-2deg)', display: 'inline-block' }}>
                Content Intelligence
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 700, lineHeight: 1.05, marginBottom: 16 }}>
              Engineer content performance before you publish.
            </h1>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, marginBottom: 28, color: '#1A1A1A', opacity: 0.6, maxWidth: 420 }}>
              Forecast impact, validate messaging, and optimise content across its entire lifecycle.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-3">
              <a
                href="https://intotheopen-144935016950.us-west1.run.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="nb-btn nb-btn-yellow"
                style={{ fontSize: '0.95rem', padding: '12px 28px' }}
              >
                Request early access →
              </a>
              <a href="#how-it-works" className="nb-btn nb-btn-white" style={{ fontSize: '0.95rem', padding: '12px 28px' }}>
                See how it works
              </a>
            </div>
          </div>

          {/* Right: stat cards grid */}
          <div className="hidden lg:flex" style={{ flex: 1, flexDirection: 'column', gap: 12 }}>
            {/* Row 1 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div className="nb-card" style={{ background: '#A8D5F0', padding: '18px 20px', transform: 'rotate(-1deg)' }}>
                <p style={{ fontSize: '0.72rem', fontWeight: 600, marginBottom: 8, opacity: 0.7 }}>Performance Score</p>
                <p style={{ fontSize: '2.4rem', fontWeight: 700, lineHeight: 1 }}>
                  87<span style={{ fontSize: '0.9rem', fontWeight: 500, opacity: 0.6 }}>/100</span>
                </p>
                <div style={{ marginTop: 10, height: 6, background: 'rgba(26,26,26,0.12)', borderRadius: 3, overflow: 'hidden', border: '2px solid #1A1A1A' }}>
                  <div style={{ width: '87%', height: '100%', background: '#FFE566' }} />
                </div>
                <p style={{ fontSize: '0.7rem', marginTop: 6, fontWeight: 600, opacity: 0.65 }}>Above industry average</p>
              </div>

              <div className="nb-card" style={{ background: '#D4EAF8', padding: '18px 20px', transform: 'rotate(1deg)' }}>
                <p style={{ fontSize: '0.72rem', fontWeight: 600, marginBottom: 10, opacity: 0.7 }}>Audience Match</p>
                {['Target personas', 'Tone alignment', 'Message clarity'].map((item) => (
                  <div key={item} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>{item}</span>
                    <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>✓</span>
                  </div>
                ))}
                <div style={{ marginTop: 8, paddingTop: 8, borderTop: '2px solid #1A1A1A' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700 }}>✓ Ready to publish</span>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 12 }}>
              <div className="nb-card" style={{ background: '#FFE566', padding: '18px 20px' }}>
                <p style={{ fontSize: '0.72rem', fontWeight: 600, marginBottom: 8, opacity: 0.7 }}>Predicted Engagement</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                  <p style={{ fontSize: '2.2rem', fontWeight: 700, lineHeight: 1 }}>+42%</p>
                  <span className="sticker" style={{ background: '#A8D5F0', fontSize: '0.68rem', padding: '3px 10px' }}>High</span>
                </div>
                <p style={{ fontSize: '0.7rem', fontWeight: 600, opacity: 0.7 }}>Estimated reach: 24,500 users</p>
              </div>

              <div className="nb-card" style={{ background: '#C8E8FA', padding: '18px 20px', transform: 'rotate(1deg)' }}>
                <p style={{ fontSize: '0.72rem', fontWeight: 600, marginBottom: 6, opacity: 0.7 }}>Analysis complete</p>
                <p style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 4 }}>2.4s</p>
                <p style={{ fontSize: '0.7rem', fontWeight: 500, opacity: 0.65 }}>15+ validations checked</p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="nb-card" style={{ background: '#EDF6FD', padding: '18px 20px', transform: 'rotate(-0.5deg)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                <p style={{ fontSize: '0.72rem', fontWeight: 600, opacity: 0.7 }}>Content Quality</p>
                <span className="sticker" style={{ background: '#FFE566', fontSize: '0.68rem', padding: '3px 10px' }}>Excellent</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 20 }}>
                <p style={{ fontSize: '2rem', fontWeight: 700 }}>A+</p>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {[['Clarity', '95%'], ['Engagement', '92%']].map(([l, v]) => (
                    <div key={l} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 600 }}>
                      <span style={{ opacity: 0.65 }}>{l}</span><span>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
