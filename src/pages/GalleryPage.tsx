import React from 'react';
import { motion } from 'framer-motion';
import Gallery from '../components/sections/Gallery';

const GalleryPage: React.FC = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <Gallery />
    </motion.div>
  );
};

export default GalleryPage;