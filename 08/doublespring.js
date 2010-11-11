(function() {
  
  var s = new Stage(document.getElementById('c')),
    spring = 0.1,
    friction = 0.95,
    springLength = 100,
    selected = null,

    ballSpec = {
      vx: 0,
      vy: 0,
      color: '#f00',
      radius: 20,
      render: function(g){
        g.beginPath();
        g.fillStyle = this.color;
        g.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        g.fill();
      }
    },

    b1 = new s.Shape(ballSpec),
    b2 = new s.Shape(ballSpec);

  b1.x = Math.random() * s.W;
  b1.y = Math.random() * s.H;

  b2.x = Math.random() * s.W;
  b2.y = Math.random() * s.H;

  s.shapes.push(b1);
  s.shapes.push(b2);

  s.loop(function(g) {
    if(!b1.isDrag) {
      springTo(b1, b2);
    }
    if(!b2.isDrag) {
      springTo(b2, b1);
    }

    s.clear();
    s.render();

    g.beginPath();
    g.moveTo(b1.x, b1.y); 
    g.lineTo(b2.x, b2.y);
    g.stroke();

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

  function springTo(a, b) {
    var dx = b.x - a.x;
    var dy = b.y - a.y;
    var angle = Math.atan2(dy, dx);
    var targetX = b.x - Math.cos(angle) * springLength;
    var targetY = b.y - Math.sin(angle) * springLength;

    a.vx += (targetX - a.x) * spring;
    a.vy += (targetY - a.y) * spring;

    a.vx *= friction;
    a.vy *= friction;

    a.x += a.vx;
    a.y += a.vy;
  }

}());
