import { observer } from "mobx-react-lite"
import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
} from "@material-ui/core"
import { Icon } from "components"

interface CustomCheckboxProps extends MuiCheckboxProps {
  iconStar?: boolean
}

export const Checkbox = observer<CustomCheckboxProps>(
  ({ iconStar, checked, onChange, defaultChecked }) => (
    <MuiCheckbox
      size="small"
      icon={<Icon type={iconStar ? "star" : "chbox"} viewBox="0 0 16 16" />}
      color={iconStar ? "error" : undefined}
      checkedIcon={
        <Icon
          type={iconStar ? "star_fill" : "chbox_ok"}
          viewBox="0 0 16 16"
          color={iconStar ? "error" : undefined}
        />
      }
      checked={checked}
      onChange={onChange}
      defaultChecked={defaultChecked}
    />
  )
)
