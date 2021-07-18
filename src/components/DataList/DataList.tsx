import { List, styled } from "@material-ui/core"

export const DataList = styled(List)(({ theme }) => ({
  overflow: "auto",
  display: "grid",

  "&[data-big]": {
    gap: theme.spacing(2),
  },
}))
