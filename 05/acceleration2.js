var stage = new mtm.Stage('c'),
    ball = new Ball(stage.width/2, stage.height/2),
    vx = 0,
    ax = 0;

stage.shapes.push(ball);

stage.play(function() {
  vx += ax;
  ball.x += vx;
});

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 37) { //left
    ax = -0.2;
  } else if (e.keyCode == 39) { //right
    ax = 0.2;
  }
}, false);

document.addEventListener('keyup', function(e) {
  ax = 0;
}, false);
