import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Headphones, ThumbsUp } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutGrid}>
        <motion.div 
          className={styles.aboutImage}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src="/assets/hero.png" alt="Our Store" className={styles.mainImage} />
          <motion.div 
            className={styles.floatingCard}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.avatarGroup}>
              <div className={styles.avatar} style={{ backgroundColor: '#ff9a9e' }}></div>
              <div className={styles.avatar} style={{ backgroundColor: '#a1c4fd' }}></div>
              <div className={styles.avatar} style={{ backgroundColor: '#c2e9fb' }}></div>
            </div>
            <div>
              <p style={{ fontWeight: 'bold' }}>Our Team</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>10+ Pet Experts</p>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className={styles.aboutContent}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--blue-600)', marginBottom: '16px' }}>
            <Heart size={20} fill="var(--blue-600)" />
            <span style={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Born From Love</span>
          </div>
          <h2>Dedicated to Every Pet</h2>
          <p className={styles.aboutText}>
            Welcome to Puppies 2 Guppies, your go-to store for all pet essentials! We offer a wide range of premium pet food, toys, grooming products, and accessories to keep your pets happy and healthy. 
            Whether you have a dog, cat, bird, or fish, we have products tailored to their needs.
          </p>
          <p className={styles.aboutText}>
            Our friendly team of animal lovers is here to help you choose the best items and provide expert care tips. With a focus on quality and affordability, we make pet parenting easy and enjoyable.
          </p>
          
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>4.7 ⭐</div>
              <div className={styles.statLabel}>Google Rating</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Pet Products</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Care Focused</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
