var stage = new mtm.Stage('c'),
    ball = new Ball(20, stage.height/2);

stage.shapes.push(ball);

stage.play(function() {
  ball.x++;
});
