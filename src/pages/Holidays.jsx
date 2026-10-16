import React from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { packagesData } from '../data/packagesData';
import './Holidays.css';

export default function Holidays() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const currentCategory = searchParams.get('category') || 'Domestic';

  const categories = [
    {
      slug: 'Domestic',
      name: 'Domestic',
      desc: 'Top destinations across India',
      icon: '🇮🇳',
    },
    {
      slug: 'International',
      name: 'International',
      desc: 'Exotic global vacations',
      icon: '✈️',
    },
    {
      slug: 'Honeymoon',
      name: 'Honeymoon',
      desc: 'Romantic getaways for couples',
      icon: '💖',
    },
    {
      slug: 'Family',
      name: 'Family Trip',
      desc: 'Memorable vacations for all ages',
      icon: '👨‍👩‍👧‍👦',
    },
    {
      slug: 'Customized',
      name: 'Customized',
      desc: 'Tailor-made private itineraries',
      icon: '🎨',
    },
  ];

  const handleCardClick = (slug) => {
    if (slug === 'Customized') {
      navigate('/quote');
    } else {
      setSearchParams({ category: slug });
    }
  };

  const filteredPackages = packagesData.filter(
    (pkg) =>
      (pkg.category || '').toLowerCase() === currentCategory.toLowerCase()
  );

  const formattedPrice = (price) => {
    if (typeof price === 'number') {
      return price.toLocaleString('en-IN');
    }

    return price || 'Get a Quote';
  };

  return (
    <div className="holidays-page">
      <div className="holidays-container">
        {/* Page heading */}
        <div className="holidays-heading">
          <span className="holidays-eyebrow">
            Explore Categories
          </span>

          <h1 className="holidays-title">
            Holiday Categories
          </h1>
        </div>

        {/* Category cards */}
        <div className="holiday-categories">
          {categories.map((cat) => {
            const isSelected =
              currentCategory.toLowerCase() === cat.slug.toLowerCase();

            return (
              <button
                type="button"
                key={cat.slug}
                className={`holiday-category-card ${
                  isSelected ? 'active' : ''
                }`}
                onClick={() => handleCardClick(cat.slug)}
                aria-pressed={isSelected}
              >
                <div className="holiday-category-icon">
                  {cat.icon}
                </div>

                <h3 className="holiday-category-name">
                  {cat.name}
                </h3>

                <p className="holiday-category-description">
                  {cat.desc}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected category packages */}
        <div className="packages-heading">
          <h2 className="packages-title">
            {categories.find(
              (cat) =>
                cat.slug.toLowerCase() === currentCategory.toLowerCase()
            )?.name || currentCategory}{' '}
            Packages
          </h2>

          <span className="packages-count">
            {filteredPackages.length}{' '}
            {filteredPackages.length === 1
              ? 'Package'
              : 'Packages'}{' '}
            Available
          </span>
        </div>

        {filteredPackages.length > 0 ? (
          <div className="holiday-packages-grid">
            {filteredPackages.map((pkg) => (
              <article
                key={pkg.id}
                className="holiday-package-card"
              >
                <div className="holiday-package-image-wrapper">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="holiday-package-image"
                    loading="lazy"
                  />

                  <span className="holiday-package-duration">
                    {pkg.duration}
                  </span>
                </div>

                <div className="holiday-package-content">
                  <div>
                    <h3 className="holiday-package-title">
                      {pkg.title}
                    </h3>
                  </div>

                  <div className="holiday-package-footer">
                    <div>
                      <span className="holiday-price-label">
                        Starting From
                      </span>

                      <span className="holiday-package-price">
                        ₹{formattedPrice(pkg.price)}
                      </span>
                    </div>

                    <Link
                      to={`/packages/${pkg.id}`}
                      className="holiday-view-details"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="holidays-empty-state">
            <p className="holidays-empty-title">
              No specific packages listed under this category yet.
            </p>

            <p className="holidays-empty-description">
              We can design a customized itinerary specifically for your
              trip!
            </p>

            <button
              type="button"
              className="holidays-contact-button"
              onClick={() => navigate('/contact')}
            >
              Contact Us for Custom Booking
            </button>
          </div>
        )}
      </div>
    </div>
  );
}