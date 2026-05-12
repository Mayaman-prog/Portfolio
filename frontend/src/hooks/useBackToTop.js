import { useState, useEffect } from 'react'

export default function useBackToTop(threshold = 400) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handle = () => setVisible(window.scrollY > threshold)
    window.addEventListener('scroll', handle)
    return () => window.removeEventListener('scroll', handle)
  }, [threshold])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return { visible, scrollToTop }
}
