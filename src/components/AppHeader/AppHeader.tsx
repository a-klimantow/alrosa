import { styled, Box } from "@material-ui/core"
import { Icon } from "components"

// const Icon = () => (
//   <svg
//     width="32"
//     height="32"
//     viewBox="0 0 32 32"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M21 20V13C21 10.2386 18.7614 8 16 8V8C13.2386 8 11 10.2386 11 13V20M21 20H11M21 20H23M11 20H9"
//       stroke="#9FA2B4"
//       strokeWidth="1.5"
//     />
//     <path
//       d="M14 21.5V22C14 23.1046 14.8954 24 16 24C17.1046 24 18 23.1046 18 22V21.5"
//       stroke="#9FA2B4"
//       strokeWidth="1.5"
//     />
//     <circle
//       cx="22"
//       cy="10"
//       r="3"
//       fill="#0078FF"
//       stroke="#F7F8FC"
//       strokeWidth="2"
//     />
//   </svg>
// )

export const AppHeader = () => (
  <HeaderStyled>
    ООО «Меркурий»
    <Icon type="notification" color="action" />
  </HeaderStyled>
)

export const HeaderStyled = styled(Box)(({ theme }) => ({
  gridArea: "H",
  minHeight: theme.spacing(8),
  background: theme.palette.background.paper,
  borderBottom: `1px solid ${theme.palette.divider}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 2, 0, 4),
}))
