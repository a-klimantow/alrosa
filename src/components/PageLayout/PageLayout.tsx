import { styled, Box } from "@material-ui/core"

export const PageLayout = styled(Box)(({ theme }) => ({
  "&[data-layout]": {
    display: "grid",
    gridGap: theme.spacing(2),
    padding: theme.spacing(2),
    maxHeight: "calc(100vh - 64px)",
    gridTemplateRows: "1fr",
  },

  "&[data-layout=home]": {
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(2, 1fr) ",
  },

  "&[data-layout=contracts]": {
    gridTemplateRows: "auto 1fr",
  },

  [`${theme.breakpoints.down("md")}`]: {
    "&[data-layout]": {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "auto",
      maxHeight: "unset",
      padding: theme.spacing(1),
    },
  },
}))
