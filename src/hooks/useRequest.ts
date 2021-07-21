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

// ============================================
const createURL = (url: string) => `${baseUrl}/api/v1/${url}`

const ACCESS_TOKEN = localStorage.getItem(Keys.Type)
const TOKEN = localStorage.getItem(Keys.Token)
const CONTENT_TYPE = "application/json"
const AUTH = {
  Authorization: `${ACCESS_TOKEN} ${TOKEN}`,
}

const useConfig = () => {
  const ACCESS_TOKEN = localStorage.getItem(Keys.Type)
  const TOKEN = localStorage.getItem(Keys.Token)
  const CONTENT_TYPE = "application/json"
  const AUTH = {
    Authorization: `${ACCESS_TOKEN} ${TOKEN}`,
  }
  return {
    ACCESS_TOKEN,
    TOKEN,
    CONTENT_TYPE,
    AUTH,
  }
}

export const useSuperAgent = () => {
  return {
    getData: (url: string) =>
      superagent.get(createURL(url)).type(CONTENT_TYPE).set(AUTH),

    postData: (url: string, data: object) =>
      superagent
        .post(createURL(url))
        .type(CONTENT_TYPE)
        .set(AUTH)
        .send(JSON.stringify(data)),
  }
}

export const getData = (url: string) =>
  superagent.get(createURL(url)).type(CONTENT_TYPE).set(AUTH)

export const useGetData = (url: string) => {
  const { CONTENT_TYPE, AUTH } = useConfig()
  return superagent.get(createURL(url)).type(CONTENT_TYPE).set(AUTH)
}

export const usePostData = (url: string) => {
  const { CONTENT_TYPE, AUTH } = useConfig()
  return superagent.post(createURL(url)).type(CONTENT_TYPE).set(AUTH)
}
