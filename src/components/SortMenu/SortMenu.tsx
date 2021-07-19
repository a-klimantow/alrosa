import { FC, useRef } from "react"
import { Button, MenuItem, Menu } from "@material-ui/core"
import { ArrowDropDown as ArrowIcon } from "@material-ui/icons"

import { Wrap, Option, Label, SortMenuProps } from "./components"

export const SortMenu: FC<SortMenuProps> = ({
  toggleOpen,
  changeCurrent,
  current,
  options,
  isOpen,
}) => {
  const ref = useRef<HTMLButtonElement | null>(null)

  const [sort, value] = options[current]
  return (
    <Wrap>
      <Label />
      <Button ref={ref} endIcon={<ArrowIcon />} onClick={toggleOpen}>
        <Option sort={sort} value={value} />
      </Button>
      <Menu open={isOpen} anchorEl={ref.current} onClose={toggleOpen}>
        {options.map(([sort, value], i) => (
          <MenuItem key={sort} onClick={() => changeCurrent(i)}>
            <Option sort={sort} value={value} active={i === current} />
          </MenuItem>
        ))}
      </Menu>
    </Wrap>
  )
}
