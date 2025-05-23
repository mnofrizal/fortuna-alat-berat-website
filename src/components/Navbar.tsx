
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Wrench, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Layanan', path: '/services' },
    { name: 'Katalog', path: '/catalog' },
    { name: 'Kontak', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="rounded-full bg-yellow-400 p-2">
                <Wrench className="h-6 w-6 text-slate-900" />
              </div>
              <div>
                <h1 className="font-bold text-xl text-white">PT Fortuna Abadi Teknik</h1>
                <p className="text-xs text-yellow-400">Heavy Equipment Solutions</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 mx-1 relative group overflow-hidden ${
                  location.pathname === item.path ? 'text-yellow-400' : 'text-white'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                
                {/* Hover effect */}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: location.pathname === item.path ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 bg-yellow-400 text-slate-900 px-5 py-2 font-medium text-sm hover:bg-yellow-500 transition-colors"
              >
                Hubungi Kami
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 bg-slate-800 rounded-b-lg overflow-hidden"
            >
              {navItems.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={item.name}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-4 border-b border-slate-700 hover:bg-slate-700/50 transition-colors ${
                      location.pathname === item.path ? 'text-yellow-400' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
