import { Hidden } from "@material-ui/core"

import { DesktopMenu } from "./DesktopMenu"
import { MobileMenu } from "./MobileMenu"

export const AppMenu = () => {
  return (
    <>
      <Hidden mdDown>
        <DesktopMenu />
      </Hidden>
      <Hidden mdUp>
        <MobileMenu />
      </Hidden>
    </>
  )
}
