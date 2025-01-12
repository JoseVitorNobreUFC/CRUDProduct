/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        "blue-one": "#1C19BF",
        "blue-two": "#11104A",
        "agua": "#218796",
        "white-one": "#FFFFFF33",
        "white-two": "#5B59CE",
        "grey-one": "#D9D9D9",
        "grey-two": "#6C6C6C",
      },
      height: {
        "92": "350px",
        "screen-55": "55vh",
        "screen-60": "60.6vh",
        "screen-75": "75vh",
        "screen-80": "80vh",
        "screen-90": "90vh",
        "screen-93": "93vh",
        "screen-100": "100vh",
      },
      minHeight: {
        "92": "350px",
        "screen-55": "55vh",
        "screen-80": "80vh",
        "screen-90": "90vh",
        "screen-93": "93vh",
        "screen-100": "100vh",
      },
      margin:{
        "ajuste": "0 0 0 1000px",
        "ajuste-2": "0 0 0 1650px",
        "ajuste-3": "0 0 0 1400px",
      },
      minWidth: {
        "panel": "480px",
      },
      maxWidth: {
        "lastPanel": "48.5%",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Define a fonte Inter
      },
      textShadow: {
        'soft': '0 0 10px rgba(0, 0, 0, 0.05)', // Sombra suave no texto pra usar
      },
    },
  },
  plugins: [],
};