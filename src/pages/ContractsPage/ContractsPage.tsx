import { FC } from "react"
import { observer } from "mobx-react-lite"
import { Box } from "@material-ui/core"

import { PageLayout, DataList, DataListItem } from "components"
import { useContracts } from "hooks"

export const ContractsPage = observer(() => {
  const contract = useContracts()

  return <Page>test</Page>
})

const Page: FC = (props) => (
  <Box
    sx={{
      p: 2,
    }}
    {...props}
  />
)
