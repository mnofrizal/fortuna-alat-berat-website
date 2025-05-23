
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Company from '../components/Company';
import Services from '../components/Services';
import Catalog from '../components/Catalog';
import ContactPreview from '../components/ContactPreview';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Company Introduction */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Company />
      </motion.section>
      
      {/* Services */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Services />
      </motion.section>

      {/* Equipment Showcase */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-12"
      >
        <Catalog />
      </motion.section>

      {/* Contact Preview */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ContactPreview />
      </motion.section>

      <Footer />
    </div>
  );
};

export default Index;
