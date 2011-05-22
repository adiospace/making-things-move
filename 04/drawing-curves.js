var stage = new mtm.Stage('c'),
    x0 = 100, y0 = 200, 
    x1 = 0, y1 = 0,
    x2 = 300, y2 = 200;

stage.canvas.addEventListener("mousemove", function(e) {
  var x1 = e.offsetX || e.clientX,
      y1 = e.offsetY || e.clientY,
      ctx = stage.ctx;

  stage.clear();

  ctx.beginPath();
  ctx.moveTo(x0, y0); 
  ctx.quadraticCurveTo(x1, y1, x2, y2);
  ctx.stroke();

}, false);
