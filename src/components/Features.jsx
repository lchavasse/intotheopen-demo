const features = [
  {
    bg: '#FFE566',
    title: 'Validate at Scale',
    sub: 'Instant feedback without focus groups',
    desc: 'Run your content through our proprietary validation engine, testing against 10+ performance signals and synthetic audience simulations in seconds.',
  },
  {
    bg: '#6BB5FF',
    title: 'Predict Performance',
    sub: 'Know what works before you publish',
    desc: 'Forecast how your content will perform with AI-powered predictive analytics, so you can invest only in content that delivers ROI.',
  },
  {
    bg: '#FF6B9D',
    title: 'Optimise Messaging',
    sub: 'Transform drafts into high-impact content',
    desc: 'Our optimisation engine generates multiple variants of your content, showing side-by-side comparisons with predicted performance scores.',
  },
  {
    bg: '#7BEA7B',
    title: 'Real-Time Tracking',
    sub: 'Stay ahead after you hit publish',
    desc: 'Monitor engagement metrics live, track KPIs in real time, and see exactly how your content is landing with your audience.',
  },
  {
    bg: '#C4A1FF',
    title: 'Continuous Refinement',
    sub: 'Content that gets smarter over time',
    desc: 'intotheopen automatically fine-tunes messaging after publication, ensuring your content always reaches its full potential.',
  },
]

const intoItems = [
  'Predicts content performance before launch',
  'Reduces wasted spend on underperforming campaigns',
  'Delivers insight in seconds, not weeks',
  'Improves live content without rewrites or relaunches',
]

const tradItems = [
  'Success only measured after launch — budget already wasted',
  'Slow, costly focus groups; feedback takes weeks or months',
  'Content is static once published; improvements require full rewrites',
]

const badges = ['Communications teams', 'Marketing teams', 'Strategic content teams', 'Brand and narrative leaders']

export default function Features() {
  return (
    <section id="features" style={{ background: '#FFFDF7', borderBottom: '3px solid #1A1A1A', padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="sticker" style={{ background: '#FF9A56', marginBottom: 16, display: 'inline-block' }}>
            Features
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 700, marginTop: 16 }}>Our features</h2>
          <p style={{ fontSize: '1.05rem', opacity: 0.75, marginTop: 12 }}>
            Supercharge your content with AI-driven proactive content intelligence
          </p>
        </div>

        {/* Feature cards — intentionally varied grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 20 }}>
          {features.slice(0, 3).map((f) => (
            <div key={f.title} className="nb-card" style={{ background: f.bg, padding: 28 }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: '0.85rem', fontWeight: 600, fontStyle: 'italic', marginBottom: 12, opacity: 0.75 }}>{f.sub}</p>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.6, opacity: 0.85 }}>{f.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, maxWidth: 760, margin: '0 auto 72px' }}>
          {features.slice(3).map((f) => (
            <div key={f.title} className="nb-card" style={{ background: f.bg, padding: 28 }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: '0.85rem', fontWeight: 600, fontStyle: 'italic', marginBottom: 12, opacity: 0.75 }}>{f.sub}</p>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.6, opacity: 0.85 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Why teams choose */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700 }}>Why teams choose intotheopen</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, maxWidth: 900, margin: '0 auto 64px' }}>
          <div className="nb-card" style={{ background: '#7BEA7B', padding: '28px 32px' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 20, textAlign: 'center' }}>✦ intotheopen</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {intoItems.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ fontWeight: 700, fontSize: '1rem', marginTop: 2 }}>✓</span>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="nb-card" style={{ background: '#FFFDF7', padding: '28px 32px' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 20, textAlign: 'center' }}>✗ Traditional methods</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {tradItems.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ fontWeight: 700, fontSize: '1rem', marginTop: 2, color: '#FF6B9D' }}>✗</span>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.5, opacity: 0.8 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: '1.1rem', fontWeight: 700, maxWidth: 600, margin: '0 auto' }}>
            Traditional tools explain failure after the fact. intotheopen helps teams design success.
          </p>
        </div>

        {/* Built for teams */}
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, marginBottom: 12 }}>
            Built for teams who can&apos;t afford to guess
          </h2>
          <p style={{ fontSize: '1rem', opacity: 0.75, marginBottom: 32, maxWidth: 520, margin: '0 auto 32px' }}>
            intotheopen is designed for teams responsible for performance, reputation, and outcomes.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
            {badges.map((badge, i) => {
              const bgs = ['#FFE566', '#6BB5FF', '#FF6B9D', '#C4A1FF']
              return (
                <div
                  key={badge}
                  className="nb-card"
                  style={{ background: bgs[i % bgs.length], padding: '10px 20px', display: 'inline-flex', alignItems: 'center', gap: 8 }}
                >
                  <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>→ {badge}</span>
                </div>
              )
            })}
          </div>
          <p style={{ fontSize: '0.85rem', fontStyle: 'italic', opacity: 0.6, marginTop: 16 }}>
            Used by in-house teams and agencies delivering content at scale.
          </p>
        </div>
      </div>
    </section>
  )
}
