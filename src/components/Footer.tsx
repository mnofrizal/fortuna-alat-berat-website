import React from "react";
import { motion } from "framer-motion";
import { Wrench, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
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
                <h3 className="text-xl font-bold">PT Fortuna Abadi Teknik</h3>
                <p className="text-sm text-gray-300">
                  General Supplier & Services
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              Mitra terpercaya dalam pengadaan material industri, fabrication &
              machining, serta maintenance & repair dengan layanan berkualitas
              dan inovatif sejak 2010.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="mb-4 text-lg font-bold">Layanan Kami</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="cursor-pointer transition-colors hover:text-yellow-400">
                Pengadaan Material & Spare Parts
              </li>
              <li className="cursor-pointer transition-colors hover:text-yellow-400">
                Conveyor & Hydraulic Parts
              </li>
              <li className="cursor-pointer transition-colors hover:text-yellow-400">
                Fabrication & Machining
              </li>
              <li className="cursor-pointer transition-colors hover:text-yellow-400">
                Maintenance & Repair Services
              </li>
              <li className="cursor-pointer transition-colors hover:text-yellow-400">
                Calibration & Alignment
              </li>
            </ul>
          </motion.div>

          {/* Equipment Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-4 text-lg font-bold">Produk & Sistem</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="cursor-pointer transition-colors hover:text-yellow-400">
                Conveyor Systems
              </li>
              <li className="cursor-pointer transition-colors hover:text-yellow-400">
                Hydraulic Systems
              </li>
              <li className="cursor-pointer transition-colors hover:text-yellow-400">
                Heavy Equipment
              </li>
              <li className="cursor-pointer transition-colors hover:text-yellow-400">
                Industrial Components
              </li>
              <li className="cursor-pointer transition-colors hover:text-yellow-400">
                Mechanical & Electrical Systems
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="mb-4 text-lg font-bold">Hubungi Kami</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 text-yellow-400" />
                <span>
                  Jl. Ayer IX Blok D No. 17, Harjatani, Kramatwatu, Serang,
                  Banten
                </span>
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
                <Clock className="mt-1 h-4 w-4 text-yellow-400" />
                <div>
                  <div>Senin - Sabtu: 08:00 - 17:00</div>
                  <div className="font-medium text-yellow-400">
                    Emergency: 24/7
                  </div>
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
          className="mt-12 border-t border-gray-700 pt-8 text-center"
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-300">
              © 2025 PT Fortuna Abadi Teknik. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-300">
              <span className="cursor-pointer transition-colors hover:text-yellow-400">
                Privacy Policy
              </span>
              <span className="cursor-pointer transition-colors hover:text-yellow-400">
                Terms of Service
              </span>
              <span className="cursor-pointer transition-colors hover:text-yellow-400">
                Sitemap
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
