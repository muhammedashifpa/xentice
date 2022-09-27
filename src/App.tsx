import React from 'react';
import './App.css';
import FetchComponents from './components/axios/FetchComponents';
import Hero from './components/hero/Hero';
import Layout from './components/layout/Layout';
import ProductListing from './components/product_listing/PostSection';
import RealEstateHeader from './components/real_estate_header/RealEstateHeader';
import ServiceHeader from './components/service_header/ServiceHeader';

function App() {
  return (
    <div className="App">
      <Layout>
        <RealEstateHeader/>
        <Hero/>
        <ServiceHeader/>
        <ProductListing/>
        <FetchComponents/>
      </Layout>
    </div>
  );
}

export default App;
