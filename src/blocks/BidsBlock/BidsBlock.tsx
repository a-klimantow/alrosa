import { observer } from "mobx-react-lite"
import {
  Divider,
  SectionWrap,
  SectionHeader,
  DataList,
  DataListItem,
} from "components"

import { useBids } from "hooks"

export const BidsBlock = observer(() => {
  const bids = useBids()

  return (
    <SectionWrap>
      <SectionHeader name="Заявки" total={bids.total} />
      <Divider />
      <DataList>
        {bids.items.map((item) => (
          <DataListItem
            key={item.id}
            size="small"
            number={item.number}
            text={item.description}
            createDate={item.createDate}
          />
        ))}
      </DataList>
    </SectionWrap>
  )
})
