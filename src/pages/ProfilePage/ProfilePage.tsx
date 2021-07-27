import { observer } from "mobx-react-lite"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

import { ContactInfo } from "./ContactInfo"
import { ChangePassword } from "./ChangePassword"

export const ProfilePage = observer(() => {
  const cls = useStyles()
  return (
    <div className={cls.root}>
      <Typography variant="h3" sx={{ fontSize: 24, gridArea: "t" }}>
        Профиль
      </Typography>
      <ContactInfo />
      <ChangePassword />
    </div>
  )
})

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    gap: theme.spacing(2),
    display: "grid",
    gridTemplate: `
      "t t" auto
      ". ." 1fr/ 8fr 5fr
    `,
    [`${theme.breakpoints.down("md")}`]: {
      gridTemplate: `
      "t" auto
      "." auto
      "." auto / 1fr
    `,
    },
  },
}))
