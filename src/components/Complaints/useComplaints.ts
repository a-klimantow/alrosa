/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useLocalObservable } from "mobx-react-lite"

import { useSuperagent } from "hooks"
import { ComplaintsStore } from "./store"

export const useComplaints = () => {
  const _get = useSuperagent("complaint")
  const _post = useSuperagent("complaint", "POST")
  const store = useLocalObservable(() => ComplaintsStore)

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
