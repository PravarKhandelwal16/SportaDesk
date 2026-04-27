import { Trophy, Globe, MessageCircle, Camera } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg-card mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Trophy size={24} className="text-cyan-neon" style={{ filter: 'drop-shadow(0 0 6px rgba(0,245,255,0.7))' }} />
              <span className="font-display font-bold text-xl">
                <span className="text-gradient-cyan">Sporta</span>
                <span className="text-white">Desk</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              The futuristic platform for cricket, kabaddi, football & more. Host tournaments, track scores, and dominate the leaderboard.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[Globe, MessageCircle, Camera].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-lg glass flex items-center justify-center text-gray-500 hover:text-cyan-neon hover:border-cyan-neon/30 transition-all duration-200">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Platform</h4>
            <ul className="space-y-2.5">
              {['Features', 'Pricing', 'Changelog', 'Roadmap'].map((l) => (
                <li key={l}><a href="#" className="text-sm text-gray-500 hover:text-cyan-neon transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {['About', 'Blog', 'Careers', 'Contact'].map((l) => (
                <li key={l}><a href="#" className="text-sm text-gray-500 hover:text-cyan-neon transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">© 2026 SportaDesk. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {['Privacy', 'Terms', 'Cookies'].map((l) => (
              <a key={l} href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
