import React from "react"
import { useLocalObservable } from "mobx-react-lite"
import { useHistory } from "react-router-dom"

import { useRequest } from "hooks"

const errorText = "Неправильно введен логин или пароль"

export const useLoginPage = () => {
  const { push } = useHistory()
  const request = useRequest({ url: "auth/login", method: "post" })
  return useLocalObservable(() => ({
    contract: "",
    password: "",
    loading: false,
    error: false,

    chagheContract(e: React.ChangeEvent<HTMLInputElement>) {
      this.contract = e.target.value
      this.error = false
    },

    chaghePassword(e: React.ChangeEvent<HTMLInputElement>) {
      this.password = e.target.value
      this.error = false
    },

    submit(e: React.FormEvent) {
      e.preventDefault()
      this.loading = true
      request
        .send({ contract: btoa(this.contract) })
        .send({ password: btoa(this.password) })
        .then(() => push("/"))
        .catch((e) => {
          if (e.status === 401) {
            this.error = true
            this.loading = false
          }
        })
    },

    testData() {
      this.contract = "doc-14.07.2021"
      this.password = "1"
    },

    get buttonDisable() {
      return !Boolean(this.contract) || !Boolean(this.password) || this.loading
    },

    get helpText() {
      return this.error ? errorText : ""
    },

    get data() {
      return JSON.stringify({
        contract: btoa(this.contract),
        password: btoa(this.password),
      })
    },
  }))
}
