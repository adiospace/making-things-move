var stage = new mtm.Stage('c'),
    balls = [],
    count = 20,
    ball;

for (var i=0; i<count; i++) {
  ball = new Ball();
  ball.x = Math.random() * stage.width;
  ball.y = Math.random() * stage.height;
  ball.vx = Math.random() * 2-1;
  ball.vy = Math.random() * 2-1;
  stage.shapes.push(ball);
  balls.push(ball);
}

stage.play(function() {
  for (var i=balls.length-1; i>=0; i--) {
    ball = balls[i];
    ball.x += ball.vx;
    ball.y += ball.vy;

    console.log("works");
    if( ball.x - ball.radius > stage.width ||
        ball.x + ball.radius < 0 ||
        ball.y - ball.radius > stage.height ||
        ball.y + ball.radius < 0) {
      stage.shapes.splice(i, 1);
      balls.splice(i, 1);
      if (balls.length <= 0 ) {
        stage.stop();
      }
    }
  }
});
