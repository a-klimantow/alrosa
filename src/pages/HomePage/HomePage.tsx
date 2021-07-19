import { observer } from "mobx-react-lite"
import { Hidden } from "@material-ui/core"

import { SortMenu, useSortMenu, BillRow } from "components"
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
  const sort = useSortMenu()
  const { contract, bid, complaint, bill } = useHomePage()
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
        <Block gridArea="D">
          <BlockHeader name="Счета на оплату" total={bill.total} colorTotal="">
            <SortMenu {...sort} />
          </BlockHeader>
          <Divider />
          {bill.items.map((b) => (
            <BillRow
              key={b.id}
              checked={true}
              id={b.id}
              createDate={b.createDate}
              number={b.number}
              name={b.name}
              price={b.price}
              favorite={b.favorite}
              paid={b.paid}
              onRowClick={() => null}
            />
          ))}
        </Block>
      </Hidden>
    </Page>
  )
})
