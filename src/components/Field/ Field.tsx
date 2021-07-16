import React from "react"
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
  ({ isPassword = false, label, value, onChange, name }) => {
    const field = useLocalObservable(() => ({
      hidden: Boolean(isPassword),
      toggle() {
        this.hidden = !this.hidden
      },
      get type() {
        return this.hidden ? "password" : "text"
      },
    }))

    const adorment = React.useMemo(
      () =>
        isPassword ? (
          <ToggleButton hidden={field.hidden} onClick={field.toggle} />
        ) : null, 
      [isPassword, field]
    )

    return (
      <Box display="grid" gap={0.5}>
        {label ? <InputLabel>{label}</InputLabel> : null}
        <OutlinedInputStyled
          type={field.type}
          endAdornment={adorment}
          value={value}
          onChange={onChange}
          name={name}
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
