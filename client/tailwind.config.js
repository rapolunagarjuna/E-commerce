export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '800px',
      'laptop' : '1200px',
      '2xl': '2000px',
    },
    extend: {
      colors: {
        "primary": "#3C455C",
        "secondary": "#B4C446",
      },
      height: {
        "50": '50vh',
        "70": '70vh'
      }
    }
  },
  plugins: [],
}