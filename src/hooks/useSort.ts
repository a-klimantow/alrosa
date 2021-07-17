import React from "react"
import { useLocalObservable } from "mobx-react-lite"

import { OptionItemType } from "components"

export interface useSortProps {
  options?: OptionItemType[]
}

export const useSort = ({ options = [] }: useSortProps) => {
  const state = useLocalObservable(() => ({
    options,
    value: options[0]?.key ?? "",
    change(e: React.ChangeEvent<{ value: unknown }>) {
      this.value = e.target.value as string
    },
  }))

  return state
}
