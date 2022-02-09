export class Ball 
{
  constructor(stageWidth, stageHeight, radius, speed, color) 
  {
    this.radius = radius;
    this.vx = speed;
    this.vy = speed;
    this.color = color;

    const diameter = this.radius * 2;
    this.x = diameter + (Math.random() * stageWidth - diameter);
    this.y = (diameter + (Math.random() * stageHeight - diameter))/2;

  }

  draw(ctx, stageWidth, stageHeight) 
  {
    this.x += this.vx;
    this.y += this.vy;
    
    this.bounce(stageWidth, stageHeight);
    
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    // ctx.lineWidth = 20;
    // ctx.strokeStyle = "#CEE8F2";
    // ctx.stroke();
    ctx.fill();
    
  }

  bounce(stageWidth, stageHeight)
  {
    const minX = this.radius;
    const maxX = stageWidth - this.radius;
    const minY = this.radius;
    const maxY = stageHeight - this.radius;

    if (this.x <= minX || this.x >= maxX) {
      this.vx *= -1;
      this.x += this.vx;
      this.color = "#"+Math.round(Math.random() * 0xffffff).toString(16);
    } else if (this.y <= minY) {
      this.vy *= -1;
      this.y += this.vy;
      this.color = "#"+Math.round(Math.random() * 0xffffff).toString(16);
    }
  }

}


