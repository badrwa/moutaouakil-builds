import React, { useEffect, useRef } from 'react';

const DNAHelix = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let frame = 0;

    const drawHelix = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const helixHeight = canvas.height;
      const radius = 100;
      const speed = 0.02;

      // Draw multiple DNA strands
      for (let strand = 0; strand < 3; strand++) {
        const offsetX = (strand - 1) * 300;
        const offsetPhase = strand * Math.PI * 0.66;

        for (let y = 0; y < helixHeight; y += 8) {
          const angle1 = (y * 0.02) + (frame * speed) + offsetPhase;
          const angle2 = angle1 + Math.PI;

          const x1 = centerX + offsetX + Math.cos(angle1) * radius;
          const x2 = centerX + offsetX + Math.cos(angle2) * radius;

          // Gradient colors
          const progress = y / helixHeight;
          const hue1 = (frame * 2 + y * 0.5 + strand * 120) % 360;
          const hue2 = (hue1 + 180) % 360;

          // Draw DNA bases
          ctx.beginPath();
          ctx.arc(x1, y, 3, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${hue1}, 70%, 60%, ${0.8 - progress * 0.3})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(x2, y, 3, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${hue2}, 70%, 60%, ${0.8 - progress * 0.3})`;
          ctx.fill();

          // Draw connecting lines
          ctx.beginPath();
          ctx.moveTo(x1, y);
          ctx.lineTo(x2, y);
          ctx.strokeStyle = `hsla(${(hue1 + hue2) / 2}, 50%, 50%, ${0.4 - progress * 0.2})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Draw backbone
          if (y > 8) {
            const prevAngle1 = ((y - 8) * 0.02) + (frame * speed) + offsetPhase;
            const prevAngle2 = prevAngle1 + Math.PI;
            const prevX1 = centerX + offsetX + Math.cos(prevAngle1) * radius;
            const prevX2 = centerX + offsetX + Math.cos(prevAngle2) * radius;

            ctx.beginPath();
            ctx.moveTo(prevX1, y - 8);
            ctx.lineTo(x1, y);
            ctx.strokeStyle = `hsla(${hue1}, 60%, 40%, ${0.6 - progress * 0.3})`;
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(prevX2, y - 8);
            ctx.lineTo(x2, y);
            ctx.strokeStyle = `hsla(${hue2}, 60%, 40%, ${0.6 - progress * 0.3})`;
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        }
      }

      frame++;
      requestAnimationFrame(drawHelix);
    };

    drawHelix();

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
      className="fixed inset-0 pointer-events-none z-3 opacity-15"
      style={{ background: 'transparent' }}
    />
  );
};

export default DNAHelix;