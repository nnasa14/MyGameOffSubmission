const objects = [];

class Treats {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    update() {
        this.y += 2; // falling speed
    }

    draw() {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}