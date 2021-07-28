import { observer } from "mobx-react-lite"
import { Typography, Box } from "@material-ui/core"
import { BidType, ContractType } from "types"
import { Status } from "components"
import { money } from "utils"

type CardProps = BidType & ContractType

export const Card = observer<Partial<CardProps>>(
  ({ number, status, description, price, createDate, completionDate }) => {
    return (
      <Box
        sx={{
          m: 1,
          py: 1,
          borderBottom: 1,
          borderColor: "divider",
          display: "grid",
          gap: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography color="primary" gridArea="A">
            № {number}
          </Typography>
          <Status status={status} />
        </Box>
        <Typography variant="body2">{description}</Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {createDate && <InfoChip data={["Дата создания", createDate]} />}
          {completionDate && (
            <InfoChip data={["Дата исполнения", completionDate]} />
          )}
          {price && <InfoChip data={["Стоимость", money.format(price)]} />}
        </Box>
      </Box>
    )
  }
)

export const InfoChip = observer<{ data: string[]; bold?: boolean }>(
  ({ data, bold }) => (
    <Box sx={{ whiteSpace: "nowrap" }}>
      <Typography variant="caption">{data[0]}</Typography>
      <Typography variant="body2" fontWeight={bold ? 600 : 400}>
        {data[1]}
      </Typography>
    </Box>
  )
)
