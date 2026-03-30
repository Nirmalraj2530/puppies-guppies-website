import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Scissors, Sparkles, Heart, Zap } from 'lucide-react';
import styles from './Products.module.css';

const categories = [
  { 
    title: 'For Dogs', 
    description: 'From high-protein diets to interactive toys, we have everything to keep your best friend happy.',
    image: '/assets/dog_cat.png',
    icon: <Sparkles size={20} />
  },
  { 
    title: 'For Cats', 
    description: 'Specialty grains, cozy scratching posts, and stylish accessories for your feline friend.',
    image: '/assets/cat.png',
    icon: <Heart size={20} />
  },
  { 
    title: 'Fish & Aquarium', 
    description: 'Expert-grade guppy care, colorful species, and professional aquarium supplies.',
    image: '/assets/aquarium.png',
    icon: <Zap size={20} />
  },
  { 
    title: 'For Birds', 
    description: 'Nutritious seeds, comfortable cages, and fun play-gyms for your feathered family.',
    image: '/assets/bird.png',
    icon: <Sparkles size={20} />
  },
];

const Products = () => {
  return (
    <section id="services" className={styles.productsSection}>
      <div className="section-title">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="badge badge-blue"
          style={{ marginBottom: '16px' }}
        >
          Our Product Range
        </motion.div>
        <h2>Everything Your Pet Needs</h2>
        <p>Expert-curated products from top global brands, ensuring quality and affordability for every pet parent.</p>
      </div>

      <div className={styles.categoryGrid}>
        {categories.map((cat, idx) => (
          <motion.div 
            key={cat.title} 
            className={styles.categoryCard}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div className={styles.imageWrapper}>
              <img src={cat.image} alt={cat.title} className={styles.categoryImage} />
            </div>
            <div className={styles.categoryContent}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--primary)', marginBottom: '12px', fontWeight: 700 }}>
                {cat.icon}
                <span style={{ fontSize: '0.85rem', textTransform: 'uppercase' }}>Available Now</span>
              </div>
              <h3>{cat.title}</h3>
              <p>{cat.description}</p>
              <div className={styles.cardFooter}>
                <button className="btn btn-outline" style={{ width: '100%', justifyContent: 'space-between' }}>
                  Explore Products
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className={styles.serviceHighlight}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.serviceContent}>
          <div className="badge badge-green" style={{ marginBottom: '24px' }}>
            <Scissors size={16} />
            Pet Grooming Spa
          </div>
          <h2>Professional Spa & Grooming Services</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '40px' }}>Treat your pet to a relaxing day! Our certified grooming experts handle with care, ensuring your pet looks and feels amazing.</p>
          
          <div className={styles.benefitList}>
            <div className={styles.benefitItem}>
              <div className={styles.benefitCheck}><CheckCircle2 size={18} /></div>
              <span>Full Styling & Haircut</span>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitCheck}><CheckCircle2 size={18} /></div>
              <span>Deep Cleansing Bath</span>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitCheck}><CheckCircle2 size={18} /></div>
              <span>Nail Clipping & Buffing</span>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitCheck}><CheckCircle2 size={18} /></div>
              <span>Ear & Tick Cleaning</span>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginTop: '50px' }}>
            <a href="tel:08438531230" className="btn btn-primary btn-xl">Book Appointment</a>
            <a href="#contact" className="btn btn-outline btn-xl">View Pricing</a>
          </div>
        </div>
        <img src="/assets/hero_v2.png" alt="Pet Grooming" className={styles.serviceImage} />
      </motion.div>
    </section>
  );
};

export default Products;
