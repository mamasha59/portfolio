/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        stars:
          "-34vw -4vh 2px 3px #fff,48vw -16vh 3px 0px #fff,-13vw 27vh 2px 2px #fff,12vw 9vh 3px 0px #fff,25vw 22vh 3px 2px #fff,1vw -37vh 2px 3px #fff,20vw 48vh 2px 3px #fff,19vw 40vh 3px 2px #fff,-50vw 48vh 2px 3px #fff,48vw 41vh 0px 1px #fff,24vw 12vh 3px 1px #fff,-50vw -11vh 3px 0px #fff,-10vw -46vh 3px 0px #fff,-45vw -11vh 3px 1px #fff,-33vw 13vh 1px 3px #fff,48vw -31vh 3px 1px #fff,-27vw -37vh 0px 3px #fff,28vw -10vh 3px 0px #fff,25vw -41vh 3px 2px #fff,31vw 35vh 2px 0px #fff,-43vw 11vh 3px 2px #fff,-1vw 37vh 2px 3px #fff,-14vw 12vh 1px 1px #fff,6vw 36vh 2px 0px #fff,-46vw -24vh 2px 0px #fff,-22vw -26vh 0px 0px #fff,45vw -26vh 2px 1px #fff,30vw 14vh 1px 0px #fff,2vw -6vh 2px 0px #fff,-29vw 7vh 0px 3px #fff,50vw -7vh 2px 0px #fff,-32vw 13vh 3px 1px #fff,-41vw -23vh 3px 1px #fff,26vw -41vh 1px 1px #fff,-36vw 48vh 1px 3px #fff,-14vw 37vh 1px 1px #fff,-32vw 29vh 1px 2px #fff,25vw 25vh 2px 3px #fff,43vw -26vh 3px 3px #fff,14vw 24vh 3px 1px #fff,1vw -10vh 1px 2px #fff,50vw -33vh 1px 3px #fff,-11vw 15vh 1px 0px #fff,-28vw 27vh 0px 0px #fff,-19vw -1vh 2px 3px #fff,-2vw 31vh 0px 2px #fff,-47vw -35vh 2px 2px #fff,19vw -36vh 2px 0px #fff,-50vw -14vh 2px 1px #fff,-31vw 31vh 0px 3px #fff,-13vw 11vh 0px 0px #fff,-34vw 18vh 2px 2px #fff,32vw 19vh 2px 1px #fff,-38vw -45vh 1px 3px #fff,-22vw -9vh 3px 2px #fff,14vw 41vh 0px 0px #fff,-26vw -3vh 3px 0px #fff,-10vw 38vh 1px 1px #fff,-49vw 28vh 1px 1px #fff,12vw -47vh 0px 1px #fff,-50vw -3vh 0px 3px #fff,-25vw 9vh 3px 1px #fff,40vw -26vh 0px 0px #fff,49vw 33vh 0px 0px #fff,-8vw -41vh 1px 1px #fff,-15vw 19vh 3px 2px #fff,-24vw -15vh 2px 2px #fff,3vw -14vh 0px 2px #fff,20vw -34vh 3px 1px #fff,-45vw 50vh 2px 0px #fff,-15vw 38vh 3px 0px #fff,-42vw -34vh 2px 0px #fff,-7vw 27vh 1px 0px #fff,23vw 9vh 1px 3px #fff,-22vw -36vh 3px 1px #fff,17vw 34vh 2px 3px #fff,-2vw -36vh 1px 1px #fff,-4vw -33vh 1px 3px #fff,-38vw 13vh 3px 0px #fff,0vw 35vh 1px 3px #fff,-38vw -36vh 0px 2px #fff,29vw 18vh 2px 0px #fff,9vw 1vh 0px 0px #fff,-29vw -5vh 0px 3px #fff,-26vw -37vh 3px 0px #fff,-18vw 8vh 0px 2px #fff,20vw -47vh 1px 0px #fff,-31vw 13vh 0px 1px #fff,36vw 18vh 3px 3px #fff,-16vw -18vh 1px 1px #fff,-43vw 32vh 2px 2px #fff,24vw 39vh 2px 1px #fff,41vw 4vh 1px 2px #fff,-23vw -49vh 1px 0px #fff,-31vw 43vh 1px 2px #fff,44vw 39vh 2px 2px #fff,-47vw -4vh 1px 0px #fff,-19vw 43vh 3px 1px #fff,14vw -28vh 1px 1px #fff,-26vw 4vh 0px 2px #fff",
      },
      colors: {
        orange: "#ff9f43",
        // 'blue': '', TODO - общий цвет
        green: "#344c36",
        lightModeT: '#ed143d'
      },
      animation: {
        bounceOnce: "bounceOnce ease-in-out 2s",
        zoomSpace: "zoomSpace 20s alternate infinite",
        goShip: "startShip 5s ease-in-out both",
        appear: "appear 1s ease-in-out both"
      },
      keyframes: {
        bounceOnce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(15%)" },
        },
        zoomSpace: {
          "0%": {
            transform: "scale(1)",
            opacity: " .5",
          },

          "100%": {
            transform: "scale(1.5)",
            opacity: "1",
          },
        },
        startShip: {
          "0%": {
            top: "87%",
            transform: 'translateX(0) rotate(0)'
          },
          "10%, 30%, 50%, 70%, 90%": {
            transform: 'translateX(-5px) rotate(-5deg)',
            top: '0%'
          },
          "20%, 40%, 60%, 80%":{
            top: "50%",
            transform: 'translateX(5px) rotate(5deg)'
          },
          '100%': {
            transform: 'translateX(0) rotate(0)'
          }
        },
        appear :{
          '0%':{
            transform: 'scale(0)'
          },
          '100%':{
            transform: 'scale(1)'
          }
        }
      },
    },
    screens: {
      lg: { max: "1070px" },

      midl: { max: "767px" },

      sl: { max: "540px" },

      sm: { max: "425px" },
    },
  },
  plugins: [],
};
