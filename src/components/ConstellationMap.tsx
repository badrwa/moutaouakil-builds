import React, { useEffect, useRef } from 'react';

const ConstellationMap = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: Array<{
      x: number;
      y: number;
      brightness: number;
      twinkle: number;
      size: number;
    }> = [];

    // Generate stars
    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        brightness: Math.random(),
        twinkle: Math.random() * Math.PI * 2,
        size: Math.random() * 2 + 0.5,
      });
    }

    let frame = 0;

    const drawConstellation = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      // Draw constellation lines
      ctx.strokeStyle = 'rgba(99, 150, 255, 0.3)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const opacity = (120 - distance) / 120 * 0.4;
            ctx.globalAlpha = opacity;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw stars
      stars.forEach((star, index) => {
        star.twinkle += 0.05;
        const twinkleEffect = Math.sin(star.twinkle) * 0.5 + 0.5;
        const brightness = star.brightness * twinkleEffect;
        
        // Star glow
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 3
        );
        gradient.addColorStop(0, `hsla(${200 + index % 60}, 70%, 80%, ${brightness})`);
        gradient.addColorStop(0.5, `hsla(${200 + index % 60}, 70%, 60%, ${brightness * 0.5})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.globalAlpha = brightness;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Star core
        ctx.globalAlpha = brightness * 0.8;
        ctx.fillStyle = `hsla(${200 + index % 60}, 80%, 90%, 1)`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(drawConstellation);
    };

    drawConstellation();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-2 opacity-60"
      style={{ background: 'transparent' }}
    />
  );
};

export default ConstellationMap;