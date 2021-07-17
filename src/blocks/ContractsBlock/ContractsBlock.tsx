import { observer } from "mobx-react-lite"
import { BlockList, BlockListItem } from "components"

import { useConTractBlock } from "./useContractsBlock"

export const ContractsBlock = observer(() => {
  const { items, total } = useConTractBlock()

  return (
    <BlockList title="Договора" total={total}>
      {items.map(
        ({ id, number, description, createDate, completionDate, price }) => (
          <BlockListItem
            key={id}
            number={number}
            text={description}
            createDate={createDate}
            completionDate={completionDate}
            price={price}
          />
        )
      )}
    </BlockList>
  )
})
