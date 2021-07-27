import { Paper, Typography, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { observer } from "mobx-react-lite"

import { PassField, Icon } from "components"
import { text } from "./text"
import { useChangePassword } from "./useChangePassword"

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
    marginTop: theme.spacing(1),
  },
}))
