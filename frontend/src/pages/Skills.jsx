import { Canvas } from '@react-three/fiber'
import SkillIcon from '../assets/models/SkillIcon'
import LazyCanvas from '../components/LazyCanvas'
import useOnScreen from '../hooks/useOnScreen'
import useScrollReveal from '../hooks/useScrollReveal'
import skills from '../data/skills.json'

function SkillCard({ skill, index }) {
  const [ref, visible] = useOnScreen(0.2)

  return (
    <div
      ref={ref}
      className="skill-card"
      style={{
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)'
      }}
    >
      <div style={{ position: 'relative', height: '120px', marginBottom: '1rem' }}>
        <LazyCanvas>
          <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[2, 2, 2]} intensity={1} color={skill.color} />
            <SkillIcon color={skill.color} shape={skill.shape} size={0.6} />
          </Canvas>
        </LazyCanvas>
      </div>
      <div style={{ marginBottom: '0.5rem' }}>
        <img src={skill.icon} alt={skill.name} style={{ width: '48px', height: '48px' }} />
      </div>
      <div className="skill-name">{skill.name}</div>
      <div className="skill-desc">{skill.description}</div>
      <div className="skill-level">
        <div className="skill-progress" style={{
          width: visible ? `${skill.level}%` : '0%',
          transitionDelay: `${index * 0.15 + 0.3}s`
        }} />
      </div>
    </div>
  )
}

export default function Skills() {
  const titleRef = useScrollReveal()

  return (
    <section className="skills" id="skills">
      <div ref={titleRef} className="reveal">
        <h2 className="section-title">Skills & Expertise</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} />
        ))}
      </div>
    </section>
  )
}
