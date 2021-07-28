import { FC } from "react"
import { Box } from "@material-ui/core"

export const Status: FC<{ status?: string }> = ({ status = "" }) => (
  <Box
    data-status={status}
    sx={{
      display: "inline-grid",
      placeContent: "center",
      placeItems: "center",
      placeSelf: "center end",
      gridTemplateRows: "24px",
      backgroundColor: "info.light",
      color: "info.main",
      fontSize: 11,
      px: 1,
      borderRadius: 12,
      whiteSpace: "nowrap",

      "&::before": {
        content: "attr(data-status)",
      },

      "&[data-status='']": {
        visibility: "hidden",
      },

      "&[data-status='В работе']": {
        backgroundColor: "warning.light",
        color: "warning.main",
      },
      "&[data-status='Закрыта']": {
        backgroundColor: "success.light",
        color: "success.main",
      },
    }}
  />
)
