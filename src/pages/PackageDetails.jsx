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
            📍 {pkg.destination} | ⏱️ {pkg.duration} | ⭐ {pkg.rating || 5} / 5
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
                {pkg.overview || pkg.description}
              </p>

              {pkg.highlights && pkg.highlights.length > 0 && (
                <div style={{ marginTop: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', color: '#012d63', marginBottom: '0.8rem' }}>Highlights</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {pkg.highlights.map((highlight, idx) => (
                      <span key={idx} style={{ background: '#fff5eb', color: '#f68719', fontWeight: '600', padding: '6px 14px', borderRadius: '20px', fontSize: '0.88rem', border: '1px solid #ffe0ce' }}>
                        ✨ {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              )}
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
                  {item.details && (
                    <p className="itinerary-details">
                      {item.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* INCLUSIONS & EXCLUSIONS TAB */}
          {activeTab === 'inclusions' && (
            <div>
              <h2 className="section-title">What's Included</h2>
              <ul className="inclusions-list">
                {pkg.inclusions?.map((inc, index) => (
                  <li key={index} className="inclusion-item">
                    <span className="check-mark" style={{ color: '#25d366', fontWeight: 'bold', marginRight: '8px' }}>✓</span> {inc}
                  </li>
                ))}
              </ul>

              {pkg.exclusions && pkg.exclusions.length > 0 && (
                <div style={{ marginTop: '2rem' }}>
                  <h2 className="section-title">What's Excluded</h2>
                  <ul className="inclusions-list">
                    {pkg.exclusions.map((exc, index) => (
                      <li key={index} className="inclusion-item" style={{ color: '#64748b' }}>
                        <span style={{ color: '#ef4444', fontWeight: 'bold', marginRight: '8px' }}>✕</span> {exc}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
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