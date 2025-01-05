import './style.css';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
const total = import.meta.env.VITE_GITHUB_TOTAL_CONTRIBUTIONS;
const color = '#2BC45E';
const lineWidth = 2;
const spacing = 4;

function drawGrass(x: number, y: number, alpha: number) {
  ctx.globalAlpha = alpha;

  ctx.beginPath();
  ctx.moveTo(x - spacing, y);
  ctx.lineTo(x - spacing * 2, y - spacing * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y - spacing * 2.5);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x + spacing, y);
  ctx.lineTo(x + spacing * 2, y - spacing * 2);
  ctx.stroke();
}

function drawAllGrass() {
  for (let i = 0; i < total; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const alpha = Math.random() * (1 - 0.1) + 0.1;
    drawGrass(x, y, alpha);
  }
}

function init() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = color;

  drawAllGrass();
}

window.addEventListener('resize', init);

init();
