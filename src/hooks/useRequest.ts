
import superagent from "superagent"
import { Keys } from "utils"

type Params = {
  url: string
  method?: "get" | "post"
}

const baseUrl =
  process.env["NODE_ENV"] === "development"
    ? ""
    : "https://alros.baccasoft.ru/server"

export const useRequest = ({ url, method = "get" }: Params) => {
  const type = localStorage.getItem(Keys.Type)
  const token = localStorage.getItem(Keys.Token)

  return superagent[method](`${baseUrl}/api/v1/${url}`)
    .type("application/json")
    .set("Authorization", `${type} ${token}`)
}
