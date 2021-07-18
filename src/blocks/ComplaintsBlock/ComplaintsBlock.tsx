import { observer } from "mobx-react-lite"
import {
  Divider,
  SectionWrap,
  SectionHeader,
  DataList,
  DataListItem,
} from "components"

import { useComplaints } from "hooks"

export const ComplaintsBlock = observer(() => {
  const complaints = useComplaints()

  return (
    <SectionWrap>
      <SectionHeader name="Жалобы" total={complaints.total} />
      <Divider />
      <DataList>
        {complaints.items.map((item) => (
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
