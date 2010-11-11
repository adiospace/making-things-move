var stage = new mtm.Stage('c'),
    ball = new Ball(stage.width / 2, stage.height / 2),
    vx = 0, vy = 0,
    ax = 0, ay = 0,
    left = 37, right = 39, up = 38, down = 40;

stage.shapes.push(ball);

stage.play(function() {
  vx += ax;
  vy += ay;
  ball.x += vx;
  ball.y += vy;
});

document.addEventListener('keydown', function(e) {
  switch(e.keyCode) {
  case left:
    ax = -0.2;
    break;
  case right:
    ax = 0.2;
    break;
  case up:
    ay = -0.2;
    break;
  case down:
    ay = 0.2;
    break;
  }
}, false);

document.addEventListener('keyup', function(e) {
  ax = 0;
  ay = 0;
}, false);
