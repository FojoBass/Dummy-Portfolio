import React from 'react';
import { FaUserTie } from 'react-icons/fa';
import { FiHelpCircle, FiGift } from 'react-icons/fi';
import { TfiHeadphoneAlt, TfiWallet } from 'react-icons/tfi';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import './services.css';
import { useGlobalContext } from '../../context';

const Services = () => {
 const { servicesRef } = useGlobalContext();
 return (
  <section id="services" className="bg" ref={servicesRef}>
   <article className="center-sect">
    <h1 className="section-heading">services</h1>
    <div className="services-wrapper">
     <article className="service-opt">
      <div className="header">
       <div className="icon-wrapper"><FaUserTie />
       </div>
       <h3 className="header-title">+1000 customers</h3>
      </div>
      <p className="more-info">
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, sit perferendis corrupti quidem itaque explicabo cum et, vel eveniet odit maxime, dignissimos reprehenderit facere odio!
      </p>
     </article>

     <article className="service-opt">
      <div className="header">
       <div className="icon-wrapper"><FiHelpCircle /></div>
       <h3 className="header-title">24/7 support</h3>
      </div>
      <p className="more-info">
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis dignissimos ut nostrum, id recusandae voluptas, vitae animi harum consequatur tempora ab ullam repellat, ipsam quaerat?
      </p>
     </article>

     <article className="service-opt">
      <div className="header">
       <div className="icon-wrapper"><FiGift /></div>
       <h3 className="header-title">great sales offer</h3>
      </div>
      <p className="more-info">
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sequi in. Aperiam aut nam dolorem facilis libero fuga iure veritatis.
      </p>
     </article>

     <article className="service-opt">
      <div className="header">
       <div className="icon-wrapper"><TfiHeadphoneAlt /></div>
       <h3 className="header-title">help direct line</h3>
      </div>
      <p className="more-info">
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere dolorum, voluptas fugit nulla sapiente voluptatibus quaerat harum assumenda esse quibusdam ullam atque eius eum voluptatem?
      </p>
     </article>

     <article className="service-opt">
      <div className="header">
       <div className="icon-wrapper"><TfiWallet /></div>
       <h3 className="header-title">secure payments</h3>
      </div>
      <p className="more-info">
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, fugiat architecto eveniet est, hic quas iure, iusto sit similique amet illum magnam pariatur quasi enim possimus sunt id nulla quibusdam!
      </p>
     </article>

     <article className="service-opt">
      <div className="header">
       <div className="icon-wrapper"><HiOutlineChatBubbleLeftRight /></div>
       <h3 className="header-title">support via chat</h3>
      </div>
      <p className="more-info">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut molestias porro, assumenda facere, est et ad quasi excepturi explicabo natus odit soluta tempora nulla iusto?
      </p>
     </article>
    </div>
   </article>
  </section>
 )
}

export default Services