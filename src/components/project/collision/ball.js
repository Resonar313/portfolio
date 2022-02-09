export class Ball {
  constructor(stageWidth, stageHeight, radius, mess) {

    this.vx = Math.floor(Math.random() * 6)-3;
    this.vy = Math.floor(Math.random() * 6)-3;
    this.radius = radius
    this.mess = mess;

    const diameter = radius * 2;
    this.x = diameter + (Math.random() * stageWidth - diameter);
    this.y = diameter + (Math.random() * stageHeight - diameter);

    this.colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];
    const z = parseInt(Math.random()*4);
    this.color = this.colors[z];
  }

  draw(ctx, stageWidth, stageHeight) {

    this.x += this.vx;
    this.y += this.vy;

    this.bounce(stageWidth, stageHeight);

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 40;
    ctx.fill();

  }

  bounce(stageWidth, stageHeight) {
    const minX = this.radius; 
    const maxX = stageWidth - this.radius;
    const minY = this.radius;
    const maxY = stageHeight - this.radius;

    if(this.x <= minX || this.x >= maxX) {
      this.vx *= -1;
      this.x += this.vx;
    } else if(this.y <= minY || this.y >= maxY) {
      this.vy *= -1;
      this.y += this.vy;
    }
  }

  update(vx, vy) {
    this.vx = vx;
    this.vy = vy;
  }

}