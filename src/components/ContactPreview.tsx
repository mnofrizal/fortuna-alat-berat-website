
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const ContactPreview = () => {
  return (
    <section className="relative py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Contact background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-white"
        >
          <h2 className="text-4xl font-bold mb-6">Hubungi Kami</h2>
          <p className="text-xl mb-12">
            Siap melayani kebutuhan pengadaan material, maintenance dan repair heavy equipment Anda. 
            Tim kami siap memberikan solusi terbaik untuk bisnis Anda.
          </p>

          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-slate-900 px-10 py-4 font-semibold text-lg flex items-center gap-2 mx-auto"
            >
              Konsultasi Sekarang
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPreview;
