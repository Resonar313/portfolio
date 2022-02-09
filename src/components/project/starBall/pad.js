export class Pad {
  constructor (stageWidth, stageHeight, width, height, color) {
    this.width = width;
    this.height = height;
    this.stageWidth = stageWidth;
    this.x = this.stageWidth / 2 - 65;
    this.y = stageHeight - 80;
    this.color = color;

    this.rp = false;
    this.lp = false;


    document.addEventListener('keydown', this.keyDownHandler.bind(this), false);
    document.addEventListener('keyup', this.keyUpHandler.bind(this), false);

  }

  keyDownHandler(e) {
    if(e.keyCode == 39) {
      this.rp = true;
    }
    else if(e.keyCode == 37) {
      this.lp = true;
    }
  };
  keyUpHandler(e) {
    if(e.keyCode == 39) {
      this.rp = false;
    }
    else if(e.keyCode == 37) {
      this.lp = false;
    }
  };



  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.rect(this.x, this.y, this.width, this.height)
      
    if(this.rp && this.x < this.stageWidth-this.width) {
      this.x += 13;
    }
    else if(this.lp && this.x > 0) {
      this.x -= 13;
    }

    ctx.fill();
    ctx.closePath();
  }

}