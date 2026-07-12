import './Testimonials.css'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'New York, USA',
    avatar: 'SM',
    rating: 5,
    trip: 'Paris & Switzerland',
    text: 'Absolutely blown away by how detailed the AI itinerary was! Every hotel recommendation was spot-on, and the budget breakdown helped me plan without overspending. Best trip ever!',
    gradient: 'sky',
  },
  {
    name: 'Arjun Sharma',
    location: 'Mumbai, India',
    avatar: 'AS',
    rating: 5,
    trip: 'Bali Adventure',
    text: "The AI suggested hidden gems in Bali I'd never have found on my own. The transportation guide was incredibly detailed — from airport pickup to inter-island ferries. 10/10!",
    gradient: 'teal',
  },
  {
    name: 'Emily Chen',
    location: 'Singapore',
    avatar: 'EC',
    rating: 5,
    trip: 'Tokyo Explorer',
    text: 'Planning Japan solo felt overwhelming until I used this. The AI created a perfect 9-day Tokyo itinerary with food recommendations that matched my dietary preferences. Phenomenal!',
    gradient: 'blue',
  },
  {
    name: 'Mohammed Al-Rashid',
    location: 'Dubai, UAE',
    avatar: 'MR',
    rating: 5,
    trip: 'European Tour',
    text: "Visited 6 European countries in 14 days with a plan built in minutes! The budget calculator was precise — I came back with exactly the money I'd estimated. Incredible AI.",
    gradient: 'purple',
  },
  {
    name: 'Priya Nair',
    location: 'Chennai, India',
    avatar: 'PN',
    rating: 5,
    trip: 'Ooty Getaway',
    text: 'Perfect weekend getaway planning. The AI knew the best tea garden routes, recommended the Nilgiri train experience, and found us a cozy cottage at an amazing price!',
    gradient: 'green',
  },
  {
    name: 'James Anderson',
    location: 'London, UK',
    avatar: 'JA',
    rating: 5,
    trip: 'Dubai Luxury',
    text: "The AI curated a luxury Dubai experience within my budget — desert safari, Burj Khalifa, and a dhow cruise dinner. Every recommendation was stellar. Will use again!",
    gradient: 'orange',
  },
]

function StarRating({ count }) {
  return (
    <div className="stars">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

/**
 * Testimonials section — social proof grid.
 */
function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">⭐ Traveller Reviews</div>
          <h2 className="section-title">
            Loved by <span className="section-title-accent">Global Travellers</span>
          </h2>
          <p className="section-desc">
            Join thousands of happy travellers who planned their perfect trips using our AI-powered platform.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map(t => (
            <div key={t.name} className="testi-card">
              {/* Quote icon */}
              <div className="testi-card__quote">❝</div>

              {/* Rating */}
              <StarRating count={t.rating} />

              {/* Trip badge */}
              <div className="testi-card__trip">✈ {t.trip}</div>

              {/* Text */}
              <p className="testi-card__text">{t.text}</p>

              {/* Author */}
              <div className="testi-card__author">
                <div className={`testi-card__avatar testi-card__avatar--${t.gradient}`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="testi-card__name">{t.name}</div>
                  <div className="testi-card__location">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    </svg>
                    {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary stats */}
        <div className="testimonials__stats">
          <div className="testi-stat">
            <div className="testi-stat__value">50,000+</div>
            <div className="testi-stat__label">Happy Travellers</div>
          </div>
          <div className="testi-stat">
            <div className="testi-stat__value">4.9/5</div>
            <div className="testi-stat__label">Average Rating</div>
          </div>
          <div className="testi-stat">
            <div className="testi-stat__value">120+</div>
            <div className="testi-stat__label">Destinations</div>
          </div>
          <div className="testi-stat">
            <div className="testi-stat__value">98%</div>
            <div className="testi-stat__label">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
