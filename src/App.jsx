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

function App() {
  return (
    <div className="app">
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
    </div>
  );
}

export default App;
