import { styled } from "@material-ui/core"

export const AppLayout = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  display: "grid",
  gridTemplateRows: "auto 1fr",
  gridTemplateColumns: "auto 1fr",
  gridTemplateAreas: `
    "M H"
    "M ."
  `,

  [`${theme.breakpoints.down("md")}`]: {
    gridTemplateAreas: `
    "H"
    "."
    "M"
  `,
    gridTemplateColumns: "auto",
    gridTemplateRows: `${theme.spacing(8)} 1fr ${theme.spacing(8)}`,
  },
}))
