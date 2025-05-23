import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  const categories = [
    "Semua",
    "Excavator",
    "Dump Truck",
    "Loader",
    "Dozer",
    "Forklift",
  ];

  const equipmentCatalog = [
    {
      id: 1,
      name: "CENTRAL GUIDE ROLLERS M24 D100 - FORTAMECH",
      category: "Excavator",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      specifications: {
        "Berat Operasi": "19.900 kg",
        "Kapasitas Bucket": "0.93 m³",
        "Engine Power": "110 kW",
        Reach: "9.88 m",
      },
      services: [
        "Preventive Maintenance",
        "Engine Overhaul",
        "Hydraulic Repair",
      ],
      status: "Tersedia",
    },
    {
      id: 2,
      name: "CENTRAL GUIDE ROLLERS M24 D120 - FORTAMECH",
      category: "Excavator",
      image:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      specifications: {
        "Berat Operasi": "20.300 kg",
        "Kapasitas Bucket": "1.07 m³",
        "Engine Power": "105 kW",
        Reach: "9.65 m",
      },
      services: [
        "Corrective Maintenance",
        "Undercarriage Repair",
        "Transmission Service",
      ],
      status: "Dalam Maintenance",
    },
    {
      id: 3,
      name: "INNER SHAFT GUIDE ROLLERS M25 D26 MM - FORTAMECH",
      category: "Dump Truck",
      image:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      specifications: {
        "Kapasitas Muatan": "15 ton",
        Engine: "J08E-VD 7.7L",
        Transmisi: "Manual 6-speed",
        "Dimensi Box": "5.2 x 2.3 x 1.2 m",
      },
      services: ["Engine Tune-up", "Brake Service", "Electrical Check"],
      status: "Tersedia",
    },
    {
      id: 4,
      name: "INNER SHAFT GUIDE ROLLERS M24 D32 MM - FORTAMECH",
      category: "Loader",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      specifications: {
        "Berat Operasi": "12.500 kg",
        "Kapasitas Bucket": "2.3 m³",
        "Engine Power": "123 kW",
        "Tipping Load": "8.840 kg",
      },
      services: [
        "Hydraulic System Check",
        "Cooling System Service",
        "Filter Replacement",
      ],
      status: "Operasional",
    },
    {
      id: 5,
      name: "LINER PLATE 12 X 410 X 410 MM MATERIAL AR400 LINING CHUTE CONVEYOR",
      category: "Dozer",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      specifications: {
        "Berat Operasi": "18.400 kg",
        "Engine Power": "119 kW",
        "Blade Capacity": "3.3 m³",
        "Ground Pressure": "46.1 kPa",
      },
      services: ["Track Maintenance", "Engine Service", "Blade Adjustment"],
      status: "Tersedia",
    },
  ];

  const filteredEquipment = equipmentCatalog.filter((equipment) => {
    const matchesSearch =
      equipment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      equipment.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Semua" || equipment.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Tersedia":
        return "bg-green-100 text-green-800";
      case "Operasional":
        return "bg-blue-100 text-blue-800";
      case "Dalam Maintenance":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-slate-900">
            Katalog Heavy Equipment
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Daftar lengkap alat berat yang tersedia untuk layanan maintenance
            dan repair
          </p>
        </motion.div>

        {/* Search and Filter */}
        {/* <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Cari equipment..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 pl-10 focus:border-yellow-400 focus:outline-none"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-600" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-2 focus:border-yellow-400 focus:outline-none"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div> */}

        {/* Equipment Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {filteredEquipment.map((equipment, index) => (
              <CarouselItem
                key={equipment.id}
                className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
              >
                <Card className="overflow-hidden border-2 bg-white transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={equipment.image}
                        alt={equipment.name}
                        className="h-48 w-full object-cover"
                      />
                      <div
                        className={`absolute right-4 top-4 rounded-full px-3 py-1 text-sm font-medium ${getStatusColor(
                          equipment.status
                        )}`}
                      >
                        {equipment.status}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-slate-900">
                          {equipment.name}
                        </h3>
                        <p className="text-gray-600">{equipment.category}</p>
                      </div>

                      {/* Specifications */}
                      <div className="mb-4">
                        <h4 className="mb-2 font-semibold text-slate-900">
                          Spesifikasi
                        </h4>
                        <div className="space-y-1">
                          {Object.entries(equipment.specifications)
                            .slice(0, 2)
                            .map(([key, value]) => (
                              <div
                                key={key}
                                className="flex justify-between text-sm"
                              >
                                <span className="text-gray-600">{key}:</span>
                                <span className="font-medium">{value}</span>
                              </div>
                            ))}
                        </div>
                      </div>

                      {/* Services */}
                      <div className="mb-4">
                        <h4 className="mb-2 font-semibold text-slate-900">
                          Layanan Tersedia
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {equipment.services
                            .slice(0, 2)
                            .map((service, idx) => (
                              <span
                                key={idx}
                                className="rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-800"
                              >
                                {service}
                              </span>
                            ))}
                          {equipment.services.length > 2 && (
                            <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                              +{equipment.services.length - 2} lainnya
                            </span>
                          )}
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 w-full rounded-lg bg-yellow-400 py-2 font-semibold text-slate-900 transition-colors hover:bg-yellow-300"
                      >
                        Lihat Detail
                      </motion.button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-16" />
            <CarouselNext className="-right-16" />
          </div>
        </Carousel>

        {filteredEquipment.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-12 text-center"
          >
            <p className="text-xl text-gray-600">
              Tidak ada equipment yang ditemukan
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Catalog;
