import React from 'react'
export const TabsContext = React.createContext({
  tabContextId: '',
  setTabContextId: (tabId: string) => {
    return tabId
  },
})
