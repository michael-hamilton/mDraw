import Drawer from './Drawer/Drawer';

const canvas: any = document.getElementById('draw-pane');
canvas.addEventListener('touchmove', e => e.preventDefault());

const setupCanvas = canvas => {
    const dpr = window.devicePixelRatio || 1;
    const boundingRect = canvas.getBoundingClientRect();
    canvas.width = boundingRect.width * dpr;
    canvas.height = boundingRect.height * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    return ctx;
};

const ctx = setupCanvas(canvas);

const D = new Drawer(ctx);

document.addEventListener('touchmove', e => D.updateTouch(e.touches[0].clientX, e.touches[0].pageY, e.touches[0].force));
document.addEventListener('touchend', e => D.updateTouch(null, null, null));