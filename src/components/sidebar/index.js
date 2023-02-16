import React from 'react'
import { useGlobalContext } from '../../context';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './sidebar.css';

const Sidebar = () => {
 const { isSidebarOpen, setIsSidebarOpen, handleNavClick } = useGlobalContext();

 const handleLinkClick = (e) => {
  setIsSidebarOpen(false);
  handleNavClick(e);
 }
 return (
  <section id="sidebar" className={`${isSidebarOpen ? 'open' : ''}`}>
   <article className="center-sect">
    <div className="sidebar-wrapper">
     <ul className="nav-links">
      <li className="nav-link"><a href="#home" onClick={handleLinkClick} data-sect='home'>home</a></li>
      <li className="nav-link"><a href="#about" onClick={handleLinkClick} data-sect='about'>about</a></li>
      <li className="nav-link"><a href="#services" onClick={handleLinkClick} data-sect='services'>services</a></li>
      <li className="nav-link"><a href="#contact" onClick={handleLinkClick} data-sect='contact'>contact us</a></li>
     </ul>

     <ul className="social-links">
      <li className="social-link"><a href="#" id='fb' onClick={handleLinkClick}><FaFacebookF /></a></li>
      <li className="social-link"><a href="#" id='tw' onClick={handleLinkClick}><FaTwitter /></a></li>
      <li className="social-link"><a href="#" id='in' onClick={handleLinkClick}><FaLinkedinIn /></a></li>
      <li className="social-link"><a href="#" id='git' onClick={handleLinkClick}><FaGithub /></a></li>
     </ul>
    </div>
   </article>
  </section>
 )
}

export default Sidebar