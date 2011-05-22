var stage = new mtm.Stage('c'),
    ball = new Ball(50, 100),
    vx = 0,
    ax = .2;

stage.shapes.push(ball);

stage.play(function() {
  vx += ax;
  ball.x += vx;
});
