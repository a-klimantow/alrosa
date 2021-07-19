import React from "react"
import { useLocalObservable } from "mobx-react-lite"
import { useHistory } from "react-router-dom"

import { LoginDataType } from "types"
import { Keys } from "utils"
import { useRequest } from "hooks"

export const useLoginPage = () => {
  const { push } = useHistory()
  const request = useRequest({ url: "auth/login", method: "post" })
  return useLocalObservable(() => ({
    contract: "",
    password: "",
    hiddenPass: true,
    loading: false,
    error: false,

    changeContract(e: React.ChangeEvent<HTMLInputElement>) {
      this.contract = e.target.value
      this.error = false
    },

    changePassword(e: React.ChangeEvent<HTMLInputElement>) {
      this.password = e.target.value
      this.error = false
    },

    submit(e: React.FormEvent) {
      e.preventDefault()
      this.loading = true
      request
        .send({ contract: btoa(this.contract) })
        .send({ password: btoa(this.password) })
        .then(({ body }: { body: LoginDataType }) => {
          localStorage.setItem(Keys.Token, body.access_token)
          localStorage.setItem(Keys.Type, body.token_type)
          push("/")
        })
        .catch((e) => {
          if (e.status === 401) {
            this.error = true
            this.loading = false
          }
        })
    },

    toggleHiddenPass() {
      this.hiddenPass = !this.hiddenPass
    },

    get disabled() {
      return !Boolean(this.contract) || !Boolean(this.password) || this.loading
    },

    get errText() {
      return this.error ? "Неправильно введен логин или пароль" : ""
    },

    get data() {
      return JSON.stringify({
        contract: btoa(this.contract),
        password: btoa(this.password),
      })
    },

    get typeField() {
      return this.hiddenPass ? "password" : "text"
    },
  }))
}

// doc-14.07.2021
