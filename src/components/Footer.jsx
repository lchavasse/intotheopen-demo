export default function Footer() {
  return (
    <footer style={{ background: '#1A1A1A', padding: '48px 0 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 40, marginBottom: 40 }}>
          <div>
            <p style={{ fontWeight: 700, fontSize: '1.3rem', color: '#FFFDF7', marginBottom: 12 }}>intotheopen</p>
            <p style={{ fontSize: '0.875rem', color: '#FFFDF7', opacity: 0.6, lineHeight: 1.6, marginBottom: 20 }}>
              Content intelligence for predictable performance
            </p>
            <div style={{ display: 'flex', gap: 16 }}>
              {[
                { href: 'https://x.com/intotheopen_ai', label: 'X/Twitter' },
                { href: 'https://www.linkedin.com/company/intotheopen/', label: 'LinkedIn' },
                { href: 'https://www.instagram.com/intotheopen.ai', label: 'Instagram' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block', color: '#1A1A1A', fontWeight: 700, fontSize: '0.75rem',
                    background: '#FFE566', border: '2px solid #FFFDF7', borderRadius: 6,
                    padding: '4px 10px', textDecoration: 'none',
                    transition: 'transform 0.1s',
                  }}
                  className="hover:scale-110"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontWeight: 700, fontSize: '0.875rem', color: '#FFFDF7', marginBottom: 16 }}>Product</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[['Features', '#features'], ['Pricing', '#pricing']].map(([l, h]) => (
                <a key={l} href={h} style={{ fontSize: '0.875rem', color: '#FFFDF7', opacity: 0.6, textDecoration: 'none' }} className="hover:opacity-100">
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontWeight: 700, fontSize: '0.875rem', color: '#FFFDF7', marginBottom: 16 }}>Legal</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[['Privacy', '/privacy'], ['Terms', '/terms'], ['Security', '/security']].map(([l, h]) => (
                <a key={l} href={h} style={{ fontSize: '0.875rem', color: '#FFFDF7', opacity: 0.6, textDecoration: 'none' }} className="hover:opacity-100">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: '2px solid rgba(255,253,247,0.15)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: '0.8rem', color: '#FFFDF7', opacity: 0.4 }}>© 2026 intotheopen. All rights reserved.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#7BEA7B', display: 'inline-block' }} />
            <span style={{ fontSize: '0.8rem', color: '#FFFDF7', opacity: 0.4 }}>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
