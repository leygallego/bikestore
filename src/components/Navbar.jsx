import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


function Navbar() {

        const [clicked, setClicked] = useState(false);
        const handleClick = ()=>{
            setClicked(!clicked)
        }

    return (

        <nav>
            
                <div className="logo-bikestore">
                    Bikestore<font>app</font>
                </div>
                <div className="menu-icon" onClick={handleClick}>
                {clicked ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faBars}/>}
                </div>
            <ul className={clicked ? "menu-list" : "menu-list close"}>
                <li>
                    <NavLink className={({isActive}) => (isActive ? "active" : "noActive")} to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => (isActive ? "active" : "noActive")} to='/marcas'>Motos</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => (isActive ? "active" : "noActive")} to='/categorias'>Categorías</NavLink>
                </li>
            </ul>
            
           

        </nav>

        )
}

export default Navbar
