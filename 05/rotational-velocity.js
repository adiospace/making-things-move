var stage = new mtm.Stage('c'),
    arrow = new Arrow(stage.width/2, stage.height/2),
    vr = 20;

stage.shapes.push(arrow);

stage.play(function() {
  arrow.radians += vr * Math.PI/180;
});
