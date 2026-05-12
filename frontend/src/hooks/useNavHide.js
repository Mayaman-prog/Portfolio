import { useState, useEffect, useRef } from 'react'

export default function useNavHide() {
  const [hidden, setHidden] = useState(false)
  const last = useRef(0)

  useEffect(() => {
    const handle = () => {
      const cur = window.scrollY
      setHidden(cur > last.current && cur > 100)
      last.current = cur
    }

    window.addEventListener('scroll', handle)
    return () => window.removeEventListener('scroll', handle)
  }, [])

  return hidden
}
