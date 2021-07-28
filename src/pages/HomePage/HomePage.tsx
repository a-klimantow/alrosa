import { observer } from "mobx-react-lite"
import { Hidden } from "@material-ui/core"

import { BillsTable, Bids, Complaints } from "components"
import { Keys, money } from "utils"
import {
  Page,
  Block,
  BlockHeader,
  Divider,
  BlockList,
  BlockItem,
  BlockChip,
} from "./components"

import { useHomePage } from "./useHomePage"

export const HomePage = observer(() => {
  const { contract } = useHomePage()

  return (
    <Page>
      <Block>
        <BlockHeader name="Договора" total={contract.total} />
        <Divider />
        <BlockList>
          {contract.items.map((c) => (
            <BlockItem key={c.id} number={c.number} text={c.description}>
              <BlockChip data={[Keys.DateCreate, c.createDate]} />
              <BlockChip data={[Keys.DateComplite, c.completionDate]} />
              <BlockChip data={[Keys.Price, money.format(c.price)]} bold />
            </BlockItem>
          ))}
        </BlockList>
      </Block>
      <Bids />
      <Complaints />

      <Hidden mdDown>
        <BillsTable />
      </Hidden>
    </Page>
  )
})
