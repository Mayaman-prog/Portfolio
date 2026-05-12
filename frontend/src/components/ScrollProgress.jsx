export default function ScrollProgress({ progress }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${progress}%`,
        height: '3px',
        background: 'linear-gradient(90deg, #00f5ff, #ff00ff, #ffff00)',
        zIndex: 1000,
        transition: 'width 0.1s ease-out'
      }}
    />
  )
}
