(function () {
  window.mtm = {};

  function Stage(canvasId) {

    //canvas object
    this.canvas = document.getElementById(canvasId);

    //canvas context aka graphics
    this.ctx = this.canvas.getContext("2d");

    //canvas width
    this.width = this.canvas.width;

    //canvas height
    this.height = this.canvas.height;

    //things to render
    this.shapes = [];

    //ghost canvas - used for selection
    this._gc = document.createElement("canvas");
    this._gc.width = this.width;
    this._gc.height = this.height;
    this._gctx = this._gc.getContext("2d");

    /*
    this.selected
    this._timer - main loop timer
    this._playFn - main loop callback
    */
  }

  Stage.prototype = {
    constructor: Stage,

    //iterate over each shape and call render 
    //passing the stage's context as paramater
    render: function () {
      for (var i = 0; i < this.shapes.length; i++) {
        this.shapes[i].render(this.ctx);
      }
    },

    //clear canvas
    clear: function (ctx) {
      ctx = ctx || this.ctx;
      ctx.clearRect(0, 0, this.width, this.height);
    },

    //do a clear than a render
    cleanRender: function () {
      this.clear();
      this.render();
    },

    //main loop
    play: function (fn, settings) {
      var me = this;

      settings = settings || {};
      settings.framerate = settings.framerate || 24;
      settings._ms = 1000/settings.framerate;

      this._settings = settings;
      this._playFn = fn || this._playFn || function(){};

      this._timer = setInterval(function() {
        me._playFn(me.ctx);
        if (me._settings.auto !== false) {
          me.cleanRender();
        };
      }, this._settings._ms);
    },

    //stop main loop
    stop: function () {
      this._timer = clearInterval(this._timer);
    },
    
    //check if a point is inside a shape
    hitPoint: function (x, y) {
      clear(this._gctx);

      for (var i = this.shapes.length-1; i >= 0; i--) {
        var shape = this.shapes[i];
        shape.render(this._gctx);
        if(this._gctx.isPointInPath(x, y)) {
          shape._offsetX = x - shape.x;
          shape._offsetY = y - shape.y;
          shape.x = x - shape._offsetX;
          shape.y = y - shape._offsetY;
          clear(this._gctx);
          return shape;
        }
      }
    }
  };

  mtm.draggable = {
    color: "#000",
    isDrag: false,
    startDrag: function() {
      this.isDrag = true;
      if(this.selectedShape) {
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
  };

  mtm.Stage = Stage;
})();
