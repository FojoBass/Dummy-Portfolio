import React, { useContext, useState, useRef } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
 const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 const aboutRef = useRef(null);
 const servicesRef = useRef(null);
 const contactRef = useRef(null);
 const navRef = useRef(null);

 const rippleEff = (e) => {
  const x = e.clientX - e.target.getBoundingClientRect().x;
  const y = e.clientY - e.target.getBoundingClientRect().y;
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  e.target.appendChild(ripple);

  setTimeout(() => {
   ripple.remove();
  }, 1000)
 }

 const handleNavClick = (e) => {
  const { sect } = e.target.dataset;
  const aboutTop = aboutRef.current.offsetTop;
  const contactTop = contactRef.current.offsetTop;
  const servicesTop = servicesRef.current.offsetTop;
  const navHeight = navRef.current.getBoundingClientRect().height;
  if (sect !== 'home') {
   e.preventDefault();
   switch (sect) {
    case 'about':
     window.scrollTo(0, aboutTop - navHeight);
     break;
    case 'services':
     window.scrollTo(0, servicesTop - navHeight);
     break;
    case 'contact':
     window.scrollTo(0, contactTop - navHeight);
     break;
    default:
     console.log('You be Winch?');
   }
  }
 }

 const sharedProps = { rippleEff, isSidebarOpen, setIsSidebarOpen, aboutRef, servicesRef, contactRef, handleNavClick, navRef };

 return <AppContext.Provider value={sharedProps}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
 return useContext(AppContext);
}

