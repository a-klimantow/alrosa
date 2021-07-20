import { FC } from "react"
import { observer } from "mobx-react-lite"
import { Box, Typography } from "@material-ui/core"
import { ContractType } from "types"

import { SortMenu, useSortMenu, Icon } from "components"
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
            {c.files.map(({ id, ...rest }) => (
              <BlockItemFile key={id} {...rest} />
            ))}
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

type BlockItemFileProps = Omit<ContractType["files"][number], "id">

const BlockItemFile: FC<BlockItemFileProps> = ({ name, size }) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      columnGap: 2,
      "& svg": {
        gridRow: "span 2",
      },
    }}
  >
    <Icon type="pdf" />
    <Typography
      variant="body2"
      color="primary"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      {name}
      <Icon type="upload" />
    </Typography>
    <Typography
      component="span"
      sx={{
        fontSize: 12,
        color: "grey.500",
      }}
    >
      {size}
    </Typography>
  </Box>
)
