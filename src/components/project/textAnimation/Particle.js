export class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 3;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = (Math.random()*30) + 1;

  }

  draw(ctx) {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
    ctx.closePath();
    ctx.fill();
  }

  update(ctx, mouseX, mouseY) {
    let dx = mouseX - this.x;
    let dy = mouseY - this.y;
    let distance = Math.sqrt(dx*dx + dy*dy);
    let forceX = dx / distance;
    let forceY = dy / distance;
    let maxDistance = 100;
    let force = (maxDistance - distance) / maxDistance;
    let directX = forceX * force * this.density;
    let directY = forceY * force * this.density;
    
    if(distance < 100) {
      this.x -= directX;
      this.y -= directY;
    } else {
      if(this.x !== this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx/10;
      }
      if(this.y !== this.baseY) {
        let dy = this.y - this.baseY;
        this.y -= dy/10;
      }
    }

    this.draw(ctx);
  }
}