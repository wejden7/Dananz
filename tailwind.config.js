/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      white: '#FFFFFF',
      black:"#000000",
      lightray:"#D9D9D9",
      red:"#FF0000",
      blue:{
         10:"#EAEBF2",
        25:"#D5D7E4",
        50:"#ABAFC9",
        75:"#8088AE",
        90:"#566093",
        100:"#2C3878",
      },
      grayscale:{
       10:"#9C9C9C",
       30:"#3C3C3C",
       50:"#333333",
       70:"#141414",
     }
      
    },
    fontSize: {
      h72: [
        "72px",
        {
          lineHeight: "140%",
         
        },
      ],
      h64: [
        "64px",
        {
          lineHeight: "140%",
        },
      ],
      h56: [
        "56px",
        {
          lineHeight: "140%",
        },
      ],
      h52: [
        "52px",
        {
          lineHeight: "160%",
        },
      ],
      h32: [
        "32px",
        {
          lineHeight: "140%",
        },
      ],
      h24: [
        "24px",
        {
          lineHeight: "140%",
        },
      ],
      h20: [
        "20px",
        {
          lineHeight: "140%",
        },
      ],
      h18: [
        "18px",
        {
          lineHeight: "140%",
         
        },
      ],
      h16: [
        "16px",
        {
          lineHeight: "140%",
        },
      ],
      h14: [
        "14px",
        {
          lineHeight: "140%",
        },
      ],
      h36: [
        "36px",
        {
          lineHeight: "170%",
        },
      ],
      h12: [
        "12px",
        {
          lineHeight: "150%",
        },
      ],
      h10: [
        "10px",
        {
          lineHeight: "150%",
        },
      ],
    },
    extend: {boxShadow: {
      '1': '0 0px 5px 1px rgba(0, 0, 0, 0.3)',
    },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      rotate: {
        '90-': '-90deg',
      },
      width: {
        '120': '120px',
        '250': '250px',
        '300': '300px',
        "613":"613px",
        "681":"681px",
        "481":"481px",
        "432":"432px",
        "350":"350px",
        "550":"550px",
        "2xl":"1900px"
      
      },
      height: {
        '203': '203px',
        '350' : "350px",
        '400' : "400px",
        "500": "500px",
        "525": "525px"
      },
      margin: {
        '120': '120px',
        '74':'74px'
      },
      gap: {
        '74': '74px',
        '50':'50px',
        '155':'155px'
      }
    },
  },
  plugins: [],
};
