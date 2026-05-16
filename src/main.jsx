import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HoverProvider } from './components/Context.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(

  <HoverProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </HoverProvider>
)
