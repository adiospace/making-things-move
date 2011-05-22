var stage = new mtm.Stage('c'),
    arrow = new Arrow(stage.width/2, stage.height/2),
    vr = 0,
    thrust = 0,
    vx = 0, vy = 0,
    left = 37, right = 39, up = 38, down = 40;

stage.shapes.push(arrow);

stage.play(function() {
  arrow.radians += vr * Math.PI/180;

  var angle = arrow.radians,
      ax = Math.cos(angle) * thrust,
      ay = Math.sin(angle) * thrust; 

  vx += ax;
  vy += ay;

  arrow.x += vx; 
  arrow.y += vy;
});

document.addEventListener('keydown', function(e) {
  switch(e.keyCode) {
  case left:
    vr = -5;
    break;
  case right:
    vr = 5;
    break;
  case up:
    thrust = 0.2;
    break;
  }
}, false);

document.addEventListener('keyup', function(e) {
  vr = 0;
  thrust = 0;
}, false);
