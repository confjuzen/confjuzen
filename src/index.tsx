import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import Home from './pages/Home.tsx'
import Three from './components/three.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <Home />

      <Three />
    </>
  </StrictMode>,
)
