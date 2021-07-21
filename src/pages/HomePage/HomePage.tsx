import { observer } from "mobx-react-lite"
import { Hidden } from "@material-ui/core"

import { BillsTable } from "components"
import { Keys, money } from "utils"
import {
  Page,
  Block,
  BlockHeader,
  Divider,
  BlockList,
  BlockItem,
  BlockChip,
  AddButton,
} from "./components"

import { useHomePage } from "./useHomePage"

export const HomePage = observer(() => {
  const { contract, bid, complaint } = useHomePage()
  return (
    <Page>
      <Block gridArea="A">
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
      <Block gridArea="B">
        <BlockHeader name="Заявки" total={bid.total}>
          <AddButton />
        </BlockHeader>
        <Divider />
        <BlockList>
          {bid.items.map((b) => (
            <BlockItem
              key={b.id}
              number={b.number}
              text={b.description}
              status={b.status}
            >
              <BlockChip data={[Keys.DateCreate, b.createDate]} />
            </BlockItem>
          ))}
        </BlockList>
      </Block>
      <Block gridArea="C">
        <BlockHeader name="Жалобы" total={complaint.total}>
          <AddButton />
        </BlockHeader>
        <Divider />
        <BlockList>
          {complaint.items.map((c) => (
            <BlockItem
              key={c.id}
              number={c.number}
              text={c.description}
              status={c.status}
            >
              <BlockChip data={[Keys.DateCreate, c.createDate]} />
            </BlockItem>
          ))}
        </BlockList>
      </Block>
      <Hidden mdDown>
        <BillsTable />
      </Hidden>
    </Page>
  )
})
