import { Link } from 'react-router-dom'
import './Destinations.css'

const destinations = [
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    emoji: '🗼',
    description: 'The City of Love awaits with iconic landmarks, world-class cuisine, art museums, and romantic boulevards that steal every heart.',
    budget: '$1,800 – $2,800',
    duration: '5–7 days',
    highlight: 'Eiffel Tower, Louvre',
    badge: 'Most Popular',
    badgeType: 'popular',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80&auto=format&fit=crop',
    weather: '12–22°C',
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    emoji: '🌴',
    description: 'Tropical paradise with lush rice terraces, ancient temples, vibrant nightlife, and some of the world\'s best surf spots.',
    budget: '$900 – $1,600',
    duration: '7–10 days',
    highlight: 'Ubud, Seminyak',
    badge: 'Trending',
    badgeType: 'trending',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80&auto=format&fit=crop',
    weather: '26–32°C',
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    emoji: '🏯',
    description: 'Where ancient tradition meets futuristic innovation. Cherry blossoms, ramen, anime culture, and neon-lit streets await.',
    budget: '$1,500 – $2,500',
    duration: '7–9 days',
    highlight: 'Shibuya, Akihabara',
    badge: 'Must Visit',
    badgeType: 'must-visit',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80&auto=format&fit=crop',
    weather: '10–28°C',
  },
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'UAE',
    emoji: '🏙️',
    description: 'Luxury at its finest. Towering skyscrapers, gold souks, desert safaris, and world-record breaking attractions.',
    budget: '$2,000 – $3,500',
    duration: '5–7 days',
    highlight: 'Burj Khalifa, Palm',
    badge: 'Luxury',
    badgeType: 'luxury',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80&auto=format&fit=crop',
    weather: '24–42°C',
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    country: 'Europe',
    emoji: '🏔️',
    description: 'Breathtaking Alps, pristine lakes, charming villages, world-famous chocolate, and the best skiing in the world.',
    budget: '$2,800 – $4,500',
    duration: '6–8 days',
    highlight: 'Interlaken, Zürich',
    badge: 'Scenic',
    badgeType: 'scenic',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80&auto=format&fit=crop',
    weather: '-5 – 22°C',
  },
  {
    id: 'ooty',
    name: 'Ooty',
    country: 'India',
    emoji: '🌿',
    description: 'The Queen of Hill Stations. Rolling tea gardens, the Nilgiri Mountain Railway, misty valleys, and serene botanical gardens.',
    budget: '$300 – $700',
    duration: '3–5 days',
    highlight: 'Tea Gardens, Lake',
    badge: 'Hidden Gem',
    badgeType: 'hidden-gem',
    image: 'https://images.unsplash.com/photo-1566396223585-26de0bc74a4f?w=600&q=80&auto=format&fit=crop',
    weather: '5–22°C',
  },
]

function DestinationCard({ dest }) {
  return (
    <div className="dest-card">
      {/* Image */}
      <div className="dest-card__img-wrap">
        <img
          src={dest.image}
          alt={dest.name}
          className="dest-card__img"
          loading="lazy"
        />
        <div className="dest-card__img-overlay" />
        <span className={`dest-card__badge dest-card__badge--${dest.badgeType}`}>
          {dest.badge}
        </span>
        <div className="dest-card__emoji">{dest.emoji}</div>
      </div>

      {/* Body */}
      <div className="dest-card__body">
        <div className="dest-card__meta">
          <div className="dest-card__location">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            {dest.country}
          </div>
          <div className="dest-card__weather">🌡 {dest.weather}</div>
        </div>

        <h3 className="dest-card__name">{dest.name}</h3>
        <p className="dest-card__desc">{dest.description}</p>

        <div className="dest-card__details">
          <div className="dest-card__detail">
            <span className="dest-card__detail-icon">⏱</span>
            <span>{dest.duration}</span>
          </div>
          <div className="dest-card__detail">
            <span className="dest-card__detail-icon">🏛</span>
            <span>{dest.highlight}</span>
          </div>
        </div>

        <div className="dest-card__footer">
          <div className="dest-card__budget">
            <div className="dest-card__budget-label">Est. Budget</div>
            <div className="dest-card__budget-value">{dest.budget}</div>
          </div>
          <Link
            to={`/chat?destination=${dest.id}&name=${dest.name}`}
            className="dest-card__cta"
          >
            Explore
            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

/**
 * Popular Destinations section.
 */
function Destinations() {
  return (
    <section className="destinations" id="destinations">
      <div className="container">
        {/* Section header */}
        <div className="section-header">
          <div className="section-tag">✈ Popular Destinations</div>
          <h2 className="section-title">
            Explore <span className="section-title-accent">Dream Destinations</span>
          </h2>
          <p className="section-desc">
            Discover handpicked destinations around the globe. Let our AI craft your perfect
            personalized travel plan for any of these amazing places.
          </p>
        </div>

        {/* Grid */}
        <div className="destinations__grid">
          {destinations.map(dest => (
            <DestinationCard key={dest.id} dest={dest} />
          ))}
        </div>

        {/* View all CTA */}
        <div className="destinations__footer">
          <Link to="/chat" className="destinations__more-btn">
            Explore All Destinations with AI
            <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Destinations
