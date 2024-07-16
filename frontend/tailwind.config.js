// tailwind.config.ts
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        'halloween': {
           'primary' : '#FC814A',
           'primary-focus' : '#fbb798',
           'primary-content' : '#ffffff',

           'secondary' : '#564256',
           'secondary-focus' : '#896c89',
           'secondary-content' : '#ffffff',

           'accent' : '#2C6E49',
           'accent-focus' : '#419566',
           'accent-content' : '#ffffff',

           'neutral' : '#231F20',
           'neutral-focus' : '#695d60',
           'neutral-content' : '#ffffff',

           'base-100' : '#E8E8E8',
           'base-200' : '#BFBFBF',
           'base-300' : '#96939B',
           'base-content' : '#564256',

           'info' : '#094D92',
           'success' : '#548C2F',
           'warning' : '#c3bf3c',
           'error' : '#FC440F',

       
           '--rounded-box': '0',          
           '--rounded-btn': '0',        
           '--rounded-badge': '0',      
 
           '--animation-btn': '.25s',       
           '--animation-input': '.2s',       
 
           '--btn-text-case': 'uppercase',   
           '--navbar-padding': '.5rem',      
           '--border-btn': '1px',


        },
      
      },
      "synthwave",
      "dim",
      "cyberpunk",
      "emerald",
      "sunset",

    ],
  },
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'sans-serif'],
        'roboto-mono': ['"Roboto Mono"', 'monospace'],
      },
    },
  },
  variants: {},
  plugins: [require("daisyui")],
}









   


