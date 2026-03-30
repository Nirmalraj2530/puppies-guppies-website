import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Heart, ExternalLink } from 'lucide-react';
import styles from './Reviews.module.css';

const reviews = [
  { 
    name: 'Rajeswari Rajagopal', 
    text: '“<b>Amazing selection of fish and pets.</b> The store is very clean and the staff is extremely helpful. Highly recommend!”', 
    rating: 5,
    initials: 'RR',
    color: '#3b82f6'
  },
  { 
    name: 'Priya Rajesh', 
    text: '“Had such a <b>great experience with the grooming!</b> They treated my dog like their own. Very professional and caring.”', 
    rating: 5,
    initials: 'PR',
    color: '#10b981'
  },
  { 
    name: 'Karthik Raja', 
    text: '“Kids friendly shop with <b>best quality at affordable cost</b>. The guppies are so colorful and healthy!”', 
    rating: 5,
    initials: 'KR',
    color: '#8b5cf6'
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className={styles.reviewsSection}>
      <div className="section-title">
        <div className="badge badge-blue" style={{ marginBottom: '16px' }}>
          Our Reputation
        </div>
        <h2>Trusted by Pet Families</h2>
        <p>Don’t just take our word for it—join hundreds of happy pet parents in Gobichettipalayam.</p>
      </div>

      <motion.div 
        className={styles.googleBadge}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className={styles.googleStats}>
          <div className={styles.ratingBig}>4.7</div>
          <div>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={24} fill="#fbbf24" color="#fbbf24" />)}
            </div>
            <p style={{ margin: 0, fontWeight: 700, fontSize: '1.1rem' }}>Excellent Rating</p>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>37+ Genuine Google Reviews</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <div className="badge badge-green">
            <ShieldCheck size={18} />
            Verified Google Store
          </div>
          <a href="https://maps.google.com/?q=Puppies+2+Guppies+Gobichettipalayam" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '12px 24px' }}>
            Write a Review
            <ExternalLink size={18} />
          </a>
        </div>
      </motion.div>

      <div className={styles.reviewGrid}>
        {reviews.map((rev, idx) => (
          <motion.div 
            key={rev.name}
            className={styles.reviewCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div className={styles.stars}>
              {[...Array(rev.rating)].map((_, i) => <Star key={i} size={20} fill="#fbbf24" color="#fbbf24" />)}
            </div>
            <p className={styles.reviewText} dangerouslySetInnerHTML={{ __html: rev.text }} />
            <div className={styles.reviewer}>
              <div className={styles.avatar} style={{ backgroundColor: `${rev.color}15`, color: rev.color }}>
                {rev.initials}
              </div>
              <div>
                <h4>{rev.name}</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--green-600)', fontWeight: 700, fontSize: '0.8rem' }}>
                  <ShieldCheck size={14} />
                  Verified Pet Parent
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
