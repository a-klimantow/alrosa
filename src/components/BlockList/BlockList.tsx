import React from "react"
import { Paper, Box, styled, Typography, IconButton } from "@material-ui/core"

import { Icon } from "components"

interface BlockListProps {
  title?: string
  total?: number
  onAddClick?: () => void
}

export const BlockList: React.FC<BlockListProps> = ({
  children,
  title,
  total,
  onAddClick,
}) => (
  <Paper component={Box} display="grid" gridTemplateRows="auto auto 1fr">
    {/* header */}
    <Box px={2} display="flex" alignItems="center" gap={1} minHeight={56}>
      <Typography fontWeight={700}>{title}</Typography>
      <Typography color="primary" mr="auto">
        {total}
      </Typography>
      {onAddClick ? (
        <IconButton color="primary" onClick={onAddClick}>
          <Icon type="plus" />
        </IconButton>
      ) : null}
    </Box>
    <Divider />
    {/* content */}
    <Box overflow="auto" px={1}>
      {children}
    </Box>
  </Paper>
)

const Divider = styled(Box)({
  height: 6,
  background:
    "linear-gradient(180deg, #DFE0EB 0%, rgba(223, 224, 235, 0) 100%)",
  opacity: 0.4,
})
