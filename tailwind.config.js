/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'fresh-white': '#FFFFFF',
        'soft-gray': '#F8FAFC',
        'light-blue': '#E0F2FE',
        'energetic-blue': '#2563EB',
        'deep-blue': '#1E40AF',
        'energetic-green': '#10B981',
        'deep-green': '#059669',
        'dark-gray': '#1F2937',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '9xl': ['8rem', { lineHeight: '0.9' }],
        '10xl': ['10rem', { lineHeight: '0.85' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out',
        'slide-up': 'slideUp 1.2s ease-out',
        'scale-in': 'scaleIn 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(60px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      letterSpacing: {
        'warmest': '0.15em',
        'warmer': '0.1em',
      },
      lineHeight: {
        'extra-tight': '1.1',
        'super-tight': '0.9',
      },
      boxShadow: {
        'warm': '0 8px 32px -4px rgba(37, 99, 235, 0.15), 0 4px 16px -4px rgba(37, 99, 235, 0.08)',
        'warm-lg': '0 16px 48px -8px rgba(37, 99, 235, 0.2), 0 8px 24px -8px rgba(37, 99, 235, 0.12)',
        'warm-xl': '0 24px 64px -12px rgba(37, 99, 235, 0.25), 0 12px 32px -12px rgba(37, 99, 235, 0.15)',
      },
    },
  },
  plugins: [],
};