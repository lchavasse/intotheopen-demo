import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="nb-btn nb-btn-yellow"
      style={{
        position: 'fixed', bottom: 32, right: 32, zIndex: 40,
        width: 48, height: 48, padding: 0, borderRadius: 8,
        justifyContent: 'center', alignItems: 'center', fontSize: '1.2rem',
      }}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  )
}
