import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './pages/Home';
import Holidays from './pages/Holidays';
import PackageDetails from './pages/PackageDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import Visa from './pages/Visa';


export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/holidays" element={<Holidays />} />
            <Route path="/packages/:id" element={<PackageDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/visa" element={<Visa />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}