import React from "react"
import { Box, BoxProps } from "@material-ui/core"
import logo_img from "./logo_img.svg"
import logo_text from "./logo_text.svg"

interface LogoProps extends BoxProps {
  small?: boolean
}

export const Logo = React.memo<LogoProps>(({ small = false, ...props }) => (
  <Box display="inline-grid" justifyItems="center" gap={1} {...props}>
    <img src={logo_img} alt="Логотип компании АЛРОСА" />
    {!small ? <img src={logo_text} alt="АЛРОСА" /> : null}
  </Box>
))
