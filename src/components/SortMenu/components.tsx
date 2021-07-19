import { FC } from "react"
import { Box, Typography } from "@material-ui/core"
import { Sort as SortIcon } from "@material-ui/icons"
import { useLocalObservable } from "mobx-react-lite"

export type SortKeysType = "date_min" | "date_max" | "price_max" | "price_min"

export type OptionType = typeof options[number]

export type OptionProps = {
  sort: OptionType[0]
  value: OptionType[1]
  active?: boolean
}

export interface SortMenuProps {
  isOpen: boolean
  options: OptionType[]
  current: number
  changeCurrent: (s: number) => void
  toggleOpen: () => void
}

const options: [SortKeysType, string][] = [
  ["date_max", "Дате"],
  ["date_min", "Дате"],
  ["price_max", "Цене"],
  ["price_min", "Цене"],
]

export const Wrap: FC = (props) => (
  <Box
    sx={{
      display: "inline-grid",
      gridTemplateColumns: "auto auto",
      placeItems: "center",
      gap: 2,
      pr: 1,
    }}
    {...props}
  />
)

export const Label = () => (
  <Typography variant="caption" sx={{ fontSize: 13, letterSpacing: .5 }}>
    Сортировать по:
  </Typography>
)

export const Option: FC<OptionProps> = ({ sort, value, active }) => (
  <Box
    data-sort={sort}
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 2,
      minWidth: 80,
      color: active ? "primary.main" : "",
      "&[data-sort$=min] > svg": {
        transform: "scaleY(-1)",
      },
    }}
  >
    <SortIcon />
    {value}
  </Box>
)

export const useSortMenu = () =>
  useLocalObservable(
    (): SortMenuProps => ({
      isOpen: false,
      options,
      current: 0,
      changeCurrent(idx: number) {
        this.current = idx
        this.isOpen = false
      },
      toggleOpen() {
        this.isOpen = !this.isOpen
      },
    })
  )
