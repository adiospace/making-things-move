(function() {
  
  var c = document.getElementById('c'),
    s = new Stage(c),
    mx=0,
    my=0,
    ballSpec = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      easing: 0.2,
      color: '#f00',
      radius: 20,
      render: function(g){
        g.beginPath();
        g.fillStyle = this.color;
        g.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        g.fill();
      }
    },
    ball = new s.Shape(ballSpec);

  s.shapes.push(ball);

  s.loop(function(g) {
    var dx = mx - ball.x;
    var dy = my - ball.y;
    ball.vx = dx * ball.easing;
    ball.vy = dy * ball.easing;
    ball.x += ball.vx;
    ball.y += ball.vy;

    s.clear();
    s.render();
  });

  c.addEventListener('mousemove', function(e) {
    mx = e.offsetX || e.clientX;
    my = e.offsetY || e.clientY;
  }, false);

}());
