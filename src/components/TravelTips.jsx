import './TravelTips.css'

const tips = [
  {
    icon: '🛂',
    title: 'Book Early',
    tip: 'Book flights and hotels 3–6 months in advance for significant savings, especially during peak seasons and holidays.',
  },
  {
    icon: '💳',
    title: 'Travel Cards',
    tip: 'Use travel credit cards with no foreign transaction fees and reward miles for every purchase to maximize benefits.',
  },
  {
    icon: '📱',
    title: 'Offline Maps',
    tip: 'Download offline maps on Google Maps or Maps.me before your trip. Internet can be unreliable in remote areas.',
  },
  {
    icon: '🏥',
    title: 'Travel Insurance',
    tip: 'Always purchase comprehensive travel insurance covering medical, trip cancellation, and lost luggage scenarios.',
  },
  {
    icon: '🎒',
    title: 'Pack Light',
    tip: 'Use a carry-on only when possible. Rolling clothes saves space and wrinkles. Always pack a portable charger.',
  },
  {
    icon: '💱',
    title: 'Local Currency',
    tip: 'Withdraw local currency at airport ATMs (avoid exchange booths). Notify your bank before traveling abroad.',
  },
]

/**
 * Travel Tips section — grid of quick tip cards.
 */
function TravelTips() {
  return (
    <section className="travel-tips" id="tips">
      <div className="travel-tips__bg" />
      <div className="container">
        <div className="section-header">
          <div className="section-tag" style={{ color: 'var(--color-teal-600)', borderColor: 'rgba(20,184,166,0.4)', background: 'rgba(20,184,166,0.1)' }}>
            💡 Pro Tips
          </div>
          <h2 className="section-title">
            Smart <span className="section-title-accent">Travel Tips</span>
          </h2>
          <p className="section-desc">
            Make every trip smoother, more affordable, and more memorable with these expert-curated travel tips.
          </p>
        </div>

        <div className="travel-tips__grid">
          {tips.map((t, i) => (
            <div key={i} className="tip-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="tip-card__icon">{t.icon}</div>
              <h3 className="tip-card__title">{t.title}</h3>
              <p className="tip-card__text">{t.tip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TravelTips
