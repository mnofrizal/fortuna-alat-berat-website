
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Clock, Users, Shield } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Company = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-yellow-500 font-semibold uppercase tracking-wider mb-2 inline-block"
          >
            TENTANG KAMI
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Tentang Perusahaan Kami
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lebih dari 15 tahun pengalaman sebagai general supplier dan penyedia jasa untuk industri
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              PT Fortuna Abadi Teknik adalah perusahaan general supplier yang berdedikasi untuk menyediakan solusi terbaik dalam pengadaan material industri, fabrication & machining, serta jasa maintenance & repair.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Dengan pengalaman lebih dari satu dekade, kami telah melayani berbagai sektor industri termasuk pertambangan, konstruksi, manufaktur, dan infrastruktur di seluruh Indonesia.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { icon: <CheckCircle className="h-6 w-6 text-green-500" />, text: "Kualitas Terjamin" },
                { icon: <CheckCircle className="h-6 w-6 text-green-500" />, text: "Teknisi Berpengalaman" },
                { icon: <CheckCircle className="h-6 w-6 text-green-500" />, text: "Respons Cepat" },
                { icon: <CheckCircle className="h-6 w-6 text-green-500" />, text: "Harga Kompetitif" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={itemVariants}
                  className="flex items-center gap-3 p-4 bg-gray-50 shadow-sm hover:bg-gray-100 transition-colors"
                >
                  {item.icon}
                  <span className="font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -top-5 -left-5 w-32 h-32 border-8 border-yellow-400 opacity-20 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Industrial Equipment" 
              className="w-full h-auto shadow-xl relative z-10"
            />
            
            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { icon: <Award className="h-8 w-8 text-yellow-500 mx-auto mb-2" />, number: "15+", text: "Tahun Pengalaman" },
                { icon: <Users className="h-8 w-8 text-yellow-500 mx-auto mb-2" />, number: "200+", text: "Klien Puas" },
                { icon: <Clock className="h-8 w-8 text-yellow-500 mx-auto mb-2" />, number: "24/7", text: "Support" }
              ].map((item, index) => (
                <Card key={index} className="text-center p-4 bg-white hover:shadow-lg transition-shadow border-none">
                  <CardContent className="p-2 pt-6">
                    {item.icon}
                    <p className="text-2xl font-bold text-slate-900">{item.number}</p>
                    <p className="text-sm text-gray-600">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Company;
