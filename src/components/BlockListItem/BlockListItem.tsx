import React from "react"
import { Typography } from "@material-ui/core"

import { MiniView, Status } from "components"
import { Block, Header, Description } from "./styled"

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
  status,
}) => (
  <Block>
    <Header>
      <Typography color="primary">№ {number}</Typography>
      <Status data-status={status || null} />
    </Header>
    <Description variant="body2">{text}</Description>
    <MiniView createDate={createDate} />
    <MiniView completionDate={completionDate} />
    <MiniView price={price} />
  </Block>
)
