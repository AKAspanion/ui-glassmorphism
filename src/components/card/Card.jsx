import React from 'react'
import styles from './Card.module.css'

import { getModuleClasses, RGBFromCSSColor } from '../../util'
import { useResizeObserver } from '../../hooks'

const Card = (props) => {
  const {
    style,
    children,
    dark = false,
    className = '',
    color,
    blur = 4,
    elevation,
    outlined = false,
    transparency = 0.25,
    shineOnHover = false
  } = props

  const shine = React.useRef(null)
  const cardNode = React.useRef(null)

  const { width } = useResizeObserver(cardNode)

  const background = () => {
    if (transparency === 0) return ''

    const colorLight = '255, 255, 255'
    const colorDark = '0, 0, 0'

    let rgbColor = colorLight

    if (dark) {
      rgbColor = colorDark
    }

    if (color) {
      const [r, g, b] = RGBFromCSSColor(color)

      if (r === 0 && g === 0 && b === 0) {
        if (dark) {
          rgbColor = colorDark
        } else {
          rgbColor = colorLight
        }
      } else {
        rgbColor = `${r}, ${g}, ${b}`
      }
    }

    return `rgba(${rgbColor}, ${transparency})`
  }

  const bgBlur = () => {
    if (transparency === 0) return ''

    return `blur(${blur}px)`
  }

  const getClasses = (key) => {
    switch (key) {
      case 'card':
        return getModuleClasses(
          styles,
          `
            gl-card 
            gl-card--${dark ? 'dark' : 'light'}
            ${outlined ? 'gl-card--outlined' : ''}
            ${elevation ? `gl-card--elevation-${elevation}` : ''}
          `
        )
      default:
        return getModuleClasses(styles, key)
    }
  }

  const mouseMoveHandler = (event) => {
    if (!shineOnHover) return

    if (!event || !shine.current) return

    event.preventDefault()
    event.stopPropagation()
    event.nativeEvent.stopImmediatePropagation()

    const { pageX, pageY } = event
    const { x: cardX, y: cardY } = event.target.getBoundingClientRect()

    shine.current.style.top = `${pageY - cardY}px`
    shine.current.style.left = `${pageX - cardX}px`
  }

  return (
    <div
      style={{
        ...style,
        background: background(),
        backdropFilter: bgBlur()
      }}
      ref={cardNode}
      onMouseMoveCapture={mouseMoveHandler}
      className={`${getClasses('card')} ${className}`}
    >
      {shineOnHover && (
        <div
          ref={shine}
          className={getClasses('gl-card-shine')}
          style={{ width: `${width * 2.5}px`, height: `${width * 2.5}px` }}
        />
      )}
      {children}
    </div>
  )
}

Card.displayName = 'GuCard'

export { Card }
