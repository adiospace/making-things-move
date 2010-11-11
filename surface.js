var c = document.getElementById('c'),
    g = c.getContext('2d'),
    WIDTH = c.width;
    HEIGHT = c.height;

function clear(canvas) {
  canvas = canvas || g;
  canvas.clearRect(0, 0, WIDTH, HEIGHT);
}
function on(name, cb, isCapture) {
  c.addEventListener(name, cb, isCapture);
}

function Ball(radius, color){
  this.radius = radius || 40;
  this.color = color || "#ff0000";
  this.x = 0;
  this.y = 0;
}
Ball.prototype = {
  constructor: Ball,
  render : function(canvas, color) {
    canvas = canvas || g;
    canvas.beginPath();
    canvas.fillStyle = color || this.color;
    canvas.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    canvas.fill();
  }
}


var shapes = [];
function render() {
  for (var i = 0; i < shapes.length; i++) {
    shapes[i].render();
  }
}
function beforeRender() {
}
function afterRender() {
}
function loop() {
  clear();
  beforeRender();
  render();
  afterRender();
}


function Arrow(imgSrc) {
  this.x = 0;
  this.y = 0;
  this.angle = 1;
  this.img = new Image();
  this.img.src = imgSrc;
  this.width = 40;
  this.height = 40;
}
Arrow.prototype = {
  constructor : Arrow,
  render: function() {
    g.save();
    g.translate(this.x, this.y);
    g.rotate(this.angle);
    g.drawImage(this.img, -this.width/2, -this.height/2, this.width, this.height);
    g.restore();
  }
}


var interval = setInterval(loop, 40);
function stop() {
  clearInterval(interval);
}


/*
 * drag code
 */
var gc = document.createElement('canvas');
gc.width = c.width;
gc.height = c.height;
var gg = gc.getContext('2d');
var sel = null;
var isDrag = false;
var offsetx, offsety;
function getSel(mx, my) {
  clear(gg);
  for (var i = shapes.length-1; i >= 0; i--) {
    // draw shape onto ghost context
    var shape = shapes[i];
    shape.render(gg, "#000");
    
    // get image data at the mouse x,y pixel
    // var imageData = gg.getImageData(mx, my, 1, 1);
    
    // if the mouse pixel exists, select and break
    //if (imageData.data[3] > 0) {
    if(gg.isPointInPath(mx, my)) {
      sel = shape;
      offsetx = mx - sel.x;
      offsety = my - sel.y;
      sel.x = mx - offsetx;
      sel.y = my - offsety;
      clear(gg);
      return sel;
    }
  }
}
function startDrag(shape) {
  isDrag = true;
  c.addEventListener("mousemove", onDrag, false);
  clear(gg);
}

function stopDrag(shape) {
  isDrag = false;
  c.removeEventListener('mousemove', onDrag, false);
}
function onDrag(e) {
  if(isDrag) {
    var mx = e.offsetX || e.clientX;
    var my = e.offsetY || e.clientY;
    sel.x = mx - offsetx;
    sel.y = my - offsety;
  }
}


