import { useEffect } from "react"
import { useLocalObservable } from "mobx-react-lite"

import { ContractType } from "types"
import { useFetch } from "hooks"

interface IStore {
  items: ContractType[]
  total: number
  loading: boolean
  get: () => void
}

export const useConTractBlock = (): IStore => {
  const { getContracts } = useFetch()

  const store = useLocalObservable(
    (): IStore => ({
      items: [],
      total: 0,
      loading: true,

      async get() {
        try {
          const { items, total } = await getContracts()
          this.total = total
          this.items = items
        } catch (error) {}
      },
    })
  )

  useEffect(() => {
    store.get()
  }, [store])

  return store
}
