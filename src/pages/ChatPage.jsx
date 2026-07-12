import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import WatsonxChat from '../components/WatsonxChat.jsx'
import './ChatPage.css'

/**
 * ChatPage — full-screen AI chat experience with sidebar + main chat area.
 * The main chat panel hosts the IBM watsonx Orchestrate Web Chat widget.
 */
function ChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [searchParams] = useSearchParams()
  const destinationName = searchParams.get('name') || null

  return (
    <div className="chat-page">
      {/* Fixed top bar (reuses Navbar in chat mode) */}
      <Navbar />

      <div className="chat-page__body">
        {/* ===== Sidebar ===== */}
        <aside className={`chat-sidebar ${sidebarOpen ? 'chat-sidebar--open' : 'chat-sidebar--collapsed'}`}>
          {/* Sidebar toggle */}
          <button
            className="chat-sidebar__toggle"
            onClick={() => setSidebarOpen(p => !p)}
            aria-label="Toggle sidebar"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {sidebarOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/>
                : <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7"/>
              }
            </svg>
          </button>

          {/* Brand inside sidebar */}
          <div className="chat-sidebar__brand">
            <div className="chat-sidebar__logo">
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" fill="url(#sidebarGrad)"/>
                <path d="M8 20L18 8L28 20H22V28H18V24H14V28H10V20H8Z" fill="white"/>
                <defs>
                  <linearGradient id="sidebarGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0ea5e9"/>
                    <stop offset="1" stopColor="#0d9488"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {sidebarOpen && (
              <span className="chat-sidebar__brand-name">
                <span className="chat-sidebar__brand-ai">AI</span> Travel
              </span>
            )}
          </div>

          {/* Navigation items */}
          <nav className="chat-sidebar__nav">
            <Link to="/" className="chat-sidebar__nav-item">
              <span className="chat-sidebar__nav-icon">🏠</span>
              {sidebarOpen && <span>Home</span>}
            </Link>
            <a href="#" className="chat-sidebar__nav-item chat-sidebar__nav-item--active">
              <span className="chat-sidebar__nav-icon">💬</span>
              {sidebarOpen && <span>New Chat</span>}
            </a>
            <a href="#" className="chat-sidebar__nav-item">
              <span className="chat-sidebar__nav-icon">🗂️</span>
              {sidebarOpen && <span>Saved Trips</span>}
            </a>
          </nav>

          {/* Recent conversations (visible only when expanded) */}
          {sidebarOpen && (
            <div className="chat-sidebar__recent">
              <div className="chat-sidebar__recent-heading">Recent Conversations</div>
              <div className="chat-sidebar__recent-list">
                {[
                  { icon: '🗼', label: 'Paris 7-day trip', sub: '2 hours ago' },
                  { icon: '🌴', label: 'Bali adventure plan', sub: 'Yesterday' },
                  { icon: '🏯', label: 'Tokyo explorer guide', sub: '3 days ago' },
                  { icon: '🏔️', label: 'Swiss Alps skiing', sub: '1 week ago' },
                ].map(item => (
                  <a key={item.label} href="#" className="chat-sidebar__recent-item">
                    <span className="chat-sidebar__recent-icon">{item.icon}</span>
                    <div className="chat-sidebar__recent-info">
                      <div className="chat-sidebar__recent-label">{item.label}</div>
                      <div className="chat-sidebar__recent-sub">{item.sub}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Bottom nav items */}
          <div className="chat-sidebar__bottom">
            <a href="#" className="chat-sidebar__nav-item">
              <span className="chat-sidebar__nav-icon">⚙️</span>
              {sidebarOpen && <span>Settings</span>}
            </a>
            <a href="#" className="chat-sidebar__nav-item">
              <span className="chat-sidebar__nav-icon">ℹ️</span>
              {sidebarOpen && <span>About</span>}
            </a>
            {/* User profile */}
            <div className="chat-sidebar__profile">
              <div className="chat-sidebar__avatar">T</div>
              {sidebarOpen && (
                <div className="chat-sidebar__profile-info">
                  <div className="chat-sidebar__profile-name">Traveller</div>
                  <div className="chat-sidebar__profile-email">user@example.com</div>
                </div>
              )}
            </div>
          </div>
        </aside>

        {/* ===== Main chat area ===== */}
        <main className="chat-main">
          {/* Chat area header */}
          <div className="chat-main__header">
            <div className="chat-main__header-left">
              <button
                className="chat-main__menu-btn"
                onClick={() => setSidebarOpen(p => !p)}
                aria-label="Toggle sidebar"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </button>
              <div className="chat-main__ai-info">
                <div className="chat-main__ai-avatar">🤖</div>
                <div>
                  <div className="chat-main__ai-name">Travel Planner AI</div>
                  <div className="chat-main__ai-status">
                    <span className="chat-main__status-dot" />
                    IBM watsonx Orchestrate · Online
                  </div>
                </div>
              </div>
            </div>
            <div className="chat-main__header-right">
              <div className="chat-main__ibm-badge">
                <svg width="32" height="14" viewBox="0 0 80 32" className="chat-main__ibm-logo">
                  <rect width="80" height="32" rx="4" fill="#1d4ed8"/>
                  <text x="40" y="22" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="Arial">IBM</text>
                </svg>
                <span>watsonx</span>
              </div>
            </div>
          </div>

          {/* ----- IBM watsonx Orchestrate Chat Widget ----- */}
          <WatsonxChat destinationName={destinationName} />
        </main>
      </div>
    </div>
  )
}

export default ChatPage
