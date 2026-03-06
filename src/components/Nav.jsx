import { useState } from 'react'

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-nb-yellow border-b-3 border-nb-fg" style={{ borderBottom: '3px solid #1A1A1A' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
        <div className="flex items-center justify-between" style={{ height: 64 }}>
          <a href="/" style={{ fontWeight: 700, fontSize: '1.4rem', textDecoration: 'none', color: '#1A1A1A' }}>
            intotheopen
          </a>
          <div className="hidden md:flex items-center gap-8">
            {[['Features', '#features'], ['How it Works', '#how-it-works'], ['Pricing', '#pricing'], ['FAQ', '#faq']].map(([label, href]) => (
              <a
                key={label}
                href={href}
                style={{ fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', color: '#1A1A1A' }}
                className="hover:underline"
              >
                {label}
              </a>
            ))}
          </div>
          <button
            className="md:hidden p-2"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
        {mobileOpen && (
          <div style={{ borderTop: '3px solid #1A1A1A', padding: '16px 0' }} className="md:hidden flex flex-col gap-4">
            {[['Features', '#features'], ['How it Works', '#how-it-works'], ['Pricing', '#pricing'], ['FAQ', '#faq']].map(([label, href]) => (
              <a key={label} href={href} style={{ fontWeight: 600, textDecoration: 'none' }} onClick={() => setMobileOpen(false)}>
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
