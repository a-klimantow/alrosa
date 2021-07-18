import { RouteProps } from "react-router-dom"

import { IconType } from "components"
import { NotFoundPage, HomePage, LoginPage, ContractsPage } from "pages"

interface RouteItemType extends RouteProps {
  name: string
  icon: IconType | null
}

export const routes: RouteItemType[] = [
  {
    name: "домашняя страница",
    path: "/",
    icon: "home",
    component: HomePage,
    exact: true,
  },
  {
    name: "договора",
    path: "/contracts/",
    icon: "contract",
    component: ContractsPage,
  },
  {
    path: "/bids/",
    component: HomePage,
    name: "заявки",
    icon: "bid",
  },
  {
    name: "жалобы",
    path: "/complaints/",
    icon: "complaint",
    component: HomePage,
  },
  {
    name: "счета",
    path: "/bills/",
    icon: "bill",
    component: HomePage,
  },
  {
    name: "профиль",
    path: "/profile/",
    icon: "profile",
    component: HomePage,
  },
  {
    name: "поддержка",
    path: "/support/",
    icon: "support",
    component: HomePage,
  },
  {
    name: "выход",
    path: "/login/",
    icon: "logout",
    component: LoginPage,
  },
  {
    name: "404",
    icon: null,
    component: NotFoundPage,
  },
]
