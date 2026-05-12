import { useState, useEffect, useCallback } from 'react'

export default function useTyping(words, { typeSpeed = 80, deleteSpeed = 40, pause = 2000 } = {}) {
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  const tick = useCallback(() => {
    const current = words[textIndex]

    if (!deleting && charIndex < current.length) {
      setCharIndex(c => c + 1)
    } else if (!deleting && charIndex === current.length) {
      setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIndex > 0) {
      setCharIndex(c => c - 1)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setTextIndex(i => (i + 1) % words.length)
    }
  }, [charIndex, deleting, textIndex, words, pause])

  useEffect(() => {
    const speed = deleting ? deleteSpeed : typeSpeed
    const id = setTimeout(tick, speed)
    return () => clearTimeout(id)
  }, [tick, deleting, deleteSpeed, typeSpeed])

  return words[textIndex].substring(0, charIndex)
}
