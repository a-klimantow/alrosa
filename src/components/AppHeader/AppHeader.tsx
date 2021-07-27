import { observer } from "mobx-react-lite"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

import { Icon } from "components"
import { useContactContext } from "context"

export const AppHeader = observer(() => {
  const { name } = useContactContext()
  const cls = useStyles()
  return (
    <div className={cls.root}>
      <Typography>{name}</Typography>
      <Icon type="notification" color="action" />
    </div>
  )
})

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(0, 3, 0, 2),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}))
