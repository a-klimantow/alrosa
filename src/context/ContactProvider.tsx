import { observer } from "mobx-react-lite"
import { createContext, useContext } from "react"

import { ContactType } from "types"
import { useContactStore } from "store"

const Context = createContext({} as ContactType)

export const useContactContext = () => useContext(Context)

export const ContactProvider = observer((props) => {
  const { data } = useContactStore()
  return <Context.Provider value={data} {...props} />
})
