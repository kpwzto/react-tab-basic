import React from 'react'
interface ITabContent {
  isActive: boolean
  children?: any
  variant?: string
}
const TabContent = ({
  isActive,
  children,
  variant,
}: ITabContent): JSX.Element => {
  return (
    <div className={variant} style={{ display: isActive ? 'block' : 'none' }}>
      {children}
    </div>
  )
}
export default TabContent
