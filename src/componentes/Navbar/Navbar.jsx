import React from 'react'
import './Navbar.css'
import CarWidget from '../CarWidget/CarWidget'

const Navbar = () => {
    return (
        <header>
            <h1>Cycwin</h1>
            <nav>
                <ul>
                    <li>Productos</li>
                    <li>Proyectos</li>
                    <li>Quienes somos</li>
                    <li>Contacto</li>
                </ul>
            </nav>
            <CarWidget />
        </header>
    )
}

export default Navbar