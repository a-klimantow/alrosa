import { TextFieldProps, ButtonProps } from "@material-ui/core"
import { useLocalObservable } from "mobx-react-lite"
import { useEffect } from "react"

import { useSuperagent } from "hooks"
import { store } from "./store"

export const useChangePassword = (): {
  fields: TextFieldProps[]
  button: ButtonProps
} => {
  const post = useSuperagent("profile/password", "POST")
  const s = useLocalObservable(() => store)

  useEffect(() => () => post.abort(), [post])

  useEffect(() => {
    if (s.data) {
      post.send(s.data).then(s.success).catch(s.fail)
    }
  }, [post, s.data, s])

  return {
    fields: [
      {
        label: "Старый пароль",
        value: s.old,
        onChange: (e) => s.changeOld(e.target.value),
        ...s.oldPassText,
      },
      {
        label: "Новый пароль",
        value: s.new,
        onChange: (e) => s.changeNew(e.target.value),
        ...s.correctPassValid,
      },
      {
        label: "Подтвердить пароль",
        value: s.current,
        onChange: (e) => s.changeCurrent(e.target.value),
        ...s.correctPassValid,
      },
    ],
    button: {
      disabled: s.disableBtn,
      onClick: s.createData,
    },
  }
}
