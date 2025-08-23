/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🌿 Primary Brand Palette (from ColorHunt)
        forest: "#004030",   // Dark Forest Green → navbar background, headings, strong accents
        teal: "#4A9782",     // Soft Teal Green → buttons, hover states, active links
        sand: "#DCD0A8",     // Warm Sand → cards, footer background, secondary sections
        cream: "#FFF9E5",    // Light Cream → main page background, light sections
        
        // 📝 Supporting Color
        textdark: "#1F2933", // Neutral dark gray → main readable text
      },

      // Custom keyframes for menu fade-in animation
      keyframes: {
        menuFadeIn: {
          '0%': { opacity: '0', transform: 'translateY(1rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      // Animation utilities
      animation: {
        menuFadeIn: 'menuFadeIn 0.5s forwards',
      },
    },
  },
  plugins: [],
}
