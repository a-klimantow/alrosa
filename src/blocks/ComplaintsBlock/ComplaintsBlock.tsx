import { observer } from "mobx-react-lite"
import { BlockList, BlockListItem } from "components"

import { useComplaintsBlock } from "./useComplaintsBlock"

export const ComplaintsBlock = observer(() => {
  const { items, total } = useComplaintsBlock()

  return (
    <BlockList title="Жалобы" total={total} onAddClick={() => null}>
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
