import React from 'react';
import { ShoppingBag, Globe, Mail, Phone, MessageCircle } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerLogoArea}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'white', marginBottom: '24px' }}>
              <img src="/assets/logo.png" alt="Logo" style={{ height: '60px', borderRadius: '12px' }} />
              <h3 style={{ margin: 0 }}>Puppies 2 Guppies</h3>
            </div>
            <p>Welcome to Puppies 2 Guppies, your go-to store for all pet essentials! We offer a wide range of premium pet food, toys, grooming products, and accessories to keep your pets happy and healthy.</p>
            <div className={styles.social} style={{ marginTop: '30px' }}>
              <a href="#" className={styles.socialIcon}><Globe size={20} /></a>
              <a href="#" className={styles.socialIcon}><Mail size={20} /></a>
              <a href="#" className={styles.socialIcon}><Phone size={20} /></a>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h4>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#home" className={styles.footerLink}>Home</a></li>
              <li><a href="#about" className={styles.footerLink}>About Us</a></li>
              <li><a href="#services" className={styles.footerLink}>Products</a></li>
              <li><a href="#services" className={styles.footerLink}>Grooming</a></li>
              <li><a href="#reviews" className={styles.footerLink}>Reviews</a></li>
              <li><a href="#contact" className={styles.footerLink}>Contact Us</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4>Categories</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#" className={styles.footerLink}>Dogs & Puppies</a></li>
              <li><a href="#" className={styles.footerLink}>Cats & Kittens</a></li>
              <li><a href="#" className={styles.footerLink}>Fish & Aquariums</a></li>
              <li><a href="#" className={styles.footerLink}>Birds & Small Pets</a></li>
              <li><a href="#" className={styles.footerLink}>Pet Grooming</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4>Contact Info</h4>
            <ul className={styles.footerLinks}>
              <li style={{ color: '#adb5bd' }}>No 100/114, Sathy Road, near Abhi SK Hospital, Nallagoundampalayam, Tamil Nadu 638453</li>
              <li><a href="tel:08438531230" className={styles.footerLink}>084385 31230</a></li>
              <li style={{ color: '#adb5bd' }}>Open until 9:30 PM</li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© 2026 Puppies 2 Guppies. All rights reserved.</p>
          <p>Handcrafted for Pet Lovers</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
