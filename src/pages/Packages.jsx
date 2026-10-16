import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { packagesData } from '../data/packagesData';

export default function Packages() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(50000);

  // Filter logic based on inputs
  const filteredPackages = packagesData.filter((pkg) => {
    const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          pkg.destination.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || pkg.category === selectedCategory;
    const matchesPrice = pkg.price <= maxPrice;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="container">
      <h2 className="section-title">Explore Holiday Packages</h2>

      {/* Filter Bar Controls */}
      <div style={{
        background: '#ffffff',
        padding: '1.5rem',
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        marginBottom: '2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.25rem',
        alignItems: 'end'
      }}>
        {/* Search Field */}
        <div>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', color: '#475569' }}>
            Search Destination
          </label>
          <input
            type="text"
            placeholder="e.g. Kerala, Bali..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
          />
        </div>

        {/* Category Dropdown */}
        <div>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', color: '#475569' }}>
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: '6px', border: '1px solid #cbd5e1', backgroundColor: '#fff' }}
          >
            <option value="All">All Categories</option>
            <option value="Nature & Relaxation">Nature & Relaxation</option>
            <option value="Adventure">Adventure</option>
            <option value="International">International</option>
          </select>
        </div>

        {/* Max Price Slider */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', color: '#475569' }}>
            <span>Max Price</span>
            <span>₹{maxPrice.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="15000"
            max="50000"
            step="2500"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            style={{ width: '100%', cursor: 'pointer' }}
          />
        </div>
      </div>

      {/* Package Results Cards */}
      {filteredPackages.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#64748b', padding: '2rem' }}>
          No holiday packages match your current filter selection.
        </p>
      ) : (
        <div className="package-grid">
          {filteredPackages.map((pkg) => (
            <div key={pkg.id} className="package-card">
              <img src={pkg.image} alt={pkg.title} className="package-image" />
              <div className="package-content">
                <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: '#0284c7', letterSpacing: '0.05em' }}>
                  {pkg.category}
                </span>
                <h3 className="package-title" style={{ marginTop: '0.25rem' }}>{pkg.title}</h3>
                <p className="package-meta">{pkg.destination} • {pkg.duration}</p>
                <div className="package-footer">
                  <span className="package-price">₹{pkg.price.toLocaleString()}</span>
                  <Link to={`/packages/${pkg.id}`} className="btn-primary" style={{ display: 'inline-block', textAlign: 'center' }}>
                    View Itinerary
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}