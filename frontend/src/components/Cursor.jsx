export default function Cursor({ pos, hovering }) {
  return (
    <>
      <div
        className={`cursor ${hovering ? 'hovering' : ''}`}
        style={{ left: pos.x - 10, top: pos.y - 10 }}
      />
      <div
        className="cursor-dot"
        style={{ left: pos.x - 2, top: pos.y - 2 }}
      />
    </>
  )
}
