(function() {
  
  var c = document.getElementById('c'),
    s = new Stage(c),
    ball = new s.Shape({
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      spring: 0.1,
      springLength: 100,
      friction: 0.95,
      color: '#f00',
      radius: 20,
      render: function(g){
        g.beginPath();
        g.fillStyle = this.color;
        g.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        g.fill();
      }
    }),
    selected,
    mx = 0, my = 0;

  s.shapes.push(ball);

  s.loop(function(g) {

    var dx = ball.x - mx;
    var dy = ball.y - my;
    var angle = Math.atan2(dy, dx);
    var targetX = mx + Math.cos(angle) * ball.springLength;
    var targetY = my + Math.sin(angle) * ball.springLength;

    ball.vx += (targetX - ball.x) * ball.spring;
    ball.vy += (targetY - ball.y) * ball.spring;

    ball.vx *= ball.friction;
    ball.vy *= ball.friction;

    ball.x += ball.vx;
    ball.y += ball.vy;

    s.clear();
    s.render();

    g.beginPath();
    g.moveTo(ball.x, ball.y); 
    g.lineTo(mx, my);
    g.stroke();
  });

  c.addEventListener("mousemove", mouseMove,false);

  function mouseMove(e) {
    mx = e.offsetX || e.clientX;
    my = e.offsetY || e.clientY;
  }

}());
