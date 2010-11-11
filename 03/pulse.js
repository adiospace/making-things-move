var stage = new mtm.Stage('c'),
    ball = new Ball(stage.width/2, stage.height/2),
    centerScale = 1, 
    angle = 0, 
    range = .5, 
    speed = .1;

stage.shapes.push(ball);

stage.play(function() {
  ball.scale = centerScale + Math.sin(angle) * range;
  angle += speed;
});
