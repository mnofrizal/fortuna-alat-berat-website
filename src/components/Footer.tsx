
import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <Wrench className="h-8 w-8 text-yellow-400" />
              <div>
                <h3 className="font-bold text-xl">PT Fortuna Abadi Teknik</h3>
                <p className="text-sm text-gray-300">General Supplier & Services</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Mitra terpercaya dalam pengadaan material industri, fabrication & machining, serta maintenance & repair dengan layanan berkualitas dan inovatif sejak 2010.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-4">Layanan Kami</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">Pengadaan Material & Spare Parts</li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">Conveyor & Hydraulic Parts</li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">Fabrication & Machining</li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">Maintenance & Repair Services</li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">Calibration & Alignment</li>
            </ul>
          </motion.div>

          {/* Equipment Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-4">Produk & Sistem</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">Conveyor Systems</li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">Hydraulic Systems</li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">Heavy Equipment</li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">Industrial Components</li>
              <li className="hover:text-yellow-400 transition-colors cursor-pointer">Mechanical & Electrical Systems</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-4">Hubungi Kami</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-yellow-400" />
                <span>Jl. Ayer IX Blok D No. 17, Harjatani, Kramatwatu, Serang, Banten</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span>+62 851 2444 5152</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span>fortunaabaditeknik@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-1 text-yellow-400" />
                <div>
                  <div>Senin - Sabtu: 08:00 - 17:00</div>
                  <div className="text-yellow-400 font-medium">Emergency: 24/7</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-700 mt-12 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300">
              © 2024 PT Fortuna Abadi Teknik. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-300">
              <span className="hover:text-yellow-400 transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-yellow-400 transition-colors cursor-pointer">Terms of Service</span>
              <span className="hover:text-yellow-400 transition-colors cursor-pointer">Sitemap</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
