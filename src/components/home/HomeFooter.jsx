import React from 'react';
import { Link } from 'react-router-dom';
import './HomeFooter.css';

export default function HomeFooter() {
  return (
    <footer className="home-footer">
      <div className="home-footer__inner">
        <div className="home-footer__columns">
          <div>
            <h3 className="home-footer__brand">Marvel<span>Holidays</span></h3>
            <p className="home-footer__description">
              Crafting extraordinary journeys, luxury escapes, and custom travel experiences tailored precisely to your dreams.
            </p>
            <div className="home-footer__socials">
              <a href="https://www.instagram.com/marvelholidays.in" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📸</a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">💬</a>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/holidays">Holiday Packages</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4>Popular Destinations</h4>
            <ul>
              <li><Link to="/holidays">Kerala Backwaters</Link></li>
              <li><Link to="/holidays">Himachal Escapes</Link></li>
              <li><Link to="/holidays">Bali Getaways</Link></li>
              <li><Link to="/holidays">Andaman Islands</Link></li>
            </ul>
          </div>

          <div>
            <h4>Get in Touch</h4>
            <div className="home-footer__contact">
              <p>📍 India</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ info@marvelholidays.in</p>
              <p>🌐 www.marvelholidays.in</p>
            </div>
          </div>
        </div>

        <div className="home-footer__bottom">
          <p>© {new Date().getFullYear()} Marvel Holidays. All rights reserved.</p>
          <div>
            <a href="/Privacy_Policy.docx" download="Marvel_Holidays_Privacy_Policy.docx">
              Privacy Policy
            </a>
            <a href="/Terms_and_Conditions.docx" download="Marvel_Holidays_Terms_and_Conditions.docx">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
