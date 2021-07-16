import React from "react"
import { ListItem, Tooltip } from "@material-ui/core"
import { NavLink, NavLinkProps } from "react-router-dom"

import { Icon, IconType } from "components"

export interface AppMenuItemProps extends NavLinkProps {
  icon: IconType
  tooltip: string
}

export const AppMenuItem = React.memo<AppMenuItemProps>(
  ({ icon, to, tooltip }) => (
    <li>
      <Tooltip title={tooltip}>
        <ListItem component={NavLink} button to={to} exact={to === "/"}>
          <Icon type={icon} />
        </ListItem>
      </Tooltip>
    </li>
  )
)
