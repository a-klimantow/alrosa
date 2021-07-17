import {
  Typography,
  Select,
  SelectProps,
  Box,
  MenuItem,
  styled,
} from "@material-ui/core"

import { Icon, IconType } from "components"
import { observer } from "mobx-react-lite"

export interface OptionItemType {
  key: string
  value: string
  icon?: IconType
}

interface Props extends SelectProps {
  options?: OptionItemType[]
}

export const Sort = observer<Props>(({ options = [], value, ...props }) => (
  <SortStyled>
    <Typography
      component="label"
      variant="caption"
      fontSize={13}
      htmlFor="select"
    >
      Сортировать по:
    </Typography>
    <Select value={value} {...props}>
      {options.map(({ value, key, icon }) => (
        <MenuItem key={key} value={key}>
          {icon && <Icon type={icon} />}
          {value}
        </MenuItem>
      ))}
    </Select>
  </SortStyled>
))

const SortStyled = styled(Box)(({ theme }) => ({
  display: "inline-grid",
  gridTemplateColumns: "auto 130px",
  alignItems: "center",
  gap: theme.spacing(1),
}))
