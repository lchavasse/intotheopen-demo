import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => e.preventDefault()

  const inputStyle = {
    width: '100%', padding: '12px 16px', border: '3px solid #1A1A1A',
    borderRadius: 8, fontFamily: 'inherit', fontSize: '1rem',
    background: '#EDF6FD', outline: 'none', boxSizing: 'border-box',
    color: '#1A1A1A',
  }

  return (
    <section id="contact" style={{ background: '#A8D5F0', borderBottom: '3px solid #1A1A1A', padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="sticker" style={{ background: '#FFE566', marginBottom: 16, display: 'inline-block' }}>
              Get in touch
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginTop: 16, lineHeight: 1.1 }}>
              Let&apos;s build smarter content together
            </h2>
            <p style={{ fontSize: '1.05rem', marginTop: 16, opacity: 0.8 }}>
              Ready to transform how your team creates content? Book a demo or reach out for partnership inquiries.
            </p>
          </div>
          <div className="nb-card" style={{ background: '#EDF6FD', padding: '40px 44px' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: 24 }} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', marginBottom: 8 }}>Your name</label>
                <input type="text" id="name" placeholder="John Doe" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={inputStyle} />
              </div>
              <div>
                <label htmlFor="email" style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', marginBottom: 8 }}>Email Address</label>
                <input type="email" id="email" placeholder="john@company.com" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle} />
              </div>
              <div>
                <label htmlFor="message" style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', marginBottom: 8 }}>
                  Message <span style={{ fontWeight: 400, opacity: 0.5 }}>(Optional)</span>
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us about your content goals..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, minHeight: 140, resize: 'vertical' }}
                />
              </div>
              <button type="submit" className="nb-btn nb-btn-yellow" style={{ justifyContent: 'center', fontSize: '1rem', padding: '14px 28px' }}>
                Book a Demo Call →
              </button>
              <p style={{ textAlign: 'center', fontSize: '0.85rem', opacity: 0.55 }}>We typically respond within 24 hours</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
