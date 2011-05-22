function Arrow(x, y) {
  this.x = x || 0;
  this.y = y || 0;

  this.img.src = "../common/arrow.png";
};
Arrow.prototype = {
  constructor: Arrow,
  x: 0,
  y: 0,
  radians: 0,
  img: new Image(),
  render: function (ctx) {
    var img = this.img, w = img.width, h = img.height;
        
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.radians);
    ctx.drawImage(img, -w/2, -h/2, w, h);
    ctx.restore();
  }
};
