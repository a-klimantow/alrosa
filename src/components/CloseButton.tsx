import { FC } from "react"
import { IconButton, IconButtonProps } from "@material-ui/core"
import { Close } from "@material-ui/icons"

export const CloseButton: FC<IconButtonProps> = (props) => (
  <IconButton {...props}>
    <Close />
  </IconButton>
)
