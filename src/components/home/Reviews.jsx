import React from 'react';
import './Reviews.css';
import krishnaImg from "../../assets/krishna.png";
import SherylImg from "../../assets/Sheryl.png";
import SureshkrishnaImg from "../../assets/Sureshkrishna.png";
import SitaraImg from "../../assets/Sitara.png";
import JoannaImg from "../../assets/Joanna.png";


const reviewsData = [
  {
    id: 1,
    name: 'krishna rayapati',
    location: 'Shimla & Manali, Himachal Pradesh',
    rating: 5,
    comment:
      'It was an excellent tour with Marvel Holidays and thanks to Deril bro for making our journey the most beautiful and comfortable journey. It was an excellent 6 days tour of Shimla and Manali. I have recommended it to everyone. It was a mind-blowing journey. Thank you!',
    avatar: krishnaImg,
  },
  {
    id: 2,
    name: 'Sheryl Mercy Joel',
    location: 'Munnar & Alleppey, Kerala',
    rating: 5,
    comment:
      'We had booked a package with Marvel holidays to Munnar and Alleppey for a family trip. They made the entire trip hassle free and enjoyable! We had a good driver assigned who knew the language and guided us well. The best part is they customise your holiday according to your preferences and need. Would highly recommend them if you’re looking for a memorable holiday experience. Special mention to Deril for patiently listening to all our requirements and doing the best!',
    avatar: SherylImg,
  },
  {
    id: 3,
    name: 'Sureshkrishna R',
    location: 'Bali, Indonesia',
    rating: 5,
    comment:
      'Best travel agency for international and domestic trip, we went Bali trip with Marvel Holidays, we had beautiful experiences. Marvel Holidays itinerary is very best when compared to other top travel agencies. Price wise also very reasonable. Deril brother arrangements is too good.',
    avatar: SureshkrishnaImg,
  },
  {
    id: 4,
    name: 'Sitara Satheesan',
    location: 'Maldives',
    rating: 5,
    comment:
      'I had been planning a trip to Maldives for almost a year but all the resort choices and everything else had me confused and not so excited. Marvel Holidays helped me sort out everything and all I had to do was just take my passport and get on the flight. Thank you Marvel Holidays for this awesome trip!',
    avatar: SitaraImg,
  },
  {
  id: 5,
  name: 'Joanna Azanya',
  location: 'Srilanka',
  rating: 5,
  comment:
    'We had booked our honeymoon trip to Srilanka with Marvel holidays and Mr. Deril was so patient and understanding with every little detail I told him. I am most definite that I might have been the most troublesome as well but he was really amazing. The package, the hassle-free experience, the guide everything was perfectly arranged. They listened to our preferences and ensured we had the most wonderful time and they also made sure everything fit our budget. Would definitely book more trips with them in the future. Thank you Marvel Holidays and Mr. Deril for your service!!',
  avatar: JoannaImg, // Replace with imported avatar image variable if available
}
];

export default function Reviews() {
  const marqueeReviews = [...reviewsData, ...reviewsData];

  return (
    <section className="home-reviews">
      <header className="home-reviews__header">
        <span className="home-section-kicker">
          TESTIMONIALS
        </span>

        <h2>What Our Travelers Say</h2>

        <p>
          Happy travelers, memorable journeys, and experiences
          shared by our customers.
        </p>
      </header>

      <div className="home-reviews__viewport">
        <div className="home-reviews__track">
          {marqueeReviews.map((review, index) => (
            <article
              className="review-card"
              key={`${review.id}-${index}`}
            >
              <div>
                <div
                  className="review-card__stars"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {'★'.repeat(review.rating)}
                </div>

                <p className="review-card__comment">
                  “{review.comment}”
                </p>
              </div>

              <div className="review-card__person">
                {review.avatar ? (
                  <img
                    src={review.avatar}
                    alt={review.name}
                  />
                ) : (
                  <div
                    className="review-card__avatar-placeholder"
                    aria-hidden="true"
                  >
                    {review.name === 'Customer Review'
                      ? 'M'
                      : review.name.charAt(0)}
                  </div>
                )}

                <div>
                  <h3>{review.name}</h3>
                  <span>{review.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}