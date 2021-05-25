const canvas = document.getElementById("particle-canavas");
const ctx = canvas.getContext("2d");

let particlesArray;

class Particle {
  constructor(x, y, dirX, dirY, size, color) {
    this.x = x;
    this.y = y;
    this.dirX = dirX;
    this.dirY = dirY;
    this.size = size;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    if (this.x > canvas.width) this.x = 0;
    if (this.x < 0) this.x = canvas.width;
    if (this.y > canvas.height) this.y = 0;
    if (this.y < 0) this.y = canvas.height;

    this.x += this.dirX;
    this.y += this.dirY;
    this.draw();
  }
}

const init = () => {
  particlesArray = [];
  let numOfPartciles = (canvas.height * canvas.width) / 10000;
  for (let i = 0; i < numOfPartciles; i++) {
    let size = 2;
    let x = Math.random() * (canvas.width - size * 2 - size * 2 + size * 2);
    let y = Math.random() * (canvas.height - size * 2 - size * 2 + size * 2);
    let dirX = Math.random() * 1 - 0.5;
    let dirY = Math.random() * 1 - 0.5;
    let color = "#ffffff";

    particlesArray.push(new Particle(x, y, dirX, dirY, size, color));
  }
};

const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
  }
};

init();
animate();
