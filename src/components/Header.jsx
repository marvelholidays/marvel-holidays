import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const categories = [
    { name: 'Domestic Packages', slug: 'Domestic', icon: '🇮🇳' },
    { name: 'International Packages', slug: 'International', icon: '✈️' },
    { name: 'Honeymoon Packages', slug: 'Honeymoon', icon: '💖' },
    { name: 'Family Trip Packages', slug: 'Family', icon: '👨‍👩‍👧‍👦' },
    { name: 'Customized Packages', slug: 'Customized', icon: '🎨' },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setDropdownOpen(false);
  }, [location.pathname]);

  const handleCategorySelect = (slug) => {
    setDropdownOpen(false);
    if (slug === 'Customized') {
      navigate('/contact');
    } else {
      navigate(`/holidays?category=${slug}`);
    }
  };

  return (
    <header className="site-header">
      <div className="navbar-container">

        {/* Brand Logo */}
        <Link to="/" className="navbar-brand">
          <span className="brand-marvel">MARVEL</span>
          <span className="brand-holidays">HOLIDAYS</span>
        </Link>

        {/* Navigation Links */}
        <nav className="navbar-links" aria-label="Main navigation">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>

          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            About Us
          </NavLink>

          {/* Smooth Dropdown Container */}
          <div className="holidays-dropdown" ref={dropdownRef}>
            <button
              type="button"
              className={`nav-link dropdown-toggle ${
                dropdownOpen || location.pathname.startsWith('/holidays') ? 'dropdown-active' : ''
              }`}
              onClick={() => setDropdownOpen((open) => !open)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              Holidays
              <span className={`dropdown-arrow ${dropdownOpen ? 'rotated' : ''}`}>
                ▾
              </span>
            </button>

            {/* Always kept in DOM for CSS transitions */}
            <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
              <div className="dropdown-heading">Select Category</div>
              {categories.map((cat) => (
                <button
                  type="button"
                  key={cat.slug}
                  className="dropdown-item"
                  onClick={() => handleCategorySelect(cat.slug)}
                >
                  <span className="dropdown-icon">{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>

          <NavLink to="/visa" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Visa
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Contact Us
          </NavLink>
        </nav>

        {/* Quote Button */}
        <div className="navbar-quote-wrapper">
          <Link to="/contact" className="navbar-quote">
            Get a Quote
          </Link>
        </div>

      </div>
    </header>
  );
}