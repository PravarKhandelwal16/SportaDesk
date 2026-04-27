import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  LayoutDashboard, Sword, PlusCircle, Trophy, Settings, ChevronLeft, ChevronRight,
} from 'lucide-react'
import { useState } from 'react'

const links = [
  { to: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
  { to: '/tournaments', label: 'Tournaments', icon: <Sword size={18} /> },
  { to: '/tournaments/create', label: 'Create New', icon: <PlusCircle size={18} /> },
  { to: '/dashboard', label: 'My Trophies', icon: <Trophy size={18} /> },
  { to: '/dashboard', label: 'Settings', icon: <Settings size={18} /> },
]

export default function Sidebar() {
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <motion.aside
      animate={{ width: collapsed ? 70 : 240 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="hidden md:flex flex-col fixed left-0 top-16 bottom-0 z-40 glass border-r border-white/5 overflow-hidden"
    >
      <div className="flex flex-col flex-1 py-6 px-2 gap-1">
        {links.map((link) => {
          const active = location.pathname === link.to
          return (
            <Link
              key={link.label}
              to={link.to}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group
                ${active
                  ? 'bg-cyan-neon/10 text-cyan-neon border border-cyan-neon/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
            >
              <span className={`flex-shrink-0 ${active ? 'text-cyan-neon' : 'text-gray-500 group-hover:text-gray-300'}`}>
                {link.icon}
              </span>
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="whitespace-nowrap overflow-hidden"
                >
                  {link.label}
                </motion.span>
              )}
            </Link>
          )
        })}
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="mx-2 mb-4 p-2 rounded-xl text-gray-500 hover:text-cyan-neon hover:bg-cyan-neon/10 transition-all duration-200 flex justify-center"
      >
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>
    </motion.aside>
  )
}
