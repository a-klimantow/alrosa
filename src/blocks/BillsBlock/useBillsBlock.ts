import React from "react"
import { useLocalObservable } from "mobx-react-lite"

import { BillType } from "types"
import { useFetch, useSort } from "hooks"
import { OptionItemType } from "components"

const options: OptionItemType[] = [
  { key: "date_max", value: "Дате", icon: "sort_max" },
  { key: "date_min", value: "Дате", icon: "sort_min" },
  { key: "price_max", value: "Цене", icon: "sort_max" },
  { key: "price_min", value: "Цене", icon: "sort_min" },
]

interface BillListItem extends BillType {
  checked?: boolean
}

export const useBidsBlock = () => {
  const { get } = useFetch()
  const sort = useSort({ options })

  const store = useLocalObservable(() => ({
    items: [] as BillListItem[],
    total: 0,
    loading: true,

    changeChacked(item: BillListItem) {
      item.checked = !item.checked
    },

    changeChackedAll() {
      const checked = this.isAllChecked
      this.items.forEach((i) => {
        i.checked = !checked
      })
    },

    get isAllChecked() {
      if (!this.items.length) return false
      return this.items.every((i) => i.checked)
    },

    get sortItems() {
      return this.items.slice().sort((a, b) => {
        switch (sort.value) {
          case "price_max":
            return b.price - a.price
          case "price_min":
            return a.price - b.price
          case "date_max":
            return Date.parse(b.createDate) - Date.parse(a.createDate)
          case "date_min":
            return Date.parse(a.createDate) - Date.parse(b.createDate)
          default:
            return 0
        }
      })
    },

    async getData() {
      try {
        const { items, total } = await get("bill")
        this.items = items
        this.total = total
      } catch (error) {}
    },
  }))

  React.useEffect(() => {
    store.getData()
  }, [store])

  return { store, sort }
}
