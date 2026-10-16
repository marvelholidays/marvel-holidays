import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { packagesData } from '../data/packagesData';
import './Packages.css';

export default function Packages() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(50000);

  // Filter logic based on inputs
  const filteredPackages = packagesData.filter((pkg) => {
    const matchesSearch =
      pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.destination.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || pkg.category === selectedCategory;
    const matchesPrice = pkg.price <= maxPrice;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="packages-container">
      <h2 className="section-title">Explore Holiday Packages</h2>

      {/* Filter Bar Controls */}
      <div className="filter-bar">
        {/* Search Field */}
        <div className="filter-group">
          <label className="filter-label">
            Search Destination
          </label>
          <input
            type="text"
            placeholder="e.g. Kerala, Bali..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="filter-input"
          />
        </div>

        {/* Category Dropdown */}
        <div className="filter-group">
          <label className="filter-label">
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="filter-select"
          >
            <option value="All">All Categories</option>
            <option value="Nature & Relaxation">Nature & Relaxation</option>
            <option value="Adventure">Adventure</option>
            <option value="International">International</option>
          </select>
        </div>

        {/* Max Price Slider */}
        <div className="filter-group">
          <div className="filter-label-row">
            <span>Max Price</span>
            <span>₹{maxPrice.toLocaleString('en-IN')}</span>
          </div>
          <input
            type="range"
            min="15000"
            max="50000"
            step="2500"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="filter-range"
          />
        </div>
      </div>

      {/* Package Results Cards */}
      {filteredPackages.length === 0 ? (
        <p className="no-results">
          No holiday packages match your current filter selection.
        </p>
      ) : (
        <div className="package-grid">
          {filteredPackages.map((pkg) => (
            <div key={pkg.id} className="package-card">
              <img src={pkg.image} alt={pkg.title} className="package-image" />
              <div className="package-content">
                <span className="package-category">
                  {pkg.category}
                </span>
                <h3 className="package-title">{pkg.title}</h3>
                <p className="package-meta">
                  📍 {pkg.destination} • ⏱️ {pkg.duration}
                </p>
                <div className="package-footer">
                  <span className="package-price">₹{pkg.price.toLocaleString('en-IN')}</span>
                  <Link to={`/packages/${pkg.id}`} className="btn-primary">
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