import React from "react"
import { Box, Typography, styled } from "@material-ui/core"

import { MiniView } from "components"
import { Block, Description } from "./styled"

interface BlockListItemProps {
  number?: string
  status?: string
  text?: string
  createDate?: string
  completionDate?: string
  price?: number
}

export const BlockListItem: React.FC<BlockListItemProps> = ({
  number,
  createDate,
  completionDate,
  price,
  text,
}) => (
  <Block>
    <Box display="flex">
      <Typography color="primary" mr="auto">
        № {number}
      </Typography>
    </Box>
    <Description variant="body2">{text}</Description>
    <MiniView createDate={createDate} />
    <MiniView completionDate={completionDate} />
    <MiniView price={price} />
  </Block>
)
