import {
  Light
} from "./light.js";

class App {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    // document.body.appendChild(this.canvas);
    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();
    this.alpha = 1;
    this.mouseDown = false;
    window.addEventListener('mousedown', () => {
      this.mouseDown = true;
    })
    window.addEventListener('mouseup', () => {
      this.mouseDown = false;
    })
    this.lightarr = []
    this.lights();
    this.radians = 0;
    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2,2);
  }

  lights() {

    for(let i=0; i<400; i++) {
      this.lightarr.push(new Light(this.stageWidth, this.stageHeight, 
        2))
    }

  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));
    this.ctx.fillStyle = `rgba(10, 10, 10, ${this.alpha})`;
    this.ctx.fillRect(0, 0, this.stageWidth, this.stageHeight);

    this.ctx.save();
    this.ctx.translate(this.stageWidth/2, this.stageHeight/2);
    this.ctx.rotate(this.radians);

    this.lightarr.forEach((light) => {
      light.draw(this.ctx)
    })

    this.ctx.restore(); 
    this.radians += 0.008;

    if(this.mouseDown && this.alpha >= 0.03) {
      this.alpha -= 0.01;
    } else if(!this.mouseDown && this.alpha < 1) {
      this.alpha += 0.01;
    }
  }
}

// window.onload = () => {
//   new App();
// };

export default App;