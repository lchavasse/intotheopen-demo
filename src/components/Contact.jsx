import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section id="contact" style={{ background: '#6BB5FF', borderBottom: '3px solid #1A1A1A', padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="sticker" style={{ background: '#FFE566', marginBottom: 16, display: 'inline-block' }}>
              Get in touch
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginTop: 16, lineHeight: 1.1 }}>
              Let&apos;s build smarter content together
            </h2>
            <p style={{ fontSize: '1.05rem', marginTop: 16, opacity: 0.85 }}>
              Ready to transform how your team creates content? Book a demo or reach out for partnership inquiries.
            </p>
          </div>
          <div className="nb-card" style={{ background: '#FFFDF7', padding: '40px 44px' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: 24 }} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', marginBottom: 8 }}>
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={{
                    width: '100%', padding: '12px 16px', border: '3px solid #1A1A1A',
                    borderRadius: 8, fontFamily: 'inherit', fontSize: '1rem',
                    background: '#FFFDF7', outline: 'none', boxSizing: 'border-box',
                  }}
                />
              </div>
              <div>
                <label htmlFor="email" style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', marginBottom: 8 }}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@company.com"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={{
                    width: '100%', padding: '12px 16px', border: '3px solid #1A1A1A',
                    borderRadius: 8, fontFamily: 'inherit', fontSize: '1rem',
                    background: '#FFFDF7', outline: 'none', boxSizing: 'border-box',
                  }}
                />
              </div>
              <div>
                <label htmlFor="message" style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', marginBottom: 8 }}>
                  Message <span style={{ fontWeight: 400, opacity: 0.6 }}>(Optional)</span>
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us about your content goals or what you'd like to discuss..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{
                    width: '100%', padding: '12px 16px', border: '3px solid #1A1A1A',
                    borderRadius: 8, fontFamily: 'inherit', fontSize: '1rem',
                    background: '#FFFDF7', outline: 'none', minHeight: 140,
                    resize: 'vertical', boxSizing: 'border-box',
                  }}
                />
              </div>
              <button type="submit" className="nb-btn nb-btn-fg" style={{ justifyContent: 'center', fontSize: '1rem', padding: '14px 28px' }}>
                Book a Demo Call →
              </button>
              <p style={{ textAlign: 'center', fontSize: '0.85rem', opacity: 0.6 }}>
                We typically respond within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
