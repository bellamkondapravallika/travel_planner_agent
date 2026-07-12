import './Features.css'

const features = [
  {
    icon: '✈️',
    title: 'Destination Recommendation',
    desc: 'AI-powered suggestions tailored to your budget, interests, climate preference, and travel season.',
    color: 'sky',
  },
  {
    icon: '🗺️',
    title: 'Personalized Itinerary',
    desc: 'Day-by-day detailed schedules with sightseeing spots, timings, and local transport routes.',
    color: 'blue',
  },
  {
    icon: '🏨',
    title: 'Hotel Recommendation',
    desc: 'Best hotels, resorts, and homestays filtered by star-rating, amenities, and proximity.',
    color: 'teal',
  },
  {
    icon: '💰',
    title: 'Budget Planning',
    desc: 'Complete cost breakdowns covering flights, stays, food, transport, and activities.',
    color: 'green',
  },
  {
    icon: '🚆',
    title: 'Transportation Guide',
    desc: 'Flight routes, train options, local buses, taxis, and rental services explained clearly.',
    color: 'purple',
  },
  {
    icon: '🌦️',
    title: 'Weather Forecast',
    desc: 'Best travel seasons, monthly weather data, packing tips, and climate advisories.',
    color: 'orange',
  },
  {
    icon: '📍',
    title: 'Local Attractions',
    desc: 'Hidden gems, UNESCO sites, cultural spots, adventure parks, and must-see landmarks.',
    color: 'red',
  },
  {
    icon: '🍽️',
    title: 'Food Recommendations',
    desc: 'Local street food, fine dining, dietary-specific options, and culinary experiences.',
    color: 'yellow',
  },
]

/**
 * Features section — showcases all 8 AI capabilities with icon cards.
 */
function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        {/* Section header */}
        <div className="section-header">
          <div className="section-tag">🤖 AI Capabilities</div>
          <h2 className="section-title">
            Everything You Need to <span className="section-title-accent">Travel Smart</span>
          </h2>
          <p className="section-desc">
            Powered by IBM watsonx Orchestrate, our AI understands your travel preferences
            and delivers comprehensive planning in seconds.
          </p>
        </div>

        {/* Cards grid */}
        <div className="features__grid">
          {features.map((feat, i) => (
            <div
              key={feat.title}
              className={`feat-card feat-card--${feat.color}`}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="feat-card__icon">{feat.icon}</div>
              <h3 className="feat-card__title">{feat.title}</h3>
              <p className="feat-card__desc">{feat.desc}</p>
              <div className="feat-card__arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
