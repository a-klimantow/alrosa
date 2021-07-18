import React from "react"
import { useLocalObservable } from "mobx-react-lite"

import { ComplaintType } from "types"
import { useRequest } from "hooks"

export const useComplaints = () => {
  const request = useRequest({ url: "complaint" })
  const store = useLocalObservable(() => ({
    items: [] as ComplaintType[],
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
