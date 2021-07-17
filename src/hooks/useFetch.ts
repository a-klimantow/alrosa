import { useHistory } from "react-router-dom"
import axios from "axios"
import { LoginSuccess } from "types"

enum Key {
  Access = "access_token",
  Type = "token_type",
}

type UrlStrType = "auth/login" | "contract"

const url = (str: UrlStrType) => `/api/v1/${str}`

export const useFetch = () => {
  const { push } = useHistory()
  const token = localStorage.getItem(Key.Access)
  const type = localStorage.getItem(Key.Type)

  const headers = {
    Authorization: `${type} ${token}`,
    "Content-Type": "application/json",
  }

  return {
    async login(data: { contract: string; password: string }) {
      try {
        const res: LoginSuccess = await axios.post(url("auth/login"), data)
        const { access_token, token_type } = res.data

        localStorage.setItem(Key.Access, access_token)
        localStorage.setItem(Key.Type, token_type)

        push("/")
      } catch (error) {}
    },

    async get<T>(url: string): Promise<T> {
      const response = await fetch(`/api/v1/${url}`, { headers })
      const { error, ...data } = await response.json()

      if (response.ok) {
        return data
      }

      return error
    },
  }
}
