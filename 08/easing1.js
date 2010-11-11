(function() {

  var c = document.getElementById('c'),
    s = new Stage(c),
    targetX = s.W/2,
    targetY = s.H/2,
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
    ball.vx = (targetX - ball.x) * ball.easing;
    ball.vy = (targetY - ball.y) * ball.easing;
    ball.x += ball.vx;
    ball.y += ball.vy;

    s.clear();
    s.render();
  });

}());
