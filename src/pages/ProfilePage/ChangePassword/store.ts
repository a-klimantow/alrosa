import { TextFieldProps } from "@material-ui/core"

import { text } from "./text"

export const store = {
  old: "",
  new: "",
  current: "",
  error: "",
  data: null as null | { oldPassword: string; newPassword: string },

  createData() {
    this.data = {
      oldPassword: btoa(this.old),
      newPassword: btoa(this.new),
    }
  },

  success() {
    this.old = ""
    this.new = ""
    this.current = ""
    this.data = null
  },

  fail(e: any) {
    this.data = null

    if (e.status === 401) {
      this.error = e.response.body.errorDescription
    }
  },

  changeOld(value: string) {
    this.old = value
    this.error = ""
  },

  changeNew(value: string) {
    this.new = value
  },

  changeCurrent(value: string) {
    this.current = value
  },

  get disableBtn() {
    return ![
      this.old,
      this.new,
      this.current,
      this.new === this.current,
      !this.data,
    ].every(Boolean)
  },

  get correctPassValid(): TextFieldProps {
    const n = this.new
    const c = this.current
    if ((n && !c) || !n || !c) return {}
    else if ([n, c, n !== c].every(Boolean))
      return { error: true, helperText: text.helper }
    else return { color: "success" }
  },

  get oldPassText(): TextFieldProps {
    if (this.error) return { error: true, helperText: this.error }
    return {}
  },
}
