import React from 'react'
import styles from './Card.module.css'

import { getModuleClasses, RGBFromCSSColor } from '../../util'

const Card = (props) => {
  const {
    style,
    children,
    dark = false,
    className = '',
    color,
    blur = 4,
    elevation,
    outlined = true,
    transparency = 0.25
  } = props

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
        break
    }
  }

  return (
    <div
      style={{
        ...style,
        background: background(),
        backdropFilter: bgBlur()
      }}
      className={`${getClasses('card')} ${className}`}
    >
      {children}
    </div>
  )
}

Card.displayName = 'GuCard'

export { Card }
