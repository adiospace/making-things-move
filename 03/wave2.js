var stage = new mtm.Stage('c'),
    angle = 0,
    range = 50,
    centerY = 150,
    speedX = 1, speedY = .05,
    posX = 0, posY = 0;

render(stage.ctx, 0, centerY);

stage.play(function(ctx) {
  render(ctx, posX, posY);
}, {auto: false});

function render(ctx, startX, startY) {
  angle += speedY;
  posX += speedX;
  posY = centerY + Math.sin(angle) * range; 

  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(posX, posY);
  ctx.stroke();
}
