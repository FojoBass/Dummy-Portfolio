import React from 'react';
import './hero.css';
import { useGlobalContext } from '../../context'

const Hero = () => {
 const { rippleEff, handleNavClick } = useGlobalContext();

 function handleExploreClick(e) {
  rippleEff(e);
  setTimeout(() => {
   handleNavClick(e);
  }, 1000)
 }

 return (
  <section className="hero-sect" id="home">
   <article className="center-sect">
    <div className="hero-wrapper">
     <h1>hi</h1>
     <h1>
      <span>welcome</span> <span>to</span> <span>lorem</span>
     </h1>
     <button className="explore-btn" onClick={handleExploreClick} data-sect='services'>explore</button>
    </div>
   </article>
  </section>
 )
}

export default Hero