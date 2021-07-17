import React from "react"
import { TableRow, TableCell, Typography, Box } from "@material-ui/core"

import { BillType } from "types"
import { money } from "utils"
import { Icon } from "components"

interface BillRowProps extends BillType {
  checked?: boolean
  onRowClick?: () => void
}

export const BillRow = React.memo<BillRowProps>(
  ({ createDate, number, name, price, checked, onRowClick }) => (
    <TableRow onClick={onRowClick}>
      <TableCell>
        <Box display="flex" justifyContent="center" alignItems="center">
          {checked ? (
            <Icon
              type="star_fill"
              color="error"
              viewBox="0 0 16 16"
              fontSize="small"
            />
          ) : (
            <Icon type="star" viewBox="0 0 16 16" fontSize="small" />
          )}
        </Box>
      </TableCell>
      <TableCell>{new Date(createDate).toLocaleDateString()}</TableCell>
      <TableCell>
        <Typography color="primary" fontWeight={600} fontSize="inherit">
          {number}
        </Typography>
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>
        <Typography fontSize="inherit" fontWeight={600}>
          {money.format(price)}
        </Typography>
      </TableCell>
      <TableCell>1</TableCell>
    </TableRow>
  )
)
