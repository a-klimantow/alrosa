import React from "react"
import { Box, BoxProps } from "@material-ui/core"

import logo_img from "./logo_img.svg"
import logo_text from "./logo_text.svg"

interface LogoProps extends BoxProps {
  small?: boolean
}

export const Logo = React.memo<LogoProps>(({ small = false, ...props }) => (
  <Box
    sx={{
      display: "inline-grid",
      placeContent: "center",
      placeItems: "center",
      gap: 1,
    }}
  >
    <Box
      component="img"
      src={logo_img}
      alt="Логотип компании АЛРОСА"
      sx={{
        width: small ? 40 : "unset",
        height: small ? 23 : "unset",
      }}
    />
    {!small ? <img src={logo_text} alt="АЛРОСА" /> : null}
  </Box>
))
