import React from 'react'
import './Navbar.css'
import CartWidget from '../cartWidget/CartWidget'

const Navbar = () => {

  return (
    <div className='navbar-container'>
      <div className='navbar-container-logo'>
        <p>Logo</p>
      </div>
      <ul className='navbar-container-categorias'>
        <li className='categoria'>Cabello</li>
        <li className='categoria'>Uñas</li>
        <li className='categoria'>Pestañas</li>
      </ul>
      <CartWidget />
    </div>
  )
}

export default Navbar
