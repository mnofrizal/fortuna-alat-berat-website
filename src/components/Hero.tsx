
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Shield, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut" 
      }
    })
  };

  return (
    <div className="relative h-screen flex items-center text-white overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Industrial Supplier Background" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/80 to-slate-800/70"></div>
        
        {/* Animated Overlay Elements */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.05, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute inset-y-0 left-0 w-1/2 border-r-2 border-white/20"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 0.05, y: 0 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="absolute inset-x-0 top-1/3 h-px w-full bg-white/20"
        ></motion.div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.span 
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="inline-block py-1 px-3 border border-yellow-400 text-yellow-400 text-sm font-medium tracking-wider"
            >
              PT FORTUNA ABADI TEKNIK
            </motion.span>
            
            <motion.h1 
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold leading-tight"
            >
              Solusi Terpercaya untuk{' '}
              <span className="text-yellow-400">Heavy Equipment</span>
            </motion.h1>
            
            <motion.p 
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-xl text-gray-200 leading-relaxed max-w-xl"
            >
              PT Fortuna Abadi Teknik menyediakan layanan pengadaan material, fabrication & machining, 
              serta maintenance & repair dengan kualitas terbaik untuk industri.
            </motion.p>

            <motion.div 
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link to="/services">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-400 text-slate-900 px-8 py-4 font-semibold flex items-center gap-2 hover:bg-yellow-500 transition-colors"
                >
                  Lihat Layanan Kami
                  <ChevronRight className="h-5 w-5" />
                </motion.button>
              </Link>
              
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white px-8 py-4 font-semibold hover:bg-white hover:text-slate-900 transition-colors"
                >
                  Hubungi Kami
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="grid grid-cols-3 gap-8 pt-6"
            >
              {[
                { icon: <Shield className="h-8 w-8 text-yellow-400 mx-auto mb-2" />, value: "100%", label: "Garansi Produk" },
                { icon: <Clock className="h-8 w-8 text-yellow-400 mx-auto mb-2" />, value: "24/7", label: "Technical Support" },
                { icon: <Users className="h-8 w-8 text-yellow-400 mx-auto mb-2" />, value: "1000+", label: "Produk Tersedia" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.15 }}
                  className="text-center p-4 border border-white/10 backdrop-blur-sm"
                >
                  {stat.icon}
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative hidden md:block"
          >
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute top-0 right-0 w-32 h-32 border-8 border-yellow-400 opacity-20 -translate-y-10 translate-x-10 z-0"
            ></motion.div>
            
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Industrial Equipment" 
                className="rounded shadow-2xl border-8 border-white/10"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-yellow-400 text-slate-900 p-6 shadow-xl"
              >
                <div className="text-2xl font-bold">15+ Tahun</div>
                <div className="text-sm">Pengalaman</div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="absolute bottom-0 right-0 w-40 h-40 border-8 border-white/10 opacity-30 translate-y-10 translate-x-4 z-0"
            ></motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scrolling Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full"></motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
