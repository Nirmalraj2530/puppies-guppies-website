import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Tags, ShoppingBag, Heart } from 'lucide-react';
import styles from './Features.module.css';

const features = [
  {
    icon: <ShieldCheck size={32} />,
    title: 'Premium Quality',
    description: 'We only stock the best global brands for your pet\'s health and happiness.',
    color: '#2563eb'
  },
  {
    icon: <Tags size={32} />,
    title: 'Affordable Pricing',
    description: 'Get premium pet products at the best prices in Gobichettipalayam.',
    color: '#22C55E'
  },
  {
    icon: <Heart size={32} />,
    title: 'Friendly Service',
    description: 'Our expert team loves pets and provides personalized care tips.',
    color: '#fb6f92'
  },
  {
    icon: <ShoppingBag size={32} />,
    title: 'Wide Variety',
    description: 'From tiny guppies to big golden retrievers, we have it all.',
    color: '#f59e0b'
  }
];

const Features = () => {
  return (
    <section id="features" className={styles.featuresSection}>
      <div className="section-title">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="badge badge-green"
          style={{ marginBottom: '16px' }}
        >
          Why Choose Us
        </motion.div>
        <h2>Experience the Best for Your Pets</h2>
        <p>Built on trust, quality, and a deep love for animals. We're more than just a pet store.</p>
      </div>

      <div className={styles.featureGrid}>
        {features.map((feature, idx) => (
          <motion.div 
            key={feature.title}
            className={styles.featureCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className={styles.iconWrapper} style={{ backgroundColor: `${feature.color}15`, color: feature.color }}>
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
