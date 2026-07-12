import './HowItWorks.css'

const steps = [
  {
    step: '01',
    icon: '🗺️',
    title: 'Choose Your Destination',
    desc: 'Browse our curated destination cards or simply tell the AI where you dream of going — anywhere in the world.',
    color: 'sky',
  },
  {
    step: '02',
    icon: '💬',
    title: 'Chat with AI',
    desc: 'Have a natural conversation with the IBM watsonx Orchestrate Travel Planner about your preferences, budget, and timeline.',
    color: 'teal',
  },
  {
    step: '03',
    icon: '📋',
    title: 'Receive Your Travel Plan',
    desc: 'Get a fully personalized travel plan with itinerary, hotels, transport, food spots, budget breakdown, and weather tips.',
    color: 'blue',
  },
]

/**
 * How It Works section — 3-step process.
 */
function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      {/* Decorative background */}
      <div className="how-it-works__bg" />

      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag" style={{ color: 'var(--color-white)', borderColor: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.1)' }}>
            🚀 Getting Started
          </div>
          <h2 className="section-title" style={{ color: 'var(--color-white)' }}>
            How It <span style={{ background: 'linear-gradient(135deg,#7dd3fc,#2dd4bf)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Works</span>
          </h2>
          <p className="section-desc" style={{ color: 'rgba(255,255,255,0.7)' }}>
            From idea to complete travel plan in three simple steps powered by IBM watsonx Orchestrate AI.
          </p>
        </div>

        {/* Steps */}
        <div className="how-it-works__steps">
          {steps.map((step, i) => (
            <div key={step.step} className="how-step">
              {/* Number */}
              <div className={`how-step__num how-step__num--${step.color}`}>{step.step}</div>

              {/* Icon bubble */}
              <div className="how-step__icon-wrap">
                <div className="how-step__icon">{step.icon}</div>
              </div>

              {/* Content */}
              <h3 className="how-step__title">{step.title}</h3>
              <p className="how-step__desc">{step.desc}</p>

              {/* Arrow connector (not on last step) */}
              {i < steps.length - 1 && (
                <div className="how-step__connector">
                  <svg viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12 Q40 2 80 12" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeDasharray="6 4"/>
                    <path d="M72 7L80 12L72 17" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="how-it-works__cta">
          <a href="/chat" className="how-it-works__btn">
            Start Your Journey Now →
          </a>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
