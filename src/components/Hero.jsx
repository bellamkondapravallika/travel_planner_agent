import { Link } from 'react-router-dom'
import './Hero.css'

/**
 * Full-screen hero section with animated background,
 * headline, CTA buttons, stats, and a floating chat preview card.
 */
function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background layers */}
      <div className="hero__bg">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80&auto=format&fit=crop"
          alt=""
          className="hero__bg-img"
        />
        <div className="hero__overlay" />
        <div className="hero__stars" />
      </div>

      {/* Gradient orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      {/* Flying airplane emoji */}
      <div className="hero__plane" aria-hidden="true">✈️</div>

      {/* Main content grid */}
      <div className="hero__content">
        {/* Left — text */}
        <div className="hero__text">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <span className="hero__badge-text">Powered by IBM watsonx Orchestrate</span>
          </div>

          <h1 className="hero__title">
            Plan Your <br/>
            <span className="hero__title-accent">Perfect Journey</span><br/>
            with AI
          </h1>

          <p className="hero__subtitle">
            Experience intelligent travel planning powered by IBM watsonx Orchestrate.
            Get personalized itineraries, destination recommendations, hotels, transport
            guidance, budgets, weather forecasts, and local attractions instantly.
          </p>

          <div className="hero__buttons">
            <Link to="/chat" className="hero__btn-primary">
              Start Planning
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </Link>
            <a href="#features" className="hero__btn-secondary">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="hero__stats">
            <div className="hero__stat">
              <div className="hero__stat-value">50<span>K+</span></div>
              <div className="hero__stat-label">Trips Planned</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-value">120<span>+</span></div>
              <div className="hero__stat-label">Destinations</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-value">4.9<span>★</span></div>
              <div className="hero__stat-label">User Rating</div>
            </div>
          </div>
        </div>

        {/* Right — floating chat card preview */}
        <div className="hero__visual">
          <div className="hero__card">
            {/* Chat header */}
            <div className="hero__chat-header">
              <div className="hero__chat-avatar">🤖</div>
              <div className="hero__chat-info">
                <div className="hero__chat-name">Travel Planner AI</div>
                <div className="hero__chat-status">
                  <span className="hero__chat-status-dot" />
                  Online · IBM watsonx Orchestrate
                </div>
              </div>
            </div>

            {/* Chat messages preview */}
            <div className="hero__chat-messages">
              <div className="hero__msg hero__msg--user">
                <div className="hero__msg-bubble">Plan a 7-day trip to Bali 🌴</div>
              </div>
              <div className="hero__msg hero__msg--ai">
                <div className="hero__msg-bubble">
                  ✈️ I'll create a personalized Bali itinerary for you! Day 1: Arrive at Ngurah Rai Airport, check into Ubud resort…
                </div>
              </div>
              {/* Typing indicator */}
              <div className="hero__msg hero__msg--ai">
                <div className="hero__typing">
                  <div className="hero__typing-dot" />
                  <div className="hero__typing-dot" />
                  <div className="hero__typing-dot" />
                </div>
              </div>
            </div>

            {/* Input preview */}
            <div className="hero__chat-input">
              <span className="hero__chat-input-text">Ask about your next trip…</span>
              <div className="hero__chat-send">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                </svg>
              </div>
            </div>

            {/* Floating mini badges */}
            <div className="hero__float-card hero__float-card--1">
              <div className="hero__float-icon">🏨</div>
              <div>
                <div className="hero__float-label">Hotel Found</div>
                <div className="hero__float-sub">Best rates in Ubud</div>
              </div>
            </div>
            <div className="hero__float-card hero__float-card--2">
              <div className="hero__float-icon">💰</div>
              <div>
                <div className="hero__float-label">Budget: $1,200</div>
                <div className="hero__float-sub">7 days · All inclusive</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-dot" />
        </div>
        <span className="hero__scroll-text">Scroll</span>
      </div>
    </section>
  )
}

export default Hero
