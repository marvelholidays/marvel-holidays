import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const categories = [
    { name: 'Domestic Packages', slug: 'Domestic', icon: '🇮🇳' },
    { name: 'International Packages', slug: 'International', icon: '✈️' },
    { name: 'Honeymoon Packages', slug: 'Honeymoon', icon: '💖' },
    { name: 'Family Trip Packages', slug: 'Family', icon: '👨‍👩‍👧‍👦' },
    { name: 'Customized Packages', slug: 'Customized', icon: '🎨' },
  ];

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

        {/* Text brand instead of logo image */}
        <Link to="/" className="navbar-brand">
          <span className="brand-marvel">MARVEL</span>
          <span className="brand-holidays">HOLIDAYS</span>
        </Link>

        {/* Center navigation */}
        <nav className="navbar-links" aria-label="Main navigation">
          <Link to="/" className="nav-link">Home</Link>

          <Link to="/about" className="nav-link">About Us</Link>

          <div className="holidays-dropdown" ref={dropdownRef}>
            <button
              type="button"
              className={`nav-link dropdown-toggle ${
                dropdownOpen ? 'dropdown-active' : ''
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

            {dropdownOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-heading">Select Category</div>

                {categories.map((cat) => (
                  <button
                    type="button"
                    key={cat.slug}
                    className="dropdown-item"
                    onClick={() => handleCategorySelect(cat.slug)}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link to="/visa" className="nav-link">Visa</Link>

          <Link to="/contact" className="nav-link">Contact Us</Link>
        </nav>

        {/* Quote button */}
        <div className="navbar-quote-wrapper">
          <Link to="/quote" className="navbar-quote">
            Get a Quote
          </Link>
        </div>

      </div>
    </header>
  );
}