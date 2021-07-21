import { FC } from "react"
import { observer } from "mobx-react-lite"
import {
  Box,
  Typography,
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Paper,
} from "@material-ui/core"
import { BillType } from "types"

import { SortMenu, SortMenuProps, Checkbox, Icon } from "components"
import { money } from "utils"

export const Wrapp: FC = ({ children }) => (
  <Paper
    sx={{
      gridColumn: "1 / -1",
      display: "grid",
      alignContent: "start",
    }}
  >
    {children}
  </Paper>
)

interface BillToolBarProps {
  total: number | null
  sort: SortMenuProps
}

export const BillsToolbar = observer<BillToolBarProps>(({ total, sort }) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "auto 1fr auto",
      alignItems: "center",

      gap: 1,
      p: 2,
      borderBottom: 1,
      borderColor: "divider",
    }}
  >
    <Typography variant="h3">Счета на оплату</Typography>
    <Typography component="span" sx={{ color: "grey.500" }}>
      {total}
    </Typography>
    <SortMenu {...sort} />
  </Box>
))

export const Table = observer(({ children }) => (
  <TableContainer>
    <MuiTable>
      <TableHead>
        <TableRow>
          <TableCell>
            <Checkbox />
          </TableCell>
          {["Дата", "Номер, №", "Наименование", "Сумма, ₽", "Оплата"].map(
            (h) => (
              <TableCell
                key={h}
                align={h.startsWith("Опл") ? "center" : "inherit"}
              >
                {h}
              </TableCell>
            )
          )}
        </TableRow>
      </TableHead>
      <TableBody>{children}</TableBody>
    </MuiTable>
  </TableContainer>
))

interface RowProps extends Partial<BillType> {}

export const Row = observer<RowProps>(
  ({
    createDate = "a",
    number = "afa",
    name = "afs",
    price = "faf",
    favorite = true,
    paid = false,
  }) => (
    <TableRow>
      <TableCell>
        <Checkbox iconStar defaultChecked={favorite} />
      </TableCell>
      <TableCell>{createDate}</TableCell>
      <TableCell sx={{ color: "primary.main", fontWeight: 600 }}>
        {number}
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell sx={{ fontWeight: 600 }}>
        {money.format(Number(price))}
      </TableCell>
      <TableCell align="center">{paid ? <OkIcon /> : <PayButton />}</TableCell>
    </TableRow>
  )
)

const OkIcon = () => (
  <Icon type="ok" viewBox="0 0 16 16" color="success" fontSize="small" />
)

const PayButton = observer<{ click?(): void }>(({ click }) => (
  <Button
    onClick={click}
    variant="outlined"
    size="small"
    sx={{
      color: "grey.500",
      borderColor: "unset",
      "&:hover, &:focus": {
        color: "#fff",
        background: "#0078FF",
        borderColor: "#0078FF",
      },
    }}
  >
    Оплатить
  </Button>
))
