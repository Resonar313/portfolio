
import {
  Ball
} from "./ball.js";

import {
  Pad
} from "./pad.js";

import {
  Star
} from "./star.js";

class App {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.getElementById('body').style.background="#8D59C2";
    this.scoreEL = document.querySelector('#scoreEl');
    this.box = document.querySelector('#box');
    this.yourscore = document.querySelector('#yourscore');
    // document.body.appendChild(this.canvas);
    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();
    this.start = document.querySelector('#start');
    this.box = document.querySelector('#box');

    this.ball = new Ball(this.stageWidth, this.stageHeight, 
      25, 10, "#B1B339");
    this.pad = new Pad(this.stageWidth, this.stageHeight, 130, 20, "#E7D2FC");
    this.stararr = []
    
    this.start.addEventListener('click', () => {
      this.box.style.display = 'none'
      this.init();
      window.requestAnimationFrame(this.animate.bind(this));
    })
    this.spawnStars();
    // this.ani();
    this.score = 0;
  } 

  init() {
    this.ball = new Ball(this.stageWidth, this.stageHeight, 
      25, 10, "#B1B339");
    this.pad = new Pad(this.stageWidth, this.stageHeight, 130, 20, "#E7D2FC");
    this.stararr = [];
    this.score = 0;
    this.scoreEL.innerHTML = this.score;
    this.yourscore.innerHTML = this.score;
  };

  spawnStars() {
    setInterval(() => {
      const y = -10
      const spikes = 5
      const ir = 25
      const or = 40
      const speed = 5
      const color = "#FDFF6B"
      // console.log(this.stararr);
      this.stararr.push(new Star(this.stageWidth, y, spikes, 
        ir, or, speed, color, this.stageHeight))
    }, 100)
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2,2);
  }

  animate(t) {
    this.ani = window.requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.ball.draw(this.ctx, this.stageWidth, this.stageHeight);
    this.pad.draw(this.ctx);
    this.stararr.forEach((star, index) => {
      star.draw(this.ctx)
      const dist = Math.hypot(star.x - this.ball.x, star.y - this.ball.y)
      if (star.y > this.stageHeight) {
        setTimeout(() => {
          this.stararr.splice(index, 1)
        }, 0)
      }
      if(dist - star.inradius - this.ball.radius < 1) {
        this.score += 100;
        this.scoreEL.innerHTML = this.score;
        setTimeout(() => {
          this.stararr.splice(index, 1)
        }, 0)
      }
    })
    if(this.ball.y+this.ball.radius > this.pad.y) {
      if(this.ball.x+this.ball.radius > this.pad.x && 
        this.ball.x - this.ball.radius < this.pad.x + this.pad.width){
          this.ball.vx *= 1;
          this.ball.vy *= -1;
        }
    }
    if(this.ball.y >= this.stageHeight-this.ball.radius) {
      cancelAnimationFrame(this.ani);
      this.box.style.display = 'flex'
      this.yourscore.innerHTML = this.score;
    }

  }

}

// window.onload = () => {
//   new App();
// };

export default App;