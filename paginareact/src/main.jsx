import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import Navbar from "./Navbar"
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Footer />
  </StrictMode>,
)
