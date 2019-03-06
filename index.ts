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

const updateReadout = e => {
    const readout = document.getElementById('data-readout');
    let text = [];
        text.push("Ang: " + e.touches[0].altitudeAngle);
        text.push("Az: " + e.touches[0].azimuthAngle);
        text.push("X: " + e.touches[0].clientX);
        text.push("rX: " + e.touches[0].radiusX);
        text.push("Y: " + e.touches[0].pageY);
        text.push("rY: " + e.touches[0].radiusY);
        text.push("f: " + e.touches[0].force);
     readout.innerHTML = text.join(' | ');
};

document.addEventListener('touchmove', e => updateReadout(e));
document.addEventListener('touchmove', e => D.updateTouch(e.touches[0].clientX, e.touches[0].pageY, e.touches[0].force));
document.addEventListener('touchend', e => D.resetTouch());