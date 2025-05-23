
import React from 'react';
import Navbar from '../components/Navbar';
import Catalog from '../components/Catalog';
import Footer from '../components/Footer';

const CatalogPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Catalog />
      <Footer />
    </div>
  );
};

export default CatalogPage;
