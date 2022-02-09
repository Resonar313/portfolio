import {
  Particle
} from "./Particle.js";



class App {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    // document.body.appendChild(this.canvas);
    document.getElementById('body').style.background="black";

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    this.mouse = {
      x: undefined,
      y: undefined,
    }
    this.hue = 0;
    this.canvas.addEventListener('click', this.click.bind(this));
    this.canvas.addEventListener('mousemove', this.mousemove.bind(this));
    this.particleArray = [];
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

  init() {
    for(let i=0; i< 3; i++) {
      this.particleArray.push(new Particle(this.mouse.x, this.mouse.y, 
        'hsl(' + this.hue + ', 100%, 50%)'))
    }
  }

  updateParticle() {
    for(let i=0; i<this.particleArray.length; i++) {
      this.particleArray[i].update(this.ctx);

      for(let j=0; j<this.particleArray.length; j++) {
        const dx = this.particleArray[i].x - this.particleArray[j].x;
        const dy = this.particleArray[i].y - this.particleArray[j].y;
        const distance = Math.sqrt(dx*dx + dy*dy);

        if(distance < 100) {
          this.ctx.beginPath();
          this.ctx.strokeStyle = this.particleArray[i].color;
          this.ctx.lineWidth = 0.2;
          this.ctx.moveTo(this.particleArray[i].x, this.particleArray[i].y);
          this.ctx.lineTo(this.particleArray[j].x, this.particleArray[j].y);
          this.ctx.stroke();
          this.ctx.closePath();
        }

      }

      if(this.particleArray[i].size <= 0.3) {
        this.particleArray.splice(i, 1);
        i--;
      }
    }
  }

  click(e) {
    this.mouse.x = e.x;
    this.mouse.y = e.y;
    this.init();
  }

  mousemove(e) {
    this.mouse.x = e.x;
    this.mouse.y = e.y;
    this.init();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // this.ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
    // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.updateParticle();
    this.hue += 5;
    window.requestAnimationFrame(this.animate.bind(this));
  }
}

// window.onload = () => {
//   new App();
// };

export default App;