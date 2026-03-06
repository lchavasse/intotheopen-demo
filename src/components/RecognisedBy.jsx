const logos = [
  { src: '/ai-forge.png', alt: 'AI FORGE', className: 'h-10 md:h-14' },
  { src: '/purposetech.png', alt: 'PurposeTech', className: 'h-12 md:h-20' },
  { src: '/aispymedia.png', alt: 'AI SPY', className: 'h-12 md:h-20' },
  { src: '/saastock.png', alt: 'SaaStock', className: 'h-10 md:h-14' },
  { src: '/nvidia.png', alt: 'NVIDIA', className: 'h-10 md:h-14' },
  { src: '/vestd.png', alt: 'vestd', className: 'h-10 md:h-16' },
  { src: '/bae.png', alt: 'BAE Systems', className: 'h-10 md:h-14' },
]

export default function RecognisedBy() {
  return (
    <section style={{ background: '#C4A1FF', borderBottom: '3px solid #1A1A1A', padding: '60px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          <div style={{ flexShrink: 0 }}>
            <p style={{ fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Recognised by</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '36px 48px' }}>
            {logos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className={`${logo.className} w-auto object-contain transition-all duration-200 hover:scale-110`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
