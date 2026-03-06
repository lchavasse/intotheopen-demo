/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nb: {
          bg: '#FFFDF7',
          fg: '#1A1A1A',
          pink: '#FF6B9D',
          yellow: '#FFE566',
          blue: '#6BB5FF',
          green: '#7BEA7B',
          orange: '#FF9A56',
          purple: '#C4A1FF',
        },
      },
      boxShadow: {
        'hard': '5px 5px 0px 0px #1A1A1A',
        'hard-sm': '4px 4px 0px 0px #1A1A1A',
        'hard-lg': '7px 7px 0px 0px #1A1A1A',
        'hard-xl': '8px 8px 0px 0px #1A1A1A',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      borderWidth: {
        '3': '3px',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

