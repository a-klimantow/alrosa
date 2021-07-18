import { useMemo } from "react"

import { routes } from "routes"
import { MenuItemProps } from "components"

export const useGetMenu = (): {
  long: MenuItemProps[]
  shot: MenuItemProps[]
} =>
  useMemo(() => {
    const long = routes
      .filter(({ path }) => Boolean(path))
      .map(
        ({ path, icon, name }) => ({ to: path, icon, name } as MenuItemProps)
      )

    const shot = long.filter(({ name }) =>
      /(домашняя|договора|заявки|жалобы)/gi.test(name)
    )

    return { long, shot }
  }, [])
