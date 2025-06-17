import './assets/css/style.css';
import { centeredRandom, debounce } from './utils';

const avatar = document.querySelector('.avatar') as HTMLDivElement;
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
const total = import.meta.env.VITE_GITHUB_TOTAL_CONTRIBUTIONS;
const grassColor = '#2BC45E';
const grassLineWidth = 2;
const grassWidth = 16;
const grassHeight = 10;

function getGrassPosition(obstacles: DOMRect[]): { x: number; y: number } {
  let x: number, y: number;

  do {
    x = Math.random() * canvas.width;
    y = Math.random() * canvas.height;
  } while (
    // 衝突判定
    obstacles.some(
      (obstacle) =>
        x + grassWidth >= obstacle.x &&
        x <= obstacle.x + obstacle.width &&
        y + grassHeight >= obstacle.y &&
        y <= obstacle.y + obstacle.height,
    )
  );

  return { x, y };
}

function drawGrass(obstacles: DOMRect[]) {
  const { x, y } = getGrassPosition(obstacles);
  const alpha = centeredRandom();

  ctx.globalAlpha = alpha;
  ctx.lineWidth = grassLineWidth;
  ctx.strokeStyle = grassColor;

  ctx.beginPath();
  ctx.moveTo(x - grassWidth / 2, y - grassHeight / 1.25);
  ctx.lineTo(x, y);
  ctx.lineTo(x + grassWidth / 2, y - grassHeight / 1.25);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y - grassHeight);
  ctx.stroke();
}

function drawAllGrass() {
  // 草の障害物
  const avatarRect = avatar.getBoundingClientRect();
  const obstacles = [avatarRect];

  for (let i = 0; i < total; i++) {
    drawGrass(obstacles);
  }
}

function init() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  drawAllGrass();
}

window.addEventListener('resize', debounce(init, 100));

init();
