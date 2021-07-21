import { useLocalObservable, observer } from "mobx-react-lite"
import {
  Button,
  ButtonProps,
  IconButton,
  Box,
  Typography,
  TextField,
  TextFieldProps,
} from "@material-ui/core"

import { Icon } from "components"

export const PassField = observer<TextFieldProps>(({ label, ...props }) => {
  const state = useLocalObservable(() => ({
    hidden: true,
    toggleClick() {
      this.hidden = !this.hidden
    },
  }))
  return (
    <Box component="label" sx={{ display: "grid", gap: 0.5 }}>
      <Typography component="span" variant="caption" sx={{ fontWeight: 500 }}>
        {label}
      </Typography>
      <TextField
        type={state.hidden ? "password" : "text"}
        InputProps={{
          endAdornment: (
            <ToggleButton hidden={state.hidden} click={state.toggleClick} />
          ),
        }}
        {...props}
      />
    </Box>
  )
})

interface ToggleButtonProps {
  hidden: boolean
  click: () => void
}
export const ToggleButton = (props: ToggleButtonProps) => (
  <IconButton onClick={props.click}>
    {props.hidden ? <Icon type="eye_off" /> : <Icon type="eye_on" />}
  </IconButton>
)

export const SubmitButton = (props: ButtonProps) => (
  <Box
    component={Button}
    type="submit"
    color="primary"
    variant="contained"
    mt={2}
    {...props}
  >
    Войти
  </Box>
)
