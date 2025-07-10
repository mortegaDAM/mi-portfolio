import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Tasteflix from './pages/tasteflix';
import Lydia from './pages/lydia';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import './index.css';
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};


function App() {
  
  
  return (

    <>
      <ScrollToTop />
     
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tasteflix" element={<Tasteflix />} />
        <Route path="/lydia" element={<Lydia />} />
        
        

      </Routes>
    </>
  );
}

export default App;
