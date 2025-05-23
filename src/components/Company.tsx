
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Clock, Users } from 'lucide-react';

const Company = () => {
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
            Tentang Perusahaan Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lebih dari 15 tahun pengalaman sebagai general supplier dan penyedia jasa untuk industri
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              PT Fortuna Abadi Teknik adalah perusahaan general supplier yang berdedikasi untuk menyediakan solusi terbaik dalam pengadaan material industri, fabrication & machining, serta jasa maintenance & repair.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Dengan pengalaman lebih dari satu dekade, kami telah melayani berbagai sektor industri termasuk pertambangan, konstruksi, manufaktur, dan infrastruktur di seluruh Indonesia.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="font-medium">Kualitas Terjamin</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="font-medium">Teknisi Berpengalaman</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="font-medium">Respons Cepat</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="font-medium">Harga Kompetitif</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Industrial Equipment" 
              className="w-full h-auto shadow-xl"
            />
            
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-slate-50">
                <Award className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-slate-900">15+</p>
                <p className="text-sm text-gray-600">Tahun Pengalaman</p>
              </div>
              <div className="text-center p-4 bg-slate-50">
                <Users className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-slate-900">200+</p>
                <p className="text-sm text-gray-600">Klien Puas</p>
              </div>
              <div className="text-center p-4 bg-slate-50">
                <Clock className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-slate-900">24/7</p>
                <p className="text-sm text-gray-600">Support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Company;
