import React from "react"
import {
  Paper,
  TableContainer,
  Table as MuiTable,
  TableProps as MuiTableProps,
  TableBody,
  TableHead,
  TableRow,
  Hidden,
  styled,
} from "@material-ui/core"

interface TableProps extends MuiTableProps {
  toolbar?: React.ReactNode
  header?: React.ReactNode
  body?: React.ReactNode
}

export const Table: React.FC<TableProps> = ({
  toolbar,
  header,
  body,
  ...props
}) => (
  <Hidden mdDown>
    <TableStyled>
      {toolbar}
      <TableContainer style={{ maxHeight: "100%" }}>
        <MuiTable {...props}>
          <TableHead>
            <TableRow>{header}</TableRow>
          </TableHead>
          <TableBody>{body}</TableBody>
        </MuiTable>
      </TableContainer>
    </TableStyled>
  </Hidden>
)

const TableStyled = styled(Paper)({
  gridColumn: "1 / -1",
})
