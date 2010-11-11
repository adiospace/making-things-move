/*
  Stage v0.1
*/

function Stage(canvas) {

  var c = canvas, //canvas object
  //canvas context aka graphics
  g = c.getContext('2d'),
  //canvas width
  W = c.width,
  //canvas height
  H = c.height,
  //ghost canvas
  gc = document.createElement('canvas'),
  //ghost context
  gg = gc.getContext('2d'),
  //main interval timer
  T,
  // frame rate
  FR = 24,
  // frame rate in miliseconds
  MS = 1000/FR,
  //things to render
  shapes = [],
  //only on selected shape at a time for now;
  //also takes care of startDrag/stopDrag combo
  selectedShape,
  //loop callback
  loopCb;

  gc.width = c.width;
  gc.height = c.height;

  //clear canvas
  function clear(context) {
    var ctx = context || g;
    ctx.clearRect(0, 0, W, H);
  }

  //render all shapes
  function render() {
    for (var i = 0; i < shapes.length; i++) {
      shapes[i].render(g);
    }
  }

  // main loop
  function loop(cb) {
    loopCb = cb;
    start();
  }

  //stop main loop
  function stop() {
    T = clearInterval(T);
  }

  //start main loop
  function start(cb) {
    if (!T) {
      loopCb = cb || loopCb;
      T = setInterval(function() {loopCb(g);}, MS);
    }
  }

  // get shape by x,y points
  function getSelected(x, y) {
    clear(gg);

    for (var i = shapes.length-1; i >= 0; i--) {
      var shape = shapes[i];
      shape.render(gg);
      if(gg.isPointInPath(x, y)) {
        shape.offsetX = x - shape.x;
        shape.offsetY = y - shape.y;
        shape.x = x - shape.offsetX;
        shape.y = y - shape.offsetY;
        clear(gg);
        return shape;
      }
    }
  }

  function Shape(spec) {
    for(var prop in spec) {
      this[prop] = spec[prop];
    }
  }
  Shape.prototype = {
    constructor: Shape,
    x: 10,
    y: 10,
    color: "#000",
    isDrag: false,
    startDrag: function() {
      //clear(gg);
      this.isDrag = true;
      if(selectedShape) {
        c.removeEventListener('mousemove', selectedShape._drag, false);
      }
      selectedShape = this;
      c.addEventListener("mousemove", (function(selected) {
        selected._drag = function(e) {
          var mx = e.offsetX || e.clientX;
          var my = e.offsetY || e.clientY;
          selected.x = mx - selected.offsetX;
          selected.y = my - selected.offsetY;
        }
        return selected._drag;
      })(this), false);
    },
    stopDrag: function() {
      this.isDrag = false;
      c.removeEventListener('mousemove', selectedShape._drag, false);
      selectedShape = undefined;
    }
  }

  //public properties and methods
  this.W = W;
  this.H = H;
  this.shapes = shapes;
  this.clear = clear;
  this.render = render;
  this.loop = loop;
  this.start = start;
  this.stop = stop;
  this.getSelected = getSelected;
  this.Shape = Shape;
}
