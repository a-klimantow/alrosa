import React from "react"
import {
  ThemeProvider as Provider,
  createTheme,
  CssBaseline,
} from "@material-ui/core"

export const ThemeProvider: React.FC = ({ children }) => (
  <Provider
    theme={createTheme({
      typography: {
        caption: {
          fontSize: 11,
          lineHeight: "16px",
          fontWeight: 500,
          color: "#9FA2B4",
        },
        body2: {
          fontSize: 13,
          lineHeight: "16px",
        },
      },
      palette: {
        text: {
          primary: "#31434E",
        },
        background: {
          default: "#F7F8FC",
        },
        primary: {
          main: "#0078FF",
        },
      },
      components: {
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
              background: "#fff",
              letterSpacing: "0.2em",
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
      },
    })}
  >
    <CssBaseline />
    {children}
  </Provider>
)
