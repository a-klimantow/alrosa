import React from "react"
import { Box, Typography, styled } from "@material-ui/core"

export const BlockListItem = () => (
  <Box
    display="grid"
    gridTemplateRows="auto 32px auto"
    gridTemplateColumns="repeat(3, 1fr)"
    borderBottom="1px solid"
    borderColor="divider"
    py={1}
  >
    <Box display="flex">
      <Typography color="primary" mr="auto">
        title
      </Typography>
      <Status />
    </Box>
    <Typography
      gridColumn="1 / -1"
      variant="body2"
      overflow="hidden"
      textOverflow="ellipsis"
    >
      textfasdfasssssssssssssssss asdf asdf asdf asdf asdf asdf asdf asdf asdf
      asdf asdf asdf asdf asdf asdf asdf asffasdfasdfasdf asdf asdf
      asdfasdfasdasdffasd fasdf asdf
    </Typography>
    <ChtoTo title="Дата создания" date={new Date()} />
    <ChtoTo title="Срок исполнения" date={new Date()} />
    <ChtoTo title="Стоимость" total={1000} />
  </Box>
)

type ChtoToType = {
  title: string
  date?: Date
  total?: number
}

const ChtoTo: React.FC<ChtoToType> = ({ title, date, total }) => (
  <Box display="flex" flexDirection="column" gap={0.5}>
    <Typography variant="caption">{title}</Typography>
    <Typography variant="body2" fontWeight={total ? 700 : 400}>
      {total && money.format(total)}
      {date && new Date(date).toLocaleDateString()}
    </Typography>
  </Box>
)

const Status = styled(Box)({})

const money = new Intl.NumberFormat("ru-Ru", {
  style: "currency",
  currency: "RUB",
})
