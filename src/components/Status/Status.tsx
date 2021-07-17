import { styled, Box } from "@material-ui/core"

export const Status = styled(Box)(({ theme }) => ({
  "&[data-status]": {
    fontSize: 11,
    lineHeight: "16px",
    fontWeight: 600,
    padding: theme.spacing(0.5, 1.5),
    borderRadius: theme.spacing(1.5),
    color: theme.palette.info.main,
    background: theme.palette.info.light,

    "&::before": {
      content: "attr(data-status)",
    },

    "&[data-status ='В работе']": {
      color: theme.palette.warning.main,
      background: theme.palette.warning.light,
    },

    "&[data-status ='Закрыта'], &[data-status ='Выполнено']": {
      color: theme.palette.success.main,
      background: theme.palette.success.light,
    },
  },
}))
