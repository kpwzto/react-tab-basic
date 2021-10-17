import React from 'react'
import PropTypes from 'prop-types'
import { TabsProps } from './interfaces'
import { getDefaultActiveKey, map } from './utils'
import Nav from './Nav'
import NavLink from './NavLink'
import TabPanel from './TabPanel'
import TabContent from './TabContent'
import { TabsContext } from './TabsContext'

const propTypes = {
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * @type {string|number}
   * Default active tab key
   */
  defaultActiveKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * @type {string}
   * custom css class
   */
  variant: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element]).isRequired,
}

const defaultProps = {
  variant: 'tabs',
  children: null,
}

interface State {
  tabContextId: string
  setTabContextId: (tabId: string) => string
}

export class Tabs extends React.Component<TabsProps, State> {
  static contextType = TabsContext
  static defaultProps = defaultProps
  static propsTypes = propTypes
  constructor(props: TabsProps) {
    super(props)
    const {
      children,
      activeKey = getDefaultActiveKey(children),
      defaultActiveKey,
    } = props

    this.state = {
      tabContextId: defaultActiveKey ? defaultActiveKey : activeKey,
      setTabContextId: (tabId: string): string => {
        return tabId
      },
    }
    this.setTabContextId = this.setTabContextId.bind(this)
  }
  setTabContextId(tabId: string): string {
    this.setState(() => ({
      tabContextId: tabId,
    }))
    return tabId
  }
  render(): JSX.Element {
    return (
      <TabsContext.Provider
        value={{
          tabContextId: this.state.tabContextId,
          setTabContextId: this.setTabContextId,
        }}
      >
        <TabsContext.Consumer>
          {({ tabContextId }) => {
            return (
              <React.Fragment>
                <Nav {...this.props}>
                  {map(this.props.children, (child) => {
                    const { title, ...props } = child.props
                    return (
                      <NavLink
                        {...props}
                        isActive={
                          tabContextId === child.props.activeKey ? true : false
                        }
                      >
                        {title}
                      </NavLink>
                    )
                  })}
                </Nav>
                <TabPanel>
                  {map(this.props.children, (child) => {
                    const childProps = { ...child.props }
                    delete childProps.title
                    return (
                      <TabContent
                        isActive={
                          tabContextId === childProps.activeKey ? true : false
                        }
                        {...childProps}
                      ></TabContent>
                    )
                  })}
                </TabPanel>
              </React.Fragment>
            )
          }}
        </TabsContext.Consumer>
      </TabsContext.Provider>
    )
  }
}
