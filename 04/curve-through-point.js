var stage = new mtm.Stage('c'),
    x0 = 100, y0 = 200, 
    x1 = 0, y1 = 0, 
    x2 = 300, y2 = 200;

stage.canvas.addEventListener("mousemove", function(e) {
  var mx = e.offsetX || e.clientX,
      my = e.offsetY || e.clientY,
      ctx = stage.ctx;

  x1 = mx * 2 - (x0 + x2) / 2; 
  y1 = my * 2 - (y0 + y2) / 2;

  stage.clear();

  ctx.beginPath();
  ctx.moveTo(x0, y0); 
  ctx.quadraticCurveTo(x1, y1, x2, y2);
  ctx.stroke();
}, false);
