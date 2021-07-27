import {
  Paper,
  Typography,
  Button,
  TextFieldProps,
  ButtonProps,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { observer, useLocalObservable } from "mobx-react-lite"
import { useEffect } from "react"

import { useSuperagent } from "hooks"
import { PassField, Icon } from "components"

const text = {
  title: "Контактная информация",
  top: "Чтобы изменить пароль, пожалуйста, наберите свой старый пароль. Затем введите новый пароль два раза.",
  gard: "Безопасность",
  bottom:
    "Никогда никому не давайте свой пароль, независимо от того, кто вас об этом просит и просят ли вас об этом через электронную почту, месенжеры или лично.",
  helper: "Пароли должны совпадать",
}

export const ChangePassword = observer(() => {
  const cls = useStyles()
  const { fields, button } = useChangePassword()
  return (
    <Paper className={cls.root}>
      <Typography variant="h6">{text.title}</Typography>
      <Typography variant="body2" className={cls.info}>
        {text.top}
      </Typography>
      <div className={cls.form}>
        {fields.map((fld) => (
          <PassField key={fld.label as string} {...fld} />
        ))}
        <Button variant="contained" color="primary" {...button}>
          Сохранить
        </Button>
      </div>
      <div className={cls.bottom}>
        <Icon type="gard" />
        <Typography sx={{ fontWeight: 600, color: "error.main" }}>
          {text.gard}
        </Typography>
        <Typography variant="body2" color="grey.500">
          {text.bottom}
        </Typography>
      </div>
    </Paper>
  )
})

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 2, 3, 2),
    display: "grid",
    gap: theme.spacing(1),
    gridTemplateRows: "auto auto 1fr auto",
  },
  info: {
    maxWidth: 360,
  },

  bottom: {
    display: "grid",
    gridTemplate: `". ."auto / auto 1fr 24px`,
    gap: theme.spacing(1),

    "& > p": {
      gridColumn: "2 / span 1",
    },
  },

  form: {
    display: "grid",
    placeSelf: "center",
    placeItems: "center stretch",
    gridTemplateRows: "repeat(3, minmax(auto,15%)) minmax(auto,20%)",
    gap: theme.spacing(4),
    maxHeight: 420,
  },
}))

const useChangePassword = (): {
  fields: TextFieldProps[]
  button: ButtonProps
} => {
  const _post = useSuperagent("profile/password", "POST")
  const store = useLocalObservable(() => ({
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
  }))

  useEffect(() => () => _post.abort(), [_post])

  useEffect(() => {
    if (store.data) {
      _post.send(store.data).then(store.success).catch(store.fail)
    }
  }, [_post, store.data, store])

  return {
    fields: [
      {
        label: "Старый пароль",
        value: store.old,
        onChange: (e) => store.changeOld(e.target.value),
        ...store.oldPassText,
      },
      {
        label: "Новый пароль",
        value: store.new,
        onChange: (e) => store.changeNew(e.target.value),
        ...store.correctPassValid,
      },
      {
        label: "Подтвердить пароль",
        value: store.current,
        onChange: (e) => store.changeCurrent(e.target.value),
        ...store.correctPassValid,
      },
    ],
    button: {
      disabled: store.disableBtn,
      onClick: store.createData,
    },
  }
}
