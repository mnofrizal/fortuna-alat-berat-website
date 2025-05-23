
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Phone } from 'lucide-react';

const ContactPreview = () => {
  return (
    <section className="relative py-36">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Contact background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-slate-900/80"></div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-white max-w-2xl mb-10 md:mb-0"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-yellow-400 font-semibold uppercase tracking-wider mb-4 inline-block"
            >
              KONSULTASI GRATIS
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Hubungi Kami Untuk<br />Solusi Bisnis Terbaik</h2>
            <div className="w-20 h-1 bg-yellow-400 mb-6"></div>
            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
              Siap melayani kebutuhan pengadaan material, maintenance dan repair heavy equipment Anda. 
              Tim kami siap memberikan solusi terbaik untuk bisnis Anda.
            </p>
            
            <div className="inline-flex items-center text-xl text-yellow-400 font-medium">
              <Phone className="mr-2 h-6 w-6" /> +62 851 2444 5152
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="bg-white p-10 shadow-2xl w-full max-w-md">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Dapatkan Konsultasi</h3>
              <p className="text-gray-600 mb-8">Konsultasikan kebutuhan bisnis Anda dengan tim ahli kami untuk mendapatkan solusi terbaik.</p>
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 w-full py-4 font-semibold text-lg flex items-center justify-center gap-2 transition-colors"
                >
                  Konsultasi Sekarang
                  <ChevronRight className="h-5 w-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
