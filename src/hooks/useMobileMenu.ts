import { useLocalObservable } from "mobx-react-lite"

export const useMobileMenu = () => {
  const state = useLocalObservable(() => ({
    isOpen: false,
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    },
  }))

  return state
}
