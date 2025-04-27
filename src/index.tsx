import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.scss'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx'
import Three from './components/three.tsx'
import Graphics from './pages/graphics.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>

      

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/graphics" element={<Graphics />} />
       
      </Routes>
      <Three />
    </Router>
  </StrictMode>,
)
