var stage = new mtm.Stage('c'),
    ball = new Ball(stage.width/2, stage.height/2),
    vx = Math.random() * 10 - 5,
    vy = Math.random() * 10 - 5,
    friction = 0.9;

stage.shapes.push(ball);

stage.play(function() {
  vx *= friction;
  vy *= friction;
  ball.x += vx;
  ball.y += vy;
});
