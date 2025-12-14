import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './Home.jsx'
import Producto from './Producto.jsx'
import Suscripcion from './Suscripcion.jsx'
import Contactanos from './Contactanos.jsx'

export default function Navbar () {
    return (
        <>
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient">
                    <div className="container">
                        <Link to='/' className="navbar-brand">ElectroHogar</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="menu">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                    <Link to='/' className="nav-link">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                    <Link to='/producto' className="nav-link">Producto</Link>
                            </li>
                            <li className="nav-item">
                                    <Link to='/suscripcion' className="nav-link">Suscripción</Link>
                            </li>
                            <li className="nav-item">
                                    <Link to='/contactanos' className="nav-link">Contáctanos</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path = '/' element = { <Home />} />
                    <Route path = '/suscripcion' element = { <Suscripcion />} />
                    <Route path = '/producto' element = { <Producto />} />
                    <Route path = '/contactanos' element = { <Contactanos />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}