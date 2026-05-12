import profile from '../data/profile.json'

export default function Footer() {
  return (
    <footer style={{ marginTop: '4rem', width: '100%', padding: '2rem', textAlign: 'center', borderTop: '1px solid rgba(0, 245, 255, 0.2)' }}>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        &copy; 2024 {profile.name}. All rights reserved.
      </p>
    </footer>
  )
}
