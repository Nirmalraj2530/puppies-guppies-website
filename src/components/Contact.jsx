import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageSquare, ExternalLink } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className="section-title">
        <div className="badge badge-green" style={{ marginBottom: '16px' }}>
          Contact Us
        </div>
        <h2>Visit Our Pet Haven</h2>
        <p>Conveniently located and ready to welcome you and your pets from 9 AM to 9:30 PM.</p>
      </div>

      <motion.div 
        className={styles.contactContainer}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className={styles.contactInfoArea}>
          <div className={styles.openBadge}>
            <div className={styles.openDot} />
            OPEN NOW UNTIL 9:30 PM
          </div>
          
          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}><MapPin size={32} /></div>
              <div className={styles.infoContent}>
                <h4>Our Location</h4>
                <p>No 100/114, Sathy Road, near Abhi SK Hospital,<br />Nallagoundampalayam, Gobichettipalayam,<br />Tamil Nadu 638453, India</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}><Phone size={32} /></div>
              <div className={styles.infoContent}>
                <h4>Call Our Team</h4>
                <p>Have questions? Reach out to our experts.</p>
                <a href="tel:08438531230" style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary)' }}>084385 31230</a>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}><Clock size={32} /></div>
              <div className={styles.infoContent}>
                <h4>Store Timing</h4>
                <p>Monday - Sunday<br />9:00 AM – 9:30 PM</p>
              </div>
            </div>
          </div>

          <div className={styles.quickActions}>
            <a href="tel:08438531230" className="btn btn-primary" style={{ flex: 1 }}>Call Now</a>
            <a href="https://wa.me/918438531230" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ flex: 1 }}>WhatsApp</a>
            <a href="https://maps.google.com/?q=Puppies+2+Guppies+Gobichettipalayam" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ flex: 1 }}>Directions</a>
          </div>
        </div>

        <div className={styles.mapArea}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.123456789!2d77.4321!3d11.4567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDI3JzI0LjEiTiA3N8KwMjUnNTUuNiJF!5e0!3m2!1sen!2sin!4v1234567890" 
            width="100%" 
            height="100%" 
            style={{ border: 0, minHeight: '400px' }} 
            allowFullScreen="" 
            loading="lazy" 
            title="Puppies 2 Guppies Location"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
