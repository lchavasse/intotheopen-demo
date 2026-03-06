import { useRef, useState, useEffect } from 'react'

const steps = [
  {
    num: 1,
    bg: '#FFE566',
    title: 'Predict performance before you publish',
    desc: 'Forecast how content will land using AI-powered predictive scoring, so only content built to perform goes live.',
    cta: 'Book a demo',
    href: 'https://intotheopen-144935016950.us-west1.run.app/',
    external: true,
  },
  {
    num: 2,
    bg: '#A8D5F0',
    title: 'Validate at scale, instantly',
    desc: "Understand your content's likely impact in seconds by validating against 15+ performance evaluations, including synthetic audience testing.",
    cta: 'Book a demo',
    href: 'https://intotheopen-144935016950.us-west1.run.app/',
    external: true,
  },
  {
    num: 3,
    bg: '#C8E8FA',
    title: 'Optimise messaging with evidence',
    desc: 'Generate and compare multiple optimised variants, each scored for predicted performance, making decisions clearer and faster.',
    cta: 'Get started',
    href: '#pricing',
  },
  {
    num: 4,
    bg: '#D4EAF8',
    title: 'Publish anywhere',
    desc: 'Intotheopen fits into your existing workflow. Publish on the platforms you already use.',
    cta: 'Get started',
    href: '#pricing',
  },
  {
    num: 5,
    bg: '#7BBFE8',
    title: 'Track and refine in real time',
    desc: 'Once live, performance is continuously monitored and messaging refined automatically to maximise performance.',
    cta: 'Get started',
    href: '#pricing',
  },
]

const NAV_HEIGHT = 64
const SCROLL_PER_STEP = 600

export default function HowItWorks() {
  const sectionRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        if (!sectionRef.current) return
        const rect = sectionRef.current.getBoundingClientRect()
        const scrolledIn = -rect.top
        const totalScrollable = SCROLL_PER_STEP * (steps.length - 1)
        const clamped = Math.max(0, Math.min(scrolledIn, totalScrollable))
        const newStep = Math.min(Math.round(clamped / SCROLL_PER_STEP), steps.length - 1)
        setActiveStep(prev => prev === newStep ? prev : newStep)
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const sectionHeight =
    SCROLL_PER_STEP * (steps.length - 1) +
    (typeof window !== 'undefined' ? window.innerHeight - NAV_HEIGHT : 700)

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      style={{ background: '#1A1A1A', height: sectionHeight, position: 'relative' }}
    >
      <div style={{
        position: 'sticky',
        top: NAV_HEIGHT,
        height: `calc(100vh - ${NAV_HEIGHT}px)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 32px',
        overflow: 'hidden',
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 36, flexShrink: 0 }}>
          <span className="sticker" style={{ background: '#A8D5F0', display: 'inline-block', marginBottom: 12 }}>
            The Process
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, color: '#EDF6FD', marginTop: 12 }}>
            From draft to performance
          </h2>
          <p style={{ fontSize: '1rem', color: '#EDF6FD', opacity: 0.55, marginTop: 8, maxWidth: 440 }}>
            A continuous workflow that predicts, validates, and optimises content across its entire lifecycle.
          </p>
        </div>

        {/* Card stack */}
        <div style={{ position: 'relative', width: '100%', maxWidth: 620, flexShrink: 0 }}>
          {steps.map((step, i) => {
            const isActive = i === activeStep
            const isPast = i < activeStep
            return (
              <div
                key={step.num}
                style={{
                  position: i === 0 ? 'relative' : 'absolute',
                  top: 0, left: 0, right: 0,
                  opacity: isActive ? 1 : 0,
                  transform: isActive
                    ? 'translateY(0) scale(1)'
                    : isPast
                      ? 'translateY(-24px) scale(0.97)'
                      : 'translateY(24px) scale(0.97)',
                  transition: 'opacity 0.45s ease, transform 0.45s ease',
                  pointerEvents: isActive ? 'auto' : 'none',
                }}
              >
                <div className="nb-card" style={{ background: step.bg, padding: '40px 48px', position: 'relative', textAlign: 'center' }}>
                  <div style={{
                    position: 'absolute', top: -18, left: 32,
                    width: 44, height: 44,
                    background: '#1A1A1A', color: '#EDF6FD',
                    border: '3px solid #EDF6FD', borderRadius: 8,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: '1.1rem',
                    boxShadow: '3px 3px 0 rgba(255,255,255,0.2)',
                  }}>
                    {step.num}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16, marginTop: 8 }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '1rem', lineHeight: 1.65, opacity: 0.85, maxWidth: 480, margin: '0 auto 28px' }}>
                    {step.desc}
                  </p>
                  <a
                    href={step.href}
                    target={step.external ? '_blank' : undefined}
                    rel={step.external ? 'noopener noreferrer' : undefined}
                    className="nb-btn nb-btn-fg"
                    style={{ display: 'inline-flex', textDecoration: 'none' }}
                  >
                    {step.cta} →
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Progress dots */}
        <div style={{ display: 'flex', gap: 10, marginTop: 36, flexShrink: 0 }}>
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                width: i === activeStep ? 28 : 10,
                height: 10,
                borderRadius: 100,
                background: i === activeStep ? steps[activeStep].bg : 'rgba(255,255,255,0.2)',
                border: '2px solid rgba(255,255,255,0.3)',
                transition: 'all 0.35s ease',
              }}
            />
          ))}
        </div>

        {activeStep < steps.length - 1 && (
          <p style={{
            color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem',
            marginTop: 18, fontWeight: 600, letterSpacing: '0.08em', flexShrink: 0,
          }}>
            SCROLL TO CONTINUE ↓
          </p>
        )}
      </div>
    </section>
  )
}
