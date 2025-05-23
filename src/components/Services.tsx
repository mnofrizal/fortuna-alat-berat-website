
import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Truck, Clock, Shield, Users, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Pengadaan Material & Spare Parts",
      description: "Menyediakan material dan spare parts industri berkualitas dengan harga kompetitif",
      features: [
        "Conveyor parts (idler roller, belt cleaner, rubber skirt, dll.)",
        "Hydraulic system parts (solenoid valve, pompa hidrolik, filter, hose, dll.)",
        "Heavy equipment parts (ban loader, silinder hidrolik, accu, filter oli, dll.)",
        "Jetty maintenance equipment (fender, pile protection, dll.)"
      ]
    },
    {
      icon: <Truck className="h-12 w-12" />,
      title: "Fabrication & Machining", 
      description: "Pembuatan dan machining komponen industri dengan presisi tinggi",
      features: [
        "Pembuatan dan machining shaft, pulley, gear, coupling",
        "Custom fabrication sesuai kebutuhan pelanggan",
        "Proses welding dan finishing berkualitas",
        "Konsultasi teknis profesional"
      ]
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: "Maintenance & Repair Services",
      description: "Layanan pemeliharaan dan perbaikan yang efisien untuk meminimalisir downtime",
      features: [
        "Overhaul dan perbaikan gearbox, motor, sistem hidrolik, dan conveyor",
        "Service rutin & perbaikan heavy equipment",
        "Perbaikan sistem mekanikal & elektrikal",
        "Calibration & alignment services"
      ]
    }
  ];

  const equipment = [
    "Conveyor systems (idler roller, belt cleaner, rubber skirt, dll.)",
    "Hydraulic systems (solenoid valve, pompa hidrolik, filter, hose, dll.)",
    "Heavy equipment (loader, dozer, dump truck, forklift)",
    "Dust collector systems",
    "Air compressor units",
    "Belt conveyor systems"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Solusi yang Kami Tawarkan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solusi lengkap pengadaan material, fabrication & machining, serta maintenance & repair dengan standar internasional
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ translateY: -10 }}
              className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-yellow-500 mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Equipment Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 text-white p-12"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            Produk & Layanan yang Kami Sediakan
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {equipment.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-slate-800"
              >
                <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* KPI Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500 mb-2">≤ 2 Hari</div>
            <div className="text-gray-600">Waktu Pengiriman</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500 mb-2">1000+</div>
            <div className="text-gray-600">Item Tersedia</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500 mb-2">≥ 95%</div>
            <div className="text-gray-600">Kepuasan Pelanggan</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500 mb-2">30 Hari</div>
            <div className="text-gray-600">Garansi Produk</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
