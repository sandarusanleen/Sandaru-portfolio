/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        space: {
          950: '#07070a',
          900: '#0a0a0e',
          850: '#0f0f16',
          800: '#14141e',
          700: '#1e1e2d',
        },
        neon: {
          cyan: '#00f0ff',
          violet: '#8b5cf6',
          emerald: '#10b981',
          pink: '#ec4899',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'Inter', 'sans-serif']
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'float-fast': 'float 3.5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'orbit-spin': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1.5deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 8px rgba(0, 240, 255, 0.4))' },
          '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 20px rgba(0, 240, 255, 0.8))' },
        }
      },
      backgroundImage: {
        'radial-vignette': 'radial-gradient(ellipse at center, rgba(14, 14, 26, 0) 0%, rgba(10, 10, 14, 0.85) 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%)',
        'cyber-gradient': 'linear-gradient(135deg, #00f0ff 0%, #8b5cf6 50%, #ec4899 100%)',
      }
    },
  },
  plugins: [],
}
