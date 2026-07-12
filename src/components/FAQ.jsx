import { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    q: 'How does the AI Travel Planner work?',
    a: 'Our AI is powered by IBM watsonx Orchestrate, which is trained on vast travel knowledge. You simply chat with the AI describing your destination, dates, budget, and preferences. It then generates a complete, personalized travel plan within seconds.',
  },
  {
    q: 'Is the travel plan free to use?',
    a: 'Yes! The AI travel planning service is completely free. You can ask unlimited questions, generate multiple itineraries, and explore any destination without any cost.',
  },
  {
    q: 'How accurate are the budget estimates?',
    a: 'Our AI provides estimates based on up-to-date average costs for flights, hotels, food, and activities. While real-time prices fluctuate, the estimates give you an excellent ballpark for planning. We always recommend cross-referencing with booking platforms.',
  },
  {
    q: 'Can the AI plan trips for groups or families?',
    a: 'Absolutely! Just mention your group size, ages (especially for children), and any special requirements when chatting. The AI tailors itineraries for solo travelers, couples, families, and large groups alike.',
  },
  {
    q: 'Does the AI book hotels or flights?',
    a: 'Currently, the AI provides recommendations, comparisons, and guidance, but does not directly book. It will suggest the best platforms and provide direct links to book your chosen options.',
  },
  {
    q: 'What destinations does the AI cover?',
    a: 'Our AI covers 120+ destinations across all continents — from popular tourist hubs like Paris and Tokyo to hidden gems like Ooty and Hallstatt. Just ask about any destination and the AI will have insights!',
  },
  {
    q: 'Can I save my travel plans?',
    a: 'Yes! Once a travel plan is generated in the chat, you can copy, share, or save it as a PDF. We\'re also working on a "Saved Trips" feature for user accounts.',
  },
  {
    q: 'How does IBM watsonx Orchestrate power this?',
    a: 'IBM watsonx Orchestrate is an enterprise-grade AI platform that enables intelligent multi-step automation and conversation. Our Travel Planner Agent is deployed on this platform, giving it deep reasoning capabilities and reliable, structured responses.',
  },
]

/**
 * FAQ section — accordion style.
 */
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">❓ FAQ</div>
          <h2 className="section-title">
            Frequently Asked <span className="section-title-accent">Questions</span>
          </h2>
          <p className="section-desc">
            Everything you need to know about the AI Travel Planner and how it works.
          </p>
        </div>

        <div className="faq__list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq__item ${openIndex === i ? 'faq__item--open' : ''}`}
            >
              <button
                className="faq__question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span className="faq__q-text">{faq.q}</span>
                <span className="faq__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                  </svg>
                </span>
              </button>
              <div className="faq__answer">
                <div className="faq__answer-inner">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
