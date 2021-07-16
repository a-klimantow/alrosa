import { List, Paper } from "@material-ui/core"

import { useDesktopMenu } from "hooks"
import { Logo } from "components"
import { AppMenuTheme } from "./AppMenuTheme"
import { AppMenuItem } from "./AppMenuItem"

export const AppMenu = () => {
  const menu = useDesktopMenu()
  return (
    <AppMenuTheme>
      <Paper square>
        <Logo small />
        <List>
          {menu.map(([path, icon, tooltip]) => (
            <AppMenuItem key={path} icon={icon} to={path} tooltip={tooltip} />
          ))}
        </List>
      </Paper>
    </AppMenuTheme>
  )
}
