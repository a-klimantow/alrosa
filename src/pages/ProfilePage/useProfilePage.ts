import { makeAutoObservable } from "mobx"
import { useRef, useEffect } from "react"
import { Request } from "superagent"
import { TextFieldProps } from "@material-ui/core"

import { useGetData, usePostData } from "hooks"
import { ContactType } from "types"

class Store {
  getData
  postData
  data = {} as ContactType
  oldPass = ""
  newPass = ""
  newPassCorrect = ""
  loading = false
  error = ""

  constructor({ getData, postData }: { getData: Request; postData: Request }) {
    makeAutoObservable(this)
    this.getData = getData
    this.postData = postData
  }

  async getContact() {
    try {
      const { body } = await this.getData.then()
      this.data = body
    } catch (error) {}
  }

  async postContact() {
    this.loading = true
    try {
      await this.postData
        .send({ oldPassword: btoa(this.oldPass) })
        .send({ newPassword: btoa(this.newPass) })
        .then()

      this.loading = false
      this.oldPass = ""
      this.newPass = ""
      this.newPassCorrect = ""
    } catch (error) {
      this.loading = false

      if (error.status === 401) {
        this.error = error.response.body.errorDescription
      }
    }
  }

  cancel() {
    this.getData.abort()
    this.postData.abort()
  }

  get address() {
    const a = this.data.address ?? {}
    return [
      a.street,
      `д. ${a.building}`,
      a.floor,
      a.country,
      `г. ${a.country}`,
      a.zip,
    ]
      .filter(Boolean)
      .join(", ")
  }

  changePassValue(name: keyof Store, value = "") {
    this.error = ""
    switch (name) {
      case "newPassCorrect":
      case "newPass":
      case "oldPass":
        this[name] = value
        break
      default:
        break
    }
  }

  get disabledButton() {
    const o = this.oldPass
    const n = this.newPass
    const c = this.newPassCorrect
    const l = this.loading
    return ![o, n, c, n === c, !l].every(Boolean)
  }

  get correctPassValid(): TextFieldProps {
    const np = this.newPass
    const npc = this.newPassCorrect
    if ((np && !npc) || !np || !npc) return {}
    else if ([np, npc, np !== npc].every(Boolean))
      return { error: true, helperText: "Пароли должны совпадать" }
    else return { color: "success" }
  }

  get oldPassText(): TextFieldProps {
    if (this.error) {
      return { error: true, helperText: this.error }
    }
    return {}
  }
}

// =========================
export const useProfilePage = () => {
  const getData = useGetData("profile/contact")
  const postData = usePostData("profile/password")
  const { current } = useRef(new Store({ getData, postData }))

  useEffect(() => {
    current.getContact()
    return () => current.cancel()
  }, [current])

  return current
}
