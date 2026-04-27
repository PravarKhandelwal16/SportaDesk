import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Trophy, LogOut, LayoutDashboard, Sword, PlusCircle, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useAuthStore } from '../../store/authStore'

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuthStore()
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const navLinks = isAuthenticated
    ? [
        { to: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={16} /> },
        { to: '/tournaments', label: 'Tournaments', icon: <Sword size={16} /> },
        { to: '/tournaments/create', label: 'Create', icon: <PlusCircle size={16} /> },
      ]
    : [
        { to: '/#features', label: 'Features', icon: null },
        { to: '/#how-it-works', label: 'How it Works', icon: null },
      ]

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8">
              <Trophy
                size={28}
                className="text-cyan-neon group-hover:scale-110 transition-transform duration-300"
                style={{ filter: 'drop-shadow(0 0 8px rgba(0,245,255,0.8))' }}
              />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">
              <span className="text-gradient-cyan">Sporta</span>
              <span className="text-white">Desk</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-cyan-neon transition-colors duration-200 font-medium"
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <div className="glass px-3 py-1.5 rounded-full text-xs text-cyan-neon border border-cyan-neon/20">
                  👤 {user?.name?.split(' ')[0]}
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-red-400 hover:bg-red-400/10 transition-all duration-200"
                >
                  <LogOut size={15} />
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="btn-neon px-5 py-2 rounded-lg text-sm font-semibold bg-cyan-neon text-bg-base hover:shadow-neon-cyan transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden glass border-t border-white/5 px-4 py-4 space-y-2"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-cyan-neon hover:bg-cyan-neon/5 transition-all"
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-red-400 hover:bg-red-400/10 transition-all"
            >
              <LogOut size={15} /> Logout
            </button>
          ) : (
            <div className="flex gap-2 pt-2">
              <Link to="/login" onClick={() => setMobileOpen(false)} className="flex-1 text-center px-4 py-2 text-sm glass rounded-lg text-gray-300">Login</Link>
              <Link to="/signup" onClick={() => setMobileOpen(false)} className="flex-1 text-center px-4 py-2 text-sm bg-cyan-neon text-bg-base rounded-lg font-semibold">Sign Up</Link>
            </div>
          )}
        </motion.div>
      )}
    </motion.nav>
  )
}
