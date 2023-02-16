import React from 'react';
import './footer.css'

const Footer = () => {
 return (
  <section id="footer">
   <div className="center-sect">
    <p> &copy; {new Date().getFullYear()} JD All rights reserved</p>
   </div>
  </section>
 )
}

export default Footer