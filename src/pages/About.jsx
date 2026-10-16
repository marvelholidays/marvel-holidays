import React from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  Heart,
  ShieldCheck,
  Globe,
  Sliders,
  Eye,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import './About.css';

const services = [
  'Domestic & International Holiday Packages',
  'Honeymoon Packages',
  'Family Holidays',
  'Group Tours',
  'Customized Holiday Planning',
  'Pilgrimage Tours',
  'Visa Assistance',
];

const features = [
  {
    icon: <Compass size={28} />,
    title: 'Personalized Travel Planning',
    description:
      'Every traveller is different. We take the time to understand your preferences, travel style and requirements.',
  },
  {
    icon: <Heart size={28} />,
    title: 'Carefully Planned Experiences',
    description:
      'We focus on creating well-structured itineraries that balance sightseeing, experiences, comfort and time.',
  },
  {
    icon: <Sliders size={28} />,
    title: 'Customized Holidays',
    description:
      'We can help you plan a trip around your preferred destination, duration, activities and budget.',
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Dedicated Assistance',
    description:
      'Our team is available to guide you through your travel planning and help with your requirements.',
  },
  {
    icon: <Eye size={28} />,
    title: 'Transparent Communication',
    description:
      'We believe customers should have clear information about their itinerary, inclusions, exclusions and applicable terms before confirming their trip.',
  },
  {
    icon: <Globe size={28} />,
    title: 'Travel Made Simple',
    description:
      'From choosing a destination to planning the itinerary, our goal is to make the travel planning process easier for you.',
  },
];

export default function About() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-eyebrow">ABOUT MARVEL HOLIDAYS</span>
          <h1>
            Your Journey. <span>Our Expertise.</span>
          </h1>
          <p>
            At Marvel Holidays, we believe that travel is more than simply visiting a destination — 
            it is about discovering new experiences, creating memories and enjoying every moment of the journey.
          </p>
          <Link to="/holidays" className="about-cta">
            Explore Holidays →
          </Link>
        </div>
      </section>

      {/* Our Story / Who We Are */}
      <section className="about-intro">
        <div className="about-intro-inner">
          <div className="about-intro-label">
            <span>WHO WE ARE</span>
            <h2>
              Crafting Travel <span>Experiences</span>
            </h2>
          </div>

          <div className="about-intro-text">
            <p>
              We are a travel company focused on helping individuals, families, couples and groups plan 
              memorable holidays across India and international destinations. From carefully planned holiday 
              packages and customized trips to honeymoon experiences, family vacations, group tours, 
              pilgrimage journeys and visa assistance, we aim to make travel planning simple and convenient.
            </p>
            <p>
              Our approach is personal. We understand that every traveller has different expectations, 
              preferences and budgets. That is why we work closely with our customers to understand their 
              requirements and help create travel plans that suit their needs.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-mission-vision">
        <div className="about-mv-container">
          <div className="about-feature-card about-mv-card mission-card">
            <div className="about-feature-icon"><Sparkles size={28} /></div>
            <h3>Our Mission</h3>
            <p>
              To make travel planning simple, reliable and memorable for every traveller. We aim to understand 
              what our customers are looking for and provide thoughtfully planned travel experiences with 
              personalized assistance and clear communication.
            </p>
          </div>

          <div className="about-feature-card about-mv-card vision-card">
            <div className="about-feature-icon"><Globe size={28} /></div>
            <h3>Our Vision</h3>
            <p>
              To become a trusted travel brand known for personalized service, memorable experiences and 
              customer-focused travel solutions. We aspire to build long-term relationships with our travellers 
              by consistently delivering a smooth and enjoyable travel planning experience.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="about-services">
        <div className="about-section-heading">
          <span>WHAT WE DO</span>
          <h2>Comprehensive Travel Services</h2>
          <p>
            Our team works with customers from the initial enquiry and itinerary planning through 
            the booking process, helping you make informed decisions about your journey.
          </p>
        </div>

        <div className="about-services-grid">
          {services.map((service) => (
            <div className="about-service-item" key={service}>
              <CheckCircle2 size={20} className="service-check-icon" />
              <span>{service}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-values">
        <div className="about-section-heading">
          <span>WHY CHOOSE MARVEL HOLIDAYS?</span>
          <h2>Travel Your Way</h2>
          <p>Every traveller is different. Your holiday should be too.</p>
        </div>

        <div className="about-features-grid">
          {features.map((feature) => (
            <article className="about-feature-card" key={feature.title}>
              <div className="about-feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="about-bottom-cta">
        <span>MORE THAN A HOLIDAY. IT'S YOUR STORY.</span>
        <h2>Where Would You Like to Go?</h2>
        <p>
          Whether you're planning your first international trip, a romantic honeymoon, a family vacation, 
          a group adventure or a meaningful pilgrimage, Marvel Holidays is here to help you plan the journey.
        </p>
        <p className="about-quote-motto">
          "Your destination may be on the map. Your experience is what makes the journey unforgettable."
        </p>
        <Link to="/quote" className="about-cta">
          Plan My Holiday →
        </Link>
      </section>
    </main>
  );
}