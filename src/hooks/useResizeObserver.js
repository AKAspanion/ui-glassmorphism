import React from 'react'

export const useResizeObserver = (element) => {
  const current = element && element.current

  const observer = React.useRef(null)

  const [width, setWidth] = React.useState(0)
  const [height, setHeight] = React.useState(0)

  React.useLayoutEffect(() => {
    if (observer && observer.current && current) {
      observer.current.unobserve(current)
    }

    // eslint-disable-next-line no-undef
    observer.current = new ResizeObserver((entries) => {
      const currentWidth = width
      const currentHeight = height

      entries.forEach((entry) => {
        const { clientHeight, clientWidth } = (entry && entry.target) || {}

        const isWidthChanged = currentWidth !== clientWidth
        const isHeightChanged = currentHeight !== clientHeight

        if (isWidthChanged) {
          setWidth(clientWidth)
        }
        if (isHeightChanged) {
          setHeight(clientHeight)
        }
      })
    })

    observe()

    return () => unobserve()
  }, [current])

  const observe = () => {
    if (isObserverValid()) {
      observer.current.observe(element.current)
    }
  }

  const unobserve = () => {
    if (isObserverValid()) {
      observer.current.unobserve(element.current)
    }
  }

  const isObserverValid = () => {
    return element && element.current && observer.current
  }

  return { width, height }
}
