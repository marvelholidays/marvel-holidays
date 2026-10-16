import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import emailjs from '@emailjs/browser';
import './Quote.css';

// Supabase Initialization
const SUPABASE_URL = "https://nnzhsnnqutklvsgnqtbw.supabase.co";
const SUPABASE_KEY = "sb_publishable_8qrjH62JFCiEfaKj3RYIyA_1GeGNyA3";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default function Quote() {
  const [formData, setFormData] = useState({
    destination: '',
    travelDate: '',
    days: '5',
    phone: '',
  });

  const [travellers, setTravellers] = useState({
    adults: 2,
    children: 0,
    infants: 0,
  });

  const [loading, setLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const totalTravellers = travellers.adults + travellers.children + travellers.infants;

  useEffect(() => {
    emailjs.init("swgkKUaUHOaKrbxvX");
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const updateTravellerCount = (type, delta) => {
    setTravellers((prev) => {
      const updated = prev[type] + delta;
      if (type === 'adults' && updated < 1) return prev;
      if (updated < 0) return prev;
      return { ...prev, [type]: updated };
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Exact structure matching quote_enquiries table
    const payload = {
      destination: formData.destination,
      travel_date: formData.travelDate,
      adults: travellers.adults,
      children: travellers.children,
      infants: travellers.infants,
      total_travellers: totalTravellers,
      days: formData.days,
      phone: formData.phone,
    };

    try {
      // 1. Insert into separate quote_enquiries table
      const { error: dbError } = await supabase
        .from("quote_enquiries")
        .insert([payload]);

      if (dbError) throw dbError;

      // 2. Trigger EmailJS notification
      await emailjs.send(
        "service_grpq7cj",
        "template_jazwyhm",
        {
          destination: payload.destination,
          travelDate: payload.travel_date,
          days: payload.days,
          phone: payload.phone,
          totalTravellers: payload.total_travellers,
          adults: payload.adults,
          children: payload.children,
          infants: payload.infants,
        },
        "swgkKUaUHOaKrbxvX"
      );

      alert("Thank you! Your quote request has been saved.");

      // Reset form
      setFormData({
        destination: '',
        travelDate: '',
        days: '5',
        phone: '',
      });
      setTravellers({ adults: 2, children: 0, infants: 0 });
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit quote request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="quote-page">
      <section className="quote-hero">
        <div className="quote-hero-content">
          <span className="quote-eyebrow">MARVEL HOLIDAYS</span>
          <h1>
            Plan Your <span>Dream Holiday</span>
          </h1>
          <p>
            Tell us your travel plans and let us create a memorable holiday just for you.
          </p>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-container">
          <Link to="/holidays" className="quote-back-link">
            ← Back to Holidays
          </Link>

          <div className="quote-form-card">
            <div className="quote-form-heading">
              <span>YOUR NEXT ADVENTURE</span>
              <h2>Get a Quote</h2>
              <p>Fill in your travel details below.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="quote-form-grid">
                {/* Destination */}
                <div className="quote-field quote-field-full">
                  <label htmlFor="quote-destination">Destination *</label>
                  <input
                    id="quote-destination"
                    name="destination"
                    type="text"
                    placeholder="Where do you want to go?"
                    value={formData.destination}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Travel Date */}
                <div className="quote-field">
                  <label htmlFor="quote-date">Travel Date *</label>
                  <input
                    id="quote-date"
                    name="travelDate"
                    type="date"
                    min={new Date().toLocaleDateString('en-CA')}
                    value={formData.travelDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* No. of Travellers Popover Selector */}
                <div className="quote-field" ref={dropdownRef} style={{ position: 'relative' }}>
                  <label>No. of Travellers *</label>
                  <button
                    type="button"
                    className="quote-traveller-trigger"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span>
                      {totalTravellers} {totalTravellers === 1 ? 'Traveller' : 'Travellers'} (
                      {travellers.adults} Adult{travellers.adults > 1 ? 's' : ''}
                      {travellers.children > 0 && `, ${travellers.children} Child${travellers.children > 1 ? 'ren' : ''}`}
                      {travellers.infants > 0 && `, ${travellers.infants} Infant${travellers.infants > 1 ? 's' : ''}`}
                      )
                    </span>
                    <span className="dropdown-arrow">▼</span>
                  </button>

                  {/* Popover Dropdown Card */}
                  {isDropdownOpen && (
                    <div className="traveller-popover">
                      {/* Adult Row */}
                      <div className="traveller-row">
                        <div className="traveller-label">
                          <span className="label-title">Adult</span>
                          <span className="label-subtitle">12+ yrs</span>
                        </div>
                        <div className="counter-box">
                          <button
                            type="button"
                            className="counter-btn"
                            onClick={() => updateTravellerCount('adults', -1)}
                            disabled={travellers.adults <= 1}
                          >
                            -
                          </button>
                          <span className="counter-value">{travellers.adults}</span>
                          <button
                            type="button"
                            className="counter-btn"
                            onClick={() => updateTravellerCount('adults', 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Child Row */}
                      <div className="traveller-row">
                        <div className="traveller-label">
                          <span className="label-title">Child</span>
                          <span className="label-subtitle">2-12 yrs</span>
                        </div>
                        <div className="counter-box">
                          <button
                            type="button"
                            className="counter-btn"
                            onClick={() => updateTravellerCount('children', -1)}
                            disabled={travellers.children <= 0}
                          >
                            -
                          </button>
                          <span className="counter-value">{travellers.children}</span>
                          <button
                            type="button"
                            className="counter-btn"
                            onClick={() => updateTravellerCount('children', 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Infant Row */}
                      <div className="traveller-row">
                        <div className="traveller-label">
                          <span className="label-title">Infant</span>
                          <span className="label-subtitle">Below 2 yrs</span>
                        </div>
                        <div className="counter-box">
                          <button
                            type="button"
                            className="counter-btn"
                            onClick={() => updateTravellerCount('infants', -1)}
                            disabled={travellers.infants <= 0}
                          >
                            -
                          </button>
                          <span className="counter-value">{travellers.infants}</span>
                          <button
                            type="button"
                            className="counter-btn"
                            onClick={() => updateTravellerCount('infants', 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="traveller-done-btn"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Done
                      </button>
                    </div>
                  )}
                </div>

                {/* No. of Days */}
                <div className="quote-field">
                  <label htmlFor="quote-days">No. of Nights *</label>
                  <select
                    id="quote-days"
                    name="days"
                    value={formData.days}
                    onChange={handleInputChange}
                    required
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 20, 30].map((day) => (
                      <option key={day} value={day}>
                        {day} {day === 1 ? 'Day' : 'Days'}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Phone Number */}
                <div className="quote-field">
                  <label htmlFor="quote-phone">Phone Number *</label>
                  <input
                    id="quote-phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    pattern="[0-9+\s()-]{7,20}"
                    title="Enter a valid phone number"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="quote-submit-button" disabled={loading}>
                {loading ? "Submitting..." : "Submit Enquiry →"}
              </button>

              <p className="quote-privacy-note">
                Let’s make your next holiday unforgettable!
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}