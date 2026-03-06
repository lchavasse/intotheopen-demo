const plans = [
  {
    name: 'Core',
    price: '$649',
    period: '/mo',
    desc: 'Access essential features to boost your content strategy.',
    features: ['5 content pieces per month', 'Basic validation engine', 'Standard optimization', 'Email support', 'Basic analytics'],
    cta: 'Get Started',
    bg: '#FFFDF7',
    btnBg: '#FFE566',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$1199',
    period: '/mo',
    desc: 'Unlock more features to scale your content impact.',
    features: ['25 content pieces per month', 'Advanced validation engine', 'Full optimization suite', 'Priority support', 'Advanced analytics', 'Team collaboration', 'Custom templates'],
    cta: 'Get Started',
    bg: '#FFE566',
    btnBg: '#1A1A1A',
    btnColor: '#FFFDF7',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: ' Pricing',
    desc: 'Comprehensive solutions for maximum efficiency.',
    features: ['Unlimited content pieces', 'Custom validation rules', 'Dedicated account manager', 'API access', 'SSO & advanced security', 'Custom integrations', 'SLA guarantee'],
    cta: 'Contact Us',
    bg: '#6BB5FF',
    btnBg: '#1A1A1A',
    btnColor: '#FFFDF7',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" style={{ background: '#FF9A56', borderBottom: '3px solid #1A1A1A', padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="sticker" style={{ background: '#FFFDF7', marginBottom: 16, display: 'inline-block' }}>
            Transparent Pricing
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, marginTop: 16 }}>
            Plans that scale with your ambition
          </h2>
          <p style={{ fontSize: '1rem', opacity: 0.85, marginTop: 12 }}>
            Start free, upgrade when you&apos;re ready. No hidden fees, no surprises.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, maxWidth: 960, margin: '0 auto', alignItems: 'start' }}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="nb-card"
              style={{
                background: plan.bg,
                padding: 28,
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                ...(plan.popular ? { transform: 'translateY(-8px) scale(1.02)' } : {}),
              }}
            >
              {plan.popular && (
                <div style={{ textAlign: 'center', marginBottom: 12 }}>
                  <span className="sticker" style={{ background: '#FF6B9D', transform: 'rotate(2deg)', display: 'inline-block', fontSize: '0.75rem', padding: '5px 14px' }}>
                    Most Popular
                  </span>
                </div>
              )}
              <div style={{ textAlign: 'center', marginBottom: 24 }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 8 }}>{plan.name}</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 4 }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 700 }}>{plan.price}</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 500, opacity: 0.7 }}>{plan.period}</span>
                </div>
                <p style={{ fontSize: '0.85rem', marginTop: 8, opacity: 0.8 }}>{plan.desc}</p>
              </div>
              <ul style={{ listStyle: 'none', marginBottom: 28, flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.875rem', lineHeight: 1.4 }}>
                    <span style={{ fontWeight: 700 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="nb-btn"
                style={{
                  background: plan.btnBg || '#FFE566',
                  color: plan.btnColor || '#1A1A1A',
                  justifyContent: 'center',
                  width: '100%',
                  textDecoration: 'none',
                }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
