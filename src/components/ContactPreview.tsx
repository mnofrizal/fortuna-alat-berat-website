import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Phone } from "lucide-react";

const ContactPreview = () => {
  return (
    <section className="relative py-36">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: false }}
          className="h-full w-full"
        >
          <img
            src="https://images.unsplash.com/photo-1523660778745-247ed0bcce31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Contact background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-slate-900/80"></div>
        </motion.div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="mb-10 max-w-2xl text-white md:mb-0"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-4 inline-block font-semibold uppercase tracking-wider text-yellow-400"
            >
              KONSULTASI GRATIS
            </motion.span>
            <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Hubungi Kami Untuk
              <br />
              Solusi Bisnis Terbaik
            </h2>
            <div className="mb-6 h-1 w-20 bg-yellow-400"></div>
            <p className="mb-8 text-xl leading-relaxed text-gray-200">
              Siap melayani kebutuhan pengadaan material, maintenance dan repair
              heavy equipment Anda. Tim kami siap memberikan solusi terbaik
              untuk bisnis Anda.
            </p>

            <div className="inline-flex items-center text-xl font-medium text-yellow-400">
              <Phone className="mr-2 h-6 w-6" /> +62 851 2444 5152
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="w-full max-w-md bg-white p-10 shadow-2xl">
              <h3 className="mb-6 text-2xl font-bold text-slate-900">
                Dapatkan Konsultasi
              </h3>
              <p className="mb-8 text-gray-600">
                Konsultasikan kebutuhan bisnis Anda dengan tim ahli kami untuk
                mendapatkan solusi terbaik.
              </p>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center gap-2 bg-yellow-400 py-4 text-lg font-semibold text-slate-900 transition-colors hover:bg-yellow-500"
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
