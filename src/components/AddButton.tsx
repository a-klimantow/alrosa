import { FC } from "react"
import { IconButton, IconButtonProps } from "@material-ui/core"
import { Icon } from "components"

export const AddButton: FC<IconButtonProps> = (props) => (
  <IconButton color="primary" {...props}>
    <Icon type="plus" />
  </IconButton>
)
