export const RGBFromCSSColor = (color) => {
  var canvas = document.createElement('canvas')

  canvas.id = 'color-canvas'
  canvas.width = 2
  canvas.height = 2
  canvas.style.zIndex = -1
  canvas.style.position = 'absolute'
  canvas.style.border = '1px solid'

  var body = document.getElementsByTagName('body')[0]
  body.appendChild(canvas)

  var ctx = canvas.getContext('2d')
  ctx.fillStyle = color
  ctx.fillRect(0, 0, 2, 2)

  var imgData = ctx.getImageData(0, 0, 2, 2)

  var colorArray = imgData.data.slice(2 * 4, 2 * 4 + 4)

  document.getElementById('color-canvas').remove()

  return [colorArray[0], colorArray[1], colorArray[2]]
}
