import { Paper, Box } from "@material-ui/core"
import { PageLayout, BlockList, ContractsBlock } from "components"

export const HomePage = () => (
  <PageLayout data-home>
    <ContractsBlock />
    <BlockList />
    <BlockList />
    <Paper component={Box} gridColumn="1 / -1">
      table
    </Paper>
  </PageLayout>
)
