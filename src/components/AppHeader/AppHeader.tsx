import { FC } from "react"
import { observer } from "mobx-react-lite"

import { Box, Paper, Typography } from "@material-ui/core"
import { Icon } from "components"
import { useAppHeader } from "./useAppHeader"

export const AppHeader = observer(() => {
  const contact = useAppHeader()
  return (
    <Wrap>
      <Typography>{contact.name}</Typography>
      <Icon type="notification" color="action" />
    </Wrap>
  )
})

const Wrap: FC = (props) => (
  <Box
    component={Paper}
    sx={{
      gridArea: "H",
      display: "grid",
      gridTemplate: `". ." 1fr / 1fr auto`,
      alignItems: "center",
      pr: 2,
      pl: 3,
    }}
    {...props}
  />
)
