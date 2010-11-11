  var stage = new mtm.Stage('c'),
      ball = new Ball(stage.width/2, stage.height/2),
      left = 0, right = stage.width, top_ = 0, bottom = stage.height;

ball.vx = Math.random() * 10 - 5;
ball.vy = Math.random() * 10 - 5;
ball.bounce = -0.7;

stage.shapes.push(ball);

stage.play(function() {
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.x + ball.radius > right){
    ball.x = right - ball.radius;
    ball.vx *= ball.bounce;
  } else if (ball.x - ball.radius < left) {
    ball.x = left + ball.radius;
    ball.vx *= ball.bounce;
  } else if (ball.y + ball.radius > bottom){
    ball.y = bottom - ball.radius;
    ball.vy *= ball.bounce;
  } else if (ball.y - ball.radius < top_) {
    ball.y = top_ + ball.radius;
    ball.vy *= ball.bounce;
  }
});
