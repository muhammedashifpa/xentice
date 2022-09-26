import React from 'react';
import './App.css';
import Hero from './components/hero/Hero';
import Layout from './components/layout/Layout';
import RealEstateHeader from './components/real_estate_header/RealEstateHeader';

function App() {
  return (
    <div className="App">
      <Layout>
        <RealEstateHeader/>
        <Hero/>
      </Layout>
    </div>
  );
}

export default App;
