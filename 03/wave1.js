var stage = new mtm.Stage('c'),
    ball = new Ball(),
    centerY = 150,
    speedX = 1, speedY = .05,
    angle = 0,
    range = 100;

stage.shapes.push(ball);

stage.play(function() {
  ball.x += speedX;
  ball.y = centerY + Math.sin(angle) * range;
  angle += speedY;
});
