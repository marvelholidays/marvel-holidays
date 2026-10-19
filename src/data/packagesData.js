export const packagesData = [
  {
    id: 1,
    title: 'Kerala Backwaters & Hills',
    destination: 'Kerala',
    category: 'Domestic',
    price: 18500,
    duration: '4 Nights / 5 Days',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    description: 'Experience the serene backwaters of Alleppey and the lush tea plantations of Munnar.',
    overview: 'Escape to God’s Own Country with our signature 5-day tour of Kerala. Unwind amidst mist-covered tea gardens in Munnar, take in the aromatic spice plantations, and cruise through the tranquil palm-fringed backwaters of Alleppey on a private traditional houseboat. Designed for relaxation, culture, and nature lovers.',
    inclusions: [
      'Accommodation in handpicked 3-star luxury hotels',
      'Daily breakfast & dinner at hotels',
      'All meals (Breakfast, Lunch, Evening Snacks & Dinner) during Houseboat stay',
      'Private AC sedan/SUV transfer for all sightseeing & airport drop',
      'Driver allowances, toll taxes, fuel charges & parking fees',
      'Guided Spice Plantation Tour entry ticket'
    ],
    exclusions: [
      'Airfare / Train tickets to/from Cochin',
      'Entry tickets to monuments, Kathakali shows, or national parks',
      'Personal expenses (laundry, room service, tips)',
      '5% GST (applicable on total package value)'
    ],
    highlights: ['Houseboat Stay', 'Munnar Tea Gardens', 'Kathakali Show', 'Spice Plantation Tour'],
    itinerary: [
      { day: 1, title: 'Arrival in Cochin & Transfer to Munnar' },
      { day: 2, title: 'Munnar Local Sightseeing' },
      { day: 3, title: 'Munnar to Alleppey Houseboat' },
      { day: 4, title: 'Alleppey to Kovalam' },
      { day: 5, title: 'Departure from Trivandrum' }
    ]
  },
  {
    id: 2,
    title: 'Scenic Himachal Escape',
    destination: 'Himachal',
    category: 'Domestic',
    price: 24000,
    duration: '5 Nights / 6 Days',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    description: 'Discover the snow-capped peaks of Shimla and the adventurous valleys of Manali.',
    overview: 'Embark on a breathtaking mountain holiday across Himachal Pradesh. From Colonial architecture on Shimla’s Mall Road to high-altitude snow adventures in Solang Valley and Rohtang Pass, this package delivers the perfect balance of alpine tranquility and thrilling mountain sports.',
    inclusions: [
      '5 Nights accommodation (2N Shimla + 3N Manali)',
      'Daily Breakfast and Dinner (MAP Plan)',
      'Individual private Cab for all transfers & sightseeing',
      'Bonfire session in Manali (subject to weather)',
      'Tolls, driver charges, state taxes, and fuel costs'
    ],
    exclusions: [
      'Rohtang Pass permit and green tax charges',
      'Adventure activities fee (Paragliding, Skiing, Zorbing)',
      'Heater charges at hotels',
      'Personal tips, porter charges, and laundry'
    ],
    highlights: ['Solang Valley Sports', 'Rohtang Pass Sightseeing', 'Mall Road Shimla', 'Hadimba Temple'],
    itinerary: [
      { day: 1, title: 'Delhi to Shimla Drive' },
      { day: 2, title: 'Shimla & Kufri Sightseeing' },
      { day: 3, title: 'Shimla to Manali Transfer' },
      { day: 4, title: 'Solang Valley Excursion' },
      { day: 5, title: 'Manali Local Sightseeing' },
      { day: 6, title: 'Return to Delhi' }
    ]
  },
  {
    id: 3,
    title: 'Exotic Bali Island Getaway',
    destination: 'Bali',
    category: 'International',
    price: 52000,
    duration: '6 Nights / 7 Days',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    description: 'Immerse yourself in tropical beaches, ancient temples, and vibrant Indonesian culture.',
    overview: 'Experience the Magic of the Island of the Gods. Explore iconic clifftop temples like Tanah Lot and Uluwatu, swing over the emerald rice terraces of Ubud, and ride speedboats to the dramatic cliffs of Nusa Penida. An all-inclusive tropical escape tailored for wanderers.',
    inclusions: [
      '6 Nights in 4-Star Beach Resort / Boutique Hotel',
      'Daily international buffet breakfast',
      'Fast boat transfers to Nusa Penida Island (round trip)',
      'Water sports package: Banana Boat & Jet Ski at Tanjung Benoa',
      'Private airport transfers & full-day tours in private AC vehicle',
      'English-speaking driver cum guide'
    ],
    exclusions: [
      'International air tickets',
      'Bali Tourist Levy / Visa on Arrival (VoA)',
      'Lunch & Dinner unless specified in itinerary',
      'Personal expenses & gratuities'
    ],
    highlights: ['Uluwatu Temple Sunset', 'Nusa Penida Island Tour', 'Ubud Rice Terraces', 'Water Sports at Benoa'],
    itinerary: [
      { day: 1, title: 'Arrival in Bali & Hotel Check-in' },
      { day: 2, title: 'Ubud Tour & Swing' },
      { day: 3, title: 'Nusa Penida Day Trip' },
      { day: 4, title: 'Water Sports & Tanah Lot Temple' },
      { day: 5, title: 'Leisure Day for Shopping' },
      { day: 6, title: 'Uluwatu Temple Visit' },
      { day: 7, title: 'Departure' }
    ]
  },
  {
    id: 4,
    title: 'Romantic Bali Honeymoon Retreat',
    destination: 'Bali',
    category: 'Honeymoon',
    price: 65000,
    duration: '5 Nights / 6 Days',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    description: 'A romantic getaway featuring private pool villas, candlelight beach dinners, and couples spa sessions.',
    overview: 'Designed exclusively for newly married couples seeking luxury and privacy. Wake up to floating breakfasts in your private pool villa, enjoy relaxing traditional Balinese massages, and witness dramatic sunsets with romantic beachside dining under the stars.',
    inclusions: [
      '3 Nights Luxury Hotel + 2 Nights Private Pool Villa',
      'Floating Breakfast setup in Private Villa',
      '1x 60-Minute Couples Balinese Spa Session',
      '1x Candlelight Seafood Dinner on Jimbaran Beach',
      'Flower bed decoration & Honeymoon Cake upon arrival',
      'Private luxury airport & tour transfers'
    ],
    exclusions: [
      'International flights',
      'Indonesian Tourist Visa fees',
      'Items of personal nature',
      'Travel Insurance'
    ],
    highlights: ['Private Pool Villa Stay', 'Candlelight Dinner on Jimbaran Beach', 'Couples Spa Treatment', 'Sunset Cruise'],
    itinerary: [
      { day: 1, title: 'Arrival & Private Transfer to Villa' },
      { day: 2, title: 'Ubud Tour & Rice Terraces' },
      { day: 3, title: 'Couples Spa & Sunset Dinner Cruise' },
      { day: 4, title: 'Leisure Day in Private Villa' },
      { day: 5, title: 'Tanah Lot Temple Sunset Tour' },
      { day: 6, title: 'Departure' }
    ]
  },
  {
    id: 5,
    title: 'Munnar & Alleppey Honeymoon Bliss',
    destination: 'Kerala',
    category: 'Honeymoon',
    price: 32000,
    duration: '4 Nights / 5 Days',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    description: 'Unwind amidst misty tea plantations and enjoy a romantic stay on a private backwater houseboat.',
    overview: 'A dreamy honeymoon itinerary through Kerala’s most scenic retreats. Spend romantic mornings amidst misty hills in Munnar and private evenings drifting through tranquil backwaters in an exclusive, air-conditioned houseboat.',
    inclusions: [
      '3 Nights Hill Resort Stay + 1 Night Private Luxury Houseboat Stay',
      'Daily Breakfast & Dinner at resorts',
      'All meals (Lunch, Dinner, Breakfast) prepared live on Houseboat',
      'Honeymoon cake, bed flower setup & Candlelight dinner on Houseboat',
      'Private AC Chauffeur-driven vehicle throughout the tour'
    ],
    exclusions: [
      'Train / Air fares',
      'Camera / Video fees at tourist locations',
      'Tips & laundry expenses',
      'GST & Govt taxes'
    ],
    highlights: ['Private Houseboat Cruise', 'Flower Bed Decoration', 'Candlelight Dinner', 'Munnar Tea Estate Tour'],
    itinerary: [
      { day: 1, title: 'Cochin Arrival & Transfer to Munnar' },
      { day: 2, title: 'Munnar Sightseeing & Photography' },
      { day: 3, title: 'Transfer to Alleppey Houseboat' },
      { day: 4, title: 'Backwater Cruising' },
      { day: 5, title: 'Departure' }
    ]
  },
  {
    id: 6,
    title: 'Munnar & Alleppey Family Delight',
    destination: 'Kerala',
    category: 'Family',
    price: 32000,
    duration: '4 Nights / 5 Days',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    description: 'Fun-filled family vacation with elephant encounters, tea estates, and backwater boat rides.',
    overview: 'Created for families seeking a memorable holiday together. Enjoy scenic hill station views, explore wildlife and spice gardens, and bond over an unforgettable overnight backwater houseboat cruise.',
    inclusions: [
      '4 Nights comfortable family-friendly hotel stay',
      'Daily breakfast & dinner included',
      'Private AC Tempo Traveller / SUV for family privacy',
      'Elephant park entry & spice farm guided walk',
      'Houseboat cruise with all traditional Kerala meals'
    ],
    exclusions: [
      'Flight / Train tickets',
      'Personal purchases and snacks',
      'Optional activity fees'
    ],
    highlights: ['Private Houseboat Cruise', 'Munnar Tea Estate Tour', 'Spice Farm Visit', 'Kathakali Cultural Night'],
    itinerary: [
      { day: 1, title: 'Cochin Arrival & Transfer to Munnar' },
      { day: 2, title: 'Munnar Sightseeing & Photography' },
      { day: 3, title: 'Transfer to Alleppey Houseboat' },
      { day: 4, title: 'Backwater Cruising' },
      { day: 5, title: 'Departure' }
    ]
  }
];