import React from 'react'
import styles from './Background.module.css'

import { passDownProp, getModuleClasses } from '../../util'
import { useResizeObserver } from '../../hooks'

const Background = (props) => {
  const { style, children, className = '', blur = 100, img } = props

  const bgNode = React.useRef(null)

  const { height, width } = useResizeObserver(bgNode)

  const getClasses = (key) => {
    switch (key) {
      default:
        return getModuleClasses(styles, key)
    }
  }

  const background = () => {
    return img
      ? `url(${img})`
      : `linear-gradient(
          90deg,
          var(--gradient-left) 0%,
          var(--gradient-right) 100%)
        `
  }

  const getChildren = () => {
    return passDownProp(children, props, 'dark')
  }

  return (
    <div
      style={{
        ...style,
        '--gl-background-blur': `${blur}px`,
        '--gl-background-value': background(),
        '--gl-background-width': `${width}px`,
        '--gl-background-height': `${height}px`
      }}
      ref={bgNode}
      className={`${getClasses('gl-background')} ${className}`}
    >
      {getChildren()}
    </div>
  )
}

Background.displayName = 'GuBackground'

export { Background }
