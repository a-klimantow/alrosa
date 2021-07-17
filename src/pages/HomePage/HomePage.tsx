import { Paper, Box } from "@material-ui/core"
import { PageLayout } from "components"
import { ContractsBlock, BidsBlock, ComplaintsBlock } from "blocks"

export const HomePage = () => (
  <PageLayout data-home>
    <ContractsBlock />
    <BidsBlock />
    <ComplaintsBlock />
    <Paper component={Box} gridColumn="1 / -1">
      table
    </Paper>
  </PageLayout>
)
