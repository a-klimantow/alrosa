import { useEffect } from "react"
import { useLocalObservable } from "mobx-react-lite"

import { ContractType } from "types"
import { useFetch } from "hooks"

export const useConTractBlock = () => {
  const { get } = useFetch()

  const store = useLocalObservable(() => ({
    items: [] as ContractType[],
    total: 0,
    loading: true,

    async getData() {
      try {
        const { items, total } = await get("contract")
        this.total = total
        this.items = items
      } catch (error) {}
    },
  }))

  useEffect(() => {
    store.getData()
  }, [store])

  return store
}
