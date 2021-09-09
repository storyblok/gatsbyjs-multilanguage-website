
module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    fontFamily: {
      body: ["Karla", "sans-serif"],
      'karla': 'Karla, sans-serif',
       // karla: ['Karla'],
      // 'karla': '400,400i,700,700i'
      // karla: ['Karla'],
      // 'Karla': 'sans-serif',
      // 'sans': 'sans-serif',
      // 'serif': 'Merriweather, Georgia, serif',
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
     },
    extend: {
      colors: {
        'primary': '#672E9B',
        "ash": "#24485C",
				"navy": "#18313E",
				"navy_100": "#40464A",
        "navy_300": "#24485C",
        "navy_400": "#18313E",
				"charcoal": "#387B99",
				"gold": "#FBF5EF",
				"gold_100": "#E0B581",
				"gold_300": "#E0B581",
				"neutral_400": "#767F84",
				"neutral_500": "#5B5B5B",
				"white_100": "#FAFAFA",
				"white_200": "#F2F2F3",
				"white_200": "#F2F2F3",	
				"white_300": "#BCC0C3",
        "cream_100": "#FBFAF9",
				"gray": "#E5E5E5",
				"neutral_600": "#111213",
        "sky_100": "#F4F9FA",
        "sky_200": "#D4E6ED",
        "sky_500": "#66A6BD",
        gray: {
          300: '#f0f0f0',
        }
      }
    },
    zIndex: {
      '0': 0,
     '10': 10,
     '20': 20,
     '30': 30,
     '40': 40,
     '50': 50,
     '25': 25,
     '50': 50,
     '75': 75,
     '100': 100,
     '1000': 1000,
      'auto': 'auto',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
