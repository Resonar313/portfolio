
export class Particle
{
  constructor(x, y, color) {
    
    this.x = x;
    this.y = y;
    this.size = Math.random() * 10 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = color;
  }

  update(ctx) { 
    this.x += this.speedX;
    this.y += this.speedY;
    if(this.size > 0.2) {
      this.size -= 0.1;
    }
    this.draw(ctx);
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
    ctx.fill();

  }

}