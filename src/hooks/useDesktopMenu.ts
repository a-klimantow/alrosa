import { useMemo } from "react"

import { routes } from "routes"
import { IconType } from "components"

export const useDesktopMenu = (): [string, IconType, string][] =>
  useMemo(
    () =>
      routes
        .filter(({ path }) => Boolean(path))
        .map(({ icon, path, name }) => [
          path as string,
          icon as IconType,
          name,
        ]),
    []
  )
