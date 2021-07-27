import { useMemo } from "react"
import {
  Paper,
  Typography,
  Link,
  useMediaQuery,
  Theme,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

import { ContactType } from "types"
import { useContactContext } from "context"

export const ContactInfo = () => {
  const { phone, name, email, address } = useContactContext()
  const addr = useAddres(address)
  const cls = useStyles()
  const isSmall = useMediaQuery((t: Theme) => t.breakpoints.down("md"))
  const variant = isSmall ? "body2" : "body1"

  return (
    <Paper className={cls.root}>
      <Typography variant="h6">Контактная информация</Typography>
      <div>
        <Typography variant="caption">Контрагент</Typography>
        <Typography variant={variant}>{name}</Typography>
      </div>
      <div>
        <Typography variant="caption">Контакты</Typography>
        <Typography variant={variant}>{phone}</Typography>
      </div>
      <Link variant={variant}>{email}</Link>
      <Typography variant={variant}>{addr}</Typography>
    </Paper>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    display: "grid",
    gridTemplateRows: "40px 60px auto",
    alignContent: "start",
    gap: theme.spacing(1),
  },
}))

const useAddres = (address: ContactType["address"]): string =>
  useMemo(() => {
    if (!address) return ""
    const { street, building, floor, country, city, zip } = address
    return [street, building, floor, country, `г. ${city}`, zip]
      .filter((i) => Boolean(i) && i.length > 4)
      .join(", ")
  }, [address])
