import {
  Ball
} from "./ball.js";

class App {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    // document.body.appendChild(this.canvas);
    
    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize()
    this.ball = new Ball(this.stageWidth, this.stageHeight, 10);
    this.ballarr = [];

    for(let i=0; i<40; i++) {
      this.ballarr[i] = new Ball(this.stageWidth, this.stageHeight, 10, 10)
    };
    window.requestAnimationFrame(this.animate.bind(this));
  }


  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));
    this.ctx.fillStyle = 'rgba(10, 10, 10, 1)';
    this.ctx.fillRect(0, 0, this.stageWidth, this.stageHeight);
    
    this.ballarr.forEach((ball) => {
      ball.draw(this.ctx, this.stageWidth, this.stageHeight);
    })
    this.collision();
  }

  collision() {
    for(let i=0; i < this.ballarr.length; i++) {
      const b1 = this.ballarr[i];
      for(let j=0; j < this.ballarr.length; j++) {
        const b2 = this.ballarr[j];
        if(i !== j) {
          const dist = Math.sqrt(Math.pow(b1.x - b2.x, 2)
          +Math.pow(b1.y - b2.y, 2));

          if(dist <= b1.radius+b2.radius){
            const p = Math.atan2(b1.y - b2.y, b1.x - b2.x);
            const m1 = b1.mess;
            const m2 = b2.mess;
            const v1 = Math.sqrt(b1.vx*b1.vx + b1.vy*b1.vy);
            const v2 = Math.sqrt(b2.vx*b2.vx + b2.vy*b2.vy);
            const ta1 = Math.atan2(b1.vy, b1.vx);
            const ta2 = Math.atan2(b2.vy, b2.vx);

            const x = (v1*Math.cos(ta1-p)*(m1-m2)+(2*m2*v2*Math.cos(ta2-p))
            /(m1+m2)) * Math.cos(p)+v1*Math.sin(ta1-p)*Math.cos(p+Math.PI/2);
            const y = (v1*Math.cos(ta1-p)*(m1-m2)+(2*m2*v2*Math.cos(ta2-p))
            /(m1+m2)) * Math.sin(p)+v1*Math.sin(ta1-p)*Math.sin(p+Math.PI/2);

            const xx = (v2*Math.cos(ta2-p)*(m2-m1)+(2*m1*v1*Math.cos(ta1-p))
            /(m2+m1)) * Math.cos(p)+v2*Math.sin(ta2-p)*Math.cos(p+Math.PI/2);
            const yy = (v2*Math.cos(ta2-p)*(m2-m1)+(2*m1*v1*Math.cos(ta1-p))
            /(m2+m1)) * Math.sin(p)+v2*Math.sin(ta2-p)*Math.sin(p+Math.PI/2);
            
            b1.update(x, y);
            b2.update(xx, yy);
          }
        }
      }

      b1.draw(this.ctx, this.stageWidth, this.stageHeight);
    }
    
  }
}

// window.onload = () => {
//   new App();
// }

export default App;