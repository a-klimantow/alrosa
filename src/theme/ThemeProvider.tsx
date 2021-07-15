import React from "react"
import {
  ThemeProvider as Provider,
  createTheme,
  CssBaseline,
} from "@material-ui/core"

export const ThemeProvider: React.FC = ({ children }) => (
  <Provider
    theme={createTheme({
      palette: {
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
              letterSpacing: "0.5em",
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            adornedEnd: { padding: 0 },
          },
          defaultProps: {
            size: "small",
          },
        },
      },
    })}
  >
    <CssBaseline />
    {children}
  </Provider>
)
