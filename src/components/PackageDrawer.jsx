import React from 'react';
import { Link } from 'react-router-dom';
import './PackageDrawer.css';

export default function PackageDrawer({ packageData, onClose }) {
  if (!packageData) return null;

  const {
    id = '',
    category = 'Package',
    image = '',
    title = 'Holiday Package',
    destination = 'Destination',
    duration = 'N/A',
    rating = '5.0',
    overview = '',
    inclusions = [],
    price = 0,
  } = packageData;

  const formattedPrice = Number(price || 0).toLocaleString('en-IN');

  return (
    <div
      className="package-drawer-overlay"
      onClick={onClose}
    >
      <div
        className="package-drawer-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="package-drawer-top">
            <span className="package-drawer-category">
              {category}
            </span>

            <button
              type="button"
              className="package-drawer-close"
              onClick={onClose}
              aria-label="Close package details"
            >
              ✕
            </button>
          </div>

          {image && (
            <img
              src={image}
              alt={title}
              className="package-drawer-image"
            />
          )}

          <h2 className="package-drawer-title">
            {title}
          </h2>

          <p className="package-drawer-meta">
            📍 {destination} • ⏱️ {duration} • ★ {rating}
          </p>

          {overview && (
            <p className="package-drawer-overview">
              {overview}
            </p>
          )}

          {Array.isArray(inclusions) && inclusions.length > 0 && (
            <>
              <h4 className="package-drawer-highlights-title">
                Key Highlights
              </h4>

              <ul className="package-drawer-highlights">
                {inclusions.map((inc, index) => (
                  <li key={index}>{inc}</li>
                ))}
              </ul>
            </>
          )}
        </div>

        <div className="package-drawer-footer">
          <div className="package-drawer-footer-content">
            <div>
              <span className="package-drawer-price-label">
                Starting from
              </span>

              <span className="package-drawer-price">
                ₹{formattedPrice}
              </span>
            </div>

            <Link
              to={`/packages/${id}`}
              onClick={onClose}
              className="package-drawer-itinerary"
            >
              Full Itinerary →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}