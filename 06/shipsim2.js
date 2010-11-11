var stage = new mtm.Stage('c'),
    arrow = new Arrow(stage.width/2, stage.height/2),
    vr = 0,
    thrust = 0,
    vx = 0, vy = 0,
    left = 37, right = 39, up = 38, down = 40,
    leftMargin = 0, rightMargin = stage.width,
    topMargin = 0, bottomMargin = stage.height;

arrow.width = arrow.img.width;
arrow.height = arrow.img.height;

stage.shapes.push(arrow);

stage.play(function() {
  arrow.radians += vr * Math.PI/180;

  var angle = arrow.radians,
      ax = Math.cos(angle) * thrust,
      ay = Math.sin(angle) * thrust; 

  vx += ax;
  vy += ay;

  arrow.x += vx; 
  arrow.y += vy;

  if (arrow.x - arrow.width / 2 > rightMargin) {
    arrow.x = leftMargin - arrow.width / 2;
  } else if (arrow.x + arrow.width / 2 < leftMargin) {
    arrow.x = rightMargin + arrow.width / 2;
  } if (arrow.y - arrow.height / 2 > bottomMargin) {
    arrow.y = topMargin - arrow.height / 2;
  } else if (arrow.y < topMargin - arrow.height / 2) {
    arrow.y = bottomMargin + arrow.height / 2;
  }
});

document.addEventListener('keydown', function(e) {
  switch(e.keyCode) {
  case left:
    vr = -5;
    break;
  case right:
    vr = 5;
    break;
  case up:
    thrust = 0.2;
    break;
  }
}, false);

document.addEventListener('keyup', function(e) {
  vr = 0;
  thrust = 0;
}, false);
