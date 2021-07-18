import React from "react"
import { styled } from "@material-ui/core"
import { Typography, IconButton } from "@material-ui/core/"
import { Icon } from "components"

interface SectionProps {
  header?: SectionHeaderProps
}

export const Section = React.memo<SectionProps>(({ header }) => (
  <SectionStyled>
    {header ? (
      <>
        <SectionHeader {...header} />
        <Divider />
      </>
    ) : null}
    <div></div>
  </SectionStyled>
))

const SectionStyled = styled("section")(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  background: theme.palette.background.paper,
}))

interface SectionHeaderProps {
  name?: string
  total?: number
  onAddClick?: () => void
}

const SectionHeader = React.memo<SectionHeaderProps>(
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

export const SectionHeaderStyled = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "auto 1fr auto",
  alignItems: "center",
  gap: theme.spacing(1),
  padding: theme.spacing(0, 2),
  minHeight: theme.spacing(7),
}))

const Divider = styled("div")({
  height: 6,
  background:
    "linear-gradient(180deg, #DFE0EB 0%, rgba(223, 224, 235, 0) 100%)",
  opacity: 0.4,
})
