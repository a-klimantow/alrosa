import React from "react"
import { TextField, TextFieldProps, Typography, Box } from "@material-ui/core"
import { observer, useLocalObservable } from "mobx-react-lite"

import { ToggleButton } from "./ToggleButton"

type FieldProps = TextFieldProps & {
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

    const adorment = isPassword ? (
      <ToggleButton hidden={field.hidden} onClick={field.toggle} />
    ) : null

    return (
      <Box display="grid">
        <Typography
          variant="caption"
          fontSize={13}
          lineHeight="24px"
          fontWeight={500}
        >
          {label}
        </Typography>
        <TextField
          type={field.type}
          InputProps={{ endAdornment: adorment }}
          {...props}
        />
      </Box>
    )
  }
)
