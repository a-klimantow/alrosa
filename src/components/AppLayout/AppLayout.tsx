import { styled } from "@material-ui/core"

export const AppLayout = styled("div")({
  minHeight: "100vh",
  display: "grid",
  gridTemplateRows: "auto 1fr",
  gridTemplateColumns: "auto 1fr",
  gridTemplateAreas: `
    "M H"
    "M ."
  `,
})
