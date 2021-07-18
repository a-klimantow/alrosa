import superagent from "superagent"

type Params = {
  url: string
  method?: "get" | "post"
}

export const useRequest = ({ url, method = "get" }: Params) => {
  const type = localStorage.getItem("token_type")
  const token = localStorage.getItem("access_token")

  return superagent[method](`/api/v1/${url}`)
    .type("application/json")
    .set("Authorization", `${type} ${token}`)
}
