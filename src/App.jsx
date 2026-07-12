import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import ChatPage from './pages/ChatPage.jsx'
import './styles/global.css'

/**
 * Root application component.
 * Handles client-side routing between the Landing page and Chat page.
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<ChatPage />} />
        {/* Catch-all — redirect unknown routes to landing */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
