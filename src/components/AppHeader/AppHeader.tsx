import { Box, Paper } from "@material-ui/core"
import { Icon } from "components"

export const AppHeader = () => (
  <Paper
    square
    component={Box}
    gridArea="H"
    minHeight={64}
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    pl={4}
    pr={2}
    border="none"
  >
    ООО «Меркурий»
    <Icon type="notification" color="action" />
  </Paper>
)
