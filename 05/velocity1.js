var stage = new mtm.Stage('c'),
    ball = new Ball(50, 100),
    vx = 5;

stage.shapes.push(ball);

stage.play(function() {
  ball.x += vx;
});
