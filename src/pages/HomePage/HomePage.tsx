import { Paper, Box } from "@material-ui/core"
import { PageLayout, BlockList } from "components"

export const HomePage = () => (
  <PageLayout data-home>
    <BlockList />
    <BlockList />
    <BlockList />
    <Paper component={Box} gridColumn="1 / -1">
      table
    </Paper>
  </PageLayout>
)
