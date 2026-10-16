import React from 'react';
import './InstagramReels.css';

// Put your actual Instagram Reel links here from @marvelholidays.in
const instagramReels = [
  {
    id: 1,
    url: 'https://www.instagram.com/reel/C-ShpGTILTf/',
  },
  {
    id: 2,
    url: 'https://www.instagram.com/reel/C92BgdUIjak/?cplk=MXEzdjA4bjN1c3NzdA==', // Replace with your 2nd real Reel URL
  },
  {
    id: 3,
    url: 'https://www.instagram.com/reel/CxGDuVCR5ly/?psln=MXV1cnV2aWt6dzk0OQ==', // Replace with your 3rd real Reel URL
  },
  {
    id: 4,
    url: 'https://www.instagram.com/reel/CwNSemNBCdk/?xtok=NnBwejQ0MnFwNG8=', // Replace with your 4th real Reel URL
  },
];

export default function InstagramReels() {
  return (
    <section className="home-instagram">
      <div className="home-instagram__inner">
        <header className="home-instagram__header">
          <span className="home-instagram__kicker">@MARVELHOLIDAYS.IN</span>
          <h2>Travel Stories &amp; Instagram Reels 📸</h2>
          <p>Catch recent highlights, guest stories, and travel updates straight from our feed.</p>
        </header>

        {/* Live Instagram Masonry Grid */}
        <div className="home-instagram__masonry">
          {instagramReels.map((reel) => {
            // Converts standard Reel link to Instagram embed URL
            const cleanUrl = reel.url.split('?')[0];
            const embedUrl = `${cleanUrl.replace(/\/$/, '')}/embed/`;

            return (
              <div className="masonry-item" key={reel.id}>
                <iframe
                  src={embedUrl}
                  title={`Marvel Holidays Instagram Reel ${reel.id}`}
                  className="instagram-embed-frame"
                  frameBorder="0"
                  scrolling="no"
                  allow="encrypted-media"
                />
              </div>
            );
          })}
        </div>

        <div className="home-instagram__follow">
          <a
            href="https://www.instagram.com/marvelholidays.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow @marvelholidays.in on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}