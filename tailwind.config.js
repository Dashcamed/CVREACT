/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "synthwave",
    themes: [
      "cyberpunk",
      "synthwave",
      {
        mytheme: {
          primary: "#00FFFF",
          secondary: "#FFFF00",
          accent: "#7F00FF",
          neutral: "#A1A6B4",
          "base-100": "#F0F0F5",
          success: "#FF00FF",
        },
      },
    ],
  },
};
