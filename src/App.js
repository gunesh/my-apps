import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { useAuth } from "./app-context";

// Layout
import Layout from './layout/Layout';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contacts from './pages/Contacts';

import Clay from './pages/TERRACOTTA/Clay';
import Bamboo from './pages/Bamboo/Bamboo';
import Handicraft from './pages/Handicraft/Handicraft';
import Seed from './pages/Seeds/Seed';

import Jaalis from './pages/TERRACOTTA/Jaalis';
import DecorativeTiles from './pages/TERRACOTTA/DecorativeTiles';
import TerracottaPanel from './pages/TERRACOTTA/TerracottaPanel';
import CladdingBricksWallBricks from './pages/TERRACOTTA/CladdingBricksWallBricks';
import Bricks from './pages/TERRACOTTA/Bricks';
import RoofingTiles from './pages/TERRACOTTA/RoofingTiles';
import TerracottaFloaring from './pages/TERRACOTTA/TerracottaFloaring';
import HollowBlock from './pages/TERRACOTTA/HollowBlock';
import TerracottaLockingPavers from './pages/TERRACOTTA/TerracottaLockingPavers';

import NotFound from './pages/NotFound';

const App = () => {
  // const { authenticated } = useAuth();
  return (
    <Layout>
      {/* <Container> */}
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/home" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/clay" element={<Clay />} />
        <Route path="/jaalis" element={<Jaalis />} />
        <Route path="/decorative-tiles" element={<DecorativeTiles />} />
        <Route
          path="/cladding-wall-bricks"
          element={<CladdingBricksWallBricks />}
        />
        <Route path="/terracotta-floaring" element={<TerracottaFloaring />} />
        <Route path="/bricks" element={<Bricks />} />
        <Route path="/roofing-tiles" element={<RoofingTiles />} />
        <Route path="/terracotta-panels" element={<TerracottaPanel />} />
        <Route path="/hollow-block" element={<HollowBlock />} />

        <Route
          path="/terracotta-locking-pavers"
          element={<TerracottaLockingPavers />}
        />

        <Route path="/seed" element={<Seed />} />
        <Route path="/handicraft" element={<Handicraft />} />
        <Route path="/bamboo" element={<Bamboo />} />
        <Route path="/Contact" element={<Contacts />} />
        <Route element={<NotFound />} />
      </Routes>
      {/* </Container> */}
    </Layout>
  );
};

export default App;
