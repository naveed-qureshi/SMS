/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050c18',
          900: '#0a192f',
          850: '#0d203d',
          800: '#112240',
          700: '#1e3a66',
          600: '#2d548f',
        },
        orange: {
          sms: '#f97316',
          'sms-hover': '#ea580c',
          'sms-light': '#ffedd5',
          'sms-border': '#fdba74',
          'sms-glow': 'rgba(249, 115, 22, 0.25)',
        },
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          muted: '#64748b',
          dark: '#334155'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'sms-card': '0 10px 30px -10px rgba(10, 25, 47, 0.08)',
        'sms-hover': '0 20px 40px -15px rgba(10, 25, 47, 0.15)',
        'sms-glow': '0 0 35px -5px rgba(249, 115, 22, 0.35)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}
