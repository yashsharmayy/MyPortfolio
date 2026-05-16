import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HoverProvider } from './components/Context.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(

  <HoverProvider>
    <BrowserRouter basename='MyPortfolio'>
      <App />
    </BrowserRouter>
  </HoverProvider>
)
