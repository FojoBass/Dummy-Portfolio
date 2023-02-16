import React from 'react';
import img from '../../assets/about-img.jpg';
import './about.css';
import { useGlobalContext } from '../../context';

const About = () => {
 const { aboutRef } = useGlobalContext();
 return (
  <section id="about" className='bg' ref={aboutRef}>
   <article className="center-sect">
    <h1 className="section-heading">about us</h1>
    <div className="about-wrapper">
     <div className="img-wrapper">
      <img src={img} alt="about-img" />
     </div>
     <p className="text-wrapper">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat odit doloribus modi, corporis debitis accusamus soluta velit placeat. Sunt perspiciatis quasi, optio nihil doloribus laborum laboriosam hic illo et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat odit doloribus modi, corporis debitis accusamus soluta velit placeat. Sunt perspiciatis quasi, optio nihil doloribus laborum laboriosam hic illo et dignissimos.</p>
    </div>
   </article>
  </section>
 )
}

export default About