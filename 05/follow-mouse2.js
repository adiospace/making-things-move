var stage = new mtm.Stage('c'),
    arrow = new Arrow(stage.width/2, stage.height/2),
    mx = 0, my = 0,
    vx = 0, vy = 0,
    force = 0.5;

stage.shapes.push(arrow);

stage.play(function() {
  var dx = mx - arrow.x,
      dy = my - arrow.y,
      angle = Math.atan2(dy, dx),
      ax = Math.cos(angle) * force,
      ay = Math.sin(angle) * force; 
  
  vx += ax;
  vy += ay;

  arrow.x += vx; 
  arrow.y += vy;
  arrow.radians = angle;
});

document.addEventListener('mousemove', function(e) {
  mx = e.offsetX;
  my = e.offsetY;
}, false);
