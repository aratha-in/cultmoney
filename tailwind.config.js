/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        secondary: '#06327B',
        accent: '#379237',
        dark: '#0A0F1E',
        'dark-card': '#0F1629',
        'dark-border': 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        display: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #379237 0%, #06327B 100%)',
        'hero-gradient': 'linear-gradient(135deg, #0A0F1E 0%, #061840 50%, #0A0F1E 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(55,146,55,0.1) 0%, rgba(6,50,123,0.1) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'glow-green': '0 0 40px rgba(76, 175, 80, 0.3)',
        'glow-blue': '0 0 40px rgba(6, 50, 123, 0.3)',
        'card': '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
        'card-hover': '0 25px 50px -12px rgba(0,0,0,0.25)',
        'premium': '0 20px 60px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
}
