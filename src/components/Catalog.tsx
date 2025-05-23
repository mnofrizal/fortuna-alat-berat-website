
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Wrench, Calendar, MapPin } from 'lucide-react';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = ['Semua', 'Excavator', 'Dump Truck', 'Loader', 'Dozer', 'Forklift'];

  const equipmentCatalog = [
    {
      id: 1,
      name: "Komatsu PC200-8",
      category: "Excavator",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      specifications: {
        "Berat Operasi": "19.900 kg",
        "Kapasitas Bucket": "0.93 m³",
        "Engine Power": "110 kW",
        "Reach": "9.88 m"
      },
      services: ["Preventive Maintenance", "Engine Overhaul", "Hydraulic Repair"],
      location: "Workshop Serang",
      lastService: "15 Januari 2024",
      nextService: "15 Februari 2024",
      status: "Tersedia"
    },
    {
      id: 2,
      name: "Caterpillar 320D",
      category: "Excavator", 
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      specifications: {
        "Berat Operasi": "20.300 kg",
        "Kapasitas Bucket": "1.07 m³",
        "Engine Power": "105 kW",
        "Reach": "9.65 m"
      },
      services: ["Corrective Maintenance", "Undercarriage Repair", "Transmission Service"],
      location: "Site Cilegon",
      lastService: "22 Januari 2024",
      nextService: "22 Februari 2024",
      status: "Dalam Maintenance"
    },
    {
      id: 3,
      name: "Hino Ranger FM260",
      category: "Dump Truck",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      specifications: {
        "Kapasitas Muatan": "15 ton",
        "Engine": "J08E-VD 7.7L",
        "Transmisi": "Manual 6-speed",
        "Dimensi Box": "5.2 x 2.3 x 1.2 m"
      },
      services: ["Engine Tune-up", "Brake Service", "Electrical Check"],
      location: "Workshop Serang",
      lastService: "10 Januari 2024",
      nextService: "10 Maret 2024",
      status: "Tersedia"
    },
    {
      id: 4,
      name: "Hyundai HL760-9",
      category: "Loader",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      specifications: {
        "Berat Operasi": "12.500 kg",
        "Kapasitas Bucket": "2.3 m³",
        "Engine Power": "123 kW",
        "Tipping Load": "8.840 kg"
      },
      services: ["Hydraulic System Check", "Cooling System Service", "Filter Replacement"],
      location: "Site Tangerang",
      lastService: "28 Januari 2024",
      nextService: "28 Februari 2024",
      status: "Operasional"
    },
    {
      id: 5,
      name: "Komatsu D65PX-17",
      category: "Dozer",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      specifications: {
        "Berat Operasi": "18.400 kg",
        "Engine Power": "119 kW",
        "Blade Capacity": "3.3 m³",
        "Ground Pressure": "46.1 kPa"
      },
      services: ["Track Maintenance", "Engine Service", "Blade Adjustment"],
      location: "Workshop Serang",
      lastService: "5 Januari 2024",
      nextService: "5 April 2024",
      status: "Tersedia"
    },
    {
      id: 6,
      name: "Doosan DX25Z",
      category: "Forklift",
      image: "https://images.unsplash.com/photo-1553876388-00bf32aa1ead?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      specifications: {
        "Kapasitas Angkat": "2.5 ton",
        "Lift Height": "3.0 m",
        "Engine": "Diesel 4-cylinder",
        "Turning Radius": "2.2 m"
      },
      services: ["Mast Inspection", "Hydraulic Leak Check", "Safety System Test"],
      location: "Site Jakarta",
      lastService: "20 Januari 2024",
      nextService: "20 Februari 2024",
      status: "Dalam Maintenance"
    }
  ];

  const filteredEquipment = equipmentCatalog.filter(equipment => {
    const matchesSearch = equipment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         equipment.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || equipment.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Tersedia': return 'bg-green-100 text-green-800';
      case 'Operasional': return 'bg-blue-100 text-blue-800';
      case 'Dalam Maintenance': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Katalog Heavy Equipment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Daftar lengkap alat berat yang tersedia untuk layanan maintenance dan repair
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-xl shadow-lg mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari nama atau kategori alat..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Equipment Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEquipment.map((equipment, index) => (
            <motion.div
              key={equipment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={equipment.image} 
                  alt={equipment.name}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(equipment.status)}`}>
                  {equipment.status}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{equipment.name}</h3>
                    <p className="text-gray-600">{equipment.category}</p>
                  </div>
                </div>

                {/* Specifications */}
                <div className="mb-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Spesifikasi</h4>
                  <div className="space-y-1">
                    {Object.entries(equipment.specifications).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-gray-600">{key}:</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services */}
                <div className="mb-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Layanan Tersedia</h4>
                  <div className="flex flex-wrap gap-2">
                    {equipment.services.slice(0, 2).map((service, idx) => (
                      <span key={idx} className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                        {service}
                      </span>
                    ))}
                    {equipment.services.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{equipment.services.length - 2} lainnya
                      </span>
                    )}
                  </div>
                </div>

                {/* Location and Service Info */}
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{equipment.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Service Terakhir: {equipment.lastService}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wrench className="h-4 w-4" />
                    <span>Service Berikutnya: {equipment.nextService}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-4 bg-yellow-400 text-slate-900 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                >
                  Lihat Detail
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredEquipment.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-gray-600">Tidak ada equipment yang ditemukan</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Catalog;
