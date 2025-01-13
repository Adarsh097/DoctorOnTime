// tailwind.config.js
export default  {
  content: [
    "./index.html",               // If using Vite
    "./public/index.html",         // If using Create React App
    "./src/**/*.{js,ts,jsx,tsx}",  // For JavaScript and TypeScript files in `src`
  ],
  theme: {
    extend: {
      colors:{
        'primary': "#1c567a" 
      },
    },
  },
  plugins: [],
};

