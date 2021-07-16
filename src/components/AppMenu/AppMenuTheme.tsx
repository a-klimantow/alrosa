import React from "react"
import { ThemeProvider, createTheme, useTheme } from "@material-ui/core"

export const AppMenuTheme: React.FC = ({ children }) => {
  const theme = useTheme()
  return (
    <ThemeProvider
      theme={createTheme({
        components: {
          // контейнер
          MuiPaper: {
            styleOverrides: {
              root: {
                gridArea: "M",
                display: "grid",
                gridTemplateRows: "64px 1fr",
              },
            },
          },
          // список
          MuiList: {
            styleOverrides: {
              root: {
                display: "flex",
                flex: 1,
                flexDirection: "column",

                "& > li:nth-last-child(2)": {
                  marginTop: "auto",
                },
              },
            },
          },
          // элемент списка
          MuiListItem: {
            styleOverrides: {
              root: {
                display: "flex",
                placeContent: "center",
                color: theme.palette.action.active,

                "&.active": {
                  color: theme.palette.primary.main,
                },
              },
            },
          },

          // подсказка
          MuiTooltip: {
            styleOverrides: {
              tooltip: {
                background: theme.palette.background.paper,
                color: theme.palette.primary.main,
                boxShadow: theme.shadows["1"],
                "&:first-letter": {
                  textTransform: "uppercase",
                },
              },
            },
            defaultProps: {
              placement: "right",
            },
          },
        },
      })}
    >
      {children}
    </ThemeProvider>
  )
}
