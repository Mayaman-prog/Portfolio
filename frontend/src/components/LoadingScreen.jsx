export default function LoadingScreen({ visible }) {
  return (
    <div className={`loading-screen ${visible ? '' : 'hidden'}`}>
      <div className="loader-ring" />
    </div>
  )
}
