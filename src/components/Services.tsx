
import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Truck, Clock, Shield, Users, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Preventive Maintenance",
      description: "Pemeliharaan rutin untuk mencegah kerusakan dan memperpanjang usia alat berat",
      features: ["Inspeksi berkala", "Penggantian oli", "Kalibrasi sistem", "Laporan digital"]
    },
    {
      icon: <Truck className="h-12 w-12" />,
      title: "Corrective Maintenance", 
      description: "Perbaikan korektif dan overhaul komponen untuk mengembalikan performa optimal",
      features: ["Troubleshooting", "Rebuild engine", "Repair hidrolik", "Emergency repair"]
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: "Emergency Support 24/7",
      description: "Layanan darurat 24 jam untuk meminimalkan downtime operasional",
      features: ["Respons < 2 jam", "Teknisi standby", "Mobile service", "Part delivery"]
    }
  ];

  const equipment = [
    "Loader (Hyundai, Mercedes Benz Axor, Caterpillar)",
    "Dozer (Komatsu D65, D85, Caterpillar D6, D8)",
    "Dump Truck (Hino, Mercedes-Benz, Scania, Isuzu)",
    "Excavator (Komatsu, Caterpillar, Hitachi, Doosan)",
    "Forklift (Doosan, Komatsu, Mitsubishi)",
    "Mobile Vacuum & Tanky Solar"
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
            Layanan Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solusi lengkap maintenance dan repair heavy equipment dengan standar internasional
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
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-yellow-500 mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
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
          className="bg-slate-900 text-white p-12 rounded-xl"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            Jenis Alat Berat yang Kami Tangani
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {equipment.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-slate-800 rounded-lg"
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
            <div className="text-4xl font-bold text-yellow-500 mb-2">≤ 2 Jam</div>
            <div className="text-gray-600">Waktu Respons Darurat</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500 mb-2">≤ 5%</div>
            <div className="text-gray-600">Downtime per Bulan</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500 mb-2">≥ 90%</div>
            <div className="text-gray-600">Kepuasan Pelanggan</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500 mb-2">30 Hari</div>
            <div className="text-gray-600">Garansi Layanan</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
