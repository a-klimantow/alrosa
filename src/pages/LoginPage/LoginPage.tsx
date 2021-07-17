import { Typography, Button, Box, LinearProgress } from "@material-ui/core"
import { observer } from "mobx-react-lite"

import { Field, Logo } from "components"
import { useLogin } from "./store"

export const LoginPage = observer(() => {
  const login = useLogin()
  return (
    <>
      <Box
        display="grid"
        justifyContent="center"
        alignContent="center"
        minHeight="100vh"
        gridColumn="1 / -1"
        gridRow="1 / -1"
      >
        <Logo mb={8} />
        <Box
          component="form"
          display="grid"
          gap={2}
          minWidth={312}
          onSubmit={login.submit}
        >
          <Typography component="h1" variant="h6" fontWeight={700}>
            Авторизация
          </Typography>

          <Field
            label="Логин"
            value={login.contract}
            onChange={login.chagheContract}
            disabled={login.loading}
            error={login.error}
            helperText={login.helpText}
          />
          <Field
            label="Пароль"
            isPassword
            value={login.password}
            onChange={login.chaghePassword}
            disabled={login.loading}
            error={login.error}
            helperText={login.helpText}
          />

          <Box mt={3} display="grid">
            <Button
              variant="contained"
              type="submit"
              disabled={login.buttonDisable}
            >
              Войти
            </Button>
          </Box>
        </Box>
      </Box>
      <Button style={{ position: "fixed" }} onClick={login.testData}>
        test
      </Button>
      {login.loading ? (
        <LinearProgress
          style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        />
      ) : null}
    </>
  )
})
