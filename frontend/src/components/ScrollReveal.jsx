import useScrollReveal from '../hooks/useScrollReveal'

export default function ScrollReveal({ children, className = 'reveal', style = {} }) {
  const ref = useScrollReveal()

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}
