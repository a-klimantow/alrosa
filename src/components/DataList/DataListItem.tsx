import React from "react"
import { styled, Box, Typography } from "@material-ui/core"

import { Status, DataInfoList, DataFiles } from "components"

interface DataListItemProps {
  number?: string
  status?: string
  text?: string
  createDate?: string
  completionDate?: string
  price?: number
  size?: "big" | "small"
}

export const DataListItem = React.memo<DataListItemProps>(
  ({ number, status, text, size = "big", ...info }) => {
    return (
      <DataListItemStyled data-size={size}>
        <Box display="flex" justifyContent="space-between" gridArea="number">
          <Typography variant="body1" color="primary">
            № {number}
          </Typography>
          <Status status={status} />
        </Box>
        <Typography variant="body2" gridArea="text" data-text>
          {text}
        </Typography>
        <DataInfoList size={size} area="info" {...info} />
        {/* <DataFiles /> */}
      </DataListItemStyled>
    )
  }
)

const DataListItemStyled = styled(Box)(({ theme }) => ({
  "--pad": theme.spacing(3),
  "--brd": `1px solid ${theme.palette.divider}`,
  "--gap": theme.spacing(2),
  "--area": `
        "number info" 
        "text info"
        "file info"
        `,
  display: "grid",
  background: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  border: "var(--brd)",
  gap: "var(--gap)",
  padding: "var(--pad)",
  gridTemplateColumns: "1fr auto",
  gridTemplateAreas: "var(--area)",

  "&[data-size=big]": {
    "& [data-text]": {
      display: "inline-grid",
      "&::before": {
        content: "'Объект поставки'",
        color: theme.palette.grey["500"],
        fontSize: 12,
        fontWeight: 500,
        lineHeight: "1em",
      },
    },

    [`${theme.breakpoints.down("md")}`]: {
      "--pad": theme.spacing(1),
      "--gap": theme.spacing(1),
      gridTemplateColumns: "1fr",
      gridTemplateAreas: `
      "number" 
      "text"
      "info" 
      `,

      "& [data-text]::before": {
        content: "''",
      },
    },
  },

  "&[data-size=small]": {
    "--pad": theme.spacing(2),
    "--gap": theme.spacing(1),

    border: 0,
    borderBottom: "var(--brd)",
    margin: "var(--gap)",
    padding: 0,
    paddingBottom: "var(--pad)",
    gridTemplateAreas: `
    "number" 
    "text"
    "info" 
    `,
  },
}))
