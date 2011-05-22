var stage = new mtm.Stage('c'),
    ball = new Ball(stage.width/2, stage.height/2),
    angle = 0, 
    range = 100, 
    speed = .2;

stage.shapes.push(ball);

stage.play(function() {
  ball.y = stage.height/2 + Math.sin(angle) * range;
  angle += speed;
});
