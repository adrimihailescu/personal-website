import React, { useState } from "react"

const defaultState = {
  activePanel: undefined,
  setActivePanel: () => {},
}

const PageState = React.createContext(defaultState)

const StateProvider = ({ children }) => {
  const [activePanel, setActivePanel] = useState(undefined)

  return (
    <PageState.Provider value={[activePanel, setActivePanel]}>
      {children}
    </PageState.Provider>
  )
}

export default PageState

export { StateProvider, PageState }
