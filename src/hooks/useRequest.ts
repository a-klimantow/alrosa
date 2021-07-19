import superagent from "superagent"
import { Keys } from "utils"

type Params = {
  url: string
  method?: "get" | "post"
}

export const useRequest = ({ url, method = "get" }: Params) => {
  const type = localStorage.getItem(Keys.Type)
  const token = localStorage.getItem(Keys.Token)

  return superagent[method](`/api/v1/${url}`)
    .type("application/json")
    .set("Authorization", `${type} ${token}`)
}
