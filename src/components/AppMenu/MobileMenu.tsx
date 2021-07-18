import React from "react"
import {
  Box,
  styled,
  AppBar,
  IconButton,
  SwipeableDrawer,
  SwipeableDrawerProps,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core"
import { ArrowBack as ArrowIcon } from "@material-ui/icons"
import { NavLinkProps, useHistory, NavLink } from "react-router-dom"
import { observer } from "mobx-react-lite"

import { IconType, Icon, Logo } from "components"
import { useMobileMenu, useGetMenu } from "hooks"

export interface MenuItemProps extends NavLinkProps {
  icon: IconType
  name: string
}

export const MobileMenu = observer(() => {
  const { push } = useHistory()
  const menu = useGetMenu()
  const store = useMobileMenu()
  return (
    <>
      <AppBarStyled>
        <Toolbar>
          {menu.shot.map(({ name, icon, to }) => (
            <IconButton
              color="inherit"
              key={name}
              onClick={() => push(to.toString())}
            >
              <Icon type={icon} />
            </IconButton>
          ))}
          <IconButton color="inherit" onClick={store.open}>
            <Icon type="mobile_menu" />
          </IconButton>
        </Toolbar>
      </AppBarStyled>
      <DraverMenu
        open={store.isOpen}
        onClose={store.close}
        onOpen={store.open}
        menu={menu.long}
      />
    </>
  )
})

const AppBarStyled = styled(AppBar)({
  position: "sticky",
  bottom: 0,
  gridArea: "M",
})

const Toolbar = styled(Box)({
  height: "100%",
  display: "grid",
  gridAutoFlow: "column",
  gridAutoColumns: "1fr",
  justifyContent: "space-evenly",
})

interface DrawerMenuProps extends SwipeableDrawerProps {
  menu: MenuItemProps[]
}

const DraverMenu = React.memo<DrawerMenuProps>(({ menu, ...props }) => (
  <SwipeableDrawer anchor="left" {...props}>
    <Wrapper>
      <IconButton onClick={props.onClose}>
        <ArrowIcon />
      </IconButton>
      <Logo />
    </Wrapper>
    <ListStyled>
      {menu.map(({ name, to, icon }) => (
        <li key={name}>
          <ListItem button>
            <LinkWrapper to={to} exact={to === "/"} onClick={props.onClose}>
              <ListItemIcon>
                <Icon type={icon} />
              </ListItemIcon>
              <ListItemText primary={name} />
              <ListItemText secondary="" data-total />
            </LinkWrapper>
          </ListItem>
        </li>
      ))}
    </ListStyled>
  </SwipeableDrawer>
))

const Wrapper = styled(Box)(({ theme }) => ({
  height: 160,
  display: "grid",
  gridTemplateColumns: "52px 1fr 52px",
  placeContent: "center",
  background: theme.palette.background.default,
  "& > button": {
    width: 50,
    height: 50,
    transform: "translate(10px, -20px)",
  },
}))

const ListStyled = styled(List)({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  "& li:last-of-type": { marginTop: "auto" },
})

const LinkWrapper = styled(NavLink)(({ theme }) => ({
  color: "inherit",
  textDecoration: "none",
  display: "contents",

  "& span:first-of-type:first-letter": {
    textTransform: "uppercase",
  },

  "& [data-total]": {
    textAlign: "right",
  },

  "&.active *": {
    color: theme.palette.primary.main,
  },
}))
