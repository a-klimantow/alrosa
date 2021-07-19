import { useEffect } from "react"
import { useLocalObservable } from "mobx-react-lite"

import { BidType } from "types"
import { useFetch } from "hooks"

export const useBidsBlock = () => {
  const { get } = useFetch()

  const store = useLocalObservable(() => ({
    items: [] as BidType[],
    total: 0,
    loading: true,

    async getData() {
      try {
        const { items, total } = await get("bid")
        this.items = items
        this.total = total
      } catch (error) {}
    },
  }))

  useEffect(() => {
    store.getData()
  }, [store])

  return store
}
