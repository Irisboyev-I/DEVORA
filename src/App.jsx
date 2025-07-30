import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Articles from './pages/Articles/Articles';
import Footer from './components/Footer/Footer';
import ArticlesMore from './pages/Articles/ArticlesMore';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './constants/ScrollToTop';

function App() {
  const location = useLocation(); 

  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
          <Route path='/articles/:id' element={<ArticlesMore />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
