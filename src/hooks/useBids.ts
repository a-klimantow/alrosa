import React from "react"
import { useLocalObservable } from "mobx-react-lite"

import { BidType } from "types"
import { useRequest } from "hooks"

export const useBids = () => {
  const request = useRequest({ url: "bid" })
  const store = useLocalObservable(() => ({
    items: [] as BidType[],
    total: 0,

    async getData() {
      try {
        const res = await request.then()
        const { items, total } = res.body
        this.items = items
        this.total = total
      } catch (error) {}
    },

    cancel() {
      request.abort()
    },
  }))

  React.useEffect(() => {
    store.getData()
    return () => store.cancel()
  }, [store])

  return store
}
