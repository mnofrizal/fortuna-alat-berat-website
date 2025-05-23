import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Shield, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

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
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="relative flex h-screen items-center overflow-hidden text-white">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="h-full w-full"
        >
          <img
            src="https://www.micoequipment.com/blog/wp-content/uploads/2015/02/Heavy-Equipment-Dismantling.jpg"
            alt="Industrial Supplier Background"
            className="h-full w-full object-cover"
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
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-5xl font-bold leading-tight md:text-6xl"
            >
              Solusi Terpercaya untuk{" "}
              <span className="text-yellow-400">Heavy Equipment</span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="max-w-xl text-xl leading-relaxed text-gray-200"
            >
              PT Fortuna Abadi Teknik menyediakan layanan{" "}
              <strong className="text-yellow-200">Pengadaan Material</strong>,
              <strong className="text-yellow-200">
                {" "}
                Fabrication & Machining
              </strong>
              , serta{" "}
              <strong className="text-yellow-200">
                Maintenance & Repair
              </strong>{" "}
              dengan kualitas terbaik untuk industri.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex flex-col gap-4 pt-4 sm:flex-row"
            >
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-yellow-400 px-8 py-4 font-semibold text-slate-900 transition-colors hover:bg-yellow-500"
                >
                  Lihat Layanan Kami
                  <ChevronRight className="h-5 w-5" />
                </motion.button>
              </Link>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white px-8 py-4 font-semibold transition-colors hover:bg-white hover:text-slate-900"
                >
                  Hubungi Kami
                </motion.button>
              </Link>
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
              className="absolute right-0 top-0 z-0 h-32 w-32 -translate-y-10 translate-x-10 border-8 border-yellow-400 opacity-20"
            ></motion.div>

            <div className="relative z-10">
              <img
                src="https://plus.unsplash.com/premium_photo-1682142119293-ba4cb0877108?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Industrial Equipment"
                className="rounded border-8 border-white/10 shadow-2xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-yellow-400 p-6 text-slate-900 shadow-xl"
              >
                <div className="text-2xl font-bold">Total</div>
                <div className="text-sm">Solutions</div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="absolute bottom-0 right-0 z-0 h-40 w-40 translate-x-4 translate-y-10 border-8 border-white/10 opacity-30"
            ></motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scrolling Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="flex h-10 w-6 justify-center rounded-full border-2 border-white/50 pt-2"
        >
          <motion.div className="h-1.5 w-1.5 rounded-full bg-white"></motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
