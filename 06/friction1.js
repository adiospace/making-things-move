var stage = new mtm.Stage('c'),
    ball = new Ball(stage.width/2, stage.height/2),
    vx = Math.random() * 10 - 5,
    vy = Math.random() * 10 - 5,
    friction = 0.1;

stage.shapes.push(ball);

stage.play(function() {
  var speed = Math.sqrt(vx*vx + vy*vy),
      angle = Math.atan2(vy,vx);

  if (speed > friction) {
    speed -= friction;
  } else {
    speed = 0;
  }

  vx = Math.cos(angle) * speed;
  vy = Math.sin(angle) * speed;
  ball.x += vx;
  ball.y += vy;
});
