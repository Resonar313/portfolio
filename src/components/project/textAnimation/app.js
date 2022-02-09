import {
  Particle
} from "./Particle.js";

class App {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    // document.body.appendChild(this.canvas);
    document.getElementById('body').style.background="black";

    window.addEventListener('resize', this.resize.bind(this),false);
    this.resize();

    this.mouse = {
      x: undefined,
      y: undefined,
      radius: 100
    }
    window.addEventListener('mousemove', this.move.bind(this));

    this.ctx.fillStyle = 'white';
    this.ctx.font = '20px Verdana';
    this.ctx.fillText('HELLO', 0, 25);
    this.text = this.ctx.getImageData(0, 0, 500, 500);
    this.adjustX = 5;
    this.adjustY = 5;
    this.pArray = [];
    this.init();
    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2,2);
  }

  move(e) {
    this.mouse.x = e.x;
    this.mouse.y = e.y;
  }

  init() {
    for(let y = 0, y2 = this.text.height; y < y2; y++) {
      for(let x = 0, x2 = this.text.width; x < x2; x++) {
        
        if(this.text.data[(y * 4 * this.text.width)+(x * 4)+3] > 128) {
          let positionX = x + this.adjustX;
          let positionY = y + this.adjustY;
          this.pArray.push(new Particle(positionX * 10, positionY * 10));
        }

      }
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for(let i = 0; i < this.pArray.length; i++) {
      this.pArray[i].update(this.ctx, this.mouse.x, this.mouse.y);
    }
    this.connect();
    window.requestAnimationFrame(this.animate.bind(this));
  }

  connect() {
    let opvalue = 1;
    for(let a = 0; a < this.pArray.length; a++) {
      for(let b = a; b < this.pArray.length; b++) {

        let dx = this.pArray[a].x - this.pArray[b].x;
        let dy = this.pArray[a].y - this.pArray[b].y;
        let dis = Math.sqrt(dx*dx + dy*dy);
        opvalue = 1 - (dis/25);
        
        if(dis < 8) {
          this.ctx.strokeStyle = 'rgba(100, 200, 255,'+opvalue+')';
          this.ctx.lineWidth = 10;
          this.ctx.beginPath();
          this.ctx.moveTo(this.pArray[a].x, this.pArray[a].y);
          this.ctx.lineTo(this.pArray[b].x, this.pArray[b].y);
          this.ctx.stroke();
        }

      }
    }




  }
}

// window.onload = () => {
//   new App();
// }

export default App;