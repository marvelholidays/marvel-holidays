import React from 'react';
import { packagesData } from '../../data/packagesData';
import './HandpickedPackages.css';

export default function HandpickedPackages({ onSelectPackage }) {
  return (
    <section className="handpicked-packages">
      <span className="home-section-kicker">POPULAR DESTINATIONS</span>
      <h2>Handpicked Packages</h2>

      <div className="handpicked-packages__grid">
        {packagesData.slice(0, 3).map((pkg) => (
          <button
            type="button"
            key={pkg.id}
            className="package-arch-card"
            onClick={() => onSelectPackage(pkg)}
            aria-label={`View package for ${pkg.destination}`}
          >
            <img src={pkg.image} alt={pkg.title || pkg.destination} />
            <div className="package-arch-card__details">
              <div className="package-arch-card__stars" aria-label="Featured package">★★★</div>
              <span className="package-arch-card__category">{pkg.category}</span>
              <h3>{pkg.destination}</h3>
              <p>From ₹{Number(pkg.price).toLocaleString('en-IN')}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
