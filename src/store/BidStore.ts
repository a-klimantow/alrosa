/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useLocalObservable } from "mobx-react-lite"
import { ResponseError } from "superagent"

import { BidDataType } from "types"
import { useSuperagent } from "hooks"

export const BidStore = {
  items: [] as BidDataType["items"],
  total: 0,
  data: null as null | string,

  createData(value: string) {
    this.data = value
  },

  getSuccess({ items, total }: BidDataType) {
    this.items = items
    this.total = total
    this.data = null
  },

  fail(e: ResponseError) {
    this.data = null
    console.log(e.status)
  },
}

export const useBidStore = () => {
  const _get = useSuperagent("bid")
  const _post = useSuperagent("bid", "POST")
  const store = useLocalObservable(() => BidStore)

  const { data, getSuccess, fail } = store

  useEffect(() => {
    _get.then((res) => getSuccess(res.body)).catch((e) => fail(e))
    return () => {
      _get.abort()
      _post.abort()
    }
  }, [])

  useEffect(() => {
    if (data) {
      ;(async () => {
        try {
          await _post.send(data).then(() => {})
          const { body } = await _get.then()
          getSuccess(body)
        } catch (error) {
          fail(error)
        }
      })()
    }
  }, [data])

  return store
}
