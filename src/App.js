import React, { useRef, useEffect } from 'react';
import {
  About, Contact, Footer, Navbar, Services, Hero,
  Sidebar
} from './components';
import { FaArrowUp } from 'react-icons/fa';
const App = () => {
  const scrollRef = useRef();

  useEffect(() => {
    window.onscroll = (e) => {
      if (window.scrollY > 500) scrollRef.current.className = 'active'
      else scrollRef.current.className = 'opacity-hide';
    }
  }, [])
  return (
    <>
      <div id="go-up" className='opacity-hide' ref={scrollRef} onClick={(e) => {
        window.scrollTo(0, 0);
      }}><FaArrowUp /></div>
      <Navbar />
      <Sidebar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App