import React from "react"
import { useLocalObservable } from "mobx-react-lite"
import { useHistory } from "react-router-dom"
import axios from "axios"

const errorText = "Неправильно введен логин или пароль"

export const useLogin = () => {
  const { push } = useHistory()
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
      this.login()
    },

    get buttonDisable() {
      return !Boolean(this.contract) || !Boolean(this.password) || this.loading
    },

    get helpText() {
      return this.error ? errorText : ""
    },

    async login() {
      try {
        const res = await axios.post("/api/v1/auth/login", {
          contract: this.contract,
          password: this.password,
        })
        console.log(res)
      } catch (error) {
        this.loading = false
        this.error = true
        push("/")
      }
    },
  }))
}
