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
    "Conveyor Parts",
    "Heavy Equipment Parts",
    "Hydraulic Parts",
    "Mechanical Parts",
  ];

  const equipmentCatalog = [
    {
      id: 1,
      name: "CENTRAL GUIDE ROLLER D100 M24",
      category: "Conveyor Parts",
      image: "/catalog/centra-guide-roller.jpg",
      specifications: {
        Diameter: "100 mm",
        "Thread Size": "M24",
        Material: "High-grade Steel",
        Treatment: "Heat Treated",
      },
      services: [
        "Installation Service",
        "Preventive Maintenance",
        "Quality Inspection",
      ],
      status: "Tersedia",
    },
    {
      id: 2,
      name: "CENTRAL GUIDE ROLLER D120 M24",
      category: "Conveyor Parts",
      image: "/catalog/centra-guide-roller-1.jpg",
      specifications: {
        Diameter: "120 mm",
        "Thread Size": "M24",
        Material: "High-grade Steel",
        Treatment: "Heat Treated",
      },
      services: [
        "Installation Service",
        "Alignment Check",
        "Performance Testing",
      ],
      status: "Dalam Maintenance",
    },
    {
      id: 3,
      name: "RUBBER SKIRT STANDARD GRADE",
      category: "Conveyor Parts",
      image: "/catalog/rubber-skirt.jpg",
      specifications: {
        Material: "Natural Rubber",
        Hardness: "60±5° Shore A",
        "Temperature Range": "-30°C to +70°C",
        Application: "Dust Sealing",
      },
      services: [
        "Custom Cutting",
        "Installation Service",
        "Replacement Service",
      ],
      status: "Tersedia",
    },
    {
      id: 4,
      name: "BUCKET PIN EXCAVATOR HD785",
      category: "Heavy Equipment Parts",
      image: "/catalog/bucket-pin.jpg",
      specifications: {
        Material: "Alloy Steel",
        "Surface Hardness": "HRC 45-50",
        Treatment: "Heat Treated",
        "Tensile Strength": "≥ 1000 MPa",
      },
      services: [
        "Pin Inspection",
        "Installation Service",
        "Bushing Replacement",
      ],
      status: "Operasional",
    },
    {
      id: 5,
      name: "BUCKET PIN DOZER D375A",
      category: "Heavy Equipment Parts",
      image: "/catalog/bucket-pin.jpg",
      specifications: {
        Material: "Alloy Steel",
        "Surface Hardness": "HRC 48-52",
        Treatment: "Heat Treated",
        "Tensile Strength": "≥ 1200 MPa",
      },
      services: ["Pin Replacement", "Bushing Service", "Lubrication Service"],
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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-slate-900">
            Katalog Heavy Equipment
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
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
                className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/4"
              >
                <Card className="relative h-[600px] overflow-hidden rounded-none border bg-white transition-all duration-300 hover:shadow-xl">
                  <CardContent className="flex h-full flex-col p-0">
                    <div className="relative h-[200px]">
                      <img
                        src={equipment.image}
                        alt={equipment.name}
                        className="h-full w-full object-cover object-center"
                      />
                      {/* <div
                        className={`absolute right-4 top-4 rounded-full px-3 py-1 text-sm font-medium ${getStatusColor(
                          equipment.status
                        )}`}
                      >
                        {equipment.status}
                      </div> */}
                    </div>

                    <div className="flex h-full flex-col justify-between p-6">
                      <div>
                        <div className="mb-4 min-h-[80px]">
                          <h3 className="mb-2 text-lg font-bold text-slate-900">
                            {equipment.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {equipment.category}
                          </p>
                        </div>

                        {/* Specifications */}
                        <div className="mb-6">
                          <h4 className="mb-2 text-sm font-semibold text-slate-900">
                            Spesifikasi
                          </h4>
                          <div className="space-y-1">
                            {Object.entries(equipment.specifications)
                              .slice(0, 2)
                              .map(([key, value]) => (
                                <div
                                  key={key}
                                  className="flex justify-between text-xs"
                                >
                                  <span className="text-gray-600">{key}:</span>
                                  <span className="font-medium">{value}</span>
                                </div>
                              ))}
                          </div>
                        </div>

                        {/* Services */}
                        <div className="mb-6">
                          <h4 className="mb-2 text-sm font-semibold text-slate-900">
                            Layanan Tersedia
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {equipment.services
                              .slice(0, 2)
                              .map((service, idx) => (
                                <span
                                  key={idx}
                                  className="rounded-full bg-yellow-100 px-2 py-1 text-[10px] text-yellow-800"
                                >
                                  {service}
                                </span>
                              ))}
                            {equipment.services.length > 2 && (
                              <span className="rounded-full bg-gray-100 px-2 py-1 text-[10px] text-gray-600">
                                +{equipment.services.length - 2} lainnya
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full rounded-lg bg-yellow-400 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-yellow-300"
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
            <p className="text-lg text-gray-600">
              Tidak ada equipment yang ditemukan
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Catalog;
