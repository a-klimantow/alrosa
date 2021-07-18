import React from "react"
import { Box, Typography, styled } from "@material-ui/core"

import { money } from "utils"

interface DataInfoListProps {
  createDate?: string
  completionDate?: string
  price?: number
  size?: "big" | "small"
  area?: string
}

export const DataInfoList = React.memo<DataInfoListProps>(
  ({ size = "small", area = "", ...info }) => {
    const list = useInfoList(info) as [string, string][]

    return (
      <DataInfoListStyled gridArea={area} data-size={size}>
        {list.map(([t, v]) => (
          <DataInfoStyled key={t} data-info={t} variant="body2">
            {v}
          </DataInfoStyled>
        ))}
      </DataInfoListStyled>
    )
  }
)

const DataInfoListStyled = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  gridTemplateAreas: `"price price" ". ."`,
  position: "relative",
  paddingLeft: theme.spacing(3),
  placeItems: "center start",

  "&::before": {
    content: `""`,
    position: "absolute",
    top: -12,
    bottom: -12,
    left: -8,
    borderRight: `1px solid ${theme.palette.divider}`,
  },

  "&[data-size=small]": {
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateAreas: `". . price"`,
    placeItems: "center start",
  },

  [`${theme.breakpoints.down("md")}`]: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "1fr",
    gridTemplateAreas: `". . price"`,
    "&::before": {
      display: "none",
    },
  },
}))

const useInfoList = (param: DataInfoListProps) =>
  React.useMemo(
    () =>
      [
        ["Дата создания", param.createDate],
        ["Срок исполнения", param.completionDate],
        ["Стоимость", param.price && money.format(param.price)],
      ].filter(([, v]) => Boolean(v)),
    [param]
  )

const DataInfoStyled = styled(Typography)(({ theme }) => ({
  display: "inline-grid",
  gap: theme.spacing(0.5),

  "&[data-info]::before": {
    fontSize: 11,
    fontWeight: 500,
    lineHeight: "1em",
    color: theme.palette.grey["500"],
  },

  "&[data-info^=Дата]::before": {
    content: `"Дата создания"`,
  },

  "&[data-info^=Срок]::before": {
    content: `"Срок исполнения"`,
  },

  "&[data-info^=Сто]": {
    fontWeight: 600,
    gridArea: "price",

    "&::before": {
      content: `"Стоимость"`,
    },
  },
}))
