(function() {

  var c = document.getElementById('c'),
  s = new Stage(c),

  LEFT = 0, 
  RIGHT = s.W, 
  TOP = 0, 
  BOTTOM = s.H,

  gravity = 0.5,
  selected = null,

  ballSpec = {
    x: s.W/2,
    y: s.H/2,
    oldX: 0,
    oldY: 0,
    vy: -10,
    bounce: -0.7,
    color: '#f00',
    radius: 40,
    isTrown: false,
    render: function(g){
      g.beginPath();
      g.fillStyle = this.color;
      g.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
      g.fill();
    }
  },
  b1 = new s.Shape(ballSpec),
  b2 = new s.Shape(ballSpec);

  b1.vx = Math.random() * 10-5;
  b2.vx = Math.random() * 10-5;

  s.shapes.push(b1);
  s.shapes.push(b2);


  s.loop(function() {
    for(var i=0; i<s.shapes.length; i++) {
      var ball = s.shapes[i];

      if (ball.isThrown) {
        ball.vx = ball.x - ball.oldx;
        ball.vy = ball.y - ball.oldy;
        ball.oldx = ball.x;
        ball.oldy = ball.y;
      } 

      if(!ball.isDrag) {
        ball.vy += gravity;
        ball.x += ball.vx;
        ball.y += ball.vy;
      }

      if( ball.x + ball.radius > RIGHT){
        ball.x = RIGHT - ball.radius;
        ball.vx *= ball.bounce;
      } else if(ball.x - ball.radius < LEFT) {
        ball.x = LEFT + ball.radius;
        ball.vx *= ball.bounce;
      } else if(ball.y + ball.radius > BOTTOM){
        ball.y = BOTTOM - ball.radius;
        ball.vy *= ball.bounce;
      } else if(ball.y - ball.radius < TOP) {
        ball.y = TOP + ball.radius;
        ball.vy *= ball.bounce;
      }
    }

    s.clear();
    s.render();
  });

  c.addEventListener("mousedown", mouseDown,false);

  function mouseDown(e) {
    var mx = e.offsetX || e.clientX;
    var my = e.offsetY || e.clientY;
    selected = s.getSelected(mx, my);
    if(!selected) return;

    selected.oldX = selected.x;
    selected.oldY = selected.y;
    selected.vx = 0;
    selected.vy = 0;
    selected.isThrown = true;

    selected.startDrag();
    c.addEventListener("mouseup", mouseUp, false);
  }

  function mouseUp(e) {
    if(!selected) return;

    c.removeEventListener("mouseup", mouseUp, false);
    selected.isThrown = false;
    selected.stopDrag();
  }

}());
