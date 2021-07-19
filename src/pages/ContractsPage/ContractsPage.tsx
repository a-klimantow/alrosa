import { FC } from "react"
import { observer } from "mobx-react-lite"
import { Box, Typography } from "@material-ui/core"

import {
  PageLayout,
  DataList,
  DataListItem,
  SortMenu,
  useSortMenu,
  Icon,
} from "components"
import { useContracts } from "hooks"

// разобрать ====================
import {
  BlockHeader,
  BlockList,
  BlockItemNumber,
  BlockItemText,
} from "pages/HomePage/components"

// =================

export const ContractsPage = observer(() => {
  const contract = useContracts()
  const sort = useSortMenu()
  return (
    <Page>
      <BlockHeader name="Договора" total={10} big colorTotal="grey.600">
        <SortMenu {...sort} />
      </BlockHeader>
      <BlockList>
        {contract.items.map((c) => (
          <BlockItem key={c.id}>
            <BlockItemNumber number={c.number} big />
            <BlockItemText text={c.description} big />
            <BlockItemFile />
          </BlockItem>
        ))}
      </BlockList>
    </Page>
  )
})

const Page: FC = (props) => (
  <Box
    sx={{
      p: 2,
    }}
    {...props}
  />
)

const BlockItem: FC = (props) => (
  <Box
    sx={{
      display: "grid",
    }}
    {...props}
  />
)

const BlockItemFile = () => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: 2,
    }}
  >
    <Icon type="pdf" />
    <Typography variant="body2" color="primary" >
      fasf
    </Typography>
    
  </Box>
)
