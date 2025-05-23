
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Users, Award } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Alamat",
      info: "Jl. Ayer IX Blok D No. 17, Harjatani, Kramatwatu, Serang, Banten"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telepon",
      info: "+62 851 2444 5152"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email", 
      info: "fortunaabaditeknik@gmail.com"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Jam Operasional",
      info: "Senin - Sabtu: 08:00 - 17:00 WIB\nEmergency: 24/7"
    }
  ];

  const teamMembers = [
    {
      name: "Ir. Ahmad Suryanto",
      position: "Direktur Utama", 
      phone: "+62 812 3456 7890",
      email: "ahmad@fortunaabaditeknik.com"
    },
    {
      name: "Budi Hartono, S.T.",
      position: "Manajer Operasional",
      phone: "+62 813 4567 8901", 
      email: "budi@fortunaabaditeknik.com"
    },
    {
      name: "Dedi Supriadi",
      position: "Kepala Teknisi",
      phone: "+62 814 5678 9012",
      email: "dedi@fortunaabaditeknik.com"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Hubungi Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Siap melayani kebutuhan maintenance dan repair heavy equipment Anda 24/7
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Kirim Pesan</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Perusahaan</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Nama perusahaan"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="email@contoh.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Telepon</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="+62 xxx xxxx xxxx"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Jenis Layanan</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent">
                  <option>Pilih jenis layanan</option>
                  <option>Preventive Maintenance</option>
                  <option>Corrective Maintenance</option>
                  <option>Emergency Repair</option>
                  <option>Overhaul Engine</option>
                  <option>Konsultasi</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Jelaskan kebutuhan Anda..."
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-yellow-400 text-slate-900 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Kirim Pesan
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-slate-900 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="text-yellow-400 mt-1">{contact.icon}</div>
                    <div>
                      <h4 className="font-semibold mb-1">{contact.title}</h4>
                      <p className="text-gray-300 whitespace-pre-line">{contact.info}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Team Members */}
            <div className="bg-white border-2 border-gray-200 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Users className="h-6 w-6 text-yellow-500" />
                Tim Manajemen
              </h3>
              <div className="space-y-6">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-4 border-yellow-400 pl-4"
                  >
                    <h4 className="font-bold text-slate-900">{member.name}</h4>
                    <p className="text-gray-600 mb-2">{member.position}</p>
                    <div className="space-y-1 text-sm">
                      <p className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gray-400" />
                        {member.phone}
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-gray-400" />
                        {member.email}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-yellow-50 p-6 rounded-xl">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-yellow-500" />
                Sertifikasi & Partnership
              </h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p>• Kerjasama dengan KOMATSU (PT United Tractors Tbk)</p>
                <p>• Partnership dengan HYUNDAI (PT Indo Raya Energi)</p>
                <p>• ISO 9001:2015 Quality Management System</p>
                <p>• Teknisi Bersertifikat Heavy Equipment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
