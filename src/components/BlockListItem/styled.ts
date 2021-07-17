import { styled, Box, Typography } from "@material-ui/core"

export const Block = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "auto 32px auto",
  gap: theme.spacing(0.5),
  borderBottom: "1px solid",
  borderBottomColor: theme.palette.divider,
  padding: theme.spacing(1, 0),
}))

export const Description = styled(Typography)(({ theme }) => ({
  gridColumn: "1 / -1",
  overflow: "hidden",
  textOverflow: "ellipsis",
}))
