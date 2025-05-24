import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Company from "../components/Company";
import Advantages from "../components/Advantages";
import Services from "../components/Services";
import Catalog from "../components/Catalog";
import ContactPreview from "../components/ContactPreview";
import Footer from "../components/Footer";

const Index = () => {
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Company Introduction */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Company />
      </motion.section>
      {/* Separator */}
      <div className="px-96 pb-4 pt-16">
        <div className="border-2 border-t border-gray-100 px-10"></div>
      </div>
      {/* Services */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Services />
      </motion.section>

      {/* Equipment Showcase */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Catalog />
      </motion.section>
      {/* Advantages */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Advantages />
      </motion.section>
      {/* Contact Preview */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={sectionVariants}
      >
        <ContactPreview />
      </motion.section>

      <Footer />
    </div>
  );
};

export default Index;
