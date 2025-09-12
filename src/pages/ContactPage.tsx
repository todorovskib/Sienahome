import React from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/sections/Contact';

const ContactPage: React.FC = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <Contact />
    </motion.div>
  );
};

export default ContactPage;