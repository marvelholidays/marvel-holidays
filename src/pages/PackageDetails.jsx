import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { packagesData } from '../data/packagesData';
import './PackageDetails.css';

export default function PackageDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Robust package matching: compares string values, numbers, or slugs
  const pkg = packagesData.find((p) => 
    String(p.id) === String(id) || 
    p.slug === id
  );

  // Fallback if package is not found
  if (!pkg) {
    return (
      <div className="fallback-container">
        <h2>Package Not Found</h2>
        <p className="fallback-text">The travel package you are looking for does not exist.</p>
        <Link to="/holidays" className="fallback-link">
          View All Packages
        </Link>
      </div>
    );
  }

  // Handler to navigate to Contact Us page with selected package title
  const handleBookingRedirect = () => {
    navigate(`/contact?package=${encodeURIComponent(pkg.title)}`);
  };

  return (
    <div className="package-details-page">
      
      {/* 1. HERO BANNER */}
      <div 
        className="hero-banner"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(11,30,60,0.4) 0%, rgba(11,66,132,0.85) 100%), url("${pkg.image}")`
        }}
      >
        <div className="hero-content">
          <button onClick={() => navigate(-1)} className="back-btn">
            ← Back
          </button>

          <span className="category-badge">
            {pkg.category}
          </span>

          <h1 className="hero-title">
            {pkg.title}
          </h1>

          <p className="hero-subtext">
            📍 {pkg.destination} | ⏱️ {pkg.duration} | ⭐ {pkg.rating} / 5
          </p>
        </div>
      </div>

      {/* 2. CONTENT CONTAINER */}
      <div className="content-grid">
        
        {/* LEFT COLUMN: MAIN DETAILS */}
        <div>
          {/* TAB NAVIGATION */}
          <div className="tabs-navigation">
            {['overview', 'itinerary', 'inclusions'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div>
              <h2 className="section-title">Package Overview</h2>
              <p className="overview-text">
                {pkg.overview}
              </p>
            </div>
          )}

          {/* ITINERARY TAB */}
          {activeTab === 'itinerary' && (
            <div className="itinerary-list">
              <h2 className="section-title" style={{ margin: 0 }}>Day-by-Day Itinerary</h2>
              {pkg.itinerary?.map((item, index) => (
                <div key={index} className="itinerary-card">
                  <span className="itinerary-day">
                    {item.day}
                  </span>
                  <h3 className="itinerary-card-title">{item.title}</h3>
                  <p className="itinerary-details">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* INCLUSIONS TAB */}
          {activeTab === 'inclusions' && (
            <div>
              <h2 className="section-title">What's Included</h2>
              <ul className="inclusions-list">
                {pkg.inclusions?.map((inc, index) => (
                  <li key={index} className="inclusion-item">
                    <span className="check-mark">✓</span> {inc}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: BOOKING CARD */}
        <div>
          <div className="booking-card">
            <span className="starting-label">Starting from</span>
            <div className="price-display">
              ₹{pkg.price ? Number(pkg.price).toLocaleString('en-IN') : 'N/A'}
              <span className="price-unit"> / person</span>
            </div>

            {/* REDIRECT BUTTON TO CONTACT US */}
            <button onClick={handleBookingRedirect} className="book-btn">
              Book This Holiday
            </button>

            <p className="booking-disclaimer">
              Instant confirmation • No hidden booking fees
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}