import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HeroSlider.css';

const heroSlides = [
  {
    id: 1,
    tagline: 'EXPERIENCE LUXURY TRAVEL',
    title: 'Explore the World\nLike Never Before',
    subtitle: "Curated journeys to the world's most extraordinary destinations. Let us transform your travel dreams into unforgettable memories.",
    bgImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 2,
    tagline: 'SEAMLESS ESCAPES & ADVENTURES',
    title: 'Discover Uncharted\nBeaches & Horizons',
    subtitle: 'Handcrafted itineraries tailored for pure relaxation, private villa stays, and crystal-clear tropical waters.',
    bgImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 3,
    tagline: 'HERITAGE & CULTURAL JOURNEYS',
    title: 'Immerse Yourself in\nTimeless Traditions',
    subtitle: 'Explore ancient architecture, scenic mountain passes, and authentic local experiences crafted with precision.',
    bgImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80'
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = heroSlides[currentSlide];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="hero-slider"
      style={{ backgroundImage: `linear-gradient(180deg, rgba(8, 76, 141, 0.55) 0%, rgba(5, 48, 90, 0.88) 100%), url("${slide.bgImage}")` }}
      aria-label="Featured travel destinations"
    >
      <div className="hero-slider__content">
        <span className="hero-slider__tagline">{slide.tagline}</span>
        <h1>{slide.title}</h1>
        <p>{slide.subtitle}</p>
        <Link className="hero-slider__button" to="/holidays">Start Planning</Link>
      </div>

      <div className="hero-slider__dots" aria-label="Choose a slide">
        {heroSlides.map((item, index) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            aria-pressed={currentSlide === index}
            className={currentSlide === index ? 'is-active' : ''}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
