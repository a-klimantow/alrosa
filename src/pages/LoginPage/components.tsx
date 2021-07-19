import {
  Button,
  ButtonProps,
  IconButton,
  Box,
  BoxProps,
  LinearProgress,
  Typography,
  TextField,
  TextFieldProps,
} from "@material-ui/core"

import { Icon } from "components"

export const Page = (props: BoxProps) => (
  <Box
    sx={{
      display: "grid",
      placeContent: "center",
      minHeight: "100vh",
    }}
    {...props}
  />
)

export const Form = (props: BoxProps) => (
  <Box
    component="form"
    sx={{
      display: "grid",
      gap: 2,
      minWidth: 312,
      mt: 6,
    }}
    {...props}
  />
)

export const Title = () => (
  <Box
    component="h1"
    sx={{
      fontSize: 20,
      lineHeight: 1.2,
      fontWeight: 700,
    }}
  >
    Авторизация
  </Box>
)

export const Field = ({ label, helperText, ...props }: TextFieldProps) => (
  <Box component="label" sx={{ display: "grid", gap: 0.5 }}>
    <Typography component="span" variant="caption">
      {label}
    </Typography>
    <TextField error={Boolean(helperText)} helperText={helperText} {...props} />
  </Box>
)

export const Loader = () => (
  <Box
    component={LinearProgress}
    sx={{
      position: "fixed",
      left: 0,
      right: 0,
      bottom: 0,
    }}
  />
)

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
