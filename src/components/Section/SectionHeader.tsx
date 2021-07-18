import React from "react"
import { styled } from "@material-ui/core"
import { Typography, IconButton } from "@material-ui/core/"
import { Icon } from "components"

interface SectionHeaderProps {
  name?: string
  total?: number
  onAddClick?: () => void
}

export const SectionHeader = React.memo<SectionHeaderProps>(
  ({ name, total, onAddClick }) => (
    <SectionHeaderStyled>
      <Typography variant="h3">{name}</Typography>
      <Typography component="span" variant="body1" color="primary">
        {total}
      </Typography>
      {onAddClick && (
        <IconButton color="primary" onClick={onAddClick}>
          <Icon type="plus" />
        </IconButton>
      )}
      {/* <div data-divider /> */}
    </SectionHeaderStyled>
  )
)

const SectionHeaderStyled = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "auto 1fr auto",
  alignItems: "center",
  gap: theme.spacing(1),
  padding: theme.spacing(0, 2),
  minHeight: theme.spacing(7),
}))
