let canvas = document.getElementById("matrix_bg");
const ctx = canvas.getContext('2d');

window.devicePixelRatio = 2;
var size = 1500;

var scale = window.devicePixelRatio;

canvas.width = Math.floor(size * scale);
canvas.height = Math.floor(size * scale);

ctx.scale(scale, scale);

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const fontSize = 12;
let columns = canvas.width / fontSize;
let rainDrops = [];

for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
}

const draw = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px';

    for (let i = 0; i < rainDrops.length; i++) {
        const text = katakana.charAt(Math.floor(Math.random() * katakana.length));
        ctx.fillStyle = Math.floor(Math.random() * 2) ? '#0F0' : '#3f8de7';
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > (canvas.height/2) && Math.random() > 0.99) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};

// Function to wait for X milliseconds
startMatrix = async() => {
    await sleep(750);

    while (true) {
        draw();
        await sleep(30);
        
    }
}

sleep = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    })
}
startMatrix();