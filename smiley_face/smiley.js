// var canvas = document.createElement('canvas')
var canvas = document.querySelector('canvas')
var context = canvas.getContext('2d')
context.lineWidth = 3;

var posY = 150
var smilers = [];

var Smiley = function(offset) {
  this.lineWidth = 3;
  this.mouthLineWidth = 10;
  this.width = canvas.width = window.innerWidth;
  this.height = canvas.height = window.innerHeight;

  this.eye_radius = this.width/12;

  return this;
};

Smiley.prototype.render = function () {
  context.clearRect(0, 0, this.width, this.height);
  context.lineWidth = this.lineWidth;

    // LEFT EYE
  context.beginPath();
  context.arc(this.width * 0.25, this.height * 0.25, this.width/12, 0, 2 * Math.PI, false);
  context.stroke();

    // LEFT EYE IRIS
  context.beginPath();
  context.arc(this.width * 0.25, this.height * 0.25, this.eye_radius, 0, 2 * Math.PI, false);
  context.fill()
  context.stroke();

  // RIGHT EYE
  context.beginPath();
  context.arc(this.width * 0.75, this.height * 0.25, this.width/12, 0, 2 * Math.PI, false);
  context.stroke();

  // RIGHT EYE IRIS
  context.beginPath();
  context.arc(this.width * 0.75, this.height * 0.25, this.eye_radius, 0, 2 * Math.PI, false);
  context.fill()
  context.stroke();


  // MOUTH
  context.lineWidth = this.mouthLineWidth;
  context.beginPath()
  context.moveTo(this.width * 0.25, this.height * 0.75) // starting point. left edge of mouth
  context.quadraticCurveTo(this.width * 0.5, posY, this.width * 0.75, this.height * 0.75)
  context.stroke()

  return this;
};

// MATHY THINGS
var scale = function(num,mapMin, mapMax) {
    let baseMin = 0
    let baseMax = canvas.height

    return ((mapMax - mapMin) * (num - baseMin) / (baseMax - baseMin)) + mapMin;
}

// EVENTS
var onMouseMove = function(event) {
  if (!smilers) return;
  smilers.forEach(function(smiler, index) {
    smiler.eye_radius = scale(event.pageY, smiler.width/24, smiler.width/12)
    posY = scale(event.pageY, smiler.height/2, smiler.height);  
  });
}
window.addEventListener("mousemove", onMouseMove);

var resize = function() {
  smilers.forEach(function(smiler, index) {
    smielr.width = canvas.width = window.innerWidth
    smiler.height = canvas.height = window.innerHeight
  });
}
window.addEventListener("resize", resize);

smilers = [
  new Smiley(),
]

var renderSmiley = function() {
  smilers.forEach(function(smiler, index) {
    smiler.render();
  });

  window.requestAnimationFrame(renderSmiley)
}

renderSmiley()