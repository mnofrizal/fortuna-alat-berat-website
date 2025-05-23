
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Shield, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Industrial Supplier Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/80 to-slate-800/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Solusi Terpercaya untuk{' '}
              <span className="text-yellow-400">General Supplier</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl mb-8 text-gray-200 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              PT Fortuna Abadi Teknik menyediakan layanan pengadaan material, fabrication & machining, 
              serta maintenance & repair dengan kualitas terbaik untuk industri.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link to="/services">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-yellow-300 transition-colors"
                >
                  Lihat Layanan Kami
                  <ChevronRight className="h-5 w-5" />
                </motion.button>
              </Link>
              
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors"
                >
                  Hubungi Kami
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="text-center">
                <Shield className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-gray-300">Garansi Produk</div>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-gray-300">Technical Support</div>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm text-gray-300">Produk Tersedia</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden md:block"
          >
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Industrial Equipment" 
                className="rounded-lg shadow-2xl"
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-yellow-400 text-slate-900 p-6 rounded-lg shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="text-2xl font-bold">15+ Tahun</div>
                <div className="text-sm">Pengalaman</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
