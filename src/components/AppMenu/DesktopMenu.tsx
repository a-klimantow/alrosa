import { Paper, ButtonBase, styled } from "@material-ui/core"
import { NavLink } from "react-router-dom"

import { useGetMenu } from "hooks"
import { Logo, Icon } from "components"

export const DesktopMenu = () => {
  const menu = useGetMenu()
  return (
    <MenuStyled>
      <Logo small />
      <List>
        {menu.long.map(({ to, icon, name }) => (
          <li key={name}>
            <Link to={to} exact={to === "/"}>
              <ButtonBase component="span">
                <Icon type={icon} />
              </ButtonBase>
            </Link>
          </li>
        ))}
      </List>
    </MenuStyled>
  )
}

const MenuStyled = styled(Paper)(({ theme }) => ({
  gridArea: "M",
  width: theme.spacing(8),
  display: "grid",
  gridTemplateRows: `${theme.spacing(8)} 1fr`,
}))

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: 2,

  "& > li:nth-last-of-type(2)": {
    marginTop: "auto",
  },
})

const Link = styled(NavLink)(({ theme }) => ({
  display: "flex",
  textDecoration: "none",
  color: theme.palette.grey["500"],

  "&.active": {
    color: theme.palette.primary.main,
  },

  "& > span": {
    flex: 1,
    padding: theme.spacing(1.5),
  },
}))
