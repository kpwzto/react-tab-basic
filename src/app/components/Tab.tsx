import PropTypes from 'prop-types'
import { TabProps } from './interfaces'

const propTypes = {
  /**
   * @type {string}
   */
  title: PropTypes.string.isRequired,
  /**
   * @type {string|number}
   * Key for active tab
   */
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  /**
   * @type {string}
   * custom css class
   */
  variant: PropTypes.string,
  children: PropTypes.any,
}

const defaultProps = {
  variant: 'tab-head',
  children: null,
}

export const Tab = ({ children }: TabProps): JSX.Element => {
  return children
}

Tab.propTypes = propTypes
Tab.defaultProps = defaultProps
Tab.displayName = 'Tab'
