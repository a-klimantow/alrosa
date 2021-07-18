import { useMediaQuery } from "@material-ui/core"

export const useIsBig = () => useMediaQuery("(min-width:800px)")
