import { Canvas } from '@react-three/fiber'
import Globe from '../assets/models/Globe'
import LazyCanvas from '../components/LazyCanvas'
import useScrollReveal from '../hooks/useScrollReveal'
import profile from '../data/profile.json'

export default function About() {
  const titleRef = useScrollReveal()
  const textRef = useScrollReveal()
  const globeRef = useScrollReveal()

  return (
    <section className="about" id="about">
      <div ref={titleRef} className="reveal">
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="about-content">
        <div ref={textRef} className="reveal-left">
          <div className="about-text">
            {profile.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="about-stats">
              {profile.stats.map((s, i) => (
                <div key={i} className="stat-card">
                  <div className="stat-number">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div ref={globeRef} className="reveal-right">
          <div style={{ position: 'relative', height: '400px' }}>
            <LazyCanvas>
              <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[5, 5, 5]} intensity={1} color="#00f5ff" />
                <pointLight position={[-5, -5, 5]} intensity={0.8} color="#ff00ff" />
                <Globe />
              </Canvas>
            </LazyCanvas>
          </div>
        </div>
      </div>
    </section>
  )
}
