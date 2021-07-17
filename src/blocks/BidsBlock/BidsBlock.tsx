import { observer } from "mobx-react-lite"
import { BlockList, BlockListItem } from "components"

import { useBidsBlock } from "./useBidsBlock"

export const BidsBlock = observer(() => {
  const { items, total } = useBidsBlock()

  return (
    <BlockList title="Заявки" total={total} onAddClick={() => null}>
      {items.map(({ id, number, description, createDate, status }) => (
        <BlockListItem
          key={id}
          number={number}
          text={description}
          createDate={createDate}
          status={status}
        />
      ))}
    </BlockList>
  )
})
