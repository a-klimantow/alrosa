import { FC, CSSProperties } from "react"
import {
  Box,
  BoxProps,
  Paper,
  Typography,
  IconButton,
  useTheme,
  TypographyProps,
} from "@material-ui/core"
import { Icon } from "components"

export const Page: FC<BoxProps> = (props) => {
  const { breakpoints } = useTheme()
  return (
    <Box
      sx={{
        gridArea: "P",
        display: "grid",
        gridAutoColumns: "1fr",
        gridTemplateRows: "1fr 1fr",
        gap: 2,
        p: 2,
        gridTemplate: `
        "A B C" 1fr
        "D D D" 1fr / 1fr 1fr 1fr
      `,
        [`${breakpoints.down("md")}`]: {
          gridTemplate: `
          "A"
          "B"
          "C"
        `,
        },
      }}
      {...props}
    />
  )
}

export const Block: FC<BoxProps> = (props) => (
  <Box
    component={Paper}
    sx={{
      display: "grid",
      gridTemplateRows: "56px auto 1fr",
    }}
    {...props}
  />
)

type BlockHeaderProps = {
  name: string
  total: number
  big?: boolean
  colorTotal?: CSSProperties["color"]
  addClick?: () => void
  sortClick?: () => void
}
export const BlockHeader: FC<BlockHeaderProps> = ({
  name,
  total,
  children,
  big,
  colorTotal = "primary",
}) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "auto 1fr auto",
      alignItems: big ? "end" : "center",
      gap: 1,
      pl: 1,
    }}
  >
    <Typography variant={big ? "h2" : "h3"}>{name}</Typography>
    <Typography component="span" color={colorTotal}>
      {total}
    </Typography>
    {children}
  </Box>
)

export const AddButton: FC<{ click?: () => void }> = ({ click }) => (
  <IconButton onClick={click} color="primary">
    <Icon type="plus" />
  </IconButton>
)
export const Divider = () => (
  <Box
    sx={{
      minHeight: 4,
      background:
        "linear-gradient(180deg, #DFE0EB 0%, rgba(223, 224, 235, 0) 100%)",
    }}
  />
)
export const BlockList: FC = (props) => (
  <Box sx={{ display: "grid", overflow: "auto" }} {...props} />
)

type BlockItemProps = {
  number: string
  text: string
  status?: string
}
export const BlockItem: FC<BlockItemProps> = ({
  children,
  number,
  text,
  status,
}) => (
  <Box
    sx={{
      display: "grid",
      gridAutoColumns: "1fr",
      mx: 1,
      py: 2,
      gap: 1,
      gridTemplateAreas: `
          "A A C"
          "B B B"
          ". . ."
        `,
      borderBottom: 1,
      borderColor: "divider",
    }}
  >
    <Typography color="primary" gridArea="A">
      № {number}
    </Typography>
    <Status status={status} />
    <Typography gridArea="B" variant="body2">
      {text}
    </Typography>
    {children}
  </Box>
)

type BlockItemNumberProps = {
  number: string
  status?: string
  big?: boolean
  gridArea?: string
}

export const BlockItemNumber: FC<BlockItemNumberProps> = ({
  number,
  status,
  big,
  gridArea,
}) => (
  <Box
    sx={{
      gridArea,

      display: "grid",
      gridTemplateColumns: "1fr auto",
    }}
  >
    <Typography
      color="primary"
      sx={{
        fontSize: big ? 19 : 13,
        lineHeight: big ? "24px" : "16px",
      }}
    >
      № {number}
    </Typography>
    <Status status={status} />
  </Box>
)

type BlockItemTextProps = {
  big?: boolean
  text: string
  gridArea?: string
}

export const BlockItemText: FC<BlockItemTextProps> = ({
  big = false,
  text,
  gridArea,
}) => (
  <Typography
    sx={{
      gridArea,
      display: "inline-grid",
      "&::before": {
        content: '"Объект поставки"',
        fontSize: 12,
        fontWeight: 500,
        color: "grey.500",
      },
    }}
    variant={big ? "body1" : "body2"}
  >
    {text}
  </Typography>
)

export const BlockChip: FC<{ data: string[]; bold?: boolean }> = ({
  data,
  bold,
}) => (
  <Box sx={{ whiteSpace: "nowrap" }}>
    <Typography variant="caption">{data[0]}</Typography>
    <Typography variant="body2" fontWeight={bold ? 600 : 400}>
      {data[1]}
    </Typography>
  </Box>
)

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
