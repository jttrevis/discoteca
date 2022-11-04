import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export const Navbar = () => {


  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked")
      setMenuClass("menu visible")
    }
    else {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <div >
      <nav className='burger'>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class} ></div>
          <div className={burger_class} ></div>
          <div className={burger_class} ></div>
        </div>
      </nav>

      <div className={menu_class}>
        <div className='menu-list'>
          <Link to="/">Inicio</Link>
          <Link to="/contact">Contatos</Link>
          <Link to="/gallery">Galeria</Link>
        </div>

      </div>

      <div className='menu-pc'>
        <Link to="/">Inicio</Link>
        <Link to="/contact">Contatos</Link>
        <Link to="/gallery">Galeria</Link>
      </div>
    </div>
  )

}
