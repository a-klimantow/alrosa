import React from "react"
import { IconButton, IconButtonProps, InputAdornment } from "@material-ui/core"

import { Icon } from "components"

interface Props extends IconButtonProps {
  hidden: boolean
}

export const ToggleButton = React.memo<Props>(({ hidden, ...props }) => (
  <InputAdornment position="end">
    <IconButton {...props}>
      {hidden ? <Icon type="eye_off" /> : <Icon type="eye_on" />}
    </IconButton>
  </InputAdornment>
))
