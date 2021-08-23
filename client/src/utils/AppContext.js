/* eslint-disable no-undef */
import { createContext, useContext } from "react"

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // The functions in providerVals were passed in from App.js and are 
  // accessible here because of the destructing of "children" above
  // This makes these functions available anywhere the context is accessed
  const providerVals = { appState, setAppState }
  return (
    <AppContext.Provider value={providerVals}>
      {children}
    </AppContext.Provider>
  )
}

const AppConsumer = AppContext.Consumer

export const useAppContext = () => useContext(AppContext);
export { AppContext, AppProvider, AppConsumer }
