// var canvas = document.createElement('canvas')
var canvas = document.querySelector('canvas')
var context = canvas.getContext('2d')
context.lineWidth = 3;

var posY = 150
var eye_radius = width/12
var width = canvas.width = window.innerWidth
var height = canvas.height = window.innerHeight


// MATHY THINGS
var scale = function(num,mapMin, mapMax) {
    let baseMin = 0
    let baseMax = height

    return ((mapMax - mapMin) * (num - baseMin) / (baseMax - baseMin)) + mapMin;
}

// EVENTS
var onMouseMove = function(event) {
    eye_radius = scale(event.pageY, width/24, width/12)
    posY = scale(event.pageY, height/2, height);
}
window.addEventListener("mousemove", onMouseMove);

var resize = function() {
  width = canvas.width = window.innerWidth
  height = canvas.height = window.innerHeight
}
window.addEventListener("resize", resize);

// RENDER EVERY PAGE REFRESH
var render = function() {
  context.clearRect(0, 0, width, height);
  context.lineWidth = 3;

    // LEFT EYE
  context.beginPath();
  context.arc(width * 0.25, height * 0.25, width/12, 0, 2 * Math.PI, false);
  context.stroke();

    // LEFT EYE IRIS
  context.beginPath();
  context.arc(width * 0.25, height * 0.25, eye_radius, 0, 2 * Math.PI, false);
  context.fill()
  context.stroke();

  // RIGHT EYE
  context.beginPath();
  context.arc(width * 0.75, height * 0.25, width/12, 0, 2 * Math.PI, false);
  context.stroke();

  // RIGHT EYE IRIS
  context.beginPath();
  context.arc(width * 0.75, height * 0.25, eye_radius, 0, 2 * Math.PI, false);
  context.fill()
  context.stroke();


  // MOUTH
  context.lineWidth = 10;
  context.beginPath()
  context.moveTo(width * 0.25, height * 0.75) // starting point. left edge of mouth
  context.quadraticCurveTo(width * 0.5, posY, width * 0.75, height * 0.75)
  context.stroke()

  window.requestAnimationFrame(render)
}
render()