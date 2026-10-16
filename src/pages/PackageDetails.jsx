import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { packagesData } from '../data/packagesData';

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
      <div style={{ padding: '6rem 2rem', textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
        <h2>Package Not Found</h2>
        <p style={{ color: '#64748b' }}>The travel package you are looking for does not exist.</p>
        <Link 
          to="/holidays" 
          style={{
            display: 'inline-block',
            marginTop: '1rem',
            padding: '0.8rem 1.8rem',
            backgroundColor: '#f37021',
            color: '#fff',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: '600'
          }}
        >
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
    <div style={{ backgroundColor: '#faf9f6', color: '#0b4284', minHeight: '100vh', paddingBottom: '4rem' }}>
      
      {/* 1. HERO BANNER */}
      <div style={{
        position: 'relative',
        height: '50vh',
        minHeight: '380px',
        backgroundImage: `linear-gradient(180deg, rgba(11,30,60,0.4) 0%, rgba(11,66,132,0.85) 100%), url("${pkg.image}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '2.5rem 2rem',
        color: '#ffffff'
      }}>
        <div style={{ maxWidth: '1100px', width: '100%', margin: '0 auto' }}>
          <button 
            onClick={() => navigate(-1)} 
            style={{
              backgroundColor: 'rgba(255,255,255,0.2)',
              color: '#ffffff',
              border: 'none',
              padding: '0.4rem 1rem',
              borderRadius: '20px',
              cursor: 'pointer',
              marginBottom: '1rem',
              backdropFilter: 'blur(6px)',
              fontFamily: 'system-ui, sans-serif'
            }}
          >
            ← Back
          </button>

          <span style={{
            fontSize: '0.75rem',
            fontWeight: '700',
            letterSpacing: '1.5px',
            backgroundColor: '#f37021',
            color: '#ffffff',
            padding: '0.3rem 0.9rem',
            borderRadius: '12px',
            textTransform: 'uppercase',
            display: 'inline-block',
            marginBottom: '0.8rem',
            fontFamily: 'system-ui, sans-serif'
          }}>
            {pkg.category}
          </span>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', margin: '0 0 0.5rem 0', fontWeight: '500' }}>
            {pkg.title}
          </h1>

          <p style={{ margin: 0, fontSize: '1.1rem', color: '#e2e8f0', fontFamily: 'system-ui, sans-serif' }}>
            📍 {pkg.destination} • ⏱️ {pkg.duration} • ⭐ {pkg.rating} / 5
          </p>
        </div>
      </div>

      {/* 2. CONTENT CONTAINER */}
      <div style={{
        maxWidth: '1100px',
        margin: '2rem auto 0 auto',
        padding: '0 1.5rem',
        display: 'grid',
        gridTemplateColumns: '1fr 340px',
        gap: '2.5rem'
      }}>
        
        {/* LEFT COLUMN: MAIN DETAILS */}
        <div>
          {/* TAB NAVIGATION */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            borderBottom: '2px solid #e2e8f0',
            marginBottom: '2rem'
          }}>
            {['overview', 'itinerary', 'inclusions'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '0.8rem 1.2rem',
                  border: 'none',
                  background: 'none',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: activeTab === tab ? '#f37021' : '#64748b',
                  borderBottom: activeTab === tab ? '3px solid #f37021' : 'none',
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                  fontFamily: 'system-ui, sans-serif'
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div>
              <h2 style={{ fontSize: '1.6rem', color: '#0f172a', marginBottom: '1rem' }}>Package Overview</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#334155', fontFamily: 'system-ui, sans-serif' }}>
                {pkg.overview}
              </p>
            </div>
          )}

          {/* ITINERARY TAB */}
          {activeTab === 'itinerary' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h2 style={{ fontSize: '1.6rem', color: '#0f172a', margin: 0 }}>Day-by-Day Itinerary</h2>
              {pkg.itinerary?.map((item, index) => (
                <div key={index} style={{
                  backgroundColor: '#ffffff',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                  borderLeft: '4px solid #f37021'
                }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#f37021', textTransform: 'uppercase', fontFamily: 'system-ui, sans-serif' }}>
                    {item.day}
                  </span>
                  <h3 style={{ fontSize: '1.2rem', margin: '0.3rem 0 0.5rem 0', color: '#0f172a' }}>{item.title}</h3>
                  <p style={{ margin: 0, color: '#475569', fontSize: '0.95rem', fontFamily: 'system-ui, sans-serif', lineHeight: '1.5' }}>
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* INCLUSIONS TAB */}
          {activeTab === 'inclusions' && (
            <div>
              <h2 style={{ fontSize: '1.6rem', color: '#0f172a', marginBottom: '1rem' }}>What's Included</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {pkg.inclusions?.map((inc, index) => (
                  <li key={index} style={{
                    padding: '0.8rem 1rem',
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    marginBottom: '0.6rem',
                    fontSize: '0.95rem',
                    fontFamily: 'system-ui, sans-serif',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem'
                  }}>
                    <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span> {inc}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: BOOKING CARD */}
        <div>
          <div style={{
            position: 'sticky',
            top: '2rem',
            backgroundColor: '#ffffff',
            padding: '2rem',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <span style={{ fontSize: '0.85rem', color: '#64748b', fontFamily: 'system-ui, sans-serif' }}>
              Starting from
            </span>
            <div style={{ fontSize: '2.2rem', fontWeight: '700', color: '#0b4284', margin: '0.2rem 0 1rem 0' }}>
              ₹{pkg.price ? Number(pkg.price).toLocaleString('en-IN') : 'N/A'}
              <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '400' }}> / person</span>
            </div>

            {/* REDIRECT BUTTON TO CONTACT US */}
            <button 
              onClick={handleBookingRedirect}
              style={{
                width: '100%',
                padding: '1rem',
                backgroundColor: '#f37021',
                color: '#ffffff',
                border: 'none',
                borderRadius: '30px',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: 'pointer',
                fontFamily: 'system-ui, sans-serif',
                boxShadow: '0 6px 18px rgba(243, 112, 33, 0.3)',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d95d12'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f37021'}
            >
              Book This Holiday
            </button>

            <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '1rem', fontFamily: 'system-ui, sans-serif' }}>
              Instant confirmation • No hidden booking fees
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}