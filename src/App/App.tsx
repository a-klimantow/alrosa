import { Switch, Route } from "react-router-dom"
import { Box, useTheme } from "@material-ui/core"
import { FC } from "react"

import { AppMenu, AppHeader } from "components"
import { LoginPage, HomePage } from "pages"

export const App = () => {
  return (
    <Switch>
      <Route path="/login/" component={LoginPage} />
      <Route>
        <Layout>
          <AppHeader />
          <AppMenu />
          <Switch>
            <Route path="/" component={HomePage} exact />
          </Switch>
        </Layout>
      </Route>
    </Switch>
  )
}

const Layout: FC = (props) => {
  const { breakpoints } = useTheme()
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplate: `
        "M H" 64px
        "M P" calc(100vh - 64px) / 64px 1fr
      `,

        overflow: "hidden",
        [`${breakpoints.down("md")}`]: {
          gridTemplate: `
            "H" 64px
            "P" 1fr
            "M" 64px
          `,
          overflow: "auto",
          height: "100vh",
        },
      }}
      {...props}
    />
  )
}
