var stage = new mtm.Stage('c'),
    ball = new Ball(),
    angleX = 0, angleY = 0,
    centerX = 200, centerY = 200,
    speedX = .07, speedY = .11,
    range = 50;

stage.shapes.push(ball);
stage.play(function() {
  ball.x = centerX + Math.sin(angleX) * range; 
  ball.y = centerY + Math.sin(angleY) * range; 
  angleX += speedX; 
  angleY += speedY;
});
