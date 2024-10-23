/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'bounce-slight': {
          '0%, 100%': { transform: 'translateY(0) rotate(-15deg)' },
          '50%': { transform: 'translateY(-10px) rotate(-15deg)' },
        },
        'custom-bounce': {
    '0%, 100%': { transform: 'translateY(0) rotate(12deg)' },
    '50%': { transform: 'translateY(-10px) rotate(12deg)' },
  },
        'custom-bounces': {
    '0%, 100%': { transform: 'translateY(0) rotate(12deg)' },
    '50%': { transform: 'translateY(-10px) rotate(12deg)' },
  },
  'smooth-up-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'bounce-slight': 'bounce-slight 4s infinite',
        'custom-bounce': 'custom-bounce 3s infinite',
        'custom-bounces': 'custom-bounces 2.5s infinite',
        'bounce-slow': 'bounce 2.5s infinite',
        'smooth-up-down': 'smooth-up-down 3s ease-in-out infinite',
      },
      maxWidth: {
        '3xl': '1600px', // or any custom size you prefer
      },
      colors: {
        primary: "#2E95F4",
        secondary:"#F0F6FB",
        red: "#FFE7E7",
        yell: "#E7D37F",
        
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(90deg, #9CCFFF 0%, #2E95F4 100%)',
        'gradient-white-to-black': 'linear-gradient(to right, white, black)',
        'gradient-darker-blue': 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), #5FB2FF)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '0 35px 35px -10px rgba(0, 0, 0, 0.5)',
        '4xl': '0 45px 60px -5px rgba(0, 0, 0, 0.7)',
        'custom-light': '0 4px 8px rgba(0, 0, 0, 0.2)', 
        'custom-dark': '0 12px 24px rgba(0, 0, 0, 0.5)',
        'custom-1': '-4px 2px 10px 0px #0000001A',
        'custom-2': '-17px 9px 19px 0px #00000017',
        'custom-3': '-38px 19px 26px 0px #0000000D',
        'custom-4': '-67px 35px 30px 0px #00000003',
        'custom-5': '-105px 54px 33px 0px #00000000',
        'shadow-1': '-2px 6px 14px 0px #0000001A',
        'shadow-2': '-6px 24px 25px 0px #00000017',
        'shadow-3': '-14px 55px 34px 0px #0000000D',
        'shadow-4': '-25px 97px 40px 0px #00000003',
        'shadow-5': '-38px 152px 44px 0px #00000000',
      },
      scale: {
        '400': '4',
        '500': '5',
      }, 
    },
  },
  plugins: [],
}
