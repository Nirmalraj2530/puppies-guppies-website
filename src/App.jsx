import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import TrustBar from './components/TrustBar';
import Products from './components/Products';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CtaStrip from './components/CtaStrip';
import StickyMobileBar from './components/StickyMobileBar';
import WhatsAppButton from './components/WhatsAppButton';

import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div 
      className="app"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navbar />
      <main>
        <Hero />
        <Features />
        <TrustBar />
        <Products />
        <Reviews />
        <CtaStrip />
        <Contact />
      </main>
      <Footer />
      <StickyMobileBar />
      <WhatsAppButton />
    </motion.div>
  );
}

export default App;
