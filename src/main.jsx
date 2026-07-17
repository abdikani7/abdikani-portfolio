// node madulos
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// css links
import './index.css'
// Component
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
