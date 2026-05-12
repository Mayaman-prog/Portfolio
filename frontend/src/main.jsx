import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const _warn = console.warn
console.warn = (...args) => {
  if (args[0]?.includes?.('THREE.Clock')) return
  _warn(...args)
}

createRoot(document.getElementById('root')).render(<App />)
