var stage = new mtm.Stage('c'),
    points = [],
    numPoints = 9,
    ctx = stage.ctx;

for (var i=0; i < numPoints; i++) {
  points[i] = {
    x: Math.random() * stage.height,
    y: Math.random() * stage.height
  };
}

ctx.beginPath();

var xc1 = (points[0].x + points[numPoints-1].x) / 2,
    yc1 = (points[0].y + points[numPoints-1].y) / 2;

ctx.moveTo(xc1, yc1); 

for (var i=0; i<numPoints-1; i++) {
  var xc = (points[i].x + points[i+1].x) / 2,
      yc = (points[i].y + points[i+1].y) / 2;

  ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
}

ctx.quadraticCurveTo(points[i].x, points[i].y, xc1, yc1);
ctx.stroke();
