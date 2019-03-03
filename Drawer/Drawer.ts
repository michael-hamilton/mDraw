export default class Drawer {
    ctx: any;
    pen: {
        x: number,
        y: number,
        force: number
    };

    constructor(ctx) {
        this.ctx = ctx;
        this.pen = {
            x: null,
            y: null,
            force: null
        }
    }

    updateTouch(x, y, force) {
        this.pen.x = x;
        this.pen.y = y;
        this.pen.force = force;
        this.draw();
    }

    draw() {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(this.pen.x, this.pen.y, this.pen.force*10, this.pen.force*10);
    }
}