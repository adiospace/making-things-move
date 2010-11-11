(function() {
  
  var c = document.getElementById('c'),
    s = new Stage(c),
    targetX = s.W/2,
    ball = new s.Shape({
      x: 0,
      y: s.H/2,
      vx: 0,
      vy: 0,
      spring: 0.1,
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
        ax = dx * ball.spring;

    ball.vx += ax;
    ball.x += ball.vx;

    s.clear();
    s.render();
  });

}());
