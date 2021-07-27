import React from "react"
import { observer } from "mobx-react-lite"
import { TableCell, IconButton } from "@material-ui/core"
import { Table, Toolbar, Sort, BillRow, Icon } from "components"

import { useBidsBlock } from "./useBillsBlock"

const headers = ["Дата", "Номер, №", "Наименование", "Сумма, ₽", "Оплата"]

export const BillsBlock = observer(() => {
  const { sort, store } = useBidsBlock()

  const memoHeaders = React.useMemo(
    () => headers.map((h) => <TableCell key={h}>{h}</TableCell>),
    []
  )

  return (
    <Table
      toolbar={
        <Toolbar title="Счета на оплату" total={store.total}>

        </Toolbar>
      }
      header={
        <>
          <TableCell align="center" padding="checkbox">
            <IconButton onClick={store.changeChackedAll}>
              {store.isAllChecked ? (
                <Icon type="chbox_ok" fontSize="small" viewBox="0 0 16 16" />
              ) : (
                <Icon type="chbox" fontSize="small" viewBox="0 0 16 16" />
              )}
            </IconButton>
          </TableCell>
          {memoHeaders}
        </>
      }
      body={store.sortItems.map((bill) => (
        <BillRow
          key={bill.id}
          checked={Boolean(bill.checked)}
          id={bill.id}
          createDate={bill.createDate}
          number={bill.number}
          name={bill.name}
          price={bill.price}
          favorite={bill.favorite}
          paid={bill.paid}
          onRowClick={() => store.changeChacked(bill)}
        />
      ))}
    />
  )
})
