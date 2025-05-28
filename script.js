const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
const rootStyles = getComputedStyle(document.documentElement);
const primaryColor = rootStyles.getPropertyValue('--primary-color').trim();

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "[]{}()日二çアァイィウエカキクケコサシスセソタチツテトナニヌネノハヒフヘホ.=*+-¦|_012345789Z<>";
const fontSize = 8;
const columns = canvas.width / fontSize;

const drops = Array.from({ length: columns }, () => 1);

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = primaryColor;
  ctx.font = `${fontSize}px monospace`;

  drops.forEach((y, i) => {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, y * fontSize);

    if (y * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  });
}

setInterval(draw, 35);
