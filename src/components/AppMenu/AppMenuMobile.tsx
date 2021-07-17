import { Hidden, Box, styled } from "@material-ui/core"



export const AppMenuMobile = () => (
  <Hidden mdUp>
    <MenuStyled>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </MenuStyled>
  </Hidden>
)

const MenuStyled = styled(Box)(({ theme }) => ({
  border: "1px solid red",
  gridArea: "M",
  position: "sticky",
  bottom: 0,
  minHeight: theme.spacing(7),
  zIndex: 100,
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
}))
