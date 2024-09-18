const ROOT_EM = 16;

const preset = {
  theme: {
    fontFamily: {
      whitney: ["WhitneySsm", "sans-serif"],
    },
    fontSize: mapListToObject([
      60, 48, 40, 36, 32, 28, 24, 20, 18, 16, 15, 14, 13, 12, 11, 10,
    ]),
    lineHeight: mapListToObject([
      68, 54, 46, 40, 36, 32, 30, 28, 26, 24, 22, 20, 18, 16, 14,
    ]),
    letterSpacing: mapListToObject([-3, -2, -1, -0.5, 0, 1]),
    fontWeight: {
      200: "200",
      400: "400",
      600: "600",
      800: "800",
    },
    colors: {
      // Photon Core Colors
      current: "currentColor",
      white: "#FFF",
      black: "#000",
      gray: {
        100: "#F5F5F4",
        200: "#E6E6E6",
        300: "#DFDEDD",
        400: "#C3C1C0",
        500: "#9D9C9B",
        600: "#7B7979",
        700: "#595A5B",
        800: "#3B3C3C",
        900: "#262626",
        950: "#141414",
      },
      oxide: {
        100: "#D3F5EC",
        200: "#A6EBD9",
        300: "#7AE2C6",
        400: "#4DD8B3",
        500: "#21CEA0",
        600: "#16B087",
        700: "#0E7358",
        800: "#094636",
        900: "#042318",
        950: "#02120E",
        DEFAULT: "#03A67B",
        bright: "#21CEA0",
      },
      copper: "#C48669",
      cool: {
        "01": "#234749",
        "02": "#00A4BF",
        "03": "#8CD3C7",
      },
      warm: {
        "01": "#F45A3B",
        "02": "#C6A855",
        "03": "#F29F3D",
      },
      info: {
        100: "#F0FFFE",
        200: "#90E5F6",
        300: "#54CBE3",
        400: "#0BC7E6",
        500: "#00A4BF",
        600: "#01859B",
        700: "#095B6D",
        800: "#0f3C4D",
        900: "#0F3C4D",
        950: "#050F15",
      },
      success: {
        100: "#F7FEE7",
        200: "#D1FCAF",
        300: "#D6FB94",
        400: "#BEF264",
        500: "#A3E635",
        600: "#6DAD05",
        700: "#4D7C0F",
        800: "#365314",
        900: "#365314",
        950: "#0f1B01",
      },
      warning: {
        100: "#FFF4EB",
        200: "#FFdBB4",
        300: "#FFBF7A",
        400: "#FBAD51",
        500: "#F29F3D",
        600: "#D47319",
        700: "#B45309",
        800: "#763401",
        900: "#7D4715",
        950: "#250f00",
      },
      danger: {
        100: "#FEEEEC",
        200: "#FFCCC3",
        300: "#FCB2A5",
        400: "#FF765B",
        500: "#F45A3B",
        600: "#B9361C",
        700: "#9E240c",
        800: "#711601",
        900: "#450c00",
        950: "#2A0801",
      },
    },
    borderRadius: mapListToObject(["full", 16, 14, 12, 10, 8, 2], (size) =>
      size === "full" ? "9999px" : defaultFormat(size),
    ),
  },
};

export default preset;

function mapListToObject(list, format = defaultFormat) {
  return list.reduce(
    (acc, size) => ({
      ...acc,
      [size]: format(size),
    }),
    {},
  );
}

function defaultFormat(size) {
  return `${Number(size) / ROOT_EM}rem`;
}
