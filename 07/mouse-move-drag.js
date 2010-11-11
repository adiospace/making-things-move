(function() {

  var c = document.getElementById('c'),
  s = new Stage(c),
  ball = new s.Shape({
    x: 100,
    y: 100,
    color: '#f00',
    radius: 40,
    render: function(g){
      g.beginPath();
      g.fillStyle = this.color;
      g.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
      g.fill();
    }
  }),
  selected;
  s.shapes.push(ball);
  c.addEventListener("mousedown", mouseDown, false);

  s.loop(function(){
    s.clear();
    s.render();
  });

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
    c.removeEventListener("mouseup", mouseUp, false);
    selected.stopDrag();
  }

}());
