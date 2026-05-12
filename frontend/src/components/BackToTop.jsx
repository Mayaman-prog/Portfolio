export default function BackToTop({ visible, onClick }) {
  return (
    <button
      className={`back-to-top ${visible ? 'visible' : ''}`}
      onClick={onClick}
      aria-label="Back to top"
    >
      ↑
    </button>
  )
}
