var BezierChar = function(posX, posY) {
    this.posX = posX
    this.posY = posY
    this.cachedX = posX
    this.cachedY = posY

    this.fontSize = '200px'
    this.bufferCanvas = document.createElement('canvas')
    this.bufferCtx = this.bufferCanvas.getContext('2d')
    this.positions = []
    this.animPositions = []
    this.inited = false

    //document.body.appendChild(this.bufferCanvas)
    this.bufferCanvas.width = window.innerWidth
    this.bufferCanvas.height = window.innerHeight

    this.char = null
  };

  BezierChar.prototype.update = function (char) {
    this.char = char
    this.positions = []
    let { bufferCtx: ctx } = this
    ctx.clearRect(0, 0, this.bufferCanvas.width, this.bufferCanvas.height)
    ctx.save()
    ctx.font = `${this.fontSize} Arial`
    ctx.strokeStyle = '#111'
    ctx.lineWidth = 3
    ctx.strokeText(this.char, this.posX, this.posY)
    ctx.restore()

    let imageData = ctx.getImageData(0, 0, this.bufferCanvas.width, this.bufferCanvas.height)
    let buffer32 = new Uint32Array(imageData.data.buffer)
    let grid = 5

    for (let y = 0; y <= canvas.height; y += grid) {
      for (let x = 0; x <= canvas.width; x += grid) {
        if (buffer32[y * width + x]) {
          this.positions.push({ x: x + Math.random() * 2 - 1, y: y + Math.random() * 3 - 1.5 })
          if (!this.inited) this.animPositions.push({ x, y, vx: 0, vy: 0 })
        }
      }
    }
    this.inited = true
    return this
  };

  BezierChar.prototype.render = function (ctx) {
    ctx.save()
    ctx.strokeStyle = '#fff'
    ctx.lineWidth = 1.5
    let { x, y } = this.animPositions[0]
    ctx.beginPath()
    ctx.moveTo(x, y)
    this.animPositions.forEach((pos, i) => {
      let nextPos = this.animPositions[i + 1]
      let ctrlPoint = { x: 0, y: 0 }
      if (nextPos) {
        ctrlPoint.x = (pos.x + nextPos.x) / 2
        ctrlPoint.y = (pos.y + nextPos.y) / 2
        ctx.quadraticCurveTo(pos.x, pos.y, ctrlPoint.x, ctrlPoint.y)
      }
      if (this.positions[i]) {
        pos.vx += (this.positions[i].x - pos.x) * 0.2
        pos.vy += (this.positions[i].y - pos.y) * 0.2
      } else {
        pos.vx += (this.cachedX - pos.x) * 0.2
        pos.vy += (this.cachedY - pos.y) * 0.2
      }
      pos.vx *= 0.85
      pos.vy *= 0.85
      pos.x += pos.vx
      pos.y += pos.vy
    })
    ctx.stroke()
    ctx.restore()
  };

  BezierChar.prototype.resize = function(posX, posY, width, height) {
      this.posX = posX
      this.posY = posY
      this.bufferCanvas.width = width
      this.bufferCanvas.height = height
  };


var getTime = () => {
  let date = new Date()
  // let 24hours = date.getHours()
  var hrs = date.getHours();
  if (hrs > 12) {
      hrs -= 12;
  } else if (hrs === 0) {
     hrs = 12;
  }

  let hours = hrs.toString()
  let minutes = date.getMinutes().toString()
  let seconds = date.getSeconds().toString()

  let hoursArray = []
  let minutesArray = []
  let secondsArray = []

  if (hours.toString().length === 1) {
    hoursArray.push('0')
    hoursArray.push(hours)
  } else {
    hoursArray.push(hours.split('')[0])
    hoursArray.push(hours.split('')[1])
  }
  if (minutes.toString().length === 1) {
    minutesArray.push('0')
    minutesArray.push(minutes)
  } else {
    minutesArray.push(minutes.split('')[0])
    minutesArray.push(minutes.split('')[1])
  }
  if (seconds.toString().length === 1) {
    secondsArray.push('0')
    secondsArray.push(seconds)
  } else {
    secondsArray.push(seconds.split('')[0])
    secondsArray.push(seconds.split('')[1])
  }

  return [
    hoursArray,
    minutesArray,
    secondsArray
  ]

}


var canvas = document.createElement('canvas')
var ctx = canvas.getContext('2d')

var width = canvas.width = window.innerWidth
var height = canvas.height = window.innerHeight
document.body.appendChild(canvas)


ctx.fillStyle = '#111'

var bezierChars = [
  new BezierChar(width / 2 - 100 - 300, height / 2).update('0'),
  new BezierChar(width / 2 - 100 - 200, height / 2).update('0'),
  new BezierChar(width / 2 - 100 - 100, height / 2).update(':'),
  new BezierChar(width / 2 - 100 - 000, height / 2).update('0'),
  new BezierChar(width / 2 - 100 + 100, height / 2).update('0'),
  new BezierChar(width / 2 - 100 + 200, height / 2).update(':'),
  new BezierChar(width / 2 - 100 + 300, height / 2).update('0'),
  new BezierChar(width / 2 - 100 + 400, height / 2).update('0')
]

var updateChars = function () {
  let time = getTime()
  let hours = time[0]
  let minutes = time[1]
  let seconds = time[2]
  bezierChars[0].update(hours[0])
  bezierChars[1].update(hours[1])
  bezierChars[2].update(":")
  bezierChars[3].update(minutes[0])
  bezierChars[4].update(minutes[1])
  bezierChars[5].update(":")
  bezierChars[6].update(seconds[0])
  bezierChars[7].update(seconds[1])
}

var resize = function () {
  width = canvas.width = window.innerWidth
  height = canvas.height = window.innerHeight
  BezierChars[0].resize(width / 2 - 100 - 300, height / 2, width, height)
  BezierChars[1].resize(width / 2 - 100 - 200, height / 2, width, height)
  BezierChars[2].resize(width / 2 - 100 - 100, height / 2, width, height)
  BezierChars[3].resize(width / 2 - 100 - 000, height / 2, width, height)
  BezierChars[4].resize(width / 2 - 100 + 100, height / 2, width, height)
  BezierChars[5].resize(width / 2 - 100 + 200, height / 2, width, height)
  BezierChars[6].resize(width / 2 - 100 + 300, height / 2, width, height)
  BezierChars[7].resize(width / 2 - 100 + 400, height / 2, width, height)
}


window.addEventListener('resize', resize);

var renderFrame = function () {
  ctx.fillRect(0, 0, width, height)
  bezierChars.forEach((char, i) => {
    char.render(ctx)
  })
  window.requestAnimationFrame(renderFrame)
}

setInterval(updateChars, 1000)


renderFrame()