
export class Light {
  constructor(stageWidth, stageHeight, radius) {
    this.stageWidth = stageWidth + 300;
    this.stageHeight = stageHeight + 300;
    this.x = this.stageWidth * Math.random() - this.stageWidth/2;
    this.y = this.stageHeight * Math.random() - this.stageHeight/2;
    this.radius = radius * Math.random();
    this.colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];
    let z = parseInt(Math.random()*4);
    this.color = this.colors[z];
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 15;
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}