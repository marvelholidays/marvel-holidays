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
              <a href="https://wa.me/917824887999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">💬</a>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/holidays">Holiday Packages</Link></li>
              <li><Link to="/visa">Visa</Link></li>
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
              <p>📍 Chennai, India</p>
              <p>📞 +91 78248 87999</p>
              <p>✉️ support@marvelholidays.in</p>
              <p>🌐 www.marvelholidays.in</p>
            </div>
          </div>
        </div>

        <div className="home-footer__bottom">
          <p>© {new Date().getFullYear()} Marvel Holidays. All rights reserved.</p>
          <div>
            <Link to="/privacy-policy">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}