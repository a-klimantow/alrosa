import { useEffect } from "react"
import { useLocalObservable } from "mobx-react-lite"

import { ComplaintType, IResponse } from "types"
import { useFetch } from "hooks"

export const useComplaintsBlock = () => {
  const { get } = useFetch()

  const store = useLocalObservable(() => ({
    items: [] as ComplaintType[],
    total: 0,
    loading: true,

    async getData() {
      try {
        const { items, total } = await get<IResponse<ComplaintType>>(
          "complaint"
        )
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
