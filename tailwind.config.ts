
import { Config } from 'tailwindcss';
// module.exports = /** @type {import('tailwindcss').Config} */
export default {
  content: [    
    './app/**/*.{js,ts,jsx,tsx,mdx}', 
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    backgroundSize: {
      //   'auto': 'auto',
      //   'cover': 'cover',
      //   'contain': 'contain',
        'zoom': '400% 400%',
      },
    extend: {
      colors: {
        start: {
          blue: '#131D30',
          black: '#020405',
        },
        sphere: {
          muteBlue:'#112941',
          lightBlue:'rgba(93, 185, 188, 0.52)',
          neonBlue: '#00E2CB',
          grey: 'rgba(51, 72, 80, 0.8)',
          darkBlue:'rgba(7, 18, 43, 0.5)',
          blankBlue: 'rgba(7, 18, 43, 0)',
        },
      //   transparent: 'transparent',
      //   current: 'currentColor',
      //   'blue': {
      //     darkest: '#1f2d3d',
      //     dark: '#3c4858',
      //     DEFAULT: '#c0ccda',
      //     light: '#e0e6ed',
      //     lightest: '#f9fafc',
      //   },
      //   'green': {
      //     darkest: '#1f2d3d',
      //     dark: '#3c4858',
      //     DEFAULT: '#c0ccda',
      //     light: '#e0e6ed',
      //     lightest: '#f9fafc',
      //   },
      //   'red': {
      //     darkest: '#1f2d3d',
      //     dark: '#3c4858',
      //     DEFAULT: '#c0ccda',
      //     light: '#e0e6ed',
      //     lightest: '#f9fafc',
      //   },
      },
    
    // backgroundPosition: {
    //   'start': '51% 10%',
    // },
      backgroundImage: ({ theme }) => ({
        'blend-gradient': `linear(135deg, ${theme('colors.start.blue')}, ${theme('colors.start.black')})`,
        'omni-sphere': `radial-gradient(circle 375px at center, 
          ${theme('colors.sphere.muteBlue')} 46%,
          ${theme('colors.sphere.lightBlue')} 60%,
          ${theme('colors.sphere.neonBlue')} 61.4%,
          ${theme('colors.sphere.grey')} 62%,
          ${theme('colors.sphere.darkBlue')} 82%,
          ${theme('colors.sphere.blankBlue')} 92%)`
      
      }),
      keyframes: ({ theme }) => ({
        gradient:{
          '0%': { ['background-position']: "51% 0%"},
          '50%': { ['background-position']: "50% 100%"},
          '100%': { ['background-position']: "51% 0%"},
        },

        fadeRight: {
          from: { transform: "translateX(-40px)", opacity: "0", },
          to: { transform: "translateX(0px)", opacity: "1", }
        },

        fadeDown: {
          from: { transform: "translateY(-20px)", opacity: "0", },
          to: { transform: "translateY(0px)", opacity: "1", }
        },

        growRight: {
          from: { width: "0", opacity: "0", },
          to: { width: "32vw", opacity: "1", }
        },

        // fadeOut: {
        //   "0%": { opacity: 1, filter: brightness(1), transform: "scale(1)", }, 
        //   "50%": { opacity: 1, filter: brightness(2), transform: "scale(1.5)", },
        //   "85%": { opacity: 1, filter: brightness(1), transform: "scale(1)", },
        //   "100%": { opacity: 0, filter: brightness(1), transform: "scale(1)", },
        // }
      
      }),
      
      // animation: {
      //   breathe: 'gradient 6s ease infinite',
      // },
    },
  },
  plugins: [],
} satisfies Config;

