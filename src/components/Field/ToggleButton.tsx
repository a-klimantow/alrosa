import React from "react"
import { IconButton, IconButtonProps, InputAdornment } from "@material-ui/core"

interface Props extends IconButtonProps {
  hidden: boolean
}

export const ToggleButton = React.memo<Props>(({ hidden, ...props }) => (
  <InputAdornment position="end">
    <IconButton {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4V7.5M19 6L16.2237 8.77631M5 6L7.7763 8.77632M7.7763 8.77632C6.34173 9.69177 5.03656 11.0997 4 13C8 20.3333 16 20.3333 20 13C18.9634 11.0997 17.6583 9.69175 16.2237 8.77631M7.7763 8.77632C9.10967 7.92545 10.5548 7.5 12 7.5M12 7.5C13.4452 7.5 14.8903 7.92543 16.2237 8.77631"
          stroke="#9FA2B4"
        />
        <circle cx="12" cy="13" r="3" stroke="#9FA2B4" />
        {hidden ? (
          <>
            <path
              d="M20 4L4 20"
              stroke="white"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path d="M20 4L4 20" stroke="#9FA2B4" strokeLinejoin="round" />
          </>
        ) : null}
      </svg>
    </IconButton>
  </InputAdornment>
))
