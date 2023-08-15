/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    './app/**/*.{js,ts,jsx,tsx,mdx}', 
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      keyframes: {
        
        gradient:{
          '0%': { backgroundposition: "51% 0%"},
          '50%': { backgroundposition: "50% 100%"},
          '100%': { backgroundposition: "51% 0%"},
        },

        fadeRight: {
          from: {
            transform: "translateX(-40px)",
            opacity: 0,
          },
          to: {
            transform: "translateX(0px)",
            opacity: 1,
          }
        },

        fadeDown: {
          from: {
            transform: "translateY(-20px)",
            opacity: 0,
          },
          to: {
            transform: "translateY(0px)",
            opacity: 1,
          }
        },
        
        growRight: {
          from: {
            width: 0,
            opacity:0,
          },
          to: {
            width: "32vw",
            opacity: 1,
          }
        },

        // fadeOut: {
        //   "0%": {
        //     opacity: 1,
        //     filter: brightness(1),
        //     transform: "scale(1)",
        //   }, 
        //   "50%": {
        //     opacity: 1,
        //     filter: brightness(2),
        //     transform: "scale(1.5)",
        //   },
        //   "85%": {
        //     opacity: 1,
        //     filter: brightness(1),
        //     transform: "scale(1)",
        //   },
        //   "100%": {
        //     opacity: 0,
        //     filter: brightness(1),
        //     transform: "scale(1)",
        //   },
        // }
      
      },
      animation: {
        breathe: 'gradient 6s ease infinite',
      },
    },
  },
  plugins: [],
}

