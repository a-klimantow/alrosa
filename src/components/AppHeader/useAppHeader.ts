import { useEffect } from "react"
import { useLocalObservable } from "mobx-react-lite"

import { ContactType } from "types"
import { useRequest } from "hooks"

export const useAppHeader = () => {
  const req = useRequest({ url: "profile/contact" })
  const store = useLocalObservable(() => ({
    name: "",

    getData() {
      req.then((res) => {
        const { name } = res.body as ContactType
        this.name = name
      })
    },
    cancel() {
      req.abort()
    },
  }))

  useEffect(() => {
    store.getData()
    return () => store.cancel()
  }, [store])

  return store
}
