var stage = new mtm.Stage('c');
    ball = new Ball();
    centerX = 200, centerY = 200,
    angle = 0, 
    radius = 50, 
    speed = .1;

stage.shapes.push(ball);

stage.play(function() {
  ball.x = centerX + Math.sin(angle) * radius; 
  ball.y = centerY + Math.cos(angle) * radius; 
  angle += speed; 
});
