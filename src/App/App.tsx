import { Switch, Route } from "react-router-dom"

import { routes } from "routes"
import { useShowedPath } from "hooks"
import { AppMenu, AppLayout, AppHeader } from "components"

export const App = () => {
  const showedPaths = useShowedPath()
  return (
    <AppLayout>
      <Route path={showedPaths} component={AppHeader} exact />
      <Route path={showedPaths} component={AppMenu} exact />
      <Switch>
        {routes.map(({ name, ...route }) => (
          <Route key={name} {...route} />
        ))}
      </Switch>
    </AppLayout>
  )
}
