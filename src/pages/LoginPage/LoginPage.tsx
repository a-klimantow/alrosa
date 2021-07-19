import { observer } from "mobx-react-lite"

import { Logo } from "components"
import { useLoginPage } from "./useLoginPage"
import {
  Page,
  Title,
  Form,
  Field,
  SubmitButton,
  ToggleButton,
  Loader,
} from "./components"

export const LoginPage = observer(() => {
  const login = useLoginPage()

  return (
    <Page>
      <Logo />
      <Form>
        <Title />
        <Field
          label="Логин"
          value={login.contract}
          onChange={login.changeContract}
          helperText={login.errText}
        />
        <Field
          label="Пароль"
          type={login.typeField}
          value={login.password}
          onChange={login.changePassword}
          helperText={login.errText}
          InputProps={{
            endAdornment: (
              <ToggleButton
                hidden={login.hiddenPass}
                click={login.toggleHiddenPass}
              />
            ),
          }}
        />
        <SubmitButton disabled={login.disabled} onClick={login.submit} />
      </Form>
      {login.loading && <Loader />}
    </Page>
  )
})
