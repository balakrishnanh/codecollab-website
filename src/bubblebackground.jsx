import { useEffect, useRef } from 'react';

const pastelPinks = ['#ffe0e9ff', '#e5b6bd', '#eed8e3', '#ffcfd6', '#f4e0ea'];

class Bubble {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.r = Math.random() * 100 + 100;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.dx = (Math.random() - 0.5) * 4;
    this.dy = (Math.random() - 0.5) * 4;
    this.colorStart = pastelPinks[Math.floor(Math.random() * pastelPinks.length)];
    this.colorEnd = pastelPinks[Math.floor(Math.random() * pastelPinks.length)];
  }

  draw() {
    const grad = this.ctx.createRadialGradient(
      this.x, this.y, this.r * 0.2,
      this.x, this.y, this.r
    );
    grad.addColorStop(0, this.colorStart);
    grad.addColorStop(1, this.colorEnd);

    this.ctx.beginPath();
    this.ctx.fillStyle = grad;
    this.ctx.shadowColor = this.colorEnd;
    this.ctx.shadowBlur = 40;
    this.ctx.globalAlpha = 0.4;
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.globalAlpha = 1;
    this.ctx.shadowBlur = 0;
  }

  attractTo(mouse) {
    const dist = Math.hypot(this.x - mouse.x, this.y - mouse.y);
    if (mouse.x !== null && dist < this.r + 100) {
      this.x += (mouse.x - this.x) * 0.1;
      this.y += (mouse.y - this.y) * 0.1;
    }
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.r > this.canvas.width || this.x - this.r < 0) this.dx *= -1;
    if (this.y + this.r > this.canvas.height || this.y - this.r < 0) this.dy *= -1;

    this.draw();
  }
}

export default function BubbleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const bubbles = Array.from({ length: 8 }, () => new Bubble(canvas, ctx));
    const mouse = { x: null, y: null };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      bubbles.forEach(bubble => {
        bubble.attractTo(mouse);
        bubble.update();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'linear-gradient(135deg, #fbeaea 0%, #ffffff 50%, rgba(160, 44, 44, 0.1) 100%)' }}
    />
  );
} 