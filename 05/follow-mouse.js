var stage = new mtm.Stage('c'),
    arrow = new Arrow(stage.width/2, stage.height/2),
    speed = 5,
    mx = 0, my = 0;

stage.shapes.push(arrow);

stage.play(function() {
  var dx = mx - arrow.x,
      dy = my - arrow.y,
      angle = Math.atan2(dy, dx),
      vx = Math.cos(angle) * speed,
      vy = Math.sin(angle) * speed; 

  arrow.x += vx; 
  arrow.y += vy;
  arrow.radians = angle;
});

document.addEventListener('mousemove', function(e) {
  mx = e.offsetX;
  my = e.offsetY;
}, false);
