import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SearchOverlay from './components/ui/SearchOverlay';
import Home from './pages/Home';
import Deities from './pages/Deities';
import Epics from './pages/Epics';
import Heroes from './pages/Heroes';
import Creatures from './pages/Creatures';
import Folklore from './pages/Folklore';
import Stories from './pages/Stories';

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[var(--color-bg)]">
        <Navbar onSearchOpen={() => setSearchOpen(true)} />
        <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/deities" element={<Deities />} />
            <Route path="/epics" element={<Epics />} />
            <Route path="/heroes" element={<Heroes />} />
            <Route path="/creatures" element={<Creatures />} />
            <Route path="/folklore" element={<Folklore />} />
            <Route path="/stories" element={<Stories />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
