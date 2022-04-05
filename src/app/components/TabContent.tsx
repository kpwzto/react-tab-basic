import React from 'react'
interface ITabContent {
  isActive: boolean
  children?: any
  contentClassName?: string
}
const TabContent = ({
  isActive,
  children,
  contentClassName
}: ITabContent): JSX.Element => {
  return (
    <div className={contentClassName} style={{ display: isActive ? 'block' : 'none' }}>
      {children}
    </div>
  )
}
export default TabContent
