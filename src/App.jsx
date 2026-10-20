import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Home from './pages/Home';
import Holidays from './pages/Holidays';
import PackageDetails from './pages/PackageDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import Visa from './pages/Visa';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

export default function App() {
  return (
    <Router>
      {/* Resets scroll position to top whenever route changes */}
      <ScrollToTop />
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
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          </Routes>
        </main>


        {/* Floating WhatsApp Conversion Widget */}
        <a
          href="https://wa.me/917824887999?text=Hi%20Marvel%20Holidays,%20I'd%20like%20to%20plan%20a%20trip!"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float-btn"
          title="Chat with Travel Expert"
        >
          💬 Chat with Us
        </a>
      </div>
    </Router>
  );
}