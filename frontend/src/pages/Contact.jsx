import { Canvas } from '@react-three/fiber'
import ContactOrb from '../assets/models/ContactOrb'
import LazyCanvas from '../components/LazyCanvas'
import useScrollReveal from '../hooks/useScrollReveal'
import Footer from '../components/Footer'
import profile from '../data/profile.json'

export default function Contact() {
  const titleRef = useScrollReveal()
  const topRef = useScrollReveal()
  const formRef = useScrollReveal()
  const socialRef = useScrollReveal()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent! (Demo only)')
  }

  return (
    <section className="contact" id="contact">
      <div ref={titleRef} className="reveal">
        <h2 className="section-title">Get In Touch</h2>
      </div>

      <div className="contact-content">
        <div ref={topRef} className="reveal-scale" style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ position: 'relative', height: '200px' }}>
              <LazyCanvas>
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[5, 5, 5]} intensity={1} color="#00f5ff" />
                  <pointLight position={[-5, -5, 5]} intensity={0.8} color="#ff00ff" />
                  <ContactOrb />
                </Canvas>
              </LazyCanvas>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                Interested in collaboration or have a project in mind? Let's connect and build something amazing together.
              </p>
            </div>
          </div>
        </div>

        <div ref={formRef} className="reveal">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" placeholder="Tell me about your project..." required />
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        <div ref={socialRef} className="reveal-scale">
          <div className="social-links">
            {profile.social.map((s, i) => (
              <a key={i} href={s.url} className="social-link" aria-label={s.label}>{s.label.slice(0, 2)}</a>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </section>
  )
}
