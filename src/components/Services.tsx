"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Services() {
  const services = [
    {
      image:
        "https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2021/08/06125648/Where-to-Buy-Car-Spare-Parts-in-Dubai-Cover-20210806.jpg",
      title: "Pengadaan Material & Spare Parts",
      description:
        "Menyediakan material dan spare parts industri berkualitas dengan harga kompetitif",
      features: [
        "Conveyor parts (idler roller, belt cleaner, rubber skirt, dll.)",
        "Hydraulic system parts (solenoid valve, pompa hidrolik, filter, hose, dll.)",
        "Heavy equipment parts (ban loader, silinder hidrolik, accu, filter oli, dll.)",
        "Jetty maintenance equipment (fender, pile protection, dll.)",
      ],
    },
    {
      image: "https://i.ytimg.com/vi/uL6p_sbMIA4/maxresdefault.jpg",
      title: "Fabrication & Machining",
      description:
        "Pembuatan dan machining komponen industri dengan presisi tinggi",
      features: [
        "Pembuatan dan machining shaft, pulley, gear, coupling",
        "Custom fabrication sesuai kebutuhan pelanggan",
        "Proses welding dan finishing berkualitas",
        "Konsultasi teknis profesional",
      ],
    },
    {
      image: "https://i.ytimg.com/vi/3X_CiAVrV88/maxresdefault.jpg",
      title: "Maintenance & Repair Services",
      description:
        "Layanan pemeliharaan dan perbaikan yang efisien untuk meminimalisir downtime",
      features: [
        "Overhaul dan perbaikan gearbox, motor, sistem hidrolik, dan conveyor",
        "Service rutin & perbaikan heavy equipment",
        "Perbaikan sistem mekanikal & elektrikal",
        "Calibration & alignment services",
      ],
    },
  ];

  const equipment = [
    "Conveyor systems (idler roller, belt cleaner, rubber skirt, dll.)",
    "Hydraulic systems (solenoid valve, pompa hidrolik, filter, hose, dll.)",
    "Heavy equipment (loader, dozer, dump truck, forklift)",
    "Dust collector systems",
    "Air compressor units",
    "Belt conveyor systems",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="space-y-24 bg-gradient-to-b from-white to-slate-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <Badge className="mb-4 border-none bg-amber-100 px-3 py-1 text-amber-800 hover:bg-amber-100">
            Layanan Kami
          </Badge>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Solusi yang Kami Tawarkan
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Solusi lengkap pengadaan material, fabrication & machining, serta
            maintenance & repair dengan standar internasional
          </p>
        </motion.div>

        {/* Main Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24 grid gap-8 md:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="h-full overflow-hidden rounded-none border-2 bg-slate-50 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-0">
                  <div className="h-64 w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-2xl font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="text-slate-600">{service.description}</p>
                  </div>

                  {/* <div className="bg-slate-50 p-8 pt-6">
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                          <span className="text-sm text-slate-700">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Equipment Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative left-[50%] right-[50%] mx-[-50vw] w-screen overflow-hidden"
        >
          <div className="absolute inset-0 z-0 bg-[url('https://media.istockphoto.com/id/1152829255/id/foto/mekanik-profesional-bulldozer.jpg?s=2048x2048&w=is&k=20&c=_OjnAK6WAfChN28uWxCoRasSrp6C_X8zoNCQM94C3DI=')] bg-cover bg-fixed bg-center bg-no-repeat"></div>
          <div className="absolute inset-0 z-0 bg-black/60"></div>

          <div className="container relative z-10 mx-auto px-4 py-20">
            <h3 className="mb-10 text-center text-5xl font-bold text-white">
              Produk & Layanan yang Kami Sediakan
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {equipment.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 bg-amber-500/40 p-5 backdrop-blur-sm transition-colors hover:bg-amber-700"
                >
                  <CheckCircle className="h-10 w-10 flex-shrink-0 text-amber-400" />
                  <span className="text-xl font-medium capitalize text-white">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* KPI Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 grid gap-8 md:grid-cols-4"
        >
          {[
            { value: "≤ 2 Hari", label: "Waktu Pengiriman" },
            { value: "1000+", label: "Item Tersedia" },
            { value: "≥ 95%", label: "Kepuasan Pelanggan" },
            { value: "30 Hari", label: "Garansi Produk" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-amber-600/20 opacity-70 blur-xl transition-all group-hover:blur-lg"></div>
              <Card className="relative h-full rounded-none border-none bg-white/80 shadow-md backdrop-blur-sm">
                <CardContent className="flex flex-col items-center justify-center p-8">
                  <div className="mb-2 text-4xl font-bold text-amber-600 md:text-5xl">
                    {stat.value}
                  </div>
                  <div className="font-medium text-slate-600">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
