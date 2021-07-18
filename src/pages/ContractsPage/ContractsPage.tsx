import { observer } from "mobx-react-lite"

import { PageLayout, DataList, DataListItem } from "components"
import { useContracts } from "hooks"

export const ContractsPage = observer(() => {
  const contract = useContracts()

  return (
    <PageLayout data-layout="contracts">
      <DataList data-big>
        {contract.items.map((item) => (
          <DataListItem
            size="big"
            key={item.id}
            number={item.number}
            text={item.description}
            createDate={item.createDate}
            completionDate={item.completionDate}
            price={item.price}
          />
        ))}
      </DataList>
    </PageLayout>
  )
})
