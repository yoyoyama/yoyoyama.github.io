import './assets/css/style.css';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
const total = import.meta.env.VITE_GITHUB_TOTAL_CONTRIBUTIONS;
const color = '#2BC45E';
const lineWidth = 2;
const width = 16;
const height = 10;

function drawGrass(x: number, y: number, alpha: number) {
  ctx.globalAlpha = alpha;

  ctx.beginPath();
  ctx.moveTo(x - width / 2, y - height / 1.25);
  ctx.lineTo(x, y);
  ctx.lineTo(x + width / 2, y - height / 1.25);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y - height);
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

function debounce(callback: () => void, delay: number) {
  let timeoutId: number | undefined;
  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, delay);
  };
}

function init() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = color;

  drawAllGrass();
}

window.addEventListener('resize', debounce(init, 100));

init();
