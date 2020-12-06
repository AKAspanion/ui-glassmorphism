import { Children, cloneElement } from 'react'

export const isMyReactComponent = (component) => {
  let componentName = ''
  if (component && component.type && typeof component.type !== 'string') {
    componentName = component.type.displayName
  }
  return componentName && componentName.includes('Gu')
}

export const passDownProp = (children, props, propName) => {
  return Children.map(children, (child) => {
    if (isMyReactComponent(child)) {
      const newProps = {
        ...child.props
      }

      if (typeof propName === 'string') {
        if (props[propName] !== undefined) {
          newProps[propName] =
            child.props[propName] === undefined
              ? props[propName]
              : child.props[propName]
        }
      } else if (Array.isArray(propName)) {
        propName.forEach((prop) => {
          if (props[prop] === undefined) return

          newProps[prop] =
            child.props[prop] === undefined ? props[prop] : child.props[prop]
        })
      }
      return cloneElement(child, newProps)
    } else {
      return child
    }
  })
}
