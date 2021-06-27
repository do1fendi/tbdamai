import { createContext, useState } from "react";

export const StoreContext = createContext()

const StoreContextProvider = (props) => {
  const [logged, setLogged] = useState(false)
  
  return (
    <StoreContext.Provider value={{ logged, setLogged }} >
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider