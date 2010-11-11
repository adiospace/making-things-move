(function() {

  var c = document.getElementById('c'),
    s = new Stage(c),
    targetX = s.H/2,
    ballSpec = {
      x: 0,
      y: s.H/2,
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
    }
    ball = new s.Shape(ballSpec);

  s.shapes.push(ball);

  s.loop(function(g) {
    var dx = targetX - ball.x;
    if (Math.abs(dx) < 1) {
      ball.x = targetX;
    } else {
      ball.vx = dx * ball.easing;
      ball.x += ball.vx;
    }

    s.clear();
    s.render();
  });

}());
