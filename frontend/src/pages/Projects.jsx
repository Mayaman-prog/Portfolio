import { Canvas } from '@react-three/fiber'
import ProjectKnot from '../assets/models/ProjectKnot'
import LazyCanvas from '../components/LazyCanvas'
import useOnScreen from '../hooks/useOnScreen'
import useScrollReveal from '../hooks/useScrollReveal'
import projects from '../data/projects.json'

function ProjectCard({ project, index }) {
  const [ref, visible] = useOnScreen(0.15)

  return (
    <div
      ref={ref}
      className="project-card"
      style={{
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(50px)'
      }}
    >
      <div className="project-image">
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.3 }}>
          <LazyCanvas>
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[3, 3, 3]} intensity={1} color={project.colors[0]} />
              <pointLight position={[-3, -3, 3]} intensity={0.8} color={project.colors[1]} />
              <ProjectKnot color={project.colors[0]} />
            </Canvas>
          </LazyCanvas>
        </div>
        <img src={project.icon} alt={project.title} style={{ position: 'relative', zIndex: 1, width: '64px', height: '64px' }} />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span className="project-tag" key={i}>{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a href="#" className="project-link primary">View Project</a>
          <a href="#" className="project-link secondary">Source Code</a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const titleRef = useScrollReveal()

  return (
    <section className="projects" id="projects">
      <div ref={titleRef} className="reveal">
        <h2 className="section-title">Featured Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
