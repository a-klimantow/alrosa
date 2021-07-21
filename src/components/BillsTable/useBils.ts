import { makeAutoObservable } from "mobx"
import { useRef, useEffect } from "react"
import { Request } from "superagent"

import { SortMenuProps, useSortMenu } from "components"
import { BillDataType } from "types"
import { useRequest } from "hooks"

class Bills {
  sort
  request
  data = { items: [], total: 0 } as BillDataType

  constructor({ sort, request }: { sort: SortMenuProps; request: Request }) {
    makeAutoObservable(this)
    this.sort = sort
    this.request = request
  }

  async getData() {
    try {
      const res = await this.request.then()
      this.data = res.body
    } catch (error) {}
  }

  cancel() {
    this.request.abort()
  }

  get sortedItems() {
    return this.data.items.slice().sort((a, b) => {
      switch (this.sort.current) {
        case 0:
          return Date.parse(b.createDate) - Date.parse(a.createDate)
        case 1:
          return Date.parse(a.createDate) - Date.parse(b.createDate)
        case 2:
          return Number(b.price) - Number(a.price)
        case 3:
          return Number(a.price) - Number(b.price)
        default:
          return 0
      }
    })
  }
}

// =======================================
export const useBills = () => {
  const sort = useSortMenu()

  const { current } = useRef(
    new Bills({ sort, request: useRequest({ url: "bill" }) })
  )

  useEffect(() => {
    current.getData()
    return () => current.cancel()
  }, [current])

  return current
}
