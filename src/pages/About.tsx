
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Wrench, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  const values = [
    {
      icon: <Target className="h-12 w-12" />,
      title: "Kualitas Terjamin",
      description: "Menggunakan teknisi bersertifikat dan sparepart original untuk hasil terbaik"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Keselamatan Utama",
      description: "Menerapkan standar keselamatan kerja internasional dalam setiap operasi"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Kemitraan Jangka Panjang",
      description: "Membangun hubungan yang berkelanjutan dengan seluruh klien"
    },
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Inovasi Berkelanjutan",
      description: "Terus mengembangkan teknologi dan metode untuk efisiensi maksimal"
    }
  ];

  const milestones = [
    { year: "2010", event: "Pendirian PT Fortuna Abadi Teknik" },
    { year: "2015", event: "Partnership dengan KOMATSU (PT United Tractors)" },
    { year: "2018", event: "Ekspansi workshop dan gudang sparepart" },
    { year: "2020", event: "Kerjasama dengan HYUNDAI (PT Indo Raya Energi)" },
    { year: "2022", event: "Sertifikasi ISO 9001:2015" },
    { year: "2024", event: "Layanan digital monitoring real-time" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">Tentang PT Fortuna Abadi Teknik</h1>
            <p className="text-xl leading-relaxed">
              Lebih dari satu dekade pengalaman dalam memberikan solusi maintenance dan repair 
              heavy equipment terpercaya di Indonesia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-8 rounded-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <Eye className="h-12 w-12 text-blue-600" />
                <h2 className="text-3xl font-bold text-slate-900">Visi</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Menjadi mitra terpercaya dalam pemeliharaan dan perbaikan alat berat di Indonesia 
                dengan layanan berkualitas dan inovatif yang mendukung pertumbuhan industri.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-yellow-50 p-8 rounded-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <Target className="h-12 w-12 text-yellow-600" />
                <h2 className="text-3xl font-bold text-slate-900">Misi</h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <span>Memberikan layanan pemeliharaan dan perbaikan yang tepat waktu dan efisien</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <span>Mengedepankan keselamatan kerja dan ramah lingkungan</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <span>Membangun kemitraan jangka panjang dengan pelanggan</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Nilai-Nilai Perusahaan</h2>
            <p className="text-xl text-gray-600">Prinsip yang menjadi landasan dalam setiap layanan kami</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-yellow-500 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Perjalanan Perusahaan</h2>
            <p className="text-xl text-gray-600">Milestone penting dalam pengembangan layanan kami</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-8 mb-8 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
              >
                <div className="flex-1">
                  <div className={`p-6 bg-white rounded-xl shadow-lg ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="text-2xl font-bold text-yellow-500 mb-2">{milestone.year}</div>
                    <div className="text-gray-700">{milestone.event}</div>
                  </div>
                </div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Partnership Strategis</h2>
            <p className="text-xl text-gray-300">
              Kolaborasi dengan brand terkemuka untuk menjamin kualitas layanan
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800 p-8 rounded-xl text-center"
            >
              <Award className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">KOMATSU Partnership</h3>
              <p className="text-gray-300 mb-4">
                Kerjasama resmi dengan PT United Tractors Tbk untuk maintenance 
                dan repair produk KOMATSU
              </p>
              <div className="text-sm text-yellow-400">Sejak 2015</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-800 p-8 rounded-xl text-center"
            >
              <Award className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">HYUNDAI Partnership</h3>
              <p className="text-gray-300 mb-4">
                Kolaborasi dengan PT Indo Raya Energi untuk layanan 
                maintenance produk HYUNDAI Heavy Equipment
              </p>
              <div className="text-sm text-yellow-400">Sejak 2020</div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
