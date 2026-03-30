import React from 'react';
import { motion } from 'framer-motion';
import { Star, Phone, MapPin, ShieldCheck, Heart, ShoppingBag } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <motion.div 
            className={styles.heroTrustBadges}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.trustBadge}>
              <Star size={16} fill="#fbbf24" color="#fbbf24" />
              <span>4.7 Google Rating</span>
            </div>
            <div className={styles.trustBadge}>
              <ShieldCheck size={16} color="#22c55e" />
              <span>37+ Trusted Reviews</span>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Treat Your Pet to <span style={{color: 'var(--primary)', backgroundImage: 'linear-gradient(to right, #2563eb, #22c55e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Premium Care</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            India's most loved pet store brand. We offer a curated selection of premium pet food, toys, and professional grooming services for your furry and finned friends.
          </motion.p>
          
          <motion.div 
            className={styles.heroActions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="tel:08438531230" className="btn btn-primary btn-xl">
              <Phone size={24} />
              Call Now
            </a>
            <a href="https://maps.google.com/?q=Puppies+2+Guppies+Gobichettipalayam" target="_blank" rel="noreferrer" className="btn btn-outline btn-xl">
              <MapPin size={24} />
              Get Directions
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className={styles.heroImageArea}
          initial={{ opacity: 0, x: 50, rotate: 5 }}
          animate={{ opacity: 1, x: 0, rotate: 2 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <img 
            src="/assets/hero_v2.png" 
            alt="Puppies 2 Guppies Premium Pet Store" 
            className={styles.heroImage} 
          />
          
          {/* Floating Cards for Trust */}
          <motion.div 
            className={`${styles.floatingCard} ${styles.card1}`}
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div style={{ background: 'var(--green-50)', padding: '10px', borderRadius: '12px' }}>
              <Heart size={24} color="#22c55e" fill="#22c55e" />
            </div>
            <div>
              <p style={{ fontWeight: 800, fontSize: '1.2rem', margin: 0 }}>500+</p>
              <p style={{ fontSize: '0.8rem', margin: 0 }}>Happy Customers</p>
            </div>
          </motion.div>
          
          <motion.div 
            className={`${styles.floatingCard} ${styles.card2}`}
            initial={{ y: 0 }}
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div style={{ background: 'var(--blue-50)', padding: '10px', borderRadius: '12px' }}>
              <ShoppingBag size={24} color="#2563eb" fill="#2563eb" />
            </div>
            <div>
              <p style={{ fontWeight: 800, fontSize: '1.2rem', margin: 0 }}>Premium</p>
              <p style={{ fontSize: '0.8rem', margin: 0 }}>Global Brands</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
