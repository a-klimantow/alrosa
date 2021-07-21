import React from "react"
import { useLocalObservable } from "mobx-react-lite"
import { useHistory } from "react-router-dom"

import { useRequest } from "hooks"
import {
  ErrorType,
  ContractDataType,
  BidDataType,
  ComplaintDataType,
} from "types"

export const useHomePage = () => {
  const { replace } = useHistory()
  const requestContracts = useRequest({ url: "contract" })
  const requestBids = useRequest({ url: "bid" })
  const requestComplaints = useRequest({ url: "complaint" })

  const store = useLocalObservable(() => ({
    contract: { items: [], total: 0 } as ContractDataType,
    bid: { items: [], total: 0 } as BidDataType,
    complaint: { items: [], total: 0 } as ComplaintDataType,

    getData() {
      requestContracts
        .then(({ body }: { body: ContractDataType }) => {
          this.contract = body
        })
        .catch(this.error)

      requestBids
        .then(({ body }: { body: BidDataType }) => {
          this.bid = body
        })
        .catch(this.error)

      requestComplaints
        .then(({ body }: { body: ComplaintDataType }) => {
          this.complaint = body
        })
        .catch(this.error)
    },

    cancelRequest() {
      requestContracts.abort()
      requestBids.abort()
      requestComplaints.abort()
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
