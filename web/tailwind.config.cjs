/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [{
            mytheme: {
                "primary": "#fcd34d",
                "secondary": "#fb923c",
                "accent": "#fef9c3",
                "neutral": "#24221e",
                "base-100": "#121110",
                "info": "#2563eb",
                "success": "#16a34a",
                "warning": "#ea580c",
                "error": "#ef4444",
            },
        }, ],
    },
}