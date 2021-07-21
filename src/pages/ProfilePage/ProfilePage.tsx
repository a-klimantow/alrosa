import { observer } from "mobx-react-lite"
import { Button } from "@material-ui/core"

import { PassField } from "components"
import { PageWrap, PageTitle, ContactInfo, PassBlock } from "./componets"
import { useProfilePage } from "./useProfilePage"

export const ProfilePage = observer(() => {
  const profile = useProfilePage()
  return (
    <PageWrap
      desktopTemplate={`
    "PT PT" auto
    " . . " 1fr / 8fr 5fr
  `}
    >
      <PageTitle>Профиль</PageTitle>
      <ContactInfo
        name={profile.data.name}
        email={profile.data.email}
        phone={profile.data.phone}
        address={profile.address}
      />
      <PassBlock>
        <PassField
          label="Старый пароль"
          value={profile.oldPass}
          name="oldPass"
          onChange={(e) => profile.changePassValue("oldPass", e.target.value)}
          {...profile.oldPassText}
        />
        <PassField
          label="Новый пароль"
          value={profile.newPass}
          name="newPass"
          onChange={(e) => profile.changePassValue("newPass", e.target.value)}
          {...profile.correctPassValid}
        />
        <PassField
          label="Подтвердить пароль"
          value={profile.newPassCorrect}
          name="newPassCorrect"
          onChange={(e) =>
            profile.changePassValue("newPassCorrect", e.target.value)
          }
          {...profile.correctPassValid}
        />
        <Button
          variant="contained"
          color="primary"
          disabled={profile.disabledButton}
          onClick={() => profile.postContact()}
        >
          Сохранить
        </Button>
      </PassBlock>
    </PageWrap>
  )
})
