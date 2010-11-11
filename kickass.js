/*
  kickass Library v0.1
*/

(function(global) {
  //kickass object
  var ka = {};

  // kind of a leaky canvas wrapper
  // todo: need repairing
  ka.Stage = function (canvasId) {
    var 
    //canvas object
    c = document.getElementById(canvasId),
    //canvas context aka graphics
    g = c.getContext('2d'),
    //canvas width
    W = c.width,
    //canvas height
    H = c.height,
    //main interval timer
    T,
    // frame rate
    FR = 24,
    // frame rate in miliseconds
    MS = 1000/FR,
    //things to render
    shapes = [],
    //loop callback
    loopCb;

    //clear all canvas
    function clear() {
      g.clearRect(0, 0, W, H);
    }

    //render all the shapes
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
      //make start public
      this.start = start;
    }

    //start main loop
    function start(cb) {
      if (!T) {
        loopCb = cb || loopCb;
        T = setInterval(function() {loopCb(g);}, MS);
      }
    }

    //public properties and methods
    this.c = c;
    this.g = g;
    this.W = W;
    this.H = H;
    this.shapes = shapes;
    this.clear = clear;
    this.render = render;
    this.loop = loop;
    this.stop = stop;
  }

  global.ka = ka;
}(window));
