import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import '../Style/Navbar.css';
import Imagenes from '../assets/Imagenes';

export const Navbar = () => {
    return (
        <nav id='Navbar' className="navbar navbar-expand-lg navbar-dark bg-dark">

            
                <Link
                    className="navbar-brand"
                    to="/"
                >
                    <img src={Imagenes.Logo} alt="Logo" />

                </Link>
            
            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                        to="/Areas"
                    >
                        Instalaciones
                    </NavLink>
                </div>
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                        to="/Empleados"
                    >
                        Empleados
                    </NavLink>
                </div>
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                        to="/AboutUs"
                    >
                        Nosotros
                    </NavLink>
                </div>
            </div>

        </nav>
    )
}