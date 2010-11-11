function Ball(x, y) {
  this.x = x || 0;
  this.y = y || 0;
}

Ball.prototype = {
  constructor: Ball,
  x: 0,
  y: 0,
  radius: 40,
  scale: 1,
  color: "#f00",
  render: function(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius*this.scale, 0, Math.PI*2, false);
    ctx.fill();
  }
};
