var stage = new mtm.Stage('c'),
    shape, shape1, shape2;

for (var i = 0; i<2; i++) {
  shape = new Rect();
  shape.x = Math.random() * stage.width;
  shape.y = Math.random() * stage.height;
  stage.shapes.push(shape);
}

stage.play(function() {
  shape1 = stage.shapes[0];
  shape2 = stage.shapes[1];

  var dx = shape1.x - shape2.x,
      dy = shape1.y - shape2.y,
      dist = Math.sqrt(dx*dx + dy*dy);

  stage.render();
  stage.stop();
  console.log(dist);

}, {auto: false});
