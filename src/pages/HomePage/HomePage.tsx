import { PageLayout } from "components"
import { ContractsBlock, BidsBlock, ComplaintsBlock, BillsBlock } from "blocks"

export const HomePage = () => (
  <PageLayout data-home>
    <ContractsBlock />
    <BidsBlock />
    <ComplaintsBlock />
    <BillsBlock />
  </PageLayout>
)
