import React from "react"
import { useLocalObservable } from "mobx-react-lite"
import { useHistory } from "react-router-dom"

import { useRequest } from "hooks"
import { ErrorType, ContractDataType } from "types"

export const useHomePage = () => {
  const { replace } = useHistory()
  const requestContracts = useRequest({ url: "contract" })

  const store = useLocalObservable(() => ({
    contract: { items: [], total: 0 } as ContractDataType,

    getData() {
      requestContracts
        .then(({ body }: { body: ContractDataType }) => {
          this.contract = body
        })
        .catch(this.error)
    },

    cancelRequest() {
      requestContracts.abort()
    },
    error(e: ErrorType) {
      e.message !== "Aborted" && replace("/login/")
    },
  }))

  React.useEffect(() => {
    store.getData()
    return () => store.cancelRequest()
  }, [store])

  return store
}
