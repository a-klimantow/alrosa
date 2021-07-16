import React from "react"
import { routes } from "routes"

const hiddenPaths = ["/login/", "/logout/"]

export const useShowedPath = (): string[] =>
  React.useMemo(
    () =>
      routes
        .filter(
          ({ path }) => Boolean(path) && !hiddenPaths.includes(path as string)
        )
        .map(({ path }) => path as string),
    []
  )
