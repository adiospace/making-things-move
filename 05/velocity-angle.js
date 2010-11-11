var stage = new mtm.Stage('c'),
    ball = new Ball(50, 100),
    angle = 45,
    speed = 3;

stage.shapes.push(ball);

stage.play(function() {
  var vx = Math.cos(angle) * speed,
      vy = Math.sin(angle) * speed;

  ball.x += vx;
  ball.y += vy;
});
