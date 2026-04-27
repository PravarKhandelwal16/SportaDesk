import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#050507',
          card: '#0b0b12',
          glass: 'rgba(11,11,18,0.6)',
        },
        cyan: {
          neon: '#00f5ff',
          dim: '#00c4cc',
          glow: 'rgba(0,245,255,0.15)',
        },
        lime: {
          neon: '#a3ff00',
          dim: '#82cc00',
          glow: 'rgba(163,255,0,0.15)',
        },
        magenta: {
          neon: '#ff00ff',
          dim: '#cc00cc',
          glow: 'rgba(255,0,255,0.12)',
        },
        navy: {
          dark: '#080810',
          mid: '#0f0f1a',
          light: '#16162a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(0,245,255,0.03) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0,245,255,0.03) 1px, transparent 1px)`,
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,245,255,0.15) 0%, transparent 60%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
        'cyan-glow': 'radial-gradient(circle, rgba(0,245,255,0.2) 0%, transparent 70%)',
        'lime-glow': 'radial-gradient(circle, rgba(163,255,0,0.2) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0,245,255,0.4), 0 0 60px rgba(0,245,255,0.1)',
        'neon-lime': '0 0 20px rgba(163,255,0,0.4), 0 0 60px rgba(163,255,0,0.1)',
        'neon-magenta': '0 0 20px rgba(255,0,255,0.4), 0 0 60px rgba(255,0,255,0.1)',
        'glass': '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        'glass-hover': '0 16px 48px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)',
        'card-lift': '0 20px 60px rgba(0,0,0,0.5)',
      },
      borderColor: {
        'glass': 'rgba(255,255,255,0.08)',
        'glass-hover': 'rgba(0,245,255,0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'ticker': 'ticker 30s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'orbit': 'orbit 12s linear infinite',
        'grid-move': 'gridMove 20s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 8px rgba(0,245,255,0.8))' },
          '50%': { opacity: '0.6', filter: 'drop-shadow(0 0 20px rgba(0,245,255,0.4))' },
        },
        ticker: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        gridMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '40px 40px' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}

export default config
