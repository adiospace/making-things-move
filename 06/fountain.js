var stage = new mtm.Stage('c'),
    balls = [],
    count = 200,
    gravity = 0.5,
    ball,
    color,
    left = 0, right = stage.width, top_ = 0, bottom = stage.height;

for (var i=0; i<count; i++) {
  //var color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  color = '#'+Math.floor(Math.random()*0xffffff).toString(16);
  ball = new Ball(stage.width/2, stage.height);
  ball.vx = Math.random() * 2-1;
  ball.vy = Math.random() * -10-10;
  ball.radius = 2;
  ball.color = color;

  stage.shapes.push(ball);
  balls.push(ball);
}

stage.play(function() {
  for (var i=0; i<balls.length; i++) {
    var ball = balls[i];

    ball.vy += gravity;
    ball.x += ball.vx;
    ball.y += ball.vy;

    if (ball.x - ball.radius > right ||
        ball.x + ball.radius < left ||
        ball.y - ball.radius > bottom ||
        ball.y + ball.radius < top_){
      ball.x = stage.width/2;
      ball.y = stage.height;
      ball.vx = Math.random() * 2-1;
      ball.vy = Math.random() * -10-10;
    }
  }
});
