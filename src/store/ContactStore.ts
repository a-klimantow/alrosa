import { useLocalObservable } from "mobx-react-lite"
import { useEffect } from "react"

import { useSuperagent } from "hooks"
import { ContactType } from "types"

export const useContactStore = () => {
  const _get = useSuperagent("profile/contact")

  const store = useLocalObservable(() => ({
    data: {} as ContactType,
    loading: true,

    async getData() {
      try {
        const res = await _get.then()
        this.data = res.body
      } catch (error) {
        console.log(error)
      }
    },

    cancelFetch() {
      _get.abort()
    },
  }))

  useEffect(() => {
    store.getData()
    return () => store.cancelFetch()
  }, [store])

  return store
}
