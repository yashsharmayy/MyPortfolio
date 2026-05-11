import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HoverProvider } from './components/Contexthover.jsx'

createRoot(document.getElementById('root')).render(

  <HoverProvider>
    <App />
  </HoverProvider>
)
