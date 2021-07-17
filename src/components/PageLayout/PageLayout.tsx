import { styled, Box } from "@material-ui/core"

export const PageLayout = styled(Box)(({ theme }) => ({
  display: "grid",
  gridGap: theme.spacing(2),
  padding: theme.spacing(2),

  "&[data-home]": {
    maxHeight: "calc(100vh - 64px)",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(2, 1fr) ",
  },
}))
