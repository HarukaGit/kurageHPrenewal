/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
      }
    }
  }


  // カラー設定----------------------------------------------------
  module.exports = {
    theme: {
      extends: {
      colors: {
          "light-brown": '#FFF7F1',
          "default-brown": '#EADAB0',
          "dark-bro": '#D6BA74',
        },
        blue: {
          light: '#E8F4FF',
        },
      }
    }
  } 
