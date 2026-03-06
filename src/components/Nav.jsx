import { useState } from 'react'

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: '#A8D5F0',
      borderBottom: '3px solid #1A1A1A',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <a href="/" style={{ fontWeight: 700, fontSize: '1.4rem', textDecoration: 'none', color: '#1A1A1A' }}>
            intotheopen
          </a>
          <div className="hidden md:flex items-center" style={{ gap: 32 }}>
            {[['Features', '#features'], ['How it Works', '#how-it-works'], ['Pricing', '#pricing'], ['FAQ', '#faq']].map(([label, href]) => (
              <a
                key={label}
                href={href}
                style={{ fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', color: '#1A1A1A' }}
                onMouseEnter={e => e.target.style.textDecoration = 'underline'}
                onMouseLeave={e => e.target.style.textDecoration = 'none'}
              >
                {label}
              </a>
            ))}
          </div>
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
        {mobileOpen && (
          <div style={{ borderTop: '3px solid #1A1A1A', padding: '16px 0', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[['Features', '#features'], ['How it Works', '#how-it-works'], ['Pricing', '#pricing'], ['FAQ', '#faq']].map(([label, href]) => (
              <a key={label} href={href} style={{ fontWeight: 600, textDecoration: 'none', color: '#1A1A1A' }} onClick={() => setMobileOpen(false)}>
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
