import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CountryDropdown from '../components/CountryDropdown';
import './Visa.css';

export default function Visa() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [activeTab, setActiveTab] = useState('Asia');
  const navigate = useNavigate();

  // Comprehensive Region Database matching 180+ global visa destinations
  const regionData = {
    Asia: [
      {
        subregion: 'CENTRAL ASIA',
        countries: ['Tajikistan', 'Uzbekistan', 'Kazakhstan', 'Turkmenistan', 'Kyrgyzstan'],
      },
      {
        subregion: 'EAST ASIA',
        countries: ['China', 'North Korea', 'South Korea', 'Japan', 'Hong Kong', 'Taiwan'],
      },
      {
        subregion: 'SOUTH ASIA',
        countries: ['Sri Lanka', 'Bangladesh', 'Afghanistan', 'Pakistan', 'Bhutan', 'Nepal', 'The Maldives'],
      },
      {
        subregion: 'SOUTHEAST ASIA',
        countries: ['Brunei', 'Cambodia', 'Indonesia', 'Laos', 'Malaysia', 'Myanmar', 'Philippines', 'Singapore', 'Thailand', 'Timor Leste', 'Vietnam', 'Christmas Island', 'Cocos Islands'],
      },
      {
        subregion: 'WESTERN ASIA',
        countries: ['Georgia', 'Armenia', 'Azerbaijan', 'Turkey', 'Cyprus'],
      },
    ],
    Europe: [
      {
        subregion: 'ALL EUROPEAN DESTINATIONS',
        countries: ['Albania', 'Andorra', 'Austria', 'Azerbaijan', 'Belarus', 'Belgium', 'Bosnia and Herzegovina', 'Bulgaria', 'Croatia', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Georgia', 'Germany', 'Greece', 'Holy See (Vatican City State)', 'Hungary', 'Iceland', 'Italy', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Malta', 'Moldova', 'Monaco', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Romania', 'Russian Federation', 'San Marino', 'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Ukraine', 'United Kingdom', 'Schengen'],
      },
    ],
    'North America': [
      {
        subregion: 'ALL NORTH AMERICAN DESTINATIONS',
        countries: ['Antigua and Barbuda', 'Bahamas', 'Barbados', 'Belize', 'Bermuda', 'Canada', 'Costa Rica', 'Cuba', 'Dominican Republic', 'El Salvador', 'Grenada', 'Guadeloupe', 'Guatemala', 'Haiti', 'Honduras', 'Mexico', 'Nicaragua', 'Panama', 'Puerto Rico', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'United States'],
      },
    ],
    'South America': [
      {
        subregion: 'ALL SOUTH AMERICAN DESTINATIONS',
        countries: ['Argentina', 'Aruba', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Ecuador', 'French Guiana', 'Guyana', 'Paraguay', 'Peru', 'South Georgia and South S.S.', 'Suriname', 'Trinidad and Tobago', 'Uruguay', 'Venezuela'],
      },
    ],
    Australia: [
      {
        subregion: 'OCEANIA & AUSTRALIA',
        countries: ['American Samoa', 'Australia', 'Fiji', 'Federated States of Micronesia', 'Nauru', 'New Zealand', 'Papua New Guinea', 'Samoa', 'Solomon Islands', 'Tonga', 'Vanuatu'],
      },
    ],
    Africa: [
      {
        subregion: 'ALL AFRICAN DESTINATIONS',
        countries: ['Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cameroon', 'Cape Verde', 'Central African Republic', 'Chad', 'Comoros', 'Congo (DRC)', 'Cote d`Ivoire', 'Djibouti', 'Dominica', 'Equatorial Guinea', 'Eritrea', 'Ethiopia', 'Gabon', 'Ghana', 'Gambia', 'Guinea', 'Kenya', 'Lesotho', 'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Mauritius', 'Morocco', 'Mozambique', 'Namibia', 'Niger', 'Nigeria', 'Rwanda', 'Sao Tome and Principe', 'Senegal', 'Seychelles', 'Sierra Leone', 'Somalia', 'South Africa', 'South Sudan', 'Sudan', 'United Republic of Tanzania', 'Togo', 'Tunisia', 'Uganda', 'Zambia', 'Zimbabwe'],
      },
    ],
    Gulf: [
      {
        subregion: 'GULF COOPERATION COUNCIL (GCC)',
        countries: ['Iraq', 'Kuwait', 'Oman', 'Qatar', 'Saudi Arabia', 'Dubai', 'Bahrain'],
      },
    ],
  };

  // Added high-res Unsplash image URLs for the 6 popular panels
  const visaCountries = [
    {
      country: 'UNITED ARAB EMIRATES',
      flag: '🇦🇪',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80',
      type: 'Tourist E-Visa (30 / 60 Days)',
      processingTime: '2 - 4 Working Days',
      stayPeriod: '30 / 60 Days',
      documents: [
        'Passport Bio Page Scan (min. 6 months validity)',
        'Passport Size Photo (White Background)',
        'Confirmed Return Flight Ticket',
      ],
    },
    {
      country: 'SINGAPORE',
      flag: '🇸🇬',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80',
      type: 'E-Visa',
      processingTime: '3 - 5 Working Days',
      stayPeriod: 'Up to 30 Days',
      documents: [
        'Original Passport (valid for 6+ months)',
        '2 Passport Photos (Matte finish)',
        'Bank Statement (Last 6 months, signed & stamped)',
        'Form 14A filled and signed',
      ],
    },
    {
      country: 'FRANCE',
      flag: '🇪🇺',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80',
      type: 'Short-Stay Schengen Tourist Visa',
      processingTime: '15 - 20 Working Days',
      stayPeriod: '90 Days',
      documents: [
        'Valid Passport with at least 2 blank pages',
        'Cover Letter & day-wise travel itinerary',
        'ITR documents (Last 3 Years)',
        'Bank statements (Last 6 months)',
        'Travel Health Insurance (min. €30,000 coverage)',
      ],
    },
    {
      country: 'UNITED KINGDOM',
      flag: '🇬🇧',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80',
      type: 'Standard Visitor Visa (6 Months)',
      processingTime: '15 - 21 Working Days',
      stayPeriod: '6 Months Multiple Entry',
      documents: [
        'Employment proof / Payslips (Last 6 months)',
        'Bank statements & property/asset proof',
        'Hotel bookings & flight itineraries',
        'Detailed travel plan',
      ],
    },
    {
      country: 'THAILAND',
      flag: '🇹🇭',
      image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=600&q=80',
      type: 'Visa on Arrival / E-Visa',
      processingTime: '1 - 3 Working Days',
      stayPeriod: '15 / 30 Days',
      documents: [
        'Passport Scan (6 months validity)',
        'Hotel Booking Confirmation',
        'Confirmed Return Flight Ticket',
      ],
    },
    {
      country: 'UNITED STATES',
      flag: '🇺🇸',
      image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=600&q=80',
      type: 'B1/B2 Tourist Visa',
      processingTime: 'Interview Slot Dependent',
      stayPeriod: 'Up to 10 Years Multiple Entry',
      documents: [
        'DS-160 Confirmation Page',
        'Appointment Confirmation',
        'Financial & Employment Proof',
      ],
    },
  ];

  const filteredVisas = visaCountries.filter((item) =>
    item.country.toLowerCase().includes(selectedCountry.toLowerCase())
  );

  const handleApplyClick = (countryName) => {
    navigate(`/contact?subject=Visa Assistance for ${encodeURIComponent(countryName)}`);
  };

  return (
    <div className="visa-page">
      <div className="visa-container">
        
        {/* Hero Section */}
        <div className="visa-hero">
          <h1 className="visa-hero-title">Hassle-Free Global Visa Assistance</h1>
          <p className="visa-hero-subtitle">
            Expert documentation guidance, embassy filing, and seamless visa processing for worldwide destinations.
          </p>
          
          {/* Custom Search Dropdown */}
          <CountryDropdown onSelectCountry={(country) => setSelectedCountry(country)} />
        </div>

        {/* Value Proposition / Services Bar */}
        <div className="visa-services-bar">
          <div className="visa-service-card">
            <h3>Document Verification</h3>
            <p>Thorough review of flight, hotel, and financial records to prevent unnecessary delays.</p>
          </div>
          <div className="visa-service-card">
            <h3>Appointment Scheduling</h3>
            <p>Timely booking for biometrics and embassy interviews as per availability.</p>
          </div>
          <div className="visa-service-card">
            <h3>Cover Letter Assistance</h3>
            <p>Tailored travel itineraries and formal cover letter preparation for visa approval.</p>
          </div>
          <div className="visa-service-card">
            <h3>End-to-End Tracking</h3>
            <p>Continuous status tracking and updates right until your visa is issued.</p>
          </div>
        </div>

        {/* Popular Visa Destinations Cards Grid with Images */}
        <h2 className="visa-section-title">Popular Visa Destinations</h2>
        <div className="visa-grid">
          {filteredVisas.length > 0 ? (
            filteredVisas.map((visa, idx) => (
              <div key={idx} className="visa-card">
                <div>
                  {/* Destination Banner Image */}
                  <div className="visa-card-image-wrapper">
                    <img src={visa.image} alt={visa.country} className="visa-card-image" />
                    <span className="visa-card-flag-overlay">{visa.flag}</span>
                  </div>

                  <div className="visa-card-body">
                    <h3 className="visa-country-name">{visa.country}</h3>
                    <span className="visa-badge">{visa.type}</span>

                    <ul className="visa-details-list">
                      <li><strong>Processing Time:</strong> {visa.processingTime}</li>
                      <li><strong>Stay Validity:</strong> {visa.stayPeriod}</li>
                    </ul>

                    <div className="visa-docs-title">Key Documents Required:</div>
                    <ul className="visa-docs-list">
                      {visa.documents.map((doc, dIdx) => (
                        <li key={dIdx}>{doc}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="visa-card-footer">
                  <button
                    type="button"
                    className="visa-apply-btn"
                    onClick={() => handleApplyClick(visa.country)}
                  >
                    Apply For Visa
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem' }}>
              <p style={{ color: '#012d63', fontSize: '1.2rem', fontWeight: '700' }}>
                Looking for visa processing for {selectedCountry}?
              </p>
              <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
                We process visas for {selectedCountry}! Click below to speak directly with our visa consultant.
              </p>
              <button
                type="button"
                className="visa-apply-btn"
                style={{ maxWidth: '300px', margin: '0 auto' }}
                onClick={() => handleApplyClick(selectedCountry)}
              >
                Request Consultation for {selectedCountry}
              </button>
            </div>
          )}
        </div>

        {/* 3-Step Process Timeline Card */}
        <div className="visa-process-card">
          <h2 className="visa-process-title">Applying With Marvel Holidays Is This Simple</h2>
          <div className="visa-process-timeline">
            <div className="visa-process-line"></div>

            <div className="visa-process-step">
              <div className="visa-step-icon-wrapper">
                <span className="visa-step-icon">📝</span>
              </div>
              <div className="visa-step-dot"></div>
              <p className="visa-step-text">Submit documents & details online</p>
            </div>

            <div className="visa-process-step">
              <div className="visa-step-icon-wrapper">
                <span className="visa-step-icon">🔍</span>
              </div>
              <div className="visa-step-dot"></div>
              <p className="visa-step-text">We verify documents & process your application</p>
            </div>

            <div className="visa-process-step">
              <div className="visa-step-icon-wrapper">
                <span className="visa-step-icon">🎉</span>
              </div>
              <div className="visa-step-dot"></div>
              <p className="visa-step-text">Receive your approved Visa</p>
            </div>
          </div>
        </div>

        {/* General Document Checklist Section */}
        <div className="visa-checklist-card">
          <h2 className="visa-section-title" style={{ marginBottom: '2rem' }}>General Document Checklist</h2>
          <div className="visa-checklist-grid">
            
            <div className="visa-checklist-group">
              <h4>Salaried Employees</h4>
              <ul>
                <li>Payslips (Last 3 - 6 months)</li>
                <li>NOC / Leave approval letter from employer</li>
                <li>Form 16 / ITR documents</li>
              </ul>
            </div>

            <div className="visa-checklist-group">
              <h4>Self-Employed / Business</h4>
              <ul>
                <li>Business registration proof / GST</li>
                <li>Company bank statements (6 months)</li>
                <li>Company ITR records</li>
              </ul>
            </div>

            <div className="visa-checklist-group">
              <h4>Students & Dependents</h4>
              <ul>
                <li>School / College ID card</li>
                <li>Bonafide Certificate</li>
                <li>Sponsor financial & ID documents</li>
              </ul>
            </div>

            <div className="visa-checklist-group">
              <h4>Retirees & Seniors</h4>
              <ul>
                <li>Pension statement records</li>
                <li>Proof of retirement funds / Fixed deposits</li>
                <li>Personal bank statements</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Global Destinations Region Tabs */}
        <div className="visa-tabs-section">
          <div className="visa-tabs-header">
            {Object.keys(regionData).map((region) => (
              <button
                key={region}
                className={`visa-tab-btn ${activeTab === region ? 'active' : ''}`}
                onClick={() => setActiveTab(region)}
              >
                {region}
              </button>
            ))}
          </div>

          <div className="visa-tab-content">
            {regionData[activeTab].map((sub, sIdx) => (
              <div key={sIdx} className="visa-region-subgroup">
                <span className="visa-subgroup-title">{sub.subregion} :</span>
                <div className="visa-country-inline-list">
                  {sub.countries.map((c, cIdx) => (
                    <React.Fragment key={cIdx}>
                      <span className="visa-country-item" onClick={() => handleApplyClick(c)}>
                        {c}
                      </span>
                      {cIdx < sub.countries.length - 1 && <span className="visa-separator">|</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <h2 className="visa-section-title">Frequently Asked Questions</h2>
        <div className="visa-faq-container">
          <div className="visa-faq-item">
            <h3 className="visa-faq-q">Q: How far in advance should I apply for my visa?</h3>
            <p className="visa-faq-a">We recommend applying at least 30 to 45 days prior to your intended departure date for sticker visas, and 10 to 15 days for e-visas.</p>
          </div>
          <div className="visa-faq-item">
            <h3 className="visa-faq-q">Q: Does Marvel Holidays guarantee visa approval?</h3>
            <p className="visa-faq-a">Visa approval is solely at the discretion of the respective embassy or consulate. However, our team ensures your documentation strictly meets all embassy guidelines to maximize approval success.</p>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="visa-help-banner">
          <h2 className="visa-help-title">Need Visa Guidance for Other Countries?</h2>
          <p className="visa-help-desc">
            We process visas for over 180+ countries worldwide, including Japan, Vietnam, Australia, USA, and Canada.
          </p>
          <a
            href="https://wa.me/917824887999?text=Hi%20Marvel%20Holidays,%20I%20need%20visa%20assistance."
            target="_blank"
            rel="noopener noreferrer"
            className="visa-contact-btn"
          >
            💬 Chat with Visa Consultant
          </a>
        </div>

      </div>
    </div>
  );
}