function Rect(x, y) {
  this.x = x || 0;
  this.y = y || 0;
}

Rect.prototype = {
  constructor: Rect,
  x: 0,
  y: 0,
  width: 10,
  height: 10,
  color: "#f00",
  render: function(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
};
