import React from "react"
import { Box, Typography, styled } from "@material-ui/core"

interface ToolbarProps {
  title?: string
  total?: number
  onSortChange?: () => void
  children: React.ReactNode
}

export const Toolbar = React.memo<ToolbarProps>(
  ({ title = "title", total = 10, children }) => (
    <ToolbarStyled>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="caption" fontSize={16} lineHeight="24px" mr="auto">
        {total}
      </Typography>
      {children}
    </ToolbarStyled>
  )
)

const ToolbarStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  minHeight: 56,
  padding: theme.spacing(0, 2),
  borderBottom: `1px solid ${theme.palette.divider}`,
}))
