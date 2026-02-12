const canvas = document.getElementById('trail-canvas');
const ctx = canvas.getContext('2d');

let dots = [];
const maxDots = 20; // Jumlah ekor trail-nya
const mouse = { x: 0, y: 0 };

// Resize canvas sesuai ukuran layar
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// Track posisi mouse
window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// Class untuk titik-titik trail
class Dot {
  constructor(index) {
    this.x = mouse.x;
    this.y = mouse.y;
    this.index = index;
  }

  draw() {
    // Makin ke ujung ekor, makin kecil ukurannya
    const size = (maxDots - this.index) * 0.8;
    
    ctx.beginPath();
    ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 255, 255, ${1 - this.index / maxDots})`; // Warna cyan transparan
    ctx.fill();
  }

  update() {
    // Efek smooth following (delay)
    if (this.index === 0) {
      this.x = mouse.x;
      this.y = mouse.y;
    } else {
      const prevDot = dots[this.index - 1];
      this.x += (prevDot.x - this.x) * 0.35;
      this.y += (prevDot.y - this.y) * 0.35;
    }
    this.draw();
  }
}

// Inisialisasi titik
for (let i = 0; i < maxDots; i++) {
  dots.push(new Dot(i));
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dots.forEach(dot => dot.update());
  requestAnimationFrame(animate);
}

animate();