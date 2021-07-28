import { observer } from "mobx-react-lite"

import { BillsToolbar, Table, Row, Wrapp } from "./components"
import { useBills } from "./useBils"

export const BillsTable = observer(() => {
  const bills = useBills()

  return (
    <Wrapp>
      <BillsToolbar total={bills.data.total} sort={bills.sort} />
      <Table>
        {bills.sortedItems.map((b) => (
          <Row key={b.id} {...b} />
        ))}
      </Table>
    </Wrapp>
  )
})
