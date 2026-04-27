import { Suspense, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Zap, Shield, BarChart2, Clock, Users, Star, ChevronRight, ArrowRight,
} from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import PageWrapper, { staggerContainer, fadeUp } from '../components/ui/PageWrapper'
import HeroScene from '../components/three/HeroScene'
import { testimonials } from '../lib/mockData'

// ── Feature grid data ────────────────────────────────────────────────────────
const features = [
  { icon: <Zap size={22} />, title: 'Real-time Scoring', desc: 'Live scores updated every second. Cricket balls, kabaddi raids, football goals — all tracked instantly.', color: 'cyan' },
  { icon: <Shield size={22} />, title: 'Smart Brackets', desc: 'Auto-generated knockout & league fixtures with drag-and-drop scheduling support.', color: 'lime' },
  { icon: <BarChart2 size={22} />, title: 'Deep Analytics', desc: 'Player stats, team rankings, win probabilities and post-match insights at your fingertips.', color: 'magenta' },
  { icon: <Clock size={22} />, title: 'Multi-Sport Support', desc: 'Cricket, Kabaddi, Football, Basketball, Badminton — all with sport-specific scoring rules.', color: 'cyan' },
  { icon: <Users size={22} />, title: 'Team Management', desc: 'Manage rosters, assign roles, track attendance and player availability across seasons.', color: 'lime' },
  { icon: <Star size={22} />, title: 'Premium Dashboards', desc: 'Organizers, managers and players each get role-specific views with actionable insights.', color: 'magenta' },
]

const colorMap: Record<string, string> = {
  cyan:    'text-cyan-neon bg-cyan-neon/10 border-cyan-neon/20',
  lime:    'text-lime-neon bg-lime-neon/10 border-lime-neon/20',
  magenta: 'text-magenta-neon bg-magenta-neon/10 border-magenta-neon/20',
}

const steps = [
  { n: '01', title: 'Create Tournament', desc: 'Set up your tournament in under 3 minutes with our guided wizard — sport, format, teams, schedule.' },
  { n: '02', title: 'Invite & Register', desc: 'Share a link, teams self-register, submit rosters and pay entry fees all in one place.' },
  { n: '03', title: 'Play & Dominate', desc: 'Auto-generate fixtures, score live matches, track standings, and crown your champion.' },
]

export default function LandingPage() {
  const [testimonialIdx, setTestimonialIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTestimonialIdx((i) => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <PageWrapper>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Grid BG */}
        <div className="absolute inset-0 grid-bg opacity-60" />
        {/* Radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-hero-gradient pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-semibold text-lime-neon border border-lime-neon/20 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-neon animate-pulse" />
                Now supporting Cricket · Kabaddi · Football · More
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display font-black text-6xl lg:text-7xl xl:text-8xl leading-none tracking-tight"
            >
              <span className="text-gradient-hero">Host.</span>
              <br />
              <span className="text-gradient-hero">Score.</span>
              <br />
              <span className="text-gradient-hero">Dominate.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-md leading-relaxed">
              The <span className="text-white font-medium">futuristic platform</span> for cricket, kabaddi, football & more.
              Run perfect tournaments with real-time scoring, smart brackets, and stunning dashboards.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/signup"
                className="btn-neon flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold bg-cyan-neon text-bg-base text-sm hover:shadow-neon-cyan transition-all duration-300"
              >
                Start Free <ArrowRight size={16} />
              </Link>
              <Link
                to="/login"
                className="btn-neon flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold glass border border-white/10 text-white text-sm hover:border-cyan-neon/30 transition-all duration-300"
              >
                View Demo
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-6 pt-2">
              {[['500+', 'Tournaments'], ['12K+', 'Players'], ['98%', 'Satisfaction']].map(([num, label]) => (
                <div key={label}>
                  <div className="font-display font-bold text-xl text-cyan-neon">{num}</div>
                  <div className="text-xs text-gray-500">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-gray-600">Loading 3D…</div>}>
              <HeroScene />
            </Suspense>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────────────── */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold tracking-widest text-cyan-neon uppercase mb-3 block">Everything You Need</span>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white">
              Built for <span className="text-gradient-cyan">serious</span> sports orgs
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass rounded-2xl p-6 glass-hover cursor-default"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center border mb-4 ${colorMap[f.color]}`}>
                  {f.icon}
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-neon/3 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold tracking-widest text-lime-neon uppercase mb-3 block">Simple Process</span>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white">
              Up and running in <span className="text-gradient-lime">3 steps</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-2/3 w-full h-px bg-gradient-to-r from-cyan-neon/30 to-transparent" />
                )}
                <div className="w-16 h-16 rounded-2xl glass border border-cyan-neon/20 flex items-center justify-center mx-auto mb-5">
                  <span className="font-display font-black text-2xl text-gradient-cyan">{step.n}</span>
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-4xl text-white">Trusted by <span className="text-gradient-cyan">organizers</span></h2>
          </motion.div>

          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIdx}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
                className="glass rounded-3xl p-8 text-center"
              >
                <div className="text-4xl mb-4">{testimonials[testimonialIdx].avatar}</div>
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: testimonials[testimonialIdx].rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
                  "{testimonials[testimonialIdx].text}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonials[testimonialIdx].name}</div>
                  <div className="text-sm text-gray-500">{testimonials[testimonialIdx].role}</div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIdx(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === testimonialIdx ? 24 : 8,
                    height: 8,
                    backgroundColor: i === testimonialIdx ? '#00f5ff' : 'rgba(255,255,255,0.15)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-neon/5 via-transparent to-lime-neon/5 pointer-events-none" />
            <span className="text-xs font-bold tracking-widest text-cyan-neon uppercase mb-4 block">Ready to Dominate?</span>
            <h2 className="font-display font-black text-5xl text-white mb-4">
              Start your first <span className="text-gradient-cyan">tournament</span> today
            </h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Free to start. No credit card required. Your first tournament is live in minutes.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/signup"
                className="btn-neon flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-cyan-neon text-bg-base text-base hover:shadow-neon-cyan"
              >
                Get Started Free <ChevronRight size={18} />
              </Link>
              <Link
                to="/login"
                className="btn-neon flex items-center gap-2 px-8 py-4 rounded-xl font-semibold glass border border-white/10 text-white text-base"
              >
                Sign In
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </PageWrapper>
  )
}
