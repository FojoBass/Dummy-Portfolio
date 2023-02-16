import React, { useRef, useEffect } from 'react';
import './contact.css'
import { HiLocationMarker } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { useGlobalContext } from '../../context';

const Contact = () => {
 const { rippleEff, contactRef } = useGlobalContext();
 const contactTopRef = useRef();
 const contactBottomRef = useRef();

 const handleContactSubmit = (e) => {
  e.preventDefault();
 }

 useEffect(() => {
  const handleResize = () => {
   if (window.innerWidth >= 800) {
    if (contactTopRef.current) {
     const contactTopHeight = contactTopRef.current.getBoundingClientRect().height;
     const contactBottomHeight = contactBottomRef.current.getBoundingClientRect().height;
     if (contactTopHeight !== contactBottomHeight) {
      console.log(contactTopHeight);
      contactBottomRef.current.style.height = `${contactTopHeight}px`;
     }
    }
   } else contactBottomRef.current.style.height = `auto`;
  }

  handleResize();
  window.addEventListener('resize', handleResize);

  return (() => window.removeEventListener('resize', handleResize))
 }, []);

 return (
  <section id="contact" className="bg" ref={contactRef}>
   <article className="center-sect">
    <h1 className="section-heading">contact us</h1>
    <div className="contact-wrapper">
     <div className="contact-top" ref={contactTopRef}>
      <div className="contact-details">
       <h3 className="heading-title">contact details</h3>
       <article className="contact-detail">
        <div className="icon-wrapper"><HiLocationMarker /></div>
        <p className="detail">28 abcd def, street name, nvd city, BGV </p>
       </article>

       <article className="contact-detail">
        <div className="icon-wrapper"><BsFillTelephoneFill /></div>
        <div className="detail">
         <p>+123 4567 8901</p>
         <p>+0 1234 5667 89</p>
        </div>
       </article>

       <article className="contact-detail">
        <div className="icon-wrapper"><IoMdMail /></div>
        <div className="detail">
         <p>info@fonex.com</p>
         <p>fonex@gmail.com</p>
        </div>
       </article>
      </div>

      <div className="contact-form-wrapper">
       <h3 className="heading-title">send message</h3>
       <form className="contact-form" onSubmit={handleContactSubmit}>
        <input type="text" className="form-input" placeholder='Your name here' />
        <input type="email" className="form-input" placeholder='Your email here' />
        <textarea name="comment" cols="30" rows="10" placeholder='Your comment here...'></textarea>
        <button type="submit" className="contact-submit-btn" onClick={e => rippleEff(e)}>submit message</button>
       </form>
      </div>
     </div>

     <div className="contact-bottom" ref={contactBottomRef}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.07653506027!2d2.949757314327579!3d6.881434795027389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b0f90ea316961%3A0xd2d50165ccda1562!2sABSOL%20Farms%20Nig.%20Ltd!5e0!3m2!1sen!2sng!4v1676304728096!5m2!1sen!2sng" width="600" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='google-map'></iframe>
     </div>
    </div>
   </article>
  </section>
 )
}

export default Contact