function StatCard({ bg, children, rotate = 0, className = '' }) {
  return (
    <div
      className={`nb-card bg-[${bg}] p-6 ${className}`}
      style={{ background: bg, transform: rotate ? `rotate(${rotate}deg)` : undefined }}
    >
      {children}
    </div>
  )
}

export default function Hero() {
  return (
    <section style={{ background: '#FFFDF7', paddingTop: 96, paddingBottom: 80, borderBottom: '3px solid #1A1A1A' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left */}
          <div style={{ flex: 1, maxWidth: 560 }}>
            <div className="mb-6">
              <span className="sticker" style={{ background: '#FF6B9D', transform: 'rotate(-2deg)', display: 'inline-block' }}>
                Content Intelligence
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 1.05, marginBottom: 24 }}>
              Engineer content performance before you publish.
            </h1>
            <p style={{ fontSize: '1.15rem', lineHeight: 1.6, marginBottom: 40, color: '#1A1A1A', opacity: 0.75, maxWidth: 460 }}>
              Forecast impact, validate messaging, and optimise content across its entire lifecycle.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a href="https://intotheopen-144935016950.us-west1.run.app/" target="_blank" rel="noopener noreferrer" className="nb-btn nb-btn-yellow" style={{ fontSize: '1.05rem', padding: '14px 32px' }}>
                Request early access →
              </a>
              <a href="#how-it-works" className="nb-btn nb-btn-white" style={{ fontSize: '1.05rem', padding: '14px 32px' }}>
                See how it works
              </a>
            </div>
          </div>

          {/* Right: stat cards */}
          <div className="hidden lg:block" style={{ flex: 1, position: 'relative', height: 480 }}>
            {/* Performance Score */}
            <div className="nb-card" style={{ position: 'absolute', top: 20, right: 40, width: 240, padding: 24, background: '#FFE566' }}>
              <p style={{ fontSize: '0.8rem', fontWeight: 600, marginBottom: 8 }}>Performance Score</p>
              <p style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1 }}>87<span style={{ fontSize: '1rem', fontWeight: 500 }}>/100</span></p>
              <div style={{ marginTop: 12, height: 8, background: '#1A1A1A', borderRadius: 4, overflow: 'hidden' }}>
                <div style={{ width: '87%', height: '100%', background: '#FFFDF7' }} />
              </div>
              <p style={{ fontSize: '0.75rem', marginTop: 8, fontWeight: 600 }}>Above industry average</p>
            </div>

            {/* Predicted Engagement */}
            <div className="nb-card" style={{ position: 'absolute', top: 120, left: 0, width: 280, padding: 24, background: '#FF6B9D' }}>
              <p style={{ fontSize: '0.8rem', fontWeight: 600, marginBottom: 8, color: '#1A1A1A' }}>Predicted Engagement</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <p style={{ fontSize: '2.8rem', fontWeight: 700, lineHeight: 1 }}>+42%</p>
                <span className="sticker" style={{ background: '#FFE566', fontSize: '0.75rem', padding: '4px 12px' }}>High</span>
              </div>
              <p style={{ fontSize: '0.75rem', marginTop: 10, fontWeight: 600 }}>Estimated reach: 24,500 users</p>
            </div>

            {/* Audience Match */}
            <div className="nb-card" style={{ position: 'absolute', bottom: 100, right: 20, width: 240, padding: 24, background: '#6BB5FF' }}>
              <p style={{ fontSize: '0.8rem', fontWeight: 600, marginBottom: 12 }}>Audience Match</p>
              {['Target personas', 'Tone alignment', 'Message clarity'].map((item) => (
                <div key={item} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 500 }}>{item}</span>
                  <span style={{ fontWeight: 700 }}>✓</span>
                </div>
              ))}
              <div style={{ marginTop: 12, paddingTop: 10, borderTop: '2px solid #1A1A1A' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>✓ Ready to publish</span>
              </div>
            </div>

            {/* Content Quality */}
            <div className="nb-card" style={{ position: 'absolute', bottom: 10, left: 20, width: 220, padding: 24, background: '#7BEA7B' }}>
              <p style={{ fontSize: '0.8rem', fontWeight: 600, marginBottom: 8 }}>Content Quality</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <p style={{ fontSize: '2.5rem', fontWeight: 700 }}>A+</p>
                <span className="sticker" style={{ background: '#FFE566', fontSize: '0.75rem', padding: '4px 12px' }}>Excellent</span>
              </div>
              <div>
                {[['Clarity', '95%'], ['Engagement', '92%']].map(([l, v]) => (
                  <div key={l} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 600, marginBottom: 4 }}>
                    <span>{l}</span><span>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Analysis complete */}
            <div className="nb-card" style={{ position: 'absolute', top: 40, left: 60, width: 190, padding: 20, background: '#C4A1FF' }}>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, marginBottom: 6 }}>Analysis complete</p>
              <p style={{ fontSize: '2rem', fontWeight: 700 }}>2.4s</p>
              <p style={{ fontSize: '0.75rem', fontWeight: 500 }}>15+ validations checked</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
