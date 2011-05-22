var stage = new mtm.Stage('c'),
    shape = new Rect(stage.width/2, stage.height/2);

stage.shapes.push(shape);

stage.canvas.addEventListener("mousemove", function(e) {
  var mx = e.offsetX || e.clientX,
      my = e.offsetY || e.clientY,

      dx = shape.x - mx,
      dy = shape.y - my,
      dist = Math.sqrt(dx*dx + dy*dy);

  stage.cleanRender();
  console.log(dist);
}, false);
