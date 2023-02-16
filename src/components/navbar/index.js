import React, { useEffect } from 'react';
import './navbar.css';
import { useGlobalContext } from '../../context';

const Navbar = () => {
 const { rippleEff, setIsSidebarOpen, isSidebarOpen, handleNavClick, navRef } = useGlobalContext();

 useEffect(() => {
  const navHeight = navRef.current.getBoundingClientRect().height;
  window.addEventListener('scroll', () => {
   navRef.current.classList.toggle('sticked', window.scrollY > navHeight);
  })
 }, [])
 return (
  <nav id="navbar" className={`${isSidebarOpen ? 'overlay' : ''}`} ref={navRef}>
   <section className="center-sect">
    <article className="nav-wrapper">
     <div className="logo no-select">
      <a href="#home" className='no-select'>JD</a>
     </div>

     <div className="nav-right">
      <ul className='nav-links'>
       <li className="nav-link"><a href="#home" data-sect='home'>home</a></li>
       <li className="nav-link"><a href="#about" onClick={handleNavClick} data-sect='about'>about</a></li>
       <li className="nav-link"><a href="#services" onClick={handleNavClick} data-sect='services'>services</a></li>
       <li className="nav-link"><a href="#contact" onClick={handleNavClick} data-sect='contact'>contact us</a></li>
      </ul>

      <div className={`menu-btn ${isSidebarOpen ? 'sidebar-open' : ''}`} onClick={(e) => {
       rippleEff(e);
       setIsSidebarOpen(!isSidebarOpen)
      }}>
       <hr />
       <hr />
       <hr />
      </div>
     </div>
    </article>
   </section>
  </nav>
 )
}

export default Navbar