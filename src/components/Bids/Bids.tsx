import { observer, useLocalObservable } from "mobx-react-lite"
import {
  Paper,
  Typography,
  Modal,
  Stack,
  TextareaAutosize,
  Button,
  Box,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

import { AddButton, CloseButton, Card } from "components"
import { useBids } from "./useBids"

const modalState = {
  isOpen: false,
  value: "",

  toggleOpen() {
    this.isOpen = !this.isOpen
    this.value = ""
  },

  changeValue(value: string) {
    this.value = value
  },
}

export const Bids = observer(() => {
  const cls = useStyles()
  const { total, items, createData } = useBids()
  const modal = useLocalObservable(() => modalState)

  return (
    <>
      <Paper className={cls.root}>
        <div className={cls.header}>
          <Typography variant="h3">Заявки</Typography>
          <Typography color="primary.main">{total}</Typography>
          <AddButton onClick={modal.toggleOpen} />
        </div>
        <div className={cls.divider} />
        <div className={cls.list}>
          {items.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </Paper>
      <Modal
        open={modal.isOpen}
        onClose={modal.toggleOpen}
        className={cls.modal}
      >
        <Paper className={cls.modalBody}>
          <header>
            <Typography variant="h5">Создать заявку</Typography>
            <CloseButton onClick={modal.toggleOpen} />
          </header>
          <Box sx={{ display: "grid", gap: 1 }}>
            <Typography variant="caption">Объект поставки</Typography>
            <TextareaAutosize
              autoFocus
              minRows={10}
              className={cls.textarea}
              value={modal.value}
              onChange={(e) => modal.changeValue(e.target.value)}
            />
          </Box>
          <Stack direction="row" spacing={1}>
            <Button variant="outlined" onClick={modal.toggleOpen}>
              Отменить
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                createData(modal.value)
                modal.toggleOpen()
              }}
            >
              Создать
            </Button>
          </Stack>
        </Paper>
      </Modal>
    </>
  )
})

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateRows: "56px auto 1fr",
  },
  header: {
    display: "grid",
    gridTemplateColumns: "auto auto 1fr",
    placeItems: "center end",
    gap: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  },

  divider: {
    minHeight: 4,
    background:
      "linear-gradient(180deg, #DFE0EB 0%, rgba(223, 224, 235, 0) 100%)",
  },
  list: {
    overflow: "auto",
  },
  item: {},
  modal: {
    padding: theme.spacing(1),
    display: "grid",
    placeContent: "center",
  },

  modalBody: {
    minWidth: 512,
    padding: theme.spacing(3),
    display: "grid",
    gap: theme.spacing(3),
    "& > header": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
  textarea: {
    resize: "none",
    outline: 0,
    padding: theme.spacing(2),
  },
}))
