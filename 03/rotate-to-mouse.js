var stage = new mtm.Stage('c'),
    arrow = new Arrow(stage.width/2, stage.height/2);

stage.shapes.push(arrow);

stage.play();

stage.canvas.addEventListener('mousemove', function (e) {
  var mx = e.offsetX || e.clientX,
      my = e.offsetY || e.clientY,

      dx = mx - arrow.x,
      dy = my - arrow.y;

  arrow.radians = Math.atan2(dy, dx);
}, false);
