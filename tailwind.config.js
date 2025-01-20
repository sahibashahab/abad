/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom Background Gradients
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glow-effect': 'radial-gradient(circle, #1eb6ff 10%, #000000 90%)',
      },
      // Container Centering & Padding
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          md: '2.5rem',
          lg: '3rem',
          xl: '4rem',
          '2xl': '4.5rem',
        },
      },
      // Custom Screens
      screens: {
        '4k': '1980px',
        ultra: '2560px', // Additional ultra-wide screen
      },
      // Custom Colors
      colors: {
        primary: '#1eb6ff',
        dark: '#000000',
        secondary: '#fafafa',
      },
      // Custom Box Shadows
      boxShadow: {
        glow: '0 0 15px 5px #1eb6ff',
        intense: '0 0 25px 10px #1eb6ff',
      },
      // Custom Animations
      animation: {
        glow: 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 15px 5px #1eb6ff' },
          '50%': { boxShadow: '0 0 25px 10px #1eb6ff' },
        },
      },
    },
  },
  plugins: [],
};
