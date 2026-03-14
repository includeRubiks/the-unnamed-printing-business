import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './HomePage.tsx'
import BuySomething from './BuySomething.tsx'
import BecomeAnAssociate from './BecomeAnAssociate.tsx'
import About from './About.tsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/the-unnamed-printing-business/'>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}/>
        <Route path="/buysomething" element={<BuySomething></BuySomething>}/>
        <Route path="/becomeanassociate" element={<BecomeAnAssociate></BecomeAnAssociate>}/>
        <Route path="/about" element={<About></About>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
