/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./app/**/*.{js,jsx,ts,tsx}",
  "./screens/**/*.{js,jsx,ts,tsx}",
  "./components/**/*.{js,jsx,ts,tsx}",
  "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  "./app.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

