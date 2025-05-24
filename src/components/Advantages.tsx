import React from "react";
import { motion } from "framer-motion";
import {
  Warehouse,
  Box,
  UserCog,
  BarChart3,
  Building2,
  HeartHandshake,
  Clock,
  HardHat,
  Wrench,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Advantages = () => {
  const facilities = [
    {
      icon: <Building2 className="h-12 w-12 text-yellow-500" />,
      title: "Workshop Mandiri",
      description:
        "Workshop di Banten dengan peralatan machining, welding, dan lifting",
    },
    {
      icon: <Box className="h-12 w-12 text-yellow-500" />,
      title: "Gudang Sparepart",
      description: "Gudang sparepart untuk mempercepat downtime recovery",
    },
    {
      icon: <UserCog className="h-12 w-12 text-yellow-500" />,
      title: "Teknisi Bersertifikat",
      description: "Teknisi berpengalaman untuk overhaul dan troubleshooting",
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-yellow-500" />,
      title: "Sistem Pelaporan Digital",
      description: "Sistem pelaporan digital untuk dokumentasi & evaluasi KPI",
    },
    {
      icon: <HeartHandshake className="h-12 w-12 text-yellow-500" />,
      title: "Komitmen",
      description: "Komitmen untuk kepuasan customer",
    },
    {
      icon: <Clock className="h-12 w-12 text-yellow-500" />,
      title: "Tepat Waktu",
      description: "Pengerjaan proyek sesuai waktu yang disepakati",
    },
    {
      icon: <HardHat className="h-12 w-12 text-yellow-500" />,
      title: "Utamakan Keselamatan",
      description: "Prioritas keselamatan dalam operasional",
    },
    {
      icon: <Wrench className="h-12 w-12 text-yellow-500" />,
      title: "Peralatan Lengkap",
      description: "Peralatan modern dan lengkap untuk maintenance dan repair",
    },
  ];

  return (
    <section className="bg-slate-50 pb-4 pt-16">
      <div className="container mx-auto px-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Mengapa Memilih Kami?
          </h2>
          <div className="mx-auto mb-4 h-1 w-24 bg-yellow-400"></div>
          <p className="mx-auto max-w-3xl text-base text-slate-600">
            PT Fortuna Abadi Teknik memiliki keunggulan kompetitif yang menjamin
            kualitas layanan terbaik untuk bisnis Anda
          </p>
        </motion.div>

        {/* Facilities */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {facilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative h-full overflow-hidden rounded-none border-none bg-white transition-all duration-300 hover:border-yellow-400 hover:shadow-xl">
                <CardContent className="p-5">
                  <div className="mb-6 flex">
                    <div className="transition-all duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="mb-4 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
