import { styled, Box, Typography } from "@material-ui/core"

export const Block = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateAreas: `
    "H H H"
    "D D D"
    ". . ."
  `,
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "24px 32px auto",
  gap: theme.spacing(0.5),
  borderBottom: "1px solid",
  borderBottomColor: theme.palette.divider,
  padding: theme.spacing(1, 0),
}))

export const Header = styled(Box)({
  gridArea: "H",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
})

export const Description = styled(Typography)(({ theme }) => ({
  gridArea: "D",
  overflow: "hidden",
  textOverflow: "ellipsis",
}))
