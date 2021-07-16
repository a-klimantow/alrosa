import { styled, Box } from "@material-ui/core"

export const PageLayout = styled(Box)(({ theme }) => ({
  display: "grid",
  gridGap: theme.spacing(2),
  padding: theme.spacing(2),

  "&[data-home]": {
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "calc((100vh - 64px - 16px - 8px) / 2) ",
  },
}))
