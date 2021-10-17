import React from 'react'
/**
 * Iterates through children that are "valid elements".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 */
export function forEach<P = any>(
  children: JSX.Element | undefined | any,
  func: (el: React.ReactElement<P>, index: number) => void
): void {
  let index = 0
  React.Children.forEach(children, (child) => {
    if (React.isValidElement<P>(child)) func(child, index++)
  })
}

export function getDefaultActiveKey(children: React.ReactChild): string {
  let defaultActiveKey = ''
  forEach(children, (child) => {
    if (defaultActiveKey == '') {
      defaultActiveKey = child.props.activeKey
    }
    return
  })
  return defaultActiveKey
}

export function map<P = any>(
  children: JSX.Element | undefined | any,
  func: (el: React.ReactElement<P>, index: number) => any
): JSX.Element {
  let index = 0
  return React.Children.map(children, (child) =>
    React.isValidElement<P>(child) ? func(child, index++) : child
  )
}
