import { observer } from "mobx-react-lite"
import {
  Divider,
  SectionWrap,
  SectionHeader,
  DataList,
  DataListItem,
} from "components"

import { useConTractBlock } from "./useContractsBlock"

export const ContractsBlock = observer(() => {
  const contract = useConTractBlock()

  return (
    <SectionWrap>
      <SectionHeader name="Договора" total={contract.total} />
      <Divider />
      <DataList>
        {contract.items.map((item) => (
          <DataListItem
            key={item.id}
            size="small"
            number={item.number}
            text={item.description}
            createDate={item.createDate}
            completionDate={item.completionDate}
            price={item.price}
          />
        ))}
      </DataList>
    </SectionWrap>
  )
})
