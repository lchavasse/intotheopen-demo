import { useState } from 'react'

const faqs = [
  { q: 'What is intotheopen?', a: 'intotheopen is a content intelligence platform that helps marketing and communications teams forecast content performance before publishing, validate messaging at scale, and continuously optimise content after launch.' },
  { q: 'Who is intotheopen built for?', a: 'intotheopen is built for communications teams, marketing teams, strategic content teams, and brand and narrative leaders who publish content at scale and need data-driven confidence in their decisions.' },
  { q: 'How is intotheopen different from traditional analytics tools?', a: "Traditional analytics tools explain why content failed after launch. intotheopen predicts performance before you publish, so you can fix issues before spending budget on content that won't perform." },
  { q: 'Is intotheopen a content creation or generative AI tool?', a: "No. intotheopen is a content intelligence and performance platform. It analyses and validates content you create, predicts its performance, and helps optimise it — it doesn't generate content from scratch." },
  { q: 'How does intotheopen predict content performance before publishing?', a: 'We use a proprietary AI-powered validation engine that tests your content against 15+ performance signals, including synthetic audience simulations, tone analysis, message clarity scoring, and more.' },
  { q: 'What happens once content goes live?', a: 'Once published, intotheopen continuously monitors real performance data and automatically refines messaging to maximise impact — without requiring a full rewrite or new campaign.' },
  { q: 'Can intotheopen fit into our existing content workflow?', a: 'Yes. intotheopen is designed to integrate with your existing tools and platforms. You continue publishing on the channels you already use.' },
  { q: 'Does intotheopen use or store our proprietary content?', a: 'We take data privacy seriously. Your content is processed securely and not used to train shared models. Please contact us for detailed information on our data handling policies.' },
  { q: 'Is there a free plan or early access available?', a: 'We are currently offering early access to select teams. Request early access through our website to join the waitlist.' },
  { q: 'How long does it take to start seeing value?', a: 'Most teams see value immediately — from the first piece of content they run through the platform. Validation takes seconds, and predictive scores are available before you publish.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" style={{ background: '#FFFDF7', borderBottom: '3px solid #1A1A1A', padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="sticker" style={{ background: '#FFE566', marginBottom: 16, display: 'inline-block' }}>FAQ</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 700, marginTop: 16 }}>Frequently asked questions</h2>
          <p style={{ fontSize: '1rem', opacity: 0.55, marginTop: 12 }}>Everything you need to know about intotheopen</p>
        </div>
        <div style={{ maxWidth: 680, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                border: '3px solid #1A1A1A', borderRadius: 8,
                background: open === i ? '#A8D5F0' : '#FFFDF7',
                boxShadow: open === i ? '5px 5px 0 #1A1A1A' : '3px 3px 0 #1A1A1A',
                transition: 'background 0.2s ease, box-shadow 0.15s ease',
              }}
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 24px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 700, fontSize: '0.95rem', textAlign: 'left', color: '#1A1A1A' }}
              >
                {faq.q}
                <span style={{ fontSize: '1.3rem', fontWeight: 700, marginLeft: 12, flexShrink: 0, lineHeight: 1 }}>{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div style={{ padding: '0 24px 20px', fontSize: '0.9rem', lineHeight: 1.65, opacity: 0.8 }}>{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
