import React from 'react'
import { TabsContext } from './TabsContext'
interface INavLink {
  children?: any
  isActive: boolean
  activeKey: string
}

class NavLink extends React.Component<INavLink> {
  static contextType = TabsContext
  constructor(props: INavLink) {
    super(props)
  }
  render(): JSX.Element {
    return (
      <TabsContext.Consumer>
        {({ setTabContextId }) => {
          return (
            <div
              onClick={() => {
                setTabContextId(this.props.activeKey)
              }}
              className={this.props.isActive ? 'active' : ''}
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
