import { Typography, Button, Box } from "@material-ui/core"

import { Field, Logo } from "components"

export const LoginPage = () => (
  <Box
    display="grid"
    justifyContent="center"
    alignContent="center"
    minHeight="100vh"
  >
    <Logo mb={8} />
    <Box component="form" display="grid" gap={2} minWidth={312}>
      <Typography component="h1" variant="h6" fontWeight={700}>
        Авторизация
      </Typography>

      <Field label="Логин" />
      <Field label="Пароль" isPassword />

      <Box mt={3} display="grid">
        <Button variant="contained">Войти</Button>
      </Box>
    </Box>
  </Box>
)
