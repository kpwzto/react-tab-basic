import React from 'react'
interface ITabPanel {
  children?: any
}
const TabPanel = ({ children }: ITabPanel): JSX.Element => {
  return <div className="tab-panels">{children}</div>
}
export default TabPanel
