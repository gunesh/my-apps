import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout
import Layout from './layout/Layout';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/home" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Contact" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
