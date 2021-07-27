import superagent from "superagent"
import { Keys } from "utils"

type MethodType = "GET" | "POST"

const baseUrl =
  process.env["NODE_ENV"] === "development"
    ? "/"
    : "https://alros.baccasoft.ru/server/"

export const useSuperagent = (url: string, method: MethodType = "GET") => {
  const ACCESS_TOKEN = localStorage.getItem(Keys.Type)
  const TOKEN = localStorage.getItem(Keys.Token)

  return superagent(method, `${baseUrl}api/v1/${url}`)
    .set("Authorization", `${ACCESS_TOKEN} ${TOKEN}`)
    .type("application/json")
}
