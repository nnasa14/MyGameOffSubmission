const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContent('2d');

const gameWidth = canvas.width;
const gameHeight = canvas.height;

function gameLoop() {
    ctx.clearRect(0, 0, gameWidth, gameHeight);

    requestAnimationFrame(gameLoop);
}

gameLoop();