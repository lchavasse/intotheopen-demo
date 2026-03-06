const steps = [
  {
    num: 1,
    bg: '#FFE566',
    title: 'Predict performance before you publish',
    desc: 'Forecast how content will land using AI-powered predictive scoring, so only content built to perform goes live.',
    cta: 'Book a demo',
    href: 'https://intotheopen-144935016950.us-west1.run.app/',
  },
  {
    num: 2,
    bg: '#6BB5FF',
    title: 'Validate at scale, instantly',
    desc: 'Understand your content\'s likely impact in seconds by validating against 15+ performance evaluations, including synthetic audience testing.',
    cta: 'Book a demo',
    href: 'https://intotheopen-144935016950.us-west1.run.app/',
  },
  {
    num: 3,
    bg: '#FF6B9D',
    title: 'Optimise messaging with evidence',
    desc: 'Generate and compare multiple optimised variants, each scored for predicted performance, making decisions clearer and faster.',
    cta: 'Get started',
    href: '#pricing',
  },
  {
    num: 4,
    bg: '#7BEA7B',
    title: 'Publish anywhere',
    desc: 'Intotheopen fits into your existing workflow. Publish on the platforms you already use.',
    cta: 'Get started',
    href: '#pricing',
  },
  {
    num: 5,
    bg: '#C4A1FF',
    title: 'Track and refine in real time',
    desc: 'Once live, performance is continuously monitored and messaging refined automatically to maximise performance.',
    cta: 'Get started',
    href: '#pricing',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ background: '#1A1A1A', borderBottom: '3px solid #1A1A1A', padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="sticker" style={{ background: '#FFE566', marginBottom: 16, display: 'inline-block' }}>
            The Process
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#FFFDF7', marginTop: 16 }}>
            From draft to performance
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#FFFDF7', opacity: 0.7, marginTop: 12, maxWidth: 480, margin: '12px auto 0' }}>
            A continuous workflow that predicts, validates, and optimises content across its entire lifecycle.
          </p>
        </div>
        <div style={{ maxWidth: 700, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
          {steps.map((step) => (
            <div key={step.num} className="nb-card" style={{ background: step.bg, padding: '32px 36px', position: 'relative' }}>
              <div style={{
                position: 'absolute', top: -16, left: 28,
                width: 40, height: 40,
                background: '#1A1A1A', color: '#FFFDF7',
                borderRadius: 8, border: '3px solid #1A1A1A',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700, fontSize: '1rem',
                boxShadow: '3px 3px 0 #555'
              }}>
                {step.num}
              </div>
              <div style={{ textAlign: 'center', paddingTop: 16 }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 12 }}>{step.title}</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, opacity: 0.85, maxWidth: 520, margin: '0 auto 20px' }}>{step.desc}</p>
                <a
                  href={step.href}
                  target={step.href.startsWith('http') ? '_blank' : undefined}
                  rel={step.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{ fontWeight: 700, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: 4 }}
                >
                  {step.cta} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
