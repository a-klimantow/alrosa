/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useLocalObservable } from "mobx-react-lite"

import { useSuperagent } from "hooks"
import { BidsStore } from "./store"

export const useBids = () => {
  const _get = useSuperagent("bid")
  const _post = useSuperagent("bid", "POST")
  const store = useLocalObservable(() => BidsStore)

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
