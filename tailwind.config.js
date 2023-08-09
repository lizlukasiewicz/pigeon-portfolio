/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        gradient:{
          '0%': { backgroundposition: "51% 0%"},
          '50%': { backgroundposition: "50% 100%"},
          '100%': { backgroundposition: "51% 0%"},
        },
      },
      animation: {
        breathe: 'gradient 6s ease infinite',// 'animate-breathe's
      },
    },
  },
  plugins: [],
}

