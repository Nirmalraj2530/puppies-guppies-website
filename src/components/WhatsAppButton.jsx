import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/918438531230"
      target="_blank"
      rel="noreferrer"
      style={{
        position: 'fixed',
        bottom: '100px',
        right: '30px',
        zIndex: 999,
        background: '#25d366',
        color: 'white',
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 32px rgba(37, 211, 102, 0.4)',
        textDecoration: 'none'
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle size={32} />
    </motion.a>
  );
};

export default WhatsAppButton;
