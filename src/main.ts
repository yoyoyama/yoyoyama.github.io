import './assets/css/style.css';
import { centeredRandom, debounce } from './utils';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
const total = import.meta.env.VITE_GITHUB_TOTAL_CONTRIBUTIONS;
const color = '#2BC45E';
const lineWidth = 2;
const width = 16;
const height = 10;

function drawGrass() {
  const x = centeredRandom() * canvas.width;
  const y = centeredRandom() * canvas.height;
  const alpha = centeredRandom();

  ctx.globalAlpha = alpha;
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = color;

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
    drawGrass();
  }
}

function init() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  drawAllGrass();
}

window.addEventListener('resize', debounce(init, 100));

init();
