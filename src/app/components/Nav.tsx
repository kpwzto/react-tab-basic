import React from 'react'
interface INav {
  children?: any
  variant?: string
}
const Nav = ({ children, variant }: INav): JSX.Element => {
  return <div className={variant}>{children}</div>
}
export default Nav
