import { useHistory } from "react-router-dom"
import axios from "axios"

enum Key {
  Access = "access_token",
  Type = "token_type",
}

const baseUrl =
  process.env["NODE_ENV"] === "development"
    ? ""
    : "https://alros.baccasoft.ru/server"

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
        const res = await axios.post(`${baseUrl}/api/v1/auth/login`, data)
        const { access_token, token_type } = res.data

        localStorage.setItem(Key.Access, access_token)
        localStorage.setItem(Key.Type, token_type)

        push("/")
      } catch (error) {}
    },

    async get<T>(url: string): Promise<T> {
      const response = await fetch(`${baseUrl}/api/v1/${url}`, { headers })
      const { error, ...data } = await response.json()

      if (response.ok) {
        return data
      }

      return error
    },
  }
}
