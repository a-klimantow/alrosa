import { Button, Typography, styled } from "@material-ui/core"
import { useHistory } from "react-router-dom"

export const NotFoundPage = () => {
  const { goBack, push } = useHistory()

  return (
    <PageStyled>
      <Typography component="h1" variant="h4">
        Страница не найдена
      </Typography>
      <Button variant="outlined" onClick={() => goBack()}>
        Назад
      </Button>
      <Button variant="contained" onClick={() => push("/")}>
        На главную
      </Button>
    </PageStyled>
  )
}

const PageStyled = styled("main")({
  minHeight: "100vh",
  display: "grid",
  placeContent: "center",
  gridTemplateColumns: "auto auto",
  gridGap: 20,

  "& > h1": {
    gridColumn: "1 / -1",
  },
})
