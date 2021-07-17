import React from "react"
import { useLocalObservable } from "mobx-react-lite"

import { useFetch } from "hooks"

const errorText = "Неправильно введен логин или пароль"

export const useLogin = () => {
  const fetch = useFetch()
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
      fetch.login(this.data)
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
      return {
        contract: btoa(this.contract),
        password: btoa(this.password),
      }
    },
  }))
}
