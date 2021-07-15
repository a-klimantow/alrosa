import { Switch, Route } from "react-router-dom"

import { LoginPage, NotFoundPage } from "pages"

export const App = () => (
  <Switch>
    <Route path="/" component={() => <div>main</div>} exact />
    <Route path="/login/" component={LoginPage} />
    <Route component={NotFoundPage} />
  </Switch>
)
