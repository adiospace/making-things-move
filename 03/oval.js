var stage = new mtm.Stage('c'),
    ball = new Ball(),
    centerX = 200, centerY = 200,
    radiusX = 160, radiusY = 80,
    angle = 0, 
    speed = .1;

stage.shapes.push(ball);
stage.play(function() {
  ball.x = centerX + Math.sin(angle) * radiusX; 
  ball.y = centerY + Math.cos(angle) * radiusY; 
  angle += speed; 
});
