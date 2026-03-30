import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Star, Sparkles } from 'lucide-react';
import styles from './TrustBar.module.css';

const TrustBar = () => {
  return (
    <div className={styles.trustBar}>
      <div className={styles.container}>
        <motion.div 
          className={styles.stat}
          whileHover={{ scale: 1.05 }}
        >
          <Users size={32} />
          <div>
            <h3>500+</h3>
            <p>Happy Customers</p>
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.stat}
          whileHover={{ scale: 1.05 }}
        >
          <Heart size={32} />
          <div>
            <h3>10+</h3>
            <p>Expert Pet Lovers</p>
          </div>
        </motion.div>

        <motion.div 
          className={styles.stat}
          whileHover={{ scale: 1.05 }}
        >
          <Star size={32} />
          <div>
            <h3>4.7</h3>
            <p>Google Rating</p>
          </div>
        </motion.div>

        <motion.div 
          className={styles.stat}
          whileHover={{ scale: 1.05 }}
        >
          <Sparkles size={32} />
          <div>
            <h3>100%</h3>
            <p>Quality Guaranteed</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TrustBar;
