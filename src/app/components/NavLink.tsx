import React from 'react'
import { TabsContext } from './TabsContext'
interface INavLink {
  children?: any
  isActive: boolean
  activeKey: string
  variant?: string
}

class NavLink extends React.Component<INavLink> {
  static contextType = TabsContext
  constructor(props: INavLink) {
    super(props)
  }
  render(): JSX.Element {
    const className = `${this.props.variant} ${
      this.props.isActive ? 'active' : ''
    }`
    return (
      <TabsContext.Consumer>
        {({ setTabContextId }) => {
          return (
            <div
              onClick={() => {
                setTabContextId(this.props.activeKey)
              }}
              className={className}
            >
              {this.props.children}
            </div>
          )
        }}
      </TabsContext.Consumer>
    )
  }
}
export default NavLink
