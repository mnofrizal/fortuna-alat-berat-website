import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Award, Clock, Users, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Company = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="relative overflow-hidden bg-white py-10 pt-14">
      {/* Decorative elements */}
      <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-yellow-100 opacity-70"></div>
      <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-blue-50 opacity-50"></div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-2 inline-block font-semibold uppercase tracking-wider text-yellow-500"
          >
            TENTANG KAMI
          </motion.span>
          <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Tentang Perusahaan Kami
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 bg-yellow-400"></div>
        </motion.div>

        <Tabs defaultValue="profil" className="w-full">
          <TabsList className="mx-auto mb-24 grid w-[400px] grid-cols-2 rounded-none border border-yellow-400 bg-white p-1">
            <TabsTrigger
              value="profil"
              className="rounded-none border-r border-yellow-400 data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900"
            >
              Profil
            </TabsTrigger>
            <TabsTrigger
              value="visi-misi"
              className="rounded-none data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900"
            >
              Visi & Misi
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profil">
            <div className="grid items-center gap-16 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-8"
              >
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>PT Fortuna Abadi Teknik</strong> adalah perusahaan
                  general supplier yang berdedikasi untuk menyediakan solusi
                  terbaik dalam pengadaan material industri, fabrication &
                  machining, serta jasa maintenance & repair.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                  Sejak berdiri, kami telah melayani berbagai sektor industri
                  termasuk pembangkitan, konstruksi, manufaktur, dan
                  infrastruktur di seluruh Indonesia.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-6">
                  {[
                    {
                      icon: (
                        <Award className="mx-auto mb-2 h-8 w-8 text-yellow-500" />
                      ),
                      number: "100%",
                      text: "Kualitas Terjamin",
                    },
                    {
                      icon: (
                        <Clock className="mx-auto mb-2 h-8 w-8 text-yellow-500" />
                      ),
                      number: "50+",
                      text: "Proyek Selesai",
                    },
                    {
                      icon: (
                        <CheckCircle className="mx-auto mb-2 h-8 w-8 text-yellow-500" />
                      ),
                      number: "100%",
                      text: "Garansi Produk",
                    },
                  ].map((item, index) => (
                    <Card
                      key={index}
                      className="rounded-none border bg-white p-4 text-center transition-shadow hover:shadow-lg"
                    >
                      <CardContent className="p-2 pt-6">
                        {item.icon}
                        <p className="text-2xl font-bold text-slate-900">
                          {item.number}
                        </p>
                        <p className="text-sm text-gray-600">{item.text}</p>
                      </CardContent>
                    </Card>
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
                <div className="absolute -left-5 -top-5 z-0 h-32 w-32 border-8 border-yellow-400 opacity-20"></div>
                <img
                  src="https://www.shutterstock.com/shutterstock/videos/1096650743/thumb/1.jpg?ip=x480"
                  alt="Industrial Equipment"
                  className="relative z-10 h-auto w-full shadow-xl"
                />
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="visi-misi">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group relative overflow-hidden rounded-none border border-yellow-400 bg-white p-8 shadow-lg transition-all hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent opacity-50"></div>
                  <div className="relative z-10">
                    <h3 className="mb-6 text-2xl font-bold text-yellow-500">
                      Visi
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-700">
                      Menjadi mitra terpercaya dalam pemeliharaan dan perbaikan
                      alat berat di Indonesia dengan layanan berkualitas dan
                      inovatif yang mendukung pertumbuhan industri.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="group relative overflow-hidden rounded-none border border-yellow-400 bg-white p-8 shadow-lg transition-all hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent opacity-50"></div>
                  <div className="relative z-10">
                    <h3 className="mb-6 text-2xl font-bold text-yellow-500">
                      Misi
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span className="text-lg text-gray-700">
                          Memberikan layanan pemeliharaan dan perbaikan yang
                          tepat waktu dan efisien
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span className="text-lg text-gray-700">
                          Mengedepankan keselamatan kerja dan ramah lingkungan
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                        <span className="text-lg text-gray-700">
                          Membangun kemitraan jangka panjang dengan pelanggan
                        </span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Company;
