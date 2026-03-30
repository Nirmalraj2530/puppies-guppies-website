import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import styles from './CtaStrip.module.css';

const CtaStrip = () => {
  return (
    <div className={styles.ctaStrip}>
      <motion.div 
        className={styles.ctaContent}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <ShoppingBag size={48} className={styles.ctaIcon} />
        <h2>Visit Us Today – Your Pet Deserves the Best</h2>
        <p>Expert care, premium products, and a friendly atmosphere await you at Puppies 2 Guppies.</p>
        <div className={styles.ctaActions}>
          <a href="tel:08438531230" className={styles.ctaPrimary}>Get in Touch</a>
          <a href="#contact" className={styles.ctaSecondary}>View Location</a>
        </div>
      </motion.div>
    </div>
  );
};

export default CtaStrip;
