import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import DashboardPage from './pages/DashboardPage'
import TournamentsPage from './pages/TournamentsPage'
import CreateTournamentPage from './pages/CreateTournamentPage'
import TournamentDetailPage from './pages/TournamentDetailPage'
import ProtectedRoute from './routes/ProtectedRoute'

export default function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
          <Route path="/tournaments" element={<ProtectedRoute><TournamentsPage /></ProtectedRoute>} />
          <Route path="/tournaments/create" element={<ProtectedRoute><CreateTournamentPage /></ProtectedRoute>} />
          <Route path="/tournaments/:id" element={<ProtectedRoute><TournamentDetailPage /></ProtectedRoute>} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  )
}
