import {
  InputLabel,
  OutlinedInput,
  OutlinedInputProps,
  Box,
} from "@material-ui/core"
import { withStyles } from "@material-ui/styles"
import { observer, useLocalObservable } from "mobx-react-lite"

import { ToggleButton } from "./ToggleButton"

interface FieldProps extends OutlinedInputProps {
  label?: string
  isPassword?: boolean
}

export const Field = observer<FieldProps>(
  ({ isPassword = false, label, ...props }) => {
    const field = useLocalObservable(() => ({
      hidden: Boolean(isPassword),
      toggle() {
        this.hidden = !this.hidden
      },
      get type() {
        return this.hidden ? "password" : "text"
      },
    }))

    return (
      <Box display="grid" gap={0.5}>
        <InputLabel>{label}</InputLabel>
        <OutlinedInputStyled
          type={field.type}
          endAdornment={
            isPassword ? (
              <ToggleButton hidden={field.hidden} onClick={field.toggle} />
            ) : null
          }
          {...props}
        />
      </Box>
    )
  }
)

const OutlinedInputStyled = withStyles({
  root: {
    letterSpacing: "0.2em",

    "&:focus-within": {
      borderColor: "red",
    },
  },
  adornedEnd: {
    padding: 0,
  },
})(OutlinedInput)
