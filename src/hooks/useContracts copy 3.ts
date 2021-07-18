import React from "react"
import { useLocalObservable } from "mobx-react-lite"

import { ContractType } from "types"
import { useRequest } from "hooks"

export const useContracts = () => {
  const request = useRequest({ url: "contract" })
  const store = useLocalObservable(() => ({
    items: [] as ContractType[],
    total: null as number | null,

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
