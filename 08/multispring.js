(function() {
  
  var c = document.getElementById('c'),
    s = new Stage(c),
    handles = [],
    nrHandles = 3,
    ball = new s.Shape({
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      spring: 0.1,
      friction: 0.8,
      color: '#f00',
      radius: 20,
      render: function(g){
        g.beginPath();
        g.fillStyle = this.color;
        g.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        g.fill();
      }
    }),
    selected;

  s.shapes.push(ball);

  for(var i=0; i<nrHandles; i++) {
    var handle = new s.Shape({
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      color: '#000',
      radius: 10,
      render: function(g){
        g.beginPath();
        g.fillStyle = this.color;
        g.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        g.fill();
      }
    });
    handle.x = Math.random() * s.W;
    handle.y = Math.random() * s.H;
    handles.push(handle);
    s.shapes.push(handle);
  }

  s.loop(function(g) {
    if (!ball.isDrag){
      for(var i=0; i<nrHandles; i++) {
        var handle = handles[i];
        var dx = handle.x - ball.x;
        var dy = handle.y - ball.y;
        ball.vx += dx * ball.spring;
        ball.vy += dy * ball.spring;
      }

      ball.vx *= ball.friction;
      ball.vy *= ball.friction;

      ball.x += ball.vx;
      ball.y += ball.vy;
    }

    s.clear();
    s.render();

    for(var i=0; i<nrHandles; i++) {
      var handle = handles[i];
      g.beginPath();
      g.moveTo(ball.x, ball.y); 
      g.lineTo(handle.x, handle.y);
      g.stroke();
      g.closePath();
    }
  });

  c.addEventListener("mousedown", mouseDown,false);

  function mouseDown(e) {
    var mx = e.offsetX || e.clientX;
    var my = e.offsetY || e.clientY;
    selected = s.getSelected(mx, my);
    if(!selected) return;

    selected.startDrag();
    c.addEventListener("mouseup", mouseUp, false);
  }

  function mouseUp(e) {
    if(!selected) return;

    selected.stopDrag();
    c.removeEventListener("mouseup", mouseUp, false);
  }

}());
