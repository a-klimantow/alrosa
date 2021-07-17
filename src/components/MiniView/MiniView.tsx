import React from "react"
import { Box, Typography } from "@material-ui/core"

interface MiniViewProps {
  price?: number
  createDate?: string
  completionDate?: string
}

export const MiniView = React.memo<MiniViewProps>(
  ({ price, createDate, completionDate }) => (
    <Box display="flex" flexDirection="column" gap={0.5}>
      <Typography variant="caption">
        {createDate && "Дата создания"}
        {completionDate && "Срок исполнения"}
        {price && "Стоимость"}
      </Typography>
      <Typography variant="body2" fontWeight={price ? 700 : 400}>
        {createDate && new Date(createDate).toLocaleDateString()}
        {completionDate && new Date(completionDate).toLocaleDateString()}
        {price && money.format(price)}
      </Typography>
    </Box>
  )
)

const money = new Intl.NumberFormat("ru-Ru", {
  style: "currency",
  currency: "RUB",
})
