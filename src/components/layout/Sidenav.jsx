import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidenav = ({ onOpen }) => {
  const [openNav, setOpenNav] = useState(false)

  return (
    <div className='side-nav-header'>
      <header className='header'>
        <button
          className='header__button'
          id='btnNav'
          type='button'
          onClick={() => setOpenNav(true)}
        >
          <i className='material-icons'>menu</i>
        </button>
      </header>
      <nav className={`side-nav ${openNav ? 'side-nav--open' : ''}`}>
        <div className='side-nav__links'>
          <Link to='/' className='side-nav__link side-nav__link--active'>
            <i className='material-icons'>home</i>
              Home
            </Link>
          <a href='#/' className='side-nav__link' onClick={() => onOpen()}>
            <i className='material-icons'>how_to_reg</i>
              About
            </a>
        </div>
        <div className='side-nav__overlay' onClick={() => setOpenNav(false)}></div>
      </nav>
    </div>
  )
}

export default Sidenav;
