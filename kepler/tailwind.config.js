/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        nav: "#9d9d9d",
        main: "#0d0222",
        boxTop: "#1a001f",
        boxBottom: "#280034",
        btnTop: "#83187f",
        btnBottom: "#490b53",
        areaPurple: "#190021",
        bar: "#6b337c",
        tableBg: "#380947",
        tableTitle: "#fbd9ff",
        tableBar: "#6b337c",
        tableText: "#d49eff",
        modalTop: "#220127",
        modalBottom: "#490b53",
        modalBorder: "#7e5486",
        modalContent: "#752f80",
        modalBtn: "#dfcce4",
        modalBtnBorder: "#26003a",
        miningBg: "#130223",
        miningBtnBg: "#322543",
        miningBtnHover: "#94889e",
        miningModalTop: "#32155f",
        miningModalBottom: "#120326",
        miningModalBorder: "#4b2e78",
        miningModalText: "#a875bd",
        shopItem: "#2b2b2b",
        govBg: "#221b3d",
        govBtn: "#0f0c1b",
        light_gray: "#b5b2bc",
        hover_pink: "#d52e82",
        top_gray: "#a3a3a3",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        bubbleGum: "#ff77e9",
        bermuda: "#78dcca",
      },
      width: {
        128: "32rem",
      },
      height: {
        108: "26rem",
      },
      left: {
        "-16": "-4rem",
      },
      right: {
        "-16": "-4rem",
      },
      minHeight: {
        "1/2": "50%",
        halfScreen: "70vh",
      },
      animation: {
        show: "modalShow 0.3s",
        showInfinity: "modalShow 1s infinite alternate",
        showDisplay: "itemShow 0.5s",
        boxFlicker: "flicker 1.5s infinite alternate",
        miningFlicker: "flickerBlue 1.5s infinite alternate",
        picking: "pickShow 1.5s",
      },
      keyframes: {
        modalShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        itemShow: {
          from: {
            opacity: 0,
            transform: "scale(0)",
          },
          to: {
            opacity: 1,
            transform: "scale(1)",
          },
        },
        flicker: {
          "0%, 18%, 22%,100%": {
            "box-shadow":
              "0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #cf00cf, 0 0 80px #cf00cf, 0 0 90px #cf00cf, 0 0 100px #cf00cf, 0 0 150px #cf00cf",
          },
          "55%": {
            "box-shadow":
              "0 0 2px #fff, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #cf00cf, 0 0 40px #cf00cf, 0 0 45px #cf00cf, 0 0 50px #cf00cf, 0 0 75px #cf00cf",
          },
        },
        flickerBlue: {
          "0%, 18%, 22%,100%": {
            "box-shadow":
              "0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #32155f, 0 0 80px #32155f, 0 0 90px #32155f, 0 0 100px #32155f, 0 0 150px #32155f",
          },
          "55%": {
            "box-shadow":
              "0 0 2px #fff, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #32155f, 0 0 40px #32155f, 0 0 45px #32155f, 0 0 50px #32155f, 0 0 75px #32155f",
          },
        },
        pickShow: {
          "0%": {
            opacity: 0,
            transform: "scale(0)",
          },
          "33%": {
            opacity: 1,
            transform: "scale(1)",
          },
          "66%": {
            opacity: 1,
            transform: "scale(1)",
          },
          "100%": {
            opacity: 0,
            transform: "scale(0)",
          },
        },
      },
      animationDelay: {
        500: "0.5s",
        1000: "1s",
        2500: "2.5s",
        3000: "3s",
        4000: "4s",
        5000: "5s",
      },
    },
  },
  variants: {
    animationFillMode: ["responsive"],
  },
  plugins: [require("tailwindcss-animation")],
};
