export class Star {
  constructor(stageWidth, y, spikes, inradius, outradius, speed, color, stageHeight) {
    
    this.y = y;
    this.spikes = spikes;
    this.inradius = inradius;
    this.outradius = outradius;
    this.speed = speed;
    this.color = color;
    const diameter =  this.outradius * 2; 
    this.x = diameter + (Math.random() * stageWidth - diameter)
    this.stageHeight = stageHeight;
  }

  draw(ctx) {
    this.y += this.speed;
    if(this.y < (this.stageHeight / 2)-300){
      this.y += (this.speed-2);
    }
    let rot = Math.PI / 2 * 3;
    let step = Math.PI / this.spikes;
    let x = this.x;
    let y = this.y;
    let outradius = this.outradius;
    let inradius = this.inradius;
    
    // ctx.strokeStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(this.x, this.y-outradius)
    for(let i = 0; i < this.spikes; i++) {
      x = this.x + Math.cos(rot) * outradius;
      y = this.y + Math.sin(rot) * outradius;
      ctx.lineTo(x, y);
      rot += step;

      x = this.x + Math.cos(rot) * inradius;
      y = this.y + Math.sin(rot) * inradius;
      ctx.lineTo(x, y);
      rot += step;
    }
    ctx.lineTo(this.x, this.y-outradius)
    ctx.closePath();
    // ctx.lineWidth = 5;
    // ctx.strokeStyle = "blue";
    // ctx.stroke();
    ctx.fillStyle = this.color;
    ctx.fill();
  }

}