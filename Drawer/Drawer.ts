export default class Drawer {
    ctx: any;
    pen: {
        drawing: boolean,
        ox: number,
        oy: number,
        cx: number,
        cy: number,
        force: number
    };

    constructor(ctx) {
        this.ctx = ctx;
        this.pen = {
            drawing: false,
            ox: null,
            oy: null,
            cx: null,
            cy: null,
            force: null
        }
    }

    updateTouch(x: number, y: number, force: number) {
        this.pen.ox = this.pen.cx;
        this.pen.oy = this.pen.cy;
        this.pen.cx = x;
        this.pen.cy = y;
        this.pen.force = force;
        this.draw();
    }

    resetTouch() {
        this.pen.drawing = false;
        this.pen.ox = null;
        this.pen.oy = null;
        this.pen.cx = null;
        this.pen.cy = null;
        this.pen.force = null;
    }

    draw() {
        const ox = this.pen.drawing ? this.pen.ox : this.pen.cx;
        const oy = this.pen.drawing ? this.pen.oy : this.pen.cy;

        this.ctx.fillStyle = 'black';
        this.ctx.beginPath();
        this.ctx.moveTo(ox, oy);
        this.ctx.lineTo(this.pen.cx, this.pen.cy);
        this.ctx.lineWidth = this.pen.force*5;
        this.ctx.stroke();
        this.pen.drawing = true;
    }
}