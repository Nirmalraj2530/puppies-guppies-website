import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import styles from './StickyMobileBar.module.css';

const StickyMobileBar = () => {
  return (
    <div className={styles.stickyBar}>
      <a href="tel:08438531230" className={styles.stickyBtn} style={{ backgroundColor: 'var(--primary)' }}>
        <Phone size={20} />
        Call Now
      </a>
      <a href="https://wa.me/918438531230" target="_blank" rel="noreferrer" className={styles.stickyBtn} style={{ backgroundColor: '#25d366' }}>
        <MessageCircle size={20} />
        WhatsApp
      </a>
    </div>
  );
};

export default StickyMobileBar;
