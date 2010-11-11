(function() {
  
  var c = document.getElementById('c'),
    s = new Stage(c),
    targetX = s.W/2,
    targetY = s.H/2,

    ball = new s.Shape({
      x: s.H/2,
      y: 0,
      vx: 50,
      vy: 0,
      spring: 0.2,
      friction: 0.95,
      color: '#f00',
      radius: 20,
      render: function(g){
        g.beginPath();
        g.fillStyle = this.color;
        g.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        g.fill();
      }
    });

  s.shapes.push(ball);

  s.loop(function(g) {
    var dx = targetX - ball.x,
      dy = targetY - ball.y,
      ax = dx * ball.spring,
      ay = dy * ball.spring;

    ball.vx += ax;
    ball.vy += ay;
    ball.vx *= ball.friction;
    ball.vy *= ball.friction;
    ball.x += ball.vx;
    ball.y += ball.vy;

    s.clear();
    s.render();
  });

}());
