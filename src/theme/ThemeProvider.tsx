import React from "react"
import {
  ThemeProvider as Provider,
  createTheme,
  CssBaseline,
  ThemeOptions,
  Theme,
} from "@material-ui/core"

declare module "@material-ui/styles" {
  interface DefaultTheme extends Theme {}
}

const palette: ThemeOptions["palette"] = {
  text: {
    primary: "#31434E",
  },
  primary: {
    main: "#0078FF",
  },
  info: {
    main: "#0078FF",
    light: "#EBF2FF",
  },
  warning: {
    main: "#B88217",
    light: "#FFEFD1",
  },
  success: {
    main: "#00A510",
    light: "#ECF7ED",
  },
  background: {
    default: "#F7F8FC",
  },
}

const typography: ThemeOptions["typography"] = {
  fontFamily: "'Inter', sans-serif",
  fontWeightBold: 600,
  h2: {
    fontSize: 32,
    fontWeight: 600,
  },

  h3: {
    fontSize: 16,
    lineHeight: "24px",
    fontWeight: 600,
  },

  h6: {
    fontSize: 16,
    lineHeight: "24px",
    fontWeight: 600,
  },

  body2: {
    fontSize: 13,
    lineHeight: "16px",
  },

  caption: {
    fontSize: 11,
    lineHeight: "16px",
    fontWeight: 500,
    color: "#9FA2B4",
  },
}

const components: ThemeOptions["components"] = {
  MuiCssBaseline: {
    styleOverrides: `
    :root {
      --primary-color: #0078FF;
      --grey-color: #DFE0EB;
      --white-color: #fff;
    }

    * {
      scrollbar-width: thin;
      scrollbar-color: var(--primary-color) var(--gray-color);
    }

    *::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }

    *::-webkit-scrollbar-track {
      background: var(--grey-color);
      border: 1px solid var(--white-color);
    }

    *::-webkit-scrollbar-thumb {
      background-color: var(--primary-color);
      border-radius: 20px;
      border: 1px solid var(--white-color);
    }
    `,
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        background: "var(--white-color)",
        letterSpacing: "0.2em",
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        position: "absolute",
        bottom: -16,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      adornedEnd: {
        padding: 0,
      },
    },
    defaultProps: {
      size: "small",
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        overflow: "hidden",
      },
    },
    defaultProps: {
      variant: "outlined",
    },
  },
  MuiSelect: {
    styleOverrides: {
      select: {
        display: "flex",
        gap: 8,
        letterSpacing: "0.05em",
        border: "1px solid transparent",
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        display: "flex",
        gap: 8,
      },
    },
  },
  MuiTable: {
    defaultProps: {
      padding: "checkbox",
      stickyHeader: true,
    },
  },
  MuiTableCell: {
    styleOverrides: {
      head: {
        color: "#9FA2B4",
      },
      stickyHeader: {
        background: "#fff",
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        textDecoration: "none",
      },
    },
  },
}

export const ThemeProvider: React.FC = ({ children }) => (
  <Provider
    theme={createTheme({
      palette,
      typography,
      components,
    })}
  >
    <CssBaseline />
    {children}
  </Provider>
)
