import { Canvas } from '@react-three/fiber'
import CyberOrb from '../assets/models/CyberOrb'
import OrbitingParticles from '../assets/models/OrbitingParticles'
import LazyCanvas from '../components/LazyCanvas'
import Navbar from '../components/Navbar'
import useTyping from '../hooks/useTyping'
import profile from '../data/profile.json'

export default function Hero() {
  const typedText = useTyping(profile.roles)

  return (
    <section className="hero">
      <div className="hero-canvas">
        <LazyCanvas>
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <ambientLight intensity={0.3} />
            <pointLight position={[5, 5, 5]} intensity={1} color="#00f5ff" />
            <pointLight position={[-5, -5, 5]} intensity={0.8} color="#ff00ff" />
            <pointLight position={[0, 0, 10]} intensity={0.5} color="#ffff00" />
            <CyberOrb />
            <OrbitingParticles />
          </Canvas>
        </LazyCanvas>
      </div>

      <Navbar />

      <div className="hero-content">
        <h1 className="hero-title">{profile.name.toUpperCase()}</h1>
        <div className="hero-subtitle">
          <div className="typing-wrapper">
            <span className="typing-text">{typedText}</span>
          </div>
        </div>
        <div className="hero-tagline">
          {profile.tagline.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <a href={profile.resumeUrl} className="resume-btn">Download Resume ↓</a>
      </div>
    </section>
  )
}
