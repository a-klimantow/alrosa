import { observer } from "mobx-react-lite"
import { Box, Typography, Paper, Link } from "@material-ui/core"

import { Icon } from "components"
import { ContactType } from "types"

type PageWrapType = {
  mobileTemplate?: string
  desktopTemplate?: string
}

export const PageWrap = observer<PageWrapType>(
  ({
    mobileTemplate = `
        "PT" auto
        "." 1fr
    `,
    desktopTemplate = `
    "PT" auto
    "."   1fr
  `,
    children,
  }) => (
    <Box
      sx={{
        m: 2,
        display: "grid",
        gap: 2,
        gridTemplate: {
          xs: mobileTemplate,
          md: desktopTemplate,
        },
      }}
    >
      {children}
    </Box>
  )
)

export const PageTitle = observer<{ gridArea?: string }>(
  ({ gridArea = "PT", children }) => (
    <Typography variant="h3" sx={{ fontSize: 24, gridArea }}>
      {children}
    </Typography>
  )
)

type ContactInfoProps = Pick<ContactType, "name" | "email" | "phone"> & {
  address: string
}

export const ContactInfo = observer<ContactInfoProps>(
  ({ name, email, phone, address }) => (
    <Paper
      sx={{
        p: 2,
        display: "grid",
        gridTemplateRows: "40px auto",
        alignContent: "start",
        gap: 1,
        "& span": {
          display: "block",
          fontSize: 13,
          color: "grey.500",
        },
        "& p": {
          m: 0,
          fontSize: {
            xs: 13,
            sm: 16,
          },
        },
      }}
    >
      <div>
        <Typography variant="h6">Контактная информация</Typography>
      </div>
      <p>
        <span>Контрагент</span>
        {name}
      </p>
      <p>
        <span>Контакты</span>
        {phone}
      </p>
      <Link>{email}</Link>
      <p>{address}</p>
    </Paper>
  )
)

export const PassBlock = observer(({ children }) => (
  <Paper
    sx={{
      p: 2,
      pb: 3,
      display: "grid",
      gap: 1,
      gridTemplateRows: "auto auto 1fr auto",
    }}
  >
    <Typography variant="h6">Контактная информация</Typography>
    <Typography variant="body2" sx={{ maxWidth: 360 }}>
      Чтобы изменить пароль, пожалуйста, наберите свой старый пароль. Затем
      введите новый пароль два раза.
    </Typography>
    <Box
      sx={{
        display: "grid",
        alignItems: "center",
        placeContent: "center",
        gridTemplateRows: "repeat(3, minmax(auto,15%)) minmax(auto,20%)",
        gap:2
      }}
    >
      {children}
    </Box>
    <Typography
      sx={{
        display: "grid",
        gridTemplate: `". ."auto / auto 1fr 24px`,
        alignItems: "start",
        gap: 1,
        color: "error.main",
        fontWeight: 600,
        maxWidth: 360,
        "& > svg": {
          gridRow: "span 2",
        },
        "& > span": {
          gridColumn: "2 / span 1",
          color: "grey.500",
          fontSize: 13,
          fontWeight: 400,
        },
      }}
    >
      <Icon type="gard" />
      Безопасность
      <span>
        Никогда никому не давайте свой пароль, независимо от того, кто вас об
        этом просит и просят ли вас об этом через электронную почту, месенжеры
        или лично.
      </span>
    </Typography>
  </Paper>
))
