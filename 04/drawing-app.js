var stage = new mtm.Stage('c'),
    c = stage.canvas,
    ctx = stage.ctx;

c.addEventListener("mouseup", mouseUp, false);
c.addEventListener("mousedown", mouseDown, false);

function mouseDown(e) {
  var m = getMousePosition(e);

  ctx.moveTo(m.x, m.y); 
  c.addEventListener("mousemove", mouseMove, false);
}

function mouseUp(e) {
  c.removeEventListener("mousemove", mouseMove, false);
}

function mouseMove(e) {
  var m = getMousePosition(e);

  ctx.lineTo(m.x, m.y); 
  ctx.stroke();
}

function getMousePosition(e) {
  var mx = e.offsetX || e.clientX,
      my = e.offsetY || e.clientY;

  return {x: mx, y: my};
}
