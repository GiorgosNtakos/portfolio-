module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: { animation: {
      'fade-in-up': 'fadeInUp 0.8s ease-out both',
      'wave-scroll': 'waveScroll 6s linear infinite',
      'flicker': 'flicker 3s ease-in-out infinite',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    keyframes: {
      fadeInUp: {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      waveScroll: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-320px)' },
      },
      flicker: {
        '0%, 100%': { opacity: '1' },
        '50%': { opacity: '0.65' },
      }
    },
   },
  },
  plugins: [],
}
