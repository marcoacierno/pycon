export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "aktiv-grotesk-extended, sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  sizes: {
    largeContainer: 1320,
    container: 1200,
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#07c",
    secondary: "#30c",
    muted: "#f6f6f6",
    green: "#219653",
    purple: "#FA00FF",
    yellow: "#F8B03D",
    orange: "#F17A5D",
    violet: "#9473B0",
    blue: "#79CDE0",
    cinderella: "#FCE8DE",
  },
  borders: {
    primary: "3px solid #000000",
  },
  forms: {
    input: {
      fontFamily: "body",
      bg: "blue",
      border: "primary",
      borderWidth: 4,
    },
    textarea: {
      fontFamily: "body",
      bg: "blue",
      border: "primary",
      borderWidth: 4,
    },
    select: {
      fontFamily: "body",
      bg: "blue",
      border: "primary",
      borderWidth: 4,
      option: {
        fontSize: 3,
        padding: 3,
        backgroundColor: "white",
      },
    },
  },
  buttons: {
    primary: {
      position: "relative",
      padding: [2, 3],

      fontSize: [0, 2],
      fontFamily: "body",
      fontWeight: "heading",

      color: "#000",
      borderWidth: ["3px", "4px"],
      borderStyle: "solid",
      borderColor: "#000",
      backgroundColor: "yellow",
    },
    white: {
      variant: "buttons.primary",
      background: "#fff",
    },
  },
  links: {
    heading: {
      color: "text",
    },
    header: {
      color: "white",
      fontSize: 5,
      textDecoration: "none",
      display: "block",
      "&:hover": {
        textDecoration: "underline",
        textDecorationSkip: "edges",
        textDecorationThickness: "2px",
        textUnderlineOffset: "0.2em",
      },
    },
    google: {
      border: "primary",
      display: "inline-flex",
      alignItems: "center",
      pr: 3,
      textDecoration: "none",
      color: "black",
      "&:hover": {
        backgroundColor: "muted",
      },
    },
    button: {
      position: "relative",
      px: 3,
      fontSize: 2,
      height: 50,
      lineHeight: "43px",
      display: "inline-block",
      height: 50,
      fontFamily: "body",
      fontWeight: "heading",
      color: "#000",
      textDecoration: "none",
      textTransform: "uppercase",
    },
  },
  badges: {
    tag: {
      color: "text",
      backgroundColor: "orange",
      border: "primary",
      fontSize: 2,
      cursor: "pointer",
      p: 2,
      my: 3,
      mr: 3,
    },
    selectedTag: {
      variant: "badges.tag",
      position: "relative",
      backgroundColor: "blue",
      mr: 4,
      "&::after": {
        content: "'⨉'",
        position: "absolute",
        borderRadius: "100%",
        width: 20,
        height: 20,
        fontSize: 1,
        display: "flex",
        justifyContent: "center",
        lineHeight: "18px",
        top: -12,
        right: -12,
        p: 0,
        cursor: "pointer",
        background: "orange",
        border: "primary",
      },
    },
    placeholderTag: {
      variant: "badges.tag",
      backgroundColor: "muted",
      cursor: "normal",
      opacity: 0.7,
    },
    remove: {
      my: 1,
      ml: -3,
      height: 20,
    },
  },
  text: {
    caps: {
      textTransform: "uppercase",
    },
    header: {
      variant: "text.caps",
      fontSize: 2,
      fontWeight: "bold",
      mt: 20,
      mb: 3,
    },
    prefooter: {
      fontWeight: "bold",
      color: "violet",
    },
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
    marquee: {
      variant: "text.caps",
      fontSize: 5,
      whiteSpace: "nowrap",
    },
    label: {
      textTransform: "uppercase",
      fontWeight: "bold",
      fontSize: 3,
      color: "orange",
      mb: 2,
    },
    labelDescription: {
      mb: 3,
      maxWidth: 850,
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      mb: "1em",
      fontSize: 5,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      mb: "1em",
      fontSize: 4,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      mb: "1em",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      mb: "1em",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      mb: "1em",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      mb: "1em",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      mb: "1em",
    },
    a: {
      color: "primary",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },
  zIndices: {
    header: "11",
  },
};
